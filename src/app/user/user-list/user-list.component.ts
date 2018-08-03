import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor (private userSvc: UserService) { }

  Users: User[];

  ngOnInit() {
    this.userSvc.List()
    .subscribe(u => {
      this.Users = u.Data;
      console.log(u);
    } )
  }

}
