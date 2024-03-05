import { Component } from '@angular/core';
import { UserInterface } from '../../../Models/User.interface';
import { UsersService } from '../../../Services/users.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  loading: boolean = false;
  Users: UserInterface[] = []

  constructor(
    private readonly dataSVu: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.dataSVu.getUsers().subscribe(
      response => {
        this.Users = Object.values(response)
      }
    )
  }
  deleteUser(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?'
  
)) {
      this.dataSVu.deleteUser(id).subscribe(
        () => {
          console.error('se elimino el usuario');
          
          
        },
        error => {
          console.error('Error al eliminar usuario:', error);
          // Maneja el error de eliminación aquí
        }
      );
    }
  }
}
