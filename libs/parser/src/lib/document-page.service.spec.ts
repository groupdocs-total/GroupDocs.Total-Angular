import { TestBed } from '@angular/core/testing';

import { DocumentPageService } from './document-page.service';

describe('DocumentPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentPageService = TestBed.get(DocumentPageService);
    expect(service).toBeTruthy();
  });
});
