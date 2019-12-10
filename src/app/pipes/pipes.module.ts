import { NgModule } from '@angular/core';

import { TemperaturePipe } from './temperature.pipe';
import { CapitalizePipe } from './capitalize.pipe';

export const pipes = [
  CapitalizePipe,
  TemperaturePipe
]

@NgModule({
  declarations: [...pipes],
  exports: [...pipes]
})
export class PipesModule { }
