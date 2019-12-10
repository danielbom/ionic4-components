import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TimelinePage } from "./timeline.page";

import { SharedModule } from "./../../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: TimelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class TimelinePageRoutingModule {}
