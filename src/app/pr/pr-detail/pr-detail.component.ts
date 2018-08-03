import { Component, OnInit } from '@angular/core';
import { PR } from '@pr/pr';
import { PrService } from '@pr/pr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})
export class PrDetailComponent implements OnInit {

  constructor(private prSvc: PrService, private route: ActivatedRoute, private router: Router) { }

  PR: PR;

 markForReview(): void {
   this.PR.Status = "REVIEW";
    this.prSvc.Change(this.PR)
    .subscribe(p => {
    console.log("Status:", p)
    this.router.navigateByUrl('/pr/list');
});

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