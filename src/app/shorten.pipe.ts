import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any , cut: number , parm2: string): any {
    if (value.length > cut){
      return value.substr(0 , cut) + parm2
    }
    return value;
  }

}
