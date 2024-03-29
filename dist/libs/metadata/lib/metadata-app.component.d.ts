import { AfterViewInit, OnInit } from '@angular/core';
import { MetadataService } from "./metadata.service";
import { FileModel, ModalService, ZoomService, UploadFilesService, NavigateService, PasswordService, FileCredentials, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { MetadataConfig } from "./metadata-config";
import { MetadataConfigService } from "./metadata-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { RemovePropertyModel, PackageModel, FilePreview } from './metadata-models';
import { PreviewStatus } from './preview-status/preview-models';
export declare class MetadataAppComponent implements OnInit, AfterViewInit {
    private metadataService;
    private modalService;
    private configService;
    private uploadFilesService;
    private navigateService;
    private zoomService;
    private passwordService;
    private loadingMaskService;
    private windowService;
    initialFile: string;
    returnUrl: string;
    title: string;
    files: FileModel[];
    preview: FilePreview;
    metadataConfig: MetadataConfig;
    countPages: number;
    credentials: FileCredentials;
    browseFilesModal: string;
    isLoading: boolean;
    previewZoom: number;
    pageWidth: number;
    pageHeight: number;
    options: any;
    fileWasDropped: boolean;
    packages: PackageModel[];
    isDesktop: boolean;
    showSidePanel: boolean;
    confirmCleanModalId: string;
    confirmSaveModalId: string;
    previewStatus: PreviewStatus;
    private documentPreviewSubscription;
    constructor(metadataService: MetadataService, modalService: ModalService, configService: MetadataConfigService, uploadFilesService: UploadFilesService, navigateService: NavigateService, zoomService: ZoomService, passwordService: PasswordService, loadingMaskService: LoadingMaskService, windowService: WindowService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    readonly rewriteConfig: boolean;
    readonly downloadConfig: boolean;
    readonly uploadConfig: boolean;
    readonly browseConfig: boolean;
    openModal(id: string, fileShouldBeLoaded: boolean): void;
    selectDir($event: string): void;
    upload($event: string): void;
    fileDropped($event: any): void;
    private ptToPx;
    private getFitToWidth;
    private getFitToHeight;
    zoomOptions(): {
        value: any;
        name: string;
        separator: boolean;
    }[];
    zoom: any;
    private refreshZoom;
    downloadFile(): void;
    exportProperties(): void;
    save(): void;
    cleanMetadata(): void;
    hideSidePanel($event: Event): void;
    removeProperty(propertyInfo: RemovePropertyModel): void;
    getPackageName(packageInfo: PackageModel): any;
    loadProperties(loadPreview?: boolean, showSuccessModal?: boolean): void;
    selectFile($event: string, password: string, modalId: string): void;
    isFileLoaded(): boolean;
    isPreviewLoaded(): boolean;
    private saveBlob;
}
