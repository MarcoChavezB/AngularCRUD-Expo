import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.local';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User, UserInterface} from '../Models/User.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlIndex = environment.index
  private urlStore = environment.store

  constructor(
    private readonly http: HttpClient
  ) { }

  getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this.urlIndex)
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.urlStore, user)
  }
}
