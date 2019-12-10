import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
  // Autocapitalizes the first letter of each word in a phrase.
  // Input: {{'john doe' | capitalize}}
  // Output: John Doe
  transform(value: any, ...args: any[]): any {
    const capitilize = word =>
      word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

    if (value) {
      const words = value.split(" ");
      value = words.map(capitilize).join(" ");
    }
    return value;
  }
}
