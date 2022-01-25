import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormGroup, Validators, FormBuilder ,FormControl} from '@angular/forms';
import { User } from '../entities/user';
import { UserSvc } from '../../services/userSvc';
import {NgAuthService} from '../../services/ng-auth.service';
import {PayService} from '../../services/paye.service';
import { VoyageService } from 'src/services/voyage.service';
import { Router } from "@angular/router";
import { Globals } from '../globals';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
userList = [];
  userData: User;
  userForm: FormGroup;
  name = new FormControl('');
  connected:boolean=false
  profil=[]
  constructor(public router:Router,public g:Globals, public fb: FormBuilder,public UserSvc:UserSvc,public NgAuthService:NgAuthService ,public Router:Router,public paysSvc:PayService,public v:VoyageService) {
    this.userData = {} as  User;
   }

  ngOnInit() {
    this.userForm = this.fb.group({
      Nom: ['', [Validators.required]],
      Prenom: ['', [Validators.required]],
      Email: ['', [Validators.required]],
       Tel: ['', [Validators.required]],
      MDP: ['', [Validators.required]]
    })
  }
  async sinup(){
    this.NgAuthService.SignUp(this.userForm.get('Email').value,this.userForm.get('MDP').value).then(res=>{
      this.CreateRecord();
    })
    //console.log(this.NgAuthService.userState.uid);

  }
   async getProfil(){
    setTimeout(() => {
   this.router.navigate(['tabs/profile']);
}, 3000);
     
  }

  async CreateRecord(){
     this.UserSvc.create_Profil(this.userForm.value)
      .then(resp => {
        //Reset form
     this.getProfil()
        console.log(resp)
      })
      .catch(error => {

        console.log(error);
      });
  }
  addpay(){
    this.v.getAllVoyages().forEach(item=>{
    this.UserSvc.create_pay(item)

console.log(item)});

  }

}
