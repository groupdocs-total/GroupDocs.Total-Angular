import { TestBed, async } from '@angular/core/testing';
import { EditorAppComponent } from './editor-app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditorAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditorAppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
});
