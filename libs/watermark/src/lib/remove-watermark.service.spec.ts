import { TestBed } from '@angular/core/testing';

import { RemoveWatermarkService } from './remove-watermark.service';

describe('RemoveWatermarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveWatermarkService = TestBed.get(RemoveWatermarkService);
    expect(service).toBeTruthy();
  });
});
