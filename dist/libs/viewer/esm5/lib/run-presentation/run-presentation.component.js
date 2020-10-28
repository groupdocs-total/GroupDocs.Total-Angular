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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFZLE1BQU0sK0NBQStDLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRTFDLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBb0JFLGtDQUFzQixXQUFvQyxFQUN0QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIckQsaUJBd0JDO1FBeEJxQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVozQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsUUFBRyxHQUFHLElBQUksQ0FBQztRQVFULFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsR0FBVztZQUM1QyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUVoQixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ2YsSUFBSSxLQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsRUFDMUI7b0JBQ0ksS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEQ7Z0JBRUQsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7OztRQUN2QyxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7SUFDQSxDQUFDOzs7O0lBRUQsa0RBQWU7OztJQUFmO1FBQ0UsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDOztZQUMxQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsNENBQVM7OztJQUFUOztZQUNRLG9CQUFvQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQzs7WUFDdkYsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFDLEdBQUc7UUFDdkMsb0JBQW9CLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxtQkFBQSxPQUFPLEVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksR0FBRyxJQUFJLEVBQW5JLENBQW1JLEVBQUMsQ0FBQztJQUMvSyxDQUFDOzs7O0lBRUQscURBQWtCOzs7SUFBbEI7O1lBQ1EsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDOztZQUNsRixPQUFPLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sRUFBRTtZQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7Ozs7O0lBRUQsMkNBQVE7Ozs7OztJQUFSLFVBQVMsVUFBa0IsRUFBRSxPQUFnQixFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7O1lBQzlELFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDOztZQUMxRSxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVztRQUM3SSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksT0FBTyxFQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU1RixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7Ozs7OztJQUVPLDhDQUFXOzs7Ozs7Ozs7O0lBQW5CLFVBQW9CLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxRQUFnQixFQUFFLE9BQXFCLEVBQUUsV0FBVyxFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7O1lBQzlILElBQUksR0FBRyxRQUFRLEdBQUcsU0FBUzs7WUFDN0IsS0FBYztRQUVsQixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxHQUFHLElBQUksRUFBQyxDQUFDLENBQUM7U0FDL0Q7YUFDSTtZQUNILE1BQU0sQ0FBQyxxQkFBcUI7Ozs7WUFBQyxTQUFTLElBQUksQ0FBQyxTQUFTO2dCQUNsRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7b0JBRS9CLElBQUksR0FBRyxTQUFTLEdBQUcsS0FBSzs7b0JBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUU1QyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBRXpFLElBQUksSUFBSSxHQUFHLFFBQVEsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3BCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVELHVEQUFvQjs7Ozs7SUFBcEIsVUFBcUIsS0FBYSxFQUFFLFVBQWtCO1FBQ3BELE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBRUQsNkNBQVU7Ozs7SUFBVixVQUFXLElBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsTUFBTTtRQUNkLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7OztJQUVELDZDQUFVOzs7O0lBQVYsVUFBVyxNQUFNO1FBQ2YsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7O2dCQS9IRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsdzZCQUFnRDs7aUJBRWpEOzs7O2dCQXZCQyxVQUFVO2dCQVNKLFdBQVc7Z0JBRVgsYUFBYTtnQkFFWixlQUFlOzs7dUJBYXJCLEtBQUs7bUNBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsTUFBTTs7SUFxSFQsK0JBQUM7Q0FBQSxBQWhJRCxJQWdJQztTQTNIWSx3QkFBd0I7OztJQUVuQyx3Q0FBdUI7O0lBQ3ZCLG9EQUFrQzs7SUFDbEMsd0NBQStCOztJQUMvQiwrQ0FBNkI7O0lBQzdCLGdEQUFvRDs7SUFDcEQsd0NBQWE7O0lBQ2Isd0NBQWE7O0lBRWIsNkNBQWlCOztJQUNqQix1Q0FBVzs7SUFDWCw2Q0FBbUI7O0lBQ25CLG1EQUF3Qjs7Ozs7SUFFWiwrQ0FBOEM7Ozs7O0lBQzlDLGdEQUFpQzs7Ozs7SUFDakMsa0RBQXFDOzs7OztJQUNyQyxvREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVEZXNjcmlwdGlvbiwgRmlsZVV0aWwsIFBhZ2VNb2RlbH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi92aWV3ZXIuY29uc3RhbnRzJztcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcnVuLXByZXNlbnRhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ydW4tcHJlc2VudGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJ1blByZXNlbnRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBwcmVsb2FkUGFnZUNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcbiAgQElucHV0KCkgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICB3YWl0ID0gZmFsc2U7XG4gIHpvb206IG51bWJlcjtcblxuICBjb250YWluZXIgPSBudWxsO1xuICBkb2MgPSBudWxsO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGxhc3RDdXJyZW50UGFnZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsKSB7XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsO1xuXG4gICAgICBpZiAodmFsICE9PSAxMDApIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5jdXJyZW50UGFnZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbGlnblZlcnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG5cbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKChcbiAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvKHZhbHVlLCB2YWx1ZSA+IHRoaXMubGFzdEN1cnJlbnRQYWdlKTtcbiAgICAgICAgICB0aGlzLmxhc3RDdXJyZW50UGFnZSA9IHZhbHVlO1xuICAgICAgfSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXN0Q3VycmVudFBhZ2UgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAucGFuem9vbSBhcyBhIGRvY3VtZW50XG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5nZC1kb2N1bWVudCBhcyBhIGNvbnRhaW5lclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgYWxpZ25WZXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXNlbnRhdGlvbkVsZW1lbnRzID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVzZW50YXRpb24nKTtcbiAgICBjb25zdCB6b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbS8xMDA7XG4gICAgcHJlc2VudGF0aW9uRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5tYXJnaW5Ub3AgPSAoKHdpbmRvdy5pbm5lckhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0Knpvb20gLSBDb25zdGFudHMudG9wYmFyV2lkdGgpLzIpL3pvb20gKyBcInB4XCIpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnROb2RlTGlzdE9mLml0ZW0oMCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUbyhwYWdlTnVtYmVyOiBudW1iZXIsIG9uUmlnaHQ6IGJvb2xlYW4sIGFuaW1hdGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgcGFnZXNXaWR0aCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIChwYWdlTnVtYmVyIC0gMSk7XG4gICAgY29uc3Qgc3RhcnRpbmdYID0gb25SaWdodCA/IHBhZ2VzV2lkdGggLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggOiBwYWdlc1dpZHRoICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuZG9TY3JvbGxpbmcocGFnZXNXaWR0aCwgc3RhcnRpbmdYLCA1MDAsIG5ldyBTdWJqZWN0PGFueT4oKSwgdGhpcy5fZWxlbWVudFJlZiwgYW5pbWF0ZSk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUGFnZS5lbWl0KHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBkb1Njcm9sbGluZyhlbGVtZW50WDogbnVtYmVyLCBzdGFydGluZ1g6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgc3ViamVjdDogU3ViamVjdDxhbnk+LCBfZWxlbWVudFJlZiwgYW5pbWF0ZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBjb25zdCBkaWZmID0gZWxlbWVudFggLSBzdGFydGluZ1g7XG4gICAgbGV0IHN0YXJ0IDogbnVtYmVyO1xuXG4gICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogc3RhcnRpbmdYICsgZGlmZn0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICAgICAgc3RhcnQgPSAoIXN0YXJ0KSA/IHRpbWVzdGFtcCA6IHN0YXJ0O1xuXG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aW1lc3RhbXAgLSBzdGFydDtcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgubWluKHRpbWUgLyBkdXJhdGlvbiwgMSk7XG5cbiAgICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6IHN0YXJ0aW5nWCArIGRpZmYgKiBwZXJjZW50IH0pO1xuXG4gICAgICAgIGlmICh0aW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICAgIHN1YmplY3QubmV4dCh7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXREaW1lbnNpb25XaXRoVW5pdCh2YWx1ZTogbnVtYmVyLCBwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmFsdWUgKyAodGhpcy5tb2RlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQgOiAncHgnKTtcbiAgfVxuXG4gIGlzVmVydGljYWwocGFnZTogUGFnZU1vZGVsKSB7XG4gICAgcmV0dXJuIHBhZ2UuaGVpZ2h0ID4gcGFnZS53aWR0aDtcbiAgfVxuXG4gIG9uUGFuTGVmdCgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LmlzRmluYWwpIHtcbiAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uZXh0UGFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFuUmlnaHQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UucHJldlBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==