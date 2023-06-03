import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<string>(localStorage.getItem('username') || ''); // Initial value is an empty string
  user$ = this.userSubject.asObservable();

  private accessSubject = new BehaviorSubject<string>(localStorage.getItem('access') || ''); // Initial value is an empty string
  access$ = this.accessSubject.asObservable();

  setUser(username: string) {
    this.userSubject.next(username);
  }

  setAccess(access: string) {
    console.log('set access' + access)
    this.accessSubject.next(access);
  }

  isPrivilegedUser(): boolean {
    let privilege = this.accessSubject.getValue()
    console.log('priv check '+privilege)
    return privilege === 'ADMIN' || privilege === 'SUPERUSER';
  }

  logout() {
    this.userSubject.next('');
    this.accessSubject.next('');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
  
  constructor(private router: Router) {}
}
