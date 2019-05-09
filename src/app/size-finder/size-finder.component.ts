import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-size-finder',
  templateUrl: './size-finder.component.html',
  styleUrls: ['./size-finder.component.scss']
})
export class SizeFinderComponent implements OnInit {
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
      console.warn(this.sizeFinderForm.value);
    }
  }

}
