import { TestBed, async } from '@angular/core/testing';
import { SearchAppComponent } from './search-app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SearchAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
});
