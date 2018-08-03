import { Component, OnInit } from '@angular/core';
import { PR } from '@pr/pr';
import { PrService } from '@pr/pr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pr-review-detail',
  templateUrl: './pr-review-detail.component.html',
  styleUrls: ['./pr-review-detail.component.css']
})

export class PrReviewDetailComponent implements OnInit {

PR: PR;

  constructor(private prSvc: PrService,  private route: ActivatedRoute, private router: Router) { }


change(): void {
  this.prSvc.Change(this.PR)
  .subscribe( p => {
    this.PR = p.Data;
    console.log(p);
    this.router.navigateByUrl('pr/list');
  })


}
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.prSvc.Get(id)
    .subscribe(p => {
      this.PR = p.Data;
      console.log(p);
    })
  }

  
}