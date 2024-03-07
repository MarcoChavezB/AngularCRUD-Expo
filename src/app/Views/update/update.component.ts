import { Component } from '@angular/core';
import { FormLayoutComponent } from "../../Layouts/form-layout/form-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { UsersService } from "../../Services/users.service";
import { UserInterface, UserUpdateInterface } from "../../Models/User.interface";
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf } from "@angular/common";
import { UserInfo } from 'os';
import { CommonModule } from "@angular/common"; 
@Component({
  standalone: true,
  imports: [FormLayoutComponent, ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
  selector: 'app-update-form',
})
export class UpdateComponent {
  updateForm: FormGroup;
  user!: UserInterface;
  errors: any;
  userId!: number;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; 
      this.getUserInfo(this.userId.toString()); 
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const formValue = this.updateForm.value;
      const updatedUser: UserUpdateInterface = {
        id: this.userId,
        name: formValue.name,
        email: formValue.email,
        password: formValue.password
      };

      this.userService.updateUser(updatedUser, updatedUser.id).subscribe(
        () => {
          console.log('Usuario actualizado correctamente');
          this.router.navigate(['/dashboard/users']);
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

  getUserInfo(userId: string): void { 
    this.userService.getUser(userId).subscribe(
      (data: any) => {
        this.user = data;
        this.updateForm.patchValue({ 
          name: this.user.name,
          email: this.user.email,
        });
      },
      (error: any) => {
        console.error('Error al obtener la información del usuario:', error);
      }
    );
  };
  
}