import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaces',
  standalone: true,
})
export class ReplaceSpacesPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\s/g, '&nbsp;');
  }
}
