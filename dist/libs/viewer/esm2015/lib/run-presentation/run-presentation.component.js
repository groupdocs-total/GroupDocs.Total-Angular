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
const $ = jquery;
export class RunPresentationComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _navigateService
     */
    constructor(_elementRef, _zoomService, _windowService, _navigateService) {
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
        (val) => {
            this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
        this._navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.scrollTo(value, value > this.lastCurrentPage);
            this.lastCurrentPage = value;
        }))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.lastCurrentPage = this._navigateService.currentPage;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // For current iteration we take .panzoom as a document
        this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
        // For current iteration we take .gd-document as a container
        this.container = this._elementRef.nativeElement;
        if (this.currentPage !== 1) {
            this.scrollTo(this.currentPage, true);
        }
        /** @type {?} */
        const hammer = new Hammer(this.container);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        const element = elementNodeListOf.item(0);
        if (element) {
            $(element).trigger('focus');
        }
    }
    /**
     * @param {?} pageNumber
     * @param {?} onRight
     * @return {?}
     */
    scrollTo(pageNumber, onRight) {
        /** @type {?} */
        const pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
        /** @type {?} */
        const startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
        this.doScrolling(pagesWidth, startingX, 500, new Subject(), this._elementRef);
        this.selectedPage.emit(pageNumber);
    }
    /**
     * @private
     * @param {?} elementX
     * @param {?} startingX
     * @param {?} duration
     * @param {?} subject
     * @param {?} _elementRef
     * @return {?}
     */
    doScrolling(elementX, startingX, duration, subject, _elementRef) {
        /** @type {?} */
        const diff = elementX - startingX;
        /** @type {?} */
        let start;
        window.requestAnimationFrame((/**
         * @param {?} timestamp
         * @return {?}
         */
        function step(timestamp) {
            start = (!start) ? timestamp : start;
            /** @type {?} */
            const time = timestamp - start;
            /** @type {?} */
            const percent = Math.min(time / duration, 1);
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
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    getDimensionWithUnit(value, pageNumber) {
        return value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    }
    /**
     * @param {?} page
     * @return {?}
     */
    isVertical(page) {
        return page.height > page.width;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanLeft($event) {
        if ($event.isFinal) {
            this._navigateService.nextPage();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanRight($event) {
        if ($event.isFinal) {
            this._navigateService.prevPage();
        }
    }
}
RunPresentationComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-run-presentation',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (panleft)=\"onPanLeft($event)\" (panright)=\"onPanRight($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"isVertical(page) ? 'page presentation vertical' : 'page presentation'\" *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow-y:hidden;touch-action:auto!important;overflow-x:hidden}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;margin:20px;-webkit-transition:.3s;transition:.3s}.page ::ng-deep gd-page{box-shadow:0 3px 6px rgba(0,0,0,.16);background-color:#fff}.page.presentation{-webkit-transition:unset;transition:unset;margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical{margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical ::ng-deep [class*=\"-rotate\"]{position:unset!important;margin-right:-240px}.page.presentation.vertical ::ng-deep gd-page{height:960pt;width:540pt}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}.page ::ng-deep .gd-wrapper{pointer-events:none}}"]
            }] }
];
/** @nocollapse */
RunPresentationComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
RunPresentationComponent.propDecorators = {
    mode: [{ type: Input }],
    preloadPageCount: [{ type: Input }],
    file: [{ type: Input }],
    currentPage: [{ type: Input }],
    selectedPage: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFZLE1BQU0sK0NBQStDLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7TUFFekIsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQWVuQyxZQUFzQixXQUFvQyxFQUN0QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIL0IsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFaM0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3BELFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFFBQUcsR0FBRyxJ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aEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix3NkJBQWdEOzthQUVqRDs7OztZQXRCQyxVQUFVO1lBU0osV0FBVztZQUVYLGFBQWE7WUFFWixlQUFlOzs7bUJBWXJCLEtBQUs7K0JBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsTUFBTTs7OztJQUpQLHdDQUF1Qjs7SUFDdkIsb0RBQWtDOztJQUNsQyx3Q0FBK0I7O0lBQy9CLCtDQUE2Qjs7SUFDN0IsZ0RBQW9EOztJQUNwRCx3Q0FBYTs7SUFDYix3Q0FBYTs7SUFFYiw2Q0FBaUI7O0lBQ2pCLHVDQUFXOztJQUNYLDZDQUFtQjs7SUFDbkIsbURBQXdCOzs7OztJQUVaLCtDQUE4Qzs7Ozs7SUFDOUMsZ0RBQWlDOzs7OztJQUNqQyxrREFBcUM7Ozs7O0lBQ3JDLG9EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbCwgUGFnZU1vZGVsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcnVuLXByZXNlbnRhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ydW4tcHJlc2VudGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJ1blByZXNlbnRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBwcmVsb2FkUGFnZUNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcbiAgQElucHV0KCkgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICB3YWl0ID0gZmFsc2U7XG4gIHpvb206IG51bWJlcjtcblxuICBjb250YWluZXIgPSBudWxsO1xuICBkb2MgPSBudWxsO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGxhc3RDdXJyZW50UGFnZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsKSB7XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcblxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoKChcbiAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvKHZhbHVlLCB2YWx1ZSA+IHRoaXMubGFzdEN1cnJlbnRQYWdlKTtcbiAgICAgICAgICB0aGlzLmxhc3RDdXJyZW50UGFnZSA9IHZhbHVlO1xuICAgICAgfSkpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGFzdEN1cnJlbnRQYWdlID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAuZ2QtZG9jdW1lbnQgYXMgYSBjb250YWluZXJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gMSlcbiAgICB7XG4gICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuY3VycmVudFBhZ2UsIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnROb2RlTGlzdE9mLml0ZW0oMCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUbyhwYWdlTnVtYmVyOiBudW1iZXIsIG9uUmlnaHQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwYWdlc1dpZHRoID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICogKHBhZ2VOdW1iZXIgLSAxKTtcbiAgICBjb25zdCBzdGFydGluZ1ggPSBvblJpZ2h0ID8gcGFnZXNXaWR0aCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA6IHBhZ2VzV2lkdGggKyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5kb1Njcm9sbGluZyhwYWdlc1dpZHRoLCBzdGFydGluZ1gsIDUwMCwgbmV3IFN1YmplY3Q8YW55PigpLCB0aGlzLl9lbGVtZW50UmVmKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRQYWdlLmVtaXQocGFnZU51bWJlcik7XG4gIH1cblxuICBwcml2YXRlIGRvU2Nyb2xsaW5nKGVsZW1lbnRYOiBudW1iZXIsIHN0YXJ0aW5nWDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBzdWJqZWN0OiBTdWJqZWN0PGFueT4sIF9lbGVtZW50UmVmKSB7XG4gICAgY29uc3QgZGlmZiA9IGVsZW1lbnRYIC0gc3RhcnRpbmdYO1xuICAgIGxldCBzdGFydCA6IG51bWJlcjtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICAgIHN0YXJ0ID0gKCFzdGFydCkgPyB0aW1lc3RhbXAgOiBzdGFydDtcblxuICAgICAgY29uc3QgdGltZSA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xuICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgubWluKHRpbWUgLyBkdXJhdGlvbiwgMSk7XG5cbiAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiBzdGFydGluZ1ggKyBkaWZmICogcGVyY2VudCB9KTtcblxuICAgICAgaWYgKHRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICBzdWJqZWN0Lm5leHQoe30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlciwgcGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgKHRoaXMubW9kZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0IDogJ3B4Jyk7XG4gIH1cblxuICBpc1ZlcnRpY2FsKHBhZ2U6IFBhZ2VNb2RlbCkge1xuICAgIHJldHVybiBwYWdlLmhlaWdodCA+IHBhZ2Uud2lkdGg7XG4gIH1cblxuICBvblBhbkxlZnQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBvblBhblJpZ2h0KCRldmVudCkge1xuICAgIGlmICgkZXZlbnQuaXNGaW5hbCkge1xuICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnByZXZQYWdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=