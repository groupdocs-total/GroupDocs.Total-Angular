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
                    converting: false
                };
                conversionItems.push(conversionItem);
            }
        }));
        this._conversionService.selectItems(conversionItems);
        this._modalService.close(CommonModals.BrowseFiles);
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
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n             (change)=\"handleFileInput($event.target.files)\">\n\n      <div class=\"select-all\">\n        <input type=\"checkbox\" class=\"gd-select-all gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n      </div>\n      <div class=\"context\">\n        <div class=\"context-actions\">\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n                {{getLabelString()}}\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n                <fa-icon [icon]=\"['far', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n                <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                     title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\n                  <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n                </div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n                Upload file\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n                <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n        </div>\n        <div class=\"context-panel\">\n          <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n            <input class=\"url-input\" placeholder=\"http://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n            <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n              <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <fa-icon [icon]=\"['far', item.icon]\"></fa-icon>\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}#gd-browse-section{width:1024px;height:628px}.list-files-header{display:flex;width:100%;color:#acacac;font-size:13px;flex-direction:row}.header-name{padding-left:70px}.header-size{padding-left:707px}.file-size{margin-top:20px;width:112px;color:#777}.file-description fa-icon{cursor:pointer;height:32px;font-size:32px;margin:10px 13px 22px 0}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px;padding-left:70px;height:19px;margin:8px 0 10px}.upload-panel{display:flex;position:relative;width:100%}.upload-panel .select-all{width:16px;padding:22px 23px 0 25px}.upload-panel .context{display:flex;flex-direction:column;width:100%;margin-top:20px;margin-right:20px}.upload-panel .context .context-actions{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-panel{display:flex;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description{cursor:pointer;overflow:hidden;display:flex;width:inherit}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.go-up-dots{font-size:16px;margin:0 0 0 12px;height:19px}.go-up-icon{width:30px;height:30px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;display:flex;flex-direction:column;margin-top:16px;cursor:pointer;color:#6e6e6e}.file-format{font-size:10px}.list-files-lines{border-top:1px solid #ccc;display:flex;flex-direction:row;width:100%;height:65px}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:inherit;height:inherit;opacity:.9;z-index:1;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:20px;margin:22px 23px 0 25px}.gd-file-checkbox.empty{width:25px}.file-format-select{display:flex;align-items:center;padding:5px;width:46px;margin-right:20px}.file-format-select ::ng-deep .button{padding:0;width:36px}.file-format-select ::ng-deep .show .button{background-color:#25c2d4;color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-select-all{position:relative;top:6px;margin-right:20px}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%}.file-size,.list-files-header{display:none}.context-actions{justify-content:space-between}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBYSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckosT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHMUQsNEJBR0M7OztJQUZDLHNCQUFhOztJQUNiLHVCQUFXOztBQVFiLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSx5QkFBeUI7Ozs7OztJQVFoRixZQUFZLGNBQWtDLEVBQ3BDLGtCQUFxQyxFQUNyQyxhQUEyQjtRQUNuQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFGZCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBTjNCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWxELG1CQUFjLEdBQWEsRUFBRSxDQUFDO0lBTTlCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsY0FB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RyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxNQUFNO29CQUN2RixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsTUFBTSxDQUFDO1NBQy9FOztZQUNJLE9BQU8sS0FBSyxDQUFDO0lBQ3BCLENBQUM7OztZQTFLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsKzZLQUE2RDs7YUFFOUQ7Ozs7WUFibUMsa0JBQWtCO1lBQzdDLGlCQUFpQjtZQUR5QyxZQUFZOzs7b0JBaUI1RSxLQUFLO3dCQUNMLE1BQU07Ozs7Ozs7SUFIUCxzREFBd0I7O0lBQ3hCLHNEQUFROztJQUNSLG9EQUFvQzs7SUFDcEMsd0RBQWtEOztJQUVsRCw2REFBOEI7Ozs7O0lBRzVCLGlFQUE2Qzs7Ozs7SUFDN0MsNERBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsIFVwbG9hZEZpbGVzU2VydmljZSwgRmlsZU1vZGVsLCBNb2RhbFNlcnZpY2UsIENvbW1vbk1vZGFscyB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb252ZXJzaW9uU2VydmljZSB9IGZyb20gJy4uL2NvbnZlcnNpb24uc2VydmljZSc7XG5pbXBvcnQge0NvbnZlcnNpb25JdGVtTW9kZWwsIEV4dGVuZGVkRmlsZU1vZGVsfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbkJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZm9ybWF0OiBzdHJpbmc7XG4gIGZvcm1hdHM7XG4gIEBJbnB1dCgpIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdO1xuICBAT3V0cHV0KCkgc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGR5bmFtaWNPcHRpb25zOiBPcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfY29udmVyc2lvblNlcnZpY2U6IENvbnZlcnNpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoX3VwbG9hZFNlcnZpY2UpO1xuICB9XG5cbiAgc2VsZWN0REQoZW50cnkpe1xuICAgIGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBERCcsZW50cnkpO1xuICB9XG5cbiAgc2VsZWN0QWxsSXRlbXMoY2hlY2tlZDogYm9vbGVhbil7XG4gICAgdGhpcy5zZWxlY3RBbGwuZW1pdChjaGVja2VkKTtcblxuICAgIHRoaXMuZHluYW1pY09wdGlvbnMgPSB0aGlzLnByZXBhcmVNdWx0aXBsZUNvbnZlcnNpb25UeXBlcygpO1xuICB9XG5cbiAgc2VsZWN0U2luZ2xlSXRlbShjaGVja2VkOiBib29sZWFuLCBmaWxlOiBFeHRlbmRlZEZpbGVNb2RlbCl7XG4gICAgLy8gVE9ETzogcmVmYWN0b3I/XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKGYgPT4gZi5ndWlkID09PSBmaWxlLmd1aWQpO1xuICAgIGlmIChzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBzZWxlY3RlZEZpbGVzWzBdLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICB9XG5cbiAgICB0aGlzLmR5bmFtaWNPcHRpb25zID0gdGhpcy5wcmVwYXJlTXVsdGlwbGVDb252ZXJzaW9uVHlwZXMoKTtcbiAgfVxuXG4gIGdldExhYmVsU3RyaW5nKCl7XG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZENvdW50ID0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5sZW5ndGg7XG4gICAgICBpZiAoc2VsZWN0ZWRDb3VudCA+IDApIHtcbiAgICAgIHJldHVybiAnQWRkICcgKyBzZWxlY3RlZENvdW50ICsgJyBzZWxlY3RlZCdcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJ0FkZCBzZWxlY3RlZCdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcmVwYXJlTXVsdGlwbGVDb252ZXJzaW9uVHlwZXMoKSB7XG4gICAgY29uc3QgYWxsVHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgaWYgKGYuY29udmVyc2lvblR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBPYmplY3QuYXNzaWduKFtdLCBmLmNvbnZlcnNpb25UeXBlcyk7XG4gICAgICAgIGFsbFR5cGVzLnB1c2godHlwZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGxvbmdlc3RBcnJheSA9IFtdO1xuICAgIGFsbFR5cGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmKGl0ZW0ubGVuZ3RoID49IGxvbmdlc3RBcnJheS5sZW5ndGgpe1xuICAgICAgICBsb25nZXN0QXJyYXkgPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9hZGQgd2FybmluZ3NcbiAgICBhbGxUeXBlcy5mb3JFYWNoKHR5cGVzQXJyID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb25nZXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gKGxvbmdlc3RBcnJheVtpXS52YWx1ZSkgPyBsb25nZXN0QXJyYXlbaV0udmFsdWUgOiBsb25nZXN0QXJyYXlbaV07XG4gICAgICAgICAgLy8gVE9ETzogcmVjb25zaWRlciBzZWNvbmQgY2hlY2tcbiAgICAgICAgICBpZiAodHlwZXNBcnIuaW5kZXhPZih0eXBlKSA9PT0gLTEgJiYgdHlwZXNBcnIuZmlsdGVyKHQgPT4gdC5uYW1lID09PSB0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgbG9uZ2VzdEFycmF5W2ldID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICAgICAgICAgIG5hbWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHR5cGUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoIWxvbmdlc3RBcnJheVtpXS53YXJuaW5nKSB7XG4gICAgICAgICAgICAgIGxvbmdlc3RBcnJheVtpXSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0eXBlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbih7bmFtZTogJ2R1bW15TmFtZS4nICsgdHlwZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pOyBcblxuICAgIHJldHVybiBsb25nZXN0QXJyYXk7XG4gIH1cblxuICBzZWxlY3RGb3JtYXQoJGV2ZW50OiBhbnksIGZpbGU6IEV4dGVuZGVkRmlsZU1vZGVsKSB7XG4gICAgLy8gdGhlIGNhc2Ugd2hlbiB3ZSBzZWxlY3RpbmcgZm9ybWF0IGlubGluZSBvbiB0aGUgc2luZ2xlIGZpbGVcbiAgICBpZiAoZmlsZSkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwuZW1pdChmYWxzZSk7XG4gICAgICBmaWxlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fZm9ybWF0ID0gJGV2ZW50LnZhbHVlO1xuICAgIGNvbnN0IGNvbnZlcnNpb25JdGVtcyA9IG5ldyBBcnJheTxDb252ZXJzaW9uSXRlbU1vZGVsPigpO1xuXG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGlmIChmLnNlbGVjdGVkICYmICFmLmlzRGlyZWN0b3J5ICYmICFmLmRpcmVjdG9yeSl7XG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZi5ndWlkLnJlcGxhY2UoL14uKlxcLi8sICcnKTtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkd1aWQgPSBmLmd1aWQucmVwbGFjZShleHRlbnNpb24sIHRoaXMuX2Zvcm1hdCk7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb25GaWxlTmFtZSA9IGRlc3RpbmF0aW9uR3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG5cbiAgICAgICAgICBjb25zdCBjb252ZXJzaW9uSXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCA9IHtcbiAgICAgICAgICAgIGd1aWQ6IGYuZ3VpZCxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogZi5kaXJlY3RvcnksXG4gICAgICAgICAgICBzaXplOiBmLnNpemUsXG4gICAgICAgICAgICBuYW1lOiBmLm5hbWUsXG4gICAgICAgICAgICBkZXN0aW5hdGlvblR5cGU6ICRldmVudC52YWx1ZSxcbiAgICAgICAgICAgIGlzRGlyZWN0b3J5OiBmLmlzRGlyZWN0b3J5LFxuICAgICAgICAgICAgc2l6ZVN0cmluZzogdGhpcy5nZXRTaXplKGYuc2l6ZSksXG4gICAgICAgICAgICBzb3VyY2VJY29uOiB0aGlzLmdldEZvcm1hdEljb24oZiksXG4gICAgICAgICAgICBzb3VyY2VGb3JtYXROYW1lOiB0aGlzLmdldEZvcm1hdE5hbWUoZiksXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkZpbGVOYW1lOiBkZXN0aW5hdGlvbkZpbGVOYW1lLFxuICAgICAgICAgICAgZGVzdGluYXRpb25Gb3JtYXROYW1lOiB0aGlzLmdldEZvcm1hdE5hbWUoe25hbWU6IGRlc3RpbmF0aW9uRmlsZU5hbWUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbCksXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbih7bmFtZTogZGVzdGluYXRpb25GaWxlTmFtZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKSxcbiAgICAgICAgICAgIGNvbnZlcnRlZDogZmFsc2UsXG4gICAgICAgICAgICAvLyBUT0RPOiBtYXliZSB0aGVyZSBpcyBhIG1vcmUgYmVhdXR5IHdheT9cbiAgICAgICAgICAgIGNvbnZlcnRpbmc6IGZhbHNlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnZlcnNpb25JdGVtcy5wdXNoKGNvbnZlcnNpb25JdGVtKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RJdGVtcyhjb252ZXJzaW9uSXRlbXMpO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXMpO1xuICB9XG5cbiAgY3JlYXRlRm9ybWF0T3B0aW9uKHZhbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICBuYW1lOiB2YWwsXG4gICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHZhbCwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKVxuICAgIH1cbiAgfVxuXG4gIGZvcm1hdE9wdGlvbnMoZm9ybWF0cykge1xuICAgIGlmIChmb3JtYXRzKSB7XG4gICAgICBjb25zdCBhbGxUeXBlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFsbFR5cGVzLnB1c2godGhpcy5jcmVhdGVGb3JtYXRPcHRpb24oZm9ybWF0c1tpXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbFR5cGVzO1xuICAgIH1cbiAgfVxuXG4gIGFueUl0ZW1TZWxlY3RlZCgpIHtcbiAgICAvLyBUT0RPOiByZWNvbnNpZGVyIHN1Y2ggY2hlY2tzXG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFsbEl0ZW1zU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkpLmxlbmd0aCA+IDAgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkgJiYgZmlsZS5zZWxlY3RlZCkubGVuZ3RoIFxuICAgICAgICAgPT09IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5KS5sZW5ndGg7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=