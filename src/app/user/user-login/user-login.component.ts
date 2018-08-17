import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  User: User =  new User();

  Message: string = '';

  validate(): void {
    this.userSvc.getUser(this.User.Username, this.User.Password).subscribe(   
     resp => {
            console.log(resp);
            if(resp.Code == -2) {  // what's significant about -2?
              console.error("Login failed.");
              this.Message = resp.Message;
              return;
            } else {
              console.log("Login successful")
              this.router.navigateByUrl('prs/list');
            }
          });
      }
            
  
  constructor( private userSvc: UserService, private router: Router ) {}

  ngOnInit() {}

}
