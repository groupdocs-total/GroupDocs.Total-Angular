import { TestBed } from '@angular/core/testing';

import { ViewerService } from './viewer.service';

describe('ViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewerService = TestBed.get(ViewerService);
    expect(service).toBeTruthy();
  });
});
