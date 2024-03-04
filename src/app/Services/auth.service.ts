import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router) {}

  saveTokenResponse(jwt: string, user: any) {
    const userString = JSON.stringify(user);
    
    localStorage.setItem('user', userString);
    localStorage.setItem('access_token', jwt);

    this.router.navigate(['']);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getUser() {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }
  

  isAuthenticated(): boolean {
    const token = this.getToken();
    
    return token ? true : false;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
