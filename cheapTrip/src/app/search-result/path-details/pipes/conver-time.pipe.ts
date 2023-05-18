import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converTime'
})
export class ConverTimePipe implements PipeTransform {

  transform(minutes: number): any {
    const days = Math.floor(minutes / 60 / 24);
    const dayStr = days < 1 ? '' : days + $localize`:@@days_letter:d`;
    const hours = Math.floor(minutes / 60 - days * 24);
    const hourStr = hours < 1 ? '' : hours + $localize`:@@hours_letter:h`;
    const min = minutes - days * 24 * 60 - hours * 60;
    const minStr = min +$localize`:@@minutes_letters:min`;

    return dayStr + ' ' + hourStr + ' ' + minStr;
  }

}
