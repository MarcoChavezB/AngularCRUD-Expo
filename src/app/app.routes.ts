import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'dashboard'}, //TODO: Definir rutas hijas del dashboard
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {path: '**'} //TODO: Definir componente para el wildcard
];
