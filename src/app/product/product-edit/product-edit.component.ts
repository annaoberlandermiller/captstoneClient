import { Component, OnInit } from '@angular/core';
import { Product } from '@product/product';
import { ProductService } from '@product/product.service';
import { Vendor } from '@vendor/vendor';
import { VendorService } from '@vendor/vendor.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  constructor(private productSvc: ProductService,  private vendorSvc: VendorService, private route: ActivatedRoute, private router: Router) { }

  Product: Product;
  Vendors : Vendor[];

  change(): void {
    this.productSvc.Change(this.Product)
    .subscribe( p => {
      this.Product = p.Data;
      console.log(p);
      this.router.navigateByUrl('product/list');
    })
  }

  ngOnInit() {
    this.vendorSvc.List()
    .subscribe(v => {
      this.Vendors= v.Data;
      console.log("Vendors:", v);
    })
    let id = this.route.snapshot.params.id;
    this.productSvc.Get(id)
    .subscribe(p => {
      this.Product = p.Data;
      console.log("Products:", p);
    });
  }
}
