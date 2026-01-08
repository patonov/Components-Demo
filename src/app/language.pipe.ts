import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
  standalone: true
})
export class LanguagePipe implements PipeTransform {

  transform(language: string, newLanguage: string): string {
    return language = newLanguage;
  }

}
