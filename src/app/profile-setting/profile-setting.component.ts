import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent {
  access: string | undefined;
  planForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {

    this.planForm = this.formBuilder.group({
      planType: ['', Validators.required]
    });
  }



  ngOnInit() {
    this.userService.access$.subscribe((access) => {
      console.log('ng on init '+ access)
      this.access = access;
    });
  }

  onSubmit() {
    if (this.planForm.valid) {
      // Form is valid, perform your desired action
      this.access = this.planForm.value.planType;
    } else {
      // Form is invalid, display error message or take appropriate action
    }
  }
}
