import { Component, Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ModalComponent, ButtonComponent } from "@groupdocs.examples.angular/common-components";


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
    @ViewChildren(ButtonComponent) buttons: QueryList<ButtonComponent>;

    onConfirm($event: MouseEvent): void {
      this.cleanUpAndClose($event);
      this.confirm.emit();
    }

    onCancel($event: MouseEvent): void {
      this.cleanUpAndClose($event);
      this.cancel.emit();
    }

    private cleanUpAndClose($event: MouseEvent) {
      $event.stopPropagation();
      this.buttons.forEach(button => button.onUnhovering() )
      this.modal.close();
    }
  }