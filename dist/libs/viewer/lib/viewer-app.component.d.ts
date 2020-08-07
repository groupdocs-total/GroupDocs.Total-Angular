import { AfterViewInit, OnInit } from '@angular/core';
import { ViewerService } from "./viewer.service";
import { FileDescription, FileModel, ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, PasswordService, FileCredentials, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfig } from "./viewer-config";
import { ViewerConfigService } from "./viewer-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
export declare class ViewerAppComponent implements OnInit, AfterViewInit {
    private _viewerService;
    private _modalService;
    private _navigateService;
    private _zoomService;
    private _renderPrintService;
    private _windowService;
    private _loadingMaskService;
    private route;
    title: string;
    files: FileModel[];
    file: FileDescription;
    viewerConfig: ViewerConfig;
    countPages: number;
    formatDisabled: boolean;
    showThumbnails: boolean;
    credentials: FileCredentials;
    browseFilesModal: string;
    showSearch: boolean;
    isDesktop: boolean;
    isLoading: boolean;
    _zoom: number;
    _pageWidth: number;
    _pageHeight: number;
    options: any;
    fileWasDropped: boolean;
    formatIcon: string;
    fileParam: string;
    querySubscription: Subscription;
    constructor(_viewerService: ViewerService, _modalService: ModalService, configService: ViewerConfigService, uploadFilesService: UploadFilesService, _navigateService: NavigateService, _zoomService: ZoomService, pagePreloadService: PagePreloadService, _renderPrintService: RenderPrintService, passwordService: PasswordService, _windowService: WindowService, _loadingMaskService: LoadingMaskService, route: ActivatedRoute);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    readonly rewriteConfig: boolean;
    readonly zoomConfig: boolean;
    readonly pageSelectorConfig: boolean;
    readonly searchConfig: boolean;
    readonly thumbnailsConfig: boolean;
    readonly rotateConfig: boolean;
    readonly downloadConfig: boolean;
    readonly uploadConfig: boolean;
    readonly printConfig: boolean;
    readonly browseConfig: boolean;
    readonly htmlModeConfig: boolean;
    readonly saveRotateStateConfig: boolean;
    readonly enableRightClickConfig: boolean;
    readonly currentPage: number;
    validURL(str: any): boolean;
    openModal(id: string): void;
    closeModal(id: string): void;
    selectDir($event: string): void;
    selectFile($event: string, password: string, modalId: string): void;
    preloadPages(start: number, end: number): void;
    upload($event: string): void;
    nextPage(): void;
    prevPage(): void;
    toLastPage(): void;
    toFirstPage(): void;
    navigateToPage(page: number): void;
    zoomIn(): void;
    zoomOut(): void;
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
    selectZoom($event: any): void;
    rotate(deg: number): void;
    private changeAngle;
    downloadFile(): void;
    printFile(): void;
    openThumbnails(): void;
    private clearData;
    onRightClick($event: MouseEvent): boolean;
    openSearch(): void;
    private refreshZoom;
}
