import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsListPageRoutingModule } from './buttons-list-routing.module';

import { ButtonsListPage } from './buttons-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsListPageRoutingModule
  ],
  declarations: [ButtonsListPage]
})
export class ButtonsListPageModule {}
