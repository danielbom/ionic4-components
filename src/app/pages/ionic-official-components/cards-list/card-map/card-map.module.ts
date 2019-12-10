import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardMapPageRoutingModule } from './card-map-routing.module';

import { CardMapPage } from './card-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardMapPageRoutingModule
  ],
  declarations: [CardMapPage]
})
export class CardMapPageModule {}
