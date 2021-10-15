import { EventEmitter, OnInit } from '@angular/core';
import { UploadFilesService } from "../upload-files.service";
export declare class UploadFileZoneComponent implements OnInit {
    private _uploadService;
    closeUpload: EventEmitter<boolean>;
    constructor(_uploadService: UploadFilesService);
    ngOnInit(): void;
    handleFileInput(files: FileList): void;
    onCloseUpload(): void;
    close($event: any): void;
}
