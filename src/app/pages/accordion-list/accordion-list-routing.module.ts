import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionListPage } from './accordion-list.page';

const routes: Routes = [
  {
    path: '',
    component: AccordionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionListPageRoutingModule {}
