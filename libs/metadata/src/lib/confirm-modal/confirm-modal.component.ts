import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalComponent } from "@groupdocs.examples.angular/common-components";

@Component({
    selector: 'gd-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.less']
  })
  export class ConfirmModalComponent {
    @Input() id: string;
    @Input() text: string;
    @Output() confirm = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @ViewChild(ModalComponent, {static: false}) modal: ModalComponent;

    onConfirm($event: MouseEvent): void {
      $event.stopPropagation();
      this.modal.close();
      this.confirm.emit();
    }

    onCancel($event: MouseEvent): void {
      $event.stopPropagation();
      this.modal.close();
      this.cancel.emit();
    }
  }