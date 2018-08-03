import { Component, OnInit } from '@angular/core';
import { ProductService } from '@product/product.service';
import { Product } from '@product/product';
import { VendorService } from '@vendor/vendor.service'
import { Vendor } from '@vendor/vendor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  Product: Product = new Product();
  Vendors: Vendor[];

  constructor(private productSvc: ProductService, private vendorSvc: VendorService, private router: Router) { }

create(): void {
this.productSvc.Create(this.Product)
.subscribe(p => { 
  console.log(p);
  this.router.navigateByUrl('product/list');
})
 
}
  ngOnInit() {
    this.vendorSvc.List()
    .subscribe(v => {
      this.Vendors = v.Data;
      console.log("Vendors:", v);
    });
  }
}
