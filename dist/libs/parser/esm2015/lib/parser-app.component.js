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
                template: "<gd-loading-mask></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\">\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\n        </a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n            *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\n        </gd-top-toolbar>\n      </div>\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n      </gd-init-state>\n\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\n        <gd-surface [document]=\"document\"></gd-surface>\n      </div>\n    </div>\n\n    <gd-parser-side-panel *ngIf=\"!documentError && document\"></gd-parser-side-panel>\n  </div>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBRUwsWUFBWSxFQUlaLFlBQVksRUFDWixlQUFlLEVBQXNCLGVBQWUsRUFDNUIsa0JBQWtCLEVBRTFDLGFBQWEsRUFDYixXQUFXLEVBR1osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQWlFLFVBQVUsRUFBMkIsa0JBQWtCLEVBQWMsTUFBTSxjQUFjLENBQUM7QUFDbEssT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU85RCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7Ozs7OztJQW1CN0IsWUFDVSxhQUEyQixFQUMzQixjQUE2QixFQUM3QixrQkFBcUMsRUFDckMsZ0JBQWlDLEVBQ2pDLFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxtQkFBdUMsRUFDdkMsb0JBQXlDLEVBQ3pDLG1CQUF1QyxFQUN2QyxnQkFBaUMsRUFDekMsYUFBNEI7UUFWcEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENB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QUN0QixDQUFDOzs7WUFuTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix5bEVBQTBDOzthQUUzQzs7OztZQXZCQyxZQUFZO1lBVUwsYUFBYTtZQUdiLGlCQUFpQjtZQURqQixlQUFlO1lBUHRCLFdBQVc7WUFKWCxlQUFlO1lBY1Isa0JBQWtCO1lBRWxCLG1CQUFtQjtZQWZGLGtCQUFrQjtZQURMLGVBQWU7WUFHcEQsYUFBYTs7O3lCQXFCWixLQUFLOzs7O0lBQU4sd0NBQTRCOzs7OztJQUU1QiwrQ0FBdUQ7O0lBRXZELDhDQUFxRDs7Ozs7SUFFckQsdUNBQXVDOztJQUN2QyxzQ0FBbUI7O0lBQ25CLDBDQUEyQjs7SUFDM0IsMENBQXFCOztJQUVyQiwyQ0FBNkI7O0lBQzdCLDBDQUFvQjs7SUFFcEIsNENBQXVCOztJQUN2QixtQ0FBd0I7Ozs7O0lBSXRCLDJDQUFtQzs7Ozs7SUFDbkMsNENBQXFDOzs7OztJQUNyQyxnREFBNkM7Ozs7O0lBQzdDLDhDQUF5Qzs7Ozs7SUFDekMsMENBQWlDOzs7OztJQUNqQyw4Q0FBeUM7Ozs7O0lBQ3pDLGlEQUErQzs7Ozs7SUFDL0Msa0RBQWlEOzs7OztJQUNqRCxpREFBK0M7Ozs7O0lBQy9DLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIENvbW1vbk1vZGFscyxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBGaWxlTW9kZWwsIEZvcm1hdHRpbmcsXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsIFBhZ2VQcmVsb2FkU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlLFxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFV0aWxzLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBab29tU2VydmljZSxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBEb2N1bWVudERlc2NyaXB0aW9uLCBEb2N1bWVudERlc2NyaXB0aW9uUmVzcG9uc2UsIFBhcnNlUmVzdWx0LCBTb3VyY2VGaWxlLCBUZW1wbGF0ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVGaWVsZFR5cGVzLCBUZW1wbGF0ZUlkIH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcbmltcG9ydCB7IFBhcnNlclNlcnZpY2UgfSBmcm9tICcuL3BhcnNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhcnNlckNvbmZpZyB9IGZyb20gJy4vcGFyc2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RlbXBsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlRmlsZVNlcnZpY2UgfSBmcm9tICcuL3NvdXJjZS1maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJTZXJ2aWNlIH0gZnJvbSAnLi9wbGFjZWhvbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy91dGlsJztcbmltcG9ydCB7IERvY3VtZW50UGFnZVNlcnZpY2UgfSBmcm9tICcuL2RvY3VtZW50LXBhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWFwcC1wYXJzZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyc2VyLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhcnNlci1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJzZXJBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzb3VyY2VGaWxlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBDUkVBVEVfRklFTERfTU9ERSA9IFwiY3JlYXRlRmllbGRNb2RlXCI7XG5cbiAgcmVhZG9ubHkgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcblxuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnREZXNjcmlwdGlvbjtcbiAgdGVtcGxhdGU6IFRlbXBsYXRlO1xuICBwYXJzZXJDb25maWc6IFBhcnNlckNvbmZpZztcbiAgZmlsZVBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgZG9jdW1lbnRFcnJvcjogc3RyaW5nID0gbnVsbDtcbiAgaXNBcGlBdmFpYmxlID0gdHJ1ZTtcblxuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3BhcnNlclNlcnZpY2U6IFBhcnNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc291cmNlRmlsZVNlcnZpY2U6IFNvdXJjZUZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSxcbiAgICBwcml2YXRlIF9kb2N1bWVudFBhZ2VTZXJ2aWNlOiBEb2N1bWVudFBhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3Bhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcblxuICAgIHdpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlQ2hhbmdlZC5zdWJzY3JpYmUoc291cmNlRmlsZSA9PiB0aGlzLmxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGUpKVxuXG4gICAgdGhpcy5fdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2FkcyAmJiB1cGxvYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fcGFyc2VyU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKDApLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9wYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuX3NvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGUuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWVudVxuXG4gIHpvb21JbigpIHtcbiAgICBjb25zdCB6b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbTtcblxuICAgIGlmICh6b29tIDwgNDkwKSB7XG4gICAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHpvb20gKyAxMCk7XG4gICAgfVxuICB9XG5cbiAgem9vbU91dCgpIHtcbiAgICBjb25zdCB6b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbTtcbiAgICBpZiAoem9vbSA+IDMwKSB7XG4gICAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHpvb20gLSAxMCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmllbGRDbGljaygpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGU7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gdGVtcGxhdGUuY3JlYXRlRmllbGQoXCJGaWVsZFwiKTtcbiAgICBmaWVsZC5maWVsZFR5cGUgPSBUZW1wbGF0ZUZpZWxkVHlwZXMuRklYRUQ7XG4gICAgZmllbGQucGFnZU51bWJlciA9IHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZTtcbiAgICB0ZW1wbGF0ZS5hZGRGaWVsZChmaWVsZCk7XG4gIH1cblxuICBhZGRUYWJsZUNsaWNrKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZTtcbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSB0ZW1wbGF0ZS5jcmVhdGVGaWVsZChcIlRhYmxlXCIpO1xuICAgIGZpZWxkLmZpZWxkVHlwZSA9IFRlbXBsYXRlRmllbGRUeXBlcy5UQUJMRTtcbiAgICBmaWVsZC5wYWdlTnVtYmVyID0gdGhpcy5fZG9jdW1lbnRQYWdlU2VydmljZS5hY3RpdmVQYWdlO1xuICAgIHRlbXBsYXRlLmFkZEZpZWxkKGZpZWxkKTtcbiAgfVxuXG4gIC8vIGVuZCBvZiBNZW51XG5cbiAgaXNGaWxlTG9hZGVkKCkge1xuICAgIHJldHVybiAhdGhpcy5kb2N1bWVudEVycm9yICYmIHRoaXMuZG9jdW1lbnQ7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZywgZmlsZVNob3VsZEJlTG9hZGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGZpbGVTaG91bGRCZUxvYWRlZCAmJiAhdGhpcy5pc0ZpbGVMb2FkZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcnNlclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCkge1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlID0gbmV3IFNvdXJjZUZpbGUoJGV2ZW50LCBwYXNzd29yZCk7XG5cbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcnNlckNvbmZpZyA/IHRoaXMucGFyc2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb25maWcgPyB0aGlzLnBhcnNlckNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb25maWcgPyB0aGlzLnBhcnNlckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHJldHVyblVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJldHVyblVybFwiKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcmVsb2FkQ3VycmVudFBhZ2UoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRG9jdW1lbnREZXNjcmlwdGlvbihzb3VyY2VGaWxlOiBTb3VyY2VGaWxlKSB7XG4gICAgdGhpcy5pc0FwaUF2YWlibGUgPSB0cnVlO1xuICAgIHRoaXMuZG9jdW1lbnRFcnJvciA9IG51bGw7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgb3BlcmF0aW9uU3RhdGUgPSB0aGlzLl9wbGFjZWhvbGRlclNlcnZpY2Uuc3RhcnRPcGVyYXRpb24oXCJMb2FkaW5nIGRvY3VtZW50Li4uXCIpO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSB7XG4gICAgICBuZXh0OiAocmVzcG9uc2U6IERvY3VtZW50RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRQYWdlU2VydmljZS5zZXRBY3RpdmVQYWdlKDEpO1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IHJlc3BvbnNlO1xuXG4gICAgICAgIG9wZXJhdGlvblN0YXRlLmNvbXBsZXRlKCk7XG5cbiAgICAgICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmNyZWF0ZVRlbXBsYXRlKCk7XG4gICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcblxuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IHRoaXMuZG9jdW1lbnQucGFnZXMgPyB0aGlzLmRvY3VtZW50LnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmRvY3VtZW50RXJyb3IgPSB0aGlzLl9wYXJzZXJTZXJ2aWNlLmdldEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICBvcGVyYXRpb25TdGF0ZS5lcnJvcihlcnIpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBvcGVyYXRpb25TdGF0ZS5jb21wbGV0ZSgpXG4gICAgfTtcblxuICAgIHRoaXMuX3BhcnNlclNlcnZpY2UubG9hZERvY3VtZW50RGVzY3JpcHRpb24oc291cmNlRmlsZSkuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgfVxuXG4gIGdldCBkb2N1bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5nZXRGaXRUb1dpZHRoKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xuICAgIGlmICghdGhpcy5kb2N1bWVudCkge1xuICAgICAgcmV0dXJuIDEwMDtcbiAgICB9XG5cbiAgICBjb25zdCBzdXJmYWNlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMuZG9jdW1lbnQucGFnZXNbMF0ud2lkdGgpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLnB0VG9QeCh0aGlzLmRvY3VtZW50LnBhZ2VzWzBdLmhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBwYWdlV2lkdGggPyBwYWdlV2lkdGggOiBzdXJmYWNlV2lkdGg7XG5cbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHN1cmZhY2VXaWR0aCkgPCAyKVxuICAgICAgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gc3VyZmFjZVdpZHRoKVxuICAgICAgOiBNYXRoLnJvdW5kKHN1cmZhY2VXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cbn0iXX0=