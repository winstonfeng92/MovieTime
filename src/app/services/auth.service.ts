import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  wakeUpApi() {
    return this.http.get('https://nest-movie-backend.onrender.com/', { responseType: 'text' });
  }

  login(email: string, password: string) {
    const payload = {email, password};
    return this.http.post('https://nest-movie-backend.onrender.com/auth/signin', payload);

  }

  isLoggedIn(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // Return true if access token exists, false otherwise
  }
}
