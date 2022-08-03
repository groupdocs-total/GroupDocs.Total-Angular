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
                template: "<gd-modal id=\"gd-browse-files\" title=\"{{'Open document' | translate }}\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">{{'Drop file here to upload' | translate}}</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              {{'Upload file' | translate}}\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name | translate}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">{{'FILE' | translate }}</div>\n    <div class=\"header-size\">{{'SIZE' | translate }}</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n            <div class=\"go-up-icon\">\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n            </div>\n            <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">\n            {{getSizeValue(file?.size)}} {{getSizeUnits(file?.size) | translate}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;{{'Loading... Please wait.' | translate}}\n    </div>\n  </section>\n</gd-modal>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTs7TUFFVixXQUFXLEdBQUcsTUFBTTs7TUFFcEIsVUFBVSxHQUFHLEtBQUs7O01BRWxCLGVBQWUsR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztBQU81RixNQUFNLE9BQU8seUJBQXlCOzs7O0lBYXBDLFlBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQVp0RCxZQUFPLEdBQUcsZUFBZSxDQUFDO1FBSWhCLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDOUMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFaEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxL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R0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7O1lBbElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw4dUdBQWtEOzthQUVuRDs7OztZQWRPLGtCQUFrQjs7O29CQWtCdkIsS0FBSzsyQkFDTCxLQUFLOytCQUNMLE1BQU07Z0NBQ04sTUFBTTsyQkFDTixNQUFNO3NCQUNOLE1BQU07Ozs7SUFQUCw0Q0FBMEI7O0lBRTFCLDBDQUFlOztJQUNmLGlEQUFzQjs7SUFDdEIscURBQXdEOztJQUN4RCxzREFBeUQ7O0lBQ3pELGlEQUFvRDs7SUFDcEQsNENBQWdEOzs7OztJQUNoRCxpREFBZ0M7O0lBQ2hDLGtEQUFzQjs7SUFDdEIsbURBQXVCOzs7OztJQUVYLG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVNb2RlbCwgRmlsZVV0aWx9IGZyb20gXCIuLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5jb25zdCB1cGxvYWRfZGlzYyA9ICdEaXNjJztcblxuY29uc3QgdXBsb2FkX3VybCA9ICdVUkwnO1xuXG5jb25zdCB1cGxvYWRzX2Nob2ljZXMgPSBbe25hbWU6IHVwbG9hZF9kaXNjLCBpY29uOiAnaGRkJ30sIHtuYW1lOiB1cGxvYWRfdXJsLCBpY29uOiAnbGluayd9XTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYnJvd3NlLWZpbGVzLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1cGxvYWRzID0gdXBsb2Fkc19jaG9pY2VzO1xuXG4gIEBJbnB1dCgpIGZpbGVzO1xuICBASW5wdXQoKSB1cGxvYWRDb25maWc7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEZpbGVHdWlkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZERpcmVjdG9yeSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgdXJsRm9yVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjbG9zaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIHNlbGVjdGVkRmlsZTogRmlsZU1vZGVsO1xuICBzaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gIHNob3dVcGxvYWRGaWxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXBsb2FkU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldFNpemUoc2l6ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2l6ZVZhbHVlKHNpemUpICsgJyAnICsgdGhpcy5nZXRTaXplVW5pdHMoc2l6ZSk7XG4gIH1cblxuICBnZXRTaXplVmFsdWUoc2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbWIgPSBzaXplIC8gMTAyNCAvIDEwMjQ7XG4gICAgaWYgKG1iID4gMSkge1xuICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKG1iICogMTAwKSAvIDEwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGtiID0gc2l6ZSAvIDEwMjQ7XG4gICAgICBpZiAoa2IgPiAxKSB7XG4gICAgICAgIHJldHVybiAoTWF0aC5yb3VuZChrYiAqIDEwMCkgLyAxMDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuXG4gIGdldFNpemVVbml0cyhzaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcbiAgICBpZiAobWIgPiAxKSB7XG4gICAgICByZXR1cm4gJ01CJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2IgPSBzaXplIC8gMTAyNDtcbiAgICAgIGlmIChrYiA+IDEpIHtcbiAgICAgICAgcmV0dXJuICdLQic7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnQnl0ZXMnO1xuICB9XG5cbiAgZ2V0Rm9ybWF0TmFtZShmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5mb3JtYXQ7XG4gIH1cblxuICBnZXRGb3JtYXRJY29uKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKGZpbGUubmFtZSwgZmlsZS5kaXJlY3RvcnkpLmljb247XG4gIH1cblxuICBjaG9vc2UoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlO1xuICAgIGlmIChmaWxlLmRpcmVjdG9yeSB8fCBmaWxlLmlzRGlyZWN0b3J5KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoZmlsZS5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEZpbGVHdWlkLmVtaXQoZmlsZS5ndWlkKTtcbiAgICB9XG4gIH1cblxuICBnb1VwKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsZSkge1xuICAgICAgbGV0IGd1aWQgPSB0aGlzLnNlbGVjdGVkRmlsZS5ndWlkO1xuICAgICAgaWYgKGd1aWQubGVuZ3RoID4gMCAmJiBndWlkLmluZGV4T2YoJy8nKSA9PT0gLTEpIHtcbiAgICAgICAgZ3VpZCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3VpZCA9IGd1aWQucmVwbGFjZSgvXFwvW15cXC9dK1xcLz8kLywgJycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2RGlyID0gbmV3IEZpbGVNb2RlbCgpO1xuICAgICAgcHJldkRpci5uYW1lID0gZ3VpZDtcbiAgICAgIHByZXZEaXIuZ3VpZCA9IGd1aWQ7XG4gICAgICBwcmV2RGlyLmRpcmVjdG9yeSA9IHRydWU7XG4gICAgICBwcmV2RGlyLmlzRGlyZWN0b3J5ID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBwcmV2RGlyO1xuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KGd1aWQpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmICh1cGxvYWRfdXJsID09PSAkZXZlbnQpIHtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xuICAgICAgJChcIiNnZC11cGxvYWQtaW5wdXRcIikudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCRldmVudCkge1xuXG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoJycpO1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dTcGlubmVyKCkge1xuICAgIHJldHVybiAhdGhpcy5maWxlcztcbiAgfVxuXG4gIHVwbG9hZFVybCh1cmw6IHN0cmluZykge1xuICAgIGlmICh1cmwpIHtcbiAgICAgIHRoaXMudXJsRm9yVXBsb2FkLmVtaXQodXJsKTtcbiAgICAgIHRoaXMuY2xlYW5VcGxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGaWxlSW5wdXQoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgdGhpcy5fdXBsb2FkU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xuICB9XG5cbiAgY2xlYW5VcGxvYWQoKSB7XG4gICAgdGhpcy5zaG93VXBsb2FkRmlsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xuICB9XG59XG4iXX0=