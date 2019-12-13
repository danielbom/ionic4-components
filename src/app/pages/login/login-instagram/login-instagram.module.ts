import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginInstagramPageRoutingModule } from './login-instagram-routing.module';

import { LoginInstagramPage } from './login-instagram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginInstagramPageRoutingModule
  ],
  declarations: [LoginInstagramPage]
})
export class LoginInstagramPageModule {}
