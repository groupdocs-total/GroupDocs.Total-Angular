import { TestBed } from '@angular/core/testing';

import { RemoveCanvasService } from './remove-canvas.service';

describe('RemoveCanvasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveCanvasService = TestBed.get(RemoveCanvasService);
    expect(service).toBeTruthy();
  });
});
