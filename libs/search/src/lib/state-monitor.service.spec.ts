import { TestBed } from '@angular/core/testing';

import { StateMonitorService } from './state-monitor.service';

describe('StateMonitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateMonitorService = TestBed.get(StateMonitorService);
    expect(service).toBeTruthy();
  });
});
