/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FileDescription, FileUtil } from "@groupdocs.examples.angular/common-components";
import { ZoomService } from "@groupdocs.examples.angular/common-components";
import * as Hammer from 'hammerjs';
import { WindowService } from "@groupdocs.examples.angular/common-components";
import * as jquery from 'jquery';
import { NavigateService } from "@groupdocs.examples.angular/common-components";
import { Subject } from 'rxjs';
import { Constants } from '../viewer.constants';
/** @type {?} */
var $ = jquery;
var RunPresentationComponent = /** @class */ (function () {
    function RunPresentationComponent(_elementRef, _zoomService, _windowService, _navigateService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._navigateService = _navigateService;
        this.selectedPage = new EventEmitter();
        this.wait = false;
        this.container = null;
        this.doc = null;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val;
            if (val !== 100) {
                if (_this.currentPage !== 1) {
                    _this.scrollTo(_this.currentPage, true, false);
                }
                _this.alignVert();
            }
        }));
        this.isDesktop = _windowService.isDesktop();
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.scrollTo(value, value > _this.lastCurrentPage);
            _this.lastCurrentPage = value;
        })));
    }
    /**
     * @return {?}
     */
    RunPresentationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.lastCurrentPage = this._navigateService.currentPage;
    };
    /**
     * @return {?}
     */
    RunPresentationComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    RunPresentationComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // For current iteration we take .panzoom as a document
        this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
        // For current iteration we take .gd-document as a container
        this.container = this._elementRef.nativeElement;
        /** @type {?} */
        var hammer = new Hammer(this.container);
    };
    /**
     * @return {?}
     */
    RunPresentationComponent.prototype.alignVert = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var presentationElements = this._elementRef.nativeElement.querySelectorAll('.presentation');
        /** @type {?} */
        var zoom = this._zoomService.zoom / 100;
        presentationElements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return ((/** @type {?} */ (element))).style.marginTop =
            ((window.innerHeight - (element.clientHeight ? element.clientHeight : element.scrollHeight) * zoom - Constants.topbarWidth) / 2) / zoom + "px"; }));
    };
    /**
     * @return {?}
     */
    RunPresentationComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        var element = elementNodeListOf.item(0);
        if (element) {
            $(element).trigger('focus');
        }
    };
    /**
     * @param {?} pageNumber
     * @param {?} onRight
     * @param {?=} animate
     * @return {?}
     */
    RunPresentationComponent.prototype.scrollTo = /**
     * @param {?} pageNumber
     * @param {?} onRight
     * @param {?=} animate
     * @return {?}
     */
    function (pageNumber, onRight, animate) {
        if (animate === void 0) { animate = true; }
        /** @type {?} */
        var pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
        /** @type {?} */
        var startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
        this.doScrolling(pagesWidth, startingX, 500, new Subject(), this._elementRef, animate);
        this.selectedPage.emit(pageNumber);
    };
    /**
     * @private
     * @param {?} elementX
     * @param {?} startingX
     * @param {?} duration
     * @param {?} subject
     * @param {?} _elementRef
     * @param {?=} animate
     * @return {?}
     */
    RunPresentationComponent.prototype.doScrolling = /**
     * @private
     * @param {?} elementX
     * @param {?} startingX
     * @param {?} duration
     * @param {?} subject
     * @param {?} _elementRef
     * @param {?=} animate
     * @return {?}
     */
    function (elementX, startingX, duration, subject, _elementRef, animate) {
        if (animate === void 0) { animate = true; }
        /** @type {?} */
        var diff = elementX - startingX;
        /** @type {?} */
        var start;
        if (!animate) {
            _elementRef.nativeElement.scrollTo({ left: startingX + diff });
        }
        else {
            window.requestAnimationFrame((/**
             * @param {?} timestamp
             * @return {?}
             */
            function step(timestamp) {
                start = (!start) ? timestamp : start;
                /** @type {?} */
                var time = timestamp - start;
                /** @type {?} */
                var percent = Math.min(time / duration, 1);
                _elementRef.nativeElement.scrollTo({ left: startingX + diff * percent });
                if (time < duration) {
                    window.requestAnimationFrame(step);
                    subject.next({});
                }
                else {
                    subject.complete();
                }
            }));
        }
    };
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    RunPresentationComponent.prototype.getDimensionWithUnit = /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    function (value, pageNumber) {
        return value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    };
    /**
     * @param {?} page
     * @return {?}
     */
    RunPresentationComponent.prototype.isVertical = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return page.height > page.width;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    RunPresentationComponent.prototype.onPanLeft = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.isFinal) {
            this._navigateService.nextPage();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    RunPresentationComponent.prototype.onPanRight = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.isFinal) {
            this._navigateService.prevPage();
        }
    };
    RunPresentationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-run-presentation',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (panleft)=\"onPanLeft($event)\" (panright)=\"onPanRight($event)\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"isVertical(page) ? 'page presentation vertical' : 'page presentation'\" *ngFor=\"let page of file?.pages\"\r\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\r\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\r\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow-y:hidden;touch-action:auto!important;overflow-x:hidden}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;margin:20px;-webkit-transition:.3s;transition:.3s}.page ::ng-deep gd-page{box-shadow:0 3px 6px rgba(0,0,0,.16);background-color:#fff}.page.presentation{-webkit-transition:unset;transition:unset;margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical{margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical ::ng-deep [class*=\"-rotate\"]{position:unset!important;margin-right:-240px}.page.presentation.vertical ::ng-deep gd-page{height:960pt;width:540pt}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;align-content:flex-start}@media (max-width:1037px){:host{overflow-y:unset}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}.page ::ng-deep .gd-wrapper{pointer-events:none}}"]
                }] }
    ];
    /** @nocollapse */
    RunPresentationComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService },
        { type: NavigateService }
    ]; };
    RunPresentationComponent.propDecorators = {
        mode: [{ type: Input }],
        preloadPageCount: [{ type: Input }],
        file: [{ type: Input }],
        currentPage: [{ type: Input }],
        selectedPage: [{ type: Output }]
    };
    return RunPresentationComponent;
}());
export { RunPresentationComponent };
if (false) {
    /** @type {?} */
    RunPresentationComponent.prototype.mode;
    /** @type {?} */
    RunPresentationComponent.prototype.preloadPageCount;
    /** @type {?} */
    RunPresentationComponent.prototype.file;
    /** @type {?} */
    RunPresentationComponent.prototype.currentPage;
    /** @type {?} */
    RunPresentationComponent.prototype.selectedPage;
    /** @type {?} */
    RunPresentationComponent.prototype.wait;
    /** @type {?} */
    RunPresentationComponent.prototype.zoom;
    /** @type {?} */
    RunPresentationComponent.prototype.container;
    /** @type {?} */
    RunPresentationComponent.prototype.doc;
    /** @type {?} */
    RunPresentationComponent.prototype.isDesktop;
    /** @type {?} */
    RunPresentationComponent.prototype.lastCurrentPage;
    /**
     * @type {?}
     * @protected
     */
    RunPresentationComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    RunPresentationComponent.prototype._navigateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFZLE1BQU0sK0NBQStDLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRTFDLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBb0JFLGtDQUFzQixXQUFvQyxFQUN0QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIckQsaUJBd0JDO1FBeEJxQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVozQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLGNB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QixnOEJBQWdEOztpQkFFakQ7Ozs7Z0JBdkJDLFVBQVU7Z0JBU0osV0FBVztnQkFFWCxhQUFhO2dCQUVaLGVBQWU7Ozt1QkFhckIsS0FBSzttQ0FDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxNQUFNOztJQXNIVCwrQkFBQztDQUFBLEFBaklELElBaUlDO1NBNUhZLHdCQUF3Qjs7O0lBRW5DLHdDQUF1Qjs7SUFDdkIsb0RBQWtDOztJQUNsQyx3Q0FBK0I7O0lBQy9CLCtDQUE2Qjs7SUFDN0IsZ0RBQW9EOztJQUNwRCx3Q0FBYTs7SUFDYix3Q0FBYTs7SUFFYiw2Q0FBaUI7O0lBQ2pCLHVDQUFXOztJQUNYLDZDQUFtQjs7SUFDbkIsbURBQXdCOzs7OztJQUVaLCtDQUE4Qzs7Ozs7SUFDOUMsZ0RBQWlDOzs7OztJQUNqQyxrREFBcUM7Ozs7O0lBQ3JDLG9EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZpbGVEZXNjcmlwdGlvbiwgRmlsZVV0aWwsIFBhZ2VNb2RlbH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3ZpZXdlci5jb25zdGFudHMnO1xyXG5cclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtcnVuLXByZXNlbnRhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3J1bi1wcmVzZW50YXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3J1bi1wcmVzZW50YXRpb24uY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUnVuUHJlc2VudGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XHJcbiAgQElucHV0KCkgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgd2FpdCA9IGZhbHNlO1xyXG4gIHpvb206IG51bWJlcjtcclxuXHJcbiAgY29udGFpbmVyID0gbnVsbDtcclxuICBkb2MgPSBudWxsO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuICBsYXN0Q3VycmVudFBhZ2U6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwpIHtcclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsO1xyXG5cclxuICAgICAgaWYgKHZhbCAhPT0gMTAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuY3VycmVudFBhZ2UsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWxpZ25WZXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgoXHJcbiAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odmFsdWUsIHZhbHVlID4gdGhpcy5sYXN0Q3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgdGhpcy5sYXN0Q3VycmVudFBhZ2UgPSB2YWx1ZTtcclxuICAgICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxhc3RDdXJyZW50UGFnZSA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxyXG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLmdkLWRvY3VtZW50IGFzIGEgY29udGFpbmVyXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgYWxpZ25WZXJ0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlc2VudGF0aW9uRWxlbWVudHMgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXNlbnRhdGlvbicpO1xyXG4gICAgY29uc3Qgem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20vMTAwO1xyXG4gICAgcHJlc2VudGF0aW9uRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5tYXJnaW5Ub3AgPSBcclxuICAgICAgKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSAoZWxlbWVudC5jbGllbnRIZWlnaHQgPyBlbGVtZW50LmNsaWVudEhlaWdodCA6IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSp6b29tIC0gQ29uc3RhbnRzLnRvcGJhcldpZHRoKS8yKS96b29tICsgXCJweFwiKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE5vZGVMaXN0T2YuaXRlbSgwKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbFRvKHBhZ2VOdW1iZXI6IG51bWJlciwgb25SaWdodDogYm9vbGVhbiwgYW5pbWF0ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHBhZ2VzV2lkdGggPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiAocGFnZU51bWJlciAtIDEpO1xyXG4gICAgY29uc3Qgc3RhcnRpbmdYID0gb25SaWdodCA/IHBhZ2VzV2lkdGggLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggOiBwYWdlc1dpZHRoICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5kb1Njcm9sbGluZyhwYWdlc1dpZHRoLCBzdGFydGluZ1gsIDUwMCwgbmV3IFN1YmplY3Q8YW55PigpLCB0aGlzLl9lbGVtZW50UmVmLCBhbmltYXRlKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkUGFnZS5lbWl0KHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb1Njcm9sbGluZyhlbGVtZW50WDogbnVtYmVyLCBzdGFydGluZ1g6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgc3ViamVjdDogU3ViamVjdDxhbnk+LCBfZWxlbWVudFJlZiwgYW5pbWF0ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IGRpZmYgPSBlbGVtZW50WCAtIHN0YXJ0aW5nWDtcclxuICAgIGxldCBzdGFydCA6IG51bWJlcjtcclxuXHJcbiAgICBpZiAoIWFuaW1hdGUpIHtcclxuICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6IHN0YXJ0aW5nWCArIGRpZmZ9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgc3RhcnQgPSAoIXN0YXJ0KSA/IHRpbWVzdGFtcCA6IHN0YXJ0O1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnQ7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgubWluKHRpbWUgLyBkdXJhdGlvbiwgMSk7XHJcblxyXG4gICAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiBzdGFydGluZ1ggKyBkaWZmICogcGVyY2VudCB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRpbWUgPCBkdXJhdGlvbikge1xyXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICAgIHN1YmplY3QubmV4dCh7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlciwgcGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgKyAodGhpcy5tb2RlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQgOiAncHgnKTtcclxuICB9XHJcblxyXG4gIGlzVmVydGljYWwocGFnZTogUGFnZU1vZGVsKSB7XHJcbiAgICByZXR1cm4gcGFnZS5oZWlnaHQgPiBwYWdlLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgb25QYW5MZWZ0KCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC5pc0ZpbmFsKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uZXh0UGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5SaWdodCgkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQuaXNGaW5hbCkge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UucHJldlBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19