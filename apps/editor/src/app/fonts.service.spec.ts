import { TestBed } from '@angular/core/testing';

import { FontsService } from './fonts.service';

describe('FontsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FontsService = TestBed.get(FontsService);
    expect(service).toBeTruthy();
  });
});
