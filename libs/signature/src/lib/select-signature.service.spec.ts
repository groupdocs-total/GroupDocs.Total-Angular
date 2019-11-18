import { TestBed } from '@angular/core/testing';

import { SelectSignatureService } from './select-signature.service';

describe('SelectSignatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectSignatureService = TestBed.get(SelectSignatureService);
    expect(service).toBeTruthy();
  });
});
