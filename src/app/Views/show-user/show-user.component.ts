import { Component } from '@angular/core';
import {UsersService} from "../../Services/users.service";
import {UserInterface} from "../../Models/User.interface";

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {
  User: UserInterface | undefined
  constructor(
    private getUserService: UsersService,
    ) {}

  ngOnInit(): void {
    this.fetchUser("1")
  }

  fetchUser(id: string){
    this.getUserService.getUser(id).subscribe(
      response => {
        this.User = response
        console.log(this.User)
      }
    )
  }

}
