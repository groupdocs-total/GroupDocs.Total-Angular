import { Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import {
  ModalComponent
} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-rename-modal',
  templateUrl: './rename-modal.component.html',
  styleUrls: ['./rename-modal.component.less']
})
export class RenameModalComponent implements OnInit {
  @Input() id: String;
  @Input() title: String;
  @Input() promptText: String;
  @Input() acceptText: String;

  @Input() operationId: String;
  @Input() initialValue: String;

  @Output() acceptEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  @ViewChild('modal', { static: true }) modalElement: ModalComponent;
  @ViewChild('inputBox', { static: true }) inputBox: ElementRef;

  private _error: String = null;
  private _value: String;

  get hasError() {
    return this.error != null;
  }

  get error() {
    return this._error;
  }

  @Input()
  set error(newError: String) {
    this._error = newError;
  }

  get value() {
    return this._value;
  }

  set value(newValue: String) {
    this._value = newValue;
    if (this.hasError) {
      this._error = null;
    }
  }

  constructor() { }

  ngOnInit() {
    if (!this.initialValue) {
      this.initialValue = "";
    }

    this.value = this.initialValue;
  }

  refresh($event) {
    if ($event) {
      this._error = null;
      this._value = this.initialValue;
      setTimeout(() => {
        this.inputBox.nativeElement.focus();
      }, 0);
    }
  }

  acceptClick() {
    // Check if value is not empty
    if (this.value === null || this.value === "") {
      this._error = "A new value can't be empty";
    }

    if (!this.hasError) {
      this.acceptEvent.emit({ id: this.operationId, newValue: this.value });
    }
  }

  cancelClick() {
    if (this.modalElement) {
      this.modalElement.cancelClose();
    }
  }
}
