import { Component, OnInit } from '@angular/core';
import { Vendor } from '@vendor/vendor';
import { VendorService } from '@vendor/vendor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  constructor(private vendorSvc: VendorService, private route: ActivatedRoute) { }

vendor: Vendor;

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vendorSvc.Get(id)
    .subscribe(v => {
      this.vendor = v.Data;
      console.log(v);
    })
  }

}
