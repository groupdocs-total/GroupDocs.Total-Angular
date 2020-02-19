import { TestBed } from '@angular/core/testing';

import { CommentAnnotationService } from './comment-annotation.service';

describe('CommentAnnotationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentAnnotationService = TestBed.get(CommentAnnotationService);
    expect(service).toBeTruthy();
  });
});
