import { Component, OnInit } from '@angular/core';
import { PRLI } from '@prli/prli';
import { PrliService } from '@prli/prli.service';
import { Product } from '@product/product';
import { ProductService } from '@product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})

export class PrliCreateComponent implements OnInit {

PRLI : PRLI = new PRLI();
Products : Product[];
PurchaseRequestId: number;

constructor(private prliSvc: PrliService, 
  private productSvc: ProductService, 
  private route: ActivatedRoute, 
  private router: Router) { }
  

create(): void {
  this.prliSvc.Create(this.PRLI)
  .subscribe(p => { 
    console.log(p);
    this.router.navigateByUrl('pr/lines/'+this.PRLI.PurchaseRequestId);
  });
   
  }
  ngOnInit() {
    this.PRLI.PurchaseRequestId = this.route.snapshot.params.id;  
    this.productSvc.List()
    .subscribe(p => {
      this.Products = p.Data;
      console.log("Products:", p);
    });

  }
}