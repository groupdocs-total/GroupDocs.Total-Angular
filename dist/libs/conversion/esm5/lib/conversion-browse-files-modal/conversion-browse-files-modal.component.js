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
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n\n    <div class=\"select-all\">\n      <input type=\"checkbox\" [disabled]=\"!(this.files && this.files.length > 0)\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n    </div>\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n              {{getLabelString()}}\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n              <div class=\"text\">{{item.name}}</div>\n              <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                    title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\n                <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n              </div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLEVBQWEsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRzFELDRCQUlDOzs7SUFIQyxzQkFBYTs7SUFDYix1QkFBVzs7SUFDWCx5QkFBaUI7O0FBR25CO0lBS3lELCtEQUF5QjtJQVFoRiw2Q0FBWSxjQUFrQyxFQUNwQyxrQkFBcUMsRUFDckMsYUFBMkI7UUFGckMsWUFHRSxrQkFBTSxjQUFjLENBQUMsU0FDdEI7UUFIUyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLG1CQUFhLEdBQWIsYUFBYSxDQUFjO1FBTjNCLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWxELG9CQUFjLEdBQWEsRUFBRSxDQUFDOztJQU05QixDQUFDOzs7OztJQUVELDREQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELDhEQUFnQjs7Ozs7SUFBaEIsVUFBaUIsT0FBZ0IsRUFBRSxJQUF1Qjs7O1lBRWxELGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBcEIsQ0FBb0IsRUFBQztRQUNsRSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQzdCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsNERBQWM7OztJQUFkOztZQUNRLEtBQUssR0FBRyxjQUFjO1FBRTVCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUNqQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxFQUFiLENBQWEsRUFBQyxDQUFDLE1BQU07WUFDckUsT0FBTyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3pFO2FBRUQ7WUFDRSxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7OztJQUVELDRFQUE4Qjs7O0lBQTlCO1FBQUEsaUJBMkNDOztZQTFDTyxRQUFRLEdBQUcsRUFBRTtRQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxFQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7b0JBQzFCLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDO2dCQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7O1lBRUMsWUFBWSxHQUFHLEVBQUU7UUFDckIsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQUk7WUFDcEIsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUM7Z0JBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWM7UUFDZCxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsUUFBUTtvQ0FDWixDQUFDOztvQkFDRixJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLGdDQUFnQztnQkFDaEMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWYsQ0FBZSxFQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDckYsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHO3dCQUNoQixLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsSUFBSTt3QkFDVixPQUFPLEVBQUUsSUFBSTt3QkFDYixJQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBQSxFQUFDLElBQUksRUFBRSxZQUFZLEdBQUcsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsRUFBYSxDQUFDO3FCQUNyRixDQUFDO2lCQUNMO3FCQUFNO29CQUNMLElBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO3dCQUMzQixZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUc7NEJBQ2hCLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxJQUFJOzRCQUNWLE9BQU8sRUFBRSxLQUFLOzRCQUNkLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFBLEVBQUMsSUFBSSxFQUFFLFlBQVksR0FBRyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQyxFQUFhLENBQUM7eUJBQ3JGLENBQUM7cUJBQ0g7aUJBQ0Y7O1lBbkJILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFBbkMsQ0FBQzthQW9CVDtRQUNMLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRUQsMERBQVk7Ozs7O0lBQVosVUFBYSxNQUFXLEVBQUUsSUFBdUI7UUFBakQsaUJBOENDO1FBN0NDLDhEQUE4RDtRQUM5RCxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztZQUN0QixlQUFlLEdBQUcsSUFBSSxLQUFLLEVBQXVCO1FBRXhELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQzs7b0JBQ3pDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDOztvQkFDdkMsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDOztvQkFDekQsbUJBQW1CLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDOztvQkFFOUQsY0FBYyxHQUF3QjtvQkFDMUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO29CQUNaLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUztvQkFDdEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO29CQUNaLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtvQkFDWixlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQzdCLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVztvQkFDMUIsVUFBVSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDaEMsVUFBVSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxnQkFBZ0IsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDdkMsbUJBQW1CLEVBQUUsbUJBQW1CO29CQUN4QyxxQkFBcUIsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFBLEVBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsRUFBYSxDQUFDO29CQUNyRyxlQUFlLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBQSxFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLEVBQWEsQ0FBQztvQkFDL0YsU0FBUyxFQUFFLEtBQUs7O29CQUVoQixVQUFVLEVBQUUsS0FBSztvQkFDakIsT0FBTyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO2lCQUN2RTtnQkFFRCxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0wsQ0FBQyxFQUFDLENBQUE7UUFFRixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7OztJQUVELGdFQUFrQjs7OztJQUFsQixVQUFtQixHQUFXO1FBQzVCLE9BQU87WUFDTCxLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQUEsRUFBQyxJQUFJLEVBQUUsWUFBWSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLEVBQWEsQ0FBQztTQUNwRixDQUFBO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyREFBYTs7OztJQUFiLFVBQWMsT0FBTztRQUNuQixJQUFJLE9BQU8sRUFBRTs7Z0JBQ0wsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFO1lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsT0FBTyxRQUFRLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7O0lBRUQsNkRBQWU7OztJQUFmO1FBQ0UsK0JBQStCO1FBQy9CLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUM1RDs7WUFDSSxPQUFPLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsOERBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFwQyxDQUFvQyxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckgsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBckQsQ0FBcUQsRUFBQyxDQUFDLE1BQU07b0JBQ3ZGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztnQkFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQXBDLENBQW9DLEVBQUMsQ0FBQyxNQUFNLENBQUM7U0FDL0U7O1lBQ0ksT0FBTyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Z0JBN0tGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1Qyxpd0tBQTZEOztpQkFFOUQ7Ozs7Z0JBZG1DLGtCQUFrQjtnQkFDN0MsaUJBQWlCO2dCQUR5QyxZQUFZOzs7d0JBa0I1RSxLQUFLOzRCQUNMLE1BQU07O0lBcUtULDBDQUFDO0NBQUEsQUE5S0QsQ0FLeUQseUJBQXlCLEdBeUtqRjtTQXpLWSxtQ0FBbUM7Ozs7OztJQUM5QyxzREFBd0I7O0lBQ3hCLHNEQUFROztJQUNSLG9EQUFvQzs7SUFDcEMsd0RBQWtEOztJQUVsRCw2REFBOEI7Ozs7O0lBRzVCLGlFQUE2Qzs7Ozs7SUFDN0MsNERBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsIFVwbG9hZEZpbGVzU2VydmljZSwgRmlsZU1vZGVsLCBNb2RhbFNlcnZpY2UsIENvbW1vbk1vZGFscyB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb252ZXJzaW9uU2VydmljZSB9IGZyb20gJy4uL2NvbnZlcnNpb24uc2VydmljZSc7XG5pbXBvcnQge0NvbnZlcnNpb25JdGVtTW9kZWwsIEV4dGVuZGVkRmlsZU1vZGVsfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICB3YXJuaW5nOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbkJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZm9ybWF0OiBzdHJpbmc7XG4gIGZvcm1hdHM7XG4gIEBJbnB1dCgpIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdO1xuICBAT3V0cHV0KCkgc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGR5bmFtaWNPcHRpb25zOiBPcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfY29udmVyc2lvblNlcnZpY2U6IENvbnZlcnNpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoX3VwbG9hZFNlcnZpY2UpO1xuICB9XG5cbiAgc2VsZWN0QWxsSXRlbXMoY2hlY2tlZDogYm9vbGVhbil7XG4gICAgdGhpcy5zZWxlY3RBbGwuZW1pdChjaGVja2VkKTtcblxuICAgIHRoaXMuZHluYW1pY09wdGlvbnMgPSB0aGlzLnByZXBhcmVNdWx0aXBsZUNvbnZlcnNpb25UeXBlcygpO1xuICB9XG5cbiAgc2VsZWN0U2luZ2xlSXRlbShjaGVja2VkOiBib29sZWFuLCBmaWxlOiBFeHRlbmRlZEZpbGVNb2RlbCl7XG4gICAgLy8gVE9ETzogcmVmYWN0b3I/XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKGYgPT4gZi5ndWlkID09PSBmaWxlLmd1aWQpO1xuICAgIGlmIChzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBzZWxlY3RlZEZpbGVzWzBdLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICB9XG5cbiAgICB0aGlzLmR5bmFtaWNPcHRpb25zID0gdGhpcy5wcmVwYXJlTXVsdGlwbGVDb252ZXJzaW9uVHlwZXMoKTtcbiAgfVxuXG4gIGdldExhYmVsU3RyaW5nKCl7XG4gICAgY29uc3QgbGFiZWwgPSAnQWRkIHNlbGVjdGVkJ1xuXG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZENvdW50ID0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5sZW5ndGg7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRDb3VudCA+IDAgPyAnQWRkICcgKyBzZWxlY3RlZENvdW50ICsgJyBzZWxlY3RlZCcgOiBsYWJlbDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlTXVsdGlwbGVDb252ZXJzaW9uVHlwZXMoKSB7XG4gICAgY29uc3QgYWxsVHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgaWYgKGYuY29udmVyc2lvblR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBPYmplY3QuYXNzaWduKFtdLCBmLmNvbnZlcnNpb25UeXBlcyk7XG4gICAgICAgIGFsbFR5cGVzLnB1c2godHlwZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGxvbmdlc3RBcnJheSA9IFtdO1xuICAgIGFsbFR5cGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmKGl0ZW0ubGVuZ3RoID49IGxvbmdlc3RBcnJheS5sZW5ndGgpe1xuICAgICAgICBsb25nZXN0QXJyYXkgPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9hZGQgd2FybmluZ3NcbiAgICBhbGxUeXBlcy5mb3JFYWNoKHR5cGVzQXJyID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb25nZXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gKGxvbmdlc3RBcnJheVtpXS52YWx1ZSkgPyBsb25nZXN0QXJyYXlbaV0udmFsdWUgOiBsb25nZXN0QXJyYXlbaV07XG4gICAgICAgICAgLy8gVE9ETzogcmVjb25zaWRlciBzZWNvbmQgY2hlY2tcbiAgICAgICAgICBpZiAodHlwZXNBcnIuaW5kZXhPZih0eXBlKSA9PT0gLTEgJiYgdHlwZXNBcnIuZmlsdGVyKHQgPT4gdC5uYW1lID09PSB0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgbG9uZ2VzdEFycmF5W2ldID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICAgICAgICAgIG5hbWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgd2FybmluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHR5cGUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoIWxvbmdlc3RBcnJheVtpXS53YXJuaW5nKSB7XG4gICAgICAgICAgICAgIGxvbmdlc3RBcnJheVtpXSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0eXBlLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbih7bmFtZTogJ2R1bW15TmFtZS4nICsgdHlwZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pOyBcblxuICAgIHJldHVybiBsb25nZXN0QXJyYXk7XG4gIH1cblxuICBzZWxlY3RGb3JtYXQoJGV2ZW50OiBhbnksIGZpbGU6IEV4dGVuZGVkRmlsZU1vZGVsKSB7XG4gICAgLy8gdGhlIGNhc2Ugd2hlbiB3ZSBzZWxlY3RpbmcgZm9ybWF0IGlubGluZSBvbiB0aGUgc2luZ2xlIGZpbGVcbiAgICBpZiAoZmlsZSkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwuZW1pdChmYWxzZSk7XG4gICAgICBmaWxlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fZm9ybWF0ID0gJGV2ZW50LnZhbHVlO1xuICAgIGNvbnN0IGNvbnZlcnNpb25JdGVtcyA9IG5ldyBBcnJheTxDb252ZXJzaW9uSXRlbU1vZGVsPigpO1xuXG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGlmIChmLnNlbGVjdGVkICYmICFmLmlzRGlyZWN0b3J5ICYmICFmLmRpcmVjdG9yeSl7XG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZi5ndWlkLnJlcGxhY2UoL14uKlxcLi8sICcnKTtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkd1aWQgPSBmLmd1aWQucmVwbGFjZShleHRlbnNpb24sIHRoaXMuX2Zvcm1hdCk7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb25GaWxlTmFtZSA9IGRlc3RpbmF0aW9uR3VpZC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG5cbiAgICAgICAgICBjb25zdCBjb252ZXJzaW9uSXRlbTogQ29udmVyc2lvbkl0ZW1Nb2RlbCA9IHtcbiAgICAgICAgICAgIGd1aWQ6IGYuZ3VpZCxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogZi5kaXJlY3RvcnksXG4gICAgICAgICAgICBzaXplOiBmLnNpemUsXG4gICAgICAgICAgICBuYW1lOiBmLm5hbWUsXG4gICAgICAgICAgICBkZXN0aW5hdGlvblR5cGU6ICRldmVudC52YWx1ZSxcbiAgICAgICAgICAgIGlzRGlyZWN0b3J5OiBmLmlzRGlyZWN0b3J5LFxuICAgICAgICAgICAgc2l6ZVN0cmluZzogdGhpcy5nZXRTaXplKGYuc2l6ZSksXG4gICAgICAgICAgICBzb3VyY2VJY29uOiB0aGlzLmdldEZvcm1hdEljb24oZiksXG4gICAgICAgICAgICBzb3VyY2VGb3JtYXROYW1lOiB0aGlzLmdldEZvcm1hdE5hbWUoZiksXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkZpbGVOYW1lOiBkZXN0aW5hdGlvbkZpbGVOYW1lLFxuICAgICAgICAgICAgZGVzdGluYXRpb25Gb3JtYXROYW1lOiB0aGlzLmdldEZvcm1hdE5hbWUoe25hbWU6IGRlc3RpbmF0aW9uRmlsZU5hbWUsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbCksXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbih7bmFtZTogZGVzdGluYXRpb25GaWxlTmFtZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKSxcbiAgICAgICAgICAgIGNvbnZlcnRlZDogZmFsc2UsXG4gICAgICAgICAgICAvLyBUT0RPOiBtYXliZSB0aGVyZSBpcyBhIG1vcmUgYmVhdXR5IHdheT9cbiAgICAgICAgICAgIGNvbnZlcnRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgd2FybmluZzogZi5jb252ZXJzaW9uVHlwZXMuaW5kZXhPZih0aGlzLl9mb3JtYXQpID09PSAtMSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb252ZXJzaW9uSXRlbXMucHVzaChjb252ZXJzaW9uSXRlbSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2Uuc2VsZWN0SXRlbXMoY29udmVyc2lvbkl0ZW1zKTtcbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RGb3JtYXQodGhpcy5fZm9ybWF0LnRvVXBwZXJDYXNlKCkpO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXMpO1xuXG4gICAgaWYgKCRldmVudC53YXJuaW5nKXtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5JbmZvcm1hdGlvbk1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUZvcm1hdE9wdGlvbih2YWw6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgbmFtZTogdmFsLFxuICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB2YWwsIGRpcmVjdG9yeTogZmFsc2V9IGFzIEZpbGVNb2RlbClcbiAgICB9XG4gIH1cblxuICBmb3JtYXRPcHRpb25zKGZvcm1hdHMpIHtcbiAgICBpZiAoZm9ybWF0cykge1xuICAgICAgY29uc3QgYWxsVHlwZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhbGxUeXBlcy5wdXNoKHRoaXMuY3JlYXRlRm9ybWF0T3B0aW9uKGZvcm1hdHNbaV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGxUeXBlcztcbiAgICB9XG4gIH1cblxuICBhbnlJdGVtU2VsZWN0ZWQoKSB7XG4gICAgLy8gVE9ETzogcmVjb25zaWRlciBzdWNoIGNoZWNrc1xuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhbGxJdGVtc1NlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5KS5sZW5ndGggPiAwICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5ICYmIGZpbGUuc2VsZWN0ZWQpLmxlbmd0aCBcbiAgICAgICAgID09PSB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLmlzRGlyZWN0b3J5ICYmICFmaWxlLmRpcmVjdG9yeSkubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19