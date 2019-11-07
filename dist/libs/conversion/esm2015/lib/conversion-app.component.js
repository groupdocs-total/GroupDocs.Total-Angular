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
         * @param {?} selectedFormats
         * @return {?}
         */
        (selectedFormats) => {
            selectedFormats.forEach((/**
             * @param {?} selectedFormat
             * @return {?}
             */
            (selectedFormat) => {
                if (Object.keys(selectedFormat).length > 0 && !this.itemAlreadyAdded(selectedFormat)) {
                    this.conversionItems.push((/** @type {?} */ (selectedFormat)));
                }
            }));
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
        x => x.guid === item.guid));
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
            this.convertSingleItem(item);
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
     * @param {?} selectedFormat
     * @return {?}
     */
    itemAlreadyAdded(selectedFormat) {
        return this.conversionItems.filter((/**
         * @param {?} ci
         * @return {?}
         */
        ci => ci.destinationType === selectedFormat.destinationType
            && ci.guid === selectedFormat.guid)).length === 1;
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
                template: "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'exchange-alt'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-init-state [icon]=\"'exchange-alt'\" [text]=\"'Drop file here to upload'\" *ngIf=\"conversionItems.length == 0\" (fileDropped)=\"fileDropped($event)\">\n      Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n      Or drop file here\n  </gd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQVN2RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBVWpDLFlBQW9CLGFBQTJCLEVBQzNCLGtCQUFxQyxFQUM3QyxhQUFzQyxFQUN0QyxrQkFBc0M7UUFIOUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVZ6RCxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBU2xCLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyRCxJQUFJLE9BQU8sRUFBRTs7b0JBQ1AsQ0FBUztnQkFDYixLQUFLLENBQUMsR0FB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Qix3ekNBQThDOzthQUUvQzs7OztZQVhRLFlBQVk7WUFEYixpQkFBaUI7WUFEakIsdUJBQXVCO1lBSTdCLGtCQUFrQjs7OztJQVdsQix1Q0FBcUI7O0lBQ3JCLHVDQUFnQzs7SUFDaEMsaURBQTRDOztJQUM1QyxrREFBNEM7O0lBQzVDLDJDQUFtQjs7SUFDbkIsNkNBQW9COztJQUNwQixrREFBbUM7O0lBQ25DLHdDQUFZOzs7OztJQUVBLCtDQUFtQzs7Ozs7SUFDbkMsb0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb252ZXJzaW9uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDb252ZXJzaW9uU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UsXG4gIENvbW1vbk1vZGFscyxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Q29udmVyc2lvbkNvbmZpZ30gZnJvbSBcIi4vY29udmVyc2lvbi1jb25maWdcIjtcbmltcG9ydCB7Q29udmVyc2lvbkl0ZW1Nb2RlbCwgRXh0ZW5kZWRGaWxlTW9kZWx9IGZyb20gXCIuL21vZGVsc1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbnZlcnNpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25BcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdjb252ZXJzaW9uJztcbiAgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW10gPSBbXTtcbiAgY29udmVyc2lvbkl0ZW1zOiBDb252ZXJzaW9uSXRlbU1vZGVsW10gPSBbXTtcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBsZWZ0QmFyT3BlbiA9IGZhbHNlO1xuICBjb252ZXJzaW9uQ29uZmlnOiBDb252ZXJzaW9uQ29uZmlnO1xuICByZXN1bHQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29udmVyc2lvblNlcnZpY2U6IENvbnZlcnNpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBDb252ZXJzaW9uQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5jb252ZXJzaW9uQ29uZmlnID0gY29uZmlnO1xuICAgIH0pO1xuXG4gICAgdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2Fkcykge1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBsb2Fkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLmNvbnZlcnNpb25Db25maWcucmV3cml0ZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkSXRlbXMuc3Vic2NyaWJlKChzZWxlY3RlZEZvcm1hdHMpID0+IHtcbiAgICAgIHNlbGVjdGVkRm9ybWF0cy5mb3JFYWNoKChzZWxlY3RlZEZvcm1hdCkgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VsZWN0ZWRGb3JtYXQpLmxlbmd0aCA+IDAgJiYgIXRoaXMuaXRlbUFscmVhZHlBZGRlZChzZWxlY3RlZEZvcm1hdCkpIHtcbiAgICAgICAgICB0aGlzLmNvbnZlcnNpb25JdGVtcy5wdXNoKHNlbGVjdGVkRm9ybWF0IGFzIENvbnZlcnNpb25JdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9jb252ZXJzaW9uU2VydmljZS5pdGVtVG9Db252ZXJ0LnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtKSB0aGlzLmNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLml0ZW1Ub1JlbW92ZS5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtKSB0aGlzLnJlbW92ZUl0ZW1Gcm9tUXVldWUoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uQ29uZmlnID8gdGhpcy5jb252ZXJzaW9uQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uQ29uZmlnID8gdGhpcy5jb252ZXJzaW9uQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XG4gICAgfVxuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIGNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCB3b3JrSXRlbSA9IHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbmQoeCA9PiB4Lmd1aWQgPT09IGl0ZW0uZ3VpZCk7XG4gICAgd29ya0l0ZW0uY29udmVydGluZyA9IHRydWU7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UuY29udmVydChpdGVtKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xuICAgICAgd29ya0l0ZW0uY29udmVydGVkID0gdHJ1ZTtcbiAgICB9LCAoKCkgPT4ge1xuICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGhhbmRsaW5nP1xuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xuICAgIH0pKTtcbiAgfVxuXG4gIGNvbnZlcnRBbGwoKXtcbiAgICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5jb252ZXJ0U2luZ2xlSXRlbShpdGVtKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29udmVydEFsbFVuYXZhaWxhYmxlKCl7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkl0ZW1zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbnZlcnNpb25JdGVtcy5maWx0ZXIoY2kgPT4gY2kuY29udmVydGVkICE9PSB0cnVlKS5sZW5ndGggPT09IDA7XG4gIH1cblxuICByZW1vdmVJdGVtRnJvbVF1ZXVlKGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb252ZXJzaW9uSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMuZm9yRWFjaCggKGNpLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihjaS5ndWlkID09PSBpdGVtLmd1aWQgJiYgY2kuZGVzdGluYXRpb25UeXBlID09PSBpdGVtLmRlc3RpbmF0aW9uVHlwZSkgdGhpcy5jb252ZXJzaW9uSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbEl0ZW1zKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goIChmKSA9PiB7XG4gICAgICBpZiAoIWYuaXNEaXJlY3RvcnkgJiYgIWYuZGlyZWN0b3J5KSBmLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGl0ZW1BbHJlYWR5QWRkZWQoc2VsZWN0ZWRGb3JtYXQ6IENvbnZlcnNpb25JdGVtTW9kZWwpIDogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbHRlcihjaSA9PiBjaS5kZXN0aW5hdGlvblR5cGUgPT09IHNlbGVjdGVkRm9ybWF0LmRlc3RpbmF0aW9uVHlwZSBcbiAgICAgICYmIGNpLmd1aWQgPT09IHNlbGVjdGVkRm9ybWF0Lmd1aWQpLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIGlzTGVmdEJhck9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gdHJ1ZSA6IHRoaXMubGVmdEJhck9wZW47XG4gIH1cbn1cbiJdfQ==