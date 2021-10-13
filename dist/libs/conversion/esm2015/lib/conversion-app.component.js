/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ConversionConfigService } from "./conversion-config.service";
import { ConversionService } from "./conversion.service";
import { ModalService, CommonModals, UploadFilesService } from "@groupdocs.examples.angular/common-components";
export class ConversionAppComponent {
    /**
     * @param {?} _modalService
     * @param {?} _conversionService
     * @param {?} configService
     * @param {?} uploadFilesService
     */
    constructor(_modalService, _conversionService, configService, uploadFilesService) {
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
        (config) => {
            this.conversionConfig = config;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads) {
                /** @type {?} */
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._conversionService.upload(uploads.item(i), '', this.conversionConfig.rewrite).subscribe((/**
                     * @return {?}
                     */
                    () => {
                        this.selectDir('');
                    }));
                }
            }
        }));
        _conversionService.selectedItems.subscribe((/**
         * @param {?} selectedItems
         * @return {?}
         */
        (selectedItems) => {
            selectedItems.forEach((/**
             * @param {?} selectedItem
             * @return {?}
             */
            (selectedItem) => {
                if (selectedItem.warning)
                    this.warningItems++;
                if (Object.keys(selectedItem).length > 0 && !this.itemAlreadyAdded(selectedItem)) {
                    this.conversionItems.push((/** @type {?} */ (selectedItem)));
                }
            }));
        }));
        _conversionService.selectedFormat.subscribe((/**
         * @param {?} selectedFormat
         * @return {?}
         */
        (selectedFormat) => {
            this.selectedFormat = selectedFormat;
        }));
        _conversionService.itemToConvert.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item)
                this.convertSingleItem(item);
        }));
        _conversionService.itemToRemove.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item)
                this.removeItemFromQueue(item);
        }));
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.conversionConfig ? this.conversionConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.conversionConfig ? this.conversionConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.conversionConfig ? this.conversionConfig.upload : true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        if ($event) {
            this._modalService.open(CommonModals.BrowseFiles);
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openModal(id) {
        this._modalService.open(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    closeModal(id) {
        this._modalService.close(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._conversionService.upload(null, $event, this.rewriteConfig).subscribe((/**
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
    selectDir($event) {
        this._conversionService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    convertSingleItem(item) {
        /** @type {?} */
        const workItem = this.conversionItems.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.guid === item.guid
            && x.destinationType === item.destinationType));
        workItem.converting = true;
        this._conversionService.convert(item).subscribe((/**
         * @return {?}
         */
        () => {
            workItem.converting = false;
            workItem.converted = true;
        }), ((/**
         * @return {?}
         */
        () => {
            // TODO: add error handling?
            workItem.converting = false;
        })));
    }
    /**
     * @return {?}
     */
    convertAll() {
        this.conversionItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (!item.converted && !item.converting) {
                this.convertSingleItem(item);
            }
        }));
    }
    /**
     * @return {?}
     */
    convertAllUnavailable() {
        return this.conversionItems.length === 0 || this.conversionItems.filter((/**
         * @param {?} ci
         * @return {?}
         */
        ci => ci.converted !== true)).length === 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeItemFromQueue(item) {
        if (this.conversionItems.length > 0) {
            this.conversionItems.forEach((/**
             * @param {?} ci
             * @param {?} index
             * @return {?}
             */
            (ci, index) => {
                if (ci.guid === item.guid && ci.destinationType === item.destinationType)
                    this.conversionItems.splice(index, 1);
            }));
        }
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    selectAllItems(checked) {
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (!f.isDirectory && !f.directory)
                f.selected = checked;
        }));
    }
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    itemAlreadyAdded(selectedItem) {
        return this.conversionItems.filter((/**
         * @param {?} ci
         * @return {?}
         */
        ci => ci.destinationType === selectedItem.destinationType
            && ci.guid === selectedItem.guid)).length === 1;
    }
    /**
     * @return {?}
     */
    isLeftBarOpen() {
        return this.isDesktop ? true : this.leftBarOpen;
    }
}
ConversionAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-conversion',
                template: "<div class=\"wrapper\">\r\n  <div class=\"top-panel\">\r\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\r\n    <gd-top-toolbar class=\"toolbar-panel\">\r\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\r\n                 *ngIf=\"browseConfig\" ></gd-button>\r\n\r\n      <gd-button [icon]=\"'play'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\r\n      (click)=\"convertAll()\"></gd-button>\r\n\r\n    </gd-top-toolbar>\r\n  </div>\r\n\r\n  <gd-init-state [icon]=\"'exchange-alt'\" [text]=\"'Drop file here to upload'\" *ngIf=\"conversionItems.length == 0\" (fileDropped)=\"fileDropped($event)\">\r\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\r\n      Or drop file here\r\n  </gd-init-state>\r\n\r\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\r\n\r\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-information-modal [warningCount]=\"warningItems\" [formatName]=\"selectedFormat\"></gd-information-modal>\r\n</div>\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}}"]
            }] }
];
/** @nocollapse */
ConversionAppComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ConversionService },
    { type: ConversionConfigService },
    { type: UploadFilesService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQVN2RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBWWpDLFlBQW9CLGFBQTJCLEVBQzNCLGtCQUFxQyxFQUM3QyxhQUFzQyxFQUN0QyxrQkFBc0M7UUFIOUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVp6RCxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBT2YsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JELElBQUksT0FBTyxFQUFFOztvQkFD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LGVBQWUsQ0FBQyxNQUFNOzs7O1FBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxLQUFLLFlBQVksQ0FBQyxlQUFlO2VBQ3ZGLEVBQUUsQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksRUFBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNsRCxDQUFDOzs7WUE3SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix1OUNBQThDOzthQUUvQzs7OztZQVhRLFlBQVk7WUFEYixpQkFBaUI7WUFEakIsdUJBQXVCO1lBSTdCLGtCQUFrQjs7OztJQVdsQix1Q0FBcUI7O0lBQ3JCLHVDQUFnQzs7SUFDaEMsaURBQTRDOztJQUM1QyxrREFBNEM7O0lBQzVDLDJDQUFtQjs7SUFDbkIsNkNBQW9COztJQUNwQixrREFBbUM7O0lBQ25DLHdDQUFZOztJQUNaLGdEQUF1Qjs7SUFDdkIsOENBQWlCOzs7OztJQUVMLCtDQUFtQzs7Ozs7SUFDbkMsb0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnZlcnNpb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb252ZXJzaW9uLWNvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29udmVyc2lvblNlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UsXHJcbiAgQ29tbW9uTW9kYWxzLFxyXG4gIFVwbG9hZEZpbGVzU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtDb252ZXJzaW9uQ29uZmlnfSBmcm9tIFwiLi9jb252ZXJzaW9uLWNvbmZpZ1wiO1xyXG5pbXBvcnQge0NvbnZlcnNpb25JdGVtTW9kZWwsIEV4dGVuZGVkRmlsZU1vZGVsfSBmcm9tIFwiLi9tb2RlbHNcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jb252ZXJzaW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25BcHBDb21wb25lbnQge1xyXG4gIHRpdGxlID0gJ2NvbnZlcnNpb24nO1xyXG4gIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdID0gW107XHJcbiAgY29udmVyc2lvbkl0ZW1zOiBDb252ZXJzaW9uSXRlbU1vZGVsW10gPSBbXTtcclxuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuICBsZWZ0QmFyT3BlbiA9IGZhbHNlO1xyXG4gIGNvbnZlcnNpb25Db25maWc6IENvbnZlcnNpb25Db25maWc7XHJcbiAgcmVzdWx0OiBhbnk7XHJcbiAgc2VsZWN0ZWRGb3JtYXQ6IHN0cmluZztcclxuICB3YXJuaW5nSXRlbXMgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9jb252ZXJzaW9uU2VydmljZTogQ29udmVyc2lvblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcclxuXHJcbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChjb25maWcpID0+IHtcclxuICAgICAgdGhpcy5jb252ZXJzaW9uQ29uZmlnID0gY29uZmlnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XHJcbiAgICAgIGlmICh1cGxvYWRzKSB7XHJcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMuY29udmVyc2lvbkNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIF9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RlZEl0ZW1zLnN1YnNjcmliZSgoc2VsZWN0ZWRJdGVtcykgPT4ge1xyXG4gICAgICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goKHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0ud2FybmluZykgdGhpcy53YXJuaW5nSXRlbXMrKztcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VsZWN0ZWRJdGVtKS5sZW5ndGggPiAwICYmICF0aGlzLml0ZW1BbHJlYWR5QWRkZWQoc2VsZWN0ZWRJdGVtKSkge1xyXG4gICAgICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMucHVzaChzZWxlY3RlZEl0ZW0gYXMgQ29udmVyc2lvbkl0ZW1Nb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RlZEZvcm1hdC5zdWJzY3JpYmUoKHNlbGVjdGVkRm9ybWF0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZvcm1hdCA9IHNlbGVjdGVkRm9ybWF0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLml0ZW1Ub0NvbnZlcnQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoaXRlbSkgdGhpcy5jb252ZXJ0U2luZ2xlSXRlbShpdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9jb252ZXJzaW9uU2VydmljZS5pdGVtVG9SZW1vdmUuc3Vic2NyaWJlKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtKSB0aGlzLnJlbW92ZUl0ZW1Gcm9tUXVldWUoaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkNvbmZpZyA/IHRoaXMuY29udmVyc2lvbkNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBicm93c2VDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uQ29uZmlnID8gdGhpcy5jb252ZXJzaW9uQ29uZmlnLmJyb3dzZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkNvbmZpZyA/IHRoaXMuY29udmVyc2lvbkNvbmZpZy51cGxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFNpbmdsZUl0ZW0oaXRlbSkge1xyXG4gICAgY29uc3Qgd29ya0l0ZW0gPSB0aGlzLmNvbnZlcnNpb25JdGVtcy5maW5kKHggPT4geC5ndWlkID09PSBpdGVtLmd1aWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB4LmRlc3RpbmF0aW9uVHlwZSA9PT0gaXRlbS5kZXN0aW5hdGlvblR5cGUpO1xyXG4gICAgd29ya0l0ZW0uY29udmVydGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5jb252ZXJ0KGl0ZW0pLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHdvcmtJdGVtLmNvbnZlcnRpbmcgPSBmYWxzZTtcclxuICAgICAgd29ya0l0ZW0uY29udmVydGVkID0gdHJ1ZTtcclxuICAgIH0sICgoKSA9PiB7XHJcbiAgICAgIC8vIFRPRE86IGFkZCBlcnJvciBoYW5kbGluZz9cclxuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgY29udmVydEFsbCgpe1xyXG4gICAgdGhpcy5jb252ZXJzaW9uSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0uY29udmVydGVkICYmICFpdGVtLmNvbnZlcnRpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRBbGxVbmF2YWlsYWJsZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkl0ZW1zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbnZlcnNpb25JdGVtcy5maWx0ZXIoY2kgPT4gY2kuY29udmVydGVkICE9PSB0cnVlKS5sZW5ndGggPT09IDA7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtRnJvbVF1ZXVlKGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbnZlcnNpb25JdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZvckVhY2goIChjaSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZihjaS5ndWlkID09PSBpdGVtLmd1aWQgJiYgY2kuZGVzdGluYXRpb25UeXBlID09PSBpdGVtLmRlc3RpbmF0aW9uVHlwZSkgdGhpcy5jb252ZXJzaW9uSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RBbGxJdGVtcyhjaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goIChmKSA9PiB7XHJcbiAgICAgIGlmICghZi5pc0RpcmVjdG9yeSAmJiAhZi5kaXJlY3RvcnkpIGYuc2VsZWN0ZWQgPSBjaGVja2VkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpdGVtQWxyZWFkeUFkZGVkKHNlbGVjdGVkSXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCkgOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25JdGVtcy5maWx0ZXIoY2kgPT4gY2kuZGVzdGluYXRpb25UeXBlID09PSBzZWxlY3RlZEl0ZW0uZGVzdGluYXRpb25UeXBlIFxyXG4gICAgICAmJiBjaS5ndWlkID09PSBzZWxlY3RlZEl0ZW0uZ3VpZCkubGVuZ3RoID09PSAxO1xyXG4gIH1cclxuXHJcbiAgaXNMZWZ0QmFyT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzRGVza3RvcCA/IHRydWUgOiB0aGlzLmxlZnRCYXJPcGVuO1xyXG4gIH1cclxufVxyXG4iXX0=