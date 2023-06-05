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

  checkEmail(email: string) {
    console.log('checking email')
    const payload = {email};
    return this.http.post('https://nest-movie-backend.onrender.com/auth/check-email', payload);
  }

  isLoggedIn(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // Return true if access token exists, false otherwise
  }

  changeUserType(role: string) {
    const payload = { role };
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      'accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    };
  
    return this.http.patch('https://nest-movie-backend.onrender.com/auth/userupdate', payload, { headers });
  }
}
