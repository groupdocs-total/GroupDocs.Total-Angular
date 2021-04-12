import { TestBed } from '@angular/core/testing';

import { CurrentDocumentService } from './current-document.service';

describe('CurrentDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentDocumentService = TestBed.get(CurrentDocumentService);
    expect(service).toBeTruthy();
  });
});
