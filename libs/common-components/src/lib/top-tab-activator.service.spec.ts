import { TestBed } from '@angular/core/testing';

import { TopTabActivatorService } from './top-tab-activator.service';

describe('TopTabActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopTabActivatorService = TestBed.get(TopTabActivatorService);
    expect(service).toBeTruthy();
  });
});
