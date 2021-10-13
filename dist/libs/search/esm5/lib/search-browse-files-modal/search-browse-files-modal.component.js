/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowseFilesModalComponent, UploadFilesService, ModalService, CommonModals } from '@groupdocs.examples.angular/common-components';
import { SearchService } from '../search.service';
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
var SearchBrowseFilesModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBrowseFilesModalComponent, _super);
    function SearchBrowseFilesModalComponent(_uploadService, _searchService, _modalService) {
        var _this = _super.call(this, _uploadService) || this;
        _this._searchService = _searchService;
        _this._modalService = _modalService;
        _this.selectAll = new EventEmitter();
        _this.filesAddedToIndex = new EventEmitter();
        _this.fileDropped = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    SearchBrowseFilesModalComponent.prototype.selectAllItems = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.selectAll.emit(checked);
    };
    /**
     * @param {?} checked
     * @param {?} file
     * @return {?}
     */
    SearchBrowseFilesModalComponent.prototype.selectSingleItem = /**
     * @param {?} checked
     * @param {?} file
     * @return {?}
     */
    function (checked, file) {
        /** @type {?} */
        var selectedFiles = this.files.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.guid === file.guid; }));
        if (selectedFiles.length === 1) {
            selectedFiles[0].selected = checked;
        }
    };
    /**
     * @return {?}
     */
    SearchBrowseFilesModalComponent.prototype.getLabelString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var label = 'Add to index';
        if (this.files && this.files.length > 0) {
            /** @type {?} */
            var selectedCount = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return file.selected; })).length;
            return selectedCount > 0 ? 'Add ' + selectedCount + ' to index' : label;
        }
        else {
            return label;
        }
    };
    /**
     * @return {?}
     */
    SearchBrowseFilesModalComponent.prototype.anyItemSelected = /**
     * @return {?}
     */
    function () {
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
    SearchBrowseFilesModalComponent.prototype.allItemsSelected = /**
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
    /**
     * @return {?}
     */
    SearchBrowseFilesModalComponent.prototype.addSelectedToIndex = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var itemsToIndex = new Array();
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (f.selected && !f.isDirectory && !f.directory) {
                itemsToIndex.push(f);
            }
        }));
        this._searchService.addFilesToIndex(itemsToIndex).subscribe((/**
         * @return {?}
         */
        function () {
            _this.filesAddedToIndex.emit(true);
        }));
        this._modalService.close(CommonModals.BrowseFiles);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchBrowseFilesModalComponent.prototype.dropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.fileDropped.emit($event);
        }
    };
    SearchBrowseFilesModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-search-browse-files-modal',
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\r\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\r\n    <div class=\"dnd-wrapper\">\r\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n      <span class=\"text\">Drop file here to upload</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\r\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\r\n            (change)=\"handleFileInput($event.target.files)\">\r\n    <div class=\"select-all\">\r\n      <input type=\"checkbox\" [disabled]=\"!(this.files && this.files.length > 0)\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\r\n               (change)=\"selectAllItems($event.target.checked);\">\r\n    </div>\r\n    <div class=\"context\">\r\n      <div class=\"context-actions\">\r\n          <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\" (click)=\"addSelectedToIndex()\">\r\n            {{getLabelString()}}\r\n          </gd-button>\r\n        <gd-drop-down>\r\n          <gd-drop-down-toggle>\r\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\r\n              Upload file\r\n            </gd-button>\r\n          </gd-drop-down-toggle>\r\n          <gd-drop-down-items>\r\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\r\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\r\n              <div class=\"text\">{{item.name}}</div>\r\n            </gd-drop-down-item>\r\n          </gd-drop-down-items>\r\n        </gd-drop-down>\r\n      </div>\r\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\r\n        <div class=\"upload-url\">\r\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\r\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\r\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\r\n    <div class=\"header-name\">FILE</div>\r\n    <div class=\"header-size\">SIZE</div>\r\n  </div>\r\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\r\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\r\n      <div class=\"list-files-body\">\r\n        <div class=\"go-up\" (click)=\"goUp()\">\r\n          <div class=\"go-up-icon\">\r\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\r\n          </div>\r\n          <div class=\"go-up-dots\">..</div>\r\n        </div>\r\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\r\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\r\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\r\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\r\n          </div>\r\n          <div class=\"file-description\">\r\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\r\n            <div class=\"file-name-format\">\r\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\r\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\r\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n      &nbsp;Loading... Please wait.\r\n    </div>\r\n  </section>\r\n</gd-modal>\r\n",
                    styles: [".gd-modal-table{width:100%;text-align:left}#gd-browse-section{width:1036px;height:561px;overflow-y:auto}.list-files-header{height:60px;color:#6e6e6e;font-size:13px;font-weight:700;background-color:#f4f4f4;margin-top:24px}.list-files-header.upload-url{margin-top:20px}.header-name{padding-left:68px;width:90%;line-height:60px}.header-size{line-height:60px}.file-size,.header-size{width:7%;color:#777;text-align:left}.file-size{font-size:12px;width:7%;line-height:79px}.file-description{display:-webkit-box;display:flex;width:90%;padding:18px 0;font-size:14px;-webkit-box-flex:1;flex:1;cursor:pointer;overflow:hidden}.file-description .ng-fa-icon{font-size:32px}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.upload-panel{display:-webkit-box;display:flex;position:relative;width:100%;margin-top:24px;margin-right:24px}.upload-panel .select-all{height:37px;margin:0 16px 0 15px;width:37px;line-height:44px;text-align:center}.upload-panel .context{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin-right:24px}.upload-panel .context .context-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-actions>gd-button{margin-right:10px}.upload-panel .context .context-actions :last-child{margin-right:0}.upload-panel .context .context-actions ::ng-deep .button{height:37px;width:96px;padding:0;-webkit-box-pack:center;justify-content:center;font-size:14px}.upload-panel .context .context-actions ::ng-deep .button ::ng-deep .text{font-size:10px}.upload-panel .context .context-actions ::ng-deep .button.primary{width:117px;background-color:#4b566c}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive{width:106px;background-color:#959da5}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ .text{color:#3e4e5a}.upload-panel .context .context-actions ::ng-deep .button.primary.inactive /deep/ fa-icon{color:#3e4e5a}.upload-panel .context .context-panel{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%;margin-top:20px}.upload-panel .context .context-panel .upload-url{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.upload-panel .context .context-panel .upload-url .url-input{width:100%;height:27px;border:1px solid #25c2d4;font-size:14px;padding-left:6px}.upload-panel .context .context-panel .upload-url .url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.upload-panel .context .context-panel .upload-url .url-check .ng-fa-icon{display:block;padding:8px}.upload-panel gd-drop-down{margin-right:10px}.upload-panel gd-drop-down /deep/ .drop-down-item .text{margin-left:7px;text-transform:uppercase;color:#6e6e6e}.upload-panel gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.upload-panel gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.list-files-header,.list-files-lines{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}.file-description .ng-fa-icon.fa-file-pdf{color:#e04e4e}.file-description .ng-fa-icon.fa-file-word{color:#539cf0}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29e1e}.file-description .ng-fa-icon.fa-file-excel{color:#7cbc46}.file-description .ng-fa-icon.fa-file-image{color:#c375ed}.file-description .ng-fa-icon.fa-file,.file-description .ng-fa-icon.fa-file-alt,.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#4b566c}.go-up{cursor:pointer;display:-webkit-box;display:flex;font-size:26px;color:#4b566c;height:79px}.go-up-dots{margin-left:20px;margin-top:22px;font-size:16px}.go-up-icon{display:block;padding:18px 0 18px 68px}.file-name{font-size:16px;color:#6e6e6e;overflow:hidden;text-overflow:ellipsis}.file-name-format{padding-left:11px;overflow:hidden}.file-format{font-size:10px;padding-top:3px;color:#acacac}.go-up,.list-files-lines{border-bottom:1px solid #e7e7e7}.list-files-lines:hover{background-color:#e5e5e5}.gd-dnd-wrap{background-color:#fff;cursor:default;position:absolute;width:100%;height:calc(100% - 60px);background:rgba(255,255,255,.7);z-index:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-drag-n-drop-icon{margin-top:-50px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-file-checkbox{height:37px;margin:21px 16px 21px 15px;width:37px;line-height:44px;text-align:center}.gd-file-checkbox.empty{width:37px}.file-format-select{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:36px;margin-right:24px}.file-format-select ::ng-deep .button{padding:0;width:36px;margin:0;font-size:14px}.file-format-select ::ng-deep .button .text{padding:0}.file-format-select ::ng-deep .show .button{color:#959da5}.file-format-select gd-drop-down /deep/ .drop-down-item{width:96px}.file-format-select gd-drop-down /deep/ .drop-down-item .text{padding-left:7px;text-transform:uppercase;color:#6e6e6e}.file-format-select gd-drop-down /deep/ .drop-down-item:hover{background-color:#4b566c}.file-format-select gd-drop-down /deep/ .drop-down-item:hover *{color:#fff}.gd-checkbox{width:19px;height:19px;margin:0}.gd-checkbox:before{position:relative;display:-webkit-box;display:flex;width:17px;height:17px;border:1px solid #707070;content:\"\";background:#fff;cursor:pointer}.gd-checkbox:after{position:relative;display:-webkit-box;display:flex;left:1px;top:-18px;width:16px;height:16px;content:\"\";cursor:pointer}.gd-checkbox:checked:after{font-family:\"Font Awesome 5 Free\";content:\"\\f00c\";font-weight:900;font-size:16px;color:#6e6e6e}.gd-add-selected.active{cursor:pointer;opacity:1}.gd-add-selected{width:140px;height:36px;background-color:#3e4e5a;color:#fff;margin:0 8px 0 0;border:0;cursor:not-allowed;opacity:.43}.gd-folder-name{margin-top:8px}.dnd-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:259px;position:absolute}.dnd-wrapper .text{color:#6e6e6e;font-size:14px}.dnd-wrapper .icon{display:-webkit-box;display:flex;width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}@media (max-width:1037px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}#gd-browse-section{width:100%;height:calc(100% - 146px)}}"]
                }] }
    ];
    /** @nocollapse */
    SearchBrowseFilesModalComponent.ctorParameters = function () { return [
        { type: UploadFilesService },
        { type: SearchService },
        { type: ModalService }
    ]; };
    SearchBrowseFilesModalComponent.propDecorators = {
        files: [{ type: Input }],
        selectAll: [{ type: Output }],
        filesAddedToIndex: [{ type: Output }],
        fileDropped: [{ type: Output }]
    };
    return SearchBrowseFilesModalComponent;
}(BrowseFilesModalComponent));
export { SearchBrowseFilesModalComponent };
if (false) {
    /** @type {?} */
    SearchBrowseFilesModalComponent.prototype.files;
    /** @type {?} */
    SearchBrowseFilesModalComponent.prototype.selectAll;
    /** @type {?} */
    SearchBrowseFilesModalComponent.prototype.filesAddedToIndex;
    /** @type {?} */
    SearchBrowseFilesModalComponent.prototype.fileDropped;
    /**
     * @type {?}
     * @private
     */
    SearchBrowseFilesModalComponent.prototype._searchService;
    /**
     * @type {?}
     * @private
     */
    SearchBrowseFilesModalComponent.prototype._modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2VhcmNoLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1icm93c2UtZmlsZXMtbW9kYWwvc2VhcmNoLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR2xELDRCQUlDOzs7SUFIQyxzQkFBYTs7SUFDYix1QkFBVzs7SUFDWCx5QkFBaUI7O0FBR25CO0lBTXFELDJEQUF5QjtJQU01RSx5Q0FBWSxjQUFrQyxFQUNwQyxjQUE2QixFQUM3QixhQUEyQjtRQUZyQyxZQUdFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUhTLG9CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLG1CQUFhLEdBQWIsYUFBYSxDQUFjO1FBTjNCLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3hDLHVCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEQsaUJBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDOztJQU1wRCxDQUFDOzs7OztJQUVELHdEQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCwwREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLE9BQWdCLEVBQUUsSUFBdUI7O1lBQ2xELGFBQWEs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SSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsaURBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QywybUlBQXlEOztpQkFFMUQ7Ozs7Z0JBZG1DLGtCQUFrQjtnQkFDN0MsYUFBYTtnQkFEa0MsWUFBWTs7O3dCQWlCakUsS0FBSzs0QkFDTCxNQUFNO29DQUNOLE1BQU07OEJBQ04sTUFBTTs7SUFvRVQsc0NBQUM7Q0FBQSxBQTlFRCxDQU1xRCx5QkFBeUIsR0F3RTdFO1NBeEVZLCtCQUErQjs7O0lBQzFDLGdEQUFvQzs7SUFDcEMsb0RBQWtEOztJQUNsRCw0REFBMEQ7O0lBQzFELHNEQUFvRDs7Ozs7SUFHbEQseURBQXFDOzs7OztJQUNyQyx3REFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsIFVwbG9hZEZpbGVzU2VydmljZSwgTW9kYWxTZXJ2aWNlLCBDb21tb25Nb2RhbHMgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHRlbmRlZEZpbGVNb2RlbCB9IGZyb20gXCIuLi9zZWFyY2gtbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgd2FybmluZzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zZWFyY2gtYnJvd3NlLWZpbGVzLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBleHRlbmRzIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGZpbGVzQWRkZWRUb0luZGV4ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBmaWxlRHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoX3VwbG9hZFNlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgIHByaXZhdGUgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xyXG4gICAgc3VwZXIoX3VwbG9hZFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWxsSXRlbXMoY2hlY2tlZDogYm9vbGVhbil7XHJcbiAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0U2luZ2xlSXRlbShjaGVja2VkOiBib29sZWFuLCBmaWxlOiBFeHRlbmRlZEZpbGVNb2RlbCl7XHJcbiAgICBjb25zdCBzZWxlY3RlZEZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoZiA9PiBmLmd1aWQgPT09IGZpbGUuZ3VpZCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRGaWxlcy5sZW5ndGggPT09IDEpe1xyXG4gICAgICBzZWxlY3RlZEZpbGVzWzBdLnNlbGVjdGVkID0gY2hlY2tlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExhYmVsU3RyaW5nKCl7XHJcbiAgICBjb25zdCBsYWJlbCA9ICdBZGQgdG8gaW5kZXgnXHJcblxyXG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuc2VsZWN0ZWQpLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIHNlbGVjdGVkQ291bnQgPiAwID8gJ0FkZCAnICsgc2VsZWN0ZWRDb3VudCArICcgdG8gaW5kZXgnIDogbGFiZWw7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBsYWJlbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFueUl0ZW1TZWxlY3RlZCgpIHtcclxuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBmaWxlLnNlbGVjdGVkKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhbGxJdGVtc1NlbGVjdGVkKCkge1xyXG4gICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5pc0RpcmVjdG9yeSAmJiAhZmlsZS5kaXJlY3RvcnkpLmxlbmd0aCA+IDAgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLmlzRGlyZWN0b3J5ICYmICFmaWxlLmRpcmVjdG9yeSAmJiBmaWxlLnNlbGVjdGVkKS5sZW5ndGggXHJcbiAgICAgICAgID09PSB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLmlzRGlyZWN0b3J5ICYmICFmaWxlLmRpcmVjdG9yeSkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhZGRTZWxlY3RlZFRvSW5kZXgoKSB7XHJcbiAgICBjb25zdCBpdGVtc1RvSW5kZXggPSBuZXcgQXJyYXk8RXh0ZW5kZWRGaWxlTW9kZWw+KCk7XHJcblxyXG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgIGlmIChmLnNlbGVjdGVkICYmICFmLmlzRGlyZWN0b3J5ICYmICFmLmRpcmVjdG9yeSl7XHJcbiAgICAgICAgaXRlbXNUb0luZGV4LnB1c2goZik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UuYWRkRmlsZXNUb0luZGV4KGl0ZW1zVG9JbmRleCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5maWxlc0FkZGVkVG9JbmRleC5lbWl0KHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XHJcbiAgfVxyXG5cclxuICBkcm9wcGVkKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLmZpbGVEcm9wcGVkLmVtaXQoJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19