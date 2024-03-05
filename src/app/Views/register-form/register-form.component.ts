import { Component } from '@angular/core';
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsersService} from "../../Services/users.service";
import {UserRegistrationInterface} from "../../Models/User.interface";
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";
import {AuthService} from "../../Services/auth.service";


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
    private authService: AuthService,
    private regService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['']);
      }
    });
  }
  
  onSubmit(){
    const formValue = this.registerForm.value;
    const user: UserRegistrationInterface = {
      name: formValue.name || '',
      email: formValue.email || '',
      password: formValue.password || '',
    };
    this.regService.storeUser(user).subscribe(
      res => {
        this.router.navigate(['/home/login']);
      },
      err => {
        if (err.error.error){
          this.errors = err.error.error;
        }
      }
    );
  }

}
