import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user: User = new User();  

  create(): void {
  this.userSvc.Create(this.user)
  .subscribe(u => {
    this.user = u.Data;
    console.log(u);
  })
  }

  constructor(private userSvc: UserService, private router: Router) { }
  ngOnInit() {}
}

