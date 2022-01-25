import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoyagePage } from './voyage.page';

const routes: Routes = [
  {
    path: '',
    component: VoyagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoyagePageRoutingModule {}
