import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular';

import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { TimelineModule } from "./timeline/timeline.module";

@NgModule({
  declarations: [AccordionListComponent],
  imports: [CommonModule, IonicModule],
  exports: [TimelineModule, AccordionListComponent]
})
export class ComponentsModule {}
