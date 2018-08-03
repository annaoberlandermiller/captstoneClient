import { Component, OnInit } from '@angular/core';
import { ProductService } from '@product/product.service';
import { Product } from '@product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

Products: Product[];

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.productSvc.List()
    .subscribe(p => {
      this.Products = p.Data;
      console.log(p);
    })
  }

}
