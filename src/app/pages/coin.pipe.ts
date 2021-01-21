import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coin'
})
export class CoinPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
