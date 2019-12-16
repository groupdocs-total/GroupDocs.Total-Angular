import { TestBed } from '@angular/core/testing';

import { ActiveAnnotationService } from './active-annotation.service';

describe('ActiveAnnotationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveAnnotationService = TestBed.get(ActiveAnnotationService);
    expect(service).toBeTruthy();
  });
});
