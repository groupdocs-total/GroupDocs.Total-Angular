/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowseFilesModalComponent, UploadFilesService, ModalService, CommonModals } from '@groupdocs.examples.angular/common-components';
import { ConversionService } from '../conversion.service';
/**
 * @record
 */
export function Option() { }
if (false) {
    /** @type {?} */
    Option.prototype.name;
    /** @type {?} */
    Option.prototype.value;
    /** @type {?} */
    Option.prototype.warning;
}
export class ConversionBrowseFilesModalComponent extends BrowseFilesModalComponent {
    /**
     * @param {?} _uploadService
     * @param {?} _conversionService
     * @param {?} _modalService
     */
    constructor(_uploadService, _conversionService, _modalService) {
        super(_uploadService);
        this._conversionService = _conversionService;
        this._modalService = _modalService;
        this.selectAll = new EventEmitter();
        this.dynamicOptions = [];
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    selectDD(entry) {
        console.log('SELECTED DD', entry);
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    selectAllItems(checked) {
        this.selectAll.emit(checked);
        this.dynamicOptions = this.prepareMultipleConversionTypes();
    }
    /**
     * @param {?} checked
     * @param {?} file
     * @return {?}
     */
    selectSingleItem(checked, file) {
        // TODO: refactor?
        /** @type {?} */
        const selectedFiles = this.files.filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f.guid === file.guid));
        if (selectedFiles.length === 1) {
            selectedFiles[0].selected = checked;
        }
        this.dynamicOptions = this.prepareMultipleConversionTypes();
    }
    /**
     * @return {?}
     */
    getLabelString() {
        if (this.files && this.files.length > 0) {
            /** @type {?} */
            const selectedCount = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            file => file.selected)).length;
            if (selectedCount > 0) {
                return 'Add ' + selectedCount + ' selected';
            }
            else {
                return 'Add selected';
            }
        }
    }
    /**
     * @return {?}
     */
    prepareMultipleConversionTypes() {
        /** @type {?} */
        const allTypes = [];
        this.files.filter((/**
         * @param {?} file
         * @return {?}
         */
        file => file.selected)).forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (f.conversionTypes.length > 0) {
                /** @type {?} */
                const types = Object.assign([], f.conversionTypes);
                allTypes.push(types);
            }
        }));
        /** @type {?} */
        let longestArray = [];
        allTypes.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.length >= longestArray.length) {
                longestArray = item;
            }
        }));
        //add warnings
        allTypes.forEach((/**
         * @param {?} typesArr
         * @return {?}
         */
        typesArr => {
            for (let i = 0; i < longestArray.length; i++) {
                /** @type {?} */
                const type = (longestArray[i].value) ? longestArray[i].value : longestArray[i];
                // TODO: reconsider second check
                if (typesArr.indexOf(type) === -1 && typesArr.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                t => t.name === type)).length === 0) {
                    longestArray[i] = {
                        value: type,
                        name: type,
                        warning: true,
                        icon: this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + type, directory: false })))
                    };
                }
                else {
                    if (!longestArray[i].warning) {
                        longestArray[i] = {
                            value: type,
                            name: type,
                            warning: false,
                            icon: this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + type, directory: false })))
                        };
                    }
                }
            }
        }));
        return longestArray;
    }
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    selectFormat($event, file) {
        // the case when we selecting format inline on the single file
        if (file) {
            this.selectAll.emit(false);
            file.selected = true;
        }
        this._format = $event.value;
        /** @type {?} */
        const conversionItems = new Array();
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (f.selected && !f.isDirectory && !f.directory) {
                /** @type {?} */
                const extension = f.guid.replace(/^.*\./, '');
                /** @type {?} */
                const destinationGuid = f.guid.replace(extension, this._format);
                /** @type {?} */
                const destinationFileName = destinationGuid.replace(/^.*[\\\/]/, '');
                /** @type {?} */
                const conversionItem = {
                    guid: f.guid,
                    directory: f.directory,
                    size: f.size,
                    name: f.name,
                    destinationType: $event.value,
                    isDirectory: f.isDirectory,
                    sizeString: this.getSize(f.size),
                    sourceIcon: this.getFormatIcon(f),
                    sourceFormatName: this.getFormatName(f),
                    destinationFileName: destinationFileName,
                    destinationFormatName: this.getFormatName((/** @type {?} */ ({ name: destinationFileName, directory: false }))),
                    destinationIcon: this.getFormatIcon((/** @type {?} */ ({ name: destinationFileName, directory: false }))),
                    converted: false,
                    // TODO: maybe there is a more beauty way?
                    converting: false,
                    warning: f.conversionTypes.indexOf(this._format) === -1 ? true : false
                };
                conversionItems.push(conversionItem);
            }
        }));
        this._conversionService.selectItems(conversionItems);
        this._conversionService.selectFormat(this._format.toUpperCase());
        this._modalService.close(CommonModals.BrowseFiles);
        if ($event.warning) {
            this._modalService.open(CommonModals.InformationMessage);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    createFormatOption(val) {
        return {
            value: val,
            name: val,
            icon: this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + val, directory: false })))
        };
    }
    /**
     * @param {?} formats
     * @return {?}
     */
    formatOptions(formats) {
        if (formats) {
            /** @type {?} */
            const allTypes = new Array();
            for (let i = 0; i < formats.length; i++) {
                allTypes.push(this.createFormatOption(formats[i]));
            }
            return allTypes;
        }
    }
    /**
     * @return {?}
     */
    anyItemSelected() {
        // TODO: reconsider such checks
        if (this.files && this.files.length > 0) {
            return this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            file => file.selected)).length > 0;
        }
        else
            return false;
    }
    /**
     * @return {?}
     */
    allItemsSelected() {
        if (this.files && this.files.filter((/**
         * @param {?} file
         * @return {?}
         */
        file => !file.isDirectory && !file.directory)).length > 0 && this.files.length > 0) {
            return this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            file => !file.isDirectory && !file.directory && file.selected)).length
                === this.files.filter((/**
                 * @param {?} file
                 * @return {?}
                 */
                file => !file.isDirectory && !file.directory)).length;
        }
        else
            return false;
    }
}
ConversionBrowseFilesModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-conversion-browse-files-modal',
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n\n    <div class=\"select-all\">\n      <input type=\"checkbox\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n    </div>\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n              {{getLabelString()}}\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n              <div class=\"text\">{{item.name}}</div>\n              <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                    title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\n                <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n              </div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:68px;width:90%;line-height:60px}.header-size{padding-right:84px;line-height:60px}.file-size,.header-size{width:7%;color:#777;text-align:left}.file-size{font-size:12px;width:7%;line-height:79px}.file-description{display:flex;width:90%;padding:18px 0;font-size:14px;flex:1;cursor:pointer;overflow:hidden}.file-description .ng-fa-icon{font-size:32px}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.upload-panel{display:flex;position:relative;width:100%;margin-top:24px;margin-right:24px}.upload-panel .select-all{height:37px;margin:0 16px 0 15px;width:37px;line-height:44px;text-align:center}.upload-panel .context{display:flex;flex-direction:column;width:100%;margin-right:24px}.upload-panel .context .context-actions{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;justify-content:center;font-size:14px}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-actions ::ng-deep .button.primary{width:117px;background-color:#4b566c}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive{width:106px;background-color:#959da5}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ .text{color:#3e4e5a}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ fa-icon{color:#3e4e5a}.upload-panel .context .context-panel{display:flex;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.upload-panel gd-drop-down /deep/ .drop-down-item .text{margin-left:7px;text-transform:uppercase;color:#6e6e6e}.upload-panel gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.upload-panel gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.go-up{cursor:pointer;display:flex;font-size:26px;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 68px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:flex;justify-content:center;align-items:center}.gd-drag-n-drop-icon{margin-top:-50px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:37px;margin:21px 16px 21px 15px;width:37px;line-height:44px;text-align:center}.gd-file-checkbox.empty{width:37px}.file-format-select{display:flex;align-items:center;width:36px;margin-right:24px}.file-format-select ::ng-deep .button{padding:0;width:36px;margin:0;font-size:14px}.file-format-select ::ng-deep .button .text{padding:0}.file-format-select ::ng-deep .show .button{color:#959da5}.file-format-select gd-drop-down /deep/ .drop-down-item{width:96px}.file-format-select gd-drop-down /deep/ .drop-down-item .text{padding-left:7px;text-transform:uppercase;color:#6e6e6e}.file-format-select gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.file-format-select gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}.dnd-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}.file-size,.list-files-header{display:none}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
            }] }
];
/** @nocollapse */
ConversionBrowseFilesModalComponent.ctorParameters = () => [
    { type: UploadFilesService },
    { type: ConversionService },
    { type: ModalService }
];
ConversionBrowseFilesModalComponent.propDecorators = {
    files: [{ type: Input }],
    selectAll: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConversionBrowseFilesModalComponent.prototype._format;
    /** @type {?} */
    ConversionBrowseFilesModalComponent.prototype.formats;
    /** @type {?} */
    ConversionBrowseFilesModalComponent.prototype.files;
    /** @type {?} */
    ConversionBrowseFilesModalComponent.prototype.selectAll;
    /** @type {?} */
    ConversionBrowseFilesModalComponent.prototype.dynamicOptions;
    /**
     * @type {?}
     * @private
     */
    ConversionBrowseFilesModalComponent.prototype._conversionService;
    /**
     * @type {?}
     * @private
     */
    ConversionBrowseFilesModalComponent.prototype._modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBYSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckosT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHMUQsNEJBSUM7OztJQUhDLHNCQUFhOztJQUNiLHVCQUFXOztJQUNYLHlCQUFpQjs7QUFRbkIsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLHlCQUF5Qjs7Ozs7O0lBUWhGLFlBQVksY0FBa0MsRUFDcEMsa0JBQXFDLEVBQ3JDLGFBQTJCO1FBQ25DLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUZkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFOM0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFbEQsbUJBQWMsR0FBYSxFQUFFLENBQUM7SUFNOUIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQWdCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdC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LDREQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBVcGxvYWRGaWxlc1NlcnZpY2UsIEZpbGVNb2RlbCwgTW9kYWxTZXJ2aWNlLCBDb21tb25Nb2RhbHMgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29udmVyc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb252ZXJzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtDb252ZXJzaW9uSXRlbU1vZGVsLCBFeHRlbmRlZEZpbGVNb2RlbH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbiAgd2FybmluZzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGV4dGVuZHMgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Zvcm1hdDogc3RyaW5nO1xuICBmb3JtYXRzO1xuICBASW5wdXQoKSBmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXTtcbiAgQE91dHB1dCgpIHNlbGVjdEFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBkeW5hbWljT3B0aW9uczogT3B0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihfdXBsb2FkU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NvbnZlcnNpb25TZXJ2aWNlOiBDb252ZXJzaW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xuICAgIHN1cGVyKF91cGxvYWRTZXJ2aWNlKTtcbiAgfVxuXG4gIHNlbGVjdEREKGVudHJ5KXtcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgREQnLGVudHJ5KTtcbiAgfVxuXG4gIHNlbGVjdEFsbEl0ZW1zKGNoZWNrZWQ6IGJvb2xlYW4pe1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQoY2hlY2tlZCk7XG5cbiAgICB0aGlzLmR5bmFtaWNPcHRpb25zID0gdGhpcy5wcmVwYXJlTXVsdGlwbGVDb252ZXJzaW9uVHlwZXMoKTtcbiAgfVxuXG4gIHNlbGVjdFNpbmdsZUl0ZW0oY2hlY2tlZDogYm9vbGVhbiwgZmlsZTogRXh0ZW5kZWRGaWxlTW9kZWwpe1xuICAgIC8vIFRPRE86IHJlZmFjdG9yP1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcihmID0+IGYuZ3VpZCA9PT0gZmlsZS5ndWlkKTtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlcy5sZW5ndGggPT09IDEpe1xuICAgICAgc2VsZWN0ZWRGaWxlc1swXS5zZWxlY3RlZCA9IGNoZWNrZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5keW5hbWljT3B0aW9ucyA9IHRoaXMucHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCk7XG4gIH1cblxuICBnZXRMYWJlbFN0cmluZygpe1xuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkubGVuZ3RoO1xuICAgICAgaWYgKHNlbGVjdGVkQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gJ0FkZCAnICsgc2VsZWN0ZWRDb3VudCArICcgc2VsZWN0ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdBZGQgc2VsZWN0ZWQnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCkge1xuICAgIGNvbnN0IGFsbFR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuc2VsZWN0ZWQpLmZvckVhY2goKGYpID0+IHtcbiAgICAgIGlmIChmLmNvbnZlcnNpb25UeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmFzc2lnbihbXSwgZi5jb252ZXJzaW9uVHlwZXMpO1xuICAgICAgICBhbGxUeXBlcy5wdXNoKHR5cGVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBsb25nZXN0QXJyYXkgPSBbXTtcbiAgICBhbGxUeXBlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZihpdGVtLmxlbmd0aCA+PSBsb25nZXN0QXJyYXkubGVuZ3RoKXtcbiAgICAgICAgbG9uZ2VzdEFycmF5ID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vYWRkIHdhcm5pbmdzXG4gICAgYWxsVHlwZXMuZm9yRWFjaCh0eXBlc0FyciA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9uZ2VzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IChsb25nZXN0QXJyYXlbaV0udmFsdWUpID8gbG9uZ2VzdEFycmF5W2ldLnZhbHVlIDogbG9uZ2VzdEFycmF5W2ldO1xuICAgICAgICAgIC8vIFRPRE86IHJlY29uc2lkZXIgc2Vjb25kIGNoZWNrXG4gICAgICAgICAgaWYgKHR5cGVzQXJyLmluZGV4T2YodHlwZSkgPT09IC0xICYmIHR5cGVzQXJyLmZpbHRlcih0ID0+IHQubmFtZSA9PT0gdHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGxvbmdlc3RBcnJheVtpXSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0eXBlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB0eXBlLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKCFsb25nZXN0QXJyYXlbaV0ud2FybmluZykge1xuICAgICAgICAgICAgICBsb25nZXN0QXJyYXlbaV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgbmFtZTogdHlwZSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHR5cGUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTsgXG5cbiAgICByZXR1cm4gbG9uZ2VzdEFycmF5O1xuICB9XG5cbiAgc2VsZWN0Rm9ybWF0KCRldmVudDogYW55LCBmaWxlOiBFeHRlbmRlZEZpbGVNb2RlbCkge1xuICAgIC8vIHRoZSBjYXNlIHdoZW4gd2Ugc2VsZWN0aW5nIGZvcm1hdCBpbmxpbmUgb24gdGhlIHNpbmdsZSBmaWxlXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQoZmFsc2UpO1xuICAgICAgZmlsZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX2Zvcm1hdCA9ICRldmVudC52YWx1ZTtcbiAgICBjb25zdCBjb252ZXJzaW9uSXRlbXMgPSBuZXcgQXJyYXk8Q29udmVyc2lvbkl0ZW1Nb2RlbD4oKTtcblxuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBpZiAoZi5zZWxlY3RlZCAmJiAhZi5pc0RpcmVjdG9yeSAmJiAhZi5kaXJlY3Rvcnkpe1xuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGYuZ3VpZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb25HdWlkID0gZi5ndWlkLnJlcGxhY2UoZXh0ZW5zaW9uLCB0aGlzLl9mb3JtYXQpO1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uRmlsZU5hbWUgPSBkZXN0aW5hdGlvbkd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuXG4gICAgICAgICAgY29uc3QgY29udmVyc2lvbkl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwgPSB7XG4gICAgICAgICAgICBndWlkOiBmLmd1aWQsXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGYuZGlyZWN0b3J5LFxuICAgICAgICAgICAgc2l6ZTogZi5zaXplLFxuICAgICAgICAgICAgbmFtZTogZi5uYW1lLFxuICAgICAgICAgICAgZGVzdGluYXRpb25UeXBlOiAkZXZlbnQudmFsdWUsXG4gICAgICAgICAgICBpc0RpcmVjdG9yeTogZi5pc0RpcmVjdG9yeSxcbiAgICAgICAgICAgIHNpemVTdHJpbmc6IHRoaXMuZ2V0U2l6ZShmLnNpemUpLFxuICAgICAgICAgICAgc291cmNlSWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKGYpLFxuICAgICAgICAgICAgc291cmNlRm9ybWF0TmFtZTogdGhpcy5nZXRGb3JtYXROYW1lKGYpLFxuICAgICAgICAgICAgZGVzdGluYXRpb25GaWxlTmFtZTogZGVzdGluYXRpb25GaWxlTmFtZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uRm9ybWF0TmFtZTogdGhpcy5nZXRGb3JtYXROYW1lKHtuYW1lOiBkZXN0aW5hdGlvbkZpbGVOYW1lLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpLFxuICAgICAgICAgICAgZGVzdGluYXRpb25JY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6IGRlc3RpbmF0aW9uRmlsZU5hbWUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbCksXG4gICAgICAgICAgICBjb252ZXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVE9ETzogbWF5YmUgdGhlcmUgaXMgYSBtb3JlIGJlYXV0eSB3YXk/XG4gICAgICAgICAgICBjb252ZXJ0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHdhcm5pbmc6IGYuY29udmVyc2lvblR5cGVzLmluZGV4T2YodGhpcy5fZm9ybWF0KSA9PT0gLTEgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29udmVyc2lvbkl0ZW1zLnB1c2goY29udmVyc2lvbkl0ZW0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdEl0ZW1zKGNvbnZlcnNpb25JdGVtcyk7XG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2Uuc2VsZWN0Rm9ybWF0KHRoaXMuX2Zvcm1hdC50b1VwcGVyQ2FzZSgpKTtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcblxuICAgIGlmICgkZXZlbnQud2FybmluZyl7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuSW5mb3JtYXRpb25NZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVGb3JtYXRPcHRpb24odmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIG5hbWU6IHZhbCxcbiAgICAgIGljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbih7bmFtZTogJ2R1bW15TmFtZS4nICsgdmFsLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpXG4gICAgfVxuICB9XG5cbiAgZm9ybWF0T3B0aW9ucyhmb3JtYXRzKSB7XG4gICAgaWYgKGZvcm1hdHMpIHtcbiAgICAgIGNvbnN0IGFsbFR5cGVzID0gbmV3IEFycmF5KCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWxsVHlwZXMucHVzaCh0aGlzLmNyZWF0ZUZvcm1hdE9wdGlvbihmb3JtYXRzW2ldKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsVHlwZXM7XG4gICAgfVxuICB9XG5cbiAgYW55SXRlbVNlbGVjdGVkKCkge1xuICAgIC8vIFRPRE86IHJlY29uc2lkZXIgc3VjaCBjaGVja3NcbiAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuc2VsZWN0ZWQpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWxsSXRlbXNTZWxlY3RlZCgpIHtcbiAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLmlzRGlyZWN0b3J5ICYmICFmaWxlLmRpcmVjdG9yeSkubGVuZ3RoID4gMCAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLmlzRGlyZWN0b3J5ICYmICFmaWxlLmRpcmVjdG9yeSAmJiBmaWxlLnNlbGVjdGVkKS5sZW5ndGggXG4gICAgICAgICA9PT0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkpLmxlbmd0aDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==