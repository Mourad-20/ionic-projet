import { Component,OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { Globals } from '../globals';
import { PayService } from '../../services/paye.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pay = [];
  items = [];
 src="";
 show:boolean=true
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  getValue: any;
  constructor(private PayService: PayService,private router: ActivatedRoute,private g:Globals) { }
  ngOnInit() {
      setTimeout(() => {
  this.show=!this.show
}, 200);
  this.getValue= this.router.snapshot.paramMap.get("id")

  
    this.items = this.g.pays.filter(x => x.key.includes(this.getValue));
  this.src=this.items[0].pic;
  
  /*  this.PayService.getVilles(0).orderByChild("idp").equalTo(this.getValue).on('value',snapshot=>{
     let b=snapshot.val();
     this.snapshotToArray(b)
    this.src="../../assets/payes/"+this.items[0].pic+".jpg";
    }); */
   }
    
 
   snapshotToArray(snapshot) {
this.items = Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));


};
 
  addToCart(product) {
    this.PayService.addProduct(product);
  }
 Onclickimage(product){
   this.src=product.pic;
   console.log()
 }
  /* openCart() {
    this.router.navigate(['pay']);
  } */
}
