import { Component } from '@angular/core';
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsersService} from "../../Services/users.service";
import {UserUpdateInterface} from "../../Models/User.interface";
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormLayoutComponent, ReactiveFormsModule, NgIf],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})

export class UpdateComponent {
  updateForm: FormGroup;
  errors: any;

  constructor(private userService: UsersService) {
    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const formValue = this.updateForm.value;
      const updatedUser: UserUpdateInterface = {
        id: 0, 
        name: formValue.name,
        email: formValue.email,
        password: formValue.password
      };
      
      const userId = 0;

      this.userService.updateUser(updatedUser, userId).subscribe(
        () => {
          console.log('Usuario actualizado correctamente');
        },
        (error: any) => {
          console.log('Error al actualizar el usuario:', error);
          if (error.error && error.error.error) {
            this.errors = error.error.error;
          }
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}