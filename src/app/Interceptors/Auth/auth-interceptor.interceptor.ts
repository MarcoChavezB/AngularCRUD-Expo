import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from "../../Services/auth.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable() 
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private route: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken(); 


    if (this.shouldExclude(req)) {
      return next.handle(req);
    }
    
    if (authToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }


    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.resetAll()
          this.route.navigate(['/home']).then(()=> {
            alert('Token invalido o expirado')
          }
          );
        }
        return throwError(() => error);
      })
    );

  } 


  private shouldExclude(req: HttpRequest<any>): boolean {
    if (req.url.endsWith('/login')) {
      return true; 
    }
    return false;
  }
 
}

export const authInterceptorProvider: Provider =
{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true };



