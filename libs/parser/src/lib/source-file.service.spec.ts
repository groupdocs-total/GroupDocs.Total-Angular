import { TestBed } from '@angular/core/testing';

import { SourceFileService } from './source-file.service';

describe('SourceFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceFileService = TestBed.get(SourceFileService);
    expect(service).toBeTruthy();
  });
});
