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
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.scrollTo(value, value > this.lastCurrentPage);
            this.lastCurrentPage = value;
        })));
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
        /** @type {?} */
        const hammer = new Hammer(this.container);
        /** @type {?} */
        const timerId = setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.currentPage !== 1) {
                this.scrollTo(this.currentPage, true, false);
                this.alignVert();
            }
            this.alignVert();
        }), 100);
    }
    /**
     * @return {?}
     */
    alignVert() {
        /** @type {?} */
        const presentationElements = this._elementRef.nativeElement.querySelectorAll('.presentation');
        /** @type {?} */
        const zoom = this._zoomService.zoom / 100;
        presentationElements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => ((/** @type {?} */ (element))).style.marginTop = ((window.innerHeight - element.clientHeight * zoom - Constants.topbarWidth) / 2) / zoom + "px"));
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
     * @param {?=} animate
     * @return {?}
     */
    scrollTo(pageNumber, onRight, animate = true) {
        /** @type {?} */
        const pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
        /** @type {?} */
        const startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
        this.doScrolling(pagesWidth, startingX, 500, new Subject(), this._elementRef, animate);
        this.selectedPage.emit(pageNumber);
    }
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
    doScrolling(elementX, startingX, duration, subject, _elementRef, animate = true) {
        /** @type {?} */
        const diff = elementX - startingX;
        /** @type {?} */
        let start;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFZLE1BQU0sK0NBQStDLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O01BRTFDLENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFnQm5DLFlBQXNCLFdBQW9DLEVBQ3RDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUgvQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQWIzQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEQsU0FBSSxHQUFHLEtBQUssQ0FB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QUFrQzs7SUFDbEMsd0NBQStCOztJQUMvQiwrQ0FBNkI7O0lBQzdCLGdEQUFvRDs7SUFDcEQsd0NBQWE7O0lBQ2Isd0NBQWE7O0lBRWIsNkNBQWlCOztJQUNqQix1Q0FBVzs7SUFDWCw2Q0FBbUI7O0lBQ25CLG1EQUF3Qjs7SUFDeEIsK0NBQW9COzs7OztJQUVSLCtDQUE4Qzs7Ozs7SUFDOUMsZ0RBQWlDOzs7OztJQUNqQyxrREFBcUM7Ozs7O0lBQ3JDLG9EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbCwgUGFnZU1vZGVsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3ZpZXdlci5jb25zdGFudHMnO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1ydW4tcHJlc2VudGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3J1bi1wcmVzZW50YXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ydW4tcHJlc2VudGF0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUnVuUHJlc2VudGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xuICBASW5wdXQoKSBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIHdhaXQgPSBmYWxzZTtcbiAgem9vbTogbnVtYmVyO1xuXG4gIGNvbnRhaW5lciA9IG51bGw7XG4gIGRvYyA9IG51bGw7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgbGFzdEN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIG9mZnNldFdpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwpIHtcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnpvb20gPSB2YWw7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgoXG4gICAgICB2YWx1ZSA9PiB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUbyh2YWx1ZSwgdmFsdWUgPiB0aGlzLmxhc3RDdXJyZW50UGFnZSk7XG4gICAgICAgICAgdGhpcy5sYXN0Q3VycmVudFBhZ2UgPSB2YWx1ZTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGFzdEN1cnJlbnRQYWdlID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAuZ2QtZG9jdW1lbnQgYXMgYSBjb250YWluZXJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IFxuICAgIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSAxKVxuICAgICAge1xuICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuY3VycmVudFBhZ2UsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5hbGlnblZlcnQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbGlnblZlcnQoKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgYWxpZ25WZXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXNlbnRhdGlvbkVsZW1lbnRzID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVzZW50YXRpb24nKTtcbiAgICBjb25zdCB6b29tID0gdGhpcy5fem9vbVNlcnZpY2Uuem9vbS8xMDA7XG4gICAgcHJlc2VudGF0aW9uRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5tYXJnaW5Ub3AgPSAoKHdpbmRvdy5pbm5lckhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0Knpvb20gLSBDb25zdGFudHMudG9wYmFyV2lkdGgpLzIpL3pvb20gKyBcInB4XCIpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnROb2RlTGlzdE9mLml0ZW0oMCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUbyhwYWdlTnVtYmVyOiBudW1iZXIsIG9uUmlnaHQ6IGJvb2xlYW4sIGFuaW1hdGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgcGFnZXNXaWR0aCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIChwYWdlTnVtYmVyIC0gMSk7XG4gICAgY29uc3Qgc3RhcnRpbmdYID0gb25SaWdodCA/IHBhZ2VzV2lkdGggLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggOiBwYWdlc1dpZHRoICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuZG9TY3JvbGxpbmcocGFnZXNXaWR0aCwgc3RhcnRpbmdYLCA1MDAsIG5ldyBTdWJqZWN0PGFueT4oKSwgdGhpcy5fZWxlbWVudFJlZiwgYW5pbWF0ZSk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUGFnZS5lbWl0KHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBkb1Njcm9sbGluZyhlbGVtZW50WDogbnVtYmVyLCBzdGFydGluZ1g6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgc3ViamVjdDogU3ViamVjdDxhbnk+LCBfZWxlbWVudFJlZiwgYW5pbWF0ZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBjb25zdCBkaWZmID0gZWxlbWVudFggLSBzdGFydGluZ1g7XG4gICAgbGV0IHN0YXJ0IDogbnVtYmVyO1xuXG4gICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogc3RhcnRpbmdYICsgZGlmZn0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICAgICAgc3RhcnQgPSAoIXN0YXJ0KSA/IHRpbWVzdGFtcCA6IHN0YXJ0O1xuXG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aW1lc3RhbXAgLSBzdGFydDtcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgubWluKHRpbWUgLyBkdXJhdGlvbiwgMSk7XG5cbiAgICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6IHN0YXJ0aW5nWCArIGRpZmYgKiBwZXJjZW50IH0pO1xuXG4gICAgICAgIGlmICh0aW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICAgIHN1YmplY3QubmV4dCh7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXREaW1lbnNpb25XaXRoVW5pdCh2YWx1ZTogbnVtYmVyLCBwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmFsdWUgKyAodGhpcy5tb2RlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQgOiAncHgnKTtcbiAgfVxuXG4gIGlzVmVydGljYWwocGFnZTogUGFnZU1vZGVsKSB7XG4gICAgcmV0dXJuIHBhZ2UuaGVpZ2h0ID4gcGFnZS53aWR0aDtcbiAgfVxuXG4gIG9uUGFuTGVmdCgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LmlzRmluYWwpIHtcbiAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uZXh0UGFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFuUmlnaHQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UucHJldlBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==