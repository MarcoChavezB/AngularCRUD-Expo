import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserRegistrationInterface, UserInterface, UserLogin, LoginResponseInterface} from '../Models/User.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlIndex = environment.index
  private urlStore = environment.store
  private urlLogin = environment.login

  constructor(
    private readonly http: HttpClient
  ) { }



  getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this.urlIndex)
  }



  storeUser(user: UserRegistrationInterface): Observable<UserRegistrationInterface>{
    return this.http.post<UserRegistrationInterface>(this.urlStore, user)
  }

  loginUser(user: UserLogin): Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(this.urlLogin, user)
  }

}
