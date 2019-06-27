import { __decorate, __metadata, __values } from 'tslib';
import { defineInjectable, Injectable, Component, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter, ViewEncapsulation, Pipe, HostBinding, HostListener, Directive, inject, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as jquery from 'jquery';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, fromEvent, BehaviorSubject, throwError } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged, startWith, tap, map, catchError } from 'rxjs/operators';

var $ = jquery;
var ViewportService = /** @class */ (function () {
    function ViewportService() {
    }
    ViewportService.prototype.checkInViewport = function (el, zoom, leftOffset, deltaX) {
        if (zoom === void 0) { zoom = 100; }
        if (leftOffset === void 0) { leftOffset = 0; }
        if (deltaX === void 0) { deltaX = 0.5; }
        if (!el) {
            return false;
        }
        var x = deltaX;
        var y = 0.5;
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft() + leftOffset,
            right: win.scrollLeft() + win.width() - 10,
            bottom: win.scrollTop() + win.height()
        };
        if (isNaN(zoom)) {
            zoom = 100;
        }
        var zoomN = zoom / 100;
        var height = $(el).outerHeight() * (zoomN);
        var width = $(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        var bounds = $(el).offset();
        var right = (bounds.left * (zoomN)) + width;
        var bottom = (bounds.top * (zoomN)) + height;
        var visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));
        if (!visible) {
            return false;
        }
        var deltas = {
            top: Math.min(1, (bottom - viewport.top) / height),
            bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
            left: Math.min(1, (right - viewport.left) / width),
            right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
        };
        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    };
    ViewportService.ngInjectableDef = defineInjectable({ factory: function ViewportService_Factory() { return new ViewportService(); }, token: ViewportService, providedIn: "root" });
    ViewportService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ViewportService);
    return ViewportService;
}());

