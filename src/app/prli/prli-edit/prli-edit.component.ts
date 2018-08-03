import { Component, OnInit } from '@angular/core';
import { PRLI } from '@prli/prli';
import { PrliService } from '@prli/prli.service';
import { Product } from '@product/product';
import { ProductService } from '@product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})
export class PrliEditComponent implements OnInit {

PRLI : PRLI;
Products : Product[];


constructor(private prliSvc: PrliService, 
  private productSvc: ProductService, 
  private route: ActivatedRoute, 
  private router: Router) { }
  

  change(): void {
    this.prliSvc.Change(this.PRLI)
    .subscribe( p => {
      this.PRLI = p.Data;
      console.log(p);
      this.router.navigateByUrl('pr/lines/'+this.PRLI.PurchaseRequestId);
     
    })
  }

  ngOnInit() {
    this.productSvc.List()
    .subscribe(v => {
      this.Products= v.Data;
      console.log("Products:", v);
    })
    let id = this.route.snapshot.params.id;
    this.prliSvc.Get(id)
    .subscribe(p => {
      this.PRLI = p.Data;
      console.log("PRLI:", p)
    });
  }
}

  


