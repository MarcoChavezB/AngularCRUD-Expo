import { Component } from '@angular/core';
import {UsersService} from "../../Services/users.service";
import {UserInterface} from "../../Models/User.interface";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {
  User: UserInterface | undefined
  constructor(
    private getUserService: UsersService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id')
      if (userId) this.fetchUser(userId)
    })
  }

  fetchUser(id: string){
    this.getUserService.getUser(id).subscribe(
      response => {
        this.User = response
        console.log(this.User)
      },
      error => {
        this.router.navigate(['/404'])
      }
    )
  }

}
