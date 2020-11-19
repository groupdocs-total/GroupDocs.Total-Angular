/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUtil } from "../file.service";
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
        /** @type {?} */
        const mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            /** @type {?} */
            const kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
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
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\r\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\r\n    <div class=\"dnd-wrapper\">\r\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n      <span class=\"text\">Drop file here to upload</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\r\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\r\n            (change)=\"handleFileInput($event.target.files)\">\r\n    <div class=\"context\">\r\n      <div class=\"context-actions\">\r\n        <gd-drop-down>\r\n          <gd-drop-down-toggle>\r\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\r\n              Upload file\r\n            </gd-button>\r\n          </gd-drop-down-toggle>\r\n          <gd-drop-down-items>\r\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\r\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\r\n              <div class=\"text\">{{item.name}}</div>\r\n            </gd-drop-down-item>\r\n          </gd-drop-down-items>\r\n        </gd-drop-down>\r\n      </div>\r\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\r\n        <div class=\"upload-url\">\r\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\r\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\r\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\r\n    <div class=\"header-name\">FILE</div>\r\n    <div class=\"header-size\">SIZE</div>\r\n  </div>\r\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\r\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\r\n      <div class=\"list-files-body\">\r\n        <div class=\"go-up\" (click)=\"goUp()\">\r\n            <div class=\"go-up-icon\">\r\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\r\n            </div>\r\n            <div class=\"go-up-dots\">..</div>\r\n        </div>\r\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\r\n          <div class=\"file-description\">\r\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\r\n            <div class=\"file-name-format\">\r\n              <div class=\"file-name\">{{file?.name}}</div>\r\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"file-size\">\r\n            {{getSize(file?.size)}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\r\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      &nbsp;Loading... Please wait.\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:24px;width:90%;line-height:60px}.header-size{padding-right:27px;line-height:60px}.file-size,.header-size{width:10%;color:#777;text-align:right}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0 18px 24px;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-size{font-size:12px;padding:0 27px 0 0;width:10%;line-height:79px}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{display:-webkit-box;display:flex;font-size:26px;cursor:pointer;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 24px}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-left:24px;margin-top:24px;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;-webkit-box-pack:center;justify-content:center}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.file-description .ng-fa-icon{font-size:32px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVksUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNOztNQUVWLFdBQVcsR0FBRyxNQUFNOztNQUVwQixVQUFVLEdBQUcsS0FBSzs7TUFFbEIsZUFBZSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBTzVGLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFhcEMsWUFBb0IsY0FBa0M7UUFBbEMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBWnRELFlBQU8sR0FBRyxlQUFlLENBQUM7UUFJaEIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVoRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztJ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LElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7WUF6R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLG90R0FBa0Q7O2FBRW5EOzs7O1lBZE8sa0JBQWtCOzs7b0JBa0J2QixLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsTUFBTTtnQ0FDTixNQUFNOzJCQUNOLE1BQU07c0JBQ04sTUFBTTs7OztJQVBQLDRDQUEwQjs7SUFFMUIsMENBQWU7O0lBQ2YsaURBQXNCOztJQUN0QixxREFBd0Q7O0lBQ3hELHNEQUF5RDs7SUFDekQsaURBQW9EOztJQUNwRCw0Q0FBZ0Q7Ozs7O0lBQ2hELGlEQUFnQzs7SUFDaEMsa0RBQXNCOztJQUN0QixtREFBdUI7Ozs7O0lBRVgsbURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbmNvbnN0IHVwbG9hZF9kaXNjID0gJ0Rpc2MnO1xyXG5cclxuY29uc3QgdXBsb2FkX3VybCA9ICdVUkwnO1xyXG5cclxuY29uc3QgdXBsb2Fkc19jaG9pY2VzID0gW3tuYW1lOiB1cGxvYWRfZGlzYywgaWNvbjogJ2hkZCd9LCB7bmFtZTogdXBsb2FkX3VybCwgaWNvbjogJ2xpbmsnfV07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWJyb3dzZS1maWxlcy1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVwbG9hZHMgPSB1cGxvYWRzX2Nob2ljZXM7XHJcblxyXG4gIEBJbnB1dCgpIGZpbGVzO1xyXG4gIEBJbnB1dCgpIHVwbG9hZENvbmZpZztcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRGaWxlR3VpZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZERpcmVjdG9yeSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSB1cmxGb3JVcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIHNlbGVjdGVkRmlsZTogRmlsZU1vZGVsO1xyXG4gIHNob3dVcGxvYWRVcmwgPSBmYWxzZTtcclxuICBzaG93VXBsb2FkRmlsZSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0U2l6ZShzaXplOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG1iID0gc2l6ZSAvIDEwMjQgLyAxMDI0O1xyXG4gICAgaWYgKG1iID4gMSkge1xyXG4gICAgICByZXR1cm4gKE1hdGgucm91bmQobWIgKiAxMDApIC8gMTAwKSArICcgTUInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qga2IgPSBzaXplIC8gMTAyNDtcclxuICAgICAgaWYgKGtiID4gMSkge1xyXG4gICAgICAgIHJldHVybiAoTWF0aC5yb3VuZChrYiAqIDEwMCkgLyAxMDApICsgJyBLQic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzaXplICsgJyBCeXRlcyc7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXROYW1lKGZpbGU6IEZpbGVNb2RlbCkge1xyXG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQoZmlsZS5uYW1lLCBmaWxlLmRpcmVjdG9yeSkuZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0SWNvbihmaWxlOiBGaWxlTW9kZWwpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKGZpbGUubmFtZSwgZmlsZS5kaXJlY3RvcnkpLmljb247XHJcbiAgfVxyXG5cclxuICBjaG9vc2UoZmlsZTogRmlsZU1vZGVsKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IGZpbGU7XHJcbiAgICBpZiAoZmlsZS5kaXJlY3RvcnkgfHwgZmlsZS5pc0RpcmVjdG9yeSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoZmlsZS5uYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlR3VpZC5lbWl0KGZpbGUuZ3VpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnb1VwKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWxlKSB7XHJcbiAgICAgIGxldCBndWlkID0gdGhpcy5zZWxlY3RlZEZpbGUuZ3VpZDtcclxuICAgICAgaWYgKGd1aWQubGVuZ3RoID4gMCAmJiBndWlkLmluZGV4T2YoJy8nKSA9PT0gLTEpIHtcclxuICAgICAgICBndWlkID0gJyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ3VpZCA9IGd1aWQucmVwbGFjZSgvXFwvW15cXC9dK1xcLz8kLywgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdChndWlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgaWYgKHVwbG9hZF91cmwgPT09ICRldmVudCkge1xyXG4gICAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XHJcbiAgICAgICQoXCIjZ2QtdXBsb2FkLWlucHV0XCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCRldmVudCkge1xyXG5cclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdCgnJyk7XHJcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsb3NpbmcuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dTcGlubmVyKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmZpbGVzO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIHRoaXMudXJsRm9yVXBsb2FkLmVtaXQodXJsKTtcclxuICAgICAgdGhpcy5jbGVhblVwbG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsZUlucHV0KGZpbGVzOiBGaWxlTGlzdCkge1xyXG4gICAgdGhpcy5fdXBsb2FkU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xyXG4gIH1cclxuXHJcbiAgY2xlYW5VcGxvYWQoKSB7XHJcbiAgICB0aGlzLnNob3dVcGxvYWRGaWxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19