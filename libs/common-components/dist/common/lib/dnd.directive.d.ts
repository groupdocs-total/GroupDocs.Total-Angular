import { EventEmitter } from '@angular/core';
import { UploadFilesService } from "./upload-files.service";
export declare class DndDirective {
    private _uploadFilesService;
    close: EventEmitter<boolean>;
    open: EventEmitter<boolean>;
    isBackground: boolean;
    background: string;
    constructor(_uploadFilesService: UploadFilesService);
    onDragOver(evt: any): void;
    onDragLeave(evt: any): void;
    onDrop(evt: any): void;
    onClick(event: any): void;
    private closeArea;
}
