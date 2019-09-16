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
var upload_disc = 'From Disc';
/** @type {?} */
var upload_url = 'From URL';
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
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (opening)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\">\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" size=\"5x\" aria-hidden=\"true\"></fa-icon>\n      </div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n             (change)=\"handleFileInput($event.target.files)\">\n\n      <div class=\"context\">\n        <div class=\"context-actions\">\n          <gd-drop-down>\n            <gd-drop-down-toggle>\n              <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n                Upload file\n              </gd-button>\n            </gd-drop-down-toggle>\n            <gd-drop-down-items>\n              <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n                <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n                <div class=\"text\">{{item.name}}</div>\n              </gd-drop-down-item>\n            </gd-drop-down-items>\n          </gd-drop-down>\n        </div>\n        <div class=\"context-panel\">\n          <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n            <input class=\"url-input\" placeholder=\"http://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n            <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n              <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n              <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\">\n          <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                    styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}#gd-browse-section{width:1024px;height:628px}.list-files-header{color:#acacac;font-size:10px}.header-name,.header-size{padding:10px 20px;width:90%}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 20px;width:10%}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;width:100%}.upload-panel .context{display:flex;flex-direction:column;width:100%;margin-left:20px;margin-top:20px;margin-right:20px}.upload-panel .context .context-actions{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-panel{display:flex;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:flex;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.file-description{cursor:pointer;overflow:hidden;display:flex;width:90%}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.file-description .ng-fa-icon{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon .ng-fa-icon{padding:8px;display:block}.go-up-icon{width:30px;height:30px;padding:10px 20px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.list-files-lines{border-top:1px solid #ccc}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:inherit;height:inherit;opacity:.9;z-index:1;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVksUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBQzNCLENBQUMsR0FBRyxNQUFNOztJQUVWLFdBQVcsR0FBRyxXQUFXOztJQUV6QixVQUFVLEdBQUcsVUFBVTs7SUFFdkIsZUFBZSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBRTVGO0lBa0JFLG1DQUFvQixjQUFrQztRQUFsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFadEQsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUloQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWhELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBR3ZCLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELDJDQUFPOzs7O0lBQVAsVUFBUSxJQUFZOztZQUNaLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7UUFDN0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM3QzthQUFNOztnQkFDQyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUk7WUFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0M7U0FDRjtRQUNELE9BQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGlEQUFhOzs7O0lBQWIsVUFBYyxJQUFlO1FBQzNCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxpREFBYTs7OztJQUFiLFVBQWMsSUFBZTtRQUMzQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsMENBQU07Ozs7SUFBTixVQUFPLElBQWU7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFJOzs7SUFBSjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7Z0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7WUFDakMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2FBQ1g7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLE1BQWM7UUFDekIsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBRVosSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELDZDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ25CLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtREFBZTs7OztJQUFmLFVBQWdCLEtBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7O2dCQXpHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsMmtHQUFrRDs7aUJBRW5EOzs7O2dCQWRPLGtCQUFrQjs7O3dCQWtCdkIsS0FBSzsrQkFDTCxLQUFLO21DQUNMLE1BQU07b0NBQ04sTUFBTTsrQkFDTixNQUFNOzBCQUNOLE1BQU07O0lBNkZULGdDQUFDO0NBQUEsQUExR0QsSUEwR0M7U0FyR1kseUJBQXlCOzs7SUFDcEMsNENBQTBCOztJQUUxQiwwQ0FBZTs7SUFDZixpREFBc0I7O0lBQ3RCLHFEQUF3RDs7SUFDeEQsc0RBQXlEOztJQUN6RCxpREFBb0Q7O0lBQ3BELDRDQUFnRDs7Ozs7SUFDaEQsaURBQWdDOztJQUNoQyxrREFBc0I7O0lBQ3RCLG1EQUF1Qjs7Ozs7SUFFWCxtREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4uL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuY29uc3QgdXBsb2FkX2Rpc2MgPSAnRnJvbSBEaXNjJztcblxuY29uc3QgdXBsb2FkX3VybCA9ICdGcm9tIFVSTCc7XG5cbmNvbnN0IHVwbG9hZHNfY2hvaWNlcyA9IFt7bmFtZTogdXBsb2FkX2Rpc2MsIGljb246ICdoZGQnfSwge25hbWU6IHVwbG9hZF91cmwsIGljb246ICdsaW5rJ31dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1icm93c2UtZmlsZXMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVwbG9hZHMgPSB1cGxvYWRzX2Nob2ljZXM7XG5cbiAgQElucHV0KCkgZmlsZXM7XG4gIEBJbnB1dCgpIHVwbG9hZENvbmZpZztcbiAgQE91dHB1dCgpIHNlbGVjdGVkRmlsZUd1aWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkRGlyZWN0b3J5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSB1cmxGb3JVcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgc2VsZWN0ZWRGaWxlOiBGaWxlTW9kZWw7XG4gIHNob3dVcGxvYWRVcmwgPSBmYWxzZTtcbiAgc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0U2l6ZShzaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCBtYiA9IHNpemUgLyAxMDI0IC8gMTAyNDtcbiAgICBpZiAobWIgPiAxKSB7XG4gICAgICByZXR1cm4gKE1hdGgucm91bmQobWIgKiAxMDApIC8gMTAwKSArICcgTUInO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrYiA9IHNpemUgLyAxMDI0O1xuICAgICAgaWYgKGtiID4gMSkge1xuICAgICAgICByZXR1cm4gKE1hdGgucm91bmQoa2IgKiAxMDApIC8gMTAwKSArICcgS0InO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZSArICcgQnl0ZXMnO1xuICB9XG5cbiAgZ2V0Rm9ybWF0TmFtZShmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5mb3JtYXQ7XG4gIH1cblxuICBnZXRGb3JtYXRJY29uKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKGZpbGUubmFtZSwgZmlsZS5kaXJlY3RvcnkpLmljb247XG4gIH1cblxuICBjaG9vc2UoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlO1xuICAgIGlmIChmaWxlLmRpcmVjdG9yeSB8fCBmaWxlLmlzRGlyZWN0b3J5KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoZmlsZS5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEZpbGVHdWlkLmVtaXQoZmlsZS5ndWlkKTtcbiAgICB9XG4gIH1cblxuICBnb1VwKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsZSkge1xuICAgICAgbGV0IGd1aWQgPSB0aGlzLnNlbGVjdGVkRmlsZS5ndWlkO1xuICAgICAgaWYgKGd1aWQubGVuZ3RoID4gMCAmJiBndWlkLmluZGV4T2YoJy8nKSA9PT0gLTEpIHtcbiAgICAgICAgZ3VpZCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3VpZCA9IGd1aWQucmVwbGFjZSgvXFwvW15cXC9dK1xcLz8kLywgJycpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdG9yeS5lbWl0KGd1aWQpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmICh1cGxvYWRfdXJsID09PSAkZXZlbnQpIHtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xuICAgICAgJChcIiNnZC11cGxvYWQtaW5wdXRcIikudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCRldmVudCkge1xuXG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoJycpO1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dTcGlubmVyKCkge1xuICAgIHJldHVybiAhdGhpcy5maWxlcztcbiAgfVxuXG4gIHVwbG9hZFVybCh1cmw6IHN0cmluZykge1xuICAgIGlmICh1cmwpIHtcbiAgICAgIHRoaXMudXJsRm9yVXBsb2FkLmVtaXQodXJsKTtcbiAgICAgIHRoaXMuY2xlYW5VcGxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGaWxlSW5wdXQoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgdGhpcy5fdXBsb2FkU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xuICB9XG5cbiAgY2xlYW5VcGxvYWQoKSB7XG4gICAgdGhpcy5zaG93VXBsb2FkRmlsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1VwbG9hZFVybCA9IGZhbHNlO1xuICB9XG59XG4iXX0=