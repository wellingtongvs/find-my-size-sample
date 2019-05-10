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
    this.sizeFinderModalForm = this.fb.group({
      gender: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      age: ['', Validators.required],
      body_shape: ['', Validators.required],
    });

    this.heights = Array.from({length: 40}, (v, k) => k + 151);
    this.weights = Array.from({length: 50}, (v, k) => k + 61);
    this.ages = Array.from({length: 60}, (v, k) => k + 16);
  }

  ngOnInit() {
    this.sizeFinderModalForm.gender = 'MALE';
  }

  onSubmit() {
    if (this.sizeFinderModalForm.valid) {
      this.submit();
    } else {
      this.sizeFinderModalForm.console.error();
    }
    this.nextPage();
  }

  open(product, language) {
    this.product = product;
    this.language = language;
    this.page = 1;
    this.modal.open(this.content, {ariaLabelledBy: 'modal-title'});
  }

  previousPage() {
    this.page = this.page - 1;
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
      body_shape: 'BOX',
      cup_cize_country: null,
      underbust_measurement: null,
      cup_size: null,
      fit: 'NORMAL',
      relevant_attributes: []
    };

    this.findSize.getSize(data).subscribe(res => this.size = res);
  }
}
