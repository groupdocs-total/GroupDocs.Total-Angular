import { TestBed } from '@angular/core/testing';

import { StaticTranslateLoader } from './static-translate.loader';

describe('StaticTranslateLoader', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticTranslateLoader = TestBed.get(StaticTranslateLoader);
    expect(service).toBeTruthy();
  });
});
