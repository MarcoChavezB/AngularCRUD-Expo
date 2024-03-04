import { Component } from '@angular/core';
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import {FormControl, FormGroup } from "@angular/forms";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormLayoutComponent, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  public email = '';
  public password = '';
  
  onSubmit() {
    console.log(this.email, this.password);
  }
}
