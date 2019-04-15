import { TestBed } from '@angular/core/testing';

import { ViewerConfigService } from './viewer-config.service';

describe('ViewerConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewerConfigService = TestBed.get(ViewerConfigService);
    expect(service).toBeTruthy();
  });
});
