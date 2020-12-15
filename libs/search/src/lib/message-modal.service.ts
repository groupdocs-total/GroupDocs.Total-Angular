import { Injectable } from '@angular/core';
import { ModalService } from '@groupdocs.examples.angular/common-components';

@Injectable()
export class MessageModalService {
  title = '';
  header = '';
  message = '';

  constructor(private _modalService: ModalService) { }

  setDemoRestrictionsMessage(message: string) {
    this.setMessage('Information', 'Demo restrictions', message);
  }

  setMessage(title: string,
             header: string,
             message: string) {
    this.title = title;
    this.header = header;
    this.message = message;
    this._modalService.open('gd-message-modal');
  }
}
