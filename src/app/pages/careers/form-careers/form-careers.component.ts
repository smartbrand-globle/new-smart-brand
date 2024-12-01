import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-careers',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-careers.component.html',
  styleUrl: './form-careers.component.css',
})
export class FormCareersComponent {
  careersForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^01[0125][0-9]{8}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    yearsOfExperience: new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]),
    cv: new FormControl('', [Validators.required]),
  });

  get myForm() {
    return this.careersForm;
  }
  submitCareersFrom() {
    if (this.careersForm.valid) {
      console.log(this.careersForm.value);
      this.careersForm.reset();
    } else {
      console.log('invalid');
    }
  }
}
