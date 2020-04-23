import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Signature } from "../signature-models";
import { SignatureService } from "../signature.service";
export declare class SignatureLeftPanelComponent implements OnInit, OnChanges {
    private _signatureService;
    rewrite: boolean;
    isPdf: boolean;
    id: string;
    newSignatureEvent: EventEmitter<string>;
    showNewCode: boolean;
    showUpload: boolean;
    signatures: Signature[];
    loading: boolean;
    constructor(_signatureService: SignatureService);
    getSignatures(tabId: string): void;
    ngOnInit(): void;
    private init;
    getTitleIcon(): "times" | "plus";
    getTitle(): string;
    getName(): string;
    removeSignature($event: string, type: string): void;
    closeUploadPanel($event: boolean): void;
    closeCodePanel($event: boolean): void;
    getCodeName(): "" | "Qr Code" | "Bar Code";
    icon(): string;
    ngOnChanges(changes: SimpleChanges): void;
    closeNewSignature(): void;
    openNewSignature(): void;
}
