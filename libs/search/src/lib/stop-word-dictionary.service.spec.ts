import { TestBed } from '@angular/core/testing';

import { StopWordDictionaryService } from './stop-word-dictionary.service';

describe('StopWordDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StopWordDictionaryService = TestBed.get(StopWordDictionaryService);
    expect(service).toBeTruthy();
  });
});
