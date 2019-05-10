import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SizeFinderModalComponent } from '../size-finder-modal/size-finder-modal.component';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-size-finder',
  templateUrl: './size-finder.component.html',
  styleUrls: ['./size-finder.component.scss']
})
export class SizeFinderComponent implements OnInit {
  // not relevant, used to fix ng-bootstrap bug (ExpressionChangedAfterItHasBeenCheckedError)
  @ViewChild('product') productInput: ElementRef;
  @ViewChild('language') languageInput: ElementRef;

  // used to toggle the modal
  @ViewChild('modal') modal: SizeFinderModalComponent;

  // reactive form group
  sizeFinderForm;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // initialize reactive form group
    this.sizeFinderForm = this.fb.group({
      product: ['', Validators.required],
      language: ['', Validators.required],
    });
  }

  // opens the modal
  onSubmit() {
    // fix for ng-bootstrap bug
    this.productInput.nativeElement.ownerDocument.activeElement.blur();
    this.languageInput.nativeElement.ownerDocument.activeElement.blur();

    // if form is valid, opens the modal
    if (this.sizeFinderForm.valid) {
      this.modal.open(this.sizeFinderForm.value.product, this.sizeFinderForm.value.language);
    }
  }

}
