import { EventEmitter, Injectable } from '@angular/core'
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class LoadingMaskService {
  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private requests: HttpRequest<any>[] = [];

  constructor() {
  }

  onRequestStart(req: HttpRequest<any>): void {
    this.requests.push(req);
    this.notify();
  }

  onRequestFinish(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }

  private notify(): void {
    setTimeout(() => this.onLoadingChanged.emit(this.requests.length !== 0));
  }
}
