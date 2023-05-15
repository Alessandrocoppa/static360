import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riduciClassifica'
})
export class RiduciClassificaPipe implements PipeTransform {

  transform(value: string, max:number = 10): string {
    if(value.length > max )
      return value.slice(0,max)+"..."
    else
      return value;
  }

}
