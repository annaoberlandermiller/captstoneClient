import { Component, OnInit } from '@angular/core';
import { Vendor } from '@vendor/vendor';
import { VendorService } from '@vendor/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-remove',
  templateUrl: './vendor-remove.component.html',
  styleUrls: ['./vendor-remove.component.css']
})
export class VendorRemoveComponent implements OnInit {

  vendor: Vendor = new Vendor;

  remove(): void {
 
    this.vendorSvc.Remove(this.vendor)
    .subscribe(v => {
      console.log(v);
      this.router.navigateByUrl('vendor/list');
    } )
  }
  
    constructor(private vendorSvc: VendorService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      let id = this.route.snapshot.params.id;
      this.vendorSvc.Get(id)
      .subscribe(v => {this.vendor = v.Data;
        console.log(v);
    })
}
}
