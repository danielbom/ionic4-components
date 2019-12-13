import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginBackgroundSliderPageRoutingModule } from './login-background-slider-routing.module';

import { LoginBackgroundSliderPage } from './login-background-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginBackgroundSliderPageRoutingModule
  ],
  declarations: [LoginBackgroundSliderPage]
})
export class LoginBackgroundSliderPageModule {}
