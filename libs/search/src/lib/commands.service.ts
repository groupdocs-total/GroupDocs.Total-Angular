import { EventEmitter, Injectable } from '@angular/core';
import { AppState } from './search-models';

@Injectable()
export class CommandsService {
  eventEmitter: EventEmitter<{name: string, state: AppState}> = new EventEmitter();

  constructor() {}

  pushCommand(name: string, state: AppState) {
    this.eventEmitter.emit({name, state});
  }

  getEventEmitter() {
    return this.eventEmitter;
  }
}
