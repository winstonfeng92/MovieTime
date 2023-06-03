import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent {
  access: string | undefined;
  user: string | undefined;
  planForm: FormGroup;

  constructor(private userService: UserService, private authService:AuthService, private formBuilder: FormBuilder) {

    this.planForm = this.formBuilder.group({
      planType: ['', Validators.required]
    });
  }



  ngOnInit() {
    this.userService.access$.subscribe((access) => {
      console.log('ng on init '+ access)
      this.access = access;
    });

    this.userService.user$.subscribe((user) => {
      console.log('ng on init user '+ user)
      this.user = user;
    });
  }

  onSubmit() {
    if(this.user === 'defaultUser') {
      this.userService.setAccess(this.planForm.value.planType)
    }
    else {
      if (this.planForm.valid) {
        // Form is valid, perform your desired action
        // this.access = this.planForm.value.planType;
        this.authService.changeUserType(this.planForm.value.planType).subscribe(
          {
            next: (response: any) => {
              console.log('change success')
              console.log(response)
              console.log(response.role)
              console.log(response.accessToken)
              this.userService.setAccess(response.role)
              localStorage.setItem('accessToken', response.accessToken);

            } 
          }
        );

      } else {
        // Form is invalid, display error message or take appropriate action
      }
    }
  }
}
