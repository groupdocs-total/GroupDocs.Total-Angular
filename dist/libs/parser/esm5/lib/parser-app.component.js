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
                    template: "<gd-loading-mask></gd-loading-mask>\r\n<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\r\n      <div class=\"top-panel\">\r\n        <a class=\"logo-link\" [href]=\"returnUrl\">\r\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\r\n        </a>\r\n        <gd-top-toolbar class=\"toolbar-panel\">\r\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\r\n            *ngIf=\"browseConfig\"></gd-button>\r\n\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\r\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\r\n        </gd-top-toolbar>\r\n      </div>\r\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\r\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n        Or drop file here\r\n      </gd-init-state>\r\n\r\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\r\n        <gd-surface [document]=\"document\"></gd-surface>\r\n      </div>\r\n    </div>\r\n\r\n    <gd-parser-side-panel *ngIf=\"!documentError && document\"></gd-parser-side-panel>\r\n  </div>\r\n\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\r\n  </gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBRUwsWUFBWSxFQUlaLFlBQVksRUFDWixlQUFlLEVBQXNCLGVBQWUsRUFDNUIsa0JBQWtCLEVBRTFDLGFBQWEsRUFDYixXQUFXLEVBR1osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQWlFLFVBQVUsRUFBMkIsa0JBQWtCLEVBQWMsTUFBTSxjQUFjLENBQUM7QUFDbEssT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDtJQXdCRSw0QkFDVSxhQUEyQixFQUMzQixjQUE2QixFQUM3QixrQkFBcUMsRUFDckMsZ0JBQWlDLEVBQ2pDLFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxtQkFBdUMsRUFDdkMsb0JBQXlDLEVBQ3pDLG1CQUF1QyxFQUN2QyxnQkFBaUMsRUFDekMsYUFBNEI7UUFYOUIsaUJBOEJDO1FBN0JTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxpQkFBWSxH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LEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztZQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVPLG1DQUFNOzs7OztJQUFkLFVBQWUsRUFBVTtRQUN2QixvQkFBb0I7UUFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFuTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixxcUVBQTBDOztpQkFFM0M7Ozs7Z0JBdkJDLFlBQVk7Z0JBVUwsYUFBYTtnQkFHYixpQkFBaUI7Z0JBRGpCLGVBQWU7Z0JBUHRCLFdBQVc7Z0JBSlgsZUFBZTtnQkFjUixrQkFBa0I7Z0JBRWxCLG1CQUFtQjtnQkFmRixrQkFBa0I7Z0JBREwsZUFBZTtnQkFHcEQsYUFBYTs7OzZCQXFCWixLQUFLOztJQThNUix5QkFBQztDQUFBLEFBcE5ELElBb05DO1NBL01ZLGtCQUFrQjs7O0lBQzdCLHdDQUE0Qjs7Ozs7SUFFNUIsK0NBQXVEOztJQUV2RCw4Q0FBcUQ7Ozs7O0lBRXJELHVDQUF1Qzs7SUFDdkMsc0NBQW1COztJQUNuQiwwQ0FBMkI7O0lBQzNCLDBDQUFxQjs7SUFFckIsMkNBQTZCOztJQUM3QiwwQ0FBb0I7O0lBRXBCLDRDQUF1Qjs7SUFDdkIsbUNBQXdCOzs7OztJQUl0QiwyQ0FBbUM7Ozs7O0lBQ25DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3Qyw4Q0FBeUM7Ozs7O0lBQ3pDLDBDQUFpQzs7Ozs7SUFDakMsOENBQXlDOzs7OztJQUN6QyxpREFBK0M7Ozs7O0lBQy9DLGtEQUFpRDs7Ozs7SUFDakQsaURBQStDOzs7OztJQUMvQyw4Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBDb21tb25Nb2RhbHMsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLFxyXG4gIEZpbGVNb2RlbCwgRm9ybWF0dGluZyxcclxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIE5hdmlnYXRlU2VydmljZSwgUGFnZVByZWxvYWRTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2UsXHJcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gIFV0aWxzLFxyXG4gIFdpbmRvd1NlcnZpY2UsXHJcbiAgWm9vbVNlcnZpY2UsXHJcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tTZXJ2aWNlXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudERlc2NyaXB0aW9uLCBEb2N1bWVudERlc2NyaXB0aW9uUmVzcG9uc2UsIFBhcnNlUmVzdWx0LCBTb3VyY2VGaWxlLCBUZW1wbGF0ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVGaWVsZFR5cGVzLCBUZW1wbGF0ZUlkIH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcclxuaW1wb3J0IHsgUGFyc2VyU2VydmljZSB9IGZyb20gJy4vcGFyc2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJzZXJDb25maWcgfSBmcm9tICcuL3BhcnNlci1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTb3VyY2VGaWxlU2VydmljZSB9IGZyb20gJy4vc291cmNlLWZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGxhY2Vob2xkZXJTZXJ2aWNlIH0gZnJvbSAnLi9wbGFjZWhvbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL3V0aWwnO1xyXG5pbXBvcnQgeyBEb2N1bWVudFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9kb2N1bWVudC1wYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1hcHAtcGFyc2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFyc2VyLWFwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFyc2VyLWFwcC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXJBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNvdXJjZUZpbGU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBDUkVBVEVfRklFTERfTU9ERSA9IFwiY3JlYXRlRmllbGRNb2RlXCI7XHJcblxyXG4gIHJlYWRvbmx5IGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XHJcblxyXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudERlc2NyaXB0aW9uO1xyXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZTtcclxuICBwYXJzZXJDb25maWc6IFBhcnNlckNvbmZpZztcclxuICBmaWxlUGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgZG9jdW1lbnRFcnJvcjogc3RyaW5nID0gbnVsbDtcclxuICBpc0FwaUF2YWlibGUgPSB0cnVlO1xyXG5cclxuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xyXG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgIHByaXZhdGUgX3BhcnNlclNlcnZpY2U6IFBhcnNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9zb3VyY2VGaWxlU2VydmljZTogU291cmNlRmlsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJTZXJ2aWNlOiBQbGFjZWhvbGRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9kb2N1bWVudFBhZ2VTZXJ2aWNlOiBEb2N1bWVudFBhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcclxuICAgIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcclxuXHJcbiAgICB3aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLnJlZnJlc2hab29tKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlQ2hhbmdlZC5zdWJzY3JpYmUoc291cmNlRmlsZSA9PiB0aGlzLmxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGUpKVxyXG5cclxuICAgIHRoaXMuX3VwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xyXG4gICAgICBpZiAodXBsb2FkcyAmJiB1cGxvYWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oMCksICcnLCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3Bhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTWVudVxyXG5cclxuICB6b29tSW4oKSB7XHJcbiAgICBjb25zdCB6b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbTtcclxuXHJcbiAgICBpZiAoem9vbSA8IDQ5MCkge1xyXG4gICAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHpvb20gKyAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB6b29tT3V0KCkge1xyXG4gICAgY29uc3Qgem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb207XHJcbiAgICBpZiAoem9vbSA+IDMwKSB7XHJcbiAgICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20oem9vbSAtIDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEZpZWxkQ2xpY2soKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGU7XHJcbiAgICBpZiAoIXRlbXBsYXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWVsZCA9IHRlbXBsYXRlLmNyZWF0ZUZpZWxkKFwiRmllbGRcIik7XHJcbiAgICBmaWVsZC5maWVsZFR5cGUgPSBUZW1wbGF0ZUZpZWxkVHlwZXMuRklYRUQ7XHJcbiAgICBmaWVsZC5wYWdlTnVtYmVyID0gdGhpcy5fZG9jdW1lbnRQYWdlU2VydmljZS5hY3RpdmVQYWdlO1xyXG4gICAgdGVtcGxhdGUuYWRkRmllbGQoZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFibGVDbGljaygpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZTtcclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpZWxkID0gdGVtcGxhdGUuY3JlYXRlRmllbGQoXCJUYWJsZVwiKTtcclxuICAgIGZpZWxkLmZpZWxkVHlwZSA9IFRlbXBsYXRlRmllbGRUeXBlcy5UQUJMRTtcclxuICAgIGZpZWxkLnBhZ2VOdW1iZXIgPSB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2U7XHJcbiAgICB0ZW1wbGF0ZS5hZGRGaWVsZChmaWVsZCk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmQgb2YgTWVudVxyXG5cclxuICBpc0ZpbGVMb2FkZWQoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuZG9jdW1lbnRFcnJvciAmJiB0aGlzLmRvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcsIGZpbGVTaG91bGRCZUxvYWRlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKGZpbGVTaG91bGRCZUxvYWRlZCAmJiAhdGhpcy5pc0ZpbGVMb2FkZWQoKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGUgPSBuZXcgU291cmNlRmlsZSgkZXZlbnQsIHBhc3N3b3JkKTtcclxuXHJcbiAgICBpZiAobW9kYWxJZCkge1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhcnNlckNvbmZpZyA/IHRoaXMucGFyc2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhcnNlckNvbmZpZyA/IHRoaXMucGFyc2VyQ29uZmlnLnVwbG9hZCA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29uZmlnID8gdGhpcy5wYXJzZXJDb25maWcuYnJvd3NlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCByZXR1cm5VcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJldHVyblVybFwiKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgcmVsb2FkQ3VycmVudFBhZ2UoKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGU6IFNvdXJjZUZpbGUpIHtcclxuICAgIHRoaXMuaXNBcGlBdmFpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZG9jdW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICB0aGlzLl9kb2N1bWVudCA9IG51bGw7XHJcblxyXG4gICAgY29uc3Qgb3BlcmF0aW9uU3RhdGUgPSB0aGlzLl9wbGFjZWhvbGRlclNlcnZpY2Uuc3RhcnRPcGVyYXRpb24oXCJMb2FkaW5nIGRvY3VtZW50Li4uXCIpO1xyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0ge1xyXG4gICAgICBuZXh0OiAocmVzcG9uc2U6IERvY3VtZW50RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLnNldEFjdGl2ZVBhZ2UoMSk7XHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgb3BlcmF0aW9uU3RhdGUuY29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmNyZWF0ZVRlbXBsYXRlKCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IHRoaXMuZG9jdW1lbnQucGFnZXMgPyB0aGlzLmRvY3VtZW50LnBhZ2VzLmxlbmd0aCA6IDA7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnRFcnJvciA9IHRoaXMuX3BhcnNlclNlcnZpY2UuZ2V0RXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgb3BlcmF0aW9uU3RhdGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGU6ICgpID0+IG9wZXJhdGlvblN0YXRlLmNvbXBsZXRlKClcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcGFyc2VyU2VydmljZS5sb2FkRG9jdW1lbnREZXNjcmlwdGlvbihzb3VyY2VGaWxlKS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvY3VtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcclxuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5nZXRGaXRUb1dpZHRoKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaXRUb1dpZHRoKCkge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50KSB7XHJcbiAgICAgIHJldHVybiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VyZmFjZVdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXHJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLmRvY3VtZW50LnBhZ2VzWzBdLndpZHRoKTtcclxuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSB0aGlzLnB0VG9QeCh0aGlzLmRvY3VtZW50LnBhZ2VzWzBdLmhlaWdodCk7XHJcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHN1cmZhY2VXaWR0aDtcclxuXHJcbiAgICByZXR1cm4gKHBhZ2VIZWlnaHQgPiBwYWdlV2lkdGggJiYgTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAvIHN1cmZhY2VXaWR0aCkgPCAyKVxyXG4gICAgICA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyBzdXJmYWNlV2lkdGgpXHJcbiAgICAgIDogTWF0aC5yb3VuZChzdXJmYWNlV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XHJcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxyXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcclxuICB9XHJcbn0iXX0=