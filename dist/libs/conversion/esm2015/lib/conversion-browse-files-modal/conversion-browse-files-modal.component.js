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
        /** @type {?} */
        const label = 'Add selected';
        if (this.files && this.files.length > 0) {
            /** @type {?} */
            const selectedCount = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            file => file.selected)).length;
            return selectedCount > 0 ? 'Add ' + selectedCount + ' selected' : label;
        }
        else {
            return label;
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
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\r\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\r\n    <div class=\"dnd-wrapper\">\r\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n      <span class=\"text\">Drop file here to upload</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\r\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\r\n            (change)=\"handleFileInput($event.target.files)\">\r\n\r\n    <div class=\"select-all\">\r\n      <input type=\"checkbox\" [disabled]=\"!(this.files && this.files.length > 0)\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\r\n               (change)=\"selectAllItems($event.target.checked);\">\r\n    </div>\r\n    <div class=\"context\">\r\n      <div class=\"context-actions\">\r\n        <gd-drop-down>\r\n          <gd-drop-down-toggle>\r\n            <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\r\n              {{getLabelString()}}\r\n            </gd-button>\r\n          </gd-drop-down-toggle>\r\n          <gd-drop-down-items>\r\n            <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\r\n              <div class=\"text\">{{item.name}}</div>\r\n              <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\r\n                    title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\r\n                <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\r\n              </div>\r\n            </gd-drop-down-item>\r\n          </gd-drop-down-items>\r\n        </gd-drop-down>\r\n        <gd-drop-down>\r\n          <gd-drop-down-toggle>\r\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\r\n              Upload file\r\n            </gd-button>\r\n          </gd-drop-down-toggle>\r\n          <gd-drop-down-items>\r\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\r\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\r\n              <div class=\"text\">{{item.name}}</div>\r\n            </gd-drop-down-item>\r\n          </gd-drop-down-items>\r\n        </gd-drop-down>\r\n      </div>\r\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\r\n        <div class=\"upload-url\">\r\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\r\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\r\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\r\n    <div class=\"header-name\">FILE</div>\r\n    <div class=\"header-size\">SIZE</div>\r\n  </div>\r\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\r\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\r\n      <div class=\"list-files-body\">\r\n        <div class=\"go-up\" (click)=\"goUp()\">\r\n          <div class=\"go-up-icon\">\r\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\r\n          </div>\r\n          <div class=\"go-up-dots\">..</div>\r\n        </div>\r\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\r\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\r\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\r\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\r\n          </div>\r\n          <div class=\"file-description\">\r\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\r\n            <div class=\"file-name-format\">\r\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\r\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\r\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\r\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\r\n              <gd-drop-down-toggle>\r\n                <gd-button [icon]=\"'plus'\">\r\n                </gd-button>\r\n              </gd-drop-down-toggle>\r\n              <gd-drop-down-items>\r\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\r\n                  <div class=\"text\">{{item.name}}</div>\r\n                </gd-drop-down-item>\r\n              </gd-drop-down-items>\r\n            </gd-drop-down>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\r\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      &nbsp;Loading... Please wait.\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:68px;width:90%;line-height:60px}.header-size{padding-right:84px;line-height:60px}.file-size,.header-size{width:7%;color:#777;text-align:left}.file-size{font-size:12px;width:7%;line-height:79px}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-description .ng-fa-icon{font-size:32px}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%;margin-top:24px;margin-right:24px}.upload-panel .select-all{height:37px;margin:0 16px 0 15px;width:37px;line-height:44px;text-align:center}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;-webkit-box-pack:center;justify-content:center;font-size:14px}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-actions ::ng-deep .button.primary{width:117px;background-color:#4b566c}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive{width:106px;background-color:#959da5}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive ::ng-deep .text{color:#3e4e5a}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive ::ng-deep fa-icon{color:#3e4e5a}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.upload-panel gd-drop-down ::ng-deep .drop-down-item .text{margin-left:7px;text-transform:uppercase;color:#6e6e6e}.upload-panel gd-drop-down ::ng-deep .drop-down-item:hover{background-color:#4b566c}.upload-panel gd-drop-down ::ng-deep .drop-down-item:hover *{color:#fff}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.go-up{cursor:pointer;display:-webkit-box;display:flex;font-size:26px;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 68px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-drag-n-drop-icon{margin-top:-50px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:37px;margin:21px 16px 21px 15px;width:37px;line-height:44px;text-align:center}.gd-file-checkbox.empty{width:37px}.file-format-select{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:36px;margin-right:24px}.file-format-select ::ng-deep .button{padding:0;width:36px;margin:0;font-size:14px}.file-format-select ::ng-deep .button .text{padding:0}.file-format-select ::ng-deep .show .button{color:#959da5}.file-format-select gd-drop-down ::ng-deep .drop-down-item{width:96px}.file-format-select gd-drop-down ::ng-deep .drop-down-item .text{padding-left:7px;text-transform:uppercase;color:#6e6e6e}.file-format-select gd-drop-down ::ng-deep .drop-down-item:hover{background-color:#4b566c}.file-format-select gd-drop-down ::ng-deep .drop-down-item:hover *{color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:-webkit-box;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:-webkit-box;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}.file-size,.list-files-header{display:none}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBYSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckosT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHMUQsNEJBSUM7OztJQUhDLHNCQUFhOztJQUNiLHVCQUFXOztJQUNYLHlCQUFpQjs7QUFRbkIsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLHlCQUF5Qjs7Ozs7O0lBUWhGLFlBQVksY0FBa0MsRUFDcEMsa0JBQXFDLEVBQ3JDLGFBQTJCO1FBQ25DLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUZkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFOM0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFbEQsbUJBQWMsR0FBYSxFQUFFLENBQUM7SUFNOUIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFn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bWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBVcGxvYWRGaWxlc1NlcnZpY2UsIEZpbGVNb2RlbCwgTW9kYWxTZXJ2aWNlLCBDb21tb25Nb2RhbHMgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uU2VydmljZSB9IGZyb20gJy4uL2NvbnZlcnNpb24uc2VydmljZSc7XHJcbmltcG9ydCB7Q29udmVyc2lvbkl0ZW1Nb2RlbCwgRXh0ZW5kZWRGaWxlTW9kZWx9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueTtcclxuICB3YXJuaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGV4dGVuZHMgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfZm9ybWF0OiBzdHJpbmc7XHJcbiAgZm9ybWF0cztcclxuICBASW5wdXQoKSBmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXTtcclxuICBAT3V0cHV0KCkgc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBkeW5hbWljT3B0aW9uczogT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoX3VwbG9hZFNlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgIHByaXZhdGUgX2NvbnZlcnNpb25TZXJ2aWNlOiBDb252ZXJzaW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihfdXBsb2FkU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RBbGxJdGVtcyhjaGVja2VkOiBib29sZWFuKXtcclxuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQoY2hlY2tlZCk7XHJcblxyXG4gICAgdGhpcy5keW5hbWljT3B0aW9ucyA9IHRoaXMucHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTaW5nbGVJdGVtKGNoZWNrZWQ6IGJvb2xlYW4sIGZpbGU6IEV4dGVuZGVkRmlsZU1vZGVsKXtcclxuICAgIC8vIFRPRE86IHJlZmFjdG9yP1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKGYgPT4gZi5ndWlkID09PSBmaWxlLmd1aWQpO1xyXG4gICAgaWYgKHNlbGVjdGVkRmlsZXMubGVuZ3RoID09PSAxKXtcclxuICAgICAgc2VsZWN0ZWRGaWxlc1swXS5zZWxlY3RlZCA9IGNoZWNrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5keW5hbWljT3B0aW9ucyA9IHRoaXMucHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbFN0cmluZygpe1xyXG4gICAgY29uc3QgbGFiZWwgPSAnQWRkIHNlbGVjdGVkJ1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZENvdW50ID0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBzZWxlY3RlZENvdW50ID4gMCA/ICdBZGQgJyArIHNlbGVjdGVkQ291bnQgKyAnIHNlbGVjdGVkJyA6IGxhYmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlTXVsdGlwbGVDb252ZXJzaW9uVHlwZXMoKSB7XHJcbiAgICBjb25zdCBhbGxUeXBlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICBpZiAoZi5jb252ZXJzaW9uVHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmFzc2lnbihbXSwgZi5jb252ZXJzaW9uVHlwZXMpO1xyXG4gICAgICAgIGFsbFR5cGVzLnB1c2godHlwZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgbG9uZ2VzdEFycmF5ID0gW107XHJcbiAgICBhbGxUeXBlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmKGl0ZW0ubGVuZ3RoID49IGxvbmdlc3RBcnJheS5sZW5ndGgpe1xyXG4gICAgICAgIGxvbmdlc3RBcnJheSA9IGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vYWRkIHdhcm5pbmdzXHJcbiAgICBhbGxUeXBlcy5mb3JFYWNoKHR5cGVzQXJyID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvbmdlc3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9IChsb25nZXN0QXJyYXlbaV0udmFsdWUpID8gbG9uZ2VzdEFycmF5W2ldLnZhbHVlIDogbG9uZ2VzdEFycmF5W2ldO1xyXG4gICAgICAgICAgLy8gVE9ETzogcmVjb25zaWRlciBzZWNvbmQgY2hlY2tcclxuICAgICAgICAgIGlmICh0eXBlc0Fyci5pbmRleE9mKHR5cGUpID09PSAtMSAmJiB0eXBlc0Fyci5maWx0ZXIodCA9PiB0Lm5hbWUgPT09IHR5cGUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIGxvbmdlc3RBcnJheVtpXSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHR5cGUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIWxvbmdlc3RBcnJheVtpXS53YXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgbG9uZ2VzdEFycmF5W2ldID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHR5cGUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7IFxyXG5cclxuICAgIHJldHVybiBsb25nZXN0QXJyYXk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGb3JtYXQoJGV2ZW50OiBhbnksIGZpbGU6IEV4dGVuZGVkRmlsZU1vZGVsKSB7XHJcbiAgICAvLyB0aGUgY2FzZSB3aGVuIHdlIHNlbGVjdGluZyBmb3JtYXQgaW5saW5lIG9uIHRoZSBzaW5nbGUgZmlsZVxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbGwuZW1pdChmYWxzZSk7XHJcbiAgICAgIGZpbGUuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLl9mb3JtYXQgPSAkZXZlbnQudmFsdWU7XHJcbiAgICBjb25zdCBjb252ZXJzaW9uSXRlbXMgPSBuZXcgQXJyYXk8Q29udmVyc2lvbkl0ZW1Nb2RlbD4oKTtcclxuXHJcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICBpZiAoZi5zZWxlY3RlZCAmJiAhZi5pc0RpcmVjdG9yeSAmJiAhZi5kaXJlY3Rvcnkpe1xyXG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZi5ndWlkLnJlcGxhY2UoL14uKlxcLi8sICcnKTtcclxuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uR3VpZCA9IGYuZ3VpZC5yZXBsYWNlKGV4dGVuc2lvbiwgdGhpcy5fZm9ybWF0KTtcclxuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uRmlsZU5hbWUgPSBkZXN0aW5hdGlvbkd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGNvbnZlcnNpb25JdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsID0ge1xyXG4gICAgICAgICAgICBndWlkOiBmLmd1aWQsXHJcbiAgICAgICAgICAgIGRpcmVjdG9yeTogZi5kaXJlY3RvcnksXHJcbiAgICAgICAgICAgIHNpemU6IGYuc2l6ZSxcclxuICAgICAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgICAgICBkZXN0aW5hdGlvblR5cGU6ICRldmVudC52YWx1ZSxcclxuICAgICAgICAgICAgaXNEaXJlY3Rvcnk6IGYuaXNEaXJlY3RvcnksXHJcbiAgICAgICAgICAgIHNpemVTdHJpbmc6IHRoaXMuZ2V0U2l6ZShmLnNpemUpLFxyXG4gICAgICAgICAgICBzb3VyY2VJY29uOiB0aGlzLmdldEZvcm1hdEljb24oZiksXHJcbiAgICAgICAgICAgIHNvdXJjZUZvcm1hdE5hbWU6IHRoaXMuZ2V0Rm9ybWF0TmFtZShmKSxcclxuICAgICAgICAgICAgZGVzdGluYXRpb25GaWxlTmFtZTogZGVzdGluYXRpb25GaWxlTmFtZSxcclxuICAgICAgICAgICAgZGVzdGluYXRpb25Gb3JtYXROYW1lOiB0aGlzLmdldEZvcm1hdE5hbWUoe25hbWU6IGRlc3RpbmF0aW9uRmlsZU5hbWUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbCksXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uSWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiBkZXN0aW5hdGlvbkZpbGVOYW1lLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpLFxyXG4gICAgICAgICAgICBjb252ZXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBUT0RPOiBtYXliZSB0aGVyZSBpcyBhIG1vcmUgYmVhdXR5IHdheT9cclxuICAgICAgICAgICAgY29udmVydGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHdhcm5pbmc6IGYuY29udmVyc2lvblR5cGVzLmluZGV4T2YodGhpcy5fZm9ybWF0KSA9PT0gLTEgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29udmVyc2lvbkl0ZW1zLnB1c2goY29udmVyc2lvbkl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2Uuc2VsZWN0SXRlbXMoY29udmVyc2lvbkl0ZW1zKTtcclxuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdEZvcm1hdCh0aGlzLl9mb3JtYXQudG9VcHBlckNhc2UoKSk7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcclxuXHJcbiAgICBpZiAoJGV2ZW50Lndhcm5pbmcpe1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuSW5mb3JtYXRpb25NZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm1hdE9wdGlvbih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHZhbCxcclxuICAgICAgbmFtZTogdmFsLFxyXG4gICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHZhbCwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0T3B0aW9ucyhmb3JtYXRzKSB7XHJcbiAgICBpZiAoZm9ybWF0cykge1xyXG4gICAgICBjb25zdCBhbGxUeXBlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhbGxUeXBlcy5wdXNoKHRoaXMuY3JlYXRlRm9ybWF0T3B0aW9uKGZvcm1hdHNbaV0pKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYWxsVHlwZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbnlJdGVtU2VsZWN0ZWQoKSB7XHJcbiAgICAvLyBUT0RPOiByZWNvbnNpZGVyIHN1Y2ggY2hlY2tzXHJcbiAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWxsSXRlbXNTZWxlY3RlZCgpIHtcclxuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5KS5sZW5ndGggPiAwICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkgJiYgZmlsZS5zZWxlY3RlZCkubGVuZ3RoIFxyXG4gICAgICAgICA9PT0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkpLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=