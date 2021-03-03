import { TestBed } from '@angular/core/testing';

import { HighlightDocumentService } from './highlight-document.service';

describe('HighlightDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighlightDocumentService = TestBed.get(HighlightDocumentService);
    expect(service).toBeTruthy();
  });
});
