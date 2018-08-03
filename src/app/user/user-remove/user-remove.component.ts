import { Component, OnInit } from '@angular/core';
import { User } from '@user/user';
import { UserService } from '@user/user.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-remove',
  templateUrl: './user-remove.component.html',
  styleUrls: ['./user-remove.component.css']
})
export class UserRemoveComponent implements OnInit {

  

  User: User = new User;

  remove(): void {
 
    this.userSvc.Remove(this.User)
    .subscribe(u => {
      console.log(u);
      this.router.navigateByUrl('user/list');
    } )
  }
  
    constructor(private userSvc: UserService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      let id = this.route.snapshot.params.id;
      this.userSvc.Get(id)
      .subscribe(u => {this.User = u.Data;
        console.log(u);
    })
}
}
