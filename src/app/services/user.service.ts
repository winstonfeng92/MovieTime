import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<string>(localStorage.getItem('username') || ''); // Initial value is an empty string
  user$ = this.userSubject.asObservable();

  setUser(username: string) {
    this.userSubject.next(username);
  }

  logout() {
    this.userSubject.next('');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
  
  constructor(private router: Router) {}
}
