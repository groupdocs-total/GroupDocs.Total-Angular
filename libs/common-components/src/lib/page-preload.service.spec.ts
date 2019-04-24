import { TestBed } from '@angular/core/testing';

import { PagePreloadService } from './page-preload.service';

describe('PagePreloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagePreloadService = TestBed.get(PagePreloadService);
    expect(service).toBeTruthy();
  });
});
