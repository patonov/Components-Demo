import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxLength]',
  standalone: true,
  providers: [
  {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: MaxLengthDirective
  },
  ],
})
export class MaxLengthDirective implements Validator{
  @Input() appMaxLength: number | undefined;
  
  validate(control: AbstractControl): ValidationErrors | null {
    const len = control.value?.length || 0;
    console.log({len});
    console.log({maxCount: this.appMaxLength});

    if(!this.appMaxLength || len <= this.appMaxLength){
      return null;
    }

    return { appMaxLength: this.appMaxLength };

  }
    
}
