import { TestBed } from '@angular/core/testing';

import { SignatureConfigService } from './signature-config.service';

describe('SignatureConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignatureConfigService = TestBed.get(SignatureConfigService);
    expect(service).toBeTruthy();
  });
});
