import { Component,OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { Globals } from '../globals';
import { PayService } from '../../services/paye.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pay = [];
  items = [];
  villes = [];
  itemsserch = [];
  show:boolean=true
 src="";
getValue: any;
public searchTerm: string = "";
  constructor(private g:Globals,private   PayService: PayService,private router: ActivatedRoute) { }
  ngOnInit() {
      
      setTimeout(() => {
  this.show=!this.show
}, 2000);
         this.getValue= this.router.snapshot.paramMap.get("id")

    this.PayService.getVilles().orderByChild("idp").equalTo(this.getValue).on('value',snapshot=>{
     let b=snapshot.val();
     this.snapshotToArray(b).then(res=>{
this.PayService.getVilles().on('value',snapshot=>{
     let b=snapshot.val();
      this.g.Villes = Object.entries(b).map(e => Object.assign(e[1], { key: e[0] }));
    });
     }
     )
   });
   
    
  }
   snapshotToArray=async(snapshot) =>{
    
this.villes = Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));




};
  chargerArticlebyname() {
    this.villes = this.g.Villes.filter(x => x.name.includes(this.searchTerm.toLowerCase()));
   
  } 
 
}
