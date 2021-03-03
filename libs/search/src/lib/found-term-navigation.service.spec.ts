import { TestBed } from '@angular/core/testing';

import { FoundTermNavigationService } from './found-term-navigation.service';

describe('FoundTermNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoundTermNavigationService = TestBed.get(FoundTermNavigationService);
    expect(service).toBeTruthy();
  });
});
