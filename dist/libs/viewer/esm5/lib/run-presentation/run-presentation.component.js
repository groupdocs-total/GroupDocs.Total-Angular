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
        this._navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.scrollTo(value, value > _this.lastCurrentPage);
            _this.lastCurrentPage = value;
        }))));
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
        if (this.currentPage !== 1) {
            this.scrollTo(this.currentPage, true);
        }
        /** @type {?} */
        var hammer = new Hammer(this.container);
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
     * @return {?}
     */
    RunPresentationComponent.prototype.scrollTo = /**
     * @param {?} pageNumber
     * @param {?} onRight
     * @return {?}
     */
    function (pageNumber, onRight) {
        /** @type {?} */
        var pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
        /** @type {?} */
        var startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
        this.doScrolling(pagesWidth, startingX, 500, new Subject(), this._elementRef);
        this.selectedPage.emit(pageNumber);
    };
    /**
     * @private
     * @param {?} elementX
     * @param {?} startingX
     * @param {?} duration
     * @param {?} subject
     * @param {?} _elementRef
     * @return {?}
     */
    RunPresentationComponent.prototype.doScrolling = /**
     * @private
     * @param {?} elementX
     * @param {?} startingX
     * @param {?} duration
     * @param {?} subject
     * @param {?} _elementRef
     * @return {?}
     */
    function (elementX, startingX, duration, subject, _elementRef) {
        /** @type {?} */
        var diff = elementX - startingX;
        /** @type {?} */
        var start;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFZLE1BQU0sK0NBQStDLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFFekIsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFvQkUsa0NBQXNCLFdBQW9DLEVBQ3RDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUhyRCxpQkFlQztRQWZxQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVozQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsUUFBRyxHQUFHLElBQUksQ0FBQztR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QU8sRUFBRTtZQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOztnQkFoSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHc2QkFBZ0Q7O2lCQUVqRDs7OztnQkF0QkMsVUFBVTtnQkFTSixXQUFXO2dCQUVYLGFBQWE7Z0JBRVosZUFBZTs7O3VCQVlyQixLQUFLO21DQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLE1BQU07O0lBc0dULCtCQUFDO0NBQUEsQUFqSEQsSUFpSEM7U0E1R1ksd0JBQXdCOzs7SUFFbkMsd0NBQXVCOztJQUN2QixvREFBa0M7O0lBQ2xDLHdDQUErQjs7SUFDL0IsK0NBQTZCOztJQUM3QixnREFBb0Q7O0lBQ3BELHdDQUFhOztJQUNiLHdDQUFhOztJQUViLDZDQUFpQjs7SUFDakIsdUNBQVc7O0lBQ1gsNkNBQW1COztJQUNuQixtREFBd0I7Ozs7O0lBRVosK0NBQThDOzs7OztJQUM5QyxnREFBaUM7Ozs7O0lBQ2pDLGtEQUFxQzs7Ozs7SUFDckMsb0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsLCBQYWdlTW9kZWx9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1ydW4tcHJlc2VudGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3J1bi1wcmVzZW50YXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ydW4tcHJlc2VudGF0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUnVuUHJlc2VudGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xuICBASW5wdXQoKSBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIHdhaXQgPSBmYWxzZTtcbiAgem9vbTogbnVtYmVyO1xuXG4gIGNvbnRhaW5lciA9IG51bGw7XG4gIGRvYyA9IG51bGw7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgbGFzdEN1cnJlbnRQYWdlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwpIHtcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnpvb20gPSB2YWw7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgoKFxuICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odmFsdWUsIHZhbHVlID4gdGhpcy5sYXN0Q3VycmVudFBhZ2UpO1xuICAgICAgICAgIHRoaXMubGFzdEN1cnJlbnRQYWdlID0gdmFsdWU7XG4gICAgICB9KSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXN0Q3VycmVudFBhZ2UgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAucGFuem9vbSBhcyBhIGRvY3VtZW50XG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5nZC1kb2N1bWVudCBhcyBhIGNvbnRhaW5lclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSAxKVxuICAgIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5jdXJyZW50UGFnZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudE5vZGVMaXN0T2YgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdkLXdyYXBwZXInKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE5vZGVMaXN0T2YuaXRlbSgwKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvKHBhZ2VOdW1iZXI6IG51bWJlciwgb25SaWdodDogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhZ2VzV2lkdGggPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiAocGFnZU51bWJlciAtIDEpO1xuICAgIGNvbnN0IHN0YXJ0aW5nWCA9IG9uUmlnaHQgPyBwYWdlc1dpZHRoIC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDogcGFnZXNXaWR0aCArIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmRvU2Nyb2xsaW5nKHBhZ2VzV2lkdGgsIHN0YXJ0aW5nWCwgNTAwLCBuZXcgU3ViamVjdDxhbnk+KCksIHRoaXMuX2VsZW1lbnRSZWYpO1xuXG4gICAgdGhpcy5zZWxlY3RlZFBhZ2UuZW1pdChwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9TY3JvbGxpbmcoZWxlbWVudFg6IG51bWJlciwgc3RhcnRpbmdYOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIHN1YmplY3Q6IFN1YmplY3Q8YW55PiwgX2VsZW1lbnRSZWYpIHtcbiAgICBjb25zdCBkaWZmID0gZWxlbWVudFggLSBzdGFydGluZ1g7XG4gICAgbGV0IHN0YXJ0IDogbnVtYmVyO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBzdGVwKHRpbWVzdGFtcCkge1xuICAgICAgc3RhcnQgPSAoIXN0YXJ0KSA/IHRpbWVzdGFtcCA6IHN0YXJ0O1xuXG4gICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnQ7XG4gICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5taW4odGltZSAvIGR1cmF0aW9uLCAxKTtcblxuICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6IHN0YXJ0aW5nWCArIGRpZmYgKiBwZXJjZW50IH0pO1xuXG4gICAgICBpZiAodGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIHN1YmplY3QubmV4dCh7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXREaW1lbnNpb25XaXRoVW5pdCh2YWx1ZTogbnVtYmVyLCBwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmFsdWUgKyAodGhpcy5tb2RlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQgOiAncHgnKTtcbiAgfVxuXG4gIGlzVmVydGljYWwocGFnZTogUGFnZU1vZGVsKSB7XG4gICAgcmV0dXJuIHBhZ2UuaGVpZ2h0ID4gcGFnZS53aWR0aDtcbiAgfVxuXG4gIG9uUGFuTGVmdCgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LmlzRmluYWwpIHtcbiAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uZXh0UGFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFuUmlnaHQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UucHJldlBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==