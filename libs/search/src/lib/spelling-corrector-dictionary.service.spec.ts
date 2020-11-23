import { TestBed } from '@angular/core/testing';

import { SpellingCorrectorDictionaryService } from './spelling-corrector-dictionary.service';

describe('SpellingCorrectorDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellingCorrectorDictionaryService = TestBed.get(SpellingCorrectorDictionaryService);
    expect(service).toBeTruthy();
  });
});
