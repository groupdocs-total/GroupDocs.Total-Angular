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
                    template: "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'exchange-alt'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-dnd-init-state [icon]=\"'exchange-alt'\" *ngIf=\"conversionItems.length == 0\"></gd-dnd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUl2RDtJQWVFLGdDQUFvQixhQUEyQixFQUMzQixrQkFBcUMsRUFDN0MsYUFBc0MsRUFDdEMsa0JBQXNDO1FBSGxELGlCQW1DQztRQW5DbUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVZ6RCxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBU2xCLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTTtZQUMzQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU87WUFDakQsSUFBSSxPQUFPLEVBQUU7O29CQUNQLENBQUMsU0FBUTtnQkFDYixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9B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Ozs7O2dCQVhRLFlBQVk7Z0JBRGIsaUJBQWlCO2dCQURqQix1QkFBdUI7Z0JBSTdCLGtCQUFrQjs7SUFtSXBCLDZCQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0F6SFksc0JBQXNCOzs7SUFDakMsdUNBQXFCOztJQUNyQix1Q0FBZ0M7O0lBQ2hDLGlEQUE0Qzs7SUFDNUMsa0RBQTRDOztJQUM1QywyQ0FBbUI7O0lBQ25CLDZDQUFvQjs7SUFDcEIsa0RBQW1DOztJQUNuQyx3Q0FBWTs7Ozs7SUFFQSwrQ0FBbUM7Ozs7O0lBQ25DLG9EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udmVyc2lvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udmVyc2lvblNlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIFVwbG9hZEZpbGVzU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0NvbnZlcnNpb25Db25maWd9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnXCI7XG5pbXBvcnQge0NvbnZlcnNpb25JdGVtTW9kZWwsIEV4dGVuZGVkRmlsZU1vZGVsfSBmcm9tIFwiLi9tb2RlbHNcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb252ZXJzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNpb24tYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnY29udmVyc2lvbic7XG4gIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdID0gW107XG4gIGNvbnZlcnNpb25JdGVtczogQ29udmVyc2lvbkl0ZW1Nb2RlbFtdID0gW107XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgbGVmdEJhck9wZW4gPSBmYWxzZTtcbiAgY29udmVyc2lvbkNvbmZpZzogQ29udmVyc2lvbkNvbmZpZztcbiAgcmVzdWx0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvbnZlcnNpb25TZXJ2aWNlOiBDb252ZXJzaW9uU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG5cbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMuY29udmVyc2lvbkNvbmZpZyA9IGNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5jb252ZXJzaW9uQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RlZEl0ZW1zLnN1YnNjcmliZSgoc2VsZWN0ZWRGb3JtYXRzKSA9PiB7XG4gICAgICBzZWxlY3RlZEZvcm1hdHMuZm9yRWFjaCgoc2VsZWN0ZWRGb3JtYXQpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlbGVjdGVkRm9ybWF0KS5sZW5ndGggPiAwICYmICF0aGlzLml0ZW1BbHJlYWR5QWRkZWQoc2VsZWN0ZWRGb3JtYXQpKSB7XG4gICAgICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMucHVzaChzZWxlY3RlZEZvcm1hdCBhcyBDb252ZXJzaW9uSXRlbU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfY29udmVyc2lvblNlcnZpY2UuaXRlbVRvQ29udmVydC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbSkgdGhpcy5jb252ZXJ0U2luZ2xlSXRlbShpdGVtKTtcbiAgICB9KTtcblxuICAgIF9jb252ZXJzaW9uU2VydmljZS5pdGVtVG9SZW1vdmUuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbSkgdGhpcy5yZW1vdmVJdGVtRnJvbVF1ZXVlKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkNvbmZpZyA/IHRoaXMuY29udmVyc2lvbkNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkNvbmZpZyA/IHRoaXMuY29udmVyc2lvbkNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uQ29uZmlnID8gdGhpcy5jb252ZXJzaW9uQ29uZmlnLnVwbG9hZCA6IHRydWU7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgY29udmVydFNpbmdsZUl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IHdvcmtJdGVtID0gdGhpcy5jb252ZXJzaW9uSXRlbXMuZmluZCh4ID0+IHguZ3VpZCA9PT0gaXRlbS5ndWlkKTtcbiAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5jb252ZXJ0KGl0ZW0pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gZmFsc2U7XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0ZWQgPSB0cnVlO1xuICAgIH0sICgoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBhZGQgZXJyb3IgaGFuZGxpbmc/XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gZmFsc2U7XG4gICAgfSkpO1xuICB9XG5cbiAgY29udmVydEFsbCgpe1xuICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLmNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjb252ZXJ0QWxsVW5hdmFpbGFibGUoKXtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uSXRlbXMubGVuZ3RoID09PSAwIHx8IHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbHRlcihjaSA9PiBjaS5jb252ZXJ0ZWQgIT09IHRydWUpLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIHJlbW92ZUl0ZW1Gcm9tUXVldWUoaXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnZlcnNpb25JdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvbnZlcnNpb25JdGVtcy5mb3JFYWNoKCAoY2ksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKGNpLmd1aWQgPT09IGl0ZW0uZ3VpZCAmJiBjaS5kZXN0aW5hdGlvblR5cGUgPT09IGl0ZW0uZGVzdGluYXRpb25UeXBlKSB0aGlzLmNvbnZlcnNpb25JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsSXRlbXMoY2hlY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCggKGYpID0+IHtcbiAgICAgIGlmICghZi5pc0RpcmVjdG9yeSAmJiAhZi5kaXJlY3RvcnkpIGYuc2VsZWN0ZWQgPSBjaGVja2VkO1xuICAgIH0pO1xuICB9XG5cbiAgaXRlbUFscmVhZHlBZGRlZChzZWxlY3RlZEZvcm1hdDogQ29udmVyc2lvbkl0ZW1Nb2RlbCkgOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uSXRlbXMuZmlsdGVyKGNpID0+IGNpLmRlc3RpbmF0aW9uVHlwZSA9PT0gc2VsZWN0ZWRGb3JtYXQuZGVzdGluYXRpb25UeXBlIFxuICAgICAgJiYgY2kuZ3VpZCA9PT0gc2VsZWN0ZWRGb3JtYXQuZ3VpZCkubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgaXNMZWZ0QmFyT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rlc2t0b3AgPyB0cnVlIDogdGhpcy5sZWZ0QmFyT3BlbjtcbiAgfVxufVxuIl19