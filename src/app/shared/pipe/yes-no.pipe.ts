import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lb-yesNo',
})
export class YesNoPipe implements PipeTransform {

  // tslint:disable-next-line: prefer-function-over-method
  public transform(value: boolean): String {
    return (value !== null && value) ? 'Yes' : 'No';
  }
}
