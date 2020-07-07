import { TestBed } from '@angular/core/testing';

import { CopyWatermarkService } from './copy-watermark.service';

describe('CopyWatermarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CopyWatermarkService = TestBed.get(CopyWatermarkService);
    expect(service).toBeTruthy();
  });
});
