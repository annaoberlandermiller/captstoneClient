import { Component, OnInit } from '@angular/core';
import { PR } from '@pr/pr';
import { PrService } from '@pr/pr.service';


@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {

  constructor(private prSvc: PrService) { }

  Prs: PR[];


  ngOnInit() {
    this.prSvc.List()
    .subscribe(p => {
      this.Prs = p.Data;
      console.log(p);
    })
  }

}
