import {Injectable} from '@angular/core';
import {HttpClient,	HttpErrorResponse,	HttpHeaders} from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Globals } from 'src/app/globals';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable()
export class PayService {
 public  item=[];
 public pay=[];
 public ville=[];
constructor(private g: Globals, private firebase: AngularFireDatabase) {

	}
/*   private data = [
    {
      id:1,
      category: 'MAROC',
      descreption:' Le Maroc, pays d\'Afrique du Nord sur le littoral de l\'Atlantique et de la Méditerranée, se distingue par ses influences berbères, arabes et européennes.',
      pic:"tourisme-morocco",
      expanded: true,
      products: [
        { id: 0, pic: 'maroc01' },
        { id: 1,  pic: 'maroc02' },
        { id: 2,  pic: 'maroc03' },
         { id: 3, name: 'Hawai', pic: 'maroc04' } 
      ],
 villes: [
        { id: 0, name: 'ville01', pic: 'canada01' },
        { id: 1, name: 'ville02', pic: 'canada02' },
        { id: 2, name: 'ville03', pic: 'canada03' }
      ]
    },
    {
      id:2,
      category: 'ITALIE',
      pic:"immersion-italie",
      descreption:' descreption pay descreption pay descreption pay descreption pay descreption pay descreption pay',

      products: [
        { id: 3, name: 'Mac & Cheese', pic: 'canada01' },
        { id: 4, name: 'Bolognese', pic: 'canada02' }
      ],
 villes: [
        { id: 5, name: 'ville01', pic: 'canada01' },
        { id: 6, name: 'ville02', pic: 'canada02' },
        { id: 7, name: 'ville03', pic: 'canada03' }
      ]
    },
    {
      id:3,
      category: 'CANADA',
      pic:"tourissim-canada",
      descreption:' descreption pay descreption pay descreption pay descreption pay descreption pay descreption pay',

      products: [
        { id: 6, name: 'Ham & Egg', pic: 'canada01' },
        { id: 7, name: 'Basic', pic: 'canada02' },
        { id: 8, name: 'Ceaser', pic: 'canada03' }
      ],
 villes: [
        { id: 3, name: 'ville01', pic: 'canada01' },
        { id: 4, name: 'ville02', pic: 'canada02' },
        { id: 9, name: 'ville03', pic: 'canada03' }
      ]
    }
  ]; */
/*   private villes = [
 
        { idp:"-MtonvE7XDLgqCrKX6OP", name: 'ville01', pic: 'canada01' },
        { idp:"-MtonvE7XDLgqCrKX6OP", name: 'ville02', pic: 'canada02' },
        { idp:"-MtonvE7XDLgqCrKX6OP", name: 'ville03', pic: 'canada03' }
      
  ]; */
  private cart = [];
/*  private data=[
   {
     idp: "-MtonvE7XDLgqCrKX6OP",
key: "-MtosFbyGB4E4VTbTUta",
name: "ville01",
pic: "canada01"
   },
     {
     idp: "-MtonvE7XDLgqCrKX6OP",
key: "-MtosFbyGB4E4VTbTUta",
name: "ville01",
pic: "canada01"
   },
    {
     idp: "-MtonvE7XDLgqCrKX6OP",
key: "-MtosFbyGB4E4VTbTUta",
name: "ville01",
pic: "canada01"
   },
    {
     idp: "-MtonvE7XDLgqCrKX6OP",
key: "-MtosFbyGB4E4VTbTUta",
name: "ville01",
pic: "canada01"
   },
    {
     idp: "-MtonvE7XDLgqCrKX6OP",
key: "-MtosFbyGB4E4VTbTUta",
name: "ville01",
pic: "canada01"
   },
    {
     idp: "-MtonvE7XDLgqCrKX6OP",
key: "-MtosFbyGB4E4VTbTUta",
name: "ville01",
pic: "canada01"
   },
 ] */

 
  getPays() {
  return this.firebase.database.ref('Pays')
  }
 getVilles() {
     return this.firebase.database.ref('Villes') 
  
  }

 async getvilleid(idv:any) {

  let vare = await this.getville(idv)
  console.log("mohammed==",vare)
    let obj=this.g.pays.filter(item=>item.key==vare[0].idp);
    obj.push({"villename":vare[0].name})
    return obj

}

  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

  getville=async (y)=>{
   return    this.g.Villes.filter(x=>x.key===y.idv)
  };
}