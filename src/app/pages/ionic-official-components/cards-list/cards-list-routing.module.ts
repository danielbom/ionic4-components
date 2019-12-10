import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsListPage } from './cards-list.page';

const routes: Routes = [
  {
    path: '',
    component: CardsListPage
  },
  {
    path: 'card-background',
    loadChildren: () => import('./card-background/card-background.module').then( m => m.CardBackgroundPageModule)
  },
  {
    path: 'card-image',
    loadChildren: () => import('./card-image/card-image.module').then( m => m.CardImagePageModule)
  },
  {
    path: 'card-social',
    loadChildren: () => import('./card-social/card-social.module').then( m => m.CardSocialPageModule)
  },
  {
    path: 'card-map',
    loadChildren: () => import('./card-map/card-map.module').then( m => m.CardMapPageModule)
  },
  {
    path: 'card-badge',
    loadChildren: () => import('./card-badge/card-badge.module').then( m => m.CardBadgePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsListPageRoutingModule {}
