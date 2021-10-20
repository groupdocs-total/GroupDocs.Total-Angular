import { EventEmitter, QueryList } from '@angular/core';
import { ModalComponent, ButtonComponent } from "@groupdocs.examples.angular/common-components";
export declare class ConfirmModalComponent {
    id: string;
    text: string;
    confirm: EventEmitter<{}>;
    cancel: EventEmitter<{}>;
    modal: ModalComponent;
    buttons: QueryList<ButtonComponent>;
    onConfirm($event: MouseEvent): void;
    onCancel($event: MouseEvent): void;
    private cleanUpAndClose;
}
