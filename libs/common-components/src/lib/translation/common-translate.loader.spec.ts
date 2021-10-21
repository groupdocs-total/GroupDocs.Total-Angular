import { TestBed } from '@angular/core/testing';

import { CommonTranslateLoader } from './common-translate.loader';

describe('CommonTranslateLoader', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonTranslateLoader = TestBed.get(CommonTranslateLoader);
    expect(service).toBeTruthy();
  });
});
