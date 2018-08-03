import { Component, OnInit } from '@angular/core';
import { PR } from '@pr/pr';
import { PrService } from '@pr/pr.service';
import { PRLI } from '@prli/prli';
import { PrliService } from '@prli/prli.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pr-lines',
  templateUrl: './pr-lines.component.html',
  styleUrls: ['./pr-lines.component.css']
})
export class PrLinesComponent implements OnInit {

  
  constructor(private prSvc: PrService, private prliSvc: PrliService, private route: ActivatedRoute, private router: Router) { }

  PR: PR;
  PRLIs: PRLI[];

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.prSvc.Get(id)
    .subscribe(p => {
      console.log(p);
      this.PR = p.Data;
      
    })
    
  }

  
}
