import { TestBed, async } from '@angular/core/testing';
import { ComparisonAppComponent } from './comparison-app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ComparisonAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonAppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
});
