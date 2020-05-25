import { TestBed } from '@angular/core/testing';

import { ActiveWatermarkService } from './active-watermark.service';

describe('ActiveWatermarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveWatermarkService = TestBed.get(ActiveWatermarkService);
    expect(service).toBeTruthy();
  });
});
