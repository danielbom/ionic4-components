import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardBadgePageRoutingModule } from './card-badge-routing.module';

import { CardBadgePage } from './card-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardBadgePageRoutingModule
  ],
  declarations: [CardBadgePage]
})
export class CardBadgePageModule {}
