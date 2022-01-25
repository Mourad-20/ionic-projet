import { Injectable } from '@angular/core';
import { Globals } from 'src/app/globals';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class VoyageService {
 public  item=[];
 public villes=[];
  private data = [
    {
     
      date: '01/02/2022',
      dure:15,
      prix:2000,
      unite:'DH',
      name:'promo d\'hiver',
      descreption:' descreption pay descreption pay descreption pay descreption pay descreption pay descreption pay',
      pic:"tourisme-morocco",
      villedepart:1,
      villes: [
        { idv: "MtosFbyGB4E4VTbTUta" },
        { idv: "-MtosqkxDIMgQWif0-Gn" },
        { idv: "-MtotY3RIKkEFmXaxIb4"},
     /*    { id: 3, name: 'Hawai', pic: 'maroc04' } */
      ],
         option: [
        { libelle:"transport inclus" },
        { libelle:"Hotel 5 etoile" },
        { libelle:"Animation"},
     /*    { id: 3, name: 'Hawai', pic: 'maroc04' } */
      ]
    },
    {
      
    date: '01/02/2022',
      dure:15,
      prix:2000,
      unite:'DH',
      
      name:'To MERZOUGA',
      descreption:' descreption pay descreption pay descreption pay descreption pay descreption pay descreption pay',
      pic:"tourisme-morocco",
      villedepart:1,
      villes: [
        { idv: "MtosFbyGB4E4VTbTUta" },
        { idv: "-MtosqkxDIMgQWif0-Gn" },
        { idv: "-MtotY3RIKkEFmXaxIb4"},
     /*    { id: 3, name: 'Hawai', pic: 'maroc04' } */
      ],
       option: [
        { libelle:"transport inclus" },
        { libelle:"Hotel 5 etoile" },
        { libelle:"Animation"},
     /* { id: 3, name: 'Hawai', pic: 'maroc04' } */
      ]
    },
    {
      date: '01/02/2022',
      dure:15,
      prix:2000,
      unite:'DH',
      name:'Voyage au SUD',
      descreption:' descreption pay descreption pay descreption pay descreption pay descreption pay descreption pay',
      pic:"tourisme-morocco",
      villedepart:1,
      villes: [
        { idv: "-MtosFc2gn_V15oYeon_" },
        { idv: "-MtosqkyFvmIclk3vzHn" },
        { idv: "-MtosFc06Bzhf1Pp2hgs"},
     /* { id: 3, name: 'Hawai', pic: 'maroc04' } */
      ],
       option: [
        { libelle:"transport inclus" },
        { libelle:"Hotel 5 etoile" },
        { libelle:"Animation"},
     /*    { id: 3, name: 'Hawai', pic: 'maroc04' } */
      ]
    }
  ];
 
  private cart = [];
 
  constructor(private g: Globals, private firebase: AngularFireDatabase) {
 }
 
  getAllVoyages() {
  /*  return this.firebase.database.ref('Voyages') */
  return this.data
  }

 getVoyages(idv:any) {
/*     return this.data.filter(item=>item.villes.some(v=>v.idv===idv));
 */
   return this.firebase.database.ref('Voyages')

}
getVoyage(idv:any) {
    return this.g.Voyages.filter(item=>item.villes.some(v=>v.idv==idv))
}
getdetailV(idv:any) {
    return this.g.Voyages.filter(item=>item.key==idv)
}

  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}