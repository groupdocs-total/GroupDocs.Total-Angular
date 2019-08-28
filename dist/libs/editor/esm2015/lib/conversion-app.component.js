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
                template: "<div class=\"wrapper\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'conversion'\" [icon]=\"'exchange-alt'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-button [icon]=\"'exchange-alt'\" [tooltip]=\"'Convert'\" [disabled]=\"convertAllUnavailable()\"\n      (click)=\"convertAll()\"></gd-button>\n\n    </gd-top-toolbar>\n  </div>\n\n  <gd-dnd-init-state [icon]=\"'exchange-alt'\" *ngIf=\"conversionItems.length == 0\"></gd-dnd-init-state>\n\n  <gd-conversion-queue [items]=\"conversionItems\" (selectedItemToConvert)=\"convertSingleItem($event)\"></gd-conversion-queue>\n\n  <gd-conversion-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                                    [uploadConfig]=\"uploadConfig\" (selectAll)=\"selectAllItems($event)\"></gd-conversion-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQVN2RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBVWpDLFlBQW9CLGFBQTJCLEVBQzNCLGtCQUFxQyxFQUM3QyxhQUFzQyxFQUN0QyxrQkFBc0M7UUFIOUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVZ6RCxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBU2xCLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyRCxJQUFJLE9BQU8sRUFBRTs7b0JBQ1AsQ0FBUztnQkFDYixLQUFLLENBQUMsR0FB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QUE0Qzs7SUFDNUMsMkNBQW1COztJQUNuQiw2Q0FBb0I7O0lBQ3BCLGtEQUFtQzs7SUFDbkMsd0NBQVk7Ozs7O0lBRUEsK0NBQW1DOzs7OztJQUNuQyxvREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnZlcnNpb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb252ZXJzaW9uLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnZlcnNpb25TZXJ2aWNlfSBmcm9tIFwiLi9jb252ZXJzaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1vZGFsU2VydmljZSxcbiAgQ29tbW9uTW9kYWxzLFxuICBVcGxvYWRGaWxlc1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtDb252ZXJzaW9uQ29uZmlnfSBmcm9tIFwiLi9jb252ZXJzaW9uLWNvbmZpZ1wiO1xuaW1wb3J0IHtDb252ZXJzaW9uSXRlbU1vZGVsLCBFeHRlbmRlZEZpbGVNb2RlbH0gZnJvbSBcIi4vbW9kZWxzXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29udmVyc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24tYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbkFwcENvbXBvbmVudCB7XG4gIHRpdGxlID0gJ2NvbnZlcnNpb24nO1xuICBmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSA9IFtdO1xuICBjb252ZXJzaW9uSXRlbXM6IENvbnZlcnNpb25JdGVtTW9kZWxbXSA9IFtdO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGxlZnRCYXJPcGVuID0gZmFsc2U7XG4gIGNvbnZlcnNpb25Db25maWc6IENvbnZlcnNpb25Db25maWc7XG4gIHJlc3VsdDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb252ZXJzaW9uU2VydmljZTogQ29udmVyc2lvblNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IENvbnZlcnNpb25Db25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSkge1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmNvbnZlcnNpb25Db25maWcgPSBjb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMuY29udmVyc2lvbkNvbmZpZy5yZXdyaXRlKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfY29udmVyc2lvblNlcnZpY2Uuc2VsZWN0ZWRJdGVtcy5zdWJzY3JpYmUoKHNlbGVjdGVkRm9ybWF0cykgPT4ge1xuICAgICAgc2VsZWN0ZWRGb3JtYXRzLmZvckVhY2goKHNlbGVjdGVkRm9ybWF0KSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxlY3RlZEZvcm1hdCkubGVuZ3RoID4gMCAmJiAhdGhpcy5pdGVtQWxyZWFkeUFkZGVkKHNlbGVjdGVkRm9ybWF0KSkge1xuICAgICAgICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLnB1c2goc2VsZWN0ZWRGb3JtYXQgYXMgQ29udmVyc2lvbkl0ZW1Nb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLml0ZW1Ub0NvbnZlcnQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0pIHRoaXMuY29udmVydFNpbmdsZUl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICBfY29udmVyc2lvblNlcnZpY2UuaXRlbVRvUmVtb3ZlLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0pIHRoaXMucmVtb3ZlSXRlbUZyb21RdWV1ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcuYnJvd3NlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkNvbmZpZyA/IHRoaXMuY29udmVyc2lvbkNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIGNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCB3b3JrSXRlbSA9IHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbmQoeCA9PiB4Lmd1aWQgPT09IGl0ZW0uZ3VpZCk7XG4gICAgd29ya0l0ZW0uY29udmVydGluZyA9IHRydWU7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UuY29udmVydChpdGVtKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xuICAgICAgd29ya0l0ZW0uY29udmVydGVkID0gdHJ1ZTtcbiAgICB9LCAoKCkgPT4ge1xuICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGhhbmRsaW5nP1xuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xuICAgIH0pKTtcbiAgfVxuXG4gIGNvbnZlcnRBbGwoKXtcbiAgICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5jb252ZXJ0U2luZ2xlSXRlbShpdGVtKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29udmVydEFsbFVuYXZhaWxhYmxlKCl7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkl0ZW1zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbnZlcnNpb25JdGVtcy5maWx0ZXIoY2kgPT4gY2kuY29udmVydGVkICE9PSB0cnVlKS5sZW5ndGggPT09IDA7XG4gIH1cblxuICByZW1vdmVJdGVtRnJvbVF1ZXVlKGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb252ZXJzaW9uSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb252ZXJzaW9uSXRlbXMuZm9yRWFjaCggKGNpLCBpbmRleCkgPT4ge1xuICAgICAgICBpZihjaS5ndWlkID09PSBpdGVtLmd1aWQgJiYgY2kuZGVzdGluYXRpb25UeXBlID09PSBpdGVtLmRlc3RpbmF0aW9uVHlwZSkgdGhpcy5jb252ZXJzaW9uSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbEl0ZW1zKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goIChmKSA9PiB7XG4gICAgICBpZiAoIWYuaXNEaXJlY3RvcnkgJiYgIWYuZGlyZWN0b3J5KSBmLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGl0ZW1BbHJlYWR5QWRkZWQoc2VsZWN0ZWRGb3JtYXQ6IENvbnZlcnNpb25JdGVtTW9kZWwpIDogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbHRlcihjaSA9PiBjaS5kZXN0aW5hdGlvblR5cGUgPT09IHNlbGVjdGVkRm9ybWF0LmRlc3RpbmF0aW9uVHlwZSBcbiAgICAgICYmIGNpLmd1aWQgPT09IHNlbGVjdGVkRm9ybWF0Lmd1aWQpLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIGlzTGVmdEJhck9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gdHJ1ZSA6IHRoaXMubGVmdEJhck9wZW47XG4gIH1cbn1cbiJdfQ==