import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'hiddenfilter',
  pure: false
})
export class HiddenFilterPipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    if (!items) {
      return items;
    }
    return items.filter(item => ! (item.hidden === true));
  }
}