var $$1 = jquery;
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
    }
    TopToolbarComponent.prototype.ngOnInit = function () {
        this.refresh();
        var el = this.getToolsElem();
        var $this = this;
        el.addEventListener('scroll', function () {
            $this.refresh();
        });
    };
    TopToolbarComponent.prototype.moveLeft = function () {
        var el = this.getToolsElem();
        if (el) {
            var elem = this.canMoveTo(true);
            if (elem) {
                var options = {
                    left: $$1(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    TopToolbarComponent.prototype.moveRight = function () {
        var el = this.getToolsElem();
        if (el) {
            var elem = this.canMoveTo(false);
            if (elem) {
                var options = {
                    left: $$1(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    TopToolbarComponent.prototype.getToolsElem = function () {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    };
    TopToolbarComponent.prototype.canMoveTo = function (left) {
        var elem;
        var children = this.getChildren();
        var countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            var element = this.getElem(elem);
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
    };
    TopToolbarComponent.prototype.getElem = function (num) {
        var elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    };
    TopToolbarComponent.prototype.getChildren = function () {
        var el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    };
    TopToolbarComponent.prototype.getLeftOffset = function () {
        var el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    };
    TopToolbarComponent.prototype.refresh = function () {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    };
    TopToolbarComponent.prototype.ngAfterViewChecked = function () {
        var showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        var showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
    };
    TopToolbarComponent = __decorate([
        Component({
            selector: 'gd-top-toolbar',
            template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
            styles: [".top-toolbar{width:100%;height:50px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:1025px){.top-toolbar{height:70px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
        }),
        __metadata("design:paramtypes", [ElementRef,
            ViewportService,
            ChangeDetectorRef])
    ], TopToolbarComponent);
    return TopToolbarComponent;
}());

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.disabled = false;
        this.showToolTip = false;
    }
    ButtonComponent.prototype.onHovering = function () {
        this.showToolTip = true;
    };
    ButtonComponent.prototype.onUnhovering = function () {
        this.showToolTip = false;
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
    ], ButtonComponent.prototype, "tooltip", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "className", void 0);
    ButtonComponent = __decorate([
        Component({
            selector: 'gd-button',
            template: "<div class=\"button\" [ngClass]=\"className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <i fa [name]=\"icon\"></i>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n",
            styles: [".button{margin:0 15px;font-size:14px;color:#959da5;cursor:pointer}@media (max-width:1025px){.button{font-size:20px;margin:0 20px}.arrow-button{margin:5px}}"]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LogoComponent.prototype, "logo", void 0);
    LogoComponent = __decorate([
        Component({
            selector: 'gd-logo',
            template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"logo-text\" [innerHTML]=\"logo\"></span>\n</div>\n\n",
            styles: [".logo{background-color:#25c2d4;height:50px;display:flex;align-items:center}.logo-text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}@media (max-width:1025px){.logo{height:70px}}"]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());

var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.visibility = 'hidden';
    }
    Object.defineProperty(TooltipComponent.prototype, "show", {
        set: function (value) {
            this.visibility = value ? 'shown' : 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnInit = function () {
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
            styles: [".tooltip{position:absolute;margin-top:37px;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #000}"]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());

var Api = /** @class */ (function () {
    function Api() {
    }
    Api.VIEWER_APP = '/viewer';
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
    return Api;
}());
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    Object.defineProperty(ConfigService.prototype, "apiEndpoint", {
        set: function (url) {
            this._apiEndpoint = url;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.getConfigEndpoint = function (app) {
        return (this.getApiEndpoint().endsWith(app) ? this.getApiEndpoint() : this.getApiEndpoint() + app) + Api.LOAD_CONFIG;
    };
    ConfigService.prototype.getViewerApiEndpoint = function () {
        return this._apiEndpoint.trim().endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    };
    ConfigService.prototype.getApiEndpoint = function () {
        return this._apiEndpoint;
    };
    ConfigService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());

var CommonModals = /** @class */ (function () {
    function CommonModals() {
    }
    CommonModals.PasswordRequired = "gd-password-required";
    CommonModals.ErrorMessage = "gd-error-message";
    CommonModals.BrowseFiles = "gd-browse-files";
    return CommonModals;
}());
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());

var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.visible = new EventEmitter();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    ModalComponent.prototype.open = function () {
        this.visibility = true;
        this.visible.emit(true);
    };
    ModalComponent.prototype.close = function () {
        this.visibility = false;
        this.visible.emit(false);
    };
    ModalComponent.prototype.onClose = function ($event) {
        if ($event && $event.target && $event.target.id === 'modalDialog') {
            this.close();
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
            template: "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n",
            styles: [".gd-modal{overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5)}.gd-modal-dialog{box-shadow:#0005 0 0 10px;position:absolute;width:1024px;height:728px;top:calc(50% - 364px);left:calc(50% - 512px)}.gd-modal-content{background-color:#fff;height:100%;display:flex;flex-direction:column}.gd-modal-header{padding:1px 20px;background-color:#3e4e5a}.gd-modal-close{position:absolute;right:20px;top:13px;font-size:21px;cursor:pointer;color:#959da5}.gd-modal-title{font-size:16px;font-weight:400;padding-top:16px;padding-bottom:16px;margin:0;color:#fff}.gd-modal-body{background-color:#fff;padding:20px 0;overflow:hidden;overflow-y:auto;height:calc(100% - 75px)}.gd-modal-footer{height:25px}.gd-modal-footer>.btn{float:right;margin:20px 15px;padding:10px 20px;cursor:pointer;font-size:12px}@media (max-width:1025px){.gd-modal-dialog{width:100%;height:100%;top:0;left:0}}"]
        }),
        __metadata("design:paramtypes", [ModalService, ElementRef])
    ], ModalComponent);
    return ModalComponent;
}());

var PageModel = /** @class */ (function () {
    function PageModel() {
    }
    return PageModel;
}());
var RotatedPage = /** @class */ (function () {
    function RotatedPage() {
    }
    return RotatedPage;
}());
var FileCredentials = /** @class */ (function () {
    function FileCredentials() {
    }
    return FileCredentials;
}());
var FileDescription = /** @class */ (function () {
    function FileDescription() {
        this.printAllowed = true;
    }
    return FileDescription;
}());
var FileModel = /** @class */ (function () {
    function FileModel() {
    }
    return FileModel;
}());
var HttpError = /** @class */ (function () {
    function HttpError() {
    }
    HttpError.BadRequest = 400;
    HttpError.Unauthorized = 401;
    HttpError.Forbidden = 403;
    HttpError.NotFound = 404;
    HttpError.TimeOut = 408;
    HttpError.Conflict = 409;
    HttpError.InternalServerError = 500;
    return HttpError;
}());
var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    FileUtil.find = function (filename, isDirectory) {
        if (filename && !isDirectory) {
            var strings = filename.split('.');
            var name_1 = strings.pop().toLowerCase();
            if (typeof FileUtil.map[name_1] === "undefined") {
                return strings.length > 1 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
            }
            else {
                return FileUtil.map[name_1];
            }
        }
        else {
            return FileUtil.map['folder'];
        }
    };
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
    return FileUtil;
}());
var FileService = /** @class */ (function () {
    function FileService() {
    }
    return FileService;
}());

var UploadFilesService = /** @class */ (function () {
    function UploadFilesService() {
        var _this = this;
        this._uploadsChange = new Observable(function (observer) {
            return _this._observer = observer;
        });
    }
    Object.defineProperty(UploadFilesService.prototype, "uploadsChange", {
        get: function () {
            return this._uploadsChange;
        },
        enumerable: true,
        configurable: true
    });
    UploadFilesService.prototype.changeFilesList = function (filesList) {
        this._observer.next(filesList);
    };
    return UploadFilesService;
}());

var $$2 = jquery;
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
            $$2("#gd-upload-input").trigger('click');
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
    BrowseFilesModalComponent = __decorate([
        Component({
            selector: 'gd-browse-files-modal',
            template: "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" gdDnd [isBackground]=\"false\" (open)=\"showUploadFile=$event\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\">\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n          <i fa [name]=\"'check'\"></i>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <i class=\"fa fa-level-up-alt\"></i>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\"><i fa [name]=\"getFormatIcon(file)\"></i>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\"><i\n      class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n",
            styles: [".gd-modal-table{width:100%;text-align:left;padding-top:20px}.list-files-header{color:#acacac;font-size:10px;padding-left:21px}.header-size{position:relative;left:-24px}.file-size,.header-size{width:10%;color:#777}.file-description,.file-size{font-size:14px;padding:10px 6px;margin-left:12px}.file-description{cursor:pointer;overflow:hidden;display:flex}.list-files-header,.list-files-lines{display:flex;width:100%;justify-content:space-between}.gd-modal-spinner{background-color:#fff;width:100%;height:20px;text-align:center;font-size:16px}.gd-cancel-button{padding:7px;background:0 0;width:28px;overflow:hidden}.gd-cancel-button i{font-size:21px}.gd-file-name{white-space:nowrap;overflow:hidden;width:100%;text-overflow:ellipsis}.go-up{cursor:pointer;display:flex;font-size:16px}.upload-panel{display:flex;position:relative;left:20px}.file-description .fa-file-pdf{color:#e21717}.file-description .fa-file-word{color:#6979b9}.file-description .fa-file-powerpoint{color:#e29417}.file-description .fa-file-excel{color:#3fa300}.file-description .fa-file-image{color:#e217da}.file-description .fa-file-text .fa-folder{color:#5d6a75}.file-description i{font-size:32px}.go-up-dots{margin-left:10px;margin-top:8px;font-size:20px}.go-up-icon i{padding:8px}.go-up-icon{width:30px;height:30px;margin-left:12px}.file-name{font-size:16px;color:#6e6e6e}.file-name-format{padding-left:10px}.file-format{font-size:10px}.url-input{width:358px;margin-left:8px;height:27px;border:1px solid #25c2d4}.url-check{width:31px;height:31px;color:#fff;font-size:15px;background-color:#25c2d4}.url-check i{padding:8px}.upload-url{display:flex}.list-files-lines{border-top:1px solid #ccc}.gd-dnd-wrap{border:2px dashed #ccc;background-color:#f8f8f8;cursor:default;position:absolute;width:983px;height:626px;opacity:.9;z-index:1;left:20px;display:flex;text-align:center;justify-content:center}.gd-dnd-wrap h2{color:#959da5;font-size:15px;font-weight:300;margin-top:50%}@media (max-width:1025px){.file-size,.header-size{width:18%}.gd-dnd-wrap{width:95%}}"]
        }),
        __metadata("design:paramtypes", [UploadFilesService])
    ], BrowseFilesModalComponent);
    return BrowseFilesModalComponent;
}());

var ZoomService = /** @class */ (function () {
    function ZoomService() {
        this._observer = new Subject();
        this._zoomChange = this._observer.asObservable();
    }
    ZoomService.prototype.createZoomOption = function (val, name, sep) {
        if (sep === void 0) { sep = false; }
        return { value: val, name: name, separator: sep };
    };
    ZoomService.prototype.zoomOptions = function (width, height) {
        return [
            this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')
        ];
    };
    Object.defineProperty(ZoomService.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomService.prototype, "zoomChange", {
        get: function () {
            return this._zoomChange;
        },
        enumerable: true,
        configurable: true
    });
    ZoomService.prototype.changeZoom = function (zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    };
    return ZoomService;
}());

var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(zoomService) {
        var _this = this;
        this.wait = false;
        zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val;
        });
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent.prototype.ifPdf = function () {
        return FileUtil.find(this.file.guid, false).format === "Portable Document Format";
    };
    DocumentComponent.prototype.ifImage = function () {
        return FileUtil.find(this.file.guid, false).format === "Joint Photographic Experts Group";
    };
    DocumentComponent.prototype.ngOnChanges = function (changes) {
        this.refreshView = !this.refreshView;
    };
    DocumentComponent.prototype.ifChromeOrFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
    };
    DocumentComponent.prototype.ifFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
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
            template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\"></gd-page>\n    </div>\n  </div>\n</div>\n",
            styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
        }),
        __metadata("design:paramtypes", [ZoomService])
    ], DocumentComponent);
    return DocumentComponent;
}());

