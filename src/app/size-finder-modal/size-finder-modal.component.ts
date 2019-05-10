import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FindSizeService } from '../find-size.service';

@Component({
  selector: 'app-size-finder-modal',
  templateUrl: './size-finder-modal.component.html',
  styleUrls: ['./size-finder-modal.component.scss'],
  providers: [ FindSizeService ]
})
export class SizeFinderModalComponent implements OnInit {
  // in case of an error, contains the short message to be displayed in the modal
  error: string;
  // if true, show spinning gear
  loading: boolean;
  // aux. variable to define what content should be shown on the modal
  page: number;
  // aux. variable to display correct images for each gender
  gender: string;
  // aux. variables passed by the previous form
  product: string;
  language: string;
  // API call response
  size: string;
  // dropdown options
  heights: number[];
  weights: number[];
  ages: number[];
  // form group
  sizeFinderModalForm;

  // used to access the modal content
  @ViewChild('content') content;

  constructor(private fb: FormBuilder,
              private modal: NgbModal,
              private findSize: FindSizeService) {
  }

  ngOnInit() {
    this.sizeFinderModalForm = this.fb.group({
      gender: ['MALE', Validators.required],
      height: [188, Validators.required],
      weight: [80, Validators.required],
      age: [35, Validators.required],
      body_shape: ['BOX', Validators.required],
    });

    // define arrays for the range of dropdown options for heights, weights and ages
    this.heights = Array.from({length: 41}, (v, k) => k + 150);
    this.weights = Array.from({length: 51}, (v, k) => k + 60);
    this.ages = Array.from({length: 65}, (v, k) => k + 16);

    // set helper variable to show correct images for the default selected gender
    this.gender = 'MALE';
  }

  // opens the modal, setting the value of the product and language
  open(prod, lang) {
    this.product = prod;
    this.language = lang;
    this.page = 1;
    this.modal.open(this.content, {ariaLabelledBy: 'modal-title'});
  }

  // on submit, checks if the form is valid before submitting
  // otherwise, prints an error
  onSubmit() {
    if (this.sizeFinderModalForm.valid) {
      this.submit();
      this.nextPage();
    } else {
      this.sizeFinderModalForm.console.error();
    }
  }

  submit() {
    // clears temporary variables
    this.size = '';
    this.error = '';

    // show spinning gear icon
    this.loading = true;

    // define getSize request data
    const data = {
      product: this.product,
      user_code: 'testuser',
      gender: this.sizeFinderModalForm.value.gender,
      unit: 'METRIC',
      height: this.sizeFinderModalForm.value.height,
      weight: this.sizeFinderModalForm.value.weight,
      age: this.sizeFinderModalForm.value.age,
      body_shape: this.sizeFinderModalForm.value.body_shape,
      cup_cize_country: null,
      underbust_measurement: null,
      cup_size: null,
      fit: 'NORMAL',
      relevant_attributes: []
    };

    // use the findSizeService to call the getSize method
    this.findSize.getSize(data).subscribe(res => {
      // gets size response and formats it to display it as a single character
      this.size = (res as string).split(' ')[0];

      // stop the loading gear
      this.loading = false;
    }, err => {
      // gets the error message to print on screen
      this.error = err.statusText;
      console.log(err);

      // stop the loading gear in case of an error
      this.loading = false;
    });
  }

  // listener for the gender value, changes images when the value changes
  onChangeGender() {
    this.gender = this.sizeFinderModalForm.value.gender;
  }

  // helper function to change content on modal
  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }

  // helper function to change content on modal
  nextPage() {
    this.page = this.page + 1;
  }
}
