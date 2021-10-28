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
            if (val !== 100) {
                if (this.currentPage !== 1) {
                    this.scrollTo(this.currentPage, true, false);
                }
            }
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
                styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow-y:hidden;touch-action:auto!important;overflow-x:hidden}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;margin:20px;-webkit-transition:.3s;transition:.3s}.page ::ng-deep gd-page{box-shadow:0 3px 6px rgba(0,0,0,.16);background-color:#fff}.page.presentation{-webkit-transition:unset;transition:unset;margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical{margin:0;width:100%!important;display:-webkit-box!important;display:flex!important;-webkit-box-pack:center!important;justify-content:center!important}.page.presentation.vertical ::ng-deep [class*=\"-rotate\"]{position:unset!important;margin-right:-240px}.page.presentation.vertical ::ng-deep gd-page{height:960pt;width:540pt}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;align-content:flex-start}@media (max-width:1037px){:host{overflow-y:unset}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}.page ::ng-deep .gd-wrapper{pointer-events:none}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFZLE1BQU0sK0NBQStDLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7TUFHekIsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQWVuQyxZQUFzQixXQUFvQyxFQUN0QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIL0IsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFaM0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3BELFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFFBQUcsR0FBRyxJ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TTtRQUNkLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFNO1FBQ2YsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7OztZQXZIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsdzZCQUFnRDs7YUFFakQ7Ozs7WUF2QkMsVUFBVTtZQVNKLFdBQVc7WUFFWCxhQUFhO1lBRVosZUFBZTs7O21CQWFyQixLQUFLOytCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLE1BQU07Ozs7SUFKUCx3Q0FBdUI7O0lBQ3ZCLG9EQUFrQzs7SUFDbEMsd0NBQStCOztJQUMvQiwrQ0FBNkI7O0lBQzdCLGdEQUFvRDs7SUFDcEQsd0NBQWE7O0lBQ2Isd0NBQWE7O0lBRWIsNkNBQWlCOztJQUNqQix1Q0FBVzs7SUFDWCw2Q0FBbUI7O0lBQ25CLG1EQUF3Qjs7Ozs7SUFFWiwrQ0FBOEM7Ozs7O0lBQzlDLGdEQUFpQzs7Ozs7SUFDakMsa0RBQXFDOzs7OztJQUNyQyxvREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVEZXNjcmlwdGlvbiwgRmlsZVV0aWwsIFBhZ2VNb2RlbH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi92aWV3ZXIuY29uc3RhbnRzJztcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcnVuLXByZXNlbnRhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ydW4tcHJlc2VudGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJ1blByZXNlbnRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBwcmVsb2FkUGFnZUNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcbiAgQElucHV0KCkgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICB3YWl0ID0gZmFsc2U7XG4gIHpvb206IG51bWJlcjtcblxuICBjb250YWluZXIgPSBudWxsO1xuICBkb2MgPSBudWxsO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIGxhc3RDdXJyZW50UGFnZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsKSB7XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsO1xuXG4gICAgICBpZiAodmFsICE9PSAxMDApIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5jdXJyZW50UGFnZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgoXG4gICAgICB2YWx1ZSA9PiB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUbyh2YWx1ZSwgdmFsdWUgPiB0aGlzLmxhc3RDdXJyZW50UGFnZSk7XG4gICAgICAgICAgdGhpcy5sYXN0Q3VycmVudFBhZ2UgPSB2YWx1ZTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGFzdEN1cnJlbnRQYWdlID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAuZ2QtZG9jdW1lbnQgYXMgYSBjb250YWluZXJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50Tm9kZUxpc3RPZiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2Qtd3JhcHBlcicpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50Tm9kZUxpc3RPZi5pdGVtKDApO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG8ocGFnZU51bWJlcjogbnVtYmVyLCBvblJpZ2h0OiBib29sZWFuLCBhbmltYXRlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnN0IHBhZ2VzV2lkdGggPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiAocGFnZU51bWJlciAtIDEpO1xuICAgIGNvbnN0IHN0YXJ0aW5nWCA9IG9uUmlnaHQgPyBwYWdlc1dpZHRoIC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDogcGFnZXNXaWR0aCArIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmRvU2Nyb2xsaW5nKHBhZ2VzV2lkdGgsIHN0YXJ0aW5nWCwgNTAwLCBuZXcgU3ViamVjdDxhbnk+KCksIHRoaXMuX2VsZW1lbnRSZWYsIGFuaW1hdGUpO1xuXG4gICAgdGhpcy5zZWxlY3RlZFBhZ2UuZW1pdChwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9TY3JvbGxpbmcoZWxlbWVudFg6IG51bWJlciwgc3RhcnRpbmdYOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIHN1YmplY3Q6IFN1YmplY3Q8YW55PiwgX2VsZW1lbnRSZWYsIGFuaW1hdGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgZGlmZiA9IGVsZW1lbnRYIC0gc3RhcnRpbmdYO1xuICAgIGxldCBzdGFydCA6IG51bWJlcjtcblxuICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6IHN0YXJ0aW5nWCArIGRpZmZ9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XG4gICAgICAgIHN0YXJ0ID0gKCFzdGFydCkgPyB0aW1lc3RhbXAgOiBzdGFydDtcblxuICAgICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLm1pbih0aW1lIC8gZHVyYXRpb24sIDEpO1xuXG4gICAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiBzdGFydGluZ1ggKyBkaWZmICogcGVyY2VudCB9KTtcblxuICAgICAgICBpZiAodGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgICBzdWJqZWN0Lm5leHQoe30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlciwgcGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgKHRoaXMubW9kZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0IDogJ3B4Jyk7XG4gIH1cblxuICBpc1ZlcnRpY2FsKHBhZ2U6IFBhZ2VNb2RlbCkge1xuICAgIHJldHVybiBwYWdlLmhlaWdodCA+IHBhZ2Uud2lkdGg7XG4gIH1cblxuICBvblBhbkxlZnQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudC5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmV4dFBhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBvblBhblJpZ2h0KCRldmVudCkge1xuICAgIGlmICgkZXZlbnQuaXNGaW5hbCkge1xuICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLnByZXZQYWdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=