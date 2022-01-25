import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoyagePageRoutingModule } from './voyage-routing.module';

import { VoyagePage } from './voyage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoyagePageRoutingModule
  ],
  declarations: [VoyagePage]
})
export class VoyagePageModule {}
