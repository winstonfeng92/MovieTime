import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const payload = {email, password};
    return this.http.post('http://localhost:4231/auth/signin', payload);

  }

  isLoggedIn(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // Return true if access token exists, false otherwise
  }
}
