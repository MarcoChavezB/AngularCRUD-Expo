import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserRegistrationInterface, UserInterface, UserLogin, statusInterface ,LoginResponseInterface, UserUpdateInterface} from '../Models/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private urlIndex = environment.index
  private urlStore = environment.store
  private urlLogin = environment.login
  private urlUpdate = environment.update
  private urlLogout = environment.logout

  constructor(
    private readonly http: HttpClient,

  ) { }

  ngOnInit(){
    this.getUsers()
  }

  getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this.urlIndex)
  }

  storeUser(user: UserRegistrationInterface): Observable<UserRegistrationInterface>{
    return this.http.post<UserRegistrationInterface>(this.urlStore, user)
  }

  loginUser(user: UserLogin): Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(this.urlLogin, user)
  }

  logoutuser(): Observable<statusInterface>{
    return this.http.get<statusInterface>(this.urlLogout)
  }

  updateUser(user: UserUpdateInterface, userId: number): Observable<UserUpdateInterface> {
    const url = `${this.urlUpdate}/${userId}`; 
    return this.http.put<UserUpdateInterface>(url, user);
  }
 
  deleteUser(userId: number): Observable<{}> {
    const url = `${this.urlUpdate}/${userId}`; 
    return this.http.delete(url);
  }

}
