import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hero'
})
export class HeroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let val = value*10;
    return val;
  }

}
