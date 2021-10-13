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
    /** @type {?} */
    Option.prototype.warning;
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
        /** @type {?} */
        var label = 'Add selected';
        if (this.files && this.files.length > 0) {
            /** @type {?} */
            var selectedCount = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return file.selected; })).length;
            return selectedCount > 0 ? 'Add ' + selectedCount + ' selected' : label;
        }
        else {
            return label;
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
                    converting: false,
                    warning: f.conversionTypes.indexOf(_this._format) === -1 ? true : false
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
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\r\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\r\n    <div class=\"dnd-wrapper\">\r\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n      <span class=\"text\">Drop file here to upload</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\r\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\r\n            (change)=\"handleFileInput($event.target.files)\">\r\n\r\n    <div class=\"select-all\">\r\n      <input type=\"checkbox\" [disabled]=\"!(this.files && this.files.length > 0)\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\r\n               (change)=\"selectAllItems($event.target.checked);\">\r\n    </div>\r\n    <div class=\"context\">\r\n      <div class=\"context-actions\">\r\n        <gd-drop-down>\r\n          <gd-drop-down-toggle>\r\n            <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\r\n              {{getLabelString()}}\r\n            </gd-button>\r\n          </gd-drop-down-toggle>\r\n          <gd-drop-down-items>\r\n            <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\r\n              <div class=\"text\">{{item.name}}</div>\r\n              <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\r\n                    title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\r\n                <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\r\n              </div>\r\n            </gd-drop-down-item>\r\n          </gd-drop-down-items>\r\n        </gd-drop-down>\r\n        <gd-drop-down>\r\n          <gd-drop-down-toggle>\r\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\r\n              Upload file\r\n            </gd-button>\r\n          </gd-drop-down-toggle>\r\n          <gd-drop-down-items>\r\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\r\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\r\n              <div class=\"text\">{{item.name}}</div>\r\n            </gd-drop-down-item>\r\n          </gd-drop-down-items>\r\n        </gd-drop-down>\r\n      </div>\r\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\r\n        <div class=\"upload-url\">\r\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\r\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\r\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\r\n    <div class=\"header-name\">FILE</div>\r\n    <div class=\"header-size\">SIZE</div>\r\n  </div>\r\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\r\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\r\n      <div class=\"list-files-body\">\r\n        <div class=\"go-up\" (click)=\"goUp()\">\r\n          <div class=\"go-up-icon\">\r\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\r\n          </div>\r\n          <div class=\"go-up-dots\">..</div>\r\n        </div>\r\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\r\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\r\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\r\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\r\n          </div>\r\n          <div class=\"file-description\">\r\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\r\n            <div class=\"file-name-format\">\r\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\r\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\r\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\r\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\r\n              <gd-drop-down-toggle>\r\n                <gd-button [icon]=\"'plus'\">\r\n                </gd-button>\r\n              </gd-drop-down-toggle>\r\n              <gd-drop-down-items>\r\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\r\n                  <div class=\"text\">{{item.name}}</div>\r\n                </gd-drop-down-item>\r\n              </gd-drop-down-items>\r\n            </gd-drop-down>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\r\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      &nbsp;Loading... Please wait.\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                    styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:68px;width:90%;line-height:60px}.header-size{padding-right:84px;line-height:60px}.file-size,.header-size{width:7%;color:#777;text-align:left}.file-size{font-size:12px;width:7%;line-height:79px}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-description .ng-fa-icon{font-size:32px}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%;margin-top:24px;margin-right:24px}.upload-panel .select-all{height:37px;margin:0 16px 0 15px;width:37px;line-height:44px;text-align:center}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;-webkit-box-pack:center;justify-content:center;font-size:14px}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-actions ::ng-deep .button.primary{width:117px;background-color:#4b566c}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive{width:106px;background-color:#959da5}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive ::ng-deep .text{color:#3e4e5a}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive ::ng-deep fa-icon{color:#3e4e5a}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.upload-panel gd-drop-down ::ng-deep .drop-down-item .text{margin-left:7px;text-transform:uppercase;color:#6e6e6e}.upload-panel gd-drop-down ::ng-deep .drop-down-item:hover{background-color:#4b566c}.upload-panel gd-drop-down ::ng-deep .drop-down-item:hover *{color:#fff}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.go-up{cursor:pointer;display:-webkit-box;display:flex;font-size:26px;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 68px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-drag-n-drop-icon{margin-top:-50px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:37px;margin:21px 16px 21px 15px;width:37px;line-height:44px;text-align:center}.gd-file-checkbox.empty{width:37px}.file-format-select{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:36px;margin-right:24px}.file-format-select ::ng-deep .button{padding:0;width:36px;margin:0;font-size:14px}.file-format-select ::ng-deep .button .text{padding:0}.file-format-select ::ng-deep .show .button{color:#959da5}.file-format-select gd-drop-down ::ng-deep .drop-down-item{width:96px}.file-format-select gd-drop-down ::ng-deep .drop-down-item .text{padding-left:7px;text-transform:uppercase;color:#6e6e6e}.file-format-select gd-drop-down ::ng-deep .drop-down-item:hover{background-color:#4b566c}.file-format-select gd-drop-down ::ng-deep .drop-down-item:hover *{color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:-webkit-box;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:-webkit-box;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}.file-size,.list-files-header{display:none}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLEVBQWEsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRzFELDRCQUlDOzs7SUFIQyxzQkFBYTs7SUFDYix1QkFBVzs7SUFDWCx5QkFBaUI7O0FBR25CO0lBS3lELCtEQUF5QjtJQVFoRiw2Q0FBWSxjQUFrQyxFQUNwQyxrQkFBcUMsRUFDckMsYUFBMkI7UUFGckMsWUFHRSxrQkFBTSxjQUFjLENBQUMsU0FDdEI7UUFIUyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLG1CQUFhLEdBQWIsYUFBYSxDQUFjO1FBTjNCLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWxELG9CQUFjLEdBQWEsRUFBRSxDQUFDOztJQU05QixDQUFDOzs7OztJQUVELDREQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELDhEQUFnQjs7Ozs7SUFBaEIsVUFBaUIs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QUFLOzRCQUNMLE1BQU07O0lBcUtULDBDQUFDO0NBQUEsQUE5S0QsQ0FLeUQseUJBQXlCLEdBeUtqRjtTQXpLWSxtQ0FBbUM7Ozs7OztJQUM5QyxzREFBd0I7O0lBQ3hCLHNEQUFROztJQUNSLG9EQUFvQzs7SUFDcEMsd0RBQWtEOztJQUVsRCw2REFBOEI7Ozs7O0lBRzVCLGlFQUE2Qzs7Ozs7SUFDN0MsNERBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCwgVXBsb2FkRmlsZXNTZXJ2aWNlLCBGaWxlTW9kZWwsIE1vZGFsU2VydmljZSwgQ29tbW9uTW9kYWxzIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ29udmVyc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb252ZXJzaW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbnZlcnNpb25JdGVtTW9kZWwsIEV4dGVuZGVkRmlsZU1vZGVsfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgd2FybmluZzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBleHRlbmRzIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX2Zvcm1hdDogc3RyaW5nO1xyXG4gIGZvcm1hdHM7XHJcbiAgQElucHV0KCkgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW107XHJcbiAgQE91dHB1dCgpIHNlbGVjdEFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgZHluYW1pY09wdGlvbnM6IE9wdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jb252ZXJzaW9uU2VydmljZTogQ29udmVyc2lvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xyXG4gICAgc3VwZXIoX3VwbG9hZFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWxsSXRlbXMoY2hlY2tlZDogYm9vbGVhbil7XHJcbiAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGNoZWNrZWQpO1xyXG5cclxuICAgIHRoaXMuZHluYW1pY09wdGlvbnMgPSB0aGlzLnByZXBhcmVNdWx0aXBsZUNvbnZlcnNpb25UeXBlcygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0U2luZ2xlSXRlbShjaGVja2VkOiBib29sZWFuLCBmaWxlOiBFeHRlbmRlZEZpbGVNb2RlbCl7XHJcbiAgICAvLyBUT0RPOiByZWZhY3Rvcj9cclxuICAgIGNvbnN0IHNlbGVjdGVkRmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcihmID0+IGYuZ3VpZCA9PT0gZmlsZS5ndWlkKTtcclxuICAgIGlmIChzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gMSl7XHJcbiAgICAgIHNlbGVjdGVkRmlsZXNbMF0uc2VsZWN0ZWQgPSBjaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZHluYW1pY09wdGlvbnMgPSB0aGlzLnByZXBhcmVNdWx0aXBsZUNvbnZlcnNpb25UeXBlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxTdHJpbmcoKXtcclxuICAgIGNvbnN0IGxhYmVsID0gJ0FkZCBzZWxlY3RlZCdcclxuXHJcbiAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gc2VsZWN0ZWRDb3VudCA+IDAgPyAnQWRkICcgKyBzZWxlY3RlZENvdW50ICsgJyBzZWxlY3RlZCcgOiBsYWJlbDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCkge1xyXG4gICAgY29uc3QgYWxsVHlwZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuc2VsZWN0ZWQpLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgaWYgKGYuY29udmVyc2lvblR5cGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5hc3NpZ24oW10sIGYuY29udmVyc2lvblR5cGVzKTtcclxuICAgICAgICBhbGxUeXBlcy5wdXNoKHR5cGVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGxvbmdlc3RBcnJheSA9IFtdO1xyXG4gICAgYWxsVHlwZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZihpdGVtLmxlbmd0aCA+PSBsb25nZXN0QXJyYXkubGVuZ3RoKXtcclxuICAgICAgICBsb25nZXN0QXJyYXkgPSBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2FkZCB3YXJuaW5nc1xyXG4gICAgYWxsVHlwZXMuZm9yRWFjaCh0eXBlc0FyciA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb25nZXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHR5cGUgPSAobG9uZ2VzdEFycmF5W2ldLnZhbHVlKSA/IGxvbmdlc3RBcnJheVtpXS52YWx1ZSA6IGxvbmdlc3RBcnJheVtpXTtcclxuICAgICAgICAgIC8vIFRPRE86IHJlY29uc2lkZXIgc2Vjb25kIGNoZWNrXHJcbiAgICAgICAgICBpZiAodHlwZXNBcnIuaW5kZXhPZih0eXBlKSA9PT0gLTEgJiYgdHlwZXNBcnIuZmlsdGVyKHQgPT4gdC5uYW1lID09PSB0eXBlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICBsb25nZXN0QXJyYXlbaV0gPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB0eXBlLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCFsb25nZXN0QXJyYXlbaV0ud2FybmluZykge1xyXG4gICAgICAgICAgICAgIGxvbmdlc3RBcnJheVtpXSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB0eXBlLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pOyBcclxuXHJcbiAgICByZXR1cm4gbG9uZ2VzdEFycmF5O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rm9ybWF0KCRldmVudDogYW55LCBmaWxlOiBFeHRlbmRlZEZpbGVNb2RlbCkge1xyXG4gICAgLy8gdGhlIGNhc2Ugd2hlbiB3ZSBzZWxlY3RpbmcgZm9ybWF0IGlubGluZSBvbiB0aGUgc2luZ2xlIGZpbGVcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQoZmFsc2UpO1xyXG4gICAgICBmaWxlLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5fZm9ybWF0ID0gJGV2ZW50LnZhbHVlO1xyXG4gICAgY29uc3QgY29udmVyc2lvbkl0ZW1zID0gbmV3IEFycmF5PENvbnZlcnNpb25JdGVtTW9kZWw+KCk7XHJcblxyXG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgaWYgKGYuc2VsZWN0ZWQgJiYgIWYuaXNEaXJlY3RvcnkgJiYgIWYuZGlyZWN0b3J5KXtcclxuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGYuZ3VpZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XHJcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkd1aWQgPSBmLmd1aWQucmVwbGFjZShleHRlbnNpb24sIHRoaXMuX2Zvcm1hdCk7XHJcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkZpbGVOYW1lID0gZGVzdGluYXRpb25HdWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBjb252ZXJzaW9uSXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCA9IHtcclxuICAgICAgICAgICAgZ3VpZDogZi5ndWlkLFxyXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGYuZGlyZWN0b3J5LFxyXG4gICAgICAgICAgICBzaXplOiBmLnNpemUsXHJcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICAgICAgZGVzdGluYXRpb25UeXBlOiAkZXZlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGlzRGlyZWN0b3J5OiBmLmlzRGlyZWN0b3J5LFxyXG4gICAgICAgICAgICBzaXplU3RyaW5nOiB0aGlzLmdldFNpemUoZi5zaXplKSxcclxuICAgICAgICAgICAgc291cmNlSWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKGYpLFxyXG4gICAgICAgICAgICBzb3VyY2VGb3JtYXROYW1lOiB0aGlzLmdldEZvcm1hdE5hbWUoZiksXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uRmlsZU5hbWU6IGRlc3RpbmF0aW9uRmlsZU5hbWUsXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uRm9ybWF0TmFtZTogdGhpcy5nZXRGb3JtYXROYW1lKHtuYW1lOiBkZXN0aW5hdGlvbkZpbGVOYW1lLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpLFxyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbih7bmFtZTogZGVzdGluYXRpb25GaWxlTmFtZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKSxcclxuICAgICAgICAgICAgY29udmVydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gVE9ETzogbWF5YmUgdGhlcmUgaXMgYSBtb3JlIGJlYXV0eSB3YXk/XHJcbiAgICAgICAgICAgIGNvbnZlcnRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB3YXJuaW5nOiBmLmNvbnZlcnNpb25UeXBlcy5pbmRleE9mKHRoaXMuX2Zvcm1hdCkgPT09IC0xID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnZlcnNpb25JdGVtcy5wdXNoKGNvbnZlcnNpb25JdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdEl0ZW1zKGNvbnZlcnNpb25JdGVtcyk7XHJcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RGb3JtYXQodGhpcy5fZm9ybWF0LnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XHJcblxyXG4gICAgaWYgKCRldmVudC53YXJuaW5nKXtcclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkluZm9ybWF0aW9uTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtYXRPcHRpb24odmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiB2YWwsXHJcbiAgICAgIG5hbWU6IHZhbCxcclxuICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB2YWwsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdE9wdGlvbnMoZm9ybWF0cykge1xyXG4gICAgaWYgKGZvcm1hdHMpIHtcclxuICAgICAgY29uc3QgYWxsVHlwZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYWxsVHlwZXMucHVzaCh0aGlzLmNyZWF0ZUZvcm1hdE9wdGlvbihmb3JtYXRzW2ldKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFsbFR5cGVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW55SXRlbVNlbGVjdGVkKCkge1xyXG4gICAgLy8gVE9ETzogcmVjb25zaWRlciBzdWNoIGNoZWNrc1xyXG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuc2VsZWN0ZWQpLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFsbEl0ZW1zU2VsZWN0ZWQoKSB7XHJcbiAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLmlzRGlyZWN0b3J5ICYmICFmaWxlLmRpcmVjdG9yeSkubGVuZ3RoID4gMCAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5ICYmIGZpbGUuc2VsZWN0ZWQpLmxlbmd0aCBcclxuICAgICAgICAgPT09IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5KS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19