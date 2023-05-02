import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUser } from 'src/app/models/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  email: string ='';
  password: string = '';
  rememberMe: boolean = false;

  submitted=false;
  //model = new LoginUser(this.email, this.password);


  onSubmit(loginForm: NgForm) {
    this.submitted = true;
    console.log('attempt')
    console.log(loginForm)
    console.log(this.email)
    console.log(this.password)
    if (loginForm.valid) {
      // perform login logic here
      //const encryptedPassword = encryptPassword(this.password);
      // ...
    }
    this.login;
  }

  login() {
    console.log('login attempt')
  }
}
