import { EventEmitter, OnInit } from '@angular/core';
export declare class InitStateComponent implements OnInit {
    icon: string;
    text: string;
    fileDropped: EventEmitter<boolean>;
    showUploadFile: boolean;
    constructor();
    ngOnInit(): void;
    dropped($event: any): void;
}
