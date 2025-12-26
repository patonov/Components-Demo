import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  standalone: true
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], callBackFn: (acc: unknown, curr: unknown) 
  => unknown, initialValue: T): unknown {
    return array.reduce(callBackFn, initialValue);
  }


}
