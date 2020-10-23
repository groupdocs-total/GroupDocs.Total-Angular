import { TestBed } from '@angular/core/testing';

import { SynonymDictionaryService } from './synonym-dictionary.service';

describe('SynonymDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynonymDictionaryService = TestBed.get(SynonymDictionaryService);
    expect(service).toBeTruthy();
  });
});
