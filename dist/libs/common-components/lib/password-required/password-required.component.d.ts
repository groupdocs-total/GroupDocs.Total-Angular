import { EventEmitter, OnInit } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
import { PasswordService } from "../password.service";
export declare class PasswordRequiredComponent implements OnInit {
    private _passwordService;
    message: string;
    cancelEvent: EventEmitter<{}>;
    constructor(messageService: ExceptionMessageService, _passwordService: PasswordService);
    ngOnInit(): void;
    setPassword(value: string): void;
    onCloseOpen($event: boolean): void;
    cancel($event: boolean): void;
}
