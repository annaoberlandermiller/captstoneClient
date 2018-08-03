import { Component, OnInit } from '@angular/core';
import { VendorService } from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  constructor(private vendorSvc: VendorService) { }

  Vendors: Vendor[];

  ngOnInit() {
    this.vendorSvc.List()
    .subscribe(v=> {
      this.Vendors = v.Data;
      console.log(v);
    })
  }

}
