import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "temperature"
})
export class TemperaturePipe implements PipeTransform {
  transform(value: any, args: any): any {
    const c = Math.round(parseInt(value, 10) - 273.15);
    const f = Math.round((parseInt(value, 10) * 9) / 5 - 459.67);
    return args === "c" ? `${c} °C` : `${f} °F`;
  }
}
