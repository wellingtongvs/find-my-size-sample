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
  product: string;
  language: string;
  size;
  heights;
  weights;
  ages;
  page;

  sizeFinderModalForm;

  @ViewChild('content') content;

  constructor(private fb: FormBuilder, private modal: NgbModal, private findSize: FindSizeService) {
  }

  ngOnInit() {
    this.sizeFinderModalForm = this.fb.group({
      gender: ['MALE', Validators.required],
      height: ['188', Validators.required],
      weight: ['80', Validators.required],
      age: ['35', Validators.required],
      body_shape: ['BOX', Validators.required],
    });

    this.heights = Array.from({length: 40}, (v, k) => k + 151);
    this.weights = Array.from({length: 50}, (v, k) => k + 61);
    this.ages = Array.from({length: 60}, (v, k) => k + 16);
  }

  onSubmit() {
    if (this.sizeFinderModalForm.valid) {
      this.submit();
      this.nextPage();
    } else {
      this.sizeFinderModalForm.console.error();
    }
  }

  open(prod, lang) {
    this.product = prod;
    this.language = lang;
    this.page = 1;
    this.modal.open(this.content, {ariaLabelledBy: 'modal-title'});
  }

  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }

  nextPage() {
    this.page = this.page + 1;
  }

  submit() {
    this.size = '';

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

    this.findSize.getSize(data).subscribe(res => this.size = (res as string).split(' ')[0]);
  }

  onChanges(change) {
    console.log(change);
  }
}
