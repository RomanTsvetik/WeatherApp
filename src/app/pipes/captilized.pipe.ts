import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'captilized'
})
export class Captilized implements PipeTransform {
  transform(value: string) {
    return value[0].toUpperCase() + value.slice(1)
  }
}