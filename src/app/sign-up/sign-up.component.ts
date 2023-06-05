import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable, debounceTime, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {
  step = 1;
  usernameFormGroup: FormGroup;
  keyFormGroup: FormGroup;
  planFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private http:HttpClient, private router: Router) {
    this.usernameFormGroup = this.fb.group({
      username: ['', [Validators.required, Validators.email],this.usernameAsyncValidator()],
      password: ['', Validators.required]
    });

    this.keyFormGroup = this.fb.group({
      key: ['', [Validators.required, Validators.minLength(15)]]
    });

    this.planFormGroup = this.fb.group({
      plan: ['', Validators.required]
    });
  }

  usernameAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      return this.authService.checkEmail(email).pipe(
        debounceTime(1000),
        map(exists => (exists ? { emailExists: true } : null))
      );
    };
  }

  nextStep() {
    console.log('proceed');
    this.step++;
  }

  previous() {
    console.log('proceed');
    this.step--;
  }

  onSubmit() {
    const usernameFormValue = this.usernameFormGroup.value;
    const keyFormValue = this.keyFormGroup.value;
    const planFormValue = this.planFormGroup.value;
  
    const payload = {
      username: usernameFormValue.username,
      password: usernameFormValue.password,
      email: keyFormValue.key,
      role: planFormValue.plan,
      tmdb_key: 'stringstringstr' // Replace with actual tmdb_key value
    };
  
    const url = 'https://nest-movie-backend.onrender.com/auth-c/signup';
  
    this.http.post(url, payload).subscribe({
      next: (response) => {
        // Handle successful response
        this.router.navigate(['/']);

        console.log('Registration successful:', response);
      },
      error: (error) => {
        // Handle error
        this.router.navigate(['/']);

        console.error('Registration failed:', error);
      }
    });


  }
}
// export class SignUpComponent {
//   registrationForm: FormGroup;
//   step = 1;

//   constructor(private fb: FormBuilder) {
//     this.registrationForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       key: ['', Validators.required],
//       plan: ['', Validators.required],
//     });
//   }

//   nextStep() {
//     console.log('proceed')
//     this.step++;
//   }

//   previous() {
//     console.log('proceed')
//     this.step--;
//   }

//   onSubmit() {
//     console.log('submit')
//     // call service to send registration data to backend
//   }


// }
