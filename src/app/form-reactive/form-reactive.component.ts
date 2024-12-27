import { Component } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css',
})
export class FormReactiveComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });
  submitted = false;

  onSubmit(): void {
    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
