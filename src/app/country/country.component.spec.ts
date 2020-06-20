import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryService } from '../service/country.service';

import { CountryComponent } from './country.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryPipe } from './country.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CountryComponent,
        CountryPipe
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        CountryService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
