import { Component, OnInit } from '@angular/core';
import { User } from '@user/user';
import { UserService } from '@user/user.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userSvc: UserService, private route: ActivatedRoute) { }
    User: User;

    ngOnInit() {
      let id = this.route.snapshot.params.id;
      this.userSvc.Get(id)
      .subscribe(u => {
        this.User = u.Data;
        console.log(u);
      } )
  }

}
