/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileModel, FileUtil } from "../file.service";
import { UploadFilesService } from "../upload-files.service";
import * as jquery from "jquery";
/** @type {?} */
var $ = jquery;
/** @type {?} */
var upload_disc = 'Disc';
/** @type {?} */
var upload_url = 'URL';
/** @type {?} */
var uploads_choices = [{ name: upload_disc, icon: 'hdd' }, { name: upload_url, icon: 'link' }];
var BrowseFilesModalComponent = /** @class */ (function () {
    function BrowseFilesModalComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.uploads = uploads_choices;
        this.selectedFileGuid = new EventEmitter();
        this.selectedDirectory = new EventEmitter();
        this.urlForUpload = new EventEmitter();
        this.closing = new EventEmitter();
        this.showUploadUrl = false;
        this.showUploadFile = false;
    }
    /**
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} size
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return this.getSizeValue(size) + ' ' + this.getSizeUnits(size);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getSizeValue = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100);
        }
        else {
            /** @type {?} */
            var kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100);
            }
        }
        return size;
    };
    /**
     * @param {?} size
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getSizeUnits = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return 'MB';
        }
        else {
            /** @type {?} */
            var kb = size / 1024;
            if (kb > 1) {
                return 'KB';
            }
        }
        return 'Bytes';
    };
    /**
     * @param {?} file
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getFormatName = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return FileUtil.find(file.name, file.directory).format;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.getFormatIcon = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return FileUtil.find(file.name, file.directory).icon;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.choose = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.selectedFile = file;
        if (file.directory || file.isDirectory) {
            this.selectedDirectory.emit(file.name);
        }
        else {
            this.selectedFileGuid.emit(file.guid);
        }
    };
    /**
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.goUp = /**
     * @return {?}
     */
    function () {
        if (this.selectedFile) {
            /** @type {?} */
            var guid = this.selectedFile.guid;
            if (guid.length > 0 && guid.indexOf('/') === -1) {
                guid = '';
            }
            else {
                guid = guid.replace(/\/[^\/]+\/?$/, '');
            }
            /** @type {?} */
            var prevDir = new FileModel();
            prevDir.name = guid;
            prevDir.guid = guid;
            prevDir.directory = true;
            prevDir.isDirectory = true;
            this.selectedFile = prevDir;
            this.selectedDirectory.emit(guid);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.selectUpload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (upload_url === $event) {
            this.showUploadUrl = true;
        }
        else {
            this.showUploadUrl = false;
            $("#gd-upload-input").trigger('click');
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.refresh = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.files = null;
            this.selectedDirectory.emit('');
            this.showUploadUrl = false;
            this.selectedFile = null;
        }
        else {
            this.closing.emit(true);
        }
    };
    /**
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.showSpinner = /**
     * @return {?}
     */
    function () {
        return !this.files;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.uploadUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (url) {
            this.urlForUpload.emit(url);
            this.cleanUpload();
        }
    };
    /**
     * @param {?} files
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.handleFileInput = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this._uploadService.changeFilesList(files);
    };
    /**
     * @return {?}
     */
    BrowseFilesModalComponent.prototype.cleanUpload = /**
     * @return {?}
     */
    function () {
        this.showUploadFile = false;
        this.showUploadUrl = false;
    };
    BrowseFilesModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-browse-files-modal',
                    template: "<gd-modal id=\"gd-browse-files\" title=\"{{'Open document' | translate }}\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">{{'Drop file here to upload' | translate}}</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              {{'Upload file' | translate}}\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name | translate}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">{{'FILE' | translate }}</div>\n    <div class=\"header-size\">{{'SIZE' | translate }}</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n            <div class=\"go-up-icon\">\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n            </div>\n            <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">\n            {{getSizeValue(file?.size)}} {{getSizeUnits(file?.size) | translate}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;{{'Loading... Please wait.' | translate}}\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:24px;width:90%;line-height:60px}.header-size{padding-right:27px;line-height:60px}.file-size,.header-size{width:10%;color:#777;text-align:right}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0 18px 24px;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-size{font-size:12px;padding:0 27px 0 0;width:10%;line-height:79px}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{display:-webkit-box;display:flex;font-size:26px;cursor:pointer;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 24px}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-left:24px;margin-top:24px;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;padding:0 10px;-webkit-box-pack:center;justify-content:center}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.file-description .ng-fa-icon{font-size:32px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
                }] }
    ];
    /** @nocollapse */
    BrowseFilesModalComponent.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    BrowseFilesModalComponent.propDecorators = {
        files: [{ type: Input }],
        uploadConfig: [{ type: Input }],
        selectedFileGuid: [{ type: Output }],
        selectedDirectory: [{ type: Output }],
        urlForUpload: [{ type: Output }],
        closing: [{ type: Output }]
    };
    return BrowseFilesModalComponent;
}());
export { BrowseFilesModalComponent };
if (false) {
    /** @type {?} */
    BrowseFilesModalComponent.prototype.uploads;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.files;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.uploadConfig;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.selectedFileGuid;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.selectedDirectory;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.urlForUpload;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.closing;
    /**
     * @type {?}
     * @private
     */
    BrowseFilesModalComponent.prototype.selectedFile;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.showUploadUrl;
    /** @type {?} */
    BrowseFilesModalComponent.prototype.showUploadFile;
    /**
     * @type {?}
     * @private
     */
    BrowseFilesModalComponent.prototype._uploadService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTs7SUFFVixXQUFXLEdBQUcsTUFBTTs7SUFFcEIsVUFBVSxHQUFHLEtBQUs7O0lBRWxCLGVBQWUsR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUU1RjtJQWtCRSxtQ0FBb0IsY0FBa0M7UUFBbEMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBWnRELFlBQU8sR0FBRyxlQUFlLENBQUM7UUFJaEIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVoRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUd2QixDQUFD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LEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOztnQkFsSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDh1R0FBa0Q7O2lCQUVuRDs7OztnQkFkTyxrQkFBa0I7Ozt3QkFrQnZCLEtBQUs7K0JBQ0wsS0FBSzttQ0FDTCxNQUFNO29DQUNOLE1BQU07K0JBQ04sTUFBTTswQkFDTixNQUFNOztJQXNIVCxnQ0FBQztDQUFBLEFBbklELElBbUlDO1NBOUhZLHlCQUF5Qjs7O0lBQ3BDLDRDQUEwQjs7SUFFMUIsMENBQWU7O0lBQ2YsaURBQXNCOztJQUN0QixxREFBd0Q7O0lBQ3hELHNEQUF5RDs7SUFDekQsaURBQW9EOztJQUNwRCw0Q0FBZ0Q7Ozs7O0lBQ2hELGlEQUFnQzs7SUFDaEMsa0RBQXNCOztJQUN0QixtREFBdUI7Ozs7O0lBRVgsbURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZU1vZGVsLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbmNvbnN0IHVwbG9hZF9kaXNjID0gJ0Rpc2MnO1xuXG5jb25zdCB1cGxvYWRfdXJsID0gJ1VSTCc7XG5cbmNvbnN0IHVwbG9hZHNfY2hvaWNlcyA9IFt7bmFtZTogdXBsb2FkX2Rpc2MsIGljb246ICdoZGQnfSwge25hbWU6IHVwbG9hZF91cmwsIGljb246ICdsaW5rJ31dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1icm93c2UtZmlsZXMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVwbG9hZHMgPSB1cGxvYWRzX2Nob2ljZXM7XG5cbiAgQElucHV0KCkgZmlsZXM7XG4gIEBJbnB1dCgpIHVwbG9hZENvbmZpZztcbiAgQE91dHB1dCgpIHNlbGVjdGVkRmlsZUd1aWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkRGlyZWN0b3J5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSB1cmxGb3JVcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgc2VsZWN0ZWRGaWxlOiBGaWxlTW9kZWw7XG4gIHNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0U2l6ZShzaXplOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTaXplVmFsdWUoc2l6ZSkgKyAnICcgKyB0aGlzLmdldFNpemVVbml0cyhzaXplKTtcbiAgfVxuXG4gIGdldFNpemVWYWx1ZShzaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcbiAgICBpZiAobWIgPiAxKSB7XG4gICAgICByZXR1cm4gKE1hdGgucm91bmQobWIgKiAxMDApIC8gMTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2IgPSBzaXplIC8gMTAyNDtcbiAgICAgIGlmIChrYiA+IDEpIHtcbiAgICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKGtiICogMTAwKSAvIDEwMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaXplO1xuICB9XG5cbiAgZ2V0U2l6ZVVuaXRzKHNpemU6IG51bWJlcikge1xuICAgIGNvbnN0IG1iID0gc2l6ZSAvIDEwMjQgLyAxMDI0O1xuICAgIGlmIChtYiA+IDEpIHtcbiAgICAgIHJldHVybiAnTUInO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrYiA9IHNpemUgLyAxMDI0O1xuICAgICAgaWYgKGtiID4gMSkge1xuICAgICAgICByZXR1cm4gJ0tCJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdCeXRlcyc7XG4gIH1cblxuICBnZXRGb3JtYXROYW1lKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKGZpbGUubmFtZSwgZmlsZS5kaXJlY3RvcnkpLmZvcm1hdDtcbiAgfVxuXG4gIGdldEZvcm1hdEljb24oZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQoZmlsZS5uYW1lLCBmaWxlLmRpcmVjdG9yeSkuaWNvbjtcbiAgfVxuXG4gIGNob29zZShmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IGZpbGU7XG4gICAgaWYgKGZpbGUuZGlyZWN0b3J5IHx8IGZpbGUuaXNEaXJlY3RvcnkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdChmaWxlLm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZUd1aWQuZW1pdChmaWxlLmd1aWQpO1xuICAgIH1cbiAgfVxuXG4gIGdvVXAoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWxlKSB7XG4gICAgICBsZXQgZ3VpZCA9IHRoaXMuc2VsZWN0ZWRGaWxlLmd1aWQ7XG4gICAgICBpZiAoZ3VpZC5sZW5ndGggPiAwICYmIGd1aWQuaW5kZXhPZignLycpID09PSAtMSkge1xuICAgICAgICBndWlkID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBndWlkID0gZ3VpZC5yZXBsYWNlKC9cXC9bXlxcL10rXFwvPyQvLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZXZEaXIgPSBuZXcgRmlsZU1vZGVsKCk7XG4gICAgICBwcmV2RGlyLm5hbWUgPSBndWlkO1xuICAgICAgcHJldkRpci5ndWlkID0gZ3VpZDtcbiAgICAgIHByZXZEaXIuZGlyZWN0b3J5ID0gdHJ1ZTtcbiAgICAgIHByZXZEaXIuaXNEaXJlY3RvcnkgPSB0cnVlO1xuICAgICAgXG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IHByZXZEaXI7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoZ3VpZCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0VXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgaWYgKHVwbG9hZF91cmwgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gICAgICAkKFwiI2dkLXVwbG9hZC1pbnB1dFwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goJGV2ZW50KSB7XG5cbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmZpbGVzID0gbnVsbDtcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdCgnJyk7XG4gICAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zaW5nLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1NwaW5uZXIoKSB7XG4gICAgcmV0dXJuICF0aGlzLmZpbGVzO1xuICB9XG5cbiAgdXBsb2FkVXJsKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgdGhpcy51cmxGb3JVcGxvYWQuZW1pdCh1cmwpO1xuICAgICAgdGhpcy5jbGVhblVwbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpbGVJbnB1dChmaWxlczogRmlsZUxpc3QpIHtcbiAgICB0aGlzLl91cGxvYWRTZXJ2aWNlLmNoYW5nZUZpbGVzTGlzdChmaWxlcyk7XG4gIH1cblxuICBjbGVhblVwbG9hZCgpIHtcbiAgICB0aGlzLnNob3dVcGxvYWRGaWxlID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==