import { EventEmitter, OnInit } from '@angular/core';
import { ModalService, UploadFilesService } from "@groupdocs.examples.angular/common-components";
export declare class UploadFilePanelComponent implements OnInit {
    private _uploadService;
    private _modalService;
    panel: string;
    active: EventEmitter<string>;
    constructor(_uploadService: UploadFilesService, _modalService: ModalService);
    ngOnInit(): void;
    openModal(): void;
    dropped($event: any): void;
}
