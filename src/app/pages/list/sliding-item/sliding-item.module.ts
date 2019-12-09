import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidingItemPageRoutingModule } from './sliding-item-routing.module';

import { SlidingItemPage } from './sliding-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidingItemPageRoutingModule
  ],
  declarations: [SlidingItemPage]
})
export class SlidingItemPageModule {}
