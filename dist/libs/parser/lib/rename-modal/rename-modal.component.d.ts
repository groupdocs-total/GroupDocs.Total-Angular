import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { ModalComponent } from "@groupdocs.examples.angular/common-components";
export declare class RenameModalComponent implements OnInit {
    id: String;
    title: String;
    promptText: String;
    acceptText: String;
    operationId: String;
    initialValue: String;
    acceptEvent: EventEmitter<{}>;
    cancelEvent: EventEmitter<{}>;
    modalElement: ModalComponent;
    inputBox: ElementRef;
    private _error;
    private _value;
    readonly hasError: boolean;
    error: String;
    value: String;
    constructor();
    ngOnInit(): void;
    refresh($event: any): void;
    acceptClick(): void;
    cancelClick(): void;
}
