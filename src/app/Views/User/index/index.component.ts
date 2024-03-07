import { Component } from '@angular/core';
import { UserInterface } from '../../../Models/User.interface';
import { UsersService } from '../../../Services/users.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink } from '@angular/router';
import { AlertComponent } from '../../../Components/Alerts/alert/alert.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AlertComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  loading: boolean = false;
  public Users: UserInterface[] = [];
  public message: string = '';
  mostrarAlerta: boolean = false;

  constructor(
    private readonly dataSVu: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.dataSVu.getUsers().subscribe(
      (response) => {
        if(!response.Users.length){
          this.showAlert("No hay usuarios registrados")
        }
        this.Users = response.Users;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
  
  
  deleteUser(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?'
)) {
      this.dataSVu.deleteUser(id.toString()).subscribe(
        () => {
          //this.Users = this.Users.filter(user => user.id !== id);
          this.getUsers();
          console.error('se elimino el usuario');
        },
        error => {
          console.error('Error al eliminar usuario:', error);
        }
      );
    }
  }

  edit(Id: number): void {
    this.router.navigate([`/dashboard/update/`,Id]);
  }



  showAlert(message: string ){
    this.message = message;
    this.mostrarAlerta = true;
  }
}