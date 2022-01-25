import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PayService } from '../../services/paye.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {
 constructor(private router: Router, private PayService: PayService,private g:Globals) { }
  pay = [];
   show: boolean = true
  items :any;
  itemsserch;
 public searchTerm: string = "";
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  routerLink: any;
  ngOnInit() {
   setTimeout(() => {
  this.show=!this.show
}, 5000);
   this.PayService.getPays().on('value',snapshot=>{
     let b=snapshot.val();
     this.snapshotToArray(b)
    });
  
  
  }
   snapshotToArray(snapshot) {

this.g.pays=this.items = Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));

};


  addToCart(product) {
    this.PayService.addProduct(product);
  }
  chargerArticlebyname() {
    this.items = this.g.pays.filter(x => x.category.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  openCart() {
    this.router.navigate(['pay']);
  }

}
