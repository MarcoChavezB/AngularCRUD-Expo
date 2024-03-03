import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.local';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../Models/User.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlIndex = environment.index

  constructor(
    private readonly http: HttpClient
  ) { }

  getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this.urlIndex)
  }
}
