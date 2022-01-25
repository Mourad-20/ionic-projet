import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { NgAuthService } from "../../services/ng-auth.service";
import {NgForm} from '@angular/forms';
import { Globals } from '../globals';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public email: string = "";
public pass: string = "";
connected:boolean=false
profil=[]
  constructor(public router:Router,public ngAuthService: NgAuthService,public afAuth: AngularFireAuthModule,public g:Globals) { }

  ngOnInit() {
  }
async Auth(){
  await this.ngAuthService.SignIn(this.email, this.pass)
   await this.getProfil()
 
}
 async getProfil(){
    setTimeout(() => {
  this.router.navigate(['tabs/profile']);
}, 500);
     
  }
}
