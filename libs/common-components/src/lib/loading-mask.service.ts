import {EventEmitter, Injectable} from '@angular/core'
import {HttpRequest} from '@angular/common/http';
import {Api} from "./config.service";

@Injectable()
export class LoadingMaskService {
  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private stopList = [];
  private requests: HttpRequest<any>[] = [];

  constructor() {
    this.stopList.push(Api.SAVE_TEXT);
    this.stopList.push(Api.SAVE_OPTICAL_CODE);
    this.stopList.push(Api.LOAD_DOCUMENT_PAGE);
    this.stopList.push(Api.LOAD_THUMBNAILS);
  }

  onRequestStart(req: HttpRequest<any>): void {
    const stop = this.stopList.find(x => req.url.includes(x));
    if (!stop) {
      this.requests.push(req);
      this.notify();
    }
  }

  onRequestFinish(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }

  private notify(): void {
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }
}
