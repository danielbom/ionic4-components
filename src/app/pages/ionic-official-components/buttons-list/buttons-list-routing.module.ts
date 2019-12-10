import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsListPage } from './buttons-list.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsListPageRoutingModule {}
