import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailVPageRoutingModule } from './detail-v-routing.module';

import { DetailVPage } from './detail-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailVPageRoutingModule
  ],
  declarations: [DetailVPage]
})
export class DetailVPageModule {}
