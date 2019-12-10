import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionListPageRoutingModule } from './accordion-list-routing.module';

import { AccordionListPage } from './accordion-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionListPageRoutingModule,

    SharedModule
  ],
  declarations: [AccordionListPage]
})
export class AccordionListPageModule {}
