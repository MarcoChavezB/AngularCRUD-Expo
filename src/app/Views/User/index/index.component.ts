import { Component } from '@angular/core';
import { UserRegistrationInterface, UserInterface } from '../../../Models/User.interface';
import { UsersService } from '../../../Services/users.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'

})
export class IndexComponent {

  Users: UserInterface[] = []


  constructor(
    private readonly dataSVu: UsersService
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.getUsers()
  }

  getUsers(){
    this.dataSVu.getUsers().subscribe(
      response => {
        this.Users = Object.values(response)
        console.log(Object.values(response))
      }
    )
  }
}
