import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder ,FormControl} from '@angular/forms';
import { User } from '../entities/user';
import { Globals } from '../globals';
import { Router } from "@angular/router";
import { PayService } from '../../services/paye.service';
import { VoyageService } from 'src/services/voyage.service';
import{format} from 'date-fns'
import { RangeChangeEventDetail } from '@ionic/core';
import { VoyagePage } from '../voyage/voyage.page';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {
 userList = [];
 show: boolean = true
  userData: User;
  userForm: FormGroup;
  vs:any
  name = new FormControl('');
  dateValue=format(new Date(),'yyyy-MM-dd')
    dateValue1
  dateValue2
  dateD
  dateF
  ville:string
  voyages:any
villes=[]
  showpicker=false
   upperValue=0;
  lowerValue=0;
  changedKnob: string;
  loading:boolean=true
  constructor(public fb: FormBuilder ,public Router:Router,private PayService: PayService,private g:Globals,public VoyageService:VoyageService,public VoyagePage:VoyagePage) {
   }

  ngOnInit() {
  
      this.PayService.getVilles().on('value', snapshot=>{
     let b=snapshot.val();
     
       this.villes= Object.entries(b).map(e => Object.assign(e[1], { key: e[0] }));
    
  this.lowerValue = 100;
    this.upperValue = 5000;
    const dualRange = document.querySelector('#dual-range') as HTMLIonRangeElement;
    dualRange.value = { lower: this.lowerValue, upper: this.upperValue };

      });
    this.userForm = this.fb.group({
      Nom: ['', [Validators.required]],
      Prenom: ['', [Validators.required]],
      Email: ['', [Validators.required]],
       Tel: ['', [Validators.required]],
      MDP: ['', [Validators.required]]
    })

  }
   knobChange(range: CustomEvent<RangeChangeEventDetail>) {
    if (range.detail.value['lower'] !== this.lowerValue) {
      this.lowerValue = range.detail.value['lower'];
   
    } else if (range.detail.value['upper'] !== this.upperValue) {
      this.upperValue = range.detail.value['upper'];
     
    }
  }

  


  dateChanged(x,value){
    if(x=="vale1"){
this.dateValue1=value
 this.dateD = new Date(value);
 this.dateD = this.dateD.toLocaleDateString("en-GB")
 
    }
    else{
this.dateValue2=value
 this.dateF = new Date(value);
 this.dateF = this.dateF.toLocaleDateString("en-GB")
    }
  }
search(){
  this.show=false
      this.VoyageService.getVoyages(0).orderByChild("date").startAt(this.dateValue).on('value',snapshot=>{
    let b=snapshot.val();
 
    this.snapshotToArray(b).then(x=>{

        /* let vare= x.filter(item=>{
             (this.ville!=undefined && this.ville.length>0)?item.villes.some(v=>v.idv==this.ville):true
          && (this.dateD!=undefined)?item.date>=this.dateD:true
          && (this.dateF!=undefined)?item.date<=this.dateF:true
          && (this.lowerValue!=undefined && this.lowerValue!=0)?item.prix>=this.lowerValue:true
          && (this.upperValue!=undefined && this.upperValue!=0)?item.prix<=this.upperValue:true
          ;
        }) */

     this.voyages=x.filter(item=>
            ((this.ville!=undefined && this.ville.length>0)?item.villes.some(v=>v.idv==this.ville):item)
          && ((this.dateValue1!=undefined)?new Date(item.date)>=new Date(this.dateValue1):item)
          && ((this.dateValue2!=undefined)?new Date(item.date)<=new Date(this.dateValue2):item)
           &&( (this.lowerValue!=undefined && this.lowerValue!=0)?item.prix>=this.lowerValue:item)
        && ((this.upperValue!=undefined && this.upperValue!=0)?item.prix<=this.upperValue:item)

        
        )
        this.PayService.getVilles().on('value',snapshot=>{
     let b=snapshot.val();
      this.g.Villes = Object.entries(b).map(e => Object.assign(e[1], { key: e[0] }));
    });
      this.PayService.getPays().on('value',snapshot=>{
     let b=snapshot.val();
      this.g.pays = Object.entries(b).map(e => Object.assign(e[1], { key: e[0] }));
    });
          this.g.Voyages=  this.voyages
  })

  });
   setTimeout(() => {
  this.loading=false
}, 3000);
}
close(){
  this.show=!this.show
  
}
 snapshotToArray =async (snapshot) => 
   
 {
this.voyages = Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));
 return this.voyages
};

}
