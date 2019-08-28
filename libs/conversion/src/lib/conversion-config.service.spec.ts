import { TestBed } from '@angular/core/testing';

import { ConversionConfigService } from './conversion-config.service';

describe('ConversionConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversionConfigService = TestBed.get(ConversionConfigService);
    expect(service).toBeTruthy();
  });
});
