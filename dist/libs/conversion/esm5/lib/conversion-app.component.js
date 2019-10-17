/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ConversionConfigService } from "./conversion-config.service";
import { ConversionService } from "./conversion.service";
import { ModalService, CommonModals, UploadFilesService } from "@groupdocs.examples.angular/common-components";
var ConversionAppComponent = /** @class */ (function () {
    function ConversionAppComponent(_modalService, _conversionService, configService, uploadFilesService) {
        var _this = this;
        this._modalService = _modalService;
        this._conversionService = _conversionService;
        this.title = 'conversion';
        this.files = [];
        this.conversionItems = [];
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.leftBarOpen = false;
        configService.updatedConfig.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.conversionConfig = config;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        function (uploads) {
            if (uploads) {
                /** @type {?} */
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._conversionService.upload(uploads.item(i), '', _this.conversionConfig.rewrite).subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.selectDir('');
                    }));
                }
            }
        }));
        _conversionService.selectedItems.subscribe((/**
         * @param {?} selectedFormats
         * @return {?}
         */
        function (selectedFormats) {
            selectedFormats.forEach((/**
             * @param {?} selectedFormat
             * @return {?}
             */
            function (selectedFormat) {
                if (Object.keys(selectedFormat).length > 0 && !_this.itemAlreadyAdded(selectedFormat)) {
                    _this.conversionItems.push((/** @type {?} */ (selectedFormat)));
                }
            }));
        }));
        _conversionService.itemToConvert.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item)
                _this.convertSingleItem(item);
        }));
        _conversionService.itemToRemove.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item)
                _this.removeItemFromQueue(item);
        }));
    }
    Object.defineProperty(ConversionAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.conversionConfig ? this.conversionConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversionAppComponent.prototype, "browseConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.conversionConfig ? this.conversionConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversionAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.conversionConfig ? this.conversionConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    ConversionAppComponent.prototype.fileDropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this._modalService.open(CommonModals.BrowseFiles);
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ConversionAppComponent.prototype.openModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._modalService.open(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ConversionAppComponent.prototype.closeModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._modalService.close(id);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ConversionAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._conversionService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
    ConversionAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._conversionService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.files = files || []; }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ConversionAppComponent.prototype.convertSingleItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var workItem = this.conversionItems.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.guid === item.guid; }));
        workItem.converting = true;
        this._conversionService.convert(item).subscribe((/**
         * @return {?}
         */
        function () {
            workItem.converting = false;
            workItem.converted = true;
        }), ((/**
         * @return {?}
         */
        function () {
            // TODO: add error handling?
            workItem.converting = false;
        })));
    };
    /**
     * @return {?}
     */
    ConversionAppComponent.prototype.convertAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.conversionItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.convertSingleItem(item);
        }));
    };
    /**
     * @return {?}
     */
    ConversionAppComponent.prototype.convertAllUnavailable = /**
     * @return {?}
     */
    function () {
        return this.conversionItems.length === 0 || this.conversionItems.filter((/**
         * @param {?} ci
         * @return {?}
         */
        function (ci) { return ci.converted !== true; })).length === 0;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ConversionAppComponent.prototype.removeItemFromQueue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (this.conversionItems.length > 0) {
            this.conversionItems.forEach((/**
             * @param {?} ci
             * @param {?} index
             * @return {?}
             */
            function (ci, index) {
                if (ci.guid === item.guid && ci.destinationType === item.destinationType)
                    _this.conversionItems.splice(index, 1);
            }));
        }
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    ConversionAppComponent.prototype.selectAllItems = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (!f.isDirectory && !f.directory)
                f.selected = checked;
        }));
    };
    /**
     * @param {?} selectedFormat
     * @return {?}
     */
    ConversionAppComponent.prototype.itemAlreadyAdded = /**
     * @param {?} selectedFormat
     * @return {?}
     */
    function (selectedFormat) {
        return this.conversionItems.filter((/**
         * @param {?} ci
         * @return {?}
         */
        function (ci) { return ci.destinationType === selectedFormat.destinationType
            && ci.guid === selectedFormat.guid; })).length === 1;
    };
    /**
     * @return {?}
     */
    ConversionAppComponent.prototype.isLeftBarOpen = /**
     * @return {?}
     */
    function () {
        return this.isDesktop ? true : this.leftBarOpen;
    };
    ConversionAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-conversion',
                    template: "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'exchange-alt'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-init-state [icon]=\"'exchange-alt'\" [text]=\"'Drop file here to upload'\" *ngIf=\"conversionItems.length == 0\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ConversionAppComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ConversionService },
        { type: ConversionConfigService },
        { type: UploadFilesService }
    ]; };
    return ConversionAppComponent;
}());
export { ConversionAppComponent };
if (false) {
    /** @type {?} */
    ConversionAppComponent.prototype.title;
    /** @type {?} */
    ConversionAppComponent.prototype.files;
    /** @type {?} */
    ConversionAppComponent.prototype.conversionItems;
    /** @type {?} */
    ConversionAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    ConversionAppComponent.prototype.isDesktop;
    /** @type {?} */
    ConversionAppComponent.prototype.leftBarOpen;
    /** @type {?} */
    ConversionAppComponent.prototype.conversionConfig;
    /** @type {?} */
    ConversionAppComponent.prototype.result;
    /**
     * @type {?}
     * @private
     */
    ConversionAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ConversionAppComponent.prototype._conversionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUl2RDtJQWVFLGdDQUFvQixhQUEyQixFQUMzQixrQkFBcUMsRUFDN0MsYUFBc0MsRUFDdEMsa0JBQXNDO1FBSGxELGlCQW1DQztRQW5DbUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVZ6RCxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBU2xCLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTTtZQUMzQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU87WUFDakQsSUFBSSxPQUFPLEVBQUU7O29CQUNQLENBQUMsU0FBUTtnQkFDYixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9B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QVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2xELENBQUM7O2dCQW5JRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHd6Q0FBOEM7O2lCQUUvQzs7OztnQkFYUSxZQUFZO2dCQURiLGlCQUFpQjtnQkFEakIsdUJBQXVCO2dCQUk3QixrQkFBa0I7O0lBeUlwQiw2QkFBQztDQUFBLEFBcElELElBb0lDO1NBL0hZLHNCQUFzQjs7O0lBQ2pDLHVDQUFxQjs7SUFDckIsdUNBQWdDOztJQUNoQyxpREFBNEM7O0lBQzVDLGtEQUE0Qzs7SUFDNUMsMkNBQW1COztJQUNuQiw2Q0FBb0I7O0lBQ3BCLGtEQUFtQzs7SUFDbkMsd0NBQVk7Ozs7O0lBRUEsK0NBQW1DOzs7OztJQUNuQyxvREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnZlcnNpb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb252ZXJzaW9uLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnZlcnNpb25TZXJ2aWNlfSBmcm9tIFwiLi9jb252ZXJzaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1vZGFsU2VydmljZSxcbiAgQ29tbW9uTW9kYWxzLFxuICBVcGxvYWRGaWxlc1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtDb252ZXJzaW9uQ29uZmlnfSBmcm9tIFwiLi9jb252ZXJzaW9uLWNvbmZpZ1wiO1xuaW1wb3J0IHtDb252ZXJzaW9uSXRlbU1vZGVsLCBFeHRlbmRlZEZpbGVNb2RlbH0gZnJvbSBcIi4vbW9kZWxzXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29udmVyc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbkFwcENvbXBvbmVudCB7XG4gIHRpdGxlID0gJ2NvbnZlcnNpb24nO1xuICBmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSA9IFtdO1xuICBjb252ZXJzaW9uSXRlbXM6IENvbnZlcnNpb25JdGVtTW9kZWxbXSA9IFtdO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGxlZnRCYXJPcGVuID0gZmFsc2U7XG4gIGNvbnZlcnNpb25Db25maWc6IENvbnZlcnNpb25Db25maWc7XG4gIHJlc3VsdDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb252ZXJzaW9uU2VydmljZTogQ29udmVyc2lvblNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IENvbnZlcnNpb25Db25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSkge1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmNvbnZlcnNpb25Db25maWcgPSBjb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMuY29udmVyc2lvbkNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfY29udmVyc2lvblNlcnZpY2Uuc2VsZWN0ZWRJdGVtcy5zdWJzY3JpYmUoKHNlbGVjdGVkRm9ybWF0cykgPT4ge1xuICAgICAgc2VsZWN0ZWRGb3JtYXRzLmZvckVhY2goKHNlbGVjdGVkRm9ybWF0KSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxlY3RlZEZvcm1hdCkubGVuZ3RoID4gMCAmJiAhdGhpcy5pdGVtQWxyZWFkeUFkZGVkKHNlbGVjdGVkRm9ybWF0KSkge1xuICAgICAgICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLnB1c2goc2VsZWN0ZWRGb3JtYXQgYXMgQ29udmVyc2lvbkl0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLml0ZW1Ub0NvbnZlcnQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0pIHRoaXMuY29udmVydFNpbmdsZUl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICBfY29udmVyc2lvblNlcnZpY2UuaXRlbVRvUmVtb3ZlLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0pIHRoaXMucmVtb3ZlSXRlbUZyb21RdWV1ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkNvbmZpZyA/IHRoaXMuY29udmVyc2lvbkNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgY29udmVydFNpbmdsZUl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IHdvcmtJdGVtID0gdGhpcy5jb252ZXJzaW9uSXRlbXMuZmluZCh4ID0+IHguZ3VpZCA9PT0gaXRlbS5ndWlkKTtcbiAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5jb252ZXJ0KGl0ZW0pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gZmFsc2U7XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0ZWQgPSB0cnVlO1xuICAgIH0sICgoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBhZGQgZXJyb3IgaGFuZGxpbmc/XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gZmFsc2U7XG4gICAgfSkpO1xuICB9XG5cbiAgY29udmVydEFsbCgpe1xuICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLmNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjb252ZXJ0QWxsVW5hdmFpbGFibGUoKXtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uSXRlbXMubGVuZ3RoID09PSAwIHx8IHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbHRlcihjaSA9PiBjaS5jb252ZXJ0ZWQgIT09IHRydWUpLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIHJlbW92ZUl0ZW1Gcm9tUXVldWUoaXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnZlcnNpb25JdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvbnZlcnNpb25JdGVtcy5mb3JFYWNoKCAoY2ksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKGNpLmd1aWQgPT09IGl0ZW0uZ3VpZCAmJiBjaS5kZXN0aW5hdGlvblR5cGUgPT09IGl0ZW0uZGVzdGluYXRpb25UeXBlKSB0aGlzLmNvbnZlcnNpb25JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsSXRlbXMoY2hlY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCggKGYpID0+IHtcbiAgICAgIGlmICghZi5pc0RpcmVjdG9yeSAmJiAhZi5kaXJlY3RvcnkpIGYuc2VsZWN0ZWQgPSBjaGVja2VkO1xuICAgIH0pO1xuICB9XG5cbiAgaXRlbUFscmVhZHlBZGRlZChzZWxlY3RlZEZvcm1hdDogQ29udmVyc2lvbkl0ZW1Nb2RlbCkgOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uSXRlbXMuZmlsdGVyKGNpID0+IGNpLmRlc3RpbmF0aW9uVHlwZSA9PT0gc2VsZWN0ZWRGb3JtYXQuZGVzdGluYXRpb25UeXBlIFxuICAgICAgJiYgY2kuZ3VpZCA9PT0gc2VsZWN0ZWRGb3JtYXQuZ3VpZCkubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgaXNMZWZ0QmFyT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rlc2t0b3AgPyB0cnVlIDogdGhpcy5sZWZ0QmFyT3BlbjtcbiAgfVxufVxuIl19