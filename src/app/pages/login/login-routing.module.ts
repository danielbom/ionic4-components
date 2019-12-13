import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'login-one',
    loadChildren: () => import('./login-one/login-one.module').then( m => m.LoginOnePageModule)
  },
  {
    path: 'login-instagram',
    loadChildren: () => import('./login-instagram/login-instagram.module').then( m => m.LoginInstagramPageModule)
  },
  {
    path: 'login-slider',
    loadChildren: () => import('./login-slider/login-slider.module').then( m => m.LoginSliderPageModule)
  },
  {
    path: 'login-background-video',
    loadChildren: () => import('./login-background-video/login-background-video.module').then( m => m.LoginBackgroundVideoPageModule)
  },
  {
    path: 'login-background-slider',
    loadChildren: () => import('./login-background-slider/login-background-slider.module').then( m => m.LoginBackgroundSliderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
