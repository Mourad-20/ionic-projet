import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { VoyageService } from '../../services/voyage.service';
import { PayService } from '../../services/paye.service';
import { Globals } from '../globals';


@Component({
  selector: 'app-detail-v',
  templateUrl: './detail-v.page.html',
  styleUrls: ['./detail-v.page.scss'],
})
export class DetailVPage implements OnInit {
// trip info
public pay=[]
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;
  getValue: any;
  constructor(private router: ActivatedRoute, private VoyageService: VoyageService,private PayService:PayService,private g:Globals) { }

  ngOnInit() {
             this.getValue= this.router.snapshot.paramMap.get("id")
        this.trip = this.VoyageService.getdetailV(this.getValue)[0];
        console.log("xx=",this.trip)

        this.trip.villes.forEach(async element => {

let pay=await this.getvilles(element) 
console.log("pay==",pay)
 let object={"pay":pay[0].category,
"ville":pay[1].villename};

          this.pay.push(object); 
        }); 
        
console.log(this.pay)
  }
  minusAdult() {
    this.adults--;
  }
    plusAdult() {
    this.adults++;
  }
    minusChildren() {
    this.children--;
  }
    // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout() {
    //this.nav.push(CheckoutTripPage);
  }

async getvilles(id:any){

return await this.PayService.getvilleid(id)

  }
}
