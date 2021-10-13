import { EventEmitter, OnInit } from '@angular/core';
import { ExceptionMessageService, FileCredentials, ModalService } from "@groupdocs.examples.angular/common-components";
import { EditorService } from "../editor.service";
export declare class CreateDocumentModalComponent implements OnInit {
    private _editorService;
    private _modalService;
    private _excMessageService;
    file: FileCredentials;
    savingFile: EventEmitter<FileCredentials>;
    closing: EventEmitter<boolean>;
    private _format;
    formats: any;
    FILE_NAME_REGEX: RegExp;
    constructor(_editorService: EditorService, _modalService: ModalService, _excMessageService: ExceptionMessageService);
    readonly format: string;
    ngOnInit(): void;
    loadFormats(): void;
    selectFormat($event: any): void;
    createFormatOption(val: string): {
        value: string;
        name: string;
    };
    formatOptions(formats: any): any[];
    save(name: string): void;
    refresh($event: boolean): void;
}
