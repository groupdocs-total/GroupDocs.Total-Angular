/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileModel, FileUtil } from "../file.service";
import { UploadFilesService } from "../upload-files.service";
import * as jquery from "jquery";
/** @type {?} */
const $ = jquery;
/** @type {?} */
const upload_disc = 'Disc';
/** @type {?} */
const upload_url = 'URL';
/** @type {?} */
const uploads_choices = [{ name: upload_disc, icon: 'hdd' }, { name: upload_url, icon: 'link' }];
export class BrowseFilesModalComponent {
    /**
     * @param {?} _uploadService
     */
    constructor(_uploadService) {
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
    ngOnInit() {
    }
    /**
     * @param {?} size
     * @return {?}
     */
    getSize(size) {
        return this.getSizeValue(size) + ' ' + this.getSizeUnits(size);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    getSizeValue(size) {
        /** @type {?} */
        const mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100);
        }
        else {
            /** @type {?} */
            const kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100);
            }
        }
        return size;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    getSizeUnits(size) {
        /** @type {?} */
        const mb = size / 1024 / 1024;
        if (mb > 1) {
            return 'MB';
        }
        else {
            /** @type {?} */
            const kb = size / 1024;
            if (kb > 1) {
                return 'KB';
            }
        }
        return 'Bytes';
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getFormatName(file) {
        return FileUtil.find(file.name, file.directory).format;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getFormatIcon(file) {
        return FileUtil.find(file.name, file.directory).icon;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    choose(file) {
        this.selectedFile = file;
        if (file.directory || file.isDirectory) {
            this.selectedDirectory.emit(file.name);
        }
        else {
            this.selectedFileGuid.emit(file.guid);
        }
    }
    /**
     * @return {?}
     */
    goUp() {
        if (this.selectedFile) {
            /** @type {?} */
            let guid = this.selectedFile.guid;
            if (guid.length > 0 && guid.indexOf('/') === -1) {
                guid = '';
            }
            else {
                guid = guid.replace(/\/[^\/]+\/?$/, '');
            }
            /** @type {?} */
            const prevDir = new FileModel();
            prevDir.name = guid;
            prevDir.guid = guid;
            prevDir.directory = true;
            prevDir.isDirectory = true;
            this.selectedFile = prevDir;
            this.selectedDirectory.emit(guid);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectUpload($event) {
        if (upload_url === $event) {
            this.showUploadUrl = true;
        }
        else {
            this.showUploadUrl = false;
            $("#gd-upload-input").trigger('click');
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    refresh($event) {
        if ($event) {
            this.files = null;
            this.selectedDirectory.emit('');
            this.showUploadUrl = false;
            this.selectedFile = null;
        }
        else {
            this.closing.emit(true);
        }
    }
    /**
     * @return {?}
     */
    showSpinner() {
        return !this.files;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    uploadUrl(url) {
        if (url) {
            this.urlForUpload.emit(url);
            this.cleanUpload();
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    handleFileInput(files) {
        this._uploadService.changeFilesList(files);
    }
    /**
     * @return {?}
     */
    cleanUpload() {
        this.showUploadFile = false;
        this.showUploadUrl = false;
    }
}
BrowseFilesModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-browse-files-modal',
                template: "<gd-modal id=\"gd-browse-files\" title=\"{{'Open document' | translate }}\" (visible)=\"refresh($event)\">\r\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\r\n    <div class=\"dnd-wrapper\">\r\n      <fa-icon class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n      <span class=\"text\">{{'Drop file here to upload' | translate}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\r\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\r\n            (change)=\"handleFileInput($event.target.files)\">\r\n    <div class=\"context\">\r\n      <div class=\"context-actions\">\r\n        <gd-drop-down>\r\n          <gd-drop-down-toggle>\r\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\r\n              {{'Upload file' | translate}}\r\n            </gd-button>\r\n          </gd-drop-down-toggle>\r\n          <gd-drop-down-items>\r\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\r\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\r\n              <div class=\"text\">{{item.name | translate}}</div>\r\n            </gd-drop-down-item>\r\n          </gd-drop-down-items>\r\n        </gd-drop-down>\r\n      </div>\r\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\r\n        <div class=\"upload-url\">\r\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\r\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\r\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\r\n    <div class=\"header-name\">{{'FILE' | translate }}</div>\r\n    <div class=\"header-size\">{{'SIZE' | translate }}</div>\r\n  </div>\r\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\r\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\r\n      <div class=\"list-files-body\">\r\n        <div class=\"go-up\" (click)=\"goUp()\">\r\n            <div class=\"go-up-icon\">\r\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\r\n            </div>\r\n            <div class=\"go-up-dots\">..</div>\r\n        </div>\r\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\r\n          <div class=\"file-description\">\r\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\r\n            <div class=\"file-name-format\">\r\n              <div class=\"file-name\">{{file?.name}}</div>\r\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"file-size\">\r\n            {{getSizeValue(file?.size)}} {{getSizeUnits(file?.size) | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\r\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      &nbsp;{{'Loading... Please wait.' | translate}}\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:24px;width:90%;line-height:60px}.header-size{padding-right:27px;line-height:60px}.file-size,.header-size{width:10%;color:#777;text-align:right}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0 18px 24px;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-size{font-size:12px;padding:0 27px 0 0;width:10%;line-height:79px}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{display:-webkit-box;display:flex;font-size:26px;cursor:pointer;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 24px}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-left:24px;margin-top:24px;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;padding:0 10px;-webkit-box-pack:center;justify-content:center}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.file-description .ng-fa-icon{font-size:32px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
            }] }
];
/** @nocollapse */
BrowseFilesModalComponent.ctorParameters = () => [
    { type: UploadFilesService }
];
BrowseFilesModalComponent.propDecorators = {
    files: [{ type: Input }],
    uploadConfig: [{ type: Input }],
    selectedFileGuid: [{ type: Output }],
    selectedDirectory: [{ type: Output }],
    urlForUpload: [{ type: Output }],
    closing: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTs7TUFFVixXQUFXLEdBQUcsTUFBTTs7TUFFcEIsVUFBVSxHQUFHLEtBQUs7O01BRWxCLGVBQWUsR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztBQU81RixNQUFNLE9BQU8seUJBQXlCOzs7O0lBYXBDLFlBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQVp0RCxZQUFPLEdBQUcsZUFBZSxDQUFDO1FBSWhCLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDOUMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFaEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxL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R0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7O1lBbElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyx3M0dBQWtEOzthQUVuRDs7OztZQWRPLGtCQUFrQjs7O29CQWtCdkIsS0FBSzsyQkFDTCxLQUFLOytCQUNMLE1BQU07Z0NBQ04sTUFBTTsyQkFDTixNQUFNO3NCQUNOLE1BQU07Ozs7SUFQUCw0Q0FBMEI7O0lBRTFCLDBDQUFlOztJQUNmLGlEQUFzQjs7SUFDdEIscURBQXdEOztJQUN4RCxzREFBeUQ7O0lBQ3pELGlEQUFvRDs7SUFDcEQsNENBQWdEOzs7OztJQUNoRCxpREFBZ0M7O0lBQ2hDLGtEQUFzQjs7SUFDdEIsbURBQXVCOzs7OztJQUVYLG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlsZU1vZGVsLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4uL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5jb25zdCB1cGxvYWRfZGlzYyA9ICdEaXNjJztcclxuXHJcbmNvbnN0IHVwbG9hZF91cmwgPSAnVVJMJztcclxuXHJcbmNvbnN0IHVwbG9hZHNfY2hvaWNlcyA9IFt7bmFtZTogdXBsb2FkX2Rpc2MsIGljb246ICdoZGQnfSwge25hbWU6IHVwbG9hZF91cmwsIGljb246ICdsaW5rJ31dO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1icm93c2UtZmlsZXMtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1cGxvYWRzID0gdXBsb2Fkc19jaG9pY2VzO1xyXG5cclxuICBASW5wdXQoKSBmaWxlcztcclxuICBASW5wdXQoKSB1cGxvYWRDb25maWc7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkRmlsZUd1aWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWREaXJlY3RvcnkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgdXJsRm9yVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZEZpbGU6IEZpbGVNb2RlbDtcclxuICBzaG93VXBsb2FkVXJsID0gZmFsc2U7XHJcbiAgc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXBsb2FkU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGdldFNpemUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTaXplVmFsdWUoc2l6ZSkgKyAnICcgKyB0aGlzLmdldFNpemVVbml0cyhzaXplKTtcclxuICB9XHJcblxyXG4gIGdldFNpemVWYWx1ZShzaXplOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG1iID0gc2l6ZSAvIDEwMjQgLyAxMDI0O1xyXG4gICAgaWYgKG1iID4gMSkge1xyXG4gICAgICByZXR1cm4gKE1hdGgucm91bmQobWIgKiAxMDApIC8gMTAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGtiID0gc2l6ZSAvIDEwMjQ7XHJcbiAgICAgIGlmIChrYiA+IDEpIHtcclxuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoa2IgKiAxMDApIC8gMTAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpemU7XHJcbiAgfVxyXG5cclxuICBnZXRTaXplVW5pdHMoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcclxuICAgIGlmIChtYiA+IDEpIHtcclxuICAgICAgcmV0dXJuICdNQic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBrYiA9IHNpemUgLyAxMDI0O1xyXG4gICAgICBpZiAoa2IgPiAxKSB7XHJcbiAgICAgICAgcmV0dXJuICdLQic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnQnl0ZXMnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0TmFtZShmaWxlOiBGaWxlTW9kZWwpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKGZpbGUubmFtZSwgZmlsZS5kaXJlY3RvcnkpLmZvcm1hdDtcclxuICB9XHJcblxyXG4gIGdldEZvcm1hdEljb24oZmlsZTogRmlsZU1vZGVsKSB7XHJcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5pY29uO1xyXG4gIH1cclxuXHJcbiAgY2hvb3NlKGZpbGU6IEZpbGVNb2RlbCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlO1xyXG4gICAgaWYgKGZpbGUuZGlyZWN0b3J5IHx8IGZpbGUuaXNEaXJlY3RvcnkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KGZpbGUubmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZUd1aWQuZW1pdChmaWxlLmd1aWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ29VcCgpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsZSkge1xyXG4gICAgICBsZXQgZ3VpZCA9IHRoaXMuc2VsZWN0ZWRGaWxlLmd1aWQ7XHJcbiAgICAgIGlmIChndWlkLmxlbmd0aCA+IDAgJiYgZ3VpZC5pbmRleE9mKCcvJykgPT09IC0xKSB7XHJcbiAgICAgICAgZ3VpZCA9ICcnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGd1aWQgPSBndWlkLnJlcGxhY2UoL1xcL1teXFwvXStcXC8/JC8sICcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcHJldkRpciA9IG5ldyBGaWxlTW9kZWwoKTtcclxuICAgICAgcHJldkRpci5uYW1lID0gZ3VpZDtcclxuICAgICAgcHJldkRpci5ndWlkID0gZ3VpZDtcclxuICAgICAgcHJldkRpci5kaXJlY3RvcnkgPSB0cnVlO1xyXG4gICAgICBwcmV2RGlyLmlzRGlyZWN0b3J5ID0gdHJ1ZTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gcHJldkRpcjtcclxuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KGd1aWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0VXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICBpZiAodXBsb2FkX3VybCA9PT0gJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSBmYWxzZTtcclxuICAgICAgJChcIiNnZC11cGxvYWQtaW5wdXRcIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2goJGV2ZW50KSB7XHJcblxyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLmZpbGVzID0gbnVsbDtcclxuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KCcnKTtcclxuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1NwaW5uZXIoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuZmlsZXM7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgdGhpcy51cmxGb3JVcGxvYWQuZW1pdCh1cmwpO1xyXG4gICAgICB0aGlzLmNsZWFuVXBsb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaWxlSW5wdXQoZmlsZXM6IEZpbGVMaXN0KSB7XHJcbiAgICB0aGlzLl91cGxvYWRTZXJ2aWNlLmNoYW5nZUZpbGVzTGlzdChmaWxlcyk7XHJcbiAgfVxyXG5cclxuICBjbGVhblVwbG9hZCgpIHtcclxuICAgIHRoaXMuc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=