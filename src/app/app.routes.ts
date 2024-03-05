import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './Components/dashboard-home/dashboard-home.component';
import {WelcomeComponent} from "./Views/welcome/welcome.component";
import { IndexComponent } from './Views/User/index/index.component';
import {RegisterFormComponent} from "./Views/register-form/register-form.component";
import {PageNotFoundComponent} from "./Views/page-not-found/page-not-found.component";
import {LoginFormComponent} from "./Views/login-form/login-form.component";
import { UpdateComponent } from './Views/update/update.component';
import { DeleteComponent } from './Views/delete/delete.component';
import { AuthGuard } from './guards/auth-guard.guard';

export const routesAuth: Routes= [
  {
    path: 'home',
    component: DashboardHomeComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      {path: 'register', component: RegisterFormComponent, title: 'Register'},
      {path: 'login', component: LoginFormComponent, title: 'login'},
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'welcome', component: WelcomeComponent, title: 'Welcome'},
      {path: 'update/:id', component: UpdateComponent },
      {path: 'users', component: IndexComponent, title: 'Users',
      children: [
        { path: 'delete/:id', component: DeleteComponent, title: 'Delete' },
      ]},
      {path: 'show/:id', loadChildren: () => import('./show-user/show-user.module').then(m => m.ShowUserModule)},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
  ];

  // src/app/app.routes.ts
