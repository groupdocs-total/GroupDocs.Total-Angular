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
        function (x) { return x.guid === item.guid
            && x.destinationType === item.destinationType; }));
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
                    template: "<div class=\"wrapper\">\r\n  <div class=\"top-panel\">\r\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\r\n    <gd-top-toolbar class=\"toolbar-panel\">\r\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\r\n                 *ngIf=\"browseConfig\" ></gd-button>\r\n\r\n      <gd-button [icon]=\"'play'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\r\n      (click)=\"convertAll()\"></gd-button>\r\n\r\n    </gd-top-toolbar>\r\n  </div>\r\n\r\n  <gd-init-state [icon]=\"'exchange-alt'\" [text]=\"'Drop file here to upload'\" *ngIf=\"conversionItems.length == 0\" (fileDropped)=\"fileDropped($event)\">\r\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n      Or drop file here\r\n  </gd-init-state>\r\n\r\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\r\n\r\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-information-modal [warningCount]=\"warningItems\" [formatName]=\"selectedFormat\"></gd-information-modal>\r\n</div>\r\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUl2RDtJQWlCRSxnQ0FBb0IsYUFBMkIsRUFDM0Isa0JBQXFDLEVBQzdDLGFBQXNDLEVBQ3RDLGtCQUFzQztRQUhsRCxpQkF3Q0M7UUF4Q21CLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFaekQsVUFBSyxHQUFHLFlBQVksQ0FBQztRQUNyQixVQUFLLEdBQXdCLEVBQUUsQ0FBQztRQUNoQyxvQkFBZSxHQUEwQixFQUFFLENBQUM7UUFDNUMscUJBQWdCLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUU1QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUlwQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU9mLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTTtZQUMzQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU87WUFDakQsSUFBSSxPQUFPLEVBQUU7O29CQUNQLENBQUMsU0FBUTtnQkFDYixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7OztvQkFBQzt3QkFDM0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLGFBQWE7WUFDdkQsYUFBYSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLFlBQVk7Z0JBQ2pDLElBQUksWUFBWSxDQUFDLE9BQU87b0JBQUUsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUM5QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDaEYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsbUJBQUEsWUFBWSxFQUF1QixDQUFDLENBQUM7aUJBQ2hFO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxjQUFjO1lBQ3ZELEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDN0MsSUFBSSxJQUFJO2dCQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzFDLElBQUksSUFBSTtnQkFBRSxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksaURBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JFLENBQUM7OztPQUFBOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxNQUFNO1FBQ2hCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwwQ0FBUzs7OztJQUFULFVBQVUsRUFBVTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDJDQUFVOzs7O0lBQVYsVUFBVyxFQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsdUNBQU07Ozs7SUFBTixVQUFPLE1BQWM7UUFBckIsaUJBSUM7UUFIQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ3pFLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDBDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQUVDO1FBREMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUEwQixJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxFQUF4QixDQUF3QixFQUFDLENBQUM7SUFDaEgsQ0FBQzs7Ozs7SUFFRCxrREFBaUI7Ozs7SUFBakIsVUFBa0IsSUFBSTs7WUFDZCxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJO2VBQ3BCLENBQUMsQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFEMUMsQ0FDMEMsRUFBQztRQUMzRixRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQzlDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsR0FBRTs7O1FBQUM7WUFDRiw0QkFBNEI7WUFDNUIsUUFBUSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBSTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHNEQUFxQjs7O0lBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksRUFBckIsQ0FBcUIsRUFBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDcEgsQ0FBQzs7Ozs7SUFFRCxvREFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBeUI7UUFBN0MsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87Ozs7O1lBQUUsVUFBQyxFQUFFLEVBQUUsS0FBSztnQkFDdEMsSUFBRyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsZUFBZTtvQkFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakgsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsK0NBQWM7Ozs7SUFBZCxVQUFlLE9BQWdCO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFFLFVBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzNELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpREFBZ0I7Ozs7SUFBaEIsVUFBaUIsWUFBaUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxlQUFlLEtBQUssWUFBWSxDQUFDLGVBQWU7ZUFDdkYsRUFBRSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxFQURPLENBQ1AsRUFBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELDhDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2xELENBQUM7O2dCQTdJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHU5Q0FBOEM7O2lCQUUvQzs7OztnQkFYUSxZQUFZO2dCQURiLGlCQUFpQjtnQkFEakIsdUJBQXVCO2dCQUk3QixrQkFBa0I7O0lBbUpwQiw2QkFBQztDQUFBLEFBOUlELElBOElDO1NBeklZLHNCQUFzQjs7O0lBQ2pDLHVDQUFxQjs7SUFDckIsdUNBQWdDOztJQUNoQyxpREFBNEM7O0lBQzVDLGtEQUE0Qzs7SUFDNUMsMkNBQW1COztJQUNuQiw2Q0FBb0I7O0lBQ3BCLGtEQUFtQzs7SUFDbkMsd0NBQVk7O0lBQ1osZ0RBQXVCOztJQUN2Qiw4Q0FBaUI7Ozs7O0lBRUwsK0NBQW1DOzs7OztJQUNuQyxvREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udmVyc2lvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb252ZXJzaW9uU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSxcclxuICBDb21tb25Nb2RhbHMsXHJcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0NvbnZlcnNpb25Db25maWd9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnXCI7XHJcbmltcG9ydCB7Q29udmVyc2lvbkl0ZW1Nb2RlbCwgRXh0ZW5kZWRGaWxlTW9kZWx9IGZyb20gXCIuL21vZGVsc1wiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNvbnZlcnNpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbkFwcENvbXBvbmVudCB7XHJcbiAgdGl0bGUgPSAnY29udmVyc2lvbic7XHJcbiAgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW10gPSBbXTtcclxuICBjb252ZXJzaW9uSXRlbXM6IENvbnZlcnNpb25JdGVtTW9kZWxbXSA9IFtdO1xyXG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG4gIGxlZnRCYXJPcGVuID0gZmFsc2U7XHJcbiAgY29udmVyc2lvbkNvbmZpZzogQ29udmVyc2lvbkNvbmZpZztcclxuICByZXN1bHQ6IGFueTtcclxuICBzZWxlY3RlZEZvcm1hdDogc3RyaW5nO1xyXG4gIHdhcm5pbmdJdGVtcyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvbnZlcnNpb25TZXJ2aWNlOiBDb252ZXJzaW9uU2VydmljZSxcclxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBDb252ZXJzaW9uQ29uZmlnU2VydmljZSxcclxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSkge1xyXG5cclxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xyXG4gICAgICB0aGlzLmNvbnZlcnNpb25Db25maWcgPSBjb25maWc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcclxuICAgICAgaWYgKHVwbG9hZHMpIHtcclxuICAgICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5jb252ZXJzaW9uQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkSXRlbXMuc3Vic2NyaWJlKChzZWxlY3RlZEl0ZW1zKSA9PiB7XHJcbiAgICAgIHNlbGVjdGVkSXRlbXMuZm9yRWFjaCgoc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbS53YXJuaW5nKSB0aGlzLndhcm5pbmdJdGVtcysrO1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxlY3RlZEl0ZW0pLmxlbmd0aCA+IDAgJiYgIXRoaXMuaXRlbUFscmVhZHlBZGRlZChzZWxlY3RlZEl0ZW0pKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnZlcnNpb25JdGVtcy5wdXNoKHNlbGVjdGVkSXRlbSBhcyBDb252ZXJzaW9uSXRlbU1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkRm9ybWF0LnN1YnNjcmliZSgoc2VsZWN0ZWRGb3JtYXQpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRm9ybWF0ID0gc2VsZWN0ZWRGb3JtYXQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfY29udmVyc2lvblNlcnZpY2UuaXRlbVRvQ29udmVydC5zdWJzY3JpYmUoaXRlbSA9PiB7XHJcbiAgICAgIGlmIChpdGVtKSB0aGlzLmNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLml0ZW1Ub1JlbW92ZS5zdWJzY3JpYmUoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHRoaXMucmVtb3ZlSXRlbUZyb21RdWV1ZShpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uQ29uZmlnID8gdGhpcy5jb252ZXJzaW9uQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcuYnJvd3NlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uQ29uZmlnID8gdGhpcy5jb252ZXJzaW9uQ29uZmlnLnVwbG9hZCA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0U2luZ2xlSXRlbShpdGVtKSB7XHJcbiAgICBjb25zdCB3b3JrSXRlbSA9IHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbmQoeCA9PiB4Lmd1aWQgPT09IGl0ZW0uZ3VpZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHguZGVzdGluYXRpb25UeXBlID09PSBpdGVtLmRlc3RpbmF0aW9uVHlwZSk7XHJcbiAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLmNvbnZlcnQoaXRlbSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xyXG4gICAgICB3b3JrSXRlbS5jb252ZXJ0ZWQgPSB0cnVlO1xyXG4gICAgfSwgKCgpID0+IHtcclxuICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGhhbmRsaW5nP1xyXG4gICAgICB3b3JrSXRlbS5jb252ZXJ0aW5nID0gZmFsc2U7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0QWxsKCl7XHJcbiAgICB0aGlzLmNvbnZlcnNpb25JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS5jb252ZXJ0ZWQgJiYgIWl0ZW0uY29udmVydGluZykge1xyXG4gICAgICAgIHRoaXMuY29udmVydFNpbmdsZUl0ZW0oaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29udmVydEFsbFVuYXZhaWxhYmxlKCl7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uSXRlbXMubGVuZ3RoID09PSAwIHx8IHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbHRlcihjaSA9PiBjaS5jb252ZXJ0ZWQgIT09IHRydWUpLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW1Gcm9tUXVldWUoaXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29udmVyc2lvbkl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMuZm9yRWFjaCggKGNpLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKGNpLmd1aWQgPT09IGl0ZW0uZ3VpZCAmJiBjaS5kZXN0aW5hdGlvblR5cGUgPT09IGl0ZW0uZGVzdGluYXRpb25UeXBlKSB0aGlzLmNvbnZlcnNpb25JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEFsbEl0ZW1zKGNoZWNrZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCggKGYpID0+IHtcclxuICAgICAgaWYgKCFmLmlzRGlyZWN0b3J5ICYmICFmLmRpcmVjdG9yeSkgZi5zZWxlY3RlZCA9IGNoZWNrZWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGl0ZW1BbHJlYWR5QWRkZWQoc2VsZWN0ZWRJdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKSA6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbHRlcihjaSA9PiBjaS5kZXN0aW5hdGlvblR5cGUgPT09IHNlbGVjdGVkSXRlbS5kZXN0aW5hdGlvblR5cGUgXHJcbiAgICAgICYmIGNpLmd1aWQgPT09IHNlbGVjdGVkSXRlbS5ndWlkKS5sZW5ndGggPT09IDE7XHJcbiAgfVxyXG5cclxuICBpc0xlZnRCYXJPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gdHJ1ZSA6IHRoaXMubGVmdEJhck9wZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==