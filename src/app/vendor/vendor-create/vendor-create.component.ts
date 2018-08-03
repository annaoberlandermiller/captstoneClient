import { Component, OnInit } from '@angular/core';
import { VendorService} from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  constructor(private vendorSvc: VendorService, private router: Router ) { }

  vendor: Vendor = new Vendor();

  create(): void {
    this.vendorSvc.Create(this.vendor)
    .subscribe(v => {
    this.vendor = v.Data;
    console.log(v);
    this.router.navigateByUrl('vendor/list');
  })
}

  ngOnInit() {
    }

}
