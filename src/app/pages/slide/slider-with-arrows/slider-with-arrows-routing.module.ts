import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderWithArrowsPage } from './slider-with-arrows.page';

const routes: Routes = [
  {
    path: '',
    component: SliderWithArrowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderWithArrowsPageRoutingModule {}
