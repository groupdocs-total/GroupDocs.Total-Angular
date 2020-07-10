import { TestBed } from '@angular/core/testing';

import { WatermarkService } from './watermark.service';

describe('WatermarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatermarkService = TestBed.get(WatermarkService);
    expect(service).toBeTruthy();
  });
});
