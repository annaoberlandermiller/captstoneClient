import { Component, OnInit } from '@angular/core';
import { Product } from '@product/product';
import { ProductService } from '@product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  constructor(private productSvc: ProductService, private route: ActivatedRoute) { }

  Product: Product;

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productSvc.Get(id)
    .subscribe(p => {
      this.Product = p.Data;
      console.log(p);
    })
  }

}
