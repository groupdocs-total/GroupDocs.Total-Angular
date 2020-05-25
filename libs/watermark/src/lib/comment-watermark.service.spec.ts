import { TestBed } from '@angular/core/testing';

import { CommentWatermarkService } from './comment-watermark.service';

describe('CommentWatermarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentWatermarkService = TestBed.get(CommentWatermarkService);
    expect(service).toBeTruthy();
  });
});
