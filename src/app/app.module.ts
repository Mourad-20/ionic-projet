import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DatePipe } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { Globals } from './globals';
import { UserSvc } from 'src/services/userSvc';
import {NgAuthService} from 'src/services/ng-auth.service';
import {PayService} from 'src/services/paye.service';
import { VoyagePage } from './voyage/voyage.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoyageService } from 'src/services/voyage.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
          FormsModule,
           ReactiveFormsModule,

    IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireAuthModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,                                   
    AngularFireDatabaseModule,
    ],
    
  providers: [
    StatusBar,
    SplashScreen,
    Globals,
    FormsModule,
    VoyagePage,
    UserSvc,
    DatePipe,
    PayService,
    VoyageService,
    NgAuthService,
    ReactiveFormsModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
