import { TestBed } from '@angular/core/testing';

import { ConversionService } from './conversion.service';

describe('СonversionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversionService = TestBed.get(ConversionService);
    expect(service).toBeTruthy();
  });
});
