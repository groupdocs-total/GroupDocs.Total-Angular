import {Component, OnInit} from '@angular/core';
import {ExceptionMessageService} from "../exception-message.service";
import {PasswordService} from "../password.service";

@Component({
  selector: 'gd-password-required',
  templateUrl: './password-required.component.html',
  styleUrls: ['./password-required.component.less']
})
export class PasswordRequiredComponent implements OnInit {
  message: string;

  constructor(messageService: ExceptionMessageService, private _passwordService: PasswordService) {
    messageService.messageChange.subscribe(message => this.message = message);
  }

  ngOnInit() {
  }

  setPassword(value: string) {
    this._passwordService.setPassword(value);
  }
}
