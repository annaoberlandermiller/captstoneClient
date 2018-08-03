import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

menudata = [
  {link: '/home', display: 'Home'},
  {link: '/about', display: 'About'},
  {link: '/help', display: 'Help'},
  {link: '/user/list', display: 'Users'},
  {link: '/vendor/list', display: 'Vendors'},
  {link: '/product/list', display: 'Products'},
  {link: '/pr/list', display: 'Purchase Requests'},
  {link: '/pr/review', display: 'Review'}   //update the link to pr-review
];

  ngOnInit() {
  }

}
