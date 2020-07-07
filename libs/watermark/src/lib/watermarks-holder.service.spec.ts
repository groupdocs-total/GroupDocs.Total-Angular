import { TestBed } from '@angular/core/testing';

import { WatermarksHolderService } from './watermarks-holder.service';

describe('WatermarksHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatermarksHolderService = TestBed.get(WatermarksHolderService);
    expect(service).toBeTruthy();
  });
});
