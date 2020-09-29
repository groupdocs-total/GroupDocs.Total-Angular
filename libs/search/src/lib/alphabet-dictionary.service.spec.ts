import { TestBed } from '@angular/core/testing';

import { AlphabetDictionaryService } from './alphabet-dictionary.service';

describe('AlphabetDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlphabetDictionaryService = TestBed.get(AlphabetDictionaryService);
    expect(service).toBeTruthy();
  });
});
