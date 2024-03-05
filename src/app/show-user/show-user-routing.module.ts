import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShowUserComponent} from "../Views/show-user/show-user.component";


const routes: Routes = [
  {path: '', component: ShowUserComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]

})
export class ShowUserRoutingModule { }
