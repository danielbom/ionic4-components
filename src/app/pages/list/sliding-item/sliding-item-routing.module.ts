import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidingItemPage } from './sliding-item.page';

const routes: Routes = [
  {
    path: '',
    component: SlidingItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidingItemPageRoutingModule {}
