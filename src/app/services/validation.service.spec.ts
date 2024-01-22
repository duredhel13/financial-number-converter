/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidationService } from './validation.service';

describe('Service: Validation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationService]
    });
  });

  it('should validate', inject([ValidationService], (service: ValidationService) => {
    const validateFn = service.validateNumber;
    expect(validateFn('250k')).toBeTruthy();
    expect(validateFn('10m')).toBeTruthy();
    expect(validateFn('.5b')).toBeTruthy();
    expect(validateFn('33e')).toBeFalsy();
    expect(validateFn('a123')).toBeFalsy();
    expect(validateFn('33kk')).toBeFalsy();
  }));
});
