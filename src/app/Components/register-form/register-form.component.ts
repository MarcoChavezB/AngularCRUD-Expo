import { Component } from '@angular/core';
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsersService} from "../../Services/users.service";
import {User} from "../../Models/User.interface";
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormLayoutComponent, ReactiveFormsModule, NgIf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {
  public registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })
  errors: any;
  constructor(
    private regService: UsersService,
    private router: Router
  ) {}

  onSubmit(){
    const formValue = this.registerForm.value;
    const user: User = {
      name: formValue.name || '',
      email: formValue.email || '',
      password: formValue.password || '',
    };
    this.regService.addUser(user).subscribe(
      res => {
        this.router.navigate(['']);
      },
      err => {
        if (err.error.error){
          this.errors = err.error.error;
        }
      }
    );
  }

}
