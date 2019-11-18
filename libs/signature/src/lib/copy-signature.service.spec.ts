import { TestBed } from '@angular/core/testing';

import { CopySignatureService } from './copy-signature.service';

describe('CopySignatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CopySignatureService = TestBed.get(CopySignatureService);
    expect(service).toBeTruthy();
  });
});
