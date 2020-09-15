import { TestBed } from '@angular/core/testing';

import { IndexPropertiesService } from './index-properties.service';

describe('IndexPropertiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexPropertiesService = TestBed.get(IndexPropertiesService);
    expect(service).toBeTruthy();
  });
});
