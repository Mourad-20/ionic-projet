import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { NgAuthService } from "../../services/ng-auth.service";
import {NgForm} from '@angular/forms';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
connected:boolean=false
profil=this.g.profil
 show:boolean=true
  constructor(public router:Router,public ngAuthService: NgAuthService,public afAuth: AngularFireAuthModule,public g:Globals) { 
     this.ifconnected()
  }

  async ngOnInit() {
     this.getProfil().then(()=>{
       this.ifconnected()

     })

  }
 async getProfil(){
    setTimeout(() => {
      this.profil=this.g.profil
      console.log("profil login=",this.profil)
     this.show=false
    
}, 5000);
   
  }
ifconnected(){
  if(this.profil.length===0){
this.router.navigate(['home']);
}
}

ionViewDidEnter() {
 this.getProfil().then(()=>{
   
       this.ifconnected()
     })
  }
}
