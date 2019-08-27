/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { ViewportService } from "../viewport.service";
import * as jquery from 'jquery';
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
        this.leftOffset = true;
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
        if (!this.leftOffset) {
            return 0;
        }
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
                styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:480px),screen and (max-width:1024px) and (orientation:landscape){.top-toolbar{height:60px}.arrow-right{position:absolute;right:0}.arrow-left{position:absolute;left:0}.tools{height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
            }] }
];
/** @nocollapse */
TopToolbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewportService },
    { type: ChangeDetectorRef }
];
TopToolbarComponent.propDecorators = {
    leftOffset: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TopToolbarComponent.prototype.leftOffset;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQU05QixZQUFvQixXQUFvQyxFQUNwQyxnQkFBaUMsRUFDakMsTUFBeUI7UUFGekIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFQcEMsZUFBVSxHQUFHLElBQUksQ0FBQztJQVEzQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Y0FDVCxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTs7Y0FDeEIsS0FBSyxHQUFHLElBQUk7UUFDbEIsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVE7OztRQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFROztjQUNBLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQzlCLElBQUksRUFBRSxFQUFFOztrQkFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxJQUFJ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RyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7OztZQS9HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZ2pCQUEyQzs7YUFFNUM7Ozs7WUFUdUQsVUFBVTtZQUMxRCxlQUFlO1lBREcsaUJBQWlCOzs7eUJBV3hDLEtBQUs7Ozs7SUFBTix5Q0FBMkI7O0lBRTNCLHVDQUFrQjs7SUFDbEIsd0NBQW1COzs7OztJQUVQLDBDQUE0Qzs7Ozs7SUFDNUMsK0NBQXlDOzs7OztJQUN6QyxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRvcC10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLXRvb2xiYXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb3BUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgbGVmdE9mZnNldCA9IHRydWU7XG5cbiAgc2hvd0xlZnQ6IGJvb2xlYW47XG4gIHNob3dSaWdodDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFRvb2xzRWxlbSgpO1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5jYW5Nb3ZlVG8odHJ1ZSk7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGxlZnQ6ICQoZWxlbSkub2Zmc2V0KCkubGVmdCArIGVsLnNjcm9sbExlZnQgLSB0aGlzLmdldExlZnRPZmZzZXQoKSxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGVsLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5jYW5Nb3ZlVG8oZmFsc2UpO1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBsZWZ0OiAkKGVsZW0pLm9mZnNldCgpLmxlZnQgKyBlbC5zY3JvbGxMZWZ0IC0gdGhpcy5nZXRMZWZ0T2Zmc2V0KCksXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICB9O1xuICAgICAgICBlbC5zY3JvbGxUbyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRvb2xzRWxlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5xdWVyeVNlbGVjdG9yKCcjdG9vbHMnKSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNhbk1vdmVUbyhsZWZ0OiBib29sZWFuKSB7XG4gICAgbGV0IGVsZW07XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgY29uc3QgY291bnRFbGVtID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAoZWxlbSA9IDA7IGVsZW0gPCBjb3VudEVsZW07IGVsZW0rKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbShlbGVtKTtcbiAgICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KGVsZW1lbnQsIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCkpKSB7XG4gICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0gPiAwID8gY2hpbGRyZW4uaXRlbShlbGVtIC0gMSkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlbGVtICsgMSA8IGNvdW50RWxlbSA/IGNoaWxkcmVuLml0ZW0oZWxlbSArIDEpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGdldEVsZW0obnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICByZXR1cm4gZWxlbXMuaXRlbShudW0gIT09IG51bGwgPyBudW0gOiBlbGVtcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4oKTogSFRNTENvbGxlY3Rpb24ge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBlbC5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGVmdE9mZnNldCgpIHtcbiAgICBpZiAoIXRoaXMubGVmdE9mZnNldCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0gOiBudWxsO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZWwuY2xpZW50V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICB0aGlzLnNob3dSaWdodCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbShudWxsKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICBjb25zdCBzaG93UmlnaHQgPSAhdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydCh0aGlzLmdldEVsZW0obnVsbCksIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCksIDAuOCk7XG4gICAgaWYgKHNob3dMZWZ0ICE9PSB0aGlzLnNob3dMZWZ0IHx8IHNob3dSaWdodCAhPT0gdGhpcy5zaG93UmlnaHQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnQgPSBzaG93TGVmdDtcbiAgICAgIHRoaXMuc2hvd1JpZ2h0ID0gc2hvd1JpZ2h0O1xuICAgICAgdGhpcy5fY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIl19