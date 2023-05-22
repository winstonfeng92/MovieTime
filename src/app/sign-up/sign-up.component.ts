import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  registrationForm: FormGroup;
  step = 1;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      key: ['', Validators.required],
      plan: ['', Validators.required],
    });
  }

  nextStep() {
    console.log('proceed')
    this.step++;
  }

  onSubmit() {
    console.log('submit')
    // call service to send registration data to backend
  }


}
