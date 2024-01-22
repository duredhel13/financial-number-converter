import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finantial-number-input',
  templateUrl: './finantial-number-input.component.html'
})
export class FinantialNumberInputComponent {
  abbreviatedNumber = '';

  constructor(private router: Router ) { }

  onSubmit() { 
    this.router.navigate(['/output', { number: this.abbreviatedNumber }]);
   }
}
