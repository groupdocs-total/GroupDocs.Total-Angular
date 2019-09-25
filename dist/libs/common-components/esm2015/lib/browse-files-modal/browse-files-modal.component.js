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
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"context\">\n      <div class=\"context-actions\">\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"http://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n            <div class=\"go-up-icon\">\n                <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n            </div>\n            <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">\n            {{getSize(file?.size)}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:24px;width:90%;line-height:60px}.header-size{padding-right:27px;line-height:60px}.file-size,.header-size{width:10%;color:#777;text-align:right}.file-description{display:flex;width:90%;padding:18px 0 18px 24px;font-size:14px;flex:1;cursor:pointer;overflow:hidden}.file-size{font-size:12px;padding:0 27px 0 0;width:10%;line-height:79px}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{display:flex;font-size:26px;cursor:pointer;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 24px}.upload-panel{display:flex;position:relative;width:100%}.upload-panel .context{display:flex;flex-direction:column;width:100%;margin-left:24px;margin-top:24px;margin-right:24px}.upload-panel .context .context-actions{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;justify-content:center}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-panel{display:flex;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.file-description .ng-fa-icon{font-size:32px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:inherit;height:inherit;background:rgba(255,255,255,.7);z-index:1;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap fa-icon{color:#3e4e5a;font-size:90px}.gd-drag-n-drop-icon{margin-top:-50px}.gd-dnd-wrap h2{color:#6e6e6e;margin-top:20px;font-size:14px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVksUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNOztNQUVWLFdBQVcsR0FBRyxNQUFNOztNQUVwQixVQUFVLEdBQUcsS0FBSzs7TUFFbEIsZUFBZSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBTzVGLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFhcEMsWUFBb0IsY0FBa0M7UUFBbEMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBWnRELFlBQU8sR0FBRyxlQUFlLENBQUM7UUFJaEIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVoRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztJ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LElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7WUF6R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLCtqR0FBa0Q7O2FBRW5EOzs7O1lBZE8sa0JBQWtCOzs7b0JBa0J2QixLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsTUFBTTtnQ0FDTixNQUFNOzJCQUNOLE1BQU07c0JBQ04sTUFBTTs7OztJQVBQLDRDQUEwQjs7SUFFMUIsMENBQWU7O0lBQ2YsaURBQXNCOztJQUN0QixxREFBd0Q7O0lBQ3hELHNEQUF5RDs7SUFDekQsaURBQW9EOztJQUNwRCw0Q0FBZ0Q7Ozs7O0lBQ2hELGlEQUFnQzs7SUFDaEMsa0RBQXNCOztJQUN0QixtREFBdUI7Ozs7O0lBRVgsbURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZU1vZGVsLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbmNvbnN0IHVwbG9hZF9kaXNjID0gJ0Rpc2MnO1xuXG5jb25zdCB1cGxvYWRfdXJsID0gJ1VSTCc7XG5cbmNvbnN0IHVwbG9hZHNfY2hvaWNlcyA9IFt7bmFtZTogdXBsb2FkX2Rpc2MsIGljb246ICdoZGQnfSwge25hbWU6IHVwbG9hZF91cmwsIGljb246ICdsaW5rJ31dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1icm93c2UtZmlsZXMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVwbG9hZHMgPSB1cGxvYWRzX2Nob2ljZXM7XG5cbiAgQElucHV0KCkgZmlsZXM7XG4gIEBJbnB1dCgpIHVwbG9hZENvbmZpZztcbiAgQE91dHB1dCgpIHNlbGVjdGVkRmlsZUd1aWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkRGlyZWN0b3J5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSB1cmxGb3JVcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgc2VsZWN0ZWRGaWxlOiBGaWxlTW9kZWw7XG4gIHNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0U2l6ZShzaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcbiAgICBpZiAobWIgPiAxKSB7XG4gICAgICByZXR1cm4gKE1hdGgucm91bmQobWIgKiAxMDApIC8gMTAwKSArICcgTUInO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrYiA9IHNpemUgLyAxMDI0O1xuICAgICAgaWYgKGtiID4gMSkge1xuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoa2IgKiAxMDApIC8gMTAwKSArICcgS0InO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZSArICcgQnl0ZXMnO1xuICB9XG5cbiAgZ2V0Rm9ybWF0TmFtZShmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5mb3JtYXQ7XG4gIH1cblxuICBnZXRGb3JtYXRJY29uKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKGZpbGUubmFtZSwgZmlsZS5kaXJlY3RvcnkpLmljb247XG4gIH1cblxuICBjaG9vc2UoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlO1xuICAgIGlmIChmaWxlLmRpcmVjdG9yeSB8fCBmaWxlLmlzRGlyZWN0b3J5KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoZmlsZS5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEZpbGVHdWlkLmVtaXQoZmlsZS5ndWlkKTtcbiAgICB9XG4gIH1cblxuICBnb1VwKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsZSkge1xuICAgICAgbGV0IGd1aWQgPSB0aGlzLnNlbGVjdGVkRmlsZS5ndWlkO1xuICAgICAgaWYgKGd1aWQubGVuZ3RoID4gMCAmJiBndWlkLmluZGV4T2YoJy8nKSA9PT0gLTEpIHtcbiAgICAgICAgZ3VpZCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3VpZCA9IGd1aWQucmVwbGFjZSgvXFwvW15cXC9dK1xcLz8kLywgJycpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KGd1aWQpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmICh1cGxvYWRfdXJsID09PSAkZXZlbnQpIHtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xuICAgICAgJChcIiNnZC11cGxvYWQtaW5wdXRcIikudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCRldmVudCkge1xuXG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoJycpO1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dTcGlubmVyKCkge1xuICAgIHJldHVybiAhdGhpcy5maWxlcztcbiAgfVxuXG4gIHVwbG9hZFVybCh1cmw6IHN0cmluZykge1xuICAgIGlmICh1cmwpIHtcbiAgICAgIHRoaXMudXJsRm9yVXBsb2FkLmVtaXQodXJsKTtcbiAgICAgIHRoaXMuY2xlYW5VcGxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGaWxlSW5wdXQoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgdGhpcy5fdXBsb2FkU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xuICB9XG5cbiAgY2xlYW5VcGxvYWQoKSB7XG4gICAgdGhpcy5zaG93VXBsb2FkRmlsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xuICB9XG59XG4iXX0=