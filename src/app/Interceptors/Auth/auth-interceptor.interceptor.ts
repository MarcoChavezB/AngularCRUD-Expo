import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "../../Services/auth.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';

@Injectable() 
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken(); 

    if (authToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    return next.handle(req);
  } 
}

export const authInterceptorProvider: Provider =
{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true };



