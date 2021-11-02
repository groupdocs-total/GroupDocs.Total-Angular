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
var ParserAppComponent = /** @class */ (function () {
    function ParserAppComponent(_modalService, _parserService, _sourceFileService, _templateService, _zoomService, _navigateService, _placeholderService, _documentPageService, _uploadFilesService, _passwordService, windowService) {
        var _this = this;
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
        function (w) {
            _this.refreshZoom();
        }));
        this._sourceFileService.sourceFileChanged.subscribe((/**
         * @param {?} sourceFile
         * @return {?}
         */
        function (sourceFile) { return _this.loadDocumentDescription(sourceFile); }));
        this._uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        function (uploads) {
            if (uploads && uploads.length > 0) {
                _this._parserService.upload(uploads.item(0), '', _this.rewriteConfig).subscribe((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                }));
            }
        }));
        this._passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            _this.selectFile(_this._sourceFileService.sourceFile.guid, pass, CommonModals.PasswordRequired);
        }));
    }
    // Menu
    // Menu
    /**
     * @return {?}
     */
    ParserAppComponent.prototype.zoomIn = 
    // Menu
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var zoom = this._zoomService.zoom;
        if (zoom < 490) {
            this._zoomService.changeZoom(zoom + 10);
        }
    };
    /**
     * @return {?}
     */
    ParserAppComponent.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var zoom = this._zoomService.zoom;
        if (zoom > 30) {
            this._zoomService.changeZoom(zoom - 10);
        }
    };
    /**
     * @return {?}
     */
    ParserAppComponent.prototype.addFieldClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var template = this._templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        var field = template.createField("Field");
        field.fieldType = TemplateFieldTypes.FIXED;
        field.pageNumber = this._documentPageService.activePage;
        template.addField(field);
    };
    /**
     * @return {?}
     */
    ParserAppComponent.prototype.addTableClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var template = this._templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        var field = template.createField("Table");
        field.fieldType = TemplateFieldTypes.TABLE;
        field.pageNumber = this._documentPageService.activePage;
        template.addField(field);
    };
    // end of Menu
    // end of Menu
    /**
     * @return {?}
     */
    ParserAppComponent.prototype.isFileLoaded = 
    // end of Menu
    /**
     * @return {?}
     */
    function () {
        return !this.documentError && this.document;
    };
    /**
     * @param {?} id
     * @param {?} fileShouldBeLoaded
     * @return {?}
     */
    ParserAppComponent.prototype.openModal = /**
     * @param {?} id
     * @param {?} fileShouldBeLoaded
     * @return {?}
     */
    function (id, fileShouldBeLoaded) {
        if (fileShouldBeLoaded && !this.isFileLoaded())
            return;
        this._modalService.open(id);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ParserAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._parserService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.files = files || []; }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ParserAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._parserService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        function () {
            _this.selectDir('');
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ParserAppComponent.prototype.fileDropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.fileWasDropped = $event;
    };
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    ParserAppComponent.prototype.selectFile = /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    function ($event, password, modalId) {
        this._sourceFileService.sourceFile = new SourceFile($event, password);
        if (modalId) {
            this._modalService.close(modalId);
        }
    };
    Object.defineProperty(ParserAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parserConfig ? this.parserConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parserConfig ? this.parserConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserAppComponent.prototype, "browseConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parserConfig ? this.parserConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserAppComponent.prototype, "returnUrl", {
        get: /**
         * @return {?}
         */
        function () {
            return localStorage.getItem("returnUrl");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ParserAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ParserAppComponent.prototype.reloadCurrentPage = /**
     * @return {?}
     */
    function () {
        window.location.reload();
    };
    /**
     * @private
     * @param {?} sourceFile
     * @return {?}
     */
    ParserAppComponent.prototype.loadDocumentDescription = /**
     * @private
     * @param {?} sourceFile
     * @return {?}
     */
    function (sourceFile) {
        var _this = this;
        this.isApiAvaible = true;
        this.documentError = null;
        this._document = null;
        /** @type {?} */
        var operationState = this._placeholderService.startOperation("Loading document...");
        /** @type {?} */
        var observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this._documentPageService.setActivePage(1);
                _this._document = response;
                operationState.complete();
                _this._templateService.createTemplate();
                _this.refreshZoom();
                _this._navigateService.countPages = _this.document.pages ? _this.document.pages.length : 0;
                _this._navigateService.currentPage = 1;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.documentError = _this._parserService.getErrorMessage(err);
                operationState.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            function () { return operationState.complete(); })
        };
        this._parserService.loadDocumentDescription(sourceFile).subscribe(observer);
    };
    Object.defineProperty(ParserAppComponent.prototype, "document", {
        get: /**
         * @return {?}
         */
        function () {
            return this._document;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ParserAppComponent.prototype.refreshZoom = /**
     * @private
     * @return {?}
     */
    function () {
        this._zoomService.changeZoom(this.getFitToWidth());
    };
    /**
     * @private
     * @return {?}
     */
    ParserAppComponent.prototype.getFitToWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.document) {
            return 100;
        }
        /** @type {?} */
        var surfaceWidth = window.innerWidth;
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        var pageWidth = this.ptToPx(this.document.pages[0].width);
        /** @type {?} */
        var pageHeight = this.ptToPx(this.document.pages[0].height);
        /** @type {?} */
        var offsetWidth = pageWidth ? pageWidth : surfaceWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / surfaceWidth) < 2)
            ? 200 - Math.round(offsetWidth * 100 / surfaceWidth)
            : Math.round(surfaceWidth * 100 / offsetWidth);
    };
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    ParserAppComponent.prototype.ptToPx = /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    ParserAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-app-parser',
                    template: "<gd-loading-mask></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\">\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\n        </a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n            *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\n        </gd-top-toolbar>\n      </div>\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n      </gd-init-state>\n\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\n        <gd-surface [document]=\"document\"></gd-surface>\n      </div>\n    </div>\n\n    <gd-parser-side-panel *ngIf=\"!documentError && document\"></gd-parser-side-panel>\n  </div>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.parser-wrapper{z-index:100;left:0;top:0;right:0;bottom:0}gd-parser-side-panel{position:absolute;right:0;top:60px;width:300px;height:calc(100vh - 60px);background-color:#fff}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
                }] }
    ];
    /** @nocollapse */
    ParserAppComponent.ctorParameters = function () { return [
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
    ]; };
    ParserAppComponent.propDecorators = {
        sourceFile: [{ type: Input }]
    };
    return ParserAppComponent;
}());
export { ParserAppComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBRUwsWUFBWSxFQUlaLFlBQVksRUFDWixlQUFlLEVBQXNCLGVBQWUsRUFDNUIsa0JBQWtCLEVBRTFDLGFBQWEsRUFDYixXQUFXLEVBR1osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQWlFLFVBQVUsRUFBMkIsa0JBQWtCLEVBQWMsTUFBTSxjQUFjLENBQUM7QUFDbEssT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDtJQXdCRSw0QkFDVSxhQUEyQixFQUMzQixjQUE2QixFQUM3QixrQkFBcUMsRUFDckMsZ0JBQWlDLEVBQ2pDLFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxtQkFBdUMsRUFDdkMsb0JBQXlDLEVBQ3pDLG1CQUF1QyxFQUN2QyxnQkFBaUMsRUFDekMsYUFBNEI7UUFYOUIsaUJBOEJDO1FBN0JTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxpQkFBWSxH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LEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztZQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVPLG1DQUFNOzs7OztJQUFkLFVBQWUsRUFBVTtRQUN2QixvQkFBb0I7UUFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFuTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix5bEVBQTBDOztpQkFFM0M7Ozs7Z0JBdkJDLFlBQVk7Z0JBVUwsYUFBYTtnQkFHYixpQkFBaUI7Z0JBRGpCLGVBQWU7Z0JBUHRCLFdBQVc7Z0JBSlgsZUFBZTtnQkFjUixrQkFBa0I7Z0JBRWxCLG1CQUFtQjtnQkFmRixrQkFBa0I7Z0JBREwsZUFBZTtnQkFHcEQsYUFBYTs7OzZCQXFCWixLQUFLOztJQThNUix5QkFBQztDQUFBLEFBcE5ELElBb05DO1NBL01ZLGtCQUFrQjs7O0lBQzdCLHdDQUE0Qjs7Ozs7SUFFNUIsK0NBQXVEOztJQUV2RCw4Q0FBcUQ7Ozs7O0lBRXJELHVDQUF1Qzs7SUFDdkMsc0NBQW1COztJQUNuQiwwQ0FBMkI7O0lBQzNCLDBDQUFxQjs7SUFFckIsMkNBQTZCOztJQUM3QiwwQ0FBb0I7O0lBRXBCLDRDQUF1Qjs7SUFDdkIsbUNBQXdCOzs7OztJQUl0QiwyQ0FBbUM7Ozs7O0lBQ25DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3Qyw4Q0FBeUM7Ozs7O0lBQ3pDLDBDQUFpQzs7Ozs7SUFDakMsOENBQXlDOzs7OztJQUN6QyxpREFBK0M7Ozs7O0lBQy9DLGtEQUFpRDs7Ozs7SUFDakQsaURBQStDOzs7OztJQUMvQyw4Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIE1vZGFsU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBVdGlscyxcbiAgV2luZG93U2VydmljZSxcbiAgWm9vbVNlcnZpY2UsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRG9jdW1lbnREZXNjcmlwdGlvbiwgRG9jdW1lbnREZXNjcmlwdGlvblJlc3BvbnNlLCBQYXJzZVJlc3VsdCwgU291cmNlRmlsZSwgVGVtcGxhdGUsIFRlbXBsYXRlRmllbGQsIFRlbXBsYXRlRmllbGRUeXBlcywgVGVtcGxhdGVJZCB9IGZyb20gJy4vYXBwLW1vZGVscyc7XG5pbXBvcnQgeyBQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi9wYXJzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJzZXJDb25maWcgfSBmcm9tICcuL3BhcnNlci1jb25maWcnO1xuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZUZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zb3VyY2UtZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBsYWNlaG9sZGVyU2VydmljZSB9IGZyb20gJy4vcGxhY2Vob2xkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvdXRpbCc7XG5pbXBvcnQgeyBEb2N1bWVudFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9kb2N1bWVudC1wYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hcHAtcGFyc2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcnNlci1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJzZXItYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFyc2VyQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc291cmNlRmlsZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgQ1JFQVRFX0ZJRUxEX01PREUgPSBcImNyZWF0ZUZpZWxkTW9kZVwiO1xuXG4gIHJlYWRvbmx5IGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG5cbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50RGVzY3JpcHRpb247XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZTtcbiAgcGFyc2VyQ29uZmlnOiBQYXJzZXJDb25maWc7XG4gIGZpbGVQYXNzd29yZDogc3RyaW5nO1xuXG4gIGRvY3VtZW50RXJyb3I6IHN0cmluZyA9IG51bGw7XG4gIGlzQXBpQXZhaWJsZSA9IHRydWU7XG5cbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIF9wYXJzZXJTZXJ2aWNlOiBQYXJzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NvdXJjZUZpbGVTZXJ2aWNlOiBTb3VyY2VGaWxlU2VydmljZSxcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJTZXJ2aWNlOiBQbGFjZWhvbGRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRQYWdlU2VydmljZTogRG9jdW1lbnRQYWdlU2VydmljZSxcbiAgICBwcml2YXRlIF91cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICBwcml2YXRlIF9wYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG5cbiAgICB3aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZUNoYW5nZWQuc3Vic2NyaWJlKHNvdXJjZUZpbGUgPT4gdGhpcy5sb2FkRG9jdW1lbnREZXNjcmlwdGlvbihzb3VyY2VGaWxlKSlcblxuICAgIHRoaXMuX3VwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMgJiYgdXBsb2Fkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3BhcnNlclNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbSgwKSwgJycsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1lbnVcblxuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb207XG5cbiAgICBpZiAoem9vbSA8IDQ5MCkge1xuICAgICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh6b29tICsgMTApO1xuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb207XG4gICAgaWYgKHpvb20gPiAzMCkge1xuICAgICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh6b29tIC0gMTApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZpZWxkQ2xpY2soKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IHRlbXBsYXRlLmNyZWF0ZUZpZWxkKFwiRmllbGRcIik7XG4gICAgZmllbGQuZmllbGRUeXBlID0gVGVtcGxhdGVGaWVsZFR5cGVzLkZJWEVEO1xuICAgIGZpZWxkLnBhZ2VOdW1iZXIgPSB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2U7XG4gICAgdGVtcGxhdGUuYWRkRmllbGQoZmllbGQpO1xuICB9XG5cbiAgYWRkVGFibGVDbGljaygpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGU7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gdGVtcGxhdGUuY3JlYXRlRmllbGQoXCJUYWJsZVwiKTtcbiAgICBmaWVsZC5maWVsZFR5cGUgPSBUZW1wbGF0ZUZpZWxkVHlwZXMuVEFCTEU7XG4gICAgZmllbGQucGFnZU51bWJlciA9IHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZTtcbiAgICB0ZW1wbGF0ZS5hZGRGaWVsZChmaWVsZCk7XG4gIH1cblxuICAvLyBlbmQgb2YgTWVudVxuXG4gIGlzRmlsZUxvYWRlZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuZG9jdW1lbnRFcnJvciAmJiB0aGlzLmRvY3VtZW50O1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcsIGZpbGVTaG91bGRCZUxvYWRlZDogYm9vbGVhbikge1xuICAgIGlmIChmaWxlU2hvdWxkQmVMb2FkZWQgJiYgIXRoaXMuaXNGaWxlTG9hZGVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyc2VyU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZSA9IG5ldyBTb3VyY2VGaWxlKCRldmVudCwgcGFzc3dvcmQpO1xuXG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb25maWcgPyB0aGlzLnBhcnNlckNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29uZmlnID8gdGhpcy5wYXJzZXJDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29uZmlnID8gdGhpcy5wYXJzZXJDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCByZXR1cm5VcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZXR1cm5VcmxcIik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHJlbG9hZEN1cnJlbnRQYWdlKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZERvY3VtZW50RGVzY3JpcHRpb24oc291cmNlRmlsZTogU291cmNlRmlsZSkge1xuICAgIHRoaXMuaXNBcGlBdmFpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmRvY3VtZW50RXJyb3IgPSBudWxsO1xuICAgIHRoaXMuX2RvY3VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG9wZXJhdGlvblN0YXRlID0gdGhpcy5fcGxhY2Vob2xkZXJTZXJ2aWNlLnN0YXJ0T3BlcmF0aW9uKFwiTG9hZGluZyBkb2N1bWVudC4uLlwiKTtcblxuICAgIGNvbnN0IG9ic2VydmVyID0ge1xuICAgICAgbmV4dDogKHJlc3BvbnNlOiBEb2N1bWVudERlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2Uuc2V0QWN0aXZlUGFnZSgxKTtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSByZXNwb25zZTtcblxuICAgICAgICBvcGVyYXRpb25TdGF0ZS5jb21wbGV0ZSgpO1xuXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5jcmVhdGVUZW1wbGF0ZSgpO1xuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG5cbiAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSB0aGlzLmRvY3VtZW50LnBhZ2VzID8gdGhpcy5kb2N1bWVudC5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5kb2N1bWVudEVycm9yID0gdGhpcy5fcGFyc2VyU2VydmljZS5nZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgb3BlcmF0aW9uU3RhdGUuZXJyb3IoZXJyKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4gb3BlcmF0aW9uU3RhdGUuY29tcGxldGUoKVxuICAgIH07XG5cbiAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLmxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGUpLnN1YnNjcmliZShvYnNlcnZlcik7XG4gIH1cblxuICBnZXQgZG9jdW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuZ2V0Rml0VG9XaWR0aCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml0VG9XaWR0aCgpIHtcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiAxMDA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VyZmFjZVdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLmRvY3VtZW50LnBhZ2VzWzBdLndpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5kb2N1bWVudC5wYWdlc1swXS5oZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogc3VyZmFjZVdpZHRoO1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyBzdXJmYWNlV2lkdGgpIDwgMilcbiAgICAgID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIHN1cmZhY2VXaWR0aClcbiAgICAgIDogTWF0aC5yb3VuZChzdXJmYWNlV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG59Il19