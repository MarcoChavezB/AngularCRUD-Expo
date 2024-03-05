import { Component } from '@angular/core';
import {routes} from "../../app.routes";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

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
}
