import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Directive({
  selector: '[appNumberPattern]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberPatternDirective, multi: true }]
})
export class NumberPatternDirective implements Validator {

  constructor(private validationService: ValidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.validationService.numberValidator()(control);
  }
}