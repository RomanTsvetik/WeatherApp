import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'dateTransform'
})
export class DataTransform implements PipeTransform {
  transform(value: any) {
    return new Date(value * 1000).toLocaleDateString()
  }
}