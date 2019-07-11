/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ViewportService } from "../viewport.service";
import * as jquery from "jquery";
/** @type {?} */
const $ = jquery;
export class TopToolbarComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _viewportService
     * @param {?} _cdRef
     */
    constructor(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.refresh();
        /** @type {?} */
        const el = this.getToolsElem();
        /** @type {?} */
        const $this = this;
        el.addEventListener('scroll', (/**
         * @return {?}
         */
        function () {
            $this.refresh();
        }));
    }
    /**
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const el = this.getToolsElem();
        if (el) {
            /** @type {?} */
            const elem = this.canMoveTo(true);
            if (elem) {
                /** @type {?} */
                const options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    }
    /**
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const el = this.getToolsElem();
        if (el) {
            /** @type {?} */
            const elem = this.canMoveTo(false);
            if (elem) {
                /** @type {?} */
                const options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    getToolsElem() {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    }
    /**
     * @private
     * @param {?} left
     * @return {?}
     */
    canMoveTo(left) {
        /** @type {?} */
        let elem;
        /** @type {?} */
        const children = this.getChildren();
        /** @type {?} */
        const countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            /** @type {?} */
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
    /**
     * @private
     * @param {?} num
     * @return {?}
     */
    getElem(num) {
        /** @type {?} */
        const elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    }
    /**
     * @private
     * @return {?}
     */
    getChildren() {
        /** @type {?} */
        const el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    }
    /**
     * @private
     * @return {?}
     */
    getLeftOffset() {
        /** @type {?} */
        const el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    }
    /**
     * @private
     * @return {?}
     */
    refresh() {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        /** @type {?} */
        const showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
    }
}
TopToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-top-toolbar',
                template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
                styles: [".top-toolbar{width:100%;height:50px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:1025px){.top-toolbar{height:70px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
            }] }
];
/** @nocollapse */
TopToolbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewportService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    TopToolbarComponent.prototype.showLeft;
    /** @type {?} */
    TopToolbarComponent.prototype.showRight;
    /**
     * @type {?}
     * @private
     */
    TopToolbarComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TopToolbarComponent.prototype._viewportService;
    /**
     * @type {?}
     * @private
     */
    TopToolbarComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBSTlCLFlBQW9CLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxNQUF5QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUM3QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Y0FDVCxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTs7Y0FDeEIsS0FBSyxHQUFHLElBQUk7UUFDbEIsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVE7OztRQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFROztjQUNBLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQzlCLElBQUksRUFBRSxFQUFFOztrQkFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxJQUFJLEVBQUU7O3NCQUNGLE9BQU8sR0FBRztvQkFDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2xFLEdBQUcsRUFBRSxDQUFDO2lCQUNQO2dCQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxTQUFTOztjQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQzlCLElBQUksRUFBRSxFQUFFOztrQkFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDbEMsSUFBSSxJQUFJLEVBQUU7O3NCQUNGLE9BQU8sR0FBRztvQkFDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2xFLEdBQUcsRUFBRSxDQUFDO2lCQUNQO2dCQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RyxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBYTs7WUFDekIsSUFBSTs7Y0FDRixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTs7Y0FDN0IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNO1FBQ2pDLEtBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFOztrQkFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2xDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFO2dCQUM3RSxJQUFJLElBQUksRUFBRTtvQkFDUixPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7aUJBQzlEO2FBQ0Y7U0FDRjtRQUNELE9BQU87SUFDVCxDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsR0FBVzs7Y0FDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDaEMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVPLFdBQVc7O2NBQ1gsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDOUIsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU87U0FDUjtRQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLGFBQWE7O2NBQ2IsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQzNHLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8sT0FBTztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUcsQ0FBQzs7OztJQUVELGtCQUFrQjs7Y0FDVixRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxHQUFHLENBQUM7O2NBQ2xHLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUM1RyxJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUExR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGdqQkFBMkM7O2FBRTVDOzs7O1lBVHVELFVBQVU7WUFDMUQsZUFBZTtZQURHLGlCQUFpQjs7OztJQVd6Qyx1Q0FBa0I7O0lBQ2xCLHdDQUFtQjs7Ozs7SUFFUCwwQ0FBNEM7Ozs7O0lBQzVDLCtDQUF5Qzs7Ozs7SUFDekMscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdDaGVja2VkLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdG9wLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b3AtdG9vbGJhci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvcFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBzaG93TGVmdDogYm9vbGVhbjtcbiAgc2hvd1JpZ2h0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3cG9ydFNlcnZpY2U6IFZpZXdwb3J0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgY29uc3QgJHRoaXMgPSB0aGlzO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICR0aGlzLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmNhbk1vdmVUbyh0cnVlKTtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbGVmdDogJChlbGVtKS5vZmZzZXQoKS5sZWZ0ICsgZWwuc2Nyb2xsTGVmdCAtIHRoaXMuZ2V0TGVmdE9mZnNldCgpLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZWwuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmNhbk1vdmVUbyhmYWxzZSk7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGxlZnQ6ICQoZWxlbSkub2Zmc2V0KCkubGVmdCArIGVsLnNjcm9sbExlZnQgLSB0aGlzLmdldExlZnRPZmZzZXQoKSxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGVsLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG9vbHNFbGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLnF1ZXJ5U2VsZWN0b3IoJyN0b29scycpIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgY2FuTW92ZVRvKGxlZnQ6IGJvb2xlYW4pIHtcbiAgICBsZXQgZWxlbTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBjb25zdCBjb3VudEVsZW0gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yIChlbGVtID0gMDsgZWxlbSA8IGNvdW50RWxlbTsgZWxlbSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtKGVsZW0pO1xuICAgICAgaWYgKHRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQoZWxlbWVudCwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSkpIHtcbiAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbSA+IDAgPyBjaGlsZHJlbi5pdGVtKGVsZW0gLSAxKSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0gKyAxIDwgY291bnRFbGVtID8gY2hpbGRyZW4uaXRlbShlbGVtICsgMSkgOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWxlbShudW06IG51bWJlcikge1xuICAgIGNvbnN0IGVsZW1zID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIHJldHVybiBlbGVtcy5pdGVtKG51bSAhPT0gbnVsbCA/IG51bSA6IGVsZW1zLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGlsZHJlbigpOiBIVE1MQ29sbGVjdGlvbiB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFRvb2xzRWxlbSgpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmNoaWxkcmVuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMZWZ0T2Zmc2V0KCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0gOiBudWxsO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZWwuY2xpZW50V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICB0aGlzLnNob3dSaWdodCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbShudWxsKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICBjb25zdCBzaG93UmlnaHQgPSAhdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydCh0aGlzLmdldEVsZW0obnVsbCksIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCksIDAuOCk7XG4gICAgaWYgKHNob3dMZWZ0ICE9PSB0aGlzLnNob3dMZWZ0IHx8IHNob3dSaWdodCAhPT0gdGhpcy5zaG93UmlnaHQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnQgPSBzaG93TGVmdDtcbiAgICAgIHRoaXMuc2hvd1JpZ2h0ID0gc2hvd1JpZ2h0O1xuICAgICAgdGhpcy5fY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIl19