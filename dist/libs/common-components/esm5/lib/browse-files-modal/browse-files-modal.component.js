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
var upload_url = 'url';
/** @type {?} */
var uploads_choices = [{ name: upload_disc, icon: 'hdd' }, { name: upload_url, icon: 'link' }];
var BrowseFilesModalComponent = /** @class */ (function () {
    function BrowseFilesModalComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.uploads = uploads_choices;
        this.selectedFileGuid = new EventEmitter();
        this.selectedDirectory = new EventEmitter();
        this.urlForUpload = new EventEmitter();
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
        /** @type {?} */
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            /** @type {?} */
            var kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
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
        if (file.directory) {
            this.selectedDirectory.emit(file.guid);
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
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" gdDnd [isBackground]=\"false\" (open)=\"showUploadFile=$event\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\">\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n              <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\">\n          <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}.list-files-header{color:#acacac;font-size:10px;padding-left:21px}.header-size{position:relative;left:-24px}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 6px;margin-left:12px}.file-description{cursor:pointer;overflow:hidden;display:flex}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;left:20px}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.file-description .ng-fa-icon{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon .ng-fa-icon{padding:8px;display:block}.go-up-icon{width:30px;height:30px;margin-left:12px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check .ng-fa-icon{display:block;padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.gd-dnd-wrap{border:2px dashed #ccc;background-color:#f8f8f8;cursor:default;position:absolute;width:983px;height:626px;opacity:.9;z-index:1;left:20px;display:flex;text-align:center;justify-content:center}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300;margin-top:50%}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
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
        urlForUpload: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVksUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBQzNCLENBQUMsR0FBRyxNQUFNOztJQUVWLFdBQVcsR0FBRyxNQUFNOztJQUVwQixVQUFVLEdBQUcsS0FBSzs7SUFFbEIsZUFBZSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBRTVGO0lBaUJFLG1DQUFvQixjQUFrQztRQUFsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFYdEQsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUloQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXBELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBR3ZCLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELDJDQUFP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VSxHQUFXO1FBQ25CLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtREFBZTs7OztJQUFmLFVBQWdCLEtBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7O2dCQXJHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsa3hFQUFrRDs7aUJBRW5EOzs7O2dCQWRPLGtCQUFrQjs7O3dCQWtCdkIsS0FBSzsrQkFDTCxLQUFLO21DQUNMLE1BQU07b0NBQ04sTUFBTTsrQkFDTixNQUFNOztJQTBGVCxnQ0FBQztDQUFBLEFBdEdELElBc0dDO1NBakdZLHlCQUF5Qjs7O0lBQ3BDLDRDQUEwQjs7SUFFMUIsMENBQWU7O0lBQ2YsaURBQXNCOztJQUN0QixxREFBd0Q7O0lBQ3hELHNEQUF5RDs7SUFDekQsaURBQW9EOzs7OztJQUNwRCxpREFBZ0M7O0lBQ2hDLGtEQUFzQjs7SUFDdEIsbURBQXVCOzs7OztJQUVYLG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVNb2RlbCwgRmlsZVV0aWx9IGZyb20gXCIuLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5jb25zdCB1cGxvYWRfZGlzYyA9ICdEaXNjJztcblxuY29uc3QgdXBsb2FkX3VybCA9ICd1cmwnO1xuXG5jb25zdCB1cGxvYWRzX2Nob2ljZXMgPSBbe25hbWU6IHVwbG9hZF9kaXNjLCBpY29uOiAnaGRkJ30sIHtuYW1lOiB1cGxvYWRfdXJsLCBpY29uOiAnbGluayd9XTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtYnJvd3NlLWZpbGVzLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1cGxvYWRzID0gdXBsb2Fkc19jaG9pY2VzO1xuXG4gIEBJbnB1dCgpIGZpbGVzO1xuICBASW5wdXQoKSB1cGxvYWRDb25maWc7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEZpbGVHdWlkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZERpcmVjdG9yeSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgdXJsRm9yVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIHByaXZhdGUgc2VsZWN0ZWRGaWxlOiBGaWxlTW9kZWw7XG4gIHNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0U2l6ZShzaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcbiAgICBpZiAobWIgPiAxKSB7XG4gICAgICByZXR1cm4gKE1hdGgucm91bmQobWIgKiAxMDApIC8gMTAwKSArICcgTUInO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrYiA9IHNpemUgLyAxMDI0O1xuICAgICAgaWYgKGtiID4gMSkge1xuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoa2IgKiAxMDApIC8gMTAwKSArICcgS0InO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZSArICcgQnl0ZXMnO1xuICB9XG5cbiAgZ2V0Rm9ybWF0TmFtZShmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5mb3JtYXQ7XG4gIH1cblxuICBnZXRGb3JtYXRJY29uKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKGZpbGUubmFtZSwgZmlsZS5kaXJlY3RvcnkpLmljb247XG4gIH1cblxuICBjaG9vc2UoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlO1xuICAgIGlmIChmaWxlLmRpcmVjdG9yeSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KGZpbGUuZ3VpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlR3VpZC5lbWl0KGZpbGUuZ3VpZCk7XG4gICAgfVxuICB9XG5cbiAgZ29VcCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZpbGUpIHtcbiAgICAgIGxldCBndWlkID0gdGhpcy5zZWxlY3RlZEZpbGUuZ3VpZDtcbiAgICAgIGlmIChndWlkLmxlbmd0aCA+IDAgJiYgZ3VpZC5pbmRleE9mKCcvJykgPT09IC0xKSB7XG4gICAgICAgIGd1aWQgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGd1aWQgPSBndWlkLnJlcGxhY2UoL1xcL1teXFwvXStcXC8/JC8sICcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdChndWlkKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RVcGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBpZiAodXBsb2FkX3VybCA9PT0gJGV2ZW50KSB7XG4gICAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgICAgICQoXCIjZ2QtdXBsb2FkLWlucHV0XCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmZpbGVzID0gbnVsbDtcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdCgnJyk7XG4gICAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzaG93U3Bpbm5lcigpIHtcbiAgICByZXR1cm4gIXRoaXMuZmlsZXM7XG4gIH1cblxuICB1cGxvYWRVcmwodXJsOiBzdHJpbmcpIHtcbiAgICBpZiAodXJsKSB7XG4gICAgICB0aGlzLnVybEZvclVwbG9hZC5lbWl0KHVybCk7XG4gICAgICB0aGlzLmNsZWFuVXBsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRmlsZUlucHV0KGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIHRoaXMuX3VwbG9hZFNlcnZpY2UuY2hhbmdlRmlsZXNMaXN0KGZpbGVzKTtcbiAgfVxuXG4gIGNsZWFuVXBsb2FkKCkge1xuICAgIHRoaXMuc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgfVxufVxuIl19