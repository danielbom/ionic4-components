import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSliderPageRoutingModule } from './login-slider-routing.module';

import { LoginSliderPage } from './login-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSliderPageRoutingModule
  ],
  declarations: [LoginSliderPage]
})
export class LoginSliderPageModule {}
