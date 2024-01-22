import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinantialNumberInputComponent } from './components/finantial-number-input/finantial-number-input.component';
import { FinantialNumberOutputComponent } from './components/finantial-number-output/finantial-number-output.component';
import { FormsModule } from '@angular/forms';
import { NumberPatternDirective } from './directives/number-pattern.directive';

@NgModule({
  declarations: [		
    AppComponent,
      FinantialNumberInputComponent,
      FinantialNumberOutputComponent,
      NumberPatternDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
