import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardSocialPage } from './card-social.page';

const routes: Routes = [
  {
    path: '',
    component: CardSocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardSocialPageRoutingModule {}
