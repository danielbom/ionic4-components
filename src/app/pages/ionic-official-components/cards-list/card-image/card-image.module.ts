import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardImagePageRoutingModule } from './card-image-routing.module';

import { CardImagePage } from './card-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardImagePageRoutingModule
  ],
  declarations: [CardImagePage]
})
export class CardImagePageModule {}
