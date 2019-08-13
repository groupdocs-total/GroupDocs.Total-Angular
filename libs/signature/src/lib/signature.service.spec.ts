import { TestBed } from '@angular/core/testing';

import { SignatureService } from './signature.service';

describe('SignatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignatureService = TestBed.get(SignatureService);
    expect(service).toBeTruthy();
  });
});
