import { TestBed } from '@angular/core/testing';

import { WatermarkConfigService } from './watermark-config.service';

describe('WatermarkConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatermarkConfigService = TestBed.get(WatermarkConfigService);
    expect(service).toBeTruthy();
  });
});
