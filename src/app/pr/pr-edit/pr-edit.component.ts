import { Component, OnInit } from '@angular/core';
import { PR } from '@pr/pr';
import { PrService } from '@pr/pr.service';
import { User } from '@user/user';
import { UserService } from '@user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pr-edit',
  templateUrl: './pr-edit.component.html',
  styleUrls: ['./pr-edit.component.css']
})
export class PrEditComponent implements OnInit {

  constructor(private prSvc: PrService, private userSvc: UserService, private route: ActivatedRoute, private router: Router) { }

  PR: PR;
  Users: User[];

  change(): void {
    this.prSvc.Change(this.PR)
    .subscribe( p => {
      this.PR = p.Data;
      console.log(p);
      this.router.navigateByUrl('pr/list');
    })
  }

  ngOnInit() {
    this.userSvc.List()
    .subscribe(u => {
      this.Users= u.Data;
      console.log("Users:", u);
    })
    let id = this.route.snapshot.params.id;
    this.prSvc.Get(id)
    .subscribe(p => {
      this.PR = p.Data;
    });
  }
}