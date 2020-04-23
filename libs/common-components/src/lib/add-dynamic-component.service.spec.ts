import { TestBed } from '@angular/core/testing';

import { AddDynamicComponentService } from './add-dynamic-component.service';

describe('AddDynamicComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDynamicComponentService = TestBed.get(AddDynamicComponentService);
    expect(service).toBeTruthy();
  });
});
