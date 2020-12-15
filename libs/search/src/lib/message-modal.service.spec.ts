import { TestBed } from '@angular/core/testing';

import { MessageModalService } from './message-modal.service';

describe('MessageModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageModalService = TestBed.get(MessageModalService);
    expect(service).toBeTruthy();
  });
});
