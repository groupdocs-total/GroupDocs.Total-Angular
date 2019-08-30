import { TestBed } from '@angular/core/testing';

import { ActiveCanvasService } from './active-canvas.service';

describe('ActiveCanvasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveCanvasService = TestBed.get(ActiveCanvasService);
    expect(service).toBeTruthy();
  });
});
