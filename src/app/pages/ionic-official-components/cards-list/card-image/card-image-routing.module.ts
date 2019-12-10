import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardImagePage } from './card-image.page';

const routes: Routes = [
  {
    path: '',
    component: CardImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardImagePageRoutingModule {}
