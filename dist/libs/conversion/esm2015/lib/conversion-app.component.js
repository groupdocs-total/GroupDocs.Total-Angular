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
                template: "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'play'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-init-state [icon]=\"'exchange-alt'\" [text]=\"'Drop file here to upload'\" *ngIf=\"conversionItems.length == 0\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-information-modal [warningCount]=\"warningItems\" [formatName]=\"selectedFormat\"></gd-information-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}/deep/ .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}/deep/ .tools .button.inactive{color:#959da5!important}/deep/ .tools .icon-button{margin:0 0 0 7px!important}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQVN2RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBWWpDLFlBQW9CLGFBQTJCLEVBQzNCLGtCQUFxQyxFQUM3QyxhQUFzQyxFQUN0QyxrQkFBc0M7UUFIOUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVp6RCxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBT2YsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JELElBQUksT0FBTyxFQUFFOztvQkFD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LGVBQWUsQ0FBQyxNQUFNOzs7O1FBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxLQUFLLFlBQVksQ0FBQyxlQUFlO2VBQ3ZGLEVBQUUsQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksRUFBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNsRCxDQUFDOzs7WUE3SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixpNkNBQThDOzthQUUvQzs7OztZQVhRLFlBQVk7WUFEYixpQkFBaUI7WUFEakIsdUJBQXVCO1lBSTdCLGtCQUFrQjs7OztJQVdsQix1Q0FBcUI7O0lBQ3JCLHVDQUFnQzs7SUFDaEMsaURBQTRDOztJQUM1QyxrREFBNEM7O0lBQzVDLDJDQUFtQjs7SUFDbkIsNkNBQW9COztJQUNwQixrREFBbUM7O0lBQ25DLHdDQUFZOztJQUNaLGdEQUF1Qjs7SUFDdkIsOENBQWlCOzs7OztJQUVMLCtDQUFtQzs7Ozs7SUFDbkMsb0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb252ZXJzaW9uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDb252ZXJzaW9uU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UsXG4gIENvbW1vbk1vZGFscyxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Q29udmVyc2lvbkNvbmZpZ30gZnJvbSBcIi4vY29udmVyc2lvbi1jb25maWdcIjtcbmltcG9ydCB7Q29udmVyc2lvbkl0ZW1Nb2RlbCwgRXh0ZW5kZWRGaWxlTW9kZWx9IGZyb20gXCIuL21vZGVsc1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbnZlcnNpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25BcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdjb252ZXJzaW9uJztcbiAgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW10gPSBbXTtcbiAgY29udmVyc2lvbkl0ZW1zOiBDb252ZXJzaW9uSXRlbU1vZGVsW10gPSBbXTtcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBsZWZ0QmFyT3BlbiA9IGZhbHNlO1xuICBjb252ZXJzaW9uQ29uZmlnOiBDb252ZXJzaW9uQ29uZmlnO1xuICByZXN1bHQ6IGFueTtcbiAgc2VsZWN0ZWRGb3JtYXQ6IHN0cmluZztcbiAgd2FybmluZ0l0ZW1zID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29udmVyc2lvblNlcnZpY2U6IENvbnZlcnNpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBDb252ZXJzaW9uQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5jb252ZXJzaW9uQ29uZmlnID0gY29uZmlnO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLmNvbnZlcnNpb25Db25maWcucmV3cml0ZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkSXRlbXMuc3Vic2NyaWJlKChzZWxlY3RlZEl0ZW1zKSA9PiB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goKHNlbGVjdGVkSXRlbSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtLndhcm5pbmcpIHRoaXMud2FybmluZ0l0ZW1zKys7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxlY3RlZEl0ZW0pLmxlbmd0aCA+IDAgJiYgIXRoaXMuaXRlbUFscmVhZHlBZGRlZChzZWxlY3RlZEl0ZW0pKSB7XG4gICAgICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMucHVzaChzZWxlY3RlZEl0ZW0gYXMgQ29udmVyc2lvbkl0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkRm9ybWF0LnN1YnNjcmliZSgoc2VsZWN0ZWRGb3JtYXQpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZvcm1hdCA9IHNlbGVjdGVkRm9ybWF0O1xuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLml0ZW1Ub0NvbnZlcnQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0pIHRoaXMuY29udmVydFNpbmdsZUl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICBfY29udmVyc2lvblNlcnZpY2UuaXRlbVRvUmVtb3ZlLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0pIHRoaXMucmVtb3ZlSXRlbUZyb21RdWV1ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkNvbmZpZyA/IHRoaXMuY29udmVyc2lvbkNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgY29udmVydFNpbmdsZUl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IHdvcmtJdGVtID0gdGhpcy5jb252ZXJzaW9uSXRlbXMuZmluZCh4ID0+IHguZ3VpZCA9PT0gaXRlbS5ndWlkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHguZGVzdGluYXRpb25UeXBlID09PSBpdGVtLmRlc3RpbmF0aW9uVHlwZSk7XG4gICAgd29ya0l0ZW0uY29udmVydGluZyA9IHRydWU7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UuY29udmVydChpdGVtKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xuICAgICAgd29ya0l0ZW0uY29udmVydGVkID0gdHJ1ZTtcbiAgICB9LCAoKCkgPT4ge1xuICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGhhbmRsaW5nP1xuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xuICAgIH0pKTtcbiAgfVxuXG4gIGNvbnZlcnRBbGwoKXtcbiAgICB0aGlzLmNvbnZlcnNpb25JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uY29udmVydGVkICYmICFpdGVtLmNvbnZlcnRpbmcpIHtcbiAgICAgICAgdGhpcy5jb252ZXJ0U2luZ2xlSXRlbShpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnZlcnRBbGxVbmF2YWlsYWJsZSgpe1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25JdGVtcy5sZW5ndGggPT09IDAgfHwgdGhpcy5jb252ZXJzaW9uSXRlbXMuZmlsdGVyKGNpID0+IGNpLmNvbnZlcnRlZCAhPT0gdHJ1ZSkubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21RdWV1ZShpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udmVyc2lvbkl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZvckVhY2goIChjaSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYoY2kuZ3VpZCA9PT0gaXRlbS5ndWlkICYmIGNpLmRlc3RpbmF0aW9uVHlwZSA9PT0gaXRlbS5kZXN0aW5hdGlvblR5cGUpIHRoaXMuY29udmVyc2lvbkl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RBbGxJdGVtcyhjaGVja2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKCAoZikgPT4ge1xuICAgICAgaWYgKCFmLmlzRGlyZWN0b3J5ICYmICFmLmRpcmVjdG9yeSkgZi5zZWxlY3RlZCA9IGNoZWNrZWQ7XG4gICAgfSk7XG4gIH1cblxuICBpdGVtQWxyZWFkeUFkZGVkKHNlbGVjdGVkSXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCkgOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uSXRlbXMuZmlsdGVyKGNpID0+IGNpLmRlc3RpbmF0aW9uVHlwZSA9PT0gc2VsZWN0ZWRJdGVtLmRlc3RpbmF0aW9uVHlwZSBcbiAgICAgICYmIGNpLmd1aWQgPT09IHNlbGVjdGVkSXRlbS5ndWlkKS5sZW5ndGggPT09IDE7XG4gIH1cblxuICBpc0xlZnRCYXJPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGVza3RvcCA/IHRydWUgOiB0aGlzLmxlZnRCYXJPcGVuO1xuICB9XG59XG4iXX0=