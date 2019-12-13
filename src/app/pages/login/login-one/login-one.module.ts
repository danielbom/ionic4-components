import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginOnePageRoutingModule } from './login-one-routing.module';

import { LoginOnePage } from './login-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginOnePageRoutingModule
  ],
  declarations: [LoginOnePage]
})
export class LoginOnePageModule {}