var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.ngOnChanges = function (changes) {
        var dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
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
    PageComponent = __decorate([
        Component({
            selector: 'gd-page',
            template: "<div id=\"page-{{number}}\"\n     [style.min-width.px]=\"width\" [style.min-height.px]=\"height\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading... Please wait.\n  </div>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
            styles: [".gd-page-spinner{margin-top:150px;text-align:center}.gd-wrapper{width:inherit;height:inherit}.gd-wrapper img{width:inherit}.gd-wrapper div{width:100%}.gd-highlight{background-color:#ff0}.gd-highlight-select{background-color:#ff9b00}"]
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());

var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SanitizeHtmlPipe = __decorate([
        Pipe({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());
var SanitizeResourceHtmlPipe = /** @class */ (function () {
    function SanitizeResourceHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeResourceHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    SanitizeResourceHtmlPipe = __decorate([
        Pipe({ name: 'safeResourceHtml' }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], SanitizeResourceHtmlPipe);
    return SanitizeResourceHtmlPipe;
}());
var SanitizeStylePipe = /** @class */ (function () {
    function SanitizeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeStylePipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    };
    SanitizeStylePipe = __decorate([
        Pipe({ name: 'safeStyle' }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], SanitizeStylePipe);
    return SanitizeStylePipe;
}());
var HighlightSearchPipe = /** @class */ (function () {
    function HighlightSearchPipe() {
    }
    HighlightSearchPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    };
    HighlightSearchPipe = __decorate([
        Pipe({ name: 'highlight' })
    ], HighlightSearchPipe);
    return HighlightSearchPipe;
}());

var ChoiceButtonComponent = /** @class */ (function () {
    function ChoiceButtonComponent() {
        this.selected = new EventEmitter();
        this.open = false;
    }
    ChoiceButtonComponent.prototype.ngOnInit = function () {
    };
    ChoiceButtonComponent.prototype.openChoices = function () {
        this.open = !this.open;
    };
    ChoiceButtonComponent.prototype.select = function (choice) {
        this.selected.emit(choice);
        this.open = false;
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
    return ChoiceButtonComponent;
}());

var UploadFileZoneComponent = /** @class */ (function () {
    function UploadFileZoneComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.closeUpload = new EventEmitter();
    }
    UploadFileZoneComponent.prototype.ngOnInit = function () {
    };
    UploadFileZoneComponent.prototype.handleFileInput = function (files) {
        this._uploadService.changeFilesList(files);
        this.onCloseUpload();
    };
    UploadFileZoneComponent.prototype.onCloseUpload = function () {
        this.closeUpload.emit(true);
    };
    UploadFileZoneComponent.prototype.close = function ($event) {
        if ($event.target.id === 'gd-dropZone') {
            this.onCloseUpload();
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
            styles: [".gd-drag-n-drop-wrap{border:2px dashed #ccc;background-color:#f8f8f8;text-align:center;cursor:default;position:absolute;width:983px;height:626px;left:2px;display:flex;align-content:center;flex-direction:column;justify-content:center;opacity:.9;z-index:1}.gd-drag-n-drop-wrap h2{color:#959da5;margin:5px 0;font-size:15px;font-weight:300}.gd-drag-n-drop-wrap h4{color:#cacaca;font-weight:300;font-size:12px;margin:10px 0 15px}.gd-drag-n-drop-icon .fa-cloud-download-alt{color:#d1d1d1;font-size:110px}.gd-drag-n-drop-buttons i{margin-right:5px}.gd-drag-n-drop-buttons .btn{width:134px;height:35px;margin:0 10px;font-size:12px;font-weight:400}.gd-drag-n-drop-wrap.hover{background:#ddd;border-color:#aaa}"]
        }),
        __metadata("design:paramtypes", [UploadFilesService])
    ], UploadFileZoneComponent);
    return UploadFileZoneComponent;
}());

var DndDirective = /** @class */ (function () {
    function DndDirective(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.isBackground = true;
        this.background = '#f8f8f8';
    }
    DndDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#999';
        }
        else {
            this.open.emit(true);
        }
    };
    DndDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#f8f8f8';
        }
    };
    DndDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = '#f8f8f8';
            this._uploadFilesService.changeFilesList(files);
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
    DndDirective = __decorate([
        Directive({
            selector: '[gdDnd]'
        }),
        __metadata("design:paramtypes", [UploadFilesService])
    ], DndDirective);
    return DndDirective;
}());

var PagePreloadService = /** @class */ (function () {
    function PagePreloadService() {
        var _this = this;
        this._checkPreload = new Observable(function (observer) {
            return _this._observer = observer;
        });
    }
    Object.defineProperty(PagePreloadService.prototype, "checkPreload", {
        get: function () {
            return this._checkPreload;
        },
        enumerable: true,
        configurable: true
    });
    PagePreloadService.prototype.changeLastPageInView = function (page) {
        this._observer.next(page);
    };
    return PagePreloadService;
}());

var NavigateService = /** @class */ (function () {
    function NavigateService(_pagePreloadService) {
        var _this = this;
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._navigate = new Observable(function (observer) {
            return _this._observer = observer;
        });
    }
    Object.defineProperty(NavigateService.prototype, "navigate", {
        get: function () {
            return this._navigate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "countPages", {
        get: function () {
            return this._countPages;
        },
        set: function (value) {
            this._countPages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "currentPage", {
        get: function () {
            return this._currentPage;
        },
        set: function (value) {
            this._currentPage = value;
        },
        enumerable: true,
        configurable: true
    });
    NavigateService.prototype.nextPage = function () {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    };
    NavigateService.prototype.prevPage = function () {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    };
    NavigateService.prototype.toLastPage = function () {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    };
    NavigateService.prototype.toFirstPage = function () {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    };
    NavigateService.prototype.navigateTo = function (page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    };
    NavigateService.ngInjectableDef = defineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(inject(PagePreloadService)); }, token: NavigateService, providedIn: "root" });
    NavigateService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [PagePreloadService])
    ], NavigateService);
    return NavigateService;
}());

