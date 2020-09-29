import { TestBed } from '@angular/core/testing';

import { CommandsService } from './commands.service';

describe('CommandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandsService = TestBed.get(CommandsService);
    expect(service).toBeTruthy();
  });
});
