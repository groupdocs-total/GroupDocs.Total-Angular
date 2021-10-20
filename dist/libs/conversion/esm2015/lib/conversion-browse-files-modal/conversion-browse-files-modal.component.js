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
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n\n    <div class=\"select-all\">\n      <input type=\"checkbox\" [disabled]=\"!(this.files && this.files.length > 0)\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n    </div>\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n              {{getLabelString()}}\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n              <div class=\"text\">{{item.name}}</div>\n              <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                    title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\n                <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n              </div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBYSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckosT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHMUQsNEJBSUM7OztJQUhDLHNCQUFhOztJQUNiLHVCQUFXOztJQUNYLHlCQUFpQjs7QUFRbkIsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLHlCQUF5Qjs7Ozs7O0lBUWhGLFlBQVksY0FBa0MsRUFDcEMsa0JBQXFDLEVBQ3JDLGFBQTJCO1FBQ25DLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUZkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFOM0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFbEQsbUJBQWMsR0FBYSxFQUFFLENBQUM7SUFNOUIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFn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bWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCwgVXBsb2FkRmlsZXNTZXJ2aWNlLCBGaWxlTW9kZWwsIE1vZGFsU2VydmljZSwgQ29tbW9uTW9kYWxzIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbnZlcnNpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29udmVyc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7Q29udmVyc2lvbkl0ZW1Nb2RlbCwgRXh0ZW5kZWRGaWxlTW9kZWx9IGZyb20gXCIuLi9tb2RlbHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG4gIHdhcm5pbmc6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBleHRlbmRzIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9mb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0cztcbiAgQElucHV0KCkgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW107XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZHluYW1pY09wdGlvbnM6IE9wdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoX3VwbG9hZFNlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICBwcml2YXRlIF9jb252ZXJzaW9uU2VydmljZTogQ29udmVyc2lvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHtcbiAgICBzdXBlcihfdXBsb2FkU2VydmljZSk7XG4gIH1cblxuICBzZWxlY3RBbGxJdGVtcyhjaGVja2VkOiBib29sZWFuKXtcbiAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGNoZWNrZWQpO1xuXG4gICAgdGhpcy5keW5hbWljT3B0aW9ucyA9IHRoaXMucHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCk7XG4gIH1cblxuICBzZWxlY3RTaW5nbGVJdGVtKGNoZWNrZWQ6IGJvb2xlYW4sIGZpbGU6IEV4dGVuZGVkRmlsZU1vZGVsKXtcbiAgICAvLyBUT0RPOiByZWZhY3Rvcj9cbiAgICBjb25zdCBzZWxlY3RlZEZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoZiA9PiBmLmd1aWQgPT09IGZpbGUuZ3VpZCk7XG4gICAgaWYgKHNlbGVjdGVkRmlsZXMubGVuZ3RoID09PSAxKXtcbiAgICAgIHNlbGVjdGVkRmlsZXNbMF0uc2VsZWN0ZWQgPSBjaGVja2VkO1xuICAgIH1cblxuICAgIHRoaXMuZHluYW1pY09wdGlvbnMgPSB0aGlzLnByZXBhcmVNdWx0aXBsZUNvbnZlcnNpb25UeXBlcygpO1xuICB9XG5cbiAgZ2V0TGFiZWxTdHJpbmcoKXtcbiAgICBjb25zdCBsYWJlbCA9ICdBZGQgc2VsZWN0ZWQnXG5cbiAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuc2VsZWN0ZWQpLmxlbmd0aDtcbiAgICAgIHJldHVybiBzZWxlY3RlZENvdW50ID4gMCA/ICdBZGQgJyArIHNlbGVjdGVkQ291bnQgKyAnIHNlbGVjdGVkJyA6IGxhYmVsO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVNdWx0aXBsZUNvbnZlcnNpb25UeXBlcygpIHtcbiAgICBjb25zdCBhbGxUeXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5mb3JFYWNoKChmKSA9PiB7XG4gICAgICBpZiAoZi5jb252ZXJzaW9uVHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5hc3NpZ24oW10sIGYuY29udmVyc2lvblR5cGVzKTtcbiAgICAgICAgYWxsVHlwZXMucHVzaCh0eXBlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgbG9uZ2VzdEFycmF5ID0gW107XG4gICAgYWxsVHlwZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYoaXRlbS5sZW5ndGggPj0gbG9uZ2VzdEFycmF5Lmxlbmd0aCl7XG4gICAgICAgIGxvbmdlc3RBcnJheSA9IGl0ZW07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2FkZCB3YXJuaW5nc1xuICAgIGFsbFR5cGVzLmZvckVhY2godHlwZXNBcnIgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvbmdlc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSAobG9uZ2VzdEFycmF5W2ldLnZhbHVlKSA/IGxvbmdlc3RBcnJheVtpXS52YWx1ZSA6IGxvbmdlc3RBcnJheVtpXTtcbiAgICAgICAgICAvLyBUT0RPOiByZWNvbnNpZGVyIHNlY29uZCBjaGVja1xuICAgICAgICAgIGlmICh0eXBlc0Fyci5pbmRleE9mKHR5cGUpID09PSAtMSAmJiB0eXBlc0Fyci5maWx0ZXIodCA9PiB0Lm5hbWUgPT09IHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBsb25nZXN0QXJyYXlbaV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgbmFtZTogdHlwZSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbih7bmFtZTogJ2R1bW15TmFtZS4nICsgdHlwZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZighbG9uZ2VzdEFycmF5W2ldLndhcm5pbmcpIHtcbiAgICAgICAgICAgICAgbG9uZ2VzdEFycmF5W2ldID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICAgICAgICAgIG5hbWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB0eXBlLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7IFxuXG4gICAgcmV0dXJuIGxvbmdlc3RBcnJheTtcbiAgfVxuXG4gIHNlbGVjdEZvcm1hdCgkZXZlbnQ6IGFueSwgZmlsZTogRXh0ZW5kZWRGaWxlTW9kZWwpIHtcbiAgICAvLyB0aGUgY2FzZSB3aGVuIHdlIHNlbGVjdGluZyBmb3JtYXQgaW5saW5lIG9uIHRoZSBzaW5nbGUgZmlsZVxuICAgIGlmIChmaWxlKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGZhbHNlKTtcbiAgICAgIGZpbGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9mb3JtYXQgPSAkZXZlbnQudmFsdWU7XG4gICAgY29uc3QgY29udmVyc2lvbkl0ZW1zID0gbmV3IEFycmF5PENvbnZlcnNpb25JdGVtTW9kZWw+KCk7XG5cbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgaWYgKGYuc2VsZWN0ZWQgJiYgIWYuaXNEaXJlY3RvcnkgJiYgIWYuZGlyZWN0b3J5KXtcbiAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBmLmd1aWQucmVwbGFjZSgvXi4qXFwuLywgJycpO1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uR3VpZCA9IGYuZ3VpZC5yZXBsYWNlKGV4dGVuc2lvbiwgdGhpcy5fZm9ybWF0KTtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkZpbGVOYW1lID0gZGVzdGluYXRpb25HdWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcblxuICAgICAgICAgIGNvbnN0IGNvbnZlcnNpb25JdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsID0ge1xuICAgICAgICAgICAgZ3VpZDogZi5ndWlkLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiBmLmRpcmVjdG9yeSxcbiAgICAgICAgICAgIHNpemU6IGYuc2l6ZSxcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uVHlwZTogJGV2ZW50LnZhbHVlLFxuICAgICAgICAgICAgaXNEaXJlY3Rvcnk6IGYuaXNEaXJlY3RvcnksXG4gICAgICAgICAgICBzaXplU3RyaW5nOiB0aGlzLmdldFNpemUoZi5zaXplKSxcbiAgICAgICAgICAgIHNvdXJjZUljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbihmKSxcbiAgICAgICAgICAgIHNvdXJjZUZvcm1hdE5hbWU6IHRoaXMuZ2V0Rm9ybWF0TmFtZShmKSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uRmlsZU5hbWU6IGRlc3RpbmF0aW9uRmlsZU5hbWUsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkZvcm1hdE5hbWU6IHRoaXMuZ2V0Rm9ybWF0TmFtZSh7bmFtZTogZGVzdGluYXRpb25GaWxlTmFtZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uSWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiBkZXN0aW5hdGlvbkZpbGVOYW1lLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpLFxuICAgICAgICAgICAgY29udmVydGVkOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFRPRE86IG1heWJlIHRoZXJlIGlzIGEgbW9yZSBiZWF1dHkgd2F5P1xuICAgICAgICAgICAgY29udmVydGluZzogZmFsc2UsXG4gICAgICAgICAgICB3YXJuaW5nOiBmLmNvbnZlcnNpb25UeXBlcy5pbmRleE9mKHRoaXMuX2Zvcm1hdCkgPT09IC0xID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnZlcnNpb25JdGVtcy5wdXNoKGNvbnZlcnNpb25JdGVtKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RJdGVtcyhjb252ZXJzaW9uSXRlbXMpO1xuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdEZvcm1hdCh0aGlzLl9mb3JtYXQudG9VcHBlckNhc2UoKSk7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XG5cbiAgICBpZiAoJGV2ZW50Lndhcm5pbmcpe1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkluZm9ybWF0aW9uTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlRm9ybWF0T3B0aW9uKHZhbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICBuYW1lOiB2YWwsXG4gICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHZhbCwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKVxuICAgIH1cbiAgfVxuXG4gIGZvcm1hdE9wdGlvbnMoZm9ybWF0cykge1xuICAgIGlmIChmb3JtYXRzKSB7XG4gICAgICBjb25zdCBhbGxUeXBlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFsbFR5cGVzLnB1c2godGhpcy5jcmVhdGVGb3JtYXRPcHRpb24oZm9ybWF0c1tpXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbFR5cGVzO1xuICAgIH1cbiAgfVxuXG4gIGFueUl0ZW1TZWxlY3RlZCgpIHtcbiAgICAvLyBUT0RPOiByZWNvbnNpZGVyIHN1Y2ggY2hlY2tzXG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFsbEl0ZW1zU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkpLmxlbmd0aCA+IDAgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkgJiYgZmlsZS5zZWxlY3RlZCkubGVuZ3RoIFxuICAgICAgICAgPT09IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5KS5sZW5ndGg7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=