import { Injectable } from '@angular/core';
//import { User } from './entities/user';

Injectable()
export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }
export class Globals{

     public userState : any ;
     public pays = [];
    public Villes  = [];
    public Voyages=[]
    public profil=[]
/*     showLoadingBlock (value : any) {
        let shand = document.getElementById('loadingBlock') ;
        let val=((value == true) ? "block" : "none")
       
  shand.style.display = val;

       
    } */
}