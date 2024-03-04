import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {WelcomeComponent} from "./Views/welcome/welcome.component";
import { IndexComponent } from './Views/User/index/index.component';
import {RegisterFormComponent} from "./Components/register-form/register-form.component";
import {PageNotFoundComponent} from "./Views/page-not-found/page-not-found.component";
import {LoginFormComponent} from "./Components/login-form/login-form.component";

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent, title: 'Welcome'},
      {path: 'register', component: RegisterFormComponent, title: 'Register'},
      {path: 'users', component: IndexComponent, title: 'Users'},
      {path: 'login', component: LoginFormComponent, title: 'login'},

      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  ];
