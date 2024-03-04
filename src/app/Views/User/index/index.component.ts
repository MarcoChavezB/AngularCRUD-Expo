import { Component } from '@angular/core';
import { User, UserInterface } from '../../../Models/User.interface';
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
    this.getUsers()
  }

  getUsers(){
    this.dataSVu.getUsers().subscribe(
      response => {
        this.Users = response
        console.log(this.Users)
      }
    )
  }
}
