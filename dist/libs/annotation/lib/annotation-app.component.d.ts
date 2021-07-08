import { ComponentRef, OnInit } from '@angular/core';
import { AnnotationConfig } from "./annotation-config";
import { AnnotationService } from "./annotation.service";
import { AddDynamicComponentService, FileCredentials, FileModel, HostingDynamicComponentService, ModalService, NavigateService, PagePreloadService, PasswordService, TopTabActivatorService, UploadFilesService, WindowService, ZoomService } from "@groupdocs.examples.angular/common-components";
import { Comment, FileAnnotationDescription } from "./annotation-models";
import { ActiveAnnotationService } from "./active-annotation.service";
import { RemoveAnnotationService } from "./remove-annotation.service";
import { CommentAnnotationService } from "./comment-annotation.service";
import { AnnotationConfigService } from "./annotation-config.service";
export declare class AnnotationAppComponent implements OnInit {
    private _annotationService;
    private _modalService;
    private _navigateService;
    private _tabActivatorService;
    private _hostingComponentsService;
    private _addDynamicComponentService;
    private _activeAnnotationService;
    private _removeAnnotationService;
    _commentAnnotationService: CommentAnnotationService;
    private _windowService;
    private _zoomService;
    title: string;
    files: FileModel[];
    file: FileAnnotationDescription;
    isLoading: boolean;
    annotationConfig: AnnotationConfig;
    browseFilesModal: string;
    formatDisabled: boolean;
    credentials: FileCredentials;
    annotationTypes: {
        id: string;
        name: string;
        icon: string;
    }[];
    isDesktop: boolean;
    annotationTypeFirst: {
        id: string;
        name: string;
        icon: string;
    }[];
    annotationTypeSecond: {
        id: string;
        name: string;
        icon: string;
    }[];
    annotationTypeThird: {
        id: string;
        name: string;
        icon: string;
    }[];
    countPages: number;
    commentOpenedId: number;
    comments: Map<number, Comment[]>;
    _zoom: number;
    _pageWidth: number;
    _pageHeight: number;
    private activeAnnotationTab;
    private fileWasDropped;
    annotations: Map<number, ComponentRef<any>>;
    private creatingAnnotationId;
    private activeAnnotationId;
    annotationsHidden: boolean;
    constructor(_annotationService: AnnotationService, _modalService: ModalService, _navigateService: NavigateService, _tabActivatorService: TopTabActivatorService, _hostingComponentsService: HostingDynamicComponentService, _addDynamicComponentService: AddDynamicComponentService, _activeAnnotationService: ActiveAnnotationService, _removeAnnotationService: RemoveAnnotationService, _commentAnnotationService: CommentAnnotationService, uploadFilesService: UploadFilesService, pagePreloadService: PagePreloadService, passwordService: PasswordService, _windowService: WindowService, _zoomService: ZoomService, configService: AnnotationConfigService);
    getComments(): Comment[];
    readonly rewriteConfig: boolean;
    readonly zoomConfig: boolean;
    readonly pageSelectorConfig: boolean;
    readonly preloadPageCountConfig: number;
    readonly downloadConfig: boolean;
    readonly downloadOriginalConfig: boolean;
    readonly downloadAnnotatedConfig: boolean;
    readonly uploadConfig: boolean;
    private defaultDocumentConfig;
    readonly printConfig: boolean;
    readonly browseConfig: boolean;
    readonly htmlModeConfig: boolean;
    readonly enableRightClickConfig: boolean;
    readonly textAnnotationConfig: boolean;
    readonly areaAnnotationConfig: boolean;
    readonly pointAnnotationConfig: boolean;
    readonly textStrikeoutAnnotationConfig: boolean;
    readonly polylineAnnotationConfig: boolean;
    readonly textFieldAnnotationConfig: boolean;
    readonly watermarkAnnotationConfig: boolean;
    readonly textReplacementAnnotationConfig: boolean;
    readonly arrowAnnotationConfig: boolean;
    readonly textRedactionAnnotationConfig: boolean;
    readonly textUnderlineAnnotationConfig: boolean;
    readonly distanceAnnotationConfig: boolean;
    ngOnInit(): void;
    private ptToPx;
    private getFitToWidth;
    zoom: any;
    private refreshZoom;
    zoomIn(): void;
    zoomOut(): void;
    openModal(id: string): void;
    closeModal(id: string): void;
    selectDir($event: string): void;
    selectFile($event: string, password: string, modalId: string): void;
    preloadPages(start: number, end: number): void;
    private importAnnotations;
    upload($event: string): void;
    onRightClick($event: MouseEvent): boolean;
    downloadFile(): void;
    annotate(): void;
    prepareAnnotationsData(): any[];
    isVisible(id: string): string | boolean;
    activeTab($event: any): void;
    codesConfigFirst(): boolean;
    codesConfigSecond(): boolean;
    private checkConfig;
    codesConfigThird(): boolean;
    private getAnnotationTypeConfig;
    fileDropped($event: any): void;
    private cleanAnnotations;
    hideAnnotations(): void;
    private clearData;
    createAnnotation($event: MouseEvent): void;
    private addAnnotationComponent;
    resizingCreatingAnnotation($event: MouseEvent): void;
    private getCurrentPosition;
    finishCreatingAnnotation($event: MouseEvent): void;
    closeComments(): void;
    onPan($event: any): void;
    private getNextId;
}
