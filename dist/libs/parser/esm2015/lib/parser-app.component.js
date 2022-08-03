/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CommonModals, FileCredentials, ModalService, NavigateService, PasswordService, UploadFilesService, WindowService, ZoomService } from "@groupdocs.examples.angular/common-components";
import { SourceFile, TemplateFieldTypes } from './app-models';
import { ParserService } from './parser.service';
import { TemplateService } from './template.service';
import { SourceFileService } from './source-file.service';
import { PlaceholderService } from './placeholder.service';
import { DocumentPageService } from './document-page.service';
export class ParserAppComponent {
    /**
     * @param {?} _modalService
     * @param {?} parserService
     * @param {?} sourceFileService
     * @param {?} templateService
     * @param {?} _zoomService
     * @param {?} _navigateService
     * @param {?} placeholderService
     * @param {?} documentPageService
     * @param {?} _uploadFilesService
     * @param {?} _passwordService
     * @param {?} windowService
     */
    constructor(_modalService, parserService, sourceFileService, templateService, _zoomService, _navigateService, placeholderService, documentPageService, _uploadFilesService, _passwordService, windowService) {
        this._modalService = _modalService;
        this._zoomService = _zoomService;
        this._navigateService = _navigateService;
        this._uploadFilesService = _uploadFilesService;
        this._passwordService = _passwordService;
        this.CREATE_FIELD_MODE = "createFieldMode";
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.documentError = null;
        this.isApiAvaible = true;
        this.fileWasDropped = false;
        this.files = [];
        this.parserService = parserService;
        this.sourceFileService = sourceFileService;
        this.templateService = templateService;
        this.placeholderService = placeholderService;
        this.documentPageService = documentPageService;
        windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.refreshZoom();
        }));
        this.sourceFileService.sourceFileChanged.subscribe((/**
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
                this.parserService.upload(uploads.item(0), '', this.rewriteConfig).subscribe((/**
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
            this.selectFile(this.sourceFileService.sourceFile.guid, pass, CommonModals.PasswordRequired);
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
        const template = this.templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        const field = template.createField("Field");
        field.fieldType = TemplateFieldTypes.FIXED;
        field.pageNumber = this.documentPageService.activePage;
        template.addField(field);
    }
    /**
     * @return {?}
     */
    addTableClick() {
        /** @type {?} */
        const template = this.templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        const field = template.createField("Table");
        field.fieldType = TemplateFieldTypes.TABLE;
        field.pageNumber = this.documentPageService.activePage;
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
        this.parserService.loadFiles($event).subscribe((/**
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
        this.parserService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
        this.credentials = new FileCredentials($event, password);
        this.sourceFileService.sourceFile = new SourceFile($event, password);
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
        const operationState = this.placeholderService.startOperation("Loading document...");
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.documentPageService.setActivePage(1);
                this._document = response;
                operationState.complete();
                this.templateService.createTemplate();
                this.refreshZoom();
                this._navigateService.countPages = this.document.pages ? this.document.pages.length : 0;
                this._navigateService.currentPage = 1;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.documentError = this.parserService.getErrorMessage(err);
                operationState.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            () => operationState.complete())
        };
        this.parserService.loadDocumentDescription(sourceFile).subscribe(observer);
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
                template: "<gd-loading-mask></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\">\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\n        </a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n            *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\n        </gd-top-toolbar>\n      </div>\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n      </gd-init-state>\n\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\n        <gd-surface [document]=\"document\"></gd-surface>\n      </div>\n    </div>\n\n    <gd-parser-side-panel [fileNameForCsv]=\"\" *ngIf=\"!documentError && document\"></gd-parser-side-panel>\n  </div>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>",
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
    /** @type {?} */
    ParserAppComponent.prototype.parserService;
    /** @type {?} */
    ParserAppComponent.prototype.sourceFileService;
    /** @type {?} */
    ParserAppComponent.prototype.templateService;
    /** @type {?} */
    ParserAppComponent.prototype.placeholderService;
    /** @type {?} */
    ParserAppComponent.prototype.documentPageService;
    /** @type {?} */
    ParserAppComponent.prototype.credentials;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._modalService;
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
    ParserAppComponent.prototype._uploadFilesService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._passwordService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLGVBQWUsRUFDSixZQUFZLEVBQ3ZCLGVBQWUsRUFBRSxlQUFlLEVBQ2hDLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsV0FBVyxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDcEUsT0FBTyxFQUF1QixVQUFVLEVBQVksa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU85RCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7Ozs7OztJQXdCN0IsWUFDVSxhQUEyQixFQUNuQyxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsZUFBZ0MsRUFDeEIsWUFBeUIsRUFDekIsZ0JBQWlDLEVBQ3pDLGtCQUFzQyxFQUN0QyxtQkFBd0MsRUFDaEMsbUJBQXVDLEVBQ3ZDLGdCQUFpQyxFQUN6QyxhQUE0QjtRQVZwQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUkzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBR2pDLHdCQUFtQixHQUFuQixt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QUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsRUFBVTtRQUN2QixvQkFBb0I7UUFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUEvTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwrbUVBQTBDOzthQUUzQzs7OztZQWpCWSxZQUFZO1lBTWhCLGFBQWE7WUFHYixpQkFBaUI7WUFEakIsZUFBZTtZQUp0QixXQUFXO1lBSFgsZUFBZTtZQVNSLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFUMUIsa0JBQWtCO1lBREQsZUFBZTtZQUVoQyxhQUFhOzs7eUJBZ0JaLEtBQUs7Ozs7SUFBTix3Q0FBNEI7Ozs7O0lBRTVCLCtDQUF1RDs7SUFFdkQsOENBQXFEOzs7OztJQUVyRCx1Q0FBdUM7O0lBQ3ZDLHNDQUFtQjs7SUFDbkIsMENBQTJCOztJQUMzQiwwQ0FBcUI7O0lBRXJCLDJDQUE2Qjs7SUFDN0IsMENBQW9COztJQUVwQiw0Q0FBdUI7O0lBQ3ZCLG1DQUF3Qjs7SUFDeEIsMkNBQTZCOztJQUM3QiwrQ0FBcUM7O0lBQ3JDLDZDQUFpQzs7SUFDakMsZ0RBQXVDOztJQUN2QyxpREFBeUM7O0lBQ3pDLHlDQUFvQzs7Ozs7SUFHbEMsMkNBQW1DOzs7OztJQUluQywwQ0FBaUM7Ozs7O0lBQ2pDLDhDQUF5Qzs7Ozs7SUFHekMsaURBQStDOzs7OztJQUMvQyw4Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbW1vbk1vZGFscyxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBGaWxlTW9kZWwsIE1vZGFsU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2UsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgV2luZG93U2VydmljZSxcbiAgWm9vbVNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IERvY3VtZW50RGVzY3JpcHRpb24sIFNvdXJjZUZpbGUsIFRlbXBsYXRlLCBUZW1wbGF0ZUZpZWxkVHlwZXMgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xuaW1wb3J0IHsgUGFyc2VyU2VydmljZSB9IGZyb20gJy4vcGFyc2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyc2VyQ29uZmlnIH0gZnJvbSAnLi9wYXJzZXItY29uZmlnJztcbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VGaWxlU2VydmljZSB9IGZyb20gJy4vc291cmNlLWZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tICcuL3BsYWNlaG9sZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9jdW1lbnRQYWdlU2VydmljZSB9IGZyb20gJy4vZG9jdW1lbnQtcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYXBwLXBhcnNlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJzZXItYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyc2VyLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhcnNlckFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNvdXJjZUZpbGU6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IENSRUFURV9GSUVMRF9NT0RFID0gXCJjcmVhdGVGaWVsZE1vZGVcIjtcblxuICByZWFkb25seSBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudERlc2NyaXB0aW9uO1xuICB0ZW1wbGF0ZTogVGVtcGxhdGU7XG4gIHBhcnNlckNvbmZpZzogUGFyc2VyQ29uZmlnO1xuICBmaWxlUGFzc3dvcmQ6IHN0cmluZztcblxuICBkb2N1bWVudEVycm9yOiBzdHJpbmcgPSBudWxsO1xuICBpc0FwaUF2YWlibGUgPSB0cnVlO1xuXG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBwYXJzZXJTZXJ2aWNlOiBQYXJzZXJTZXJ2aWNlO1xuICBzb3VyY2VGaWxlU2VydmljZTogU291cmNlRmlsZVNlcnZpY2U7XG4gIHRlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlO1xuICBwbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZTtcbiAgZG9jdW1lbnRQYWdlU2VydmljZTogRG9jdW1lbnRQYWdlU2VydmljZTtcbiAgcHVibGljIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcGFyc2VyU2VydmljZTogUGFyc2VyU2VydmljZSxcbiAgICBzb3VyY2VGaWxlU2VydmljZTogU291cmNlRmlsZVNlcnZpY2UsXG4gICAgdGVtcGxhdGVTZXJ2aWNlOiBUZW1wbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgIHBsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlLFxuICAgIGRvY3VtZW50UGFnZVNlcnZpY2U6IERvY3VtZW50UGFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuXG4gICAgdGhpcy5wYXJzZXJTZXJ2aWNlID0gcGFyc2VyU2VydmljZTtcbiAgICB0aGlzLnNvdXJjZUZpbGVTZXJ2aWNlID0gc291cmNlRmlsZVNlcnZpY2U7XG4gICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSB0ZW1wbGF0ZVNlcnZpY2U7XG4gICAgdGhpcy5wbGFjZWhvbGRlclNlcnZpY2UgPSBwbGFjZWhvbGRlclNlcnZpY2U7XG4gICAgdGhpcy5kb2N1bWVudFBhZ2VTZXJ2aWNlID0gZG9jdW1lbnRQYWdlU2VydmljZTtcblxuICAgIHdpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGVDaGFuZ2VkLnN1YnNjcmliZShzb3VyY2VGaWxlID0+IHRoaXMubG9hZERvY3VtZW50RGVzY3JpcHRpb24oc291cmNlRmlsZSkpXG5cbiAgICB0aGlzLl91cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzICYmIHVwbG9hZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBhcnNlclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbSgwKSwgJycsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLnNvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGUuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWVudVxuXG4gIHpvb21JbigpIHtcbiAgICBjb25zdCB6b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbTtcblxuICAgIGlmICh6b29tIDwgNDkwKSB7XG4gICAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHpvb20gKyAxMCk7XG4gICAgfVxuICB9XG5cbiAgem9vbU91dCgpIHtcbiAgICBjb25zdCB6b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbTtcbiAgICBpZiAoem9vbSA+IDMwKSB7XG4gICAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHpvb20gLSAxMCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmllbGRDbGljaygpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZTtcbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSB0ZW1wbGF0ZS5jcmVhdGVGaWVsZChcIkZpZWxkXCIpO1xuICAgIGZpZWxkLmZpZWxkVHlwZSA9IFRlbXBsYXRlRmllbGRUeXBlcy5GSVhFRDtcbiAgICBmaWVsZC5wYWdlTnVtYmVyID0gdGhpcy5kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2U7XG4gICAgdGVtcGxhdGUuYWRkRmllbGQoZmllbGQpO1xuICB9XG5cbiAgYWRkVGFibGVDbGljaygpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZTtcbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSB0ZW1wbGF0ZS5jcmVhdGVGaWVsZChcIlRhYmxlXCIpO1xuICAgIGZpZWxkLmZpZWxkVHlwZSA9IFRlbXBsYXRlRmllbGRUeXBlcy5UQUJMRTtcbiAgICBmaWVsZC5wYWdlTnVtYmVyID0gdGhpcy5kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2U7XG4gICAgdGVtcGxhdGUuYWRkRmllbGQoZmllbGQpO1xuICB9XG5cbiAgLy8gZW5kIG9mIE1lbnVcblxuICBpc0ZpbGVMb2FkZWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmRvY3VtZW50RXJyb3IgJiYgdGhpcy5kb2N1bWVudDtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nLCBmaWxlU2hvdWxkQmVMb2FkZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoZmlsZVNob3VsZEJlTG9hZGVkICYmICF0aGlzLmlzRmlsZUxvYWRlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXJzZXJTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXJzZXJTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCkge1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZpbGVDcmVkZW50aWFscygkZXZlbnQsIHBhc3N3b3JkKTtcbiAgICB0aGlzLnNvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGUgPSBuZXcgU291cmNlRmlsZSgkZXZlbnQsIHBhc3N3b3JkKTtcblxuICAgIGlmIChtb2RhbElkKSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29uZmlnID8gdGhpcy5wYXJzZXJDb25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcnNlckNvbmZpZyA/IHRoaXMucGFyc2VyQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcnNlckNvbmZpZyA/IHRoaXMucGFyc2VyQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgcmV0dXJuVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmV0dXJuVXJsXCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICByZWxvYWRDdXJyZW50UGFnZSgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGU6IFNvdXJjZUZpbGUpIHtcbiAgICB0aGlzLmlzQXBpQXZhaWJsZSA9IHRydWU7XG4gICAgdGhpcy5kb2N1bWVudEVycm9yID0gbnVsbDtcbiAgICB0aGlzLl9kb2N1bWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBvcGVyYXRpb25TdGF0ZSA9IHRoaXMucGxhY2Vob2xkZXJTZXJ2aWNlLnN0YXJ0T3BlcmF0aW9uKFwiTG9hZGluZyBkb2N1bWVudC4uLlwiKTtcblxuICAgIGNvbnN0IG9ic2VydmVyID0ge1xuICAgICAgbmV4dDogKHJlc3BvbnNlOiBEb2N1bWVudERlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRQYWdlU2VydmljZS5zZXRBY3RpdmVQYWdlKDEpO1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IHJlc3BvbnNlO1xuXG4gICAgICAgIG9wZXJhdGlvblN0YXRlLmNvbXBsZXRlKCk7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UuY3JlYXRlVGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuXG4gICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gdGhpcy5kb2N1bWVudC5wYWdlcyA/IHRoaXMuZG9jdW1lbnQucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRFcnJvciA9IHRoaXMucGFyc2VyU2VydmljZS5nZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgb3BlcmF0aW9uU3RhdGUuZXJyb3IoZXJyKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4gb3BlcmF0aW9uU3RhdGUuY29tcGxldGUoKVxuICAgIH07XG5cbiAgICB0aGlzLnBhcnNlclNlcnZpY2UubG9hZERvY3VtZW50RGVzY3JpcHRpb24oc291cmNlRmlsZSkuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgfVxuXG4gIGdldCBkb2N1bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5nZXRGaXRUb1dpZHRoKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xuICAgIGlmICghdGhpcy5kb2N1bWVudCkge1xuICAgICAgcmV0dXJuIDEwMDtcbiAgICB9XG5cbiAgICBjb25zdCBzdXJmYWNlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIC8vIEltYWdlcyBhbmQgRXhjZWwtcmVsYXRlZCBmaWxlcyByZWNlaXZpbmcgZGltZW5zaW9ucyBpbiBweCBmcm9tIHNlcnZlclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMuZG9jdW1lbnQucGFnZXNbMF0ud2lkdGgpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLnB0VG9QeCh0aGlzLmRvY3VtZW50LnBhZ2VzWzBdLmhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBwYWdlV2lkdGggPyBwYWdlV2lkdGggOiBzdXJmYWNlV2lkdGg7XG5cbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHN1cmZhY2VXaWR0aCkgPCAyKVxuICAgICAgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gc3VyZmFjZVdpZHRoKVxuICAgICAgOiBNYXRoLnJvdW5kKHN1cmZhY2VXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cbn0iXX0=