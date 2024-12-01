import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css',
})
export class GetInTouchComponent {
  touchForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^01[0125][0-9]{8}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    category: new FormControl('', [Validators.required]),
  });

  get myForm() {
    return this.touchForm;
  }
  submitTouchFrom() {
    if (this.touchForm.valid) {
      console.log(this.touchForm.value);
      this.touchForm.reset();
    } else {
      console.log('invalid');
    }
  }
}
