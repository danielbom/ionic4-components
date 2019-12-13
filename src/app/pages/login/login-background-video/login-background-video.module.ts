import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginBackgroundVideoPageRoutingModule } from './login-background-video-routing.module';

import { LoginBackgroundVideoPage } from './login-background-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginBackgroundVideoPageRoutingModule
  ],
  declarations: [LoginBackgroundVideoPage]
})
export class LoginBackgroundVideoPageModule {}
