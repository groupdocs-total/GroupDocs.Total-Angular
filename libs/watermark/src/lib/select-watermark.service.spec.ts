import { TestBed } from '@angular/core/testing';

import { SelectWatermarkService } from './select-watermark.service';

describe('SelectWatermarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectWatermarkService = TestBed.get(SelectWatermarkService);
    expect(service).toBeTruthy();
  });
});
