import { EventEmitter } from '@angular/core';
import { UploadFilesService } from "./upload-files.service";
export declare class DndDirective {
    protected _uploadFilesService: UploadFilesService;
    closing: EventEmitter<boolean>;
    opening: EventEmitter<boolean>;
    dropped: EventEmitter<boolean>;
    active: boolean;
    private dragCounter;
    constructor(_uploadFilesService: UploadFilesService);
    onDragEnter(evt: any): void;
    onDragOver(evt: any): boolean;
    onDragLeave(evt: any): void;
    onDrop(evt: any): void;
    onClick(event: any): void;
    private closeArea;
}
