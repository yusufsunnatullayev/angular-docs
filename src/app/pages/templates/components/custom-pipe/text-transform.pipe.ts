import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
})
export class TextTransformPipe implements PipeTransform {
  transform(value: string, format: 'uppercase' | 'lowercase' = 'lowercase'): string {
    if (format === 'uppercase') {
      return value.toUpperCase();
    }

    return value.toLowerCase();
  }
}
