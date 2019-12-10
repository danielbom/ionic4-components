import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardBackgroundPage } from './card-background.page';

const routes: Routes = [
  {
    path: '',
    component: CardBackgroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardBackgroundPageRoutingModule {}
