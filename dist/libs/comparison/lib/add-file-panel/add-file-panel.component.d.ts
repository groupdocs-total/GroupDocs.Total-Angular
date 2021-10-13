import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExceptionMessageService, ModalService } from "@groupdocs.examples.angular/common-components";
export declare class States {
    static Empty: string;
    static Opened: string;
}
export declare class AddFilePanelComponent implements OnInit, OnChanges {
    private _modalService;
    private _excMessageService;
    panel: string;
    active: EventEmitter<string>;
    urlForUpload: EventEmitter<string>;
    cleanPanel: EventEmitter<boolean>;
    state: string;
    fileName: string;
    uploadDisabled: boolean;
    constructor(_modalService: ModalService, _excMessageService: ExceptionMessageService);
    ngOnInit(): void;
    getFormatIcon(): any;
    openModal(): void;
    isEmpty(): boolean;
    cleanFile(): void;
    uploadUrl(url: string): void;
    checkDisabled(url: string): void;
    ngOnChanges(changes: SimpleChanges): void;
}
