import { Component } from '@angular/core';
import { UserInterface } from '../../../Models/User.interface';
import { UsersService } from '../../../Services/users.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';



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
    RouterLink
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})

export class IndexComponent {
  loading: boolean = false;
  Users: UserInterface[] = [];
  showDeleteNotification: boolean = false;
  notificationMessage: string = '';

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

  getUsers(){
    this.dataSVu.getUsers().subscribe(
      response => {
        this.Users = response 
        
      }
    )
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

}