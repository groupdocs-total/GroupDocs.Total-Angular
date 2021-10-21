/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CommonModals, ModalService, NavigateService, PasswordService, UploadFilesService, WindowService, ZoomService } from "@groupdocs.examples.angular/common-components";
import { SourceFile, TemplateFieldTypes } from './app-models';
import { ParserService } from './parser.service';
import { TemplateService } from './template.service';
import { SourceFileService } from './source-file.service';
import { PlaceholderService } from './placeholder.service';
import { DocumentPageService } from './document-page.service';
export class ParserAppComponent {
    /**
     * @param {?} _modalService
     * @param {?} _parserService
     * @param {?} _sourceFileService
     * @param {?} _templateService
     * @param {?} _zoomService
     * @param {?} _navigateService
     * @param {?} _placeholderService
     * @param {?} _documentPageService
     * @param {?} _uploadFilesService
     * @param {?} _passwordService
     * @param {?} windowService
     */
    constructor(_modalService, _parserService, _sourceFileService, _templateService, _zoomService, _navigateService, _placeholderService, _documentPageService, _uploadFilesService, _passwordService, windowService) {
        this._modalService = _modalService;
        this._parserService = _parserService;
        this._sourceFileService = _sourceFileService;
        this._templateService = _templateService;
        this._zoomService = _zoomService;
        this._navigateService = _navigateService;
        this._placeholderService = _placeholderService;
        this._documentPageService = _documentPageService;
        this._uploadFilesService = _uploadFilesService;
        this._passwordService = _passwordService;
        this.CREATE_FIELD_MODE = "createFieldMode";
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.documentError = null;
        this.isApiAvaible = true;
        this.fileWasDropped = false;
        this.files = [];
        windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.refreshZoom();
        }));
        this._sourceFileService.sourceFileChanged.subscribe((/**
         * @param {?} sourceFile
         * @return {?}
         */
        sourceFile => this.loadDocumentDescription(sourceFile)));
        this._uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads && uploads.length > 0) {
                this._parserService.upload(uploads.item(0), '', this.rewriteConfig).subscribe((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                }));
            }
        }));
        this._passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this._sourceFileService.sourceFile.guid, pass, CommonModals.PasswordRequired);
        }));
    }
    // Menu
    /**
     * @return {?}
     */
    zoomIn() {
        /** @type {?} */
        const zoom = this._zoomService.zoom;
        if (zoom < 490) {
            this._zoomService.changeZoom(zoom + 10);
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        /** @type {?} */
        const zoom = this._zoomService.zoom;
        if (zoom > 30) {
            this._zoomService.changeZoom(zoom - 10);
        }
    }
    /**
     * @return {?}
     */
    addFieldClick() {
        /** @type {?} */
        const template = this._templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        const field = template.createField("Field");
        field.fieldType = TemplateFieldTypes.FIXED;
        field.pageNumber = this._documentPageService.activePage;
        template.addField(field);
    }
    /**
     * @return {?}
     */
    addTableClick() {
        /** @type {?} */
        const template = this._templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        const field = template.createField("Table");
        field.fieldType = TemplateFieldTypes.TABLE;
        field.pageNumber = this._documentPageService.activePage;
        template.addField(field);
    }
    // end of Menu
    /**
     * @return {?}
     */
    isFileLoaded() {
        return !this.documentError && this.document;
    }
    /**
     * @param {?} id
     * @param {?} fileShouldBeLoaded
     * @return {?}
     */
    openModal(id, fileShouldBeLoaded) {
        if (fileShouldBeLoaded && !this.isFileLoaded())
            return;
        this._modalService.open(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this._parserService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._parserService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        () => {
            this.selectDir('');
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this._sourceFileService.sourceFile = new SourceFile($event, password);
        if (modalId) {
            this._modalService.close(modalId);
        }
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.parserConfig ? this.parserConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.parserConfig ? this.parserConfig.upload : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.parserConfig ? this.parserConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get returnUrl() {
        return localStorage.getItem("returnUrl");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    reloadCurrentPage() {
        window.location.reload();
    }
    /**
     * @private
     * @param {?} sourceFile
     * @return {?}
     */
    loadDocumentDescription(sourceFile) {
        this.isApiAvaible = true;
        this.documentError = null;
        this._document = null;
        /** @type {?} */
        const operationState = this._placeholderService.startOperation("Loading document...");
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this._documentPageService.setActivePage(1);
                this._document = response;
                operationState.complete();
                this._templateService.createTemplate();
                this.refreshZoom();
                this._navigateService.countPages = this.document.pages ? this.document.pages.length : 0;
                this._navigateService.currentPage = 1;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.documentError = this._parserService.getErrorMessage(err);
                operationState.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            () => operationState.complete())
        };
        this._parserService.loadDocumentDescription(sourceFile).subscribe(observer);
    }
    /**
     * @return {?}
     */
    get document() {
        return this._document;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        this._zoomService.changeZoom(this.getFitToWidth());
    }
    /**
     * @private
     * @return {?}
     */
    getFitToWidth() {
        if (!this.document) {
            return 100;
        }
        /** @type {?} */
        const surfaceWidth = window.innerWidth;
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        const pageWidth = this.ptToPx(this.document.pages[0].width);
        /** @type {?} */
        const pageHeight = this.ptToPx(this.document.pages[0].height);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : surfaceWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / surfaceWidth) < 2)
            ? 200 - Math.round(offsetWidth * 100 / surfaceWidth)
            : Math.round(surfaceWidth * 100 / offsetWidth);
    }
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
}
ParserAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-app-parser',
                template: "<gd-loading-mask></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\r\n      <div class=\"top-panel\">\r\n        <a class=\"logo-link\" [href]=\"returnUrl\">\r\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\r\n        </a>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\r\n            *ngIf=\"browseConfig\"></gd-button>\r\n\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\r\n        </gd-top-toolbar>\r\n      </div>\r\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\r\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n        Or drop file here\r\n      </gd-init-state>\r\n\r\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\r\n        <gd-surface [document]=\"document\"></gd-surface>\r\n      </div>\r\n    </div>\r\n\r\n    <gd-parser-side-panel *ngIf=\"!documentError && document\"></gd-parser-side-panel>\r\n  </div>\r\n\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\r\n  </gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.parser-wrapper{z-index:100;left:0;top:0;right:0;bottom:0}gd-parser-side-panel{position:absolute;right:0;top:60px;width:300px;height:calc(100vh - 60px);background-color:#fff}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
            }] }
];
/** @nocollapse */
ParserAppComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ParserService },
    { type: SourceFileService },
    { type: TemplateService },
    { type: ZoomService },
    { type: NavigateService },
    { type: PlaceholderService },
    { type: DocumentPageService },
    { type: UploadFilesService },
    { type: PasswordService },
    { type: WindowService }
];
ParserAppComponent.propDecorators = {
    sourceFile: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ParserAppComponent.prototype.sourceFile;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype.CREATE_FIELD_MODE;
    /** @type {?} */
    ParserAppComponent.prototype.browseFilesModal;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._document;
    /** @type {?} */
    ParserAppComponent.prototype.template;
    /** @type {?} */
    ParserAppComponent.prototype.parserConfig;
    /** @type {?} */
    ParserAppComponent.prototype.filePassword;
    /** @type {?} */
    ParserAppComponent.prototype.documentError;
    /** @type {?} */
    ParserAppComponent.prototype.isApiAvaible;
    /** @type {?} */
    ParserAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    ParserAppComponent.prototype.files;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._parserService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._sourceFileService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._templateService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._placeholderService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._documentPageService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._uploadFilesService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._passwordService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBRUwsWUFBWSxFQUlaLFlBQVksRUFDWixlQUFlLEVBQXNCLGVBQWUsRUFDNUIsa0JBQWtCLEVBRTFDLGFBQWEsRUFDYixXQUFXLEVBR1osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQWlFLFVBQVUsRUFBMkIsa0JBQWtCLEVBQWMsTUFBTSxjQUFjLENBQUM7QUFDbEssT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU85RCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7Ozs7OztJQW1CN0IsWUFDVSxhQUEyQixFQUMzQixjQUE2QixFQUM3QixrQkFBcUMsRUFDckMsZ0JBQWlDLEVBQ2pDLFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxtQkFBdUMsRUFDdkMsb0JBQXlDLEVBQ3pDLG1CQUF1QyxFQUN2QyxnQkFBaUMsRUFDekMsYUFBNEI7UUFWcEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENB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QUN0QixDQUFDOzs7WUFuTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixxcUVBQTBDOzthQUUzQzs7OztZQXZCQyxZQUFZO1lBVUwsYUFBYTtZQUdiLGlCQUFpQjtZQURqQixlQUFlO1lBUHRCLFdBQVc7WUFKWCxlQUFlO1lBY1Isa0JBQWtCO1lBRWxCLG1CQUFtQjtZQWZGLGtCQUFrQjtZQURMLGVBQWU7WUFHcEQsYUFBYTs7O3lCQXFCWixLQUFLOzs7O0lBQU4sd0NBQTRCOzs7OztJQUU1QiwrQ0FBdUQ7O0lBRXZELDhDQUFxRDs7Ozs7SUFFckQsdUNBQXVDOztJQUN2QyxzQ0FBbUI7O0lBQ25CLDBDQUEyQjs7SUFDM0IsMENBQXFCOztJQUVyQiwyQ0FBNkI7O0lBQzdCLDBDQUFvQjs7SUFFcEIsNENBQXVCOztJQUN2QixtQ0FBd0I7Ozs7O0lBSXRCLDJDQUFtQzs7Ozs7SUFDbkMsNENBQXFDOzs7OztJQUNyQyxnREFBNkM7Ozs7O0lBQzdDLDhDQUF5Qzs7Ozs7SUFDekMsMENBQWlDOzs7OztJQUNqQyw4Q0FBeUM7Ozs7O0lBQ3pDLGlEQUErQzs7Ozs7SUFDL0Msa0RBQWlEOzs7OztJQUNqRCxpREFBK0M7Ozs7O0lBQy9DLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gIENvbW1vbk1vZGFscyxcclxuICBGaWxlQ3JlZGVudGlhbHMsXHJcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxyXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBNb2RhbFNlcnZpY2UsXHJcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcclxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgVXRpbHMsXHJcbiAgV2luZG93U2VydmljZSxcclxuICBab29tU2VydmljZSxcclxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcclxuICBMb2FkaW5nTWFza1NlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IERvY3VtZW50RGVzY3JpcHRpb24sIERvY3VtZW50RGVzY3JpcHRpb25SZXNwb25zZSwgUGFyc2VSZXN1bHQsIFNvdXJjZUZpbGUsIFRlbXBsYXRlLCBUZW1wbGF0ZUZpZWxkLCBUZW1wbGF0ZUZpZWxkVHlwZXMsIFRlbXBsYXRlSWQgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xyXG5pbXBvcnQgeyBQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi9wYXJzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhcnNlckNvbmZpZyB9IGZyb20gJy4vcGFyc2VyLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNvdXJjZUZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zb3VyY2UtZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tICcuL3BsYWNlaG9sZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvdXRpbCc7XHJcbmltcG9ydCB7IERvY3VtZW50UGFnZVNlcnZpY2UgfSBmcm9tICcuL2RvY3VtZW50LXBhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWFwcC1wYXJzZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJzZXItYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYXJzZXItYXBwLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc291cmNlRmlsZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IENSRUFURV9GSUVMRF9NT0RFID0gXCJjcmVhdGVGaWVsZE1vZGVcIjtcclxuXHJcbiAgcmVhZG9ubHkgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcclxuXHJcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50RGVzY3JpcHRpb247XHJcbiAgdGVtcGxhdGU6IFRlbXBsYXRlO1xyXG4gIHBhcnNlckNvbmZpZzogUGFyc2VyQ29uZmlnO1xyXG4gIGZpbGVQYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICBkb2N1bWVudEVycm9yOiBzdHJpbmcgPSBudWxsO1xyXG4gIGlzQXBpQXZhaWJsZSA9IHRydWU7XHJcblxyXG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XHJcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcGFyc2VyU2VydmljZTogUGFyc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgX3NvdXJjZUZpbGVTZXJ2aWNlOiBTb3VyY2VGaWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgX2RvY3VtZW50UGFnZVNlcnZpY2U6IERvY3VtZW50UGFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF91cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgIHByaXZhdGUgX3Bhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxyXG4gICAgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xyXG5cclxuICAgIHdpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3NvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGVDaGFuZ2VkLnN1YnNjcmliZShzb3VyY2VGaWxlID0+IHRoaXMubG9hZERvY3VtZW50RGVzY3JpcHRpb24oc291cmNlRmlsZSkpXHJcblxyXG4gICAgdGhpcy5fdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XHJcbiAgICAgIGlmICh1cGxvYWRzICYmIHVwbG9hZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuX3BhcnNlclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbSgwKSwgJycsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuX3NvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGUuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBNZW51XHJcblxyXG4gIHpvb21JbigpIHtcclxuICAgIGNvbnN0IHpvb20gPSB0aGlzLl96b29tU2VydmljZS56b29tO1xyXG5cclxuICAgIGlmICh6b29tIDwgNDkwKSB7XHJcbiAgICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20oem9vbSArIDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHpvb21PdXQoKSB7XHJcbiAgICBjb25zdCB6b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbTtcclxuICAgIGlmICh6b29tID4gMzApIHtcclxuICAgICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh6b29tIC0gMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkRmllbGRDbGljaygpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZTtcclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpZWxkID0gdGVtcGxhdGUuY3JlYXRlRmllbGQoXCJGaWVsZFwiKTtcclxuICAgIGZpZWxkLmZpZWxkVHlwZSA9IFRlbXBsYXRlRmllbGRUeXBlcy5GSVhFRDtcclxuICAgIGZpZWxkLnBhZ2VOdW1iZXIgPSB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2U7XHJcbiAgICB0ZW1wbGF0ZS5hZGRGaWVsZChmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBhZGRUYWJsZUNsaWNrKCkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlO1xyXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmllbGQgPSB0ZW1wbGF0ZS5jcmVhdGVGaWVsZChcIlRhYmxlXCIpO1xyXG4gICAgZmllbGQuZmllbGRUeXBlID0gVGVtcGxhdGVGaWVsZFR5cGVzLlRBQkxFO1xyXG4gICAgZmllbGQucGFnZU51bWJlciA9IHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZTtcclxuICAgIHRlbXBsYXRlLmFkZEZpZWxkKGZpZWxkKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZCBvZiBNZW51XHJcblxyXG4gIGlzRmlsZUxvYWRlZCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5kb2N1bWVudEVycm9yICYmIHRoaXMuZG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZywgZmlsZVNob3VsZEJlTG9hZGVkOiBib29sZWFuKSB7XHJcbiAgICBpZiAoZmlsZVNob3VsZEJlTG9hZGVkICYmICF0aGlzLmlzRmlsZUxvYWRlZCgpKSByZXR1cm47XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BhcnNlclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BhcnNlclNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpbGVEcm9wcGVkKCRldmVudCkge1xyXG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZSA9IG5ldyBTb3VyY2VGaWxlKCRldmVudCwgcGFzc3dvcmQpO1xyXG5cclxuICAgIGlmIChtb2RhbElkKSB7XHJcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29uZmlnID8gdGhpcy5wYXJzZXJDb25maWcucmV3cml0ZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29uZmlnID8gdGhpcy5wYXJzZXJDb25maWcudXBsb2FkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb25maWcgPyB0aGlzLnBhcnNlckNvbmZpZy5icm93c2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJldHVyblVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmV0dXJuVXJsXCIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICByZWxvYWRDdXJyZW50UGFnZSgpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZERvY3VtZW50RGVzY3JpcHRpb24oc291cmNlRmlsZTogU291cmNlRmlsZSkge1xyXG4gICAgdGhpcy5pc0FwaUF2YWlibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kb2N1bWVudEVycm9yID0gbnVsbDtcclxuICAgIHRoaXMuX2RvY3VtZW50ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCBvcGVyYXRpb25TdGF0ZSA9IHRoaXMuX3BsYWNlaG9sZGVyU2VydmljZS5zdGFydE9wZXJhdGlvbihcIkxvYWRpbmcgZG9jdW1lbnQuLi5cIik7XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSB7XHJcbiAgICAgIG5leHQ6IChyZXNwb25zZTogRG9jdW1lbnREZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2Uuc2V0QWN0aXZlUGFnZSgxKTtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgICBvcGVyYXRpb25TdGF0ZS5jb21wbGV0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3JlYXRlVGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gdGhpcy5kb2N1bWVudC5wYWdlcyA/IHRoaXMuZG9jdW1lbnQucGFnZXMubGVuZ3RoIDogMDtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudEVycm9yID0gdGhpcy5fcGFyc2VyU2VydmljZS5nZXRFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICBvcGVyYXRpb25TdGF0ZS5lcnJvcihlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZTogKCkgPT4gb3BlcmF0aW9uU3RhdGUuY29tcGxldGUoKVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLmxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGUpLnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgZG9jdW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xyXG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLmdldEZpdFRvV2lkdGgoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnQpIHtcclxuICAgICAgcmV0dXJuIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXJmYWNlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMuZG9jdW1lbnQucGFnZXNbMF0ud2lkdGgpO1xyXG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMuZG9jdW1lbnQucGFnZXNbMF0uaGVpZ2h0KTtcclxuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogc3VyZmFjZVdpZHRoO1xyXG5cclxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gc3VyZmFjZVdpZHRoKSA8IDIpXHJcbiAgICAgID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIHN1cmZhY2VXaWR0aClcclxuICAgICAgOiBNYXRoLnJvdW5kKHN1cmZhY2VXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcclxuICAgIC8vcHQgKiA5NiAvIDcyID0gcHguXHJcbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xyXG4gIH1cclxufSJdfQ==