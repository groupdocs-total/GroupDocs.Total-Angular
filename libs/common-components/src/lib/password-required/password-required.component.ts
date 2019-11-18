import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ExceptionMessageService} from "../exception-message.service";
import {PasswordService} from "../password.service";
import * as jquery from "jquery";

const $ = jquery;

@Component({
  selector: 'gd-password-required',
  templateUrl: './password-required.component.html',
  styleUrls: ['./password-required.component.less']
})
export class PasswordRequiredComponent implements OnInit {
  message: string;
  @Output() cancelEvent = new EventEmitter();

  constructor(messageService: ExceptionMessageService, private _passwordService: PasswordService) {
    messageService.messageChange.subscribe(message => this.message = message);
  }

  ngOnInit() {
  }

  setPassword(value: string) {
    this._passwordService.setPassword(value);
  }

  onCloseOpen($event: boolean) {
    if ($event) {
      setTimeout(() => {
        const element = $("#password");
        if (element) {
          element.focus();
        }
      }, 100);
    } else {
      $("#password").val("");
    }
  }

  cancel($event: boolean) {
    $("#password").val("");
    this.cancelEvent.emit(true);
  }
}
