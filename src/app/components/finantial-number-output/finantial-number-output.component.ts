import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-finantial-number-output',
  templateUrl: './finantial-number-output.component.html'
})
export class FinantialNumberOutputComponent implements OnInit {
  result: string = '';

  constructor(
    private route: ActivatedRoute,
    private validationService: ValidationService
  ) {}

  ngOnInit() {
    const number = this.route.snapshot.params['number'] || this.route.snapshot.queryParamMap.get('number');
    
    try {
      this.result = this.formatNumber(number || '');
    } catch (error: unknown ) {
      if (error instanceof Error) {
        this.result = error.message;
      }
    }
  }

  formatNumber(number: string): string {
    if (!this.validationService.validateNumber(number)) {
      throw new Error('Not a valid abbreviated number');
    }

    const abbreviationsMap: { [key: string]: number } = {
      k: 1e3,
      m: 1e6,
      b: 1e9
    }

    const digits = number.slice(0, number.length - 1);
    const abbreviation = number.slice(number.length - 1);

    const formattedNumber = Number(digits);
    const factor = abbreviationsMap[abbreviation];

    return Intl.NumberFormat().format(formattedNumber * factor);
  }
}
