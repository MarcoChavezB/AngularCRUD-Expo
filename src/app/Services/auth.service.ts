import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "./users.service";
import { Observable, map, catchError, of } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private readonly router: Router,
    private readonly usersservice: UsersService
    ) {}

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
  

  isAuthenticated(): Observable<boolean> {
    const token = this.getToken();
    if (!token) {
      return of(false); 
    }
  
    return this.usersservice.getUsers().pipe(
      map(() => true),
      catchError(() => {
        return of(false);
      })
    );
  }
  

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
