import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidemenuComponent} from "../sidemenu/sidemenu.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet, SidemenuComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
