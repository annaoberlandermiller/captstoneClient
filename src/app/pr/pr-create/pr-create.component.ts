import { Component, OnInit } from '@angular/core';
import { PR } from '@pr/pr';
import { PrService } from '@pr/pr.service';
import { User } from '@user/user';
import { UserService } from '@user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PrCreateComponent implements OnInit {

  constructor(private prSvc: PrService, private userSvc: UserService, private router: Router) { }

  PR : PR = new PR();
  Users : User[];

create(): void {
  console.log("PR:", this.PR);
this.PR.Status = "NEW";
this.prSvc.Create(this.PR)
.subscribe(p => {
  console.log(p);
  this.router.navigateByUrl('pr/list');
})
}
  ngOnInit() {
    this.userSvc.List()
    .subscribe(u => {
      this.Users = u.Data;
      console.log("Users:", u);
    })

  }

}
