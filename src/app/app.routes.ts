import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {WelcomeComponent} from "./Views/welcome/welcome.component";
import { IndexComponent } from './Views/User/index/index.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent, title: 'Welcome'},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'users', component: IndexComponent, title: 'Users'}
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
  ];
