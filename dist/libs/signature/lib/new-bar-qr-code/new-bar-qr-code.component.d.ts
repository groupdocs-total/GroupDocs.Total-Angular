import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { SignatureService } from "../signature.service";
export declare class NewBarQrCodeComponent implements OnInit {
    private _signatureService;
    private _elementRef;
    type: string;
    icon: string;
    name: string;
    closePanel: EventEmitter<boolean>;
    encodedImage: string;
    private subject;
    constructor(_signatureService: SignatureService, _elementRef: ElementRef);
    private saveCode;
    private clean;
    ngOnInit(): void;
    addSign(text: string): void;
    saveTemp(text: string): void;
    getData(): string;
}
