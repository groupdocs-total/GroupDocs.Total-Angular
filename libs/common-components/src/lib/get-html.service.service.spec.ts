import { TestBed } from '@angular/core/testing';

import { GetHtml.ServiceService } from './get-html.service.service';

describe('GetHtml.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetHtml.ServiceService = TestBed.get(GetHtml.ServiceService);
    expect(service).toBeTruthy();
  });
});
