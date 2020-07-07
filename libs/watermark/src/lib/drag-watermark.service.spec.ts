import { TestBed } from '@angular/core/testing';

import { DragWatermarkService } from './drag-watermark.service';

describe('DragWatermarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragWatermarkService = TestBed.get(DragWatermarkService);
    expect(service).toBeTruthy();
  });
});
