import { Component, OnInit } from '@angular/core';
import { Vendor } from '@vendor/vendor';
import { VendorService } from '@vendor/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  constructor(private vendorSvc: VendorService,  private route: ActivatedRoute, private router: Router) { }

  vendor : Vendor;

  change(): void {
    this.vendorSvc.Change(this.vendor)
    .subscribe( v => {
      this.vendor = v.Data;
      console.log(v);
      this.router.navigateByUrl('vendor/list');
    })
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vendorSvc.Get(id)
    .subscribe(v => {
      this.vendor = v.Data;
      console.log(v);
    })

  }

}
