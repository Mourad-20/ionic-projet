import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailVPage } from './detail-v.page';

const routes: Routes = [
  {
    path: '',
    component: DetailVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailVPageRoutingModule {}