var MOBILE_MAX_WIDTH = 425;
var TABLET_MAX_WIDTH = 1024;
var WindowService = /** @class */ (function () {
    function WindowService() {
        var _this = this;
        this.resizeSubject = new Subject();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200), distinctUntilChanged(), startWith({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), tap(function (event) {
            _this.resizeSubject.next(event.target);
            _this.width = event.target.innerWidth;
            _this.height = event.target.innerHeight;
        }));
        this._resize$.subscribe();
    }
    Object.defineProperty(WindowService.prototype, "onResize", {
        get: function () {
            return this.resizeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    WindowService.prototype.isMobile = function () {
        return this.width <= MOBILE_MAX_WIDTH;
    };
    WindowService.prototype.isTablet = function () {
        return this.width <= TABLET_MAX_WIDTH;
    };
    WindowService.prototype.isDesktop = function () {
        return !this.isMobile() && !this.isTablet();
    };
    return WindowService;
}());

var $$3 = jquery;
var ScrollableDirective = /** @class */ (function () {
    function ScrollableDirective(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._navigateService = _navigateService;
        this._pagePreloadService = _pagePreloadService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._viewportService = _viewportService;
        this.zoom = 100;
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val ? val : _this.zoom;
            _this.refresh();
        });
    }
    ScrollableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
        this._navigateService.navigate.subscribe((function (value) {
            _this.currentPage = value;
            _this.scrollToPage(value);
        }));
        this.refresh();
    };
    ScrollableDirective.prototype.scrolling = function () {
        this.refresh();
    };
    ScrollableDirective.prototype.resizing = function () {
        this.refresh();
    };
    ScrollableDirective.prototype.scrollToPage = function (pageNumber) {
        var el = this._elementRef.nativeElement;
        var page = this.getPage(pageNumber);
        var prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
        var isSameTop = (prev && $$3(prev).offset().top === $$3(page).offset().top);
        if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
            return;
        }
        var pagesHeight = this.calculateOffset(pageNumber);
        var options = {
            left: 0,
            top: pagesHeight
        };
        if (el) {
            el.scrollTo(options);
        }
    };
    ScrollableDirective.prototype.getChildren = function () {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children;
        }
    };
    ScrollableDirective.prototype.getPage = function (pageNumber) {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children.item(pageNumber - 1);
        }
    };
    ScrollableDirective.prototype.calculateOffset = function (pageNumber) {
        var count = this.ifFirefox() ? 1 : this.countPagesOnWidth();
        var margin = this._windowService.isDesktop() ? 40 : 10;
        var pagesHeight = 0;
        for (var i = 1; i < pageNumber / count; i++) {
            var item = this.getPage(i);
            var clientHeight = item ? item.clientHeight : 0;
            pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
        }
        return pagesHeight;
    };
    ScrollableDirective.prototype.countPagesOnWidth = function () {
        var pageEl = this.getPage(1);
        var offset = 150;
        var count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
        return count === 0 ? 1 : count;
    };
    ScrollableDirective.prototype.ifFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    };
    ScrollableDirective.prototype.refresh = function () {
        var page;
        var currentPageSet = false;
        var pageElem = this.getPage(this.currentPage);
        var currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
        for (page = 1; page < this.getChildren().length + 1; page++) {
            var element = this.getPage(page);
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
    };
    ScrollableDirective.prototype.ngOnChanges = function (changes) {
        this.refresh();
    };
    ScrollableDirective.prototype.ngOnInit = function () {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    };
    ScrollableDirective.prototype.getWidth = function () {
        return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
    };
    ScrollableDirective.prototype.getZoom = function () {
        return this.zoom / 100;
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
    return ScrollableDirective;
}());

