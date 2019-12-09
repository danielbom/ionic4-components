import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThemingPageRoutingModule } from './theming-routing.module';

import { ThemingPage } from './theming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThemingPageRoutingModule
  ],
  declarations: [ThemingPage]
})
export class ThemingPageModule {}
