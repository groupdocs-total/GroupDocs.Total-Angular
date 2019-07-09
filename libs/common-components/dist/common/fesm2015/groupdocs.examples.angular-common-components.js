import { __decorate, __metadata } from 'tslib';
import { defineInjectable, Injectable, Input, Component, ElementRef, ChangeDetectorRef, EventEmitter, Output, ViewEncapsulation, Pipe, HostBinding, HostListener, Directive, inject, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as jquery from 'jquery';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, fromEvent, BehaviorSubject, throwError } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged, startWith, tap, map, catchError } from 'rxjs/operators';

const $ = jquery;
let ViewportService = class ViewportService {
    constructor() {
    }
    checkInViewport(el, zoom = 100, leftOffset = 0, deltaX = 0.5) {
        if (!el) {
            return false;
        }
        const x = deltaX;
        const y = 0.5;
        const win = $(window);
        const viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft() + leftOffset,
            right: win.scrollLeft() + win.width() - 10,
            bottom: win.scrollTop() + win.height()
        };
        if (isNaN(zoom)) {
            zoom = 100;
        }
        const zoomN = zoom / 100;
        const height = $(el).outerHeight() * (zoomN);
        const width = $(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        const bounds = $(el).offset();
        const right = (bounds.left * (zoomN)) + width;
        const bottom = (bounds.top * (zoomN)) + height;
        const visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));
        if (!visible) {
            return false;
        }
        const deltas = {
            top: Math.min(1, (bottom - viewport.top) / height),
            bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
            left: Math.min(1, (right - viewport.left) / width),
            right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
        };
        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    }
};
ViewportService.ngInjectableDef = defineInjectable({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });
ViewportService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], ViewportService);

