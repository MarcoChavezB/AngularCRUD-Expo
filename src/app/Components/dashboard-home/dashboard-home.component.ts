import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HidemenuComponent} from "../hidemenu/hidemenu.component";

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    RouterOutlet, HidemenuComponent,
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {

}
