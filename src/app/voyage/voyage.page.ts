import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VoyageService } from '../../services/voyage.service';
import { Globals } from '../globals';
@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.page.html',
  styleUrls: ['./voyage.page.scss'],
})
export class VoyagePage implements OnInit {
  pay = [];
  items :any;
  voyages = [];
  itemsserch = [];
  getValue: any;
  show:boolean=true
 public searchTerm: string = "";
 
  constructor(private router: ActivatedRoute, private VoyageService: VoyageService,private g:Globals) { }

  ngOnInit() {
     setTimeout(() => {
  this.show=!this.show
}, 2000);
         console.log('etat0=',this.g.Voyages)

     this.getValue= this.router.snapshot.paramMap.get("id");

 (this.getValue!=null)?
    (this.VoyageService.getVoyages(0).orderByChild("date").startAt("01/01/2022").on('value',snapshot=>{
    let b=snapshot.val();
     
  this.snapshotToArray(b).then(x=>{
this.items=this.VoyageService.getVoyage(x)
  })
 
  })):this.items=this.g.Voyages

}
 snapshotToArray =async (snapshot) => 
   
 {
this.voyages = Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));
 this.g.Voyages = Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));
 return this.getValue
};
}
