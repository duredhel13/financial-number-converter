import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinantialNumberInputComponent } from './components/finantial-number-input/finantial-number-input.component';
import { FinantialNumberOutputComponent } from './components/finantial-number-output/finantial-number-output.component';

const routes: Routes = [
  { path: '', component: FinantialNumberInputComponent },
  { path: 'output', component: FinantialNumberOutputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
