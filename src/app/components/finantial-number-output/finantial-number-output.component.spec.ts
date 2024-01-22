/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FinantialNumberOutputComponent } from './finantial-number-output.component';
import { ValidationService } from 'src/app/services/validation.service';
import { ActivatedRoute } from '@angular/router';

class MockValidationService {
  validateNumber(): boolean {
    return true;
  }
}

describe('FinantialNumberOutputComponent', () => {
  let component: FinantialNumberOutputComponent;
  let fixture: ComponentFixture<FinantialNumberOutputComponent>;

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinantialNumberOutputComponent ],
      imports: [ RouterTestingModule ],
      providers: [                   
        { provide: ValidationService, useClass: MockValidationService },
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinantialNumberOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should convert number', () => {
    expect(component.formatNumber('250k')).toEqual('250,000');
    expect(component.formatNumber('10m')).toEqual('10,000,000');
    expect(component.formatNumber('.5b')).toEqual('500,000,000');
  });
});
