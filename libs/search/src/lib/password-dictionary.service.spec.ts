import { TestBed } from '@angular/core/testing';

import { PasswordDictionaryService } from './password-dictionary.service';

describe('DocumentPasswordDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordDictionaryService = TestBed.get(PasswordDictionaryService);
    expect(service).toBeTruthy();
  });
});
