import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SinginPage } from './singin.page';

import { SinginPageRoutingModule } from './singin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinginPageRoutingModule
  ],
  declarations: [SinginPage]
})
export class SinginPageModule {}
