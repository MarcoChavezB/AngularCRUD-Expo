import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable, map, catchError, of } from 'rxjs';
import e from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated().pipe(
        map(e => {
          const isAuthenticated = !!e;
          if (!isAuthenticated){
            this.router.navigate(['/home']);
          }
          return isAuthenticated;
        }
        ),
        catchError(() => {
          this.router.navigate(['/home']);
          return of(false);
        })
      );
  }
}
