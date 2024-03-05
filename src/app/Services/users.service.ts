import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserRegistrationInterface, UserInterface, UserLogin, LoginResponseInterface, UserUpdateInterface, UserDeleteInterface} from '../Models/User.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlIndex = environment.index
  private urlStore = environment.store
  private urlLogin = environment.login
  private urlShow = environment.show // Add the missing 'show' property
  private urlUpdate = environment.update
  private urlDelete = environment.delete 

  constructor(
    private readonly http: HttpClient
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
  

  getUser(id: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.urlShow + id)
  }
  updateUser(user: UserUpdateInterface, userId: number): Observable<UserUpdateInterface> {
    const url = `${this.urlUpdate}/${userId}`;
    return this.http.put<UserUpdateInterface>(url, user);
  }

 
  deleteUser(userId: number): Observable<UserDeleteInterface> {
    const urlDelete = `${this.urlDelete}/${userId}`; 
    console.log(urlDelete); 
    return this.http.delete<UserDeleteInterface>(urlDelete, {responseType: 'json'});
  }

}
