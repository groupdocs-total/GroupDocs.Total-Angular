import { TestBed, async } from '@angular/core/testing';
import { TotalAppComponent } from './total-app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('ViewerAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TotalAppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
});
