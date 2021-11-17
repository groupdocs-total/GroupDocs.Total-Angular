import { TestBed } from '@angular/core/testing';

import { CharacterSelectorService } from './character-selector.service';

describe('CharacterSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterSelectorService = TestBed.get(CharacterSelectorService);
    expect(service).toBeTruthy();
  });
});
