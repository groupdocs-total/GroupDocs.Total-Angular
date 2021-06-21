import { TestBed } from '@angular/core/testing';

import { IndexingStatusService } from './indexing-status.service';

describe('IndexingStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexingStatusService = TestBed.get(IndexingStatusService);
    expect(service).toBeTruthy();
  });
});
