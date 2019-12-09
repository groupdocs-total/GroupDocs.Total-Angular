import { TestBed } from '@angular/core/testing';

import { AnnotationConfigService } from './annotation-config.service';

describe('AnnotationConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnotationConfigService = TestBed.get(AnnotationConfigService);
    expect(service).toBeTruthy();
  });
});
