import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-size-finder-modal',
  templateUrl: './size-finder-modal.component.html',
  styleUrls: ['./size-finder-modal.component.scss']
})
export class SizeFinderModalComponent implements OnInit {
  product: string;
  language: string;
  @ViewChild('content') content;

  sizeFinderModalForm;

  constructor(private fb: FormBuilder, private modal: NgbModal) {
    this.sizeFinderModalForm = this.fb.group({
      gender: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(modal) {
    if (this.sizeFinderModalForm.valid) {

    }
    modal.close();
  }

  open(product, language) {
    this.product = product;
    this.language = language;
    this.modal.open(this.content, {ariaLabelledBy: 'modal-title'});
  }
}