const $$1 = jquery;
let TopToolbarComponent = class TopToolbarComponent {
    constructor(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
        this.leftOffset = true;
    }
    ngOnInit() {
        this.refresh();
        const el = this.getToolsElem();
        const $this = this;
        el.addEventListener('scroll', function () {
            $this.refresh();
        });
    }
    moveLeft() {
        const el = this.getToolsElem();
        if (el) {
            const elem = this.canMoveTo(true);
            if (elem) {
                const options = {
                    left: $$1(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    }
    moveRight() {
        const el = this.getToolsElem();
        if (el) {
            const elem = this.canMoveTo(false);
            if (elem) {
                const options = {
                    left: $$1(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    }
    getToolsElem() {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    }
    canMoveTo(left) {
        let elem;
        const children = this.getChildren();
        const countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            const element = this.getElem(elem);
            if (this._viewportService.checkInViewport(element, 100, this.getLeftOffset())) {
                if (left) {
                    return elem > 0 ? children.item(elem - 1) : null;
                }
                else {
                    return elem + 1 < countElem ? children.item(elem + 1) : null;
                }
            }
        }
        return;
    }
    getElem(num) {
        const elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    }
    getChildren() {
        const el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    }
    getLeftOffset() {
        if (!this.leftOffset) {
            return 0;
        }
        const el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    }
    refresh() {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    }
    ngAfterViewChecked() {
        const showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        const showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TopToolbarComponent.prototype, "leftOffset", void 0);
TopToolbarComponent = __decorate([
    Component({
        selector: 'gd-top-toolbar',
        template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
        styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:480px){.top-toolbar{height:60px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
    }),
    __metadata("design:paramtypes", [ElementRef,
        ViewportService,
        ChangeDetectorRef])
], TopToolbarComponent);

let ButtonComponent = class ButtonComponent {
    constructor() {
        this.disabled = false;
        this.toggle = false;
        this.showToolTip = false;
    }
    onHovering() {
        this.showToolTip = true;
    }
    onUnhovering() {
        this.showToolTip = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "iconClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "tooltip", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "className", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "toggle", void 0);
ButtonComponent = __decorate([
    Component({
        selector: 'gd-button',
        template: "<div class=\"button\" [ngClass]=\"toggle ? className + ' gd-edit active' : className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <i fa [name]=\"icon\" [ngClass]=\"iconClass\"></i>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n  <ng-content></ng-content>\n</div>\n",
        styles: [".button{margin:0 7px;font-size:14px;color:#959da5;cursor:pointer;width:37px;height:36px;text-align:center;position:relative}.button i{position:absolute;top:11px;left:14px}@media (max-width:1025px){.button{font-size:20px;margin:0 20px}.arrow-button{margin:5px}}"]
    }),
    __metadata("design:paramtypes", [])
], ButtonComponent);

let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogoComponent.prototype, "logo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogoComponent.prototype, "icon", void 0);
LogoComponent = __decorate([
    Component({
        selector: 'gd-logo',
        template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"text\" [innerHTML]=\"logo\"></span>\n  <i fa [name]=\"icon\" class=\"icon\"></i>\n</div>\n\n",
        styles: [".logo{background-color:#25c2d4;height:60px;display:flex;align-items:center;justify-content:center}.text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}.icon{display:none;font-size:32px;color:rgba(255,255,255,.5);margin:14px}@media (max-width:480px){.logo{width:60px;height:60px}.logo .text{display:none}.logo .icon{display:block}}"]
    }),
    __metadata("design:paramtypes", [])
], LogoComponent);

let TooltipComponent = class TooltipComponent {
    constructor() {
        this.visibility = 'hidden';
    }
    set show(value) {
        this.visibility = value ? 'shown' : 'hidden';
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipComponent.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TooltipComponent.prototype, "show", null);
TooltipComponent = __decorate([
    Component({
        selector: 'gd-tooltip',
        template: "<span class=\"tooltip\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
        styles: [".tooltip{position:absolute;margin-top:37px;width:100px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px;height:11px;line-height:11px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
    }),
    __metadata("design:paramtypes", [])
], TooltipComponent);

class Api {
}
Api.VIEWER_APP = '/viewer';
Api.EDITOR_APP = '/editor';
Api.DEFAULT_API_ENDPOINT = window.location.href;
Api.LOAD_FILE_TREE = '/loadFileTree';
Api.LOAD_CONFIG = '/loadConfig';
Api.LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
Api.LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
Api.ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
Api.UPLOAD_DOCUMENTS = '/uploadDocument';
Api.DOWNLOAD_DOCUMENTS = '/downloadDocument';
Api.LOAD_PRINT = '/loadPrint';
Api.LOAD_PRINT_PDF = '/printPdf';
Api.LOAD_THUMBNAILS = '/loadThumbnails';
Api.LOAD_FORMATS = '/loadFormats';
Api.SAVE_FILE = '/saveFile';
Api.httpOptionsJson = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
Api.httpOptionsJsonResponseTypeBlob = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
    responseType: 'blob'
};
let ConfigService = class ConfigService {
    constructor() {
        this._apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    set apiEndpoint(url) {
        this._apiEndpoint = url;
    }
    getConfigEndpoint(app) {
        return (this.getApiEndpoint().endsWith(app) ? this.getApiEndpoint() : this.getApiEndpoint() + app) + Api.LOAD_CONFIG;
    }
    getViewerApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    }
    getEditorApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    }
    getApiEndpoint() {
        return this._apiEndpoint;
    }
};
ConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);

class CommonModals {
}
CommonModals.PasswordRequired = "gd-password-required";
CommonModals.ErrorMessage = "gd-error-message";
CommonModals.BrowseFiles = "gd-browse-files";
CommonModals.CreateDocument = "gd-create-document";
CommonModals.OperationSuccess = "gd-success-modal";
class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        this.modals.push(modal);
    }
    remove(id) {
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        const modal = this.modals.filter(x => x.id === id)[0];
        modal.open();
    }
    close(id) {
        const modal = this.modals.filter(x => x.id === id)[0];
        modal.close();
    }
}

let ModalComponent = class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.visible = new EventEmitter();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    }
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    open() {
        this.visibility = true;
        this.visible.emit(true);
    }
    close() {
        event.preventDefault();
        event.stopPropagation();
        this.visibility = false;
        this.visible.emit(false);
    }
    onClose($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if ($event && $event.target && $event.target.id === 'modalDialog') {
            this.close();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "title", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "visible", void 0);
ModalComponent = __decorate([
    Component({
        selector: 'gd-modal',
        template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"close($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n",
        styles: [".gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{padding:1px 20px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:20px;top:13px;font-size:21px;cursor:pointer;color:#959da5}.gd-modal-title{font-size:16px;font-weight:400;padding-top:16px;padding-bottom:16px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;padding:20px;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:auto}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1025px){.gd-modal-dialog{width:100%;height:100%}}"]
    }),
    __metadata("design:paramtypes", [ModalService, ElementRef])
], ModalComponent);

class PageModel {
}
class RotatedPage {
}
class FileCredentials {
    constructor(guid, password) {
        this.guid = guid;
        this.password = password;
    }
}
class SaveFile extends FileCredentials {
    constructor(guid, password, content) {
        super(guid, password);
        this.content = content;
    }
}
class FileDescription {
    constructor() {
        this.printAllowed = true;
    }
}
class FileModel {
}
class HttpError {
}
HttpError.BadRequest = 400;
HttpError.Unauthorized = 401;
HttpError.Forbidden = 403;
HttpError.NotFound = 404;
HttpError.TimeOut = 408;
HttpError.Conflict = 409;
HttpError.InternalServerError = 500;
class FileUtil {
    static find(filename, isDirectory) {
        if (filename && !isDirectory) {
            const strings = filename.split('.');
            const name = strings.pop().toLowerCase();
            if (typeof FileUtil.map[name] === "undefined") {
                return strings.length > 1 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
            }
            else {
                return FileUtil.map[name];
            }
        }
        else {
            return FileUtil.map['folder'];
        }
    }
}
FileUtil.map = {
    'folder': { 'format': '', 'icon': 'folder' },
    'pdf': { 'format': 'Portable Document Format', 'icon': 'file-pdf' },
    'doc': { 'format': 'Microsoft Word', 'icon': 'file-word' },
    'docx': { 'format': 'Microsoft Word', 'icon': 'file-word' },
    'docm': { 'format': 'Microsoft Word', 'icon': 'file-word' },
    'dot': { 'format': 'Microsoft Word', 'icon': 'file-word' },
    'dotx': { 'format': 'Microsoft Word', 'icon': 'file-word' },
    'dotm': { 'format': 'Microsoft Word', 'icon': 'file-word' },
    'xls': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
    'xlsx': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
    'xlsm': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
    'xlsb': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
    'ppt': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
    'pptx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
    'pps': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
    'ppsx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
    'vsd': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vdx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vss': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vsx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vst': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vtx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vsdx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vdw': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vstx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'vssx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
    'mpp': { 'format': 'Microsoft Project', 'icon': 'file-text' },
    'mpt': { 'format': 'Microsoft Project', 'icon': 'file-text' },
    'msg': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
    'eml': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
    'emlx': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
    'one': { 'format': 'Microsoft OneNote', 'icon': 'file-word' },
    'odt': { 'format': 'Open Document Text', 'icon': 'file-word' },
    'ott': { 'format': 'Open Document Text Template', 'icon': 'file-word' },
    'ods': { 'format': 'Open Document Spreadsheet', 'icon': 'file-excel' },
    'odp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
    'otp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
    'ots': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
    'rtf': { 'format': 'Rich Text Format', 'icon': 'file-text' },
    'txt': { 'format': 'Plain Text File', 'icon': 'file-text' },
    'csv': { 'format': 'Comma-Separated Values', 'icon': 'file-excel' },
    'html': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
    'mht': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
    'mhtml': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
    'xml': { 'format': 'Extensible Markup Language', 'icon': 'file-word' },
    'xps': { 'format': 'XML Paper Specification', 'icon': 'file-word' },
    'dxf': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image' },
    'dwg': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image' },
    'bmp': { 'format': 'Bitmap Picture', 'icon': 'file-image' },
    'gif': { 'format': 'Graphics Interchange Format', 'icon': 'file-image' },
    'jpg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
    'jpe': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
    'jpeg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
    'jfif': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
    'png': { 'format': 'Portable Network Graphics', 'icon': 'file-image' },
    'tiff': { 'format': 'Tagged Image File Format', 'icon': 'file-photo' },
    'tif': { 'format': 'Tagged Image File Format', 'icon': 'file-photo' },
    'epub': { 'format': 'Electronic Publication', 'icon': 'file-pdf' },
    'ico': { 'format': 'Windows Icon', 'icon': 'file-image' },
    'webp': { 'format': 'Compressed Image', 'icon': 'file-image' },
    'mobi': { 'format': 'Mobipocket eBook', 'icon': 'file-pdf' },
    'tex': { 'format': 'LaTeX Source Document', 'icon': 'file-pdf' },
    'djvu': { 'format': 'Multi-Layer Raster Image', 'icon': 'file-text' },
    'unknown': { 'format': 'This format is not supported', 'icon': 'file' },
};
class FileService {
    constructor() {
    }
}

class UploadFilesService {
    constructor() {
        this._uploadsChange = new Observable(observer => this._observer = observer);
    }
    get uploadsChange() {
        return this._uploadsChange;
    }
    changeFilesList(filesList) {
        this._observer.next(filesList);
    }
}

const $$2 = jquery;
const upload_disc = 'Disc';
const upload_url = 'url';
const uploads_choices = [{ name: upload_disc, icon: 'hdd' }, { name: upload_url, icon: 'link' }];
let BrowseFilesModalComponent = class BrowseFilesModalComponent {
    constructor(_uploadService) {
        this._uploadService = _uploadService;
        this.uploads = uploads_choices;
        this.selectedFileGuid = new EventEmitter();
        this.selectedDirectory = new EventEmitter();
        this.urlForUpload = new EventEmitter();
        this.сlose = new EventEmitter();
        this.showUploadUrl = false;
        this.showUploadFile = false;
    }
    ngOnInit() {
    }
    getSize(size) {
        const mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            const kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
    }
    getFormatName(file) {
        return FileUtil.find(file.name, file.directory).format;
    }
    getFormatIcon(file) {
        return FileUtil.find(file.name, file.directory).icon;
    }
    choose(file) {
        this.selectedFile = file;
        if (file.directory) {
            this.selectedDirectory.emit(file.guid);
        }
        else {
            this.selectedFileGuid.emit(file.guid);
        }
    }
    goUp() {
        if (this.selectedFile) {
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
    selectUpload($event) {
        if (upload_url === $event) {
            this.showUploadUrl = true;
        }
        else {
            this.showUploadUrl = false;
            $$2("#gd-upload-input").trigger('click');
        }
    }
    refresh($event) {
        if ($event) {
            this.files = null;
            this.selectedDirectory.emit('');
            this.showUploadUrl = false;
            this.selectedFile = null;
        }
        else {
            this.сlose.emit(true);
        }
    }
    showSpinner() {
        return !this.files;
    }
    uploadUrl(url) {
        if (url) {
            this.urlForUpload.emit(url);
            this.cleanUpload();
        }
    }
    handleFileInput(files) {
        this._uploadService.changeFilesList(files);
    }
    cleanUpload() {
        this.showUploadFile = false;
        this.showUploadUrl = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BrowseFilesModalComponent.prototype, "files", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BrowseFilesModalComponent.prototype, "uploadConfig", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BrowseFilesModalComponent.prototype, "selectedFileGuid", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BrowseFilesModalComponent.prototype, "selectedDirectory", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BrowseFilesModalComponent.prototype, "urlForUpload", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BrowseFilesModalComponent.prototype, "\u0441lose", void 0);
BrowseFilesModalComponent = __decorate([
    Component({
        selector: 'gd-browse-files-modal',
        template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" (dragover)=\"showUploadFile = true;\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\" gdDnd [isBackground]=\"false\" (open)=\"showUploadFile=$event\">\n      <div class=\"gd-drag-n-drop-icon\"><i class=\"fa fa-cloud-download-alt fa-5x\" aria-hidden=\"true\"></i></div>\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n          <i fa [name]=\"'check'\"></i>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <i class=\"fa fa-level-up-alt\"></i>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\"><i fa [name]=\"getFormatIcon(file)\"></i>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\"><i\n      class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
        styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}#gd-browse-section{width:1024px;height:728px}.list-files-header{color:#acacac;font-size:10px}.header-name,.header-size{padding:0 6px;width:90%}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 6px;width:10%}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative}.file-description{cursor:pointer;overflow:hidden;display:flex;width:90%}.file-description .fa-file-pdf{color:#e21717}.file-description .fa-file-word{color:#6979b9}.file-description .fa-file-powerpoint{color:#e29417}.file-description .fa-file-excel{color:#3fa300}.file-description .fa-file-image{color:#e217da}.file-description .fa-file-text .fa-folder{color:#5d6a75}.file-description i{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon i{padding:8px}.go-up-icon{width:30px;height:30px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check i{padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.gd-dnd-wrap{border:2px dashed #ccc;background-color:#f8f8f8;cursor:default;position:absolute;width:983px;height:626px;opacity:.9;z-index:1;left:20px;display:flex;text-align:center;justify-content:center;align-content:center;flex-direction:column}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
    }),
    __metadata("design:paramtypes", [UploadFilesService])
], BrowseFilesModalComponent);

class ZoomService {
    constructor() {
        this._observer = new Subject();
        this._zoomChange = this._observer.asObservable();
    }
    get zoom() {
        return this._zoom;
    }
    get zoomChange() {
        return this._zoomChange;
    }
    changeZoom(zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    }
    createZoomOption(val, name = val + '%', sep = false) {
        return { value: val, name: name, separator: sep, prefix: "%" };
    }
    zoomOptions(width, height) {
        return [this.createZoomOption(25),
            this.createZoomOption(50),
            this.createZoomOption(100),
            this.createZoomOption(150),
            this.createZoomOption(200),
            this.createZoomOption(300),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')];
    }
}

const $$3 = jquery;
let DocumentComponent = class DocumentComponent {
    constructor(_elementRef, zoomService) {
        this._elementRef = _elementRef;
        this.wait = false;
        zoomService.zoomChange.subscribe((val) => {
            this.zoom = val;
        });
    }
    ngOnInit() {
    }
    ifPdf() {
        return FileUtil.find(this.file.guid, false).format === "Portable Document Format";
    }
    ifImage() {
        return FileUtil.find(this.file.guid, false).format === "Joint Photographic Experts Group";
    }
    ngOnChanges(changes) {
        this.refreshView = !this.refreshView;
    }
    ifChromeOrFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
    }
    ifFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
    ngAfterViewChecked() {
        const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        const element = elementNodeListOf.item(0);
        if (element) {
            $$3(element).trigger('focus');
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DocumentComponent.prototype, "mode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DocumentComponent.prototype, "preloadPageCount", void 0);
__decorate([
    Input(),
    __metadata("design:type", FileDescription)
], DocumentComponent.prototype, "file", void 0);
DocumentComponent = __decorate([
    Component({
        selector: 'gd-document',
        template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n</div>\n",
        styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
    }),
    __metadata("design:paramtypes", [ElementRef,
        ZoomService])
], DocumentComponent);

let PageComponent = class PageComponent {
    constructor() {
    }
    ngOnInit() {
        const isIE = /*@cc_on!@*/  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE && this.number === 0) {
            this.editable = false;
        }
    }
    ngOnChanges(changes) {
        const dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], PageComponent.prototype, "angle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PageComponent.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PageComponent.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PageComponent.prototype, "number", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PageComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PageComponent.prototype, "isHtml", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PageComponent.prototype, "editable", void 0);
PageComponent = __decorate([
    Component({
        selector: 'gd-page',
        template: "<div id=\"page-{{number}}\"\n     [style.min-width.px]=\"width\" [style.min-height.px]=\"height\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\" [contentEditable]=\"(editable) ? true : false\"\n      gdEditor [text]=\"data\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}.gd-highlight-select{background-color:#ff9b00}"]
    }),
    __metadata("design:paramtypes", [])
], PageComponent);

let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
};
SanitizeHtmlPipe = __decorate([
    Pipe({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [DomSanitizer])
], SanitizeHtmlPipe);
let SanitizeResourceHtmlPipe = class SanitizeResourceHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
};
SanitizeResourceHtmlPipe = __decorate([
    Pipe({ name: 'safeResourceHtml' }),
    __metadata("design:paramtypes", [DomSanitizer])
], SanitizeResourceHtmlPipe);
let SanitizeStylePipe = class SanitizeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    }
};
SanitizeStylePipe = __decorate([
    Pipe({ name: 'safeStyle' }),
    __metadata("design:paramtypes", [DomSanitizer])
], SanitizeStylePipe);
let HighlightSearchPipe = class HighlightSearchPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        const re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    }
};
HighlightSearchPipe = __decorate([
    Pipe({ name: 'highlight' })
], HighlightSearchPipe);

let ChoiceButtonComponent = class ChoiceButtonComponent {
    constructor() {
        this.selected = new EventEmitter();
        this.open = false;
    }
    ngOnInit() {
    }
    openChoices() {
        this.open = !this.open;
    }
    select(choice) {
        this.selected.emit(choice);
        this.open = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ChoiceButtonComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ChoiceButtonComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChoiceButtonComponent.prototype, "choices", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChoiceButtonComponent.prototype, "selected", void 0);
ChoiceButtonComponent = __decorate([
    Component({
        selector: 'gd-choice-button',
        template: "<div class=\"choice-button\">\n  <i fa [name]=\"icon\"></i>\n  <span class=\"button-name\">{{name}}</span>\n  <div class=\"down\">\n    <i fa [name]=\"'angle-down'\" (click)=\"openChoices()\"></i>\n  </div>\n  <div class=\"choices\" *ngIf=\"open\">\n    <div class=\"upload-from\">Upload from:</div>\n    <div class=\"choice\" *ngFor=\"let choice of choices\" (click)=\"select(choice.name)\">\n      <i fa [name]=\"choice.icon\"></i>\n      {{choice.name}}\n    </div>\n  </div>\n</div>\n",
        styles: [".choice-button{width:137px;height:31px;color:#fff;background-color:#25c2d4;display:flex}.choice-button i{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:10px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
    }),
    __metadata("design:paramtypes", [])
], ChoiceButtonComponent);

let UploadFileZoneComponent = class UploadFileZoneComponent {
    constructor(_uploadService) {
        this._uploadService = _uploadService;
        this.closeUpload = new EventEmitter();
    }
    ngOnInit() {
    }
    handleFileInput(files) {
        this._uploadService.changeFilesList(files);
        this.onCloseUpload();
    }
    onCloseUpload() {
        this.closeUpload.emit(true);
    }
    close($event) {
        if ($event.target.id === 'gd-dropZone') {
            this.onCloseUpload();
        }
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], UploadFileZoneComponent.prototype, "closeUpload", void 0);
UploadFileZoneComponent = __decorate([
    Component({
        selector: 'gd-upload-file-zone',
        template: "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (close)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\"><i class=\"fa fa-cloud-download-alt fa-5x\" aria-hidden=\"true\"></i></div>\n  <h2>Drag &amp; Drop your files here</h2> \n  <h4>OR</h4> \n  <div class=\"gd-drag-n-drop-buttons\"> \n    <label class=\"btn btn-primary\"> \n      <i class=\"fa fa-file\"></i> \n      SELECT FILE \n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n",
        styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:-webkit-fill-available;left:1px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
    }),
    __metadata("design:paramtypes", [UploadFilesService])
], UploadFileZoneComponent);

let DndDirective = class DndDirective {
    constructor(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.isBackground = true;
        this.background = '#f8f8f8';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#999';
        }
        else {
            this.open.emit(true);
        }
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#f8f8f8';
        }
        else {
            this.closeArea();
        }
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = '#f8f8f8';
            this._uploadFilesService.changeFilesList(files);
            this.closeArea();
        }
    }
    onClick(event) {
        this.closeArea();
    }
    closeArea() {
        this.close.emit(true);
        this.open.emit(false);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], DndDirective.prototype, "close", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DndDirective.prototype, "open", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DndDirective.prototype, "isBackground", void 0);
__decorate([
    HostBinding('style.background'),
    __metadata("design:type", Object)
], DndDirective.prototype, "background", void 0);
__decorate([
    HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDirective.prototype, "onDragOver", null);
__decorate([
    HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDirective.prototype, "onDragLeave", null);
__decorate([
    HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDirective.prototype, "onDrop", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDirective.prototype, "onClick", null);
DndDirective = __decorate([
    Directive({
        selector: '[gdDnd]'
    }),
    __metadata("design:paramtypes", [UploadFilesService])
], DndDirective);

class PagePreloadService {
    constructor() {
        this._checkPreload = new Observable(observer => this._observer = observer);
    }
    get checkPreload() {
        return this._checkPreload;
    }
    changeLastPageInView(page) {
        if (this._observer) {
            this._observer.next(page);
        }
    }
}

let NavigateService = class NavigateService {
    constructor(_pagePreloadService) {
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._navigate = new Observable(observer => this._observer = observer);
    }
    get navigate() {
        return this._navigate;
    }
    get countPages() {
        return this._countPages;
    }
    set countPages(value) {
        this._countPages = value;
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(value) {
        this._currentPage = value;
    }
    nextPage() {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    }
    prevPage() {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    }
    toLastPage() {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    }
    toFirstPage() {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    }
    navigateTo(page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    }
};
NavigateService.ngInjectableDef = defineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(inject(PagePreloadService)); }, token: NavigateService, providedIn: "root" });
NavigateService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [PagePreloadService])
], NavigateService);

const MOBILE_MAX_WIDTH = 425;
const TABLET_MAX_WIDTH = 1024;
class WindowService {
    constructor() {
        this.resizeSubject = new Subject();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200), distinctUntilChanged(), startWith({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), tap(event => {
            this.resizeSubject.next(event.target);
            this.width = event.target.innerWidth;
            this.height = event.target.innerHeight;
        }));
        this._resize$.subscribe();
    }
    get onResize() {
        return this.resizeSubject.asObservable();
    }
    isMobile() {
        return this.width <= MOBILE_MAX_WIDTH;
    }
    isTablet() {
        return this.width <= TABLET_MAX_WIDTH;
    }
    isDesktop() {
        return !this.isMobile() && !this.isTablet();
    }
}

const $$4 = jquery;
let ScrollableDirective = class ScrollableDirective {
    constructor(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
        this._elementRef = _elementRef;
        this._navigateService = _navigateService;
        this._pagePreloadService = _pagePreloadService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._viewportService = _viewportService;
        this.zoom = 100;
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((val) => {
            this.zoom = val ? val : this.zoom;
            this.refresh();
        });
    }
    ngAfterViewInit() {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
        this._navigateService.navigate.subscribe((value => {
            this.currentPage = value;
            this.scrollToPage(value);
        }));
        this.refresh();
    }
    scrolling() {
        this.refresh();
    }
    resizing() {
        this.refresh();
    }
    scrollToPage(pageNumber) {
        const el = this._elementRef.nativeElement;
        const page = this.getPage(pageNumber);
        const prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
        const isSameTop = (prev && $$4(prev).offset().top === $$4(page).offset().top);
        if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
            return;
        }
        const pagesHeight = this.calculateOffset(pageNumber);
        const options = {
            left: 0,
            top: pagesHeight
        };
        if (el) {
            el.scrollTo(options);
        }
    }
    getChildren() {
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children;
        }
    }
    getPage(pageNumber) {
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children.item(pageNumber - 1);
        }
    }
    calculateOffset(pageNumber) {
        const count = this.ifFirefox() ? 1 : this.countPagesOnWidth();
        const margin = this._windowService.isDesktop() ? 40 : 10;
        let pagesHeight = 0;
        for (let i = 1; i < pageNumber / count; i++) {
            const item = this.getPage(i);
            const clientHeight = item ? item.clientHeight : 0;
            pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
        }
        return pagesHeight;
    }
    countPagesOnWidth() {
        const pageEl = this.getPage(1);
        const offset = 150;
        const count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
        return count === 0 ? 1 : count;
    }
    ifFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
    refresh() {
        let page;
        let currentPageSet = false;
        const pageElem = this.getPage(this.currentPage);
        const currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
        for (page = 1; page < this.getChildren().length + 1; page++) {
            const element = this.getPage(page);
            if (this._viewportService.checkInViewport(element, this.zoom)) {
                if (!currentPageSet) {
                    if (!this.currentPage || !pageElem || (this.currentPage && currentPageRect && element.getBoundingClientRect().top !== currentPageRect.top)) {
                        this.currentPage = page;
                        this._navigateService.currentPage = page;
                    }
                    currentPageSet = true;
                }
                this._pagePreloadService.changeLastPageInView(page);
            }
        }
    }
    ngOnChanges(changes) {
        this.refresh();
    }
    ngOnInit() {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    }
    getWidth() {
        return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
    }
    getZoom() {
        return this.zoom / 100;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ScrollableDirective.prototype, "onRefresh", void 0);
__decorate([
    HostListener('scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScrollableDirective.prototype, "scrolling", null);
__decorate([
    HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScrollableDirective.prototype, "resizing", null);
ScrollableDirective = __decorate([
    Directive({
        selector: '[gdScrollable]'
    }),
    __metadata("design:paramtypes", [ElementRef,
        NavigateService,
        PagePreloadService,
        ZoomService,
        WindowService,
        ViewportService])
], ScrollableDirective);

let ZoomDirective = class ZoomDirective {
    constructor(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
    }
    ngOnDestroy() {
    }
    ngOnInit() {
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe((zoom) => {
            this.setStyles(zoom);
        });
    }
    setStyles(zoom) {
        if (!this.zoomActive) {
            return;
        }
        this.zoomStr = Math.round(zoom) + '%';
        this.zoomInt = zoom === 100 ? 1 : zoom / 100;
        this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
        this.mozTransformOrigin = 'top';
        const transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
    }
    ngAfterViewInit() {
        this.setStyles(this._zoomService.zoom);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ZoomDirective.prototype, "zoomActive", void 0);
__decorate([
    HostBinding('style.zoom'),
    __metadata("design:type", String)
], ZoomDirective.prototype, "zoomStr", void 0);
__decorate([
    HostBinding('style.zoom'),
    __metadata("design:type", Number)
], ZoomDirective.prototype, "zoomInt", void 0);
__decorate([
    HostBinding('style.-moz-transform'),
    __metadata("design:type", String)
], ZoomDirective.prototype, "mozTransform", void 0);
__decorate([
    HostBinding('style.-moz-transform-origin'),
    __metadata("design:type", String)
], ZoomDirective.prototype, "mozTransformOrigin", void 0);
__decorate([
    HostBinding('style.-webkit-transform'),
    __metadata("design:type", Object)
], ZoomDirective.prototype, "webkitTransform", void 0);
__decorate([
    HostBinding('style.-ms-transform'),
    __metadata("design:type", Object)
], ZoomDirective.prototype, "msTransform", void 0);
__decorate([
    HostBinding('style.-o-transform'),
    __metadata("design:type", Object)
], ZoomDirective.prototype, "oTransform", void 0);
ZoomDirective = __decorate([
    Directive({
        selector: '[gdZoom]'
    }),
    __metadata("design:paramtypes", [ZoomService, DomSanitizer])
], ZoomDirective);

let OnCloseService = class OnCloseService {
    constructor() {
        this._observer = new Subject();
        this._onClose = this._observer.asObservable();
    }
    get onClose() {
        return this._onClose;
    }
    close(close) {
        this._observer.next(close);
    }
};
OnCloseService.ngInjectableDef = defineInjectable({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });
OnCloseService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], OnCloseService);

let SelectComponent = class SelectComponent {
    constructor(_onCloseService) {
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.selected = new EventEmitter();
        this.isOpen = false;
        _onCloseService.onClose.subscribe(() => {
            this.close();
        });
    }
    open() {
        if (!this.disabled) {
            this.isOpen = true;
        }
    }
    close() {
        this.isOpen = false;
    }
    toggle($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    select($event, value, prefix) {
        $event.preventDefault();
        $event.stopPropagation();
        this.showSelected = value + prefix;
        this.selected.emit(value);
        this.close();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], SelectComponent.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "showSelected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SelectComponent.prototype, "selected", void 0);
SelectComponent = __decorate([
    Component({
        selector: 'gd-select',
        template: "<div class=\"select\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle($event)\">{{showSelected}}</span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle($event)\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option.value, option.prefix)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
        styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
    }),
    __metadata("design:paramtypes", [OnCloseService])
], SelectComponent);

let DisabledCursorDirective = class DisabledCursorDirective {
    constructor() {
    }
    updateCursor() {
        this.cursor = this.dis ? 'not-allowed' : 'pointer';
    }
    ngOnInit() {
        this.updateCursor();
    }
    ngOnChanges(changes) {
        this.updateCursor();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DisabledCursorDirective.prototype, "dis", void 0);
__decorate([
    HostBinding('style.cursor'),
    __metadata("design:type", String)
], DisabledCursorDirective.prototype, "cursor", void 0);
DisabledCursorDirective = __decorate([
    Directive({
        selector: '[gdDisabledCursor]'
    }),
    __metadata("design:paramtypes", [])
], DisabledCursorDirective);

let RotationDirective = class RotationDirective {
    constructor() {
        this.withMargin = true;
    }
    updateCursor() {
        if (this.angle) {
            this.animation = 'none';
            this.transition = 'none';
            this.transform = 'rotate(' + this.angle + 'deg)';
        }
        else if (this.angle === 0 && this.animation) {
            this.animation = null;
            this.transition = null;
            this.transform = null;
        }
        if (this.withMargin) {
            if (this.angle === 90 || this.angle === 270 || this.angle === -90 || this.angle === -270) {
                if (this.isHtmlMode) {
                    if (this.isLandscape()) {
                        this.margin = '164px 254px';
                    }
                    else {
                        this.margin = '-111px 254px';
                    }
                }
                else {
                    if (this.isLandscape()) {
                        this.margin = '129px 100px -79px';
                    }
                    else {
                        this.margin = '-72px 100px -79px';
                    }
                }
            }
            else if (this.angle === -180 || this.angle === 180) {
                this.margin = '280px';
            }
            else {
                this.margin = null;
            }
        }
    }
    isLandscape() {
        return this.width > this.height;
    }
    ngOnInit() {
        this.updateCursor();
    }
    ngOnChanges(changes) {
        this.updateCursor();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], RotationDirective.prototype, "angle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], RotationDirective.prototype, "isHtmlMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], RotationDirective.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], RotationDirective.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RotationDirective.prototype, "withMargin", void 0);
__decorate([
    HostBinding('style.animation'),
    __metadata("design:type", String)
], RotationDirective.prototype, "animation", void 0);
__decorate([
    HostBinding('style.transition-property'),
    __metadata("design:type", String)
], RotationDirective.prototype, "transition", void 0);
__decorate([
    HostBinding('style.transform'),
    __metadata("design:type", String)
], RotationDirective.prototype, "transform", void 0);
__decorate([
    HostBinding('style.margin'),
    __metadata("design:type", String)
], RotationDirective.prototype, "margin", void 0);
RotationDirective = __decorate([
    Directive({
        selector: '[gdRotation]'
    }),
    __metadata("design:paramtypes", [])
], RotationDirective);

let InitStateComponent = class InitStateComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], InitStateComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InitStateComponent.prototype, "text", void 0);
InitStateComponent = __decorate([
    Component({
        selector: 'gd-init-state',
        template: "<div class=\"wrapper\">\n  <i class=\"icon\" fa [name]=\"icon\"></i>\n  <span class=\"text\">{{text}}</span>\n  <span class=\"start\">Click <i fa [name]=\"'folder-open'\"></i> to open file</span>\n</div>\n",
        styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}"]
    }),
    __metadata("design:paramtypes", [])
], InitStateComponent);

class RenderPrintService {
    constructor() {
        this._render = new Observable(observer => this._observer = observer);
        this._renderBlob = new Observable(observer => this._observerBlob = observer);
    }
    get renderPrint() {
        return this._render;
    }
    changePages(pages) {
        this._observer.next(pages);
    }
    get renderPrintBlob() {
        return this._renderBlob;
    }
    changeBlob(file) {
        this._observerBlob.next(file);
    }
}

let RenderPrintDirective = class RenderPrintDirective {
    constructor(_renderService) {
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe(pages => {
            this.renderPrint(pages);
        });
        _renderService.renderPrintBlob.subscribe(file => {
            this.renderPrintBlob(file);
        });
    }
    renderPrint(pages) {
        let pagesHtml = '';
        if (this.htmlMode) {
            for (const page of pages) {
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper">' + page.data + '</div>' +
                    '</div>';
            }
        }
        else {
            for (const page of pages) {
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
                    '</div>';
            }
        }
        this.openWindow(pagesHtml, pages[0].width, pages[0].height);
    }
    openWindow(pagesHtml, width, height) {
        const a4Height = 842;
        const a4Width = 595;
        let imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            const zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        let cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        const windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    }
    renderPrintBlob(file) {
        const fileURL = URL.createObjectURL(file);
        const windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], RenderPrintDirective.prototype, "htmlMode", void 0);
RenderPrintDirective = __decorate([
    Directive({
        selector: '[gdRenderPrint]'
    }),
    __metadata("design:paramtypes", [RenderPrintService])
], RenderPrintDirective);

class ExceptionMessageService {
    constructor() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
    }
    get messageChange() {
        return this._messageChange;
    }
    changeMessage(message) {
        this._observer.next(message);
    }
}

let ErrorModalComponent = class ErrorModalComponent {
    constructor(messageService) {
        messageService.messageChange.subscribe(message => this.message = message);
    }
    ngOnInit() {
    }
};
ErrorModalComponent = __decorate([
    Component({
        selector: 'gd-error-modal',
        template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error message'\">\n  <div class=\"gd-modal-error\">{{message ? message : 'Server is not available'}}</div>\n</gd-modal>\n",
        styles: [".gd-modal-error{position:absolute;background-color:#fff;font-size:13px;padding:20px}"]
    }),
    __metadata("design:paramtypes", [ExceptionMessageService])
], ErrorModalComponent);

class PasswordService {
    constructor() {
        this._observer = new Subject();
        this._passChange = this._observer.asObservable();
    }
    get passChange() {
        return this._passChange;
    }
    setPassword(pass) {
        this._observer.next(pass);
    }
}

let PasswordRequiredComponent = class PasswordRequiredComponent {
    constructor(messageService, _passwordService) {
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe(message => this.message = message);
    }
    ngOnInit() {
    }
    setPassword(value) {
        this._passwordService.setPassword(value);
    }
};
PasswordRequiredComponent = __decorate([
    Component({
        selector: 'gd-password-required',
        template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password required'\">\n  <section id=\"gd-password-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-password-wrap\" id=\"gd-password-wrap\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <button class=\"btn btn-primary gd-password-submit\" (click)=\"setPassword(pass.value)\">Submit</button>\n      <span class=\"gd-password-error\">{{message}}</span>\n    </div>\n  </section>\n</gd-modal>\n",
        styles: [".gd-password-wrap{position:relative}.gd-password-wrap>input{padding-left:12px;width:454px;height:32px;color:#585858;float:left}.gd-password-submit{color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer;float:left}.gd-password-error{color:red;padding-top:10px;float:left}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
    }),
    __metadata("design:paramtypes", [ExceptionMessageService, PasswordService])
], PasswordRequiredComponent);

let ErrorInterceptorService = class ErrorInterceptorService {
    constructor(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    intercept(req, next) {
        const logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(map(data => {
            return data;
        }), catchError((exception) => {
            if (exception instanceof HttpErrorResponse) {
                switch (exception.status) {
                    case HttpError.BadRequest:
                        console.error('%c Bad Request 400', logFormat);
                        break;
                    case HttpError.Unauthorized:
                        console.error('%c Unauthorized 401', logFormat);
                        break;
                    case HttpError.NotFound:
                        console.error('%c Not Found 404', logFormat);
                        break;
                    case HttpError.TimeOut:
                        console.error('%c TimeOut 408', logFormat);
                        break;
                    case HttpError.InternalServerError:
                        console.error('%c big bad 500', logFormat);
                        this._messageService.changeMessage(exception.error.message);
                        this._modalService.open(CommonModals.ErrorMessage);
                        break;
                    case HttpError.Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        this._messageService.changeMessage(exception.error.message);
                        this._modalService.open(CommonModals.PasswordRequired);
                        break;
                }
            }
            return throwError(exception);
        }));
    }
};
ErrorInterceptorService.ngInjectableDef = defineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(inject(ModalService), inject(ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
ErrorInterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [ModalService, ExceptionMessageService])
], ErrorInterceptorService);

class SearchService {
    constructor() {
        this._observer = new Subject();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new Subject();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new Subject();
        this._totalChange = this._observerTotal.asObservable();
    }
    get textChange() {
        return this._textChange;
    }
    setText(text) {
        this._observer.next(text);
    }
    get currentChange() {
        return this._currentChange;
    }
    get totalChange() {
        return this._totalChange;
    }
    setCurrent(current) {
        this._observerCurrent.next(current);
    }
    setTotal(total) {
        this._observerTotal.next(total);
    }
}

let SearchComponent = class SearchComponent {
    constructor(_searchService) {
        this._searchService = _searchService;
        this.hidePanel = new EventEmitter(false);
        this.current = 0;
        this.total = 0;
        _searchService.totalChange.subscribe((total) => {
            this.total = total;
            if (total !== 0) {
                this.current = 1;
            }
            else {
                this.current = 0;
            }
            this._searchService.setCurrent(this.current);
        });
    }
    ngOnInit() {
    }
    setText(text) {
        this._searchService.setText(text);
    }
    hide() {
        this.setText('');
        this.hidePanel.emit(true);
    }
    prev() {
        if (this.current > 1) {
            this.current--;
            this._searchService.setCurrent(this.current);
        }
    }
    next() {
        if (this.current < this.total) {
            this.current++;
            this._searchService.setCurrent(this.current);
        }
    }
    ngAfterViewInit() {
        this.textElement.nativeElement.focus();
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "hidePanel", void 0);
__decorate([
    ViewChild('text'),
    __metadata("design:type", ElementRef)
], SearchComponent.prototype, "textElement", void 0);
SearchComponent = __decorate([
    Component({
        selector: 'gd-search',
        template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <div class=\"gd-nav-search-btn\" (click)=\"prev()\"><i fa [name]=\"'chevron-left'\"></i></div>\n  <div class=\"gd-nav-search-btn\" (click)=\"next()\"><i fa [name]=\"'chevron-right'\"></i></div>\n  <div class=\"gd-nav-search-btn gd-nav-search-cancel\" (click)=\"hide()\"><i fa [name]=\"'times'\"></i></div>\n</div>\n",
        styles: [".gd-nav-search-btn{float:left;margin:0 10px;padding:3px 5px;cursor:pointer;color:#959da5}.gd-nav-search-cancel{font-size:15px;width:10px;margin-left:1px;margin-top:-2px}.gd-search-count{color:#959da5;font-size:11px;position:absolute;left:221px;top:13px;text-align:right;width:62px}.gd-nav-search-container{background-color:#3e4e5a;min-width:330px;padding:8px 0 7px 7px;position:absolute;left:328px;top:49px;z-index:1}.gd-search-input{float:left;height:11px;width:215px;padding:5px 65px 5px 5px}@media (max-width:1025px){.gd-nav-search-container{top:70px;left:45%}.gd-search-input{width:auto}.gd-search-count{left:48%}}@media (min-width:401px) and (max-width:700px){.gd-search-input{width:226px}.gd-search-count{left:55%}}@media (max-width:500px){.gd-nav-search-container{width:100%;left:0}}"]
    }),
    __metadata("design:paramtypes", [SearchService])
], SearchComponent);

const $$5 = jquery;
let SearchableDirective = class SearchableDirective {
    constructor(_elementRef, _searchService, _highlight, _zoomService) {
        this._elementRef = _elementRef;
        this._searchService = _searchService;
        this._highlight = _highlight;
        this._zoomService = _zoomService;
        this.current = 0;
        this.total = 0;
        this.zoom = 100;
        _searchService.currentChange.subscribe((current) => {
            this.current = current;
            if (this.current !== 0) {
                this.moveToCurrent();
            }
        });
        _searchService.textChange.subscribe((text) => {
            this.text = text;
            this.highlightSearch();
        });
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe((val) => {
            this.zoom = val ? val : this.zoom;
        });
    }
    highlightSearch() {
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            this.cleanHighlight(el);
            if (this.text) {
                this.highlightEl(el);
                const count = el.querySelectorAll('.gd-highlight').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
        }
    }
    moveToCurrent() {
        if (this.current === 0) {
            return;
        }
        const currentZoom = this.getZoom();
        const el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            el.querySelectorAll('.gd-highlight-select').forEach(function (value) {
                $$5(value).removeClass('gd-highlight-select');
            });
            const currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $$5(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                const options = {
                    left: 0,
                    top: ($$5(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                el.parentElement.scrollTo(options);
            }
        }
    }
    highlightEl(el) {
        const textNodes = $$5(el).find('*').contents().filter(function () {
            const nodeName = this.parentElement.nodeName.toLowerCase();
            const checkClass = this.classList ? !this.classList.contains('gd-highlight') : true;
            return this.nodeType === 3 &&
                this.textContent.trim().length !== 0 &&
                nodeName !== 'style' &&
                nodeName !== 'title' &&
                nodeName !== 'body' &&
                nodeName !== 'script' &&
                checkClass;
        });
        const text = this.text;
        const highlight = this._highlight;
        textNodes.each(function () {
            const $this = $$5(this);
            let content = $this.text();
            content = highlight.transform(content, text);
            $this.replaceWith(content);
        });
        el.normalize();
    }
    cleanHighlight(el) {
        const nodeListOf = el.querySelectorAll('.gd-highlight');
        for (let i = 0; i < nodeListOf.length; i++) {
            const element = nodeListOf.item(i);
            element.replaceWith(element.innerText);
        }
        el.normalize();
    }
    getZoom() {
        return this.zoom / 100;
    }
};
SearchableDirective = __decorate([
    Directive({
        selector: '[gdSearchable]'
    }),
    __metadata("design:paramtypes", [ElementRef,
        SearchService,
        HighlightSearchPipe,
        ZoomService])
], SearchableDirective);

let TabbedToolbarsComponent = class TabbedToolbarsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TabbedToolbarsComponent = __decorate([
    Component({
        selector: 'gd-tabbed-toolbars',
        template: "<div class=\"top-panel\">\n  <gd-logo [logo]=\"'editor'\" [icon]=\"'pen-square'\"></gd-logo>\n  <ng-content></ng-content>\n</div>\n",
        styles: [".top-panel{background:#3e4e5a;display:flex;width:100%;height:90px}.top-panel ::ng-deep .logo{height:30px;font-size:16px}@media (max-width:480px){.top-panel{height:60px}.top-panel ::ng-deep .logo{height:60px}}"]
    }),
    __metadata("design:paramtypes", [])
], TabbedToolbarsComponent);

let TabsComponent = class TabsComponent {
    constructor() {
        this.tabs = [];
    }
    ngOnInit() {
    }
    addTab(tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
    selectTab(tabComponent) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tabComponent.active = true;
    }
};
TabsComponent = __decorate([
    Component({
        selector: 'gd-tabs',
        template: "<div class=\"gd-tabs\">\n  <div [ngClass]=\"(tab.active) ? 'gd-tab active' : 'gd-tab'\" *ngFor=\"let tab of tabs\" (mousedown)=\"selectTab(tab)\">\n    <div class=\"title\">{{tab.tabTitle}}</div>\n    <i fa class=\"icon\" [name]=\"tab.icon\"></i>\n  </div>\n</div>\n<ng-content></ng-content>\n",
        styles: [".gd-tabs{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:480px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}}"]
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);

let TabComponent = class TabComponent {
    constructor(tabs) {
        tabs.addTab(this);
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "tabTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "icon", void 0);
TabComponent = __decorate([
    Component({
        selector: 'gd-tab',
        template: "<div [ngClass]=\"(active) ? 'gd-editor-buttons active' : 'gd-editor-buttons'\">\n  <ng-content></ng-content>\n</div>\n",
        styles: [".gd-editor-buttons{height:60px;position:absolute;background-color:#fff;width:100%;left:0;line-height:60px;display:none}.gd-editor-buttons ::ng-deep .toolbar-panel{height:60px}.gd-editor-buttons.active{display:flex}"]
    }),
    __metadata("design:paramtypes", [TabsComponent])
], TabComponent);

class Formatting {
    constructor(fontSize, color, bgColor, bold, italic, underline, font, strikeout, align, list) {
        this.fontSize = fontSize;
        this.color = color;
        this.bgColor = bgColor;
        this.bold = bold;
        this.italic = italic;
        this.underline = underline;
        this.font = font;
        this.strikeout = strikeout;
        this.align = align;
        this.list = list;
    }
}
Formatting.DEFAULT = new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
class FormattingService {
    constructor() {
        this._observerBold = new Subject();
        this._formatBoldChange = this._observerBold.asObservable();
        this._observerUnderline = new Subject();
        this._formatUnderlineChange = this._observerUnderline.asObservable();
        this._observerUndo = new Subject();
        this._undo = this._observerUndo.asObservable();
        this._observerRedo = new Subject();
        this._redo = this._observerRedo.asObservable();
        this._observerItalic = new Subject();
        this._formatItalicChange = this._observerItalic.asObservable();
        this._observerColor = new Subject();
        this._formatColorChange = this._observerColor.asObservable();
        this._observerBgColor = new Subject();
        this._formatBgColorChange = this._observerBgColor.asObservable();
        this._observerFontSize = new Subject();
        this._formatFontSizeChange = this._observerFontSize.asObservable();
        this._observerFont = new Subject();
        this._formatFontChange = this._observerFont.asObservable();
        this._observerStrikeout = new Subject();
        this._formatStrikeoutChange = this._observerStrikeout.asObservable();
        this._observerAlign = new Subject();
        this._formatAlignChange = this._observerAlign.asObservable();
        this._observerList = new Subject();
        this._formatListChange = this._observerList.asObservable();
    }
    get formatBoldChange() {
        return this._formatBoldChange;
    }
    get formatUnderlineChange() {
        return this._formatUnderlineChange;
    }
    get formatColorChange() {
        return this._formatColorChange;
    }
    get formatBgColorChange() {
        return this._formatBgColorChange;
    }
    get formatFontSizeChange() {
        return this._formatFontSizeChange;
    }
    get formatFontChange() {
        return this._formatFontChange;
    }
    get undo() {
        return this._undo;
    }
    get redo() {
        return this._redo;
    }
    get formatItalicChange() {
        return this._formatItalicChange;
    }
    get formatStrikeoutChange() {
        return this._formatStrikeoutChange;
    }
    get formatAlignChange() {
        return this._formatAlignChange;
    }
    get formatListChange() {
        return this._formatListChange;
    }
    static createFontSizeOption(val) {
        return { value: val, name: val + 'px', separator: false, prefix: "px" };
    }
    static getFontSizeOptions() {
        return [
            FormattingService.createFontSizeOption(8),
            FormattingService.createFontSizeOption(10),
            FormattingService.createFontSizeOption(12),
            FormattingService.createFontSizeOption(14),
            FormattingService.createFontSizeOption(16),
            FormattingService.createFontSizeOption(18),
            FormattingService.createFontSizeOption(20),
            FormattingService.createFontSizeOption(22),
            FormattingService.createFontSizeOption(24),
        ];
    }
    static createFontOption(val) {
        return { value: val, name: val, separator: false, prefix: "" };
    }
    static getFontOptions() {
        const fonts = ["Arial", "Calibri", "Century Gothic", "Comic Sans", "Consolas", "Courier", "Dejavu Sans", "Dejavu Serif", "Georgia", "Gill Sans", "Helvetica", "Impact", "Lucida Sans",
            "Myriad Pro", "Open Sans", "Palatino", "Tahoma", "Times New Roman", "Trebuchet"];
        const fontOptions = [];
        fonts.forEach(font => {
            fontOptions.push(this.createFontOption(font));
        });
        return fontOptions;
    }
    changeFormatFontSize($event) {
        this._observerFontSize.next($event);
    }
    changeFormatBold(bold) {
        this._observerBold.next(bold);
    }
    changeFormatUnderline(underline) {
        this._observerUnderline.next(underline);
    }
    Undo() {
        this._observerUndo.next();
    }
    Redo() {
        this._observerRedo.next();
    }
    changeFormatItalic(italic) {
        this._observerItalic.next(italic);
    }
    changeFormatColor(color) {
        this._observerColor.next(color);
    }
    changeFormatBgColor(bgcolor) {
        this._observerBgColor.next(bgcolor);
    }
    changeFormatFont(font) {
        this._observerFont.next(font);
    }
    changeFormatStrikeout(strikeout) {
        this._observerStrikeout.next(strikeout);
    }
    changeFormatAlign(align) {
        this._observerAlign.next(align);
    }
    changeFormatList(list) {
        this._observerList.next(list);
    }
}

const DEFAULT_COLORS = ['#000000', '#993300', '#333300', '#000080', '#333399', '#333333',
    '#800000', '#FF6600', '#808000', '#008000', '#008080', '#0000FF',
    '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966',
    '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
    '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0',
    '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFFF', '#99CCFF', '#FFFFFF'];
let ColorPickerComponent = class ColorPickerComponent {
    constructor() {
        this.selectedColor = new EventEmitter();
        this.colors = DEFAULT_COLORS;
    }
    ngOnInit() {
    }
    select($event, color) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selectedColor.emit(color);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColorPickerComponent.prototype, "selectedColor", void 0);
ColorPickerComponent = __decorate([
    Component({
        selector: 'gd-color-picker',
        template: "<div class=\"bcPicker-picker\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
        styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:232px;padding:5px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999}.bcPicker-palette>.bcPicker-color{width:14px;height:14px;margin:2px;display:inline-block;border:1px solid #efefef;background-color:#9da97b;cursor:pointer}"]
    }),
    __metadata("design:paramtypes", [])
], ColorPickerComponent);

let BackFormattingService = class BackFormattingService extends FormattingService {
    constructor() {
        super();
    }
};
BackFormattingService.ngInjectableDef = defineInjectable({ factory: function BackFormattingService_Factory() { return new BackFormattingService(); }, token: BackFormattingService, providedIn: "root" });
BackFormattingService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], BackFormattingService);

let SelectionService = class SelectionService {
    constructor() {
        this.isIE =  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    restoreSelection() {
        if (!this.selection.collapsed || this.isIE) {
            this.putSelection(this.selection);
        }
    }
    captureSelection() {
        this.selection = window.getSelection().getRangeAt(0);
    }
    putSelection(selection) {
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selection.cloneRange());
    }
    refreshSelection() {
        this.captureSelection();
        this.restoreSelection();
    }
};
SelectionService.ngInjectableDef = defineInjectable({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
SelectionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SelectionService);

const $$6 = jquery;
let FormattingDirective = class FormattingDirective {
    constructor(_formattingService, _backFormattingService, _selectionService) {
        this._formattingService = _formattingService;
        this._backFormattingService = _backFormattingService;
        this._selectionService = _selectionService;
        this.bold = false;
        this.italic = false;
        this.underline = false;
        this.strikeout = false;
        this.isIE = false;
        this.isIE = /*@cc_on!@*/  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    mouseup() {
        this.bold = document.queryCommandState("bold");
        this.strikeout = document.queryCommandState("strikeThrough");
        this.italic = document.queryCommandState("italic");
        this.bgColor = document.queryCommandValue("backColor");
        this.underline = document.queryCommandState("underline");
        this.align = this.checkJustify();
        this.list = this.checkList();
        //fix required by FireFox to get correct background color
        if (this.bgColor === "transparent") {
            this.bgColor = $$6(window.getSelection().focusNode.parentNode).css('background-color').toString();
        }
        this.font = document.queryCommandValue("FontName").replace(/"/g, '');
        if (this.font.split(",").length > 1) {
            this.font = this.font.split(",")[0];
        }
        this.color = document.queryCommandValue("foreColor");
        this._backFormattingService.changeFormatBold(this.bold);
        this._backFormattingService.changeFormatUnderline(this.underline);
        this._backFormattingService.changeFormatItalic(this.italic);
        this._backFormattingService.changeFormatColor(this.color);
        this._backFormattingService.changeFormatBgColor(this.bgColor);
        this._backFormattingService.changeFormatFontSize(this.reportFontSize());
        this._backFormattingService.changeFormatFont(this.font);
        this._backFormattingService.changeFormatStrikeout(this.strikeout);
        this._backFormattingService.changeFormatAlign(this.align);
        this._backFormattingService.changeFormatList(this.list);
    }
    checkJustify() {
        let align = "";
        align = document.queryCommandState("justifyCenter") ? "center" : align;
        align = document.queryCommandState("justifyFull") ? "full" : align;
        align = document.queryCommandState("justifyLeft") ? "left" : align;
        align = document.queryCommandState("justifyRight") ? "right" : align;
        return align;
    }
    checkList() {
        let list = "";
        list = document.queryCommandState("insertUnorderedList") ? "unordered" : list;
        list = document.queryCommandState("insertOrderedList") ? "ordered" : list;
        return list;
    }
    reportFontSize() {
        let containerEl, sel;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                containerEl = sel.getRangeAt(0).commonAncestorContainer;
                // Make sure we have an element rather than a text node
                if (containerEl.nodeType === 3) {
                    containerEl = containerEl.parentNode;
                }
            }
        }
        else if ((sel = document.getSelection()) && sel.type !== "Control") {
            containerEl = sel.createRange().parentElement();
        }
        if (containerEl) {
            return parseInt(this.getComputedStyleProperty(containerEl, "fontSize").replace("px", ""), 10);
        }
    }
    getComputedStyleProperty(el, propName) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[propName];
        }
        else if (el.currentStyle) {
            return el.currentStyle[propName];
        }
    }
    ngOnInit() {
        this._formattingService.undo.subscribe(() => {
            this.toggleUndo();
        });
        this._formattingService.redo.subscribe(() => {
            this.toggleRedo();
        });
        this._formattingService.formatBoldChange.subscribe((bold) => {
            this.bold = bold;
            this.toggleBold();
        });
        this._formattingService.formatUnderlineChange.subscribe((underline) => {
            this.underline = underline;
            this.toggleUnderline();
        });
        this._formattingService.formatItalicChange.subscribe((italic) => {
            this.italic = italic;
            this.toggleItalic();
        });
        this._formattingService.formatColorChange.subscribe(((color) => {
            this.color = color;
            this.setColor(color);
        }));
        this._formattingService.formatBgColorChange.subscribe(((bgcolor) => {
            this.bgColor = bgcolor;
            this.setBgColor(bgcolor);
        }));
        this._formattingService.formatFontSizeChange.subscribe(((fontSize) => {
            this.setFontSize(fontSize);
        }));
        this._formattingService.formatFontChange.subscribe(((font) => {
            this.font = font;
            this.setFont(font);
        }));
        this._formattingService.formatStrikeoutChange.subscribe((strikeout) => {
            this.strikeout = strikeout;
            this.toggleStrikeout();
        });
        this._formattingService.formatAlignChange.subscribe((align) => {
            this.align = align;
            this.toggleAlign(this.align);
        });
        this._formattingService.formatListChange.subscribe((list) => {
            this.list = list;
            this.toggleList(this.list);
        });
    }
    toggleBold() {
        document.execCommand("bold");
        this._selectionService.refreshSelection();
    }
    toggleUnderline() {
        document.execCommand("underline");
        this._selectionService.refreshSelection();
    }
    toggleItalic() {
        document.execCommand("italic");
        this._selectionService.refreshSelection();
    }
    setBgColor(bgColor) {
        document.execCommand("backColor", false, bgColor);
        this._selectionService.refreshSelection();
    }
    setColor(color) {
        document.execCommand("foreColor", false, color);
        this._selectionService.refreshSelection();
    }
    setFontSize(fontSize) {
        if (document.getSelection().toString()) {
            let spanString = "<span style='font-size: " + fontSize + "px; color: " + this.color + "; background-color: " + this.bgColor + "; font-family: " + this.font + "'>" +
                document.getSelection() + "</span>";
            if (this.bold) {
                spanString = "<b>" + spanString + "</b>";
            }
            if (this.italic) {
                spanString = "<i>" + spanString + "</i>";
            }
            if (this.underline) {
                spanString = "<u>" + spanString + "</u>";
            }
            if (this.strikeout) {
                spanString = "<strike>" + spanString + "</strike>";
            }
            document.execCommand('insertHTML', false, spanString);
        }
        else {
            document.execCommand("fontsize", false, "7");
        }
        this._selectionService.refreshSelection();
    }
    toggleUndo() {
        document.execCommand("undo");
    }
    toggleRedo() {
        document.execCommand("redo");
    }
    setFont(font) {
        document.execCommand("fontName", false, font);
        this._selectionService.refreshSelection();
    }
    toggleStrikeout() {
        document.execCommand("strikeThrough");
        this._selectionService.refreshSelection();
    }
    toggleAlign(align) {
        if (this.isIE) {
            this.toggleAlignIE(align);
            return;
        }
        document.execCommand("styleWithCSS", false, 'true');
        switch (align) {
            case 'center':
                document.execCommand('justifyCenter');
                break;
            case 'full':
                document.execCommand('justifyFull');
                break;
            case 'left':
                document.execCommand('justifyLeft');
                break;
            case 'right':
                document.execCommand('justifyRight');
                break;
        }
        this._selectionService.refreshSelection();
    }
    toggleAlignIE(align) {
        this._selectionService.restoreSelection();
        this._selectionService.captureSelection();
        const selection = window.getSelection().focusNode.parentNode.parentNode;
        if (align === "full") {
            align = "justify";
        }
        $$6(selection).css("text-align", align);
        this._selectionService.refreshSelection();
    }
    toggleList(list) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList');
                break;
            case 'ordered':
                document.execCommand('insertOrderedList');
                break;
        }
        this._selectionService.refreshSelection();
    }
};
__decorate([
    HostListener('mouseup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormattingDirective.prototype, "mouseup", null);
FormattingDirective = __decorate([
    Directive({
        selector: '[gdFormatting]'
    }),
    __metadata("design:paramtypes", [FormattingService,
        BackFormattingService,
        SelectionService])
], FormattingDirective);

let SuccessModalComponent = class SuccessModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
SuccessModalComponent = __decorate([
    Component({
        selector: 'gd-success-modal',
        template: "<gd-modal id=\"gd-success-modal\" [title]=\"'Saved'\">\n<div id=\"gd-modal-success\"><div class=\"check_mark\">\n    <div class=\"sa-icon sa-success animate\">\n        <span class=\"sa-line sa-tip animateSuccessTip\"></span>\n        <span class=\"sa-line sa-long animateSuccessLong\"></span>\n        <div class=\"sa-placeholder\"></div>\n        <div class=\"sa-fix\"></div>\n      </div>\n  </div></div>\n  </gd-modal>\n",
        styles: [".check_mark{margin:0 auto}.sa-icon{width:80px;height:80px;border:4px solid gray;border-radius:50%;padding:0;position:relative;box-sizing:content-box}#gd-modal-success{display:flex;overflow:hidden}.sa-icon.sa-success{border-color:#4caf50}.sa-icon.sa-success::after,.sa-icon.sa-success::before{content:'';position:absolute;width:60px;height:120px;background:#fff}.sa-icon.sa-success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.sa-icon.sa-success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid rgba(76,175,80,.5);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sa-icon.sa-success.animate::after{-webkit-animation:4.25s ease-in rotatePlaceholder;animation:4.25s ease-in rotatePlaceholder}.animateSuccessTip{-webkit-animation:.75s animateSuccessTip;animation:.75s animateSuccessTip}.animateSuccessLong{-webkit-animation:.75s animateSuccessLong;animation:.75s animateSuccessLong}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}.sa-icon.sa-success .sa-line{height:5px;background-color:#4caf50;display:block;border-radius:2px;position:absolute;z-index:2}.sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}@-webkit-keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@media (max-width:1025px){#gd-modal-success{left:50%;top:50%;position:relative;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}}"]
    }),
    __metadata("design:paramtypes", [])
], SuccessModalComponent);

let EditHtmlService = class EditHtmlService {
    constructor() {
        this._observer = new Subject();
        this._htmlContent = this._observer.asObservable();
    }
    get observer() {
        return this._observer;
    }
    get htmlContent() {
        return this._htmlContent;
    }
};
EditHtmlService.ngInjectableDef = defineInjectable({ factory: function EditHtmlService_Factory() { return new EditHtmlService(); }, token: EditHtmlService, providedIn: "root" });
EditHtmlService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], EditHtmlService);

let EditorDirective = class EditorDirective {
    constructor(_selectionService, _htmlService) {
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this.isIE =  !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    onInput(event) {
        this.text = event.target;
        if (this.isIE) {
            if (this.text.innerHTML) {
                const html = this.text.innerHTML.toString();
                this._htmlService.observer.next(html);
            }
        }
    }
    onMouseleave(event) {
        this._selectionService.captureSelection();
        // this code is required to fix IE11 issue - it doesn't trigger blur event, since that we need to save updated HTML here
        if (this.isIE) {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    }
    onBlur(event) {
        event.preventDefault();
        this._selectionService.restoreSelection();
        if (this.text.innerHTML) {
            const html = this.text.innerHTML.toString();
            this._htmlService.observer.next(html);
        }
        else {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], EditorDirective.prototype, "text", void 0);
__decorate([
    HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditorDirective.prototype, "onInput", null);
__decorate([
    HostListener('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditorDirective.prototype, "onMouseleave", null);
__decorate([
    HostListener('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditorDirective.prototype, "onBlur", null);
EditorDirective = __decorate([
    Directive({
        selector: '[gdEditor]'
    }),
    __metadata("design:paramtypes", [SelectionService, EditHtmlService])
], EditorDirective);

var CommonComponentsModule_1;
const providers = [ConfigService,
    Api,
    ModalService,
    FileService,
    FileModel,
    FileUtil,
    SanitizeHtmlPipe,
    SanitizeResourceHtmlPipe,
    SanitizeStylePipe,
    HighlightSearchPipe,
    UploadFilesService,
    RenderPrintService,
    NavigateService,
    PagePreloadService,
    ZoomService,
    ExceptionMessageService,
    PasswordService,
    ErrorInterceptorService,
    SearchService,
    WindowService,
    ViewportService,
    FormattingService,
    BackFormattingService,
    OnCloseService];
let CommonComponentsModule = CommonComponentsModule_1 = class CommonComponentsModule {
    static forRoot() {
        return {
            ngModule: CommonComponentsModule_1,
            providers: providers
        };
    }
};
CommonComponentsModule = CommonComponentsModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, Angular2FontawesomeModule],
        declarations: [
            TopToolbarComponent,
            ButtonComponent,
            LogoComponent,
            TooltipComponent,
            ModalComponent,
            BrowseFilesModalComponent,
            DocumentComponent,
            PageComponent,
            SanitizeHtmlPipe,
            SanitizeResourceHtmlPipe,
            SanitizeStylePipe,
            HighlightSearchPipe,
            ChoiceButtonComponent,
            UploadFileZoneComponent,
            DndDirective,
            ScrollableDirective,
            ZoomDirective,
            SelectComponent,
            DisabledCursorDirective,
            RotationDirective,
            InitStateComponent,
            RenderPrintDirective,
            ErrorModalComponent,
            PasswordRequiredComponent,
            SearchComponent,
            SearchableDirective,
            TabbedToolbarsComponent,
            TabComponent,
            TabsComponent,
            ColorPickerComponent,
            FormattingDirective,
            SuccessModalComponent,
            EditorDirective
        ],
        exports: [
            TopToolbarComponent,
            ButtonComponent,
            LogoComponent,
            TooltipComponent,
            ModalComponent,
            BrowseFilesModalComponent,
            DocumentComponent,
            PageComponent,
            SanitizeResourceHtmlPipe,
            SanitizeStylePipe,
            HighlightSearchPipe,
            SanitizeHtmlPipe,
            ChoiceButtonComponent,
            UploadFileZoneComponent,
            ScrollableDirective,
            SelectComponent,
            RotationDirective,
            InitStateComponent,
            RenderPrintDirective,
            ErrorModalComponent,
            PasswordRequiredComponent,
            SearchComponent,
            SearchableDirective,
            TabbedToolbarsComponent,
            TabComponent,
            TabsComponent,
            ColorPickerComponent,
            FormattingDirective,
            SuccessModalComponent
        ],
        providers: providers
    })
], CommonComponentsModule);

export { Api, BackFormattingService, BrowseFilesModalComponent, ButtonComponent, ChoiceButtonComponent, CommonComponentsModule, CommonModals, ConfigService, DisabledCursorDirective, DndDirective, DocumentComponent, EditHtmlService, ErrorInterceptorService, ErrorModalComponent, ExceptionMessageService, FileCredentials, FileDescription, FileModel, FileService, FileUtil, Formatting, FormattingService, HighlightSearchPipe, HttpError, InitStateComponent, LogoComponent, ModalComponent, ModalService, NavigateService, OnCloseService, PageComponent, PageModel, PagePreloadService, PasswordRequiredComponent, PasswordService, RenderPrintDirective, RenderPrintService, RotatedPage, RotationDirective, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, SaveFile, ScrollableDirective, SearchComponent, SearchService, SearchableDirective, SelectComponent, SelectionService, TooltipComponent, TopToolbarComponent, UploadFileZoneComponent, UploadFilesService, ViewportService, WindowService, ZoomDirective, ZoomService, TabbedToolbarsComponent as ɵa, TabComponent as ɵb, TabsComponent as ɵc, ColorPickerComponent as ɵd, FormattingDirective as ɵe, SuccessModalComponent as ɵf, EditorDirective as ɵg };
//# sourceMappingURL=groupdocs.examples.angular-common-components.js.map
