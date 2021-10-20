import { ComponentRef, OnDestroy, OnInit } from '@angular/core';
import { SignatureService } from "./signature.service";
import { FileDescription, FileModel, ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, PasswordService, FileCredentials, HostingDynamicComponentService, AddDynamicComponentService, OnCloseService, ExceptionMessageService, WindowService, TabActivatorService, TopTabActivatorService } from "@groupdocs.examples.angular/common-components";
import { SignatureConfig } from "./signature-config";
import { SignatureConfigService } from "./signature-config.service";
import { SelectSignatureService } from "./select-signature.service";
import { DragSignatureService } from "./drag-signature.service";
import { RemoveSignatureService } from "./remove-signature.service";
import { ActiveSignatureService } from "./active-signature.service";
import { SignaturesHolderService } from "./signatures-holder.service";
import 'hammerjs';
import { CopySignatureService } from "./copy-signature.service";
export declare class SignatureAppComponent implements OnDestroy, OnInit {
    private _signatureService;
    private _modalService;
    private _navigateService;
    private _zoomService;
    private _renderPrintService;
    private _windowService;
    private _selectSignatureService;
    private _signatureTabActivationService;
    private _hostingComponentsService;
    private _addDynamicComponentService;
    private _dragSignatureService;
    private _onCloseService;
    private _activeSignatureService;
    private _excMessageService;
    private _signaturesHolderService;
    private _tabActivatorService;
    title: string;
    files: FileModel[];
    file: FileDescription;
    signatureConfig: SignatureConfig;
    countPages: number;
    formatDisabled: boolean;
    credentials: FileCredentials;
    browseFilesModal: string;
    isDesktop: boolean;
    signatureTypes: {
        id: string;
        name: string;
        icon: string;
        title: string;
    }[];
    signatureTypeCodes: {
        id: string;
        name: string;
        icon: string;
        title: string;
    }[];
    signatureComponents: Map<number, ComponentRef<any>>;
    activeSignatureTab: string;
    isLoading: boolean;
    fileWasDropped: boolean;
    _zoom: number;
    _pageWidth: number;
    _pageHeight: number;
    constructor(_signatureService: SignatureService, _modalService: ModalService, configService: SignatureConfigService, uploadFilesService: UploadFilesService, _navigateService: NavigateService, _zoomService: ZoomService, pagePreloadService: PagePreloadService, _renderPrintService: RenderPrintService, passwordService: PasswordService, _windowService: WindowService, _selectSignatureService: SelectSignatureService, _signatureTabActivationService: TopTabActivatorService, _hostingComponentsService: HostingDynamicComponentService, _addDynamicComponentService: AddDynamicComponentService, _dragSignatureService: DragSignatureService, _onCloseService: OnCloseService, removeSignatureService: RemoveSignatureService, _activeSignatureService: ActiveSignatureService, _excMessageService: ExceptionMessageService, _signaturesHolderService: SignaturesHolderService, _tabActivatorService: TabActivatorService, copySignatureService: CopySignatureService);
    private createDraggableSign;
    private createAddedSignature;
    ngOnInit(): void;
    private ptToPx;
    private getFitToWidth;
    zoom: any;
    private refreshZoom;
    zoomIn(): void;
    zoomOut(): void;
    readonly rewriteConfig: boolean;
    readonly zoomConfig: boolean;
    readonly pageSelectorConfig: boolean;
    readonly preloadPageCountConfig: number;
    readonly downloadConfig: boolean;
    readonly downloadOriginalConfig: boolean;
    readonly downloadSingedConfig: boolean;
    readonly uploadConfig: boolean;
    private defaultDocumentConfig;
    readonly printConfig: boolean;
    readonly browseConfig: boolean;
    readonly htmlModeConfig: boolean;
    readonly enableRightClickConfig: boolean;
    readonly textSignatureConfig: boolean;
    readonly imageSignatureConfig: boolean;
    readonly digitalSignatureConfig: boolean;
    readonly qrCodeSignatureConfig: boolean;
    readonly barCodeSignatureConfig: boolean;
    readonly stampSignatureConfig: boolean;
    readonly handSignatureConfig: boolean;
    readonly currentPage: number;
    openModal(id: string): void;
    closeModal(id: string): void;
    selectDir($event: string): void;
    selectFile($event: string, password: string, modalId: string): void;
    preloadPages(start: number, end: number): void;
    upload($event: string): void;
    downloadFile(): void;
    private clearData;
    onRightClick($event: MouseEvent): boolean;
    getSignatureTypeConfig(id: string): boolean;
    dragOver($event: DragEvent): void;
    dropSignature($event: DragEvent): void;
    private selectSignature;
    private addSignatureComponent;
    private getNextId;
    private closeTab;
    hideAll($event: any): void;
    newSign($event: string): void;
    private addTextSign;
    ngOnDestroy(): void;
    private cleanSignatures;
    sign(): void;
    prepareSignaturesData(): any[];
    isPdf(): boolean;
    codesConfig(): boolean;
    isVisible(id: string): boolean;
    activeTab($event: string): void;
    fileDropped($event: any): void;
    isFirstTab(signatureType: {
        name: string;
        icon: string;
        id: string;
        title: string;
    }): 0 | 1 | -1;
    onPan($event: any): void;
}
