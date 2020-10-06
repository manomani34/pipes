import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // if my page is small and there is not a big masse of data set pure is useful but else, set pure = true
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any , FilterString: string , field: string): any {
    if(value.length === 0 || FilterString === ''){
      return value;
    }
    const tempArray = [];
    for(let item of value){
      if(item[field] === FilterString ){
        tempArray.push(item);
      }
    }
    return tempArray;
  }

}
