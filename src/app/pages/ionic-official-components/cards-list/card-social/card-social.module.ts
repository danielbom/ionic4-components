import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardSocialPageRoutingModule } from './card-social-routing.module';

import { CardSocialPage } from './card-social.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardSocialPageRoutingModule
  ],
  declarations: [CardSocialPage]
})
export class CardSocialPageModule {}
