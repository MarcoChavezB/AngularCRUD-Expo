import { Component } from '@angular/core';
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import { FormsModule } from '@angular/forms';
import {UserLogin} from "../../Models/User.interface";
import { Router } from '@angular/router';
import {UsersService} from "../../Services/users.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormLayoutComponent, FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  public email = '';
  public password = '';
  public notfound = false;
  constructor( 
    private loginService: UsersService,
    private router: Router
    ) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    this.notfound = false;
    const user: UserLogin = {
      email: this.email || '',
      password: this.password || '',
    };
    console.log(user);

    this.loginService.loginUser(user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['']);
      }
    );  
  }
}
