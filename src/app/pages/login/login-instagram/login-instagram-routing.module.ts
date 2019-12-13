import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginInstagramPage } from './login-instagram.page';

const routes: Routes = [
  {
    path: '',
    component: LoginInstagramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginInstagramPageRoutingModule {}
