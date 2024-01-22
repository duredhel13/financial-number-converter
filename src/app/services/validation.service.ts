import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  numberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return { invalidNumber: !this.validateNumber(control.value) };
    };
  }

  validateNumber(number: string): boolean {
    const regex = new RegExp('([0-9]?)+.?[0-9]+(k|m|b)', 'i');
    return regex.test(number);
  }
}
