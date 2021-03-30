import { TestBed } from '@angular/core/testing';

import { DocumentViewService } from './document-view.service';

describe('DocumentViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentViewService = TestBed.get(DocumentViewService);
    expect(service).toBeTruthy();
  });
});
