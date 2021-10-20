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
                    template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\n    <div class=\"dnd-wrapper\">\n      <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n      <span class=\"text\">Drop file here to upload</span>\n    </div>\n  </div>\n  <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n    <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\"\n            (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"select-all\">\n      <input type=\"checkbox\" [disabled]=\"!(this.files && this.files.length > 0)\" class=\"gd-checkbox\" [checked]=\"allItemsSelected()\"\n               (change)=\"selectAllItems($event.target.checked);\">\n    </div>\n    <div class=\"context\">\n      <div class=\"context-actions\">\n          <gd-button [icon]=\"'plus'\" [disabled]=\"!anyItemSelected()\" [intent]=\"'primary'\" [iconOnly]=\"false\" (click)=\"addSelectedToIndex()\">\n            {{getLabelString()}}\n          </gd-button>\n        <gd-drop-down>\n          <gd-drop-down-toggle>\n            <gd-button [icon]=\"'upload'\" [intent]=\"'brand'\" [iconOnly]=\"false\">\n              Upload file\n            </gd-button>\n          </gd-drop-down-toggle>\n          <gd-drop-down-items>\n            <gd-drop-down-item (selected)=\"selectUpload(item.name)\" *ngFor=\"let item of uploads\">\n              <fa-icon [icon]=\"['fas', item.icon]\"></fa-icon>\n              <div class=\"text\">{{item.name}}</div>\n            </gd-drop-down-item>\n          </gd-drop-down-items>\n        </gd-drop-down>\n      </div>\n      <div class=\"context-panel\" *ngIf=\"showUploadUrl\">\n        <div class=\"upload-url\">\n          <input class=\"url-input\" placeholder=\"https://\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n          <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"list-files-header\" [ngClass]=\"{'upload-url': showUploadUrl}\">\n    <div class=\"header-name\">FILE</div>\n    <div class=\"header-size\">SIZE</div>\n  </div>\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-body\">\n        <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">..</div>\n        </div>\n        <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n          <div class=\"gd-file-checkbox\" [ngClass]=\"{'empty': file && (file.isDirectory || file.directory)}\">\n            <input type=\"checkbox\" *ngIf=\"file && !file.isDirectory && !file.directory\" [checked]=\"file.selected\"\n                   (change)=\"selectSingleItem($event.target.checked, file);\" class=\"gd-checkbox gd-checkbox-single\">\n          </div>\n          <div class=\"file-description\">\n            <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n            <div class=\"file-name-format\">\n              <div class=\"file-name\" [ngClass]=\"{'gd-folder-name' : file.isDirectory || file.directory}\">{{file?.name}}</div>\n              <div class=\"file-format\">{{getFormatName(file)}}</div>\n            </div>\n          </div>\n          <div class=\"file-size\">{{getSize(file?.size)}}</div>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n      <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2VhcmNoLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1icm93c2UtZmlsZXMtbW9kYWwvc2VhcmNoLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR2xELDRCQUlDOzs7SUFIQyxzQkFBYTs7SUFDYix1QkFBVzs7SUFDWCx5QkFBaUI7O0FBR25CO0lBTXFELDJEQUF5QjtJQU01RSx5Q0FBWSxjQUFrQyxFQUNwQyxjQUE2QixFQUM3QixhQUEyQjtRQUZyQyxZQUdFLGtCQUFNLGNBQWMsQ0FBQyxTQUN0QjtRQUhTLG9CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLG1CQUFhLEdBQWIsYUFBYSxDQUFjO1FBTjNCLGVBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3hDLHVCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEQsaUJBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDOztJQU1wRCxDQUFDOzs7OztJQUVELHdEQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCwwREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLE9BQWdCLEVBQUUsSUFBdUI7O1lBQ2xELGFBQWEs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SSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsaURBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QywrOEhBQXlEOztpQkFFMUQ7Ozs7Z0JBZG1DLGtCQUFrQjtnQkFDN0MsYUFBYTtnQkFEa0MsWUFBWTs7O3dCQWlCakUsS0FBSzs0QkFDTCxNQUFNO29DQUNOLE1BQU07OEJBQ04sTUFBTTs7SUFvRVQsc0NBQUM7Q0FBQSxBQTlFRCxDQU1xRCx5QkFBeUIsR0F3RTdFO1NBeEVZLCtCQUErQjs7O0lBQzFDLGdEQUFvQzs7SUFDcEMsb0RBQWtEOztJQUNsRCw0REFBMEQ7O0lBQzFELHNEQUFvRDs7Ozs7SUFHbEQseURBQXFDOzs7OztJQUNyQyx3REFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBVcGxvYWRGaWxlc1NlcnZpY2UsIE1vZGFsU2VydmljZSwgQ29tbW9uTW9kYWxzIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBFeHRlbmRlZEZpbGVNb2RlbCB9IGZyb20gXCIuLi9zZWFyY2gtbW9kZWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICB3YXJuaW5nOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zZWFyY2gtYnJvd3NlLWZpbGVzLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGV4dGVuZHMgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpbGVzOiBFeHRlbmRlZEZpbGVNb2RlbFtdO1xuICBAT3V0cHV0KCkgc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgZmlsZXNBZGRlZFRvSW5kZXggPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBmaWxlRHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihfdXBsb2FkU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHtcbiAgICBzdXBlcihfdXBsb2FkU2VydmljZSk7XG4gIH1cblxuICBzZWxlY3RBbGxJdGVtcyhjaGVja2VkOiBib29sZWFuKXtcbiAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGNoZWNrZWQpO1xuICB9XG5cbiAgc2VsZWN0U2luZ2xlSXRlbShjaGVja2VkOiBib29sZWFuLCBmaWxlOiBFeHRlbmRlZEZpbGVNb2RlbCl7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKGYgPT4gZi5ndWlkID09PSBmaWxlLmd1aWQpO1xuICAgIGlmIChzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBzZWxlY3RlZEZpbGVzWzBdLnNlbGVjdGVkID0gY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBnZXRMYWJlbFN0cmluZygpe1xuICAgIGNvbnN0IGxhYmVsID0gJ0FkZCB0byBpbmRleCdcblxuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkubGVuZ3RoO1xuICAgICAgcmV0dXJuIHNlbGVjdGVkQ291bnQgPiAwID8gJ0FkZCAnICsgc2VsZWN0ZWRDb3VudCArICcgdG8gaW5kZXgnIDogbGFiZWw7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICB9XG5cbiAgYW55SXRlbVNlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zZWxlY3RlZCkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhbGxJdGVtc1NlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5KS5sZW5ndGggPiAwICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gIWZpbGUuaXNEaXJlY3RvcnkgJiYgIWZpbGUuZGlyZWN0b3J5ICYmIGZpbGUuc2VsZWN0ZWQpLmxlbmd0aCBcbiAgICAgICAgID09PSB0aGlzLmZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLmlzRGlyZWN0b3J5ICYmICFmaWxlLmRpcmVjdG9yeSkubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFkZFNlbGVjdGVkVG9JbmRleCgpIHtcbiAgICBjb25zdCBpdGVtc1RvSW5kZXggPSBuZXcgQXJyYXk8RXh0ZW5kZWRGaWxlTW9kZWw+KCk7XG5cbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGYpID0+IHtcbiAgICAgIGlmIChmLnNlbGVjdGVkICYmICFmLmlzRGlyZWN0b3J5ICYmICFmLmRpcmVjdG9yeSl7XG4gICAgICAgIGl0ZW1zVG9JbmRleC5wdXNoKGYpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5hZGRGaWxlc1RvSW5kZXgoaXRlbXNUb0luZGV4KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5maWxlc0FkZGVkVG9JbmRleC5lbWl0KHRydWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XG4gIH1cblxuICBkcm9wcGVkKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuZmlsZURyb3BwZWQuZW1pdCgkZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19