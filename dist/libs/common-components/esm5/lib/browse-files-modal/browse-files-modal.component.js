/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUtil } from "../file.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVksUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBQzNCLENBQUMsR0FBRyxNQUFNOztJQUVWLFdBQVcsR0FBRyxNQUFNOztJQUVwQixVQUFVLEdBQUcsS0FBSzs7SUFFbEIsZUFBZSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBRTVGO0lBa0JFLG1DQUFvQixjQUFrQztRQUFsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFadEQsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUloQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWhELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBR3ZCLENBQUM7Ozs7SUFFRCw0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SzsrQkFDTCxLQUFLO21DQUNMLE1BQU07b0NBQ04sTUFBTTsrQkFDTixNQUFNOzBCQUNOLE1BQU07O0lBOEdULGdDQUFDO0NBQUEsQUEzSEQsSUEySEM7U0F0SFkseUJBQXlCOzs7SUFDcEMsNENBQTBCOztJQUUxQiwwQ0FBZTs7SUFDZixpREFBc0I7O0lBQ3RCLHFEQUF3RDs7SUFDeEQsc0RBQXlEOztJQUN6RCxpREFBb0Q7O0lBQ3BELDRDQUFnRDs7Ozs7SUFDaEQsaURBQWdDOztJQUNoQyxrREFBc0I7O0lBQ3RCLG1EQUF1Qjs7Ozs7SUFFWCxtREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4uL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuY29uc3QgdXBsb2FkX2Rpc2MgPSAnRGlzYyc7XG5cbmNvbnN0IHVwbG9hZF91cmwgPSAnVVJMJztcblxuY29uc3QgdXBsb2Fkc19jaG9pY2VzID0gW3tuYW1lOiB1cGxvYWRfZGlzYywgaWNvbjogJ2hkZCd9LCB7bmFtZTogdXBsb2FkX3VybCwgaWNvbjogJ2xpbmsnfV07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWJyb3dzZS1maWxlcy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXBsb2FkcyA9IHVwbG9hZHNfY2hvaWNlcztcblxuICBASW5wdXQoKSBmaWxlcztcbiAgQElucHV0KCkgdXBsb2FkQ29uZmlnO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRGaWxlR3VpZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWREaXJlY3RvcnkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHVybEZvclVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgY2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEZpbGU6IEZpbGVNb2RlbDtcbiAgc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xuICBzaG93VXBsb2FkRmlsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXRTaXplKHNpemU6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmdldFNpemVWYWx1ZShzaXplKSArICcgJyArIHRoaXMuZ2V0U2l6ZVVuaXRzKHNpemUpO1xuICB9XG5cbiAgZ2V0U2l6ZVZhbHVlKHNpemU6IG51bWJlcikge1xuICAgIGNvbnN0IG1iID0gc2l6ZSAvIDEwMjQgLyAxMDI0O1xuICAgIGlmIChtYiA+IDEpIHtcbiAgICAgIHJldHVybiAoTWF0aC5yb3VuZChtYiAqIDEwMCkgLyAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrYiA9IHNpemUgLyAxMDI0O1xuICAgICAgaWYgKGtiID4gMSkge1xuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoa2IgKiAxMDApIC8gMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpemU7XG4gIH1cblxuICBnZXRTaXplVW5pdHMoc2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbWIgPSBzaXplIC8gMTAyNCAvIDEwMjQ7XG4gICAgaWYgKG1iID4gMSkge1xuICAgICAgcmV0dXJuICdNQic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGtiID0gc2l6ZSAvIDEwMjQ7XG4gICAgICBpZiAoa2IgPiAxKSB7XG4gICAgICAgIHJldHVybiAnS0InO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ0J5dGVzJztcbiAgfVxuXG4gIGdldEZvcm1hdE5hbWUoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQoZmlsZS5uYW1lLCBmaWxlLmRpcmVjdG9yeSkuZm9ybWF0O1xuICB9XG5cbiAgZ2V0Rm9ybWF0SWNvbihmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5pY29uO1xuICB9XG5cbiAgY2hvb3NlKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZTtcbiAgICBpZiAoZmlsZS5kaXJlY3RvcnkgfHwgZmlsZS5pc0RpcmVjdG9yeSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KGZpbGUubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlR3VpZC5lbWl0KGZpbGUuZ3VpZCk7XG4gICAgfVxuICB9XG5cbiAgZ29VcCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZpbGUpIHtcbiAgICAgIGxldCBndWlkID0gdGhpcy5zZWxlY3RlZEZpbGUuZ3VpZDtcbiAgICAgIGlmIChndWlkLmxlbmd0aCA+IDAgJiYgZ3VpZC5pbmRleE9mKCcvJykgPT09IC0xKSB7XG4gICAgICAgIGd1aWQgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGd1aWQgPSBndWlkLnJlcGxhY2UoL1xcL1teXFwvXStcXC8/JC8sICcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdChndWlkKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RVcGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBpZiAodXBsb2FkX3VybCA9PT0gJGV2ZW50KSB7XG4gICAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgICAgICQoXCIjZ2QtdXBsb2FkLWlucHV0XCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgkZXZlbnQpIHtcblxuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSBudWxsO1xuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KCcnKTtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NpbmcuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBzaG93U3Bpbm5lcigpIHtcbiAgICByZXR1cm4gIXRoaXMuZmlsZXM7XG4gIH1cblxuICB1cGxvYWRVcmwodXJsOiBzdHJpbmcpIHtcbiAgICBpZiAodXJsKSB7XG4gICAgICB0aGlzLnVybEZvclVwbG9hZC5lbWl0KHVybCk7XG4gICAgICB0aGlzLmNsZWFuVXBsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRmlsZUlucHV0KGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIHRoaXMuX3VwbG9hZFNlcnZpY2UuY2hhbmdlRmlsZXNMaXN0KGZpbGVzKTtcbiAgfVxuXG4gIGNsZWFuVXBsb2FkKCkge1xuICAgIHRoaXMuc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgfVxufVxuIl19