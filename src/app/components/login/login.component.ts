import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  

  
  // email: string ='';
  // password: string = '';
  // rememberMe: boolean = false;
  loginFailed: boolean = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  submitted=false;
  //model = new LoginUser(this.email, this.password);


  onSubmit() {
    this.submitted = true;
    console.log('attempt');
    console.log(this.loginForm.value);
  
    if (this.loginForm.valid) {
      this.login();
    } else {
      console.error('Invalid form');
    }
  }

  login() {
    console.log('login attempt')
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email && password) {
      this.authService.login(email, password).subscribe({
        next: (response: any) => {
          // Handle successful login response here
          console.log('Login successful');
          console.log(response);
          localStorage.setItem('accessToken', response.accessToken);
          console.log('here is the local')
          console.log(localStorage.getItem('accessToken'))
          // Redirect to the movie page or perform other actions

          const accessToken = response.accessToken;

          const jwtHelper = new JwtHelperService();
          const decodedToken = jwtHelper.decodeToken(accessToken);
          localStorage.setItem('decodedToken',decodedToken)
          console.log('decoded: '+JSON.stringify(decodedToken));
          const username = decodedToken.username; // Replace with the actual username
          this.userService.setUser(username);
          localStorage.setItem('username', username);
          this.router.navigate(['/movies']);
        },
        error: (error) => {
          // Handle login error here
          console.error('Login failed');
          console.error(error);
          this.loginFailed = true; // Set loginFailed to true when login fails

        }
      });
    } else {
      console.error('Invalid email or password');
    }
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private userService: UserService
    ) {}

}
