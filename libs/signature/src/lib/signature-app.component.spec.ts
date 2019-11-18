import { TestBed, async } from '@angular/core/testing';
import { SignatureAppComponent } from './viewer-app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewerAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignatureAppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
});
