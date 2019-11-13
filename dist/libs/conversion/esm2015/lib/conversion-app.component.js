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
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}/deep/ .tools .button{color:#fff!important;flex-flow:column}/deep/ .tools .button.inactive{color:#959da5!important}/deep/ .tools .icon-button{margin:0 0 0 7px!important}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:100%}.top-panel{display:flex;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px!important;width:60px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQ25CLFlBQVksRUFDWixrQkFBa0IsRUFDbkIsTUFBTSwrQ0FBK0MsQ0FBQztBQVN2RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBWWpDLFlBQW9CLGFBQTJCLEVBQzNCLGtCQUFxQyxFQUM3QyxhQUFzQyxFQUN0QyxrQkFBc0M7UUFIOUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVp6RCxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBT2YsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JELElBQUksT0FBTyxFQUFFOztvQkFDUCxDQUFTO2dCQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUzs7O29CQUFDLEdBQUcsRUFBRTt3QkFDaEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzNELGFBQWEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxZQUFZLENBQUMsT0FBTztvQkFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzlDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNoRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxtQkFBQSxZQUFZLEVBQXVCLENBQUMsQ0FBQztpQkFDaEU7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQVU7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxFQUFDLENBQUM7SUFDaEgsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFJOztjQUNkLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBQztRQUNyRSxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNuRCxRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUM1QixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLEdBQUU7OztRQUFDLEdBQUcsRUFBRTtZQUNQLDRCQUE0QjtZQUM1QixRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTTs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3BILENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBeUI7UUFDM0MsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPOzs7OztZQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMxQyxJQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQyxlQUFlO29CQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzNELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxZQUFpQztRQUNoRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTTs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsS0FBSyxZQUFZLENBQUMsZUFBZTtlQUN2RixFQUFFLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDbEQsQ0FBQzs7O1lBNUlGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsaTZDQUE4Qzs7YUFFL0M7Ozs7WUFYUSxZQUFZO1lBRGIsaUJBQWlCO1lBRGpCLHVCQUF1QjtZQUk3QixrQkFBa0I7Ozs7SUFXbEIsdUNBQXFCOztJQUNyQix1Q0FBZ0M7O0lBQ2hDLGlEQUE0Qzs7SUFDNUMsa0RBQTRDOztJQUM1QywyQ0FBbUI7O0lBQ25CLDZDQUFvQjs7SUFDcEIsa0RBQW1DOztJQUNuQyx3Q0FBWTs7SUFDWixnREFBdUI7O0lBQ3ZCLDhDQUFpQjs7Ozs7SUFFTCwrQ0FBbUM7Ozs7O0lBQ25DLG9EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udmVyc2lvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udmVyc2lvblNlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIFVwbG9hZEZpbGVzU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0NvbnZlcnNpb25Db25maWd9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnXCI7XG5pbXBvcnQge0NvbnZlcnNpb25JdGVtTW9kZWwsIEV4dGVuZGVkRmlsZU1vZGVsfSBmcm9tIFwiLi9tb2RlbHNcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb252ZXJzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNpb24tYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnY29udmVyc2lvbic7XG4gIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdID0gW107XG4gIGNvbnZlcnNpb25JdGVtczogQ29udmVyc2lvbkl0ZW1Nb2RlbFtdID0gW107XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgbGVmdEJhck9wZW4gPSBmYWxzZTtcbiAgY29udmVyc2lvbkNvbmZpZzogQ29udmVyc2lvbkNvbmZpZztcbiAgcmVzdWx0OiBhbnk7XG4gIHNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gIHdhcm5pbmdJdGVtcyA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvbnZlcnNpb25TZXJ2aWNlOiBDb252ZXJzaW9uU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG5cbiAgICBjb25maWdTZXJ2aWNlLnVwZGF0ZWRDb25maWcuc3Vic2NyaWJlKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMuY29udmVyc2lvbkNvbmZpZyA9IGNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5jb252ZXJzaW9uQ29uZmlnLnJld3JpdGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RlZEl0ZW1zLnN1YnNjcmliZSgoc2VsZWN0ZWRJdGVtcykgPT4ge1xuICAgICAgc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChzZWxlY3RlZEl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbS53YXJuaW5nKSB0aGlzLndhcm5pbmdJdGVtcysrO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VsZWN0ZWRJdGVtKS5sZW5ndGggPiAwICYmICF0aGlzLml0ZW1BbHJlYWR5QWRkZWQoc2VsZWN0ZWRJdGVtKSkge1xuICAgICAgICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLnB1c2goc2VsZWN0ZWRJdGVtIGFzIENvbnZlcnNpb25JdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RlZEZvcm1hdC5zdWJzY3JpYmUoKHNlbGVjdGVkRm9ybWF0KSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGb3JtYXQgPSBzZWxlY3RlZEZvcm1hdDtcbiAgICB9KTtcblxuICAgIF9jb252ZXJzaW9uU2VydmljZS5pdGVtVG9Db252ZXJ0LnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtKSB0aGlzLmNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgX2NvbnZlcnNpb25TZXJ2aWNlLml0ZW1Ub1JlbW92ZS5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtKSB0aGlzLnJlbW92ZUl0ZW1Gcm9tUXVldWUoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uQ29uZmlnID8gdGhpcy5jb252ZXJzaW9uQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uQ29uZmlnID8gdGhpcy5jb252ZXJzaW9uQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgdXBsb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25Db25maWcgPyB0aGlzLmNvbnZlcnNpb25Db25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XG4gICAgfVxuICB9XG5cbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihpZCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoaWQpO1xuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0RGlyKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIGNvbnZlcnRTaW5nbGVJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCB3b3JrSXRlbSA9IHRoaXMuY29udmVyc2lvbkl0ZW1zLmZpbmQoeCA9PiB4Lmd1aWQgPT09IGl0ZW0uZ3VpZCk7XG4gICAgd29ya0l0ZW0uY29udmVydGluZyA9IHRydWU7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2UuY29udmVydChpdGVtKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xuICAgICAgd29ya0l0ZW0uY29udmVydGVkID0gdHJ1ZTtcbiAgICB9LCAoKCkgPT4ge1xuICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGhhbmRsaW5nP1xuICAgICAgd29ya0l0ZW0uY29udmVydGluZyA9IGZhbHNlO1xuICAgIH0pKTtcbiAgfVxuXG4gIGNvbnZlcnRBbGwoKXtcbiAgICB0aGlzLmNvbnZlcnNpb25JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uY29udmVydGVkICYmICFpdGVtLmNvbnZlcnRpbmcpIHtcbiAgICAgICAgdGhpcy5jb252ZXJ0U2luZ2xlSXRlbShpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnZlcnRBbGxVbmF2YWlsYWJsZSgpe1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25JdGVtcy5sZW5ndGggPT09IDAgfHwgdGhpcy5jb252ZXJzaW9uSXRlbXMuZmlsdGVyKGNpID0+IGNpLmNvbnZlcnRlZCAhPT0gdHJ1ZSkubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcmVtb3ZlSXRlbUZyb21RdWV1ZShpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udmVyc2lvbkl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29udmVyc2lvbkl0ZW1zLmZvckVhY2goIChjaSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYoY2kuZ3VpZCA9PT0gaXRlbS5ndWlkICYmIGNpLmRlc3RpbmF0aW9uVHlwZSA9PT0gaXRlbS5kZXN0aW5hdGlvblR5cGUpIHRoaXMuY29udmVyc2lvbkl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RBbGxJdGVtcyhjaGVja2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKCAoZikgPT4ge1xuICAgICAgaWYgKCFmLmlzRGlyZWN0b3J5ICYmICFmLmRpcmVjdG9yeSkgZi5zZWxlY3RlZCA9IGNoZWNrZWQ7XG4gICAgfSk7XG4gIH1cblxuICBpdGVtQWxyZWFkeUFkZGVkKHNlbGVjdGVkSXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCkgOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uSXRlbXMuZmlsdGVyKGNpID0+IGNpLmRlc3RpbmF0aW9uVHlwZSA9PT0gc2VsZWN0ZWRJdGVtLmRlc3RpbmF0aW9uVHlwZSBcbiAgICAgICYmIGNpLmd1aWQgPT09IHNlbGVjdGVkSXRlbS5ndWlkKS5sZW5ndGggPT09IDE7XG4gIH1cblxuICBpc0xlZnRCYXJPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGVza3RvcCA/IHRydWUgOiB0aGlzLmxlZnRCYXJPcGVuO1xuICB9XG59XG4iXX0=