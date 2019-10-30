import { TestBed } from '@angular/core/testing';

import { RotationService } from './rotation.service';

describe('RotationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RotationService = TestBed.get(RotationService);
    expect(service).toBeTruthy();
  });
});
