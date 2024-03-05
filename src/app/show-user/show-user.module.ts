import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowUserComponent} from "../Views/show-user/show-user.component";
import {ShowUserRoutingModule} from "./show-user-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShowUserComponent,
    ShowUserRoutingModule
  ]
})
export class ShowUserModule { }
