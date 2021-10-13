import { OnInit, EventEmitter } from '@angular/core';
import { ModalComponent } from "@groupdocs.examples.angular/common-components";
export declare class ConfirmationModalComponent implements OnInit {
    id: String;
    title: String;
    promptText: String;
    acceptText: String;
    operationId: String;
    acceptEvent: EventEmitter<{}>;
    cancelEvent: EventEmitter<{}>;
    modalElement: ModalComponent;
    constructor();
    ngOnInit(): void;
    acceptClick(): void;
    cancelClick(): void;
}
