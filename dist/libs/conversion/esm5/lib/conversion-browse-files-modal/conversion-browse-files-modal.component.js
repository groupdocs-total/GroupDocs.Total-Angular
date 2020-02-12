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
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n\n    <div class=\"select-all\">\n      <input type=\"checkbox\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n    </div>\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\">\n              {{getLabelString()}}\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectFormat(item, null)\" *ngFor=\"let item of dynamicOptions\">\n              <div class=\"text\">{{item.name}}</div>\n              <div *ngIf=\"item.warning\" class=\"gd-type-warning\"\n                    title=\"1 selected file(s) can\u2019t be converted to {{item.name}} format\">\n                <fa-icon [icon]=\"['fas','exclamation-triangle']\"></fa-icon>\n              </div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n          <div class=\"file-format-select\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <gd-drop-down *ngIf=\"!(file.isDirectory || file.directory)\" [placement]=\"{h:'left',v:'center'}\">\n              <gd-drop-down-toggle>\n                <gd-button [icon]=\"'plus'\">\n                </gd-button>\n              </gd-drop-down-toggle>\n              <gd-drop-down-items>\n                <gd-drop-down-item (selected)=\"selectFormat(item, file)\" *ngFor=\"let item of formatOptions(file.conversionTypes)\">\n                  <div class=\"text\">{{item.name}}</div>\n                </gd-drop-down-item>\n              </gd-drop-down-items>\n            </gd-drop-down>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:68px;width:90%;line-height:60px}.header-size{padding-right:84px;line-height:60px}.file-size,.header-size{width:7%;color:#777;text-align:left}.file-size{font-size:12px;width:7%;line-height:79px}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-description .ng-fa-icon{font-size:32px}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%;margin-top:24px;margin-right:24px}.upload-panel .select-all{height:37px;margin:0 16px 0 15px;width:37px;line-height:44px;text-align:center}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;-webkit-box-pack:center;justify-content:center;font-size:14px}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-actions ::ng-deep .button.primary{width:117px;background-color:#4b566c}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive{width:106px;background-color:#959da5}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ .text{color:#3e4e5a}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ fa-icon{color:#3e4e5a}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.upload-panel gd-drop-down /deep/ .drop-down-item .text{margin-left:7px;text-transform:uppercase;color:#6e6e6e}.upload-panel gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.upload-panel gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.go-up{cursor:pointer;display:-webkit-box;display:flex;font-size:26px;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 68px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-drag-n-drop-icon{margin-top:-50px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:37px;margin:21px 16px 21px 15px;width:37px;line-height:44px;text-align:center}.gd-file-checkbox.empty{width:37px}.file-format-select{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:36px;margin-right:24px}.file-format-select ::ng-deep .button{padding:0;width:36px;margin:0;font-size:14px}.file-format-select ::ng-deep .button .text{padding:0}.file-format-select ::ng-deep .show .button{color:#959da5}.file-format-select gd-drop-down /deep/ .drop-down-item{width:96px}.file-format-select gd-drop-down /deep/ .drop-down-item .text{padding-left:7px;text-transform:uppercase;color:#6e6e6e}.file-format-select gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.file-format-select gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:-webkit-box;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:-webkit-box;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}.file-size,.list-files-header{display:none}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLEVBQWEsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRzFELDRCQUlDOzs7SUFIQyxzQkFBYTs7SUFDYix1QkFBVzs7SUFDWCx5QkFBaUI7O0FBR25CO0lBS3lELCtEQUF5QjtJQVFoRiw2Q0FBWSxjQUFrQyxFQUNwQyxrQkFBcUMsRUFDckMsYUFBMkI7UUFGckMsWUFHRSxrQkFBTSxjQUFjLENBQUMsU0FDdEI7UUFIUyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLG1CQUFhLEdBQWIsYUFBYSxDQUFjO1FBTjNCLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWxELG9CQUFjLEdBQWEsRUFBRSxDQUFDOztJQU05QixDQUFDOzs7OztJQUVELHNEQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCw0REFBYzs7OztJQUFkLFVBQWUsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFF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O2lCQUU5RDs7OztnQkFkbUMsa0JBQWtCO2dCQUM3QyxpQkFBaUI7Z0JBRHlDLFlBQVk7Ozt3QkFrQjVFLEtBQUs7NEJBQ0wsTUFBTTs7SUF3S1QsMENBQUM7Q0FBQSxBQWpMRCxDQUt5RCx5QkFBeUIsR0E0S2pGO1NBNUtZLG1DQUFtQzs7Ozs7O0lBQzlDLHNEQUF3Qjs7SUFDeEIsc0RBQVE7O0lBQ1Isb0RBQW9DOztJQUNwQyx3REFBa0Q7O0lBRWxELDZEQUE4Qjs7Ozs7SUFHNUIsaUVBQTZDOzs7OztJQUM3Qyw0REFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCwgVXBsb2FkRmlsZXNTZXJ2aWNlLCBGaWxlTW9kZWwsIE1vZGFsU2VydmljZSwgQ29tbW9uTW9kYWxzIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbnZlcnNpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29udmVyc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7Q29udmVyc2lvbkl0ZW1Nb2RlbCwgRXh0ZW5kZWRGaWxlTW9kZWx9IGZyb20gXCIuLi9tb2RlbHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG4gIHdhcm5pbmc6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBleHRlbmRzIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9mb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0cztcbiAgQElucHV0KCkgZmlsZXM6IEV4dGVuZGVkRmlsZU1vZGVsW107XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZHluYW1pY09wdGlvbnM6IE9wdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoX3VwbG9hZFNlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICBwcml2YXRlIF9jb252ZXJzaW9uU2VydmljZTogQ29udmVyc2lvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHtcbiAgICBzdXBlcihfdXBsb2FkU2VydmljZSk7XG4gIH1cblxuICBzZWxlY3RERChlbnRyeSl7XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIEREJyxlbnRyeSk7XG4gIH1cblxuICBzZWxlY3RBbGxJdGVtcyhjaGVja2VkOiBib29sZWFuKXtcbiAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGNoZWNrZWQpO1xuXG4gICAgdGhpcy5keW5hbWljT3B0aW9ucyA9IHRoaXMucHJlcGFyZU11bHRpcGxlQ29udmVyc2lvblR5cGVzKCk7XG4gIH1cblxuICBzZWxlY3RTaW5nbGVJdGVtKGNoZWNrZWQ6IGJvb2xlYW4sIGZpbGU6IEV4dGVuZGVkRmlsZU1vZGVsKXtcbiAgICAvLyBUT0RPOiByZWZhY3Rvcj9cbiAgICBjb25zdCBzZWxlY3RlZEZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoZiA9PiBmLmd1aWQgPT09IGZpbGUuZ3VpZCk7XG4gICAgaWYgKHNlbGVjdGVkRmlsZXMubGVuZ3RoID09PSAxKXtcbiAgICAgIHNlbGVjdGVkRmlsZXNbMF0uc2VsZWN0ZWQgPSBjaGVja2VkO1xuICAgIH1cblxuICAgIHRoaXMuZHluYW1pY09wdGlvbnMgPSB0aGlzLnByZXBhcmVNdWx0aXBsZUNvbnZlcnNpb25UeXBlcygpO1xuICB9XG5cbiAgZ2V0TGFiZWxTdHJpbmcoKXtcbiAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuc2VsZWN0ZWQpLmxlbmd0aDtcbiAgICAgIGlmIChzZWxlY3RlZENvdW50ID4gMCkge1xuICAgICAgcmV0dXJuICdBZGQgJyArIHNlbGVjdGVkQ291bnQgKyAnIHNlbGVjdGVkJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnQWRkIHNlbGVjdGVkJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVNdWx0aXBsZUNvbnZlcnNpb25UeXBlcygpIHtcbiAgICBjb25zdCBhbGxUeXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5mb3JFYWNoKChmKSA9PiB7XG4gICAgICBpZiAoZi5jb252ZXJzaW9uVHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5hc3NpZ24oW10sIGYuY29udmVyc2lvblR5cGVzKTtcbiAgICAgICAgYWxsVHlwZXMucHVzaCh0eXBlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgbG9uZ2VzdEFycmF5ID0gW107XG4gICAgYWxsVHlwZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYoaXRlbS5sZW5ndGggPj0gbG9uZ2VzdEFycmF5Lmxlbmd0aCl7XG4gICAgICAgIGxvbmdlc3RBcnJheSA9IGl0ZW07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2FkZCB3YXJuaW5nc1xuICAgIGFsbFR5cGVzLmZvckVhY2godHlwZXNBcnIgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvbmdlc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSAobG9uZ2VzdEFycmF5W2ldLnZhbHVlKSA/IGxvbmdlc3RBcnJheVtpXS52YWx1ZSA6IGxvbmdlc3RBcnJheVtpXTtcbiAgICAgICAgICAvLyBUT0RPOiByZWNvbnNpZGVyIHNlY29uZCBjaGVja1xuICAgICAgICAgIGlmICh0eXBlc0Fyci5pbmRleE9mKHR5cGUpID09PSAtMSAmJiB0eXBlc0Fyci5maWx0ZXIodCA9PiB0Lm5hbWUgPT09IHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBsb25nZXN0QXJyYXlbaV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgbmFtZTogdHlwZSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbih7bmFtZTogJ2R1bW15TmFtZS4nICsgdHlwZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZighbG9uZ2VzdEFycmF5W2ldLndhcm5pbmcpIHtcbiAgICAgICAgICAgICAgbG9uZ2VzdEFycmF5W2ldID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICAgICAgICAgIG5hbWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiAnZHVtbXlOYW1lLicgKyB0eXBlLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7IFxuXG4gICAgcmV0dXJuIGxvbmdlc3RBcnJheTtcbiAgfVxuXG4gIHNlbGVjdEZvcm1hdCgkZXZlbnQ6IGFueSwgZmlsZTogRXh0ZW5kZWRGaWxlTW9kZWwpIHtcbiAgICAvLyB0aGUgY2FzZSB3aGVuIHdlIHNlbGVjdGluZyBmb3JtYXQgaW5saW5lIG9uIHRoZSBzaW5nbGUgZmlsZVxuICAgIGlmIChmaWxlKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGZhbHNlKTtcbiAgICAgIGZpbGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9mb3JtYXQgPSAkZXZlbnQudmFsdWU7XG4gICAgY29uc3QgY29udmVyc2lvbkl0ZW1zID0gbmV3IEFycmF5PENvbnZlcnNpb25JdGVtTW9kZWw+KCk7XG5cbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgaWYgKGYuc2VsZWN0ZWQgJiYgIWYuaXNEaXJlY3RvcnkgJiYgIWYuZGlyZWN0b3J5KXtcbiAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBmLmd1aWQucmVwbGFjZSgvXi4qXFwuLywgJycpO1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uR3VpZCA9IGYuZ3VpZC5yZXBsYWNlKGV4dGVuc2lvbiwgdGhpcy5fZm9ybWF0KTtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkZpbGVOYW1lID0gZGVzdGluYXRpb25HdWlkLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcblxuICAgICAgICAgIGNvbnN0IGNvbnZlcnNpb25JdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsID0ge1xuICAgICAgICAgICAgZ3VpZDogZi5ndWlkLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiBmLmRpcmVjdG9yeSxcbiAgICAgICAgICAgIHNpemU6IGYuc2l6ZSxcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uVHlwZTogJGV2ZW50LnZhbHVlLFxuICAgICAgICAgICAgaXNEaXJlY3Rvcnk6IGYuaXNEaXJlY3RvcnksXG4gICAgICAgICAgICBzaXplU3RyaW5nOiB0aGlzLmdldFNpemUoZi5zaXplKSxcbiAgICAgICAgICAgIHNvdXJjZUljb246IHRoaXMuZ2V0Rm9ybWF0SWNvbihmKSxcbiAgICAgICAgICAgIHNvdXJjZUZvcm1hdE5hbWU6IHRoaXMuZ2V0Rm9ybWF0TmFtZShmKSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uRmlsZU5hbWU6IGRlc3RpbmF0aW9uRmlsZU5hbWUsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkZvcm1hdE5hbWU6IHRoaXMuZ2V0Rm9ybWF0TmFtZSh7bmFtZTogZGVzdGluYXRpb25GaWxlTmFtZSwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uSWNvbjogdGhpcy5nZXRGb3JtYXRJY29uKHtuYW1lOiBkZXN0aW5hdGlvbkZpbGVOYW1lLCBkaXJlY3Rvcnk6IGZhbHNlfSBhcyBGaWxlTW9kZWwpLFxuICAgICAgICAgICAgY29udmVydGVkOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFRPRE86IG1heWJlIHRoZXJlIGlzIGEgbW9yZSBiZWF1dHkgd2F5P1xuICAgICAgICAgICAgY29udmVydGluZzogZmFsc2UsXG4gICAgICAgICAgICB3YXJuaW5nOiBmLmNvbnZlcnNpb25UeXBlcy5pbmRleE9mKHRoaXMuX2Zvcm1hdCkgPT09IC0xID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnZlcnNpb25JdGVtcy5wdXNoKGNvbnZlcnNpb25JdGVtKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9jb252ZXJzaW9uU2VydmljZS5zZWxlY3RJdGVtcyhjb252ZXJzaW9uSXRlbXMpO1xuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdEZvcm1hdCh0aGlzLl9mb3JtYXQudG9VcHBlckNhc2UoKSk7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XG5cbiAgICBpZiAoJGV2ZW50Lndhcm5pbmcpe1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkluZm9ybWF0aW9uTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlRm9ybWF0T3B0aW9uKHZhbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICBuYW1lOiB2YWwsXG4gICAgICBpY29uOiB0aGlzLmdldEZvcm1hdEljb24oe25hbWU6ICdkdW1teU5hbWUuJyArIHZhbCwgZGlyZWN0b3J5OiBmYWxzZX0gYXMgRmlsZU1vZGVsKVxuICAgIH1cbiAgfVxuXG4gIGZvcm1hdE9wdGlvbnMoZm9ybWF0cykge1xuICAgIGlmIChmb3JtYXRzKSB7XG4gICAgICBjb25zdCBhbGxUeXBlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFsbFR5cGVzLnB1c2godGhpcy5jcmVhdGVGb3JtYXRPcHRpb24oZm9ybWF0c1tpXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbFR5cGVzO1xuICAgIH1cbiAgfVxuXG4gIGFueUl0ZW1TZWxlY3RlZCgpIHtcbiAgICAvLyBUT0RPOiByZWNvbnNpZGVyIHN1Y2ggY2hlY2tzXG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFsbEl0ZW1zU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkpLmxlbmd0aCA+IDAgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkgJiYgZmlsZS5zZWxlY3RlZCkubGVuZ3RoIFxuICAgICAgICAgPT09IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5KS5sZW5ndGg7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=