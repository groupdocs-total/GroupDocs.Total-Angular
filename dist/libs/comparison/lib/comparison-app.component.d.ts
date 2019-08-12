import { ElementRef } from '@angular/core';
import { FileCredentials, FileDescription, FileModel, ModalService, PagePreloadService, TabActivatorService, UploadFilesService } from "@groupdocs.examples.angular/common-components";
import { ComparisonConfigService } from "./comparison-config.service";
import { ComparisonService } from "./comparison.service";
import { ComparisonConfig } from "./comparison-config";
import { CompareResult } from "./models";
export declare class Files {
    static FIRST: string;
    static SECOND: string;
}
export declare class Highlight {
    id: string;
    active: boolean;
}
export declare class ComparisonAppComponent {
    private _comparisonService;
    private configService;
    private _modalService;
    private _tabActivatorService;
    private _elementRef;
    files: FileModel[];
    browseFilesModal: string;
    credentials: Map<string, FileCredentials>;
    file: Map<string, FileDescription>;
    comparisonConfig: ComparisonConfig;
    activePanel: string;
    first: string;
    second: string;
    firstFileName: string;
    secondFileName: string;
    loadingFirstPanel: boolean;
    loadingSecondPanel: boolean;
    countPages: number;
    result: CompareResult;
    filesTab: string;
    resultTab: string;
    activeTab: string;
    resultTabDisabled: boolean;
    constructor(_comparisonService: ComparisonService, configService: ComparisonConfigService, uploadFilesService: UploadFilesService, pagePreloadService: PagePreloadService, _modalService: ModalService, _tabActivatorService: TabActivatorService, _elementRef: ElementRef<HTMLElement>);
    private setLoading;
    readonly rewriteConfig: boolean;
    selectDir($event: string): void;
    selectFile($event: string, password: string, modalId: string, param: string): void;
    private getFile;
    clearFile(param: string): void;
    private clearData;
    preloadPages(param: string, start: number, end: number): void;
    upload($event: string): void;
    updateFileNames(): void;
    getSecondFileName(): string;
    getFirstFileName(): string;
    private checkPreload;
    compare(): void;
    generateRandomInteger(): string;
    download(): void;
    hideSidePanel($event: any): void;
}
