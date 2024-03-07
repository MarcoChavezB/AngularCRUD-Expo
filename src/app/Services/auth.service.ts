import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "./users.service";
import { Observable, map, catchError, of } from 'rxjs';
import { response } from 'express';
import { UserInterface } from '../Models/User.interface';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private readonly router: Router,
    private readonly usersservice: UsersService
    ) {}

  saveTokenResponse(jwt: string, user: any) {
  if (typeof window !== 'undefined') {
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
    localStorage.setItem('access_token', jwt);
    this.router.navigate(['']);
  }
}

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('access_token');
    }
    return null;
  }

  getUser(): UserInterface | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString) as UserInterface;
    }
    return null;
  }
  

  isAuthenticated(): Observable<boolean> {
    const token = this.getToken();
    if (!token) {
      return of(false); 
    }
  
    return this.usersservice.authenticate().pipe(
      map(() => true),
      catchError(() => {
        return of(false);
      })
    );
  }
  
  resetAll(){
    if (typeof window !== 'undefined') {

    localStorage.removeItem('access_token');
    localStorage.removeItem('user');

    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      return this.usersservice.logoutuser().subscribe(
        res => {
          if (res.status == true) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            this.router.navigate(['home/login']);
          }
        }
      )
    }
    return false
  }
}