var ZoomDirective = /** @class */ (function () {
    function ZoomDirective(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
    }
    ZoomDirective.prototype.ngOnDestroy = function () {
    };
    ZoomDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe(function (zoom) {
            _this.setStyles(zoom);
        });
    };
    ZoomDirective.prototype.setStyles = function (zoom) {
        if (!this.zoomActive) {
            return;
        }
        this.zoomStr = Math.round(zoom) + '%';
        this.zoomInt = zoom === 100 ? 1 : zoom / 100;
        this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
        this.mozTransformOrigin = 'top';
        var transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
    };
    ZoomDirective.prototype.ngAfterViewInit = function () {
        this.setStyles(this._zoomService.zoom);
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
    return ZoomDirective;
}());

var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.disabled = false;
        this.selected = new EventEmitter();
        this.isOpen = false;
    }
    SelectComponent.prototype.open = function () {
        if (!this.disabled) {
            this.isOpen = true;
        }
    };
    SelectComponent.prototype.close = function () {
        this.isOpen = false;
    };
    SelectComponent.prototype.toggle = function () {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    };
    SelectComponent.prototype.select = function (value) {
        this.selected.emit(value);
        this.close();
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
            template: "<div class=\"select\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\">{{showSelected}}%</span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select(option.value)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
            styles: [".select{min-width:50px;color:#959da5}.selected-value{font-size:14px;cursor:pointer}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:160px;padding:5px 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu .option{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer}.dropdown-menu-separator{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5;padding:0!important}"]
        }),
        __metadata("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());

var DisabledCursorDirective = /** @class */ (function () {
    function DisabledCursorDirective() {
    }
    DisabledCursorDirective.prototype.updateCursor = function () {
        this.cursor = this.dis ? 'not-allowed' : 'pointer';
    };
    DisabledCursorDirective.prototype.ngOnInit = function () {
        this.updateCursor();
    };
    DisabledCursorDirective.prototype.ngOnChanges = function (changes) {
        this.updateCursor();
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
    return DisabledCursorDirective;
}());

var RotationDirective = /** @class */ (function () {
    function RotationDirective() {
        this.withMargin = true;
    }
    RotationDirective.prototype.updateCursor = function () {
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
    };
    RotationDirective.prototype.isLandscape = function () {
        return this.width > this.height;
    };
    RotationDirective.prototype.ngOnInit = function () {
        this.updateCursor();
    };
    RotationDirective.prototype.ngOnChanges = function (changes) {
        this.updateCursor();
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
    return RotationDirective;
}());

var InitStateComponent = /** @class */ (function () {
    function InitStateComponent() {
    }
    InitStateComponent.prototype.ngOnInit = function () {
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
    return InitStateComponent;
}());

var RenderPrintService = /** @class */ (function () {
    function RenderPrintService() {
        var _this = this;
        this._render = new Observable(function (observer) {
            return _this._observer = observer;
        });
        this._renderBlob = new Observable(function (observer) {
            return _this._observerBlob = observer;
        });
    }
    Object.defineProperty(RenderPrintService.prototype, "renderPrint", {
        get: function () {
            return this._render;
        },
        enumerable: true,
        configurable: true
    });
    RenderPrintService.prototype.changePages = function (pages) {
        this._observer.next(pages);
    };
    Object.defineProperty(RenderPrintService.prototype, "renderPrintBlob", {
        get: function () {
            return this._renderBlob;
        },
        enumerable: true,
        configurable: true
    });
    RenderPrintService.prototype.changeBlob = function (file) {
        this._observerBlob.next(file);
    };
    return RenderPrintService;
}());

var RenderPrintDirective = /** @class */ (function () {
    function RenderPrintDirective(_renderService) {
        var _this = this;
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe(function (pages) {
            _this.renderPrint(pages);
        });
        _renderService.renderPrintBlob.subscribe(function (file) {
            _this.renderPrintBlob(file);
        });
    }
    RenderPrintDirective.prototype.renderPrint = function (pages) {
        var e_1, _a, e_2, _b;
        var pagesHtml = '';
        if (this.htmlMode) {
            try {
                for (var pages_1 = __values(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                    var page = pages_1_1.value;
                    pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                        '<div class="gd-wrapper">' + page.data + '</div>' +
                        '</div>';
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (pages_1_1 && !pages_1_1.done && (_a = pages_1.return)) _a.call(pages_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            try {
                for (var pages_2 = __values(pages), pages_2_1 = pages_2.next(); !pages_2_1.done; pages_2_1 = pages_2.next()) {
                    var page = pages_2_1.value;
                    pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                        '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
                        '</div>';
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (pages_2_1 && !pages_2_1.done && (_b = pages_2.return)) _b.call(pages_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.openWindow(pagesHtml, pages[0].width, pages[0].height);
    };
    RenderPrintDirective.prototype.openWindow = function (pagesHtml, width, height) {
        var a4Height = 842;
        var a4Width = 595;
        var imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            var zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        var cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        var windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        //windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        // windowObject.close();
    };
    RenderPrintDirective.prototype.renderPrintBlob = function (file) {
        var fileURL = URL.createObjectURL(file);
        var windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
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
    return RenderPrintDirective;
}());

var ExceptionMessageService = /** @class */ (function () {
    function ExceptionMessageService() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
    }
    Object.defineProperty(ExceptionMessageService.prototype, "messageChange", {
        get: function () {
            return this._messageChange;
        },
        enumerable: true,
        configurable: true
    });
    ExceptionMessageService.prototype.changeMessage = function (message) {
        this._observer.next(message);
    };
    return ExceptionMessageService;
}());

var ErrorModalComponent = /** @class */ (function () {
    function ErrorModalComponent(messageService) {
        var _this = this;
        messageService.messageChange.subscribe(function (message) { return _this.message = message; });
    }
    ErrorModalComponent.prototype.ngOnInit = function () {
    };
    ErrorModalComponent = __decorate([
        Component({
            selector: 'gd-error-modal',
            template: "<gd-modal id=\"gd-error-message\" [title]=\"'Error message'\">\n  <div class=\"gd-modal-error\">{{message ? message : 'Server is not available'}}</div>\n</gd-modal>\n",
            styles: [".gd-modal-error{position:absolute;background-color:#fff;font-size:13px;padding:20px}"]
        }),
        __metadata("design:paramtypes", [ExceptionMessageService])
    ], ErrorModalComponent);
    return ErrorModalComponent;
}());

var PasswordService = /** @class */ (function () {
    function PasswordService() {
        this._observer = new Subject();
        this._passChange = this._observer.asObservable();
    }
    Object.defineProperty(PasswordService.prototype, "passChange", {
        get: function () {
            return this._passChange;
        },
        enumerable: true,
        configurable: true
    });
    PasswordService.prototype.setPassword = function (pass) {
        this._observer.next(pass);
    };
    return PasswordService;
}());

var PasswordRequiredComponent = /** @class */ (function () {
    function PasswordRequiredComponent(messageService, _passwordService) {
        var _this = this;
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe(function (message) { return _this.message = message; });
    }
    PasswordRequiredComponent.prototype.ngOnInit = function () {
    };
    PasswordRequiredComponent.prototype.setPassword = function (value) {
        this._passwordService.setPassword(value);
    };
    PasswordRequiredComponent = __decorate([
        Component({
            selector: 'gd-password-required',
            template: "<gd-modal id=\"gd-password-required\" [title]=\"'Password required'\">\n  <section id=\"gd-password-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-password-wrap\" id=\"gd-password-wrap\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <button class=\"btn btn-primary gd-password-submit\" (click)=\"setPassword(pass.value)\">Submit</button>\n      <span class=\"gd-password-error\">{{message}}</span>\n    </div>\n  </section>\n</gd-modal>\n",
            styles: [".gd-password-wrap{position:relative;margin-left:-18px;margin-top:118px}.gd-password-wrap>input{padding-left:12px;margin-left:35px;width:454px;height:32px;color:#585858}.gd-password-submit{position:absolute;top:0;color:#fff;background-color:#3e4d59;padding:7px 16px 6px;font-size:12px;cursor:pointer}.gd-password-error{position:absolute;top:38px;left:35px;color:red}@media (max-width:1025px){.gd-password-wrap>input{width:50%}}"]
        }),
        __metadata("design:paramtypes", [ExceptionMessageService, PasswordService])
    ], PasswordRequiredComponent);
    return PasswordRequiredComponent;
}());

var ErrorInterceptorService = /** @class */ (function () {
    function ErrorInterceptorService(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    ErrorInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(map(function (data) {
            return data;
        }), catchError(function (exception) {
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
                        _this._messageService.changeMessage(exception.error.message);
                        _this._modalService.open(CommonModals.ErrorMessage);
                        break;
                    case HttpError.Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        _this._messageService.changeMessage(exception.error.message);
                        _this._modalService.open(CommonModals.PasswordRequired);
                        break;
                }
            }
            return throwError(exception);
        }));
    };
    ErrorInterceptorService.ngInjectableDef = defineInjectable({ factory: function ErrorInterceptorService_Factory() { return new ErrorInterceptorService(inject(ModalService), inject(ExceptionMessageService)); }, token: ErrorInterceptorService, providedIn: "root" });
    ErrorInterceptorService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ModalService, ExceptionMessageService])
    ], ErrorInterceptorService);
    return ErrorInterceptorService;
}());

var SearchService = /** @class */ (function () {
    function SearchService() {
        this._observer = new Subject();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new Subject();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new Subject();
        this._totalChange = this._observerTotal.asObservable();
    }
    Object.defineProperty(SearchService.prototype, "textChange", {
        get: function () {
            return this._textChange;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.setText = function (text) {
        this._observer.next(text);
    };
    Object.defineProperty(SearchService.prototype, "currentChange", {
        get: function () {
            return this._currentChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "totalChange", {
        get: function () {
            return this._totalChange;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.setCurrent = function (current) {
        this._observerCurrent.next(current);
    };
    SearchService.prototype.setTotal = function (total) {
        this._observerTotal.next(total);
    };
    return SearchService;
}());

var SearchComponent = /** @class */ (function () {
    function SearchComponent(_searchService) {
        var _this = this;
        this._searchService = _searchService;
        this.hidePanel = new EventEmitter(false);
        this.current = 0;
        this.total = 0;
        _searchService.totalChange.subscribe(function (total) {
            _this.total = total;
            if (total !== 0) {
                _this.current = 1;
            }
            else {
                _this.current = 0;
            }
            _this._searchService.setCurrent(_this.current);
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.setText = function (text) {
        this._searchService.setText(text);
    };
    SearchComponent.prototype.hide = function () {
        this.setText('');
        this.hidePanel.emit(true);
    };
    SearchComponent.prototype.prev = function () {
        if (this.current > 1) {
            this.current--;
            this._searchService.setCurrent(this.current);
        }
    };
    SearchComponent.prototype.next = function () {
        if (this.current < this.total) {
            this.current++;
            this._searchService.setCurrent(this.current);
        }
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        this.textElement.nativeElement.focus();
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
    return SearchComponent;
}());

var $$4 = jquery;
var SearchableDirective = /** @class */ (function () {
    function SearchableDirective(_elementRef, _searchService, _highlight, _zoomService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._searchService = _searchService;
        this._highlight = _highlight;
        this._zoomService = _zoomService;
        this.current = 0;
        this.total = 0;
        this.zoom = 100;
        _searchService.currentChange.subscribe(function (current) {
            _this.current = current;
            if (_this.current !== 0) {
                _this.moveToCurrent();
            }
        });
        _searchService.textChange.subscribe(function (text) {
            _this.text = text;
            _this.highlightSearch();
        });
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val ? val : _this.zoom;
        });
    }
    SearchableDirective.prototype.highlightSearch = function () {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            this.cleanHighlight(el);
            if (this.text) {
                this.highlightEl(el);
                var count = el.querySelectorAll('.gd-highlight').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
        }
    };
    SearchableDirective.prototype.moveToCurrent = function () {
        if (this.current === 0) {
            return;
        }
        var currentZoom = this.getZoom();
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            el.querySelectorAll('.gd-highlight-select').forEach(function (value) {
                $$4(value).removeClass('gd-highlight-select');
            });
            var currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $$4(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                var options = {
                    left: 0,
                    top: ($$4(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                el.parentElement.scrollTo(options);
            }
        }
    };
    SearchableDirective.prototype.highlightEl = function (el) {
        var textNodes = $$4(el).find('*').contents().filter(function () {
            var nodeName = this.parentElement.nodeName.toLowerCase();
            var checkClass = this.classList ? !this.classList.contains('gd-highlight') : true;
            return this.nodeType === 3 &&
                this.textContent.trim().length !== 0 &&
                nodeName !== 'style' &&
                nodeName !== 'title' &&
                nodeName !== 'body' &&
                nodeName !== 'script' &&
                checkClass;
        });
        var text = this.text;
        var highlight = this._highlight;
        textNodes.each(function () {
            var $this = $$4(this);
            var content = $this.text();
            content = highlight.transform(content, text);
            $this.replaceWith(content);
        });
        el.normalize();
    };
    SearchableDirective.prototype.cleanHighlight = function (el) {
        var nodeListOf = el.querySelectorAll('.gd-highlight');
        for (var i = 0; i < nodeListOf.length; i++) {
            var element = nodeListOf.item(i);
            element.replaceWith(element.innerText);
        }
        el.normalize();
    };
    SearchableDirective.prototype.getZoom = function () {
        return this.zoom / 100;
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
    return SearchableDirective;
}());

var providers = [ConfigService,
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
    ViewportService];
var CommonComponentsModule = /** @class */ (function () {
    function CommonComponentsModule() {
    }
    CommonComponentsModule_1 = CommonComponentsModule;
    CommonComponentsModule.forRoot = function () {
        return {
            ngModule: CommonComponentsModule_1,
            providers: providers
        };
    };
    var CommonComponentsModule_1;
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
            ],
            providers: providers
        })
    ], CommonComponentsModule);
    return CommonComponentsModule;
}());

export { Api, BrowseFilesModalComponent, ButtonComponent, ChoiceButtonComponent, CommonComponentsModule, CommonModals, ConfigService, DisabledCursorDirective, DndDirective, DocumentComponent, ErrorInterceptorService, ErrorModalComponent, ExceptionMessageService, FileCredentials, FileDescription, FileModel, FileService, FileUtil, HighlightSearchPipe, HttpError, InitStateComponent, LogoComponent, ModalComponent, ModalService, NavigateService, PageComponent, PageModel, PagePreloadService, PasswordRequiredComponent, PasswordService, RenderPrintDirective, RenderPrintService, RotatedPage, RotationDirective, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, ScrollableDirective, SearchComponent, SearchService, SearchableDirective, SelectComponent, TooltipComponent, TopToolbarComponent, UploadFileZoneComponent, UploadFilesService, ViewportService, WindowService, ZoomDirective, ZoomService };
//# sourceMappingURL=groupdocs.examples.angular-common-components.js.map
