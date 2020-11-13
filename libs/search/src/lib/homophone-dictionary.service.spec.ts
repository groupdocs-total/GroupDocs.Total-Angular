import { TestBed } from '@angular/core/testing';

import { HomophoneDictionaryService } from './homophone-dictionary.service';

describe('HomophoneDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomophoneDictionaryService = TestBed.get(HomophoneDictionaryService);
    expect(service).toBeTruthy();
  });
});
