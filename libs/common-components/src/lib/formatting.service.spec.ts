import { TestBed } from '@angular/core/testing';

import { FormattingService } from './formatting.service';

describe('FormattingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormattingService = TestBed.get(FormattingService);
    expect(service).toBeTruthy();
  });
});
