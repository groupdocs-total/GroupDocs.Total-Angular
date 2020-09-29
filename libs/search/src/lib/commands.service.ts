import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CommandsService {
  eventEmitter: EventEmitter<string> = new EventEmitter();

  constructor() {}

  pushCommand(name: string) {
    this.eventEmitter.emit(name);
  }

  getEventEmitter() {
    return this.eventEmitter;
  }
}
