import { Component } from '@angular/core';
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormLayoutComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: ['./login-form.component.css'] 
})
export class LoginFormComponent {
  public registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
}
