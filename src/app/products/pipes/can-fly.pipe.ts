import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFly implements PipeTransform {

  transform(value: string ):string {
   return (value)
   ? value = 'Vuela'
   : value = 'No vuela'
  }

}
