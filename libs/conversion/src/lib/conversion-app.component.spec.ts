import { TestBed, async } from '@angular/core/testing';
import { ConversionAppComponent } from './conversion-app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ConversionAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConversionAppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
});
