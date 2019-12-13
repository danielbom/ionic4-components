import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSliderPage } from './login-slider.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSliderPageRoutingModule {}
