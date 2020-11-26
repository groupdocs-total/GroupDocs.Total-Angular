import { TestBed } from '@angular/core/testing';

import { CharacterReplacementDictionaryService } from './character-replacement-dictionary.service';

describe('CharacterReplacementDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterReplacementDictionaryService = TestBed.get(CharacterReplacementDictionaryService);
    expect(service).toBeTruthy();
  });
});
