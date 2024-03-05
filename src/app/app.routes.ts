import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {WelcomeComponent} from "./Views/welcome/welcome.component";
import { IndexComponent } from './Views/User/index/index.component';
import {RegisterFormComponent} from "./Views/register-form/register-form.component";
import {PageNotFoundComponent} from "./Views/page-not-found/page-not-found.component";
import {LoginFormComponent} from "./Components/login-form/login-form.component";
import { UpdateComponent } from './Views/update/update.component';
import { DeleteComponent } from './Views/delete/delete.component';
export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent, title: 'Welcome'},
      {path: 'register', component: RegisterFormComponent, title: 'Register'},
      {path: 'update/:id', component: UpdateComponent },
      {path: 'users', component: IndexComponent, title: 'Users',
      children: [
        { path: 'delete/:id', component: DeleteComponent, title: 'Delete' }
      ]},
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

  // src/app/app.routes.ts