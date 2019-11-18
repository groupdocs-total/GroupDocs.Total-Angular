import { EventEmitter, OnInit } from '@angular/core';
import { SignatureService } from "../signature.service";
export declare class UploadSignatureComponent implements OnInit {
    private _signatureService;
    signatureType: string;
    rewrite: boolean;
    closePanel: EventEmitter<boolean>;
    constructor(_signatureService: SignatureService);
    ngOnInit(): void;
    handleFileInput(files: FileList): void;
    addFiles(files: any): void;
    uploadFiles($event: any): void;
}
