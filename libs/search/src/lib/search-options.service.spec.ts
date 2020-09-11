import { TestBed } from '@angular/core/testing';

import { SearchOptionsService } from './search-options.service';

describe('SearchOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchOptionsService = TestBed.get(SearchOptionsService);
    expect(service).toBeTruthy();
  });
});
