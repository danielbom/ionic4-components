import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBackgroundSliderPage } from './login-background-slider.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBackgroundSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginBackgroundSliderPageRoutingModule {}
