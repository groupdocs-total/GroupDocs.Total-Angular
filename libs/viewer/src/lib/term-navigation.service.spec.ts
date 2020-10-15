import { TestBed } from '@angular/core/testing';

import { TermNavigationService } from './term-navigation.service';

describe('TermNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TermNavigationService = TestBed.get(TermNavigationService);
    expect(service).toBeTruthy();
  });
});
