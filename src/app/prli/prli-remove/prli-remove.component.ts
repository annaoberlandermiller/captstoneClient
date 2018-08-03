import { Component, OnInit } from '@angular/core';
import { PRLI } from '@prli/prli';
import { PrliService } from '@prli/prli.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prli-remove',
  templateUrl: './prli-remove.component.html',
  styleUrls: ['./prli-remove.component.css']
})
export class PrliRemoveComponent implements OnInit {

  PRLI: PRLI = new PRLI;

  remove(): void {
 
    this.prliSvc.Remove(this.PRLI)
    .subscribe(p => {
      console.log(p);
      this.router.navigateByUrl('pr/list');
    } )
  }
  
  constructor(private prliSvc: PrliService, 
    private route: ActivatedRoute, 
    private router: Router) { }
    

    ngOnInit() {
      let id = this.route.snapshot.params.id;
      this.prliSvc.Get(id)
      .subscribe(p => {this.PRLI = p.Data;
        console.log(p);
    })
}
}