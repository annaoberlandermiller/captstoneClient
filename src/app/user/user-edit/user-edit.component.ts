import { Component, OnInit } from '@angular/core';
import { User } from '@user/user';
import { UserService } from '@user/user.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

user: User = new User;

change(): void {
 
    this.userSvc.Change(this.user)
    .subscribe(u => {
      console.log(u);
      this.router.navigateByUrl('user/list');
    } )
  }

  constructor(private userSvc: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.userSvc.Get(id)
    .subscribe(u => {this.user = u.Data;
      console.log(u);
  })
}
}
