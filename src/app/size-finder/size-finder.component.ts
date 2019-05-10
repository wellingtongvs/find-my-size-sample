import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SizeFinderModalComponent } from '../size-finder-modal/size-finder-modal.component';

@Component({
  selector: 'app-size-finder',
  templateUrl: './size-finder.component.html',
  styleUrls: ['./size-finder.component.scss']
})
export class SizeFinderComponent implements OnInit {
  @ViewChild('modal') modal: SizeFinderModalComponent;
  sizeFinderForm;

  constructor(private fb: FormBuilder) {
    this.sizeFinderForm = this.fb.group({
      product: ['', Validators.required],
      language: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.sizeFinderForm.valid) {
      this.modal.open(this.sizeFinderForm.value.product, this.sizeFinderForm.value.language);
    }
  }

}
