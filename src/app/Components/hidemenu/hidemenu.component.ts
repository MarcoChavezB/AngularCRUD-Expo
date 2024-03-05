import { Component } from '@angular/core';
import {routesAuth} from "../../app.routes";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-hidemenu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './hidemenu.component.html',
  styleUrl: './hidemenu.component.css'
})
export class HidemenuComponent {
  public menuItems= routesAuth
  .map((route) => route.children ?? [])
  .flat()
  .filter((route) => route && route.path)
  .filter((route) => !route.path?.includes(':'))
}
