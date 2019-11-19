import { TestBed } from '@angular/core/testing';

import { RemoveSignagtureService } from './remove-signagture.service';

describe('RemoveSignagtureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveSignagtureService = TestBed.get(RemoveSignagtureService);
    expect(service).toBeTruthy();
  });
});
