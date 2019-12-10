import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicOfficialComponentsPage } from './ionic-official-components.page';

const routes: Routes = [
  {
    path: '',
    component: IonicOfficialComponentsPage
  },
  {
    path: 'buttons-list',
    loadChildren: () => import('./buttons-list/buttons-list.module').then( m => m.ButtonsListPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'cards-list',
    loadChildren: () => import('./cards-list/cards-list.module').then( m => m.CardsListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicOfficialComponentsPageRoutingModule {}
