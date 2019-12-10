import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicOfficialComponentsPageRoutingModule } from './ionic-official-components-routing.module';

import { IonicOfficialComponentsPage } from './ionic-official-components.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicOfficialComponentsPageRoutingModule
  ],
  declarations: [IonicOfficialComponentsPage]
})
export class IonicOfficialComponentsPageModule {}
