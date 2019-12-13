import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBackgroundVideoPage } from './login-background-video.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBackgroundVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginBackgroundVideoPageRoutingModule {}
