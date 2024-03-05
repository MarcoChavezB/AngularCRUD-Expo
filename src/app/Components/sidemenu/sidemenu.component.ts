import { Component, Injectable, inject, input } from '@angular/core';
import {routes} from "../../app.routes";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../Services/auth.service";
import { UserInterface } from '../../Models/User.interface';


@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  
  public user: UserInterface | null = null;
  constructor( 
    private authService: AuthService,
    ) {}

  public menuItems= routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'))

    exit() {
      this.authService.logout()
    }
    ngOnInit(): void{
      this.user = this.authService.getUser()
    }
}
