import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardBackgroundPageRoutingModule } from './card-background-routing.module';

import { CardBackgroundPage } from './card-background.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardBackgroundPageRoutingModule
  ],
  declarations: [CardBackgroundPage]
})
export class CardBackgroundPageModule {}
