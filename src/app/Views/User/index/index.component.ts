import { Component } from '@angular/core';
import { UserInterface } from '../../../Models/User.interface';
import { UsersService } from '../../../Services/users.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink } from '@angular/router';
<<<<<<< HEAD
import { AlertComponent } from '../../../Components/Alerts/alert/alert.component';
=======
import { trigger, state, style, animate, transition } from '@angular/animations';


>>>>>>> bf2dfe4a0fcc281a0a9a6699892a21396f03a0e0

@Component({
  selector: 'app-index',
  standalone: true,
  animations: [
    trigger('dance', [
      state('normal', style({
        transform: 'translateX(0)'
      })),
      state('left', style({
        transform: 'translateX(-5px)'
      })),
      state('right', style({
        transform: 'translateX(5px)'
      })),
      transition('* => *', [
        animate('0.5s')
      ])
    ])
  ],
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
  Users: UserInterface[] = [];
  showDeleteNotification: boolean = false;
  notificationMessage: string = '';
  public message: string = '';
  mostrarAlerta: boolean = false;

  constructor(
    private readonly dataSVu: UsersService,
    private router: Router
  ) { }

  danceState = 'normal';

  onMouseEnter() {
    this.danceState = 'left';
  }

  onMouseLeave() {
    this.danceState = 'right';
  }


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
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.dataSVu.deleteUser(id.toString()).subscribe(
        () => {
          this.notificationMessage = 'Usuario eliminado correctamente.';
          this.showDeleteNotification = true;
          this.getUsers();
        },
        error => {
          console.error('Error al eliminar usuario:', error);
        }
      );
    }
  }

  // Método para cerrar la notificación
  dismissDeleteNotification(): void {
    this.showDeleteNotification = false;
  }


  edit(Id: number): void {
    this.router.navigate([`/dashboard/update/`,Id]);
    this.notificationMessage = 'Usuario Actualizado correctamente.';
          this.showDeleteNotification = true;
  }

  showAlert(message: string ){
    this.message = message;
    this.mostrarAlerta = true;
  }
}