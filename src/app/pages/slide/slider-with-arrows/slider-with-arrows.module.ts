import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderWithArrowsPageRoutingModule } from './slider-with-arrows-routing.module';

import { SliderWithArrowsPage } from './slider-with-arrows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderWithArrowsPageRoutingModule
  ],
  declarations: [SliderWithArrowsPage]
})
export class SliderWithArrowsPageModule {}
