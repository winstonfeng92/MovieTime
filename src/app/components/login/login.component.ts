import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { timeout } from 'rxjs/operators';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  isLoading = false;
  
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
    this.isLoading = true;
  
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
      this.authService.login(email, password)
      .pipe(timeout(5000)) // Set a timeout of 10 seconds
      .subscribe({
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
          const username = decodedToken.username;
          this.userService.setAccess(response.role);
          this.userService.setUser(username);
          localStorage.setItem('username', username);
          this.isLoading = false;
          this.router.navigate(['/movies']);
        },
        error: (error) => {
          if (error.name === 'TimeoutError') {
            this.userService.setAccess('USER');
            this.userService.setUser('defaultUser');
            console.error('Login request timed out');
            localStorage.setItem('username', 'defaultUser');
            this.isLoading = false;
            this.router.navigate(['/movies']);
          }
          console.error('Login failed');
          console.error(error);
          this.isLoading = false;
          this.loginFailed = true; // Set loginFailed to true when login fails
        

        }
      });
    } else {
      console.error('Invalid email or password');
      this.isLoading = false;
    }
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private userService: UserService
    ) {}

}
