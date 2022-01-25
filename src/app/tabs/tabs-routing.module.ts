import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pays',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pay/pay.module').then(m => m.PayPageModule)
          }
        ]
      },
      {
        path: 'pays/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'pays/villes/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
       {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
         {
        path: 'pays/villes/voyages/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../voyage/voyage.module').then(m => m.VoyagePageModule)
          }
        ]
      },
      {
        path: 'pays/villes/voyages/detail/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../detailv/detail-v.module').then(m => m.DetailVPageModule)
          }
        ]
      },
         {
        path: 'voyages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../voyage/voyage.module').then(m => m.VoyagePageModule)
          }
        ]
      },
      
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
       {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/pays',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
