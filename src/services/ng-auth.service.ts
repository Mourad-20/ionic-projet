import { Injectable, NgZone } from '@angular/core';
//import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import { Globals } from 'src/app/globals';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }

@Injectable({
  providedIn: 'root'
})

export class NgAuthService {
    

    constructor(
      public afs: AngularFirestore,
      public afAuth: AngularFireAuth,
      public router: Router,
      private g: Globals,
      public ngZone: NgZone,
      public firebase:AngularFireDatabase
    ) 
    {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.g.userState = user;
          localStorage.setItem('user', JSON.stringify(this.g.userState));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
        
      })
    }
  
    async SignIn(email, password) {
  
       var resultat= await this.afAuth.signInWithEmailAndPassword(email, password)
    this.firebase.database.ref('Profil').orderByChild('Email').equalTo(resultat.user.email).on('value',snapshot=>{
     let b=snapshot.val();
     console.log("b",b)
    this.snapshotToArray(b)
   
    });

         
    } 

 snapshotToArray(snapshot) {
   this.g.profil=Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }))[0] as any;

};


   async SignUp(email, password) {
 var resultat= await this.afAuth.createUserWithEmailAndPassword(email, password)
 
    this.firebase.database.ref('Profil').orderByChild('Email').equalTo(resultat.user.email).on('value',snapshot=>{
     let b=snapshot.val();
     console.log("b",b)
    this.snapshotToArray(b)

        
    })}

    SendVerificationMail() {
        return this.afAuth.currentUser.then(u => u.sendEmailVerification())
        .then(() => {
          this.router.navigate(['email-verification']);
        })
    }    
  
    ForgotPassword(passwordResetEmail) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }
  
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null && user.emailVerified !== false) ? true : false;
    }
  
   /*  GoogleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider());
    } */
  
    AuthLogin(provider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
         this.ngZone.run(() => {
            this.router.navigate(['dashboard']);
          })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
    }
  
    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

      this.g.userState = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }
      return userRef.set(this.g.userState, {
        merge: true
      })
    }
   
    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      })
    }  
}