import { EventEmitter, OnInit } from '@angular/core';
import { FileModel } from "../file.service";
import { UploadFilesService } from "../upload-files.service";
export declare class BrowseFilesModalComponent implements OnInit {
    private _uploadService;
    uploads: {
        name: string;
        icon: string;
    }[];
    files: any;
    uploadConfig: any;
    selectedFileGuid: EventEmitter<string>;
    selectedDirectory: EventEmitter<string>;
    urlForUpload: EventEmitter<string>;
    closing: EventEmitter<boolean>;
    private selectedFile;
    showUploadUrl: boolean;
    showUploadFile: boolean;
    constructor(_uploadService: UploadFilesService);
    ngOnInit(): void;
    getSize(size: number): string;
    getSizeValue(size: number): number;
    getSizeUnits(size: number): "MB" | "KB" | "Bytes";
    getFormatName(file: FileModel): any;
    getFormatIcon(file: FileModel): any;
    choose(file: FileModel): void;
    goUp(): void;
    selectUpload($event: string): void;
    refresh($event: any): void;
    showSpinner(): boolean;
    uploadUrl(url: string): void;
    handleFileInput(files: FileList): void;
    cleanUpload(): void;
}
