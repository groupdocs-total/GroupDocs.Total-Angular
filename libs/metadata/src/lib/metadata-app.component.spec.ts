import { TestBed, async } from '@angular/core/testing';
import { MetadataAppComponent } from './metadata-app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MetadataAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MetadataAppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
});
