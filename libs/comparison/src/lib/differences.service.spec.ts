import { TestBed } from '@angular/core/testing';

import { DifferencesService } from './differences.service';

describe('DifferencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DifferencesService = TestBed.get(DifferencesService);
    expect(service).toBeTruthy();
  });
});
