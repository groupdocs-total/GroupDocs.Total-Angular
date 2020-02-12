import { TestBed } from '@angular/core/testing';

import { RemoveAnnotationService } from './remove-annotation.service';

describe('RemoveAnnotationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveAnnotationService = TestBed.get(RemoveAnnotationService);
    expect(service).toBeTruthy();
  });
});
