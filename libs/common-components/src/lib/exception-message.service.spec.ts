import { TestBed } from '@angular/core/testing';

import { ExceptionMessageService } from './exception-message.service';

describe('ExceptionMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExceptionMessageService = TestBed.get(ExceptionMessageService);
    expect(service).toBeTruthy();
  });
});
