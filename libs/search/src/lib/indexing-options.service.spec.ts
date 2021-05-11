import { TestBed } from '@angular/core/testing';

import { IndexingOptionsService } from './indexing-options.service';

describe('IndexingOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexingOptionsService = TestBed.get(IndexingOptionsService);
    expect(service).toBeTruthy();
  });
});
