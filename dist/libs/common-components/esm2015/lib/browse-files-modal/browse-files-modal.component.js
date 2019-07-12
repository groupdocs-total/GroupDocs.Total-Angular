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
const upload_url = 'url';
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
        if (file.directory) {
            this.selectedDirectory.emit(file.guid);
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
                template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" gdDnd [isBackground]=\"false\" (open)=\"showUploadFile=$event\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\">\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n            <fa-icon [icon]=\"['fas','check']\"></fa-icon>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n              <fa-icon [icon]=\"['fas','level-up-alt']\"></fa-icon>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\">\n          <fa-icon [icon]=\"['fas',getFormatIcon(file)]\" [class]=\"'ng-fa-icon fa-' + getFormatIcon(file)\"></fa-icon>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n      &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
                styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}.list-files-header{color:#acacac;font-size:10px;padding-left:21px}.header-size{position:relative;left:-24px}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 6px;margin-left:12px}.file-description{cursor:pointer;overflow:hidden;display:flex}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;left:20px}.file-description .ng-fa-icon.fa-file-pdf{color:#e21717}.file-description .ng-fa-icon.fa-file-word{color:#6979b9}.file-description .ng-fa-icon.fa-file-powerpoint{color:#e29417}.file-description .ng-fa-icon.fa-file-excel{color:#3fa300}.file-description .ng-fa-icon.fa-file-image{color:#e217da}.file-description .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.file-description .ng-fa-icon{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon .ng-fa-icon{padding:8px;display:block}.go-up-icon{width:30px;height:30px;margin-left:12px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check .ng-fa-icon{display:block;padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.gd-dnd-wrap{border:2px dashed #ccc;background-color:#f8f8f8;cursor:default;position:absolute;width:983px;height:626px;opacity:.9;z-index:1;left:20px;display:flex;text-align:center;justify-content:center}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300;margin-top:50%}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
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
    urlForUpload: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVksUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNOztNQUVWLFdBQVcsR0FBRyxNQUFNOztNQUVwQixVQUFVLEdBQUcsS0FBSzs7TUFFbEIsZUFBZSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBTzVGLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFZcEMsWUFBb0IsY0FBa0M7UUFBbEMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBWHRELFlBQU8sR0FBRyxlQUFlLENBQUM7UUFJaEIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVwRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUd2QixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7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Q0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7WUFyR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGt4RUFBa0Q7O2FBRW5EOzs7O1lBZE8sa0JBQWtCOzs7b0JBa0J2QixLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsTUFBTTtnQ0FDTixNQUFNOzJCQUNOLE1BQU07Ozs7SUFOUCw0Q0FBMEI7O0lBRTFCLDBDQUFlOztJQUNmLGlEQUFzQjs7SUFDdEIscURBQXdEOztJQUN4RCxzREFBeUQ7O0lBQ3pELGlEQUFvRDs7Ozs7SUFDcEQsaURBQWdDOztJQUNoQyxrREFBc0I7O0lBQ3RCLG1EQUF1Qjs7Ozs7SUFFWCxtREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4uL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuY29uc3QgdXBsb2FkX2Rpc2MgPSAnRGlzYyc7XG5cbmNvbnN0IHVwbG9hZF91cmwgPSAndXJsJztcblxuY29uc3QgdXBsb2Fkc19jaG9pY2VzID0gW3tuYW1lOiB1cGxvYWRfZGlzYywgaWNvbjogJ2hkZCd9LCB7bmFtZTogdXBsb2FkX3VybCwgaWNvbjogJ2xpbmsnfV07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWJyb3dzZS1maWxlcy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXBsb2FkcyA9IHVwbG9hZHNfY2hvaWNlcztcblxuICBASW5wdXQoKSBmaWxlcztcbiAgQElucHV0KCkgdXBsb2FkQ29uZmlnO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRGaWxlR3VpZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWREaXJlY3RvcnkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHVybEZvclVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBwcml2YXRlIHNlbGVjdGVkRmlsZTogRmlsZU1vZGVsO1xuICBzaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gIHNob3dVcGxvYWRGaWxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXBsb2FkU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldFNpemUoc2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbWIgPSBzaXplIC8gMTAyNCAvIDEwMjQ7XG4gICAgaWYgKG1iID4gMSkge1xuICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKG1iICogMTAwKSAvIDEwMCkgKyAnIE1CJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2IgPSBzaXplIC8gMTAyNDtcbiAgICAgIGlmIChrYiA+IDEpIHtcbiAgICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKGtiICogMTAwKSAvIDEwMCkgKyAnIEtCJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpemUgKyAnIEJ5dGVzJztcbiAgfVxuXG4gIGdldEZvcm1hdE5hbWUoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQoZmlsZS5uYW1lLCBmaWxlLmRpcmVjdG9yeSkuZm9ybWF0O1xuICB9XG5cbiAgZ2V0Rm9ybWF0SWNvbihmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5pY29uO1xuICB9XG5cbiAgY2hvb3NlKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZTtcbiAgICBpZiAoZmlsZS5kaXJlY3RvcnkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdChmaWxlLmd1aWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZUd1aWQuZW1pdChmaWxlLmd1aWQpO1xuICAgIH1cbiAgfVxuXG4gIGdvVXAoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWxlKSB7XG4gICAgICBsZXQgZ3VpZCA9IHRoaXMuc2VsZWN0ZWRGaWxlLmd1aWQ7XG4gICAgICBpZiAoZ3VpZC5sZW5ndGggPiAwICYmIGd1aWQuaW5kZXhPZignLycpID09PSAtMSkge1xuICAgICAgICBndWlkID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBndWlkID0gZ3VpZC5yZXBsYWNlKC9cXC9bXlxcL10rXFwvPyQvLCAnJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoZ3VpZCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0VXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgaWYgKHVwbG9hZF91cmwgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gICAgICAkKFwiI2dkLXVwbG9hZC1pbnB1dFwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoJycpO1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2hvd1NwaW5uZXIoKSB7XG4gICAgcmV0dXJuICF0aGlzLmZpbGVzO1xuICB9XG5cbiAgdXBsb2FkVXJsKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgdGhpcy51cmxGb3JVcGxvYWQuZW1pdCh1cmwpO1xuICAgICAgdGhpcy5jbGVhblVwbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpbGVJbnB1dChmaWxlczogRmlsZUxpc3QpIHtcbiAgICB0aGlzLl91cGxvYWRTZXJ2aWNlLmNoYW5nZUZpbGVzTGlzdChmaWxlcyk7XG4gIH1cblxuICBjbGVhblVwbG9hZCgpIHtcbiAgICB0aGlzLnNob3dVcGxvYWRGaWxlID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==