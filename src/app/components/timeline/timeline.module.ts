import { IonicModule } from '@ionic/angular';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  TimelineComponent,
  TimelineItemComponent,
  TimelineTimeComponent
} from "./timeline.component";

@NgModule({
  declarations: [
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [TimelineComponent, TimelineItemComponent, TimelineTimeComponent]
})
export class TimelineModule {}
