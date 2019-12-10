import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardMapPage } from './card-map.page';

const routes: Routes = [
  {
    path: '',
    component: CardMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardMapPageRoutingModule {}
