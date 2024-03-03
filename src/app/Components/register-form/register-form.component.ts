import { Component } from '@angular/core';
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormLayoutComponent, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  public registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

}
