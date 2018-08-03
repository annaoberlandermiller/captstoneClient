import { Component, OnInit } from '@angular/core';
import { PR } from '@pr/pr';
import { PrService } from '@pr/pr.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pr-review',
  templateUrl: './pr-review.component.html',
  styleUrls: ['./pr-review.component.css']
})
export class PrReviewComponent implements OnInit {

  
  constructor(private prSvc: PrService,  private route: ActivatedRoute, private router: Router) { }


 

PRs: PR[] = [];

 ngOnInit() {
  this.prSvc.List()
  .subscribe(p => {
    let prs: PR[] = p.Data;
    for(let p of prs) {
      if(p.Status === "REVIEW") {
        this.PRs.push(p);
      }
    }
    console.log("PRs: ", p);
  })
}
}


