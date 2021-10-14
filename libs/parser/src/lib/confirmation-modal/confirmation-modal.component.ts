import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {
  ModalComponent
} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.less']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() id: String;
  @Input() title: String;
  @Input() promptText: String;
  @Input() acceptText: String;

  @Input() operationId: String;

  @Output() acceptEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  @ViewChild('modal', { static: true }) modalElement: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

  acceptClick() {
      this.acceptEvent.emit(this.operationId);
  }

  cancelClick() {
    if (this.modalElement) {
      this.modalElement.cancelClose();
    }
  }

}
