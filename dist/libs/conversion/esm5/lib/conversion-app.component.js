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
        this.warningItems = 0;
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
         * @param {?} selectedItems
         * @return {?}
         */
        function (selectedItems) {
            selectedItems.forEach((/**
             * @param {?} selectedItem
             * @return {?}
             */
            function (selectedItem) {
                if (selectedItem.warning)
                    _this.warningItems++;
                if (Object.keys(selectedItem).length > 0 && !_this.itemAlreadyAdded(selectedItem)) {
                    _this.conversionItems.push((/** @type {?} */ (selectedItem)));
                }
            }));
        }));
        _conversionService.selectedFormat.subscribe((/**
         * @param {?} selectedFormat
         * @return {?}
         */
        function (selectedFormat) {
            _this.selectedFormat = selectedFormat;
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
            if (!item.converted && !item.converting) {
                _this.convertSingleItem(item);
            }
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
     * @param {?} selectedItem
     * @return {?}
     */
    ConversionAppComponent.prototype.itemAlreadyAdded = /**
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        return this.conversionItems.filter((/**
         * @param {?} ci
         * @return {?}
         */
        function (ci) { return ci.destinationType === selectedItem.destinationType
            && ci.guid === selectedItem.guid; })).length === 1;
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
                    template: "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'play'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-init-state [icon]=\"'exchange-alt'\" [text]=\"'Drop file here to upload'\" *ngIf=\"conversionItems.length == 0\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-information-modal [warningCount]=\"warningItems\" [formatName]=\"selectedFormat\"></gd-information-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}/deep/ .tools .button{color:#fff!important;flex-flow:column}/deep/ .tools .button.inactive{color:#959da5!important}/deep/ .tools .icon-button{margin:0 0 0 7px!important}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}}"]
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
    /** @type {?} */
    ConversionAppComponent.prototype.selectedFormat;
    /** @type {?} */
    ConversionAppComponent.prototype.warningItems;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUl2RDtJQWlCRSxnQ0FBb0IsYUFBMkIsRUFDM0Isa0JBQXFDLEVBQzdDLGFBQXNDLEVBQ3RDLGtCQUFzQztRQUhsRCxpQkF3Q0M7UUF4Q21CLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFaekQsVUFBSyxHQUFHLFlBQVksQ0FBQztRQUNyQixVQUFLLEdBQXdCLEVBQUUsQ0FBQztRQUNoQyxvQkFBZSxHQUEwQixFQUFFLENBQUM7UUFDNUMscUJBQWdCLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUU1QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUlwQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU9mLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTTtZQUMzQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU87WUFDakQsSUFBSSxPQUFPLEVBQUU7O29CQUNQLENBQUMsU0FBUTtnQkFDYixLQUFLLENBQUMs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QWdCOzs7O0lBQWhCLFVBQWlCLFlBQWlDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsZUFBZSxLQUFLLFlBQVksQ0FBQyxlQUFlO2VBQ3ZGLEVBQUUsQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksRUFETyxDQUNQLEVBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCw4Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNsRCxDQUFDOztnQkE1SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixpNkNBQThDOztpQkFFL0M7Ozs7Z0JBWFEsWUFBWTtnQkFEYixpQkFBaUI7Z0JBRGpCLHVCQUF1QjtnQkFJN0Isa0JBQWtCOztJQWtKcEIsNkJBQUM7Q0FBQSxBQTdJRCxJQTZJQztTQXhJWSxzQkFBc0I7OztJQUNqQyx1Q0FBcUI7O0lBQ3JCLHVDQUFnQzs7SUFDaEMsaURBQTRDOztJQUM1QyxrREFBNEM7O0lBQzVDLDJDQUFtQjs7SUFDbkIsNkNBQW9COztJQUNwQixrREFBbUM7O0lBQ25DLHdDQUFZOztJQUNaLGdEQUF1Qjs7SUFDdkIsOENBQWlCOzs7OztJQUVMLCtDQUFtQzs7Ozs7SUFDbkMsb0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb252ZXJzaW9uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDb252ZXJzaW9uU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UsXG4gIENvbW1vbk1vZGFscyxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Q29udmVyc2lvbkNvbmZpZ30gZnJvbSBcIi4vY29udmVyc2lvbi1jb25maWdcIjtcbmltcG9ydCB7Q29udmVyc2lvbkl0ZW1Nb2RlbCwgRXh0ZW5kZWRGaWxlTW9kZWx9IGZyb20gXCIuL21vZGVsc1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbnZlcnNpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25BcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdjb252ZXJzaW9uJztcbiAgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW10gPSBbXTtcbiAgY29udmVyc2lvbkl0ZW1zOiBDb252ZXJzaW9uSXRlbU1vZGVsW10gPSBbXTtcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBsZWZ0QmFyT3BlbiA9IGZhbHNlO1xuICBjb252ZXJzaW9uQ29uZmlnOiBDb252ZXJzaW9uQ29uZmlnO1xuICByZXN1bHQ6IGFueTtcbiAgc2VsZWN0ZWRGb3JtYXQ6IHN0cmluZztcbiAgd2FybmluZ0l0ZW1zID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29udmVyc2lvblNlcnZpY2U6IENvbnZlcnNpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBDb252ZXJzaW9uQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5jb252ZXJzaW9uQ29uZmlnID0gY29uZmlnO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLmNvbnZlcnNpb25Db25maWcucmV3cml0ZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkSXRlbXMuc3Vic2NyaWJlKChzZWxlY3RlZEl0ZW1zKSA9PiB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goKHNlbGVjdGVkSXRlbSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtLndhcm5pbmcpIHRoaXMud2FybmluZ0l0ZW1zKys7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxlY3RlZEl0ZW0pLmxlbmd0aCA+IDAgJiYgIXRoaXMuaXRlbUFscmVhZHlBZGRlZChzZWxlY3RlZEl0ZW0pKSB7XG4gICAgICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMucHVzaChzZWxlY3RlZEl0ZW0gYXMgQ29udmVyc2lvbkl0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkRm9ybWF0LnN1YnNjcmliZSgoc2VsZWN0ZWRGb3JtYXQpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZvcm1hdCA9IHNlbGVjdGVkRm9ybWF0O1xuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLml0ZW1Ub0NvbnZlcnQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0pIHRoaXMuY29udmVydFNpbmdsZUl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICBfY29udmVyc2lvblNlcnZpY2UuaXRlbVRvUmVtb3ZlLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0pIHRoaXMucmVtb3ZlSXRlbUZyb21RdWV1ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkNvbmZpZyA/IHRoaXMuY29udmVyc2lvbkNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgY29udmVydFNpbmdsZUl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IHdvcmtJdGVtID0gdGhpcy5jb252ZXJzaW9uSXRlbXMuZmluZCh4ID0+IHguZ3VpZCA9PT0gaXRlbS5ndWlkKTtcbiAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5jb252ZXJ0KGl0ZW0pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gZmFsc2U7XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0ZWQgPSB0cnVlO1xuICAgIH0sICgoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBhZGQgZXJyb3IgaGFuZGxpbmc/XG4gICAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gZmFsc2U7XG4gICAgfSkpO1xuICB9XG5cbiAgY29udmVydEFsbCgpe1xuICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbS5jb252ZXJ0ZWQgJiYgIWl0ZW0uY29udmVydGluZykge1xuICAgICAgICB0aGlzLmNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29udmVydEFsbFVuYXZhaWxhYmxlKCl7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkl0ZW1zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbnZlcnNpb25JdGVtcy5maWx0ZXIoY2kgPT4gY2kuY29udmVydGVkICE9PSB0cnVlKS5sZW5ndGggPT09IDA7XG4gIH1cblxuICByZW1vdmVJdGVtRnJvbVF1ZXVlKGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb252ZXJzaW9uSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMuZm9yRWFjaCggKGNpLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihjaS5ndWlkID09PSBpdGVtLmd1aWQgJiYgY2kuZGVzdGluYXRpb25UeXBlID09PSBpdGVtLmRlc3RpbmF0aW9uVHlwZSkgdGhpcy5jb252ZXJzaW9uSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbEl0ZW1zKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goIChmKSA9PiB7XG4gICAgICBpZiAoIWYuaXNEaXJlY3RvcnkgJiYgIWYuZGlyZWN0b3J5KSBmLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGl0ZW1BbHJlYWR5QWRkZWQoc2VsZWN0ZWRJdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKSA6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25JdGVtcy5maWx0ZXIoY2kgPT4gY2kuZGVzdGluYXRpb25UeXBlID09PSBzZWxlY3RlZEl0ZW0uZGVzdGluYXRpb25UeXBlIFxuICAgICAgJiYgY2kuZ3VpZCA9PT0gc2VsZWN0ZWRJdGVtLmd1aWQpLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIGlzTGVmdEJhck9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gdHJ1ZSA6IHRoaXMubGVmdEJhck9wZW47XG4gIH1cbn1cbiJdfQ==