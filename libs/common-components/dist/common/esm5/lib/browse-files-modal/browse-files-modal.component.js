import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUtil } from "../file.service";
import { UploadFilesService } from "../upload-files.service";
import * as jquery from "jquery";
var $ = jquery;
var upload_disc = 'Disc';
var upload_url = 'url';
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
    BrowseFilesModalComponent.prototype.ngOnInit = function () {
    };
    BrowseFilesModalComponent.prototype.getSize = function (size) {
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            var kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
    };
    BrowseFilesModalComponent.prototype.getFormatName = function (file) {
        return FileUtil.find(file.name, file.directory).format;
    };
    BrowseFilesModalComponent.prototype.getFormatIcon = function (file) {
        return FileUtil.find(file.name, file.directory).icon;
    };
    BrowseFilesModalComponent.prototype.choose = function (file) {
        this.selectedFile = file;
        if (file.directory) {
            this.selectedDirectory.emit(file.guid);
        }
        else {
            this.selectedFileGuid.emit(file.guid);
        }
    };
    BrowseFilesModalComponent.prototype.goUp = function () {
        if (this.selectedFile) {
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
    BrowseFilesModalComponent.prototype.selectUpload = function ($event) {
        if (upload_url === $event) {
            this.showUploadUrl = true;
        }
        else {
            this.showUploadUrl = false;
            $("#gd-upload-input").trigger('click');
        }
    };
    BrowseFilesModalComponent.prototype.refresh = function ($event) {
        if ($event) {
            this.files = null;
            this.selectedDirectory.emit('');
            this.showUploadUrl = false;
            this.selectedFile = null;
        }
    };
    BrowseFilesModalComponent.prototype.showSpinner = function () {
        return !this.files;
    };
    BrowseFilesModalComponent.prototype.uploadUrl = function (url) {
        if (url) {
            this.urlForUpload.emit(url);
            this.cleanUpload();
        }
    };
    BrowseFilesModalComponent.prototype.handleFileInput = function (files) {
        this._uploadService.changeFilesList(files);
    };
    BrowseFilesModalComponent.prototype.cleanUpload = function () {
        this.showUploadFile = false;
        this.showUploadUrl = false;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "files", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "uploadConfig", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "selectedFileGuid", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "selectedDirectory", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "urlForUpload", void 0);
    BrowseFilesModalComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-browse-files-modal',
            template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" gdDnd [isBackground]=\"false\" (open)=\"showUploadFile=$event\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\">\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n          <i fa [name]=\"'check'\"></i>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <i class=\"fa fa-level-up-alt\"></i>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\"><i fa [name]=\"getFormatIcon(file)\"></i>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\"><i\n      class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
            styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}.list-files-header{color:#acacac;font-size:10px;padding-left:21px}.header-size{position:relative;left:-24px}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 6px;margin-left:12px}.file-description{cursor:pointer;overflow:hidden;display:flex}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;left:20px}.file-description .fa-file-pdf{color:#e21717}.file-description .fa-file-word{color:#6979b9}.file-description .fa-file-powerpoint{color:#e29417}.file-description .fa-file-excel{color:#3fa300}.file-description .fa-file-image{color:#e217da}.file-description .fa-file-text .fa-folder{color:#5d6a75}.file-description i{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon i{padding:8px}.go-up-icon{width:30px;height:30px;margin-left:12px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check i{padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.gd-dnd-wrap{border:2px dashed #ccc;background-color:#f8f8f8;cursor:default;position:absolute;width:983px;height:626px;opacity:.9;z-index:1;left:20px;display:flex;text-align:center;justify-content:center}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300;margin-top:50%}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [UploadFilesService])
    ], BrowseFilesModalComponent);
    return BrowseFilesModalComponent;
}());
export { BrowseFilesModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVksUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBRWpCLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQztBQUUzQixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFFekIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztBQU83RjtJQVlFLG1DQUFvQixjQUFrQztRQUFsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFYdEQsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUloQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXBELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBR3ZCLENBQUM7SUFFRCw0Q0FBUSxH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VztRQUNuQixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxtREFBZSxHQUFmLFVBQWdCLEtBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBN0ZRO1FBQVIsS0FBSyxFQUFFOzs0REFBTztJQUNOO1FBQVIsS0FBSyxFQUFFOzttRUFBYztJQUNaO1FBQVQsTUFBTSxFQUFFOzt1RUFBK0M7SUFDOUM7UUFBVCxNQUFNLEVBQUU7O3dFQUFnRDtJQUMvQztRQUFULE1BQU0sRUFBRTs7bUVBQTJDO0lBUHpDLHlCQUF5QjtRQUxyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLDJuRUFBa0Q7O1NBRW5ELENBQUM7aURBYW9DLGtCQUFrQjtPQVozQyx5QkFBeUIsQ0FpR3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQWpHWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4uL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuY29uc3QgdXBsb2FkX2Rpc2MgPSAnRGlzYyc7XG5cbmNvbnN0IHVwbG9hZF91cmwgPSAndXJsJztcblxuY29uc3QgdXBsb2Fkc19jaG9pY2VzID0gW3tuYW1lOiB1cGxvYWRfZGlzYywgaWNvbjogJ2hkZCd9LCB7bmFtZTogdXBsb2FkX3VybCwgaWNvbjogJ2xpbmsnfV07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWJyb3dzZS1maWxlcy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXBsb2FkcyA9IHVwbG9hZHNfY2hvaWNlcztcblxuICBASW5wdXQoKSBmaWxlcztcbiAgQElucHV0KCkgdXBsb2FkQ29uZmlnO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRGaWxlR3VpZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWREaXJlY3RvcnkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHVybEZvclVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBwcml2YXRlIHNlbGVjdGVkRmlsZTogRmlsZU1vZGVsO1xuICBzaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gIHNob3dVcGxvYWRGaWxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXBsb2FkU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldFNpemUoc2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbWIgPSBzaXplIC8gMTAyNCAvIDEwMjQ7XG4gICAgaWYgKG1iID4gMSkge1xuICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKG1iICogMTAwKSAvIDEwMCkgKyAnIE1CJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2IgPSBzaXplIC8gMTAyNDtcbiAgICAgIGlmIChrYiA+IDEpIHtcbiAgICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKGtiICogMTAwKSAvIDEwMCkgKyAnIEtCJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpemUgKyAnIEJ5dGVzJztcbiAgfVxuXG4gIGdldEZvcm1hdE5hbWUoZmlsZTogRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQoZmlsZS5uYW1lLCBmaWxlLmRpcmVjdG9yeSkuZm9ybWF0O1xuICB9XG5cbiAgZ2V0Rm9ybWF0SWNvbihmaWxlOiBGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZChmaWxlLm5hbWUsIGZpbGUuZGlyZWN0b3J5KS5pY29uO1xuICB9XG5cbiAgY2hvb3NlKGZpbGU6IEZpbGVNb2RlbCkge1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZTtcbiAgICBpZiAoZmlsZS5kaXJlY3RvcnkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdChmaWxlLmd1aWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZUd1aWQuZW1pdChmaWxlLmd1aWQpO1xuICAgIH1cbiAgfVxuXG4gIGdvVXAoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWxlKSB7XG4gICAgICBsZXQgZ3VpZCA9IHRoaXMuc2VsZWN0ZWRGaWxlLmd1aWQ7XG4gICAgICBpZiAoZ3VpZC5sZW5ndGggPiAwICYmIGd1aWQuaW5kZXhPZignLycpID09PSAtMSkge1xuICAgICAgICBndWlkID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBndWlkID0gZ3VpZC5yZXBsYWNlKC9cXC9bXlxcL10rXFwvPyQvLCAnJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoZ3VpZCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0VXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgaWYgKHVwbG9hZF91cmwgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gICAgICAkKFwiI2dkLXVwbG9hZC1pbnB1dFwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0b3J5LmVtaXQoJycpO1xuICAgICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2hvd1NwaW5uZXIoKSB7XG4gICAgcmV0dXJuICF0aGlzLmZpbGVzO1xuICB9XG5cbiAgdXBsb2FkVXJsKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgdGhpcy51cmxGb3JVcGxvYWQuZW1pdCh1cmwpO1xuICAgICAgdGhpcy5jbGVhblVwbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpbGVJbnB1dChmaWxlczogRmlsZUxpc3QpIHtcbiAgICB0aGlzLl91cGxvYWRTZXJ2aWNlLmNoYW5nZUZpbGVzTGlzdChmaWxlcyk7XG4gIH1cblxuICBjbGVhblVwbG9hZCgpIHtcbiAgICB0aGlzLnNob3dVcGxvYWRGaWxlID0gZmFsc2U7XG4gICAgdGhpcy5zaG93VXBsb2FkVXJsID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==