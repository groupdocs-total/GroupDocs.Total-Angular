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
var ParserAppComponent = /** @class */ (function () {
    function ParserAppComponent(_modalService, parserService, sourceFileService, templateService, _zoomService, _navigateService, placeholderService, documentPageService, _uploadFilesService, _passwordService, windowService) {
        var _this = this;
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
        function (w) {
            _this.refreshZoom();
        }));
        this.sourceFileService.sourceFileChanged.subscribe((/**
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
                _this.parserService.upload(uploads.item(0), '', _this.rewriteConfig).subscribe((/**
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
            _this.selectFile(_this.sourceFileService.sourceFile.guid, pass, CommonModals.PasswordRequired);
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
        var template = this.templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        var field = template.createField("Field");
        field.fieldType = TemplateFieldTypes.FIXED;
        field.pageNumber = this.documentPageService.activePage;
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
        var template = this.templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        var field = template.createField("Table");
        field.fieldType = TemplateFieldTypes.TABLE;
        field.pageNumber = this.documentPageService.activePage;
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
        this.parserService.loadFiles($event).subscribe((/**
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
        this.parserService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
        this.credentials = new FileCredentials($event, password);
        this.sourceFileService.sourceFile = new SourceFile($event, password);
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
        var operationState = this.placeholderService.startOperation("Loading document...");
        /** @type {?} */
        var observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.documentPageService.setActivePage(1);
                _this._document = response;
                operationState.complete();
                _this.templateService.createTemplate();
                _this.refreshZoom();
                _this._navigateService.countPages = _this.document.pages ? _this.document.pages.length : 0;
                _this._navigateService.currentPage = 1;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.documentError = _this.parserService.getErrorMessage(err);
                operationState.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            function () { return operationState.complete(); })
        };
        this.parserService.loadDocumentDescription(sourceFile).subscribe(observer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBRUwsWUFBWSxFQUNaLGVBQWUsRUFHZixZQUFZLEVBQ1osZUFBZSxFQUFzQixlQUFlLEVBQzVCLGtCQUFrQixFQUUxQyxhQUFhLEVBQ2IsV0FBVyxFQUdaLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFpRSxVQUFVLEVBQTJCLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ2xLLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7SUE2QkUsNEJBQ1UsYUFBMkIsRUFDbkMsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLGVBQWdDLEVBQ3hCLFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUN6QyxrQkFBc0MsRUFDdEMsbUJBQXdDLEVBQ2hDLG1CQUF1QyxFQUN2QyxnQkFBaUMsRUFDekMsYUFBNEI7UUFYOUIsaUJBb0NDO1FBbkNTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSTNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFHakMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBL0IxQixzQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUU5QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBT3JELGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXBCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBcUJ0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUUvQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUFBO1FBRTFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsT0FBTztZQUN2RCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxHQUFvQjtvQkFDaEcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ3RELEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9GLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87Ozs7O0lBRVAsbUNBQU07Ozs7O0lBQU47O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUVuQyxJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDbkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OztJQUVELDBDQUFhOzs7SUFBYjs7WUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlO1FBQ3JELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPO1NBQ1I7O1lBRUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztRQUN2RCxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7O1lBQ1EsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZTtRQUNyRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTztTQUNSOztZQUVLLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUMzQyxLQUFLLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUMzQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7UUFDdkQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYzs7Ozs7SUFFZCx5Q0FBWTs7Ozs7SUFBWjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQsc0NBQVM7Ozs7O0lBQVQsVUFBVSxFQUFVLEVBQUUsa0JBQTJCO1FBQy9DLElBQUksa0JBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQUUsT0FBTztRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQUVDO1FBREMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO0lBQ25HLENBQUM7Ozs7O0lBRUQsbUNBQU07Ozs7SUFBTixVQUFPLE1BQWM7UUFBckIsaUJBSUM7UUFIQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUNwRSxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7Ozs7O0lBRUQsdUNBQVU7Ozs7OztJQUFWLFVBQVcsTUFBYyxFQUFFLFFBQWdCLEVBQUUsT0FBZTtRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVyRSxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELHNCQUFJLDZDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsOENBQWlCOzs7SUFBakI7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLG9EQUF1Qjs7Ozs7SUFBL0IsVUFBZ0MsVUFBc0I7UUFBdEQsaUJBNEJDO1FBM0JDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztZQUVoQixjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQzs7WUFFOUUsUUFBUSxHQUFHO1lBQ2YsSUFBSTs7OztZQUFFLFVBQUMsUUFBNkI7Z0JBQ2xDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUUxQixjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRTFCLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFbkIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQTtZQUNELEtBQUs7Ozs7WUFBRSxVQUFDLEdBQVE7Z0JBQ2QsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0QsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUE7WUFDRCxRQUFROzs7WUFBRSxjQUFNLE9BQUEsY0FBYyxDQUFDLFFBQVEsRUFBRSxFQUF6QixDQUF5QixDQUFBO1NBQzFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHNCQUFJLHdDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7O0lBRU8sd0NBQVc7Ozs7SUFBbkI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVPLDBDQUFhOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxHQUFHLENBQUM7U0FDWjs7WUFFSyxZQUFZLEdBQUcsTUFBTSxDQUFDLFVBQVU7OztZQUdoQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O1lBQ3JELFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFDdkQsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZO1FBRXhELE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzRSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFTyxtQ0FBTTs7Ozs7SUFBZCxVQUFlLEVBQVU7UUFDdkIsb0JBQW9CO1FBQ3BCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBL05GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIseWxFQUEwQzs7aUJBRTNDOzs7O2dCQXZCQyxZQUFZO2dCQVVMLGFBQWE7Z0JBR2IsaUJBQWlCO2dCQURqQixlQUFlO2dCQVB0QixXQUFXO2dCQUpYLGVBQWU7Z0JBY1Isa0JBQWtCO2dCQUVsQixtQkFBbUI7Z0JBZkYsa0JBQWtCO2dCQURMLGVBQWU7Z0JBR3BELGFBQWE7Ozs2QkFxQlosS0FBSzs7SUEwTlIseUJBQUM7Q0FBQSxBQWhPRCxJQWdPQztTQTNOWSxrQkFBa0I7OztJQUM3Qix3Q0FBNEI7Ozs7O0lBRTVCLCtDQUF1RDs7SUFFdkQsOENBQXFEOzs7OztJQUVyRCx1Q0FBdUM7O0lBQ3ZDLHNDQUFtQjs7SUFDbkIsMENBQTJCOztJQUMzQiwwQ0FBcUI7O0lBRXJCLDJDQUE2Qjs7SUFDN0IsMENBQW9COztJQUVwQiw0Q0FBdUI7O0lBQ3ZCLG1DQUF3Qjs7SUFDeEIsMkNBQTZCOztJQUM3QiwrQ0FBcUM7O0lBQ3JDLDZDQUFpQzs7SUFDakMsZ0RBQXVDOztJQUN2QyxpREFBeUM7O0lBQ3pDLHlDQUFvQzs7Ozs7SUFHbEMsMkNBQW1DOzs7OztJQUluQywwQ0FBaUM7Ozs7O0lBQ2pDLDhDQUF5Qzs7Ozs7SUFHekMsaURBQStDOzs7OztJQUMvQyw4Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIE1vZGFsU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBVdGlscyxcbiAgV2luZG93U2VydmljZSxcbiAgWm9vbVNlcnZpY2UsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRG9jdW1lbnREZXNjcmlwdGlvbiwgRG9jdW1lbnREZXNjcmlwdGlvblJlc3BvbnNlLCBQYXJzZVJlc3VsdCwgU291cmNlRmlsZSwgVGVtcGxhdGUsIFRlbXBsYXRlRmllbGQsIFRlbXBsYXRlRmllbGRUeXBlcywgVGVtcGxhdGVJZCB9IGZyb20gJy4vYXBwLW1vZGVscyc7XG5pbXBvcnQgeyBQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi9wYXJzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJzZXJDb25maWcgfSBmcm9tICcuL3BhcnNlci1jb25maWcnO1xuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZUZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zb3VyY2UtZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBsYWNlaG9sZGVyU2VydmljZSB9IGZyb20gJy4vcGxhY2Vob2xkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvdXRpbCc7XG5pbXBvcnQgeyBEb2N1bWVudFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9kb2N1bWVudC1wYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hcHAtcGFyc2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcnNlci1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJzZXItYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFyc2VyQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc291cmNlRmlsZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgQ1JFQVRFX0ZJRUxEX01PREUgPSBcImNyZWF0ZUZpZWxkTW9kZVwiO1xuXG4gIHJlYWRvbmx5IGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG5cbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50RGVzY3JpcHRpb247XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZTtcbiAgcGFyc2VyQ29uZmlnOiBQYXJzZXJDb25maWc7XG4gIGZpbGVQYXNzd29yZDogc3RyaW5nO1xuXG4gIGRvY3VtZW50RXJyb3I6IHN0cmluZyA9IG51bGw7XG4gIGlzQXBpQXZhaWJsZSA9IHRydWU7XG5cbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG4gIHBhcnNlclNlcnZpY2U6IFBhcnNlclNlcnZpY2U7XG4gIHNvdXJjZUZpbGVTZXJ2aWNlOiBTb3VyY2VGaWxlU2VydmljZTtcbiAgdGVtcGxhdGVTZXJ2aWNlOiBUZW1wbGF0ZVNlcnZpY2U7XG4gIHBsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlO1xuICBkb2N1bWVudFBhZ2VTZXJ2aWNlOiBEb2N1bWVudFBhZ2VTZXJ2aWNlO1xuICBwdWJsaWMgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwYXJzZXJTZXJ2aWNlOiBQYXJzZXJTZXJ2aWNlLFxuICAgIHNvdXJjZUZpbGVTZXJ2aWNlOiBTb3VyY2VGaWxlU2VydmljZSxcbiAgICB0ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgcGxhY2Vob2xkZXJTZXJ2aWNlOiBQbGFjZWhvbGRlclNlcnZpY2UsXG4gICAgZG9jdW1lbnRQYWdlU2VydmljZTogRG9jdW1lbnRQYWdlU2VydmljZSxcbiAgICBwcml2YXRlIF91cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICBwcml2YXRlIF9wYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLnBhcnNlclNlcnZpY2UgPSBwYXJzZXJTZXJ2aWNlO1xuICAgIHRoaXMuc291cmNlRmlsZVNlcnZpY2UgPSBzb3VyY2VGaWxlU2VydmljZTtcbiAgICB0aGlzLnRlbXBsYXRlU2VydmljZSA9IHRlbXBsYXRlU2VydmljZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyU2VydmljZSA9IHBsYWNlaG9sZGVyU2VydmljZTtcbiAgICB0aGlzLmRvY3VtZW50UGFnZVNlcnZpY2UgPSBkb2N1bWVudFBhZ2VTZXJ2aWNlO1xuXG4gICAgd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZUNoYW5nZWQuc3Vic2NyaWJlKHNvdXJjZUZpbGUgPT4gdGhpcy5sb2FkRG9jdW1lbnREZXNjcmlwdGlvbihzb3VyY2VGaWxlKSlcblxuICAgIHRoaXMuX3VwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMgJiYgdXBsb2Fkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucGFyc2VyU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKDApLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlV2FzRHJvcHBlZCA/IHRoaXMuc2VsZWN0RmlsZShvYmouZ3VpZCwgJycsICcnKSA6IHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9wYXNzd29yZFNlcnZpY2UucGFzc0NoYW5nZS5zdWJzY3JpYmUoKHBhc3M6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZS5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBNZW51XG5cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHpvb20gPSB0aGlzLl96b29tU2VydmljZS56b29tO1xuXG4gICAgaWYgKHpvb20gPCA0OTApIHtcbiAgICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20oem9vbSArIDEwKTtcbiAgICB9XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHpvb20gPSB0aGlzLl96b29tU2VydmljZS56b29tO1xuICAgIGlmICh6b29tID4gMzApIHtcbiAgICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20oem9vbSAtIDEwKTtcbiAgICB9XG4gIH1cblxuICBhZGRGaWVsZENsaWNrKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IHRlbXBsYXRlLmNyZWF0ZUZpZWxkKFwiRmllbGRcIik7XG4gICAgZmllbGQuZmllbGRUeXBlID0gVGVtcGxhdGVGaWVsZFR5cGVzLkZJWEVEO1xuICAgIGZpZWxkLnBhZ2VOdW1iZXIgPSB0aGlzLmRvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZTtcbiAgICB0ZW1wbGF0ZS5hZGRGaWVsZChmaWVsZCk7XG4gIH1cblxuICBhZGRUYWJsZUNsaWNrKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IHRlbXBsYXRlLmNyZWF0ZUZpZWxkKFwiVGFibGVcIik7XG4gICAgZmllbGQuZmllbGRUeXBlID0gVGVtcGxhdGVGaWVsZFR5cGVzLlRBQkxFO1xuICAgIGZpZWxkLnBhZ2VOdW1iZXIgPSB0aGlzLmRvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZTtcbiAgICB0ZW1wbGF0ZS5hZGRGaWVsZChmaWVsZCk7XG4gIH1cblxuICAvLyBlbmQgb2YgTWVudVxuXG4gIGlzRmlsZUxvYWRlZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuZG9jdW1lbnRFcnJvciAmJiB0aGlzLmRvY3VtZW50O1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcsIGZpbGVTaG91bGRCZUxvYWRlZDogYm9vbGVhbikge1xuICAgIGlmIChmaWxlU2hvdWxkQmVMb2FkZWQgJiYgIXRoaXMuaXNGaWxlTG9hZGVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhcnNlclNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhcnNlclNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxuXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRmlsZUNyZWRlbnRpYWxzKCRldmVudCwgcGFzc3dvcmQpO1xuICAgIHRoaXMuc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZSA9IG5ldyBTb3VyY2VGaWxlKCRldmVudCwgcGFzc3dvcmQpO1xuXG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb25maWcgPyB0aGlzLnBhcnNlckNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29uZmlnID8gdGhpcy5wYXJzZXJDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29uZmlnID8gdGhpcy5wYXJzZXJDb25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCByZXR1cm5VcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZXR1cm5VcmxcIik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHJlbG9hZEN1cnJlbnRQYWdlKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZERvY3VtZW50RGVzY3JpcHRpb24oc291cmNlRmlsZTogU291cmNlRmlsZSkge1xuICAgIHRoaXMuaXNBcGlBdmFpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmRvY3VtZW50RXJyb3IgPSBudWxsO1xuICAgIHRoaXMuX2RvY3VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG9wZXJhdGlvblN0YXRlID0gdGhpcy5wbGFjZWhvbGRlclNlcnZpY2Uuc3RhcnRPcGVyYXRpb24oXCJMb2FkaW5nIGRvY3VtZW50Li4uXCIpO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSB7XG4gICAgICBuZXh0OiAocmVzcG9uc2U6IERvY3VtZW50RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5kb2N1bWVudFBhZ2VTZXJ2aWNlLnNldEFjdGl2ZVBhZ2UoMSk7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgICAgb3BlcmF0aW9uU3RhdGUuY29tcGxldGUoKTtcblxuICAgICAgICB0aGlzLnRlbXBsYXRlU2VydmljZS5jcmVhdGVUZW1wbGF0ZSgpO1xuICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XG5cbiAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSB0aGlzLmRvY3VtZW50LnBhZ2VzID8gdGhpcy5kb2N1bWVudC5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5kb2N1bWVudEVycm9yID0gdGhpcy5wYXJzZXJTZXJ2aWNlLmdldEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICBvcGVyYXRpb25TdGF0ZS5lcnJvcihlcnIpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBvcGVyYXRpb25TdGF0ZS5jb21wbGV0ZSgpXG4gICAgfTtcblxuICAgIHRoaXMucGFyc2VyU2VydmljZS5sb2FkRG9jdW1lbnREZXNjcmlwdGlvbihzb3VyY2VGaWxlKS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICB9XG5cbiAgZ2V0IGRvY3VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9kb2N1bWVudDtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFpvb20oKSB7XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLmdldEZpdFRvV2lkdGgoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgaWYgKCF0aGlzLmRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gMTAwO1xuICAgIH1cblxuICAgIGNvbnN0IHN1cmZhY2VXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5kb2N1bWVudC5wYWdlc1swXS53aWR0aCk7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IHRoaXMucHRUb1B4KHRoaXMuZG9jdW1lbnQucGFnZXNbMF0uaGVpZ2h0KTtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHN1cmZhY2VXaWR0aDtcblxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gc3VyZmFjZVdpZHRoKSA8IDIpXG4gICAgICA/IDIwMCAtIE1hdGgucm91bmQob2Zmc2V0V2lkdGggKiAxMDAgLyBzdXJmYWNlV2lkdGgpXG4gICAgICA6IE1hdGgucm91bmQoc3VyZmFjZVdpZHRoICogMTAwIC8gb2Zmc2V0V2lkdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xuICAgIC8vcHQgKiA5NiAvIDcyID0gcHguXG4gICAgcmV0dXJuIHB0ICogOTYgLyA3MjtcbiAgfVxufSJdfQ==