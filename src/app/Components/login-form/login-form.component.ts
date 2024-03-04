import { Component } from '@angular/core';
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import { FormsModule } from '@angular/forms';
import {UserLogin} from "../../Models/User.interface";
import {UsersService} from "../../Services/users.service";
import {AuthService} from "../../Services/auth.service";
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
  public error = false;
  public passwordVerify = false;
  constructor( 
    private loginService: UsersService,
    private authService: AuthService
    ) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    this.notfound = false;
    this.error = false;
    this.passwordVerify = false;
    const user: UserLogin = {
      email: this.email || '',
      password: this.password || '',
    };

    this.loginService.loginUser(user).subscribe(
      res => {
        this.authService.saveTokenResponse(res.jwt, res.data)
      },
      error => {
        if (error.status == 404){
          this.notfound = true;
        } else if(error.status == 401) {
          this.passwordVerify = true;
        }else {
          this.error = true;
        }
      }
    );  
  }
}
