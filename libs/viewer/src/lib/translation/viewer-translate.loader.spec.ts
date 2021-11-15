import { TestBed } from '@angular/core/testing';

import { ViewerTranslateLoader } from './viewer-translate.loader';

describe('ViewerTranslateLoader', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewerTranslateLoader = TestBed.get(ViewerTranslateLoader);
    expect(service).toBeTruthy();
  });
});
