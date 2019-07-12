import { OnInit } from '@angular/core';
import { ExceptionMessageService } from "../exception-message.service";
export declare class ErrorModalComponent implements OnInit {
    message: string;
    constructor(messageService: ExceptionMessageService);
    ngOnInit(): void;
}
