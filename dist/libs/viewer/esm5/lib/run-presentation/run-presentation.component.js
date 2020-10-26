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
        this.offsetWidth = this._elementRef.nativeElement.offsetWidth;
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
        var _this = this;
        // For current iteration we take .panzoom as a document
        this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
        // For current iteration we take .gd-document as a container
        this.container = this._elementRef.nativeElement;
        /** @type {?} */
        var hammer = new Hammer(this.container);
        /** @type {?} */
        var timerId = setInterval((/**
         * @return {?}
         */
        function () {
            if (_this.currentPage !== 1) {
                if (_this._elementRef.nativeElement.offsetWidth === _this.offsetWidth) {
                    _this.scrollTo(_this.currentPage, true, false);
                    clearInterval(timerId);
                    _this.alignVert();
                }
            }
            _this.alignVert();
            clearInterval(timerId);
        }), 100);
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
        function (element) { return ((/** @type {?} */ (element))).style.marginTop = ((window.innerHeight - element.clientHeight * zoom - Constants.topbarWidth) / 2) / zoom + "px"; }));
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
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (panleft)=\"onPanLeft($event)\" (panright)=\"onPanRight($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"isVertical(page) ? 'page presentation vertical' : 'page presentation'\" *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow-y:hidden;touch-action:auto!important;overflow-x:hidden}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;margin:20px;-webkit-transition:.3s;transition:.3s}.page ::ng-deep gd-page{box-shadow:0 3px 6px rgba(0,0,0,.16);background-color:#fff}.page.presentation{-webkit-transition:unset;transition:unset;margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical{margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical ::ng-deep [class*=\"-rotate\"]{position:unset!important;margin-right:-240px}.page.presentation.vertical ::ng-deep gd-page{height:960pt;width:540pt}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}.page ::ng-deep .gd-wrapper{pointer-events:none}}"]
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
    /** @type {?} */
    RunPresentationComponent.prototype.offsetWidth;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFZLE1BQU0sK0NBQStDLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRTFDLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBcUJFLGtDQUFzQixXQUFvQyxFQUN0QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIckQsaUJBZUM7UUFmcUIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFiM0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3BELFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixjQUFT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LEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQsNkNBQVU7Ozs7SUFBVixVQUFXLE1BQU07UUFDZixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBdklGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix3NkJBQWdEOztpQkFFakQ7Ozs7Z0JBdkJDLFVBQVU7Z0JBU0osV0FBVztnQkFFWCxhQUFhO2dCQUVaLGVBQWU7Ozt1QkFhckIsS0FBSzttQ0FDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxNQUFNOztJQTZIVCwrQkFBQztDQUFBLEFBeElELElBd0lDO1NBbklZLHdCQUF3Qjs7O0lBRW5DLHdDQUF1Qjs7SUFDdkIsb0RBQWtDOztJQUNsQyx3Q0FBK0I7O0lBQy9CLCtDQUE2Qjs7SUFDN0IsZ0RBQW9EOztJQUNwRCx3Q0FBYTs7SUFDYix3Q0FBYTs7SUFFYiw2Q0FBaUI7O0lBQ2pCLHVDQUFXOztJQUNYLDZDQUFtQjs7SUFDbkIsbURBQXdCOztJQUN4QiwrQ0FBb0I7Ozs7O0lBRVIsK0NBQThDOzs7OztJQUM5QyxnREFBaUM7Ozs7O0lBQ2pDLGtEQUFxQzs7Ozs7SUFDckMsb0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsLCBQYWdlTW9kZWx9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vdmlld2VyLmNvbnN0YW50cyc7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXJ1bi1wcmVzZW50YXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3J1bi1wcmVzZW50YXRpb24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSdW5QcmVzZW50YXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJlbG9hZFBhZ2VDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgd2FpdCA9IGZhbHNlO1xuICB6b29tOiBudW1iZXI7XG5cbiAgY29udGFpbmVyID0gbnVsbDtcbiAgZG9jID0gbnVsbDtcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBsYXN0Q3VycmVudFBhZ2U6IG51bWJlcjtcbiAgb2Zmc2V0V2lkdGg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLCkge1xuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuem9vbSA9IHZhbDtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG5cbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKChcbiAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvKHZhbHVlLCB2YWx1ZSA+IHRoaXMubGFzdEN1cnJlbnRQYWdlKTtcbiAgICAgICAgICB0aGlzLmxhc3RDdXJyZW50UGFnZSA9IHZhbHVlO1xuICAgICAgfSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXN0Q3VycmVudFBhZ2UgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgdGhpcy5vZmZzZXRXaWR0aCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5wYW56b29tIGFzIGEgZG9jdW1lbnRcbiAgICB0aGlzLmRvYyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLmdkLWRvY3VtZW50IGFzIGEgY29udGFpbmVyXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4gXG4gICAge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IDEpXG4gICAgICB7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggPT09IHRoaXMub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuY3VycmVudFBhZ2UsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgICAgIHRoaXMuYWxpZ25WZXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hbGlnblZlcnQoKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGFsaWduVmVydCgpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVzZW50YXRpb25FbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlc2VudGF0aW9uJyk7XG4gICAgY29uc3Qgem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb20vMTAwO1xuICAgIHByZXNlbnRhdGlvbkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc3R5bGUubWFyZ2luVG9wID0gKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodCp6b29tIC0gQ29uc3RhbnRzLnRvcGJhcldpZHRoKS8yKS96b29tICsgXCJweFwiKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50Tm9kZUxpc3RPZiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2Qtd3JhcHBlcicpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50Tm9kZUxpc3RPZi5pdGVtKDApO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG8ocGFnZU51bWJlcjogbnVtYmVyLCBvblJpZ2h0OiBib29sZWFuLCBhbmltYXRlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnN0IHBhZ2VzV2lkdGggPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiAocGFnZU51bWJlciAtIDEpO1xuICAgIGNvbnN0IHN0YXJ0aW5nWCA9IG9uUmlnaHQgPyBwYWdlc1dpZHRoIC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDogcGFnZXNXaWR0aCArIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmRvU2Nyb2xsaW5nKHBhZ2VzV2lkdGgsIHN0YXJ0aW5nWCwgNTAwLCBuZXcgU3ViamVjdDxhbnk+KCksIHRoaXMuX2VsZW1lbnRSZWYsIGFuaW1hdGUpO1xuXG4gICAgdGhpcy5zZWxlY3RlZFBhZ2UuZW1pdChwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9TY3JvbGxpbmcoZWxlbWVudFg6IG51bWJlciwgc3RhcnRpbmdYOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIHN1YmplY3Q6IFN1YmplY3Q8YW55PiwgX2VsZW1lbnRSZWYsIGFuaW1hdGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgZGlmZiA9IGVsZW1lbnRYIC0gc3RhcnRpbmdYO1xuICAgIGxldCBzdGFydCA6IG51bWJlcjtcblxuICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6IHN0YXJ0aW5nWCArIGRpZmZ9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XG4gICAgICAgIHN0YXJ0ID0gKCFzdGFydCkgPyB0aW1lc3RhbXAgOiBzdGFydDtcblxuICAgICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLm1pbih0aW1lIC8gZHVyYXRpb24sIDEpO1xuXG4gICAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiBzdGFydGluZ1ggKyBkaWZmICogcGVyY2VudCB9KTtcblxuICAgICAgICBpZiAodGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgICBzdWJqZWN0Lm5leHQoe30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlciwgcGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgKHRoaXMubW9kZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0IDogJ3B4Jyk7XG4gIH1cblxuICBpc1ZlcnRpY2FsKHBhZ2U6IFBhZ2VNb2RlbCkge1xuICAgIHJldHVybiBwYWdlLmhlaWdodCA+IHBhZ2Uud2lkdGg7XG4gIH1cblxuICBvblBhbkxlZnQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBvblBhblJpZ2h0KCRldmVudCkge1xuICAgIGlmICgkZXZlbnQuaXNGaW5hbCkge1xuICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnByZXZQYWdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=