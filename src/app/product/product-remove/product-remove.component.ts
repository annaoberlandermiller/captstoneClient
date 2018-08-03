import { Component, OnInit } from '@angular/core';
import { Product } from '@product/product';
import { ProductService } from '@product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.css']
})
export class ProductRemoveComponent implements OnInit {

Product: Product = new Product;

  remove(): void {
 
    this.productSvc.Remove(this.Product)
    .subscribe(p => {
      console.log(p);
      this.router.navigateByUrl('product/list');
    } )
  }
  
    constructor(private productSvc: ProductService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      let id = this.route.snapshot.params.id;
      this.productSvc.Get(id)
      .subscribe(p => {this.Product = p.Data;
        console.log(p);
    })
}
}