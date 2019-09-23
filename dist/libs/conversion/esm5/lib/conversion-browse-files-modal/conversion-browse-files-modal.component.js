/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ConversionBrowseFilesModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ConversionBrowseFilesModalComponent, _super);
    function ConversionBrowseFilesModalComponent(_uploadService, _conversionService, _modalService) {
        var _this = _super.call(this, _uploadService) || this;
        _this._conversionService = _conversionService;
        _this._modalService = _modalService;
        _this.selectAll = new EventEmitter();
        _this.dynamicOptions = [];
        return _this;
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.selectDD = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        console.log('SELECTED DD', entry);
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.selectAllItems = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.selectAll.emit(checked);
        this.dynamicOptions = this.prepareMultipleConversionTypes();
    };
    /**
     * @param {?} checked
     * @param {?} file
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.selectSingleItem = /**
     * @param {?} checked
     * @param {?} file
     * @return {?}
     */
    function (checked, file) {
        // TODO: refactor?
        /** @type {?} */
        var selectedFiles = this.files.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.guid === file.guid; }));
        if (selectedFiles.length === 1) {
            selectedFiles[0].selected = checked;
        }
        this.dynamicOptions = this.prepareMultipleConversionTypes();
    };
    /**
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.getLabelString = /**
     * @return {?}
     */
    function () {
        if (this.files && this.files.length > 0) {
            /** @type {?} */
            var selectedCount = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return file.selected; })).length;
            if (selectedCount > 0) {
                return 'Add ' + selectedCount + ' selected';
            }
            else {
                return 'Add selected';
            }
        }
    };
    /**
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.prepareMultipleConversionTypes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var allTypes = [];
        this.files.filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.selected; })).forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (f.conversionTypes.length > 0) {
                /** @type {?} */
                var types = Object.assign([], f.conversionTypes);
                allTypes.push(types);
            }
        }));
        /** @type {?} */
        var longestArray = [];
        allTypes.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.length >= longestArray.length) {
                longestArray = item;
            }
        }));
        //add warnings
        allTypes.forEach((/**
         * @param {?} typesArr
         * @return {?}
         */
        function (typesArr) {
            var _loop_1 = function (i) {
                /** @type {?} */
                var type = (longestArray[i].value) ? longestArray[i].value : longestArray[i];
                // TODO: reconsider second check
                if (typesArr.indexOf(type) === -1 && typesArr.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) { return t.name === type; })).length === 0) {
                    longestArray[i] = {
                        value: type,
                        name: type,
                        warning: true,
                        icon: _this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + type, directory: false })))
                    };
                }
                else {
                    if (!longestArray[i].warning) {
                        longestArray[i] = {
                            value: type,
                            name: type,
                            warning: false,
                            icon: _this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + type, directory: false })))
                        };
                    }
                }
            };
            for (var i = 0; i < longestArray.length; i++) {
                _loop_1(i);
            }
        }));
        return longestArray;
    };
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.selectFormat = /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    function ($event, file) {
        var _this = this;
        // the case when we selecting format inline on the single file
        if (file) {
            this.selectAll.emit(false);
            file.selected = true;
        }
        this._format = $event.value;
        /** @type {?} */
        var conversionItems = new Array();
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (f.selected && !f.isDirectory && !f.directory) {
                /** @type {?} */
                var extension = f.guid.replace(/^.*\./, '');
                /** @type {?} */
                var destinationGuid = f.guid.replace(extension, _this._format);
                /** @type {?} */
                var destinationFileName = destinationGuid.replace(/^.*[\\\/]/, '');
                /** @type {?} */
                var conversionItem = {
                    guid: f.guid,
                    directory: f.directory,
                    size: f.size,
                    name: f.name,
                    destinationType: $event.value,
                    isDirectory: f.isDirectory,
                    sizeString: _this.getSize(f.size),
                    sourceIcon: _this.getFormatIcon(f),
                    sourceFormatName: _this.getFormatName(f),
                    destinationFileName: destinationFileName,
                    destinationFormatName: _this.getFormatName((/** @type {?} */ ({ name: destinationFileName, directory: false }))),
                    destinationIcon: _this.getFormatIcon((/** @type {?} */ ({ name: destinationFileName, directory: false }))),
                    converted: false,
                    // TODO: maybe there is a more beauty way?
                    converting: false
                };
                conversionItems.push(conversionItem);
            }
        }));
        this._conversionService.selectItems(conversionItems);
        this._modalService.close(CommonModals.BrowseFiles);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.createFormatOption = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return {
            value: val,
            name: val,
            icon: this.getFormatIcon((/** @type {?} */ ({ name: 'dummyName.' + val, directory: false })))
        };
    };
    /**
     * @param {?} formats
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.formatOptions = /**
     * @param {?} formats
     * @return {?}
     */
    function (formats) {
        if (formats) {
            /** @type {?} */
            var allTypes = new Array();
            for (var i = 0; i < formats.length; i++) {
                allTypes.push(this.createFormatOption(formats[i]));
            }
            return allTypes;
        }
    };
    /**
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.anyItemSelected = /**
     * @return {?}
     */
    function () {
        // TODO: reconsider such checks
        if (this.files && this.files.length > 0) {
            return this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return file.selected; })).length > 0;
        }
        else
            return false;
    };
    /**
     * @return {?}
     */
    ConversionBrowseFilesModalComponent.prototype.allItemsSelected = /**
     * @return {?}
     */
    function () {
        if (this.files && this.files.filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return !file.isDirectory && !file.directory; })).length > 0 && this.files.length > 0) {
            return this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return !file.isDirectory && !file.directory && file.selected; })).length
                === this.files.filter((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) { return !file.isDirectory && !file.directory; })).length;
        }
        else
            return false;
    };
    ConversionBrowseFilesModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-conversion-browse-files-modal',
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n             (change)=\"handleFileInput($event.target.files)\">\n\n      <div class=\"select-all\">\n        <input type=\"checkbox\" class=\"gd-select-all gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n      </div>\n      <div class=\"context\">\n        <div class=\"context-actions\">\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n                {{getLabelString()}}\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n                <fa-icon [icon]=\"['far', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n                <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                     title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\n                  <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n                </div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n                Upload file\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n                <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n        </div>\n        <div class=\"context-panel\">\n          <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n            <input class=\"url-input\" placeholder=\"http://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n            <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n              <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <fa-icon [icon]=\"['far', item.icon]\"></fa-icon>\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}#gd-browse-section{width:1024px;height:628px}.list-files-header{display:flex;width:100%;color:#acacac;font-size:13px;flex-direction:row}.header-name{padding-left:70px}.header-size{padding-left:707px}.file-size{margin-top:20px;width:112px;color:#777}.file-description fa-icon{cursor:pointer;height:32px;font-size:32px;margin:10px 13px 22px 0}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px;padding-left:70px;height:19px;margin:8px 0 10px}.upload-panel{display:flex;position:relative;width:100%}.upload-panel .select-all{width:16px;padding:22px 23px 0 25px}.upload-panel .context{display:flex;flex-direction:column;width:100%;margin-top:20px;margin-right:20px}.upload-panel .context .context-actions{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-panel{display:flex;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description{cursor:pointer;overflow:hidden;display:flex;width:inherit}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.go-up-dots{font-size:16px;margin:0 0 0 12px;height:19px}.go-up-icon{width:30px;height:30px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;display:flex;flex-direction:column;margin-top:16px;cursor:pointer;color:#6e6e6e}.file-format{font-size:10px}.list-files-lines{border-top:1px solid #ccc;display:flex;flex-direction:row;width:100%;height:65px}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:inherit;height:inherit;opacity:.9;z-index:1;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:20px;margin:22px 23px 0 25px}.gd-file-checkbox.empty{width:25px}.file-format-select{display:flex;align-items:center;padding:5px;width:46px;margin-right:20px}.file-format-select ::ng-deep .button{padding:0;width:36px}.file-format-select ::ng-deep .show .button{background-color:#25c2d4;color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-select-all{position:relative;top:6px;margin-right:20px}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%}.file-size,.list-files-header{display:none}.context-actions{justify-content:space-between}}"]
                }] }
    ];
    /** @nocollapse */
    ConversionBrowseFilesModalComponent.ctorParameters = function () { return [
        { type: UploadFilesService },
        { type: ConversionService },
        { type: ModalService }
    ]; };
    ConversionBrowseFilesModalComponent.propDecorators = {
        files: [{ type: Input }],
        selectAll: [{ type: Output }]
    };
    return ConversionBrowseFilesModalComponent;
}(BrowseFilesModalComponent));
export { ConversionBrowseFilesModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLEVBQWEsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRzFELDRCQUdDOzs7SUFGQyxzQkFBYTs7SUFDYix1QkFBVzs7QUFHYjtJQUt5RCwrREFBeUI7SUFRaEYsNkNBQVksY0FBa0MsRUFDcEMsa0JBQXFDLEVBQ3JDLGFBQTJCO1FBRnJDLFlBR0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBSFMsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxtQkFBYSxHQUFiLGFBQWEsQ0FBYztRQU4zQixlQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVsRCxvQkFBYyxHQUFhLEVBQUUsQ0FBQzs7SUFNOUIsQ0FBQzs7Ozs7SUFFRCxzREFBUTs7OztJQUFSLFVBQVMsS0FBSztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsNERBQWM7Ozs7SUFBZCxVQUFlLE9BQWdCO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxj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QUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBcEMsQ0FBb0MsRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQXJELENBQXFELEVBQUMsQ0FBQyxNQUFNO29CQUN2RixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFwQyxDQUFvQyxFQUFDLENBQUMsTUFBTSxDQUFDO1NBQy9FOztZQUNJLE9BQU8sS0FBSyxDQUFDO0lBQ3BCLENBQUM7O2dCQTFLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsKzZLQUE2RDs7aUJBRTlEOzs7O2dCQWJtQyxrQkFBa0I7Z0JBQzdDLGlCQUFpQjtnQkFEeUMsWUFBWTs7O3dCQWlCNUUsS0FBSzs0QkFDTCxNQUFNOztJQWtLVCwwQ0FBQztDQUFBLEFBM0tELENBS3lELHlCQUF5QixHQXNLakY7U0F0S1ksbUNBQW1DOzs7Ozs7SUFDOUMsc0RBQXdCOztJQUN4QixzREFBUTs7SUFDUixvREFBb0M7O0lBQ3BDLHdEQUFrRDs7SUFFbEQsNkRBQThCOzs7OztJQUc1QixpRUFBNkM7Ozs7O0lBQzdDLDREQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBVcGxvYWRGaWxlc1NlcnZpY2UsIEZpbGVNb2RlbCwgTW9kYWxTZXJ2aWNlLCBDb21tb25Nb2RhbHMgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29udmVyc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb252ZXJzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtDb252ZXJzaW9uSXRlbU1vZGVsLCBFeHRlbmRlZEZpbGVNb2RlbH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGV4dGVuZHMgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Zvcm1hdDogc3RyaW5nO1xuICBmb3JtYXRzO1xuICBASW5wdXQoKSBmaWxlczogRXh0ZW5kZWRGaWxlTW9kZWxbXTtcbiAgQE91dHB1dCgpIHNlbGVjdEFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBkeW5hbWljT3B0aW9uczogT3B0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihfdXBsb2FkU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NvbnZlcnNpb25TZXJ2aWNlOiBDb252ZXJzaW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xuICAgIHN1cGVyKF91cGxvYWRTZXJ2aWNlKTtcbiAgfVxuXG4gIHNlbGVjdEREKGVudHJ5KXtcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgREQnLGVudHJ5KTtcbiAgfVxuXG4gIHNlbGVjdEFsbEl0ZW1zKGNoZWNrZWQ6IGJvb2xlYW4pe1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQoY2hlY2tlZCk7XG5cbiAgICB0aGlzLmR5bmFtaWNPcHRpb25zID0gdGhpcy5wcmVwYXJlTXVsdGlwbGVDb252ZXJzaW9uVHlwZXMoKTtcbiAgfVxuXG4gIHNlbGVjdFNpbmdsZUl0ZW0oY2hlY2tlZDogYm9vbGVhbiwgZmlsZTogRXh0ZW5kZWRGaWxlTW9kZWwpe1xuICAgIC8vIFRPRE86IHJlZmFjdG9yP1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcihmID0+IGYuZ3VpZCA9PT0gZmlsZS5ndWlkKTtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlcy5sZW5ndGggPT09IDEpe1xuICAgICAgc2VsZWN0ZWRGaWxlc1swXS5zZWxlY3RlZCA9IGNoZWNrZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5keW5hbWljT3B0aW9ucyA9IHRoaXMucHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCk7XG4gIH1cblxuICBnZXRMYWJlbFN0cmluZygpe1xuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkubGVuZ3RoO1xuICAgICAgaWYgKHNlbGVjdGVkQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gJ0FkZCAnICsgc2VsZWN0ZWRDb3VudCArICcgc2VsZWN0ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdBZGQgc2VsZWN0ZWQnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCkge1xuICAgIGNvbnN0IGFsbFR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuc2VsZWN0ZWQpLmZvckVhY2goKGYpID0+IHtcbiAgICAgIGlmIChmLmNvbnZlcnNpb25UeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmFzc2lnbihbXSwgZi5jb252ZXJzaW9uVHlwZXMpO1xuICAgICAgICBhbGxUeXBlcy5wdXNoKHR5cGVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBsb25nZXN0QXJyYXkgPSBbXTtcbiAgICBhbGxUeXBlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZihpdGVtLmxlbmd0aCA+PSBsb25nZXN0QXJyYXkubGVuZ3RoKXtcbiAgICAgICAgbG9uZ2VzdEFycmF5ID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vYWRkIHdhcm5pbmdzXG4gICAgYWxsVHlwZXMuZm9yRWFjaCh0eXBlc0FyciA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9uZ2VzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IChsb25nZXN0QXJyYXlbaV0udmFsdWUpID8gbG9uZ2VzdEFycmF5W2ldLnZhbHVlIDogbG9uZ2VzdEFycmF5W2ldO1xuICAgICAgICAgIC8vIFRPRE86IHJlY29uc2lkZXIgc2Vjb25kIGNoZWNrXG4gICAgICAgICAgaWYgKHR5cGVzQXJyLmluZGV4T2YodHlwZSkgPT09IC0xICYmIHR5cGVzQXJyLmZpbHRlcih0ID0+IHQubmFtZSA9PT0gdHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGxvbmdlc3RBcnJheVtpXSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0eXBlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB0eXBlLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKCFsb25nZXN0QXJyYXlbaV0ud2FybmluZykge1xuICAgICAgICAgICAgICBsb25nZXN0QXJyYXlbaV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgbmFtZTogdHlwZSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHR5cGUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTsgXG5cbiAgICByZXR1cm4gbG9uZ2VzdEFycmF5O1xuICB9XG5cbiAgc2VsZWN0Rm9ybWF0KCRldmVudDogYW55LCBmaWxlOiBFeHRlbmRlZEZpbGVNb2RlbCkge1xuICAgIC8vIHRoZSBjYXNlIHdoZW4gd2Ugc2VsZWN0aW5nIGZvcm1hdCBpbmxpbmUgb24gdGhlIHNpbmdsZSBmaWxlXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQoZmFsc2UpO1xuICAgICAgZmlsZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX2Zvcm1hdCA9ICRldmVudC52YWx1ZTtcbiAgICBjb25zdCBjb252ZXJzaW9uSXRlbXMgPSBuZXcgQXJyYXk8Q29udmVyc2lvbkl0ZW1Nb2RlbD4oKTtcblxuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBpZiAoZi5zZWxlY3RlZCAmJiAhZi5pc0RpcmVjdG9yeSAmJiAhZi5kaXJlY3Rvcnkpe1xuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGYuZ3VpZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb25HdWlkID0gZi5ndWlkLnJlcGxhY2UoZXh0ZW5zaW9uLCB0aGlzLl9mb3JtYXQpO1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uRmlsZU5hbWUgPSBkZXN0aW5hdGlvbkd1aWQucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuXG4gICAgICAgICAgY29uc3QgY29udmVyc2lvbkl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwgPSB7XG4gICAgICAgICAgICBndWlkOiBmLmd1aWQsXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGYuZGlyZWN0b3J5LFxuICAgICAgICAgICAgc2l6ZTogZi5zaXplLFxuICAgICAgICAgICAgbmFtZTogZi5uYW1lLFxuICAgICAgICAgICAgZGVzdGluYXRpb25UeXBlOiAkZXZlbnQudmFsdWUsXG4gICAgICAgICAgICBpc0RpcmVjdG9yeTogZi5pc0RpcmVjdG9yeSxcbiAgICAgICAgICAgIHNpemVTdHJpbmc6IHRoaXMuZ2V0U2l6ZShmLnNpemUpLFxuICAgICAgICAgICAgc291cmNlSWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKGYpLFxuICAgICAgICAgICAgc291cmNlRm9ybWF0TmFtZTogdGhpcy5nZXRGb3JtYXROYW1lKGYpLFxuICAgICAgICAgICAgZGVzdGluYXRpb25GaWxlTmFtZTogZGVzdGluYXRpb25GaWxlTmFtZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uRm9ybWF0TmFtZTogdGhpcy5nZXRGb3JtYXROYW1lKHtuYW1lOiBkZXN0aW5hdGlvbkZpbGVOYW1lLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpLFxuICAgICAgICAgICAgZGVzdGluYXRpb25JY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6IGRlc3RpbmF0aW9uRmlsZU5hbWUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbCksXG4gICAgICAgICAgICBjb252ZXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVE9ETzogbWF5YmUgdGhlcmUgaXMgYSBtb3JlIGJlYXV0eSB3YXk/XG4gICAgICAgICAgICBjb252ZXJ0aW5nOiBmYWxzZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb252ZXJzaW9uSXRlbXMucHVzaChjb252ZXJzaW9uSXRlbSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2Uuc2VsZWN0SXRlbXMoY29udmVyc2lvbkl0ZW1zKTtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcbiAgfVxuXG4gIGNyZWF0ZUZvcm1hdE9wdGlvbih2YWw6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgbmFtZTogdmFsLFxuICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB2YWwsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcbiAgICB9XG4gIH1cblxuICBmb3JtYXRPcHRpb25zKGZvcm1hdHMpIHtcbiAgICBpZiAoZm9ybWF0cykge1xuICAgICAgY29uc3QgYWxsVHlwZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhbGxUeXBlcy5wdXNoKHRoaXMuY3JlYXRlRm9ybWF0T3B0aW9uKGZvcm1hdHNbaV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGxUeXBlcztcbiAgICB9XG4gIH1cblxuICBhbnlJdGVtU2VsZWN0ZWQoKSB7XG4gICAgLy8gVE9ETzogcmVjb25zaWRlciBzdWNoIGNoZWNrc1xuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhbGxJdGVtc1NlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5KS5sZW5ndGggPiAwICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5ICYmIGZpbGUuc2VsZWN0ZWQpLmxlbmd0aCBcbiAgICAgICAgID09PSB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLmlzRGlyZWN0b3J5ICYmICFmaWxlLmRpcmVjdG9yeSkubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19