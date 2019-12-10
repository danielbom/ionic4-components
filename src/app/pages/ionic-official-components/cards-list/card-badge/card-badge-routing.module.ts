import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardBadgePage } from './card-badge.page';

const routes: Routes = [
  {
    path: '',
    component: CardBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardBadgePageRoutingModule {}
