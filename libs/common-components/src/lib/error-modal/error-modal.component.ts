import {Component, OnInit} from '@angular/core';
import {ExceptionMessageService} from "../exception-message.service";

@Component({
  selector: 'gd-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.less']
})
export class ErrorModalComponent implements OnInit {

  message: string;

  constructor(messageService: ExceptionMessageService) {
    messageService.messageChange.subscribe(message => this.message = message);
  }

  ngOnInit() {
  }

}
