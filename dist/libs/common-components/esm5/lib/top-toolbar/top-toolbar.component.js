/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ViewportService } from "../viewport.service";
import * as jquery from "jquery";
/** @type {?} */
var $ = jquery;
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
    }
    /**
     * @return {?}
     */
    TopToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.refresh();
        /** @type {?} */
        var el = this.getToolsElem();
        /** @type {?} */
        var $this = this;
        el.addEventListener('scroll', (/**
         * @return {?}
         */
        function () {
            $this.refresh();
        }));
    };
    /**
     * @return {?}
     */
    TopToolbarComponent.prototype.moveLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.getToolsElem();
        if (el) {
            /** @type {?} */
            var elem = this.canMoveTo(true);
            if (elem) {
                /** @type {?} */
                var options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    /**
     * @return {?}
     */
    TopToolbarComponent.prototype.moveRight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.getToolsElem();
        if (el) {
            /** @type {?} */
            var elem = this.canMoveTo(false);
            if (elem) {
                /** @type {?} */
                var options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    TopToolbarComponent.prototype.getToolsElem = /**
     * @private
     * @return {?}
     */
    function () {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    };
    /**
     * @private
     * @param {?} left
     * @return {?}
     */
    TopToolbarComponent.prototype.canMoveTo = /**
     * @private
     * @param {?} left
     * @return {?}
     */
    function (left) {
        /** @type {?} */
        var elem;
        /** @type {?} */
        var children = this.getChildren();
        /** @type {?} */
        var countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            /** @type {?} */
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
    /**
     * @private
     * @param {?} num
     * @return {?}
     */
    TopToolbarComponent.prototype.getElem = /**
     * @private
     * @param {?} num
     * @return {?}
     */
    function (num) {
        /** @type {?} */
        var elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    };
    /**
     * @private
     * @return {?}
     */
    TopToolbarComponent.prototype.getChildren = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    };
    /**
     * @private
     * @return {?}
     */
    TopToolbarComponent.prototype.getLeftOffset = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    };
    /**
     * @private
     * @return {?}
     */
    TopToolbarComponent.prototype.refresh = /**
     * @private
     * @return {?}
     */
    function () {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    };
    /**
     * @return {?}
     */
    TopToolbarComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        /** @type {?} */
        var showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
    };
    TopToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-top-toolbar',
                    template: "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n",
                    styles: [".top-toolbar{width:100%;height:50px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:1025px){.top-toolbar{height:70px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
                }] }
    ];
    /** @nocollapse */
    TopToolbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewportService },
        { type: ChangeDetectorRef }
    ]; };
    return TopToolbarComponent;
}());
export { TopToolbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFDM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFTRSw2QkFBb0IsV0FBb0MsRUFDcEMsZ0JBQWlDLEVBQ2pDLE1BQXlCO1FBRnpCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQzdDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBQ1QsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBQ3hCLEtBQUssR0FBRyxJQUFJO1FBQ2xCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFROzs7UUFBRTtZQUM1QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSOztZQUNRLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQzlCLElBQUksRUFBRSxFQUFFOztnQkFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxJQUFJLEVBQUU7O29CQUNGLE9BQU8sR0FBRztvQkFDZCxJQUFJLEVBQUUsQ0FB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LE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQTFHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ2pCQUEyQzs7aUJBRTVDOzs7O2dCQVR1RCxVQUFVO2dCQUMxRCxlQUFlO2dCQURHLGlCQUFpQjs7SUFnSDNDLDBCQUFDO0NBQUEsQUEzR0QsSUEyR0M7U0F0R1ksbUJBQW1COzs7SUFDOUIsdUNBQWtCOztJQUNsQix3Q0FBbUI7Ozs7O0lBRVAsMENBQTRDOzs7OztJQUM1QywrQ0FBeUM7Ozs7O0lBQ3pDLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi4vdmlld3BvcnQuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRvcC10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLXRvb2xiYXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb3BUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgc2hvd0xlZnQ6IGJvb2xlYW47XG4gIHNob3dSaWdodDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFRvb2xzRWxlbSgpO1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5jYW5Nb3ZlVG8odHJ1ZSk7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGxlZnQ6ICQoZWxlbSkub2Zmc2V0KCkubGVmdCArIGVsLnNjcm9sbExlZnQgLSB0aGlzLmdldExlZnRPZmZzZXQoKSxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGVsLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5jYW5Nb3ZlVG8oZmFsc2UpO1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBsZWZ0OiAkKGVsZW0pLm9mZnNldCgpLmxlZnQgKyBlbC5zY3JvbGxMZWZ0IC0gdGhpcy5nZXRMZWZ0T2Zmc2V0KCksXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICB9O1xuICAgICAgICBlbC5zY3JvbGxUbyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRvb2xzRWxlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5xdWVyeVNlbGVjdG9yKCcjdG9vbHMnKSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNhbk1vdmVUbyhsZWZ0OiBib29sZWFuKSB7XG4gICAgbGV0IGVsZW07XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgY29uc3QgY291bnRFbGVtID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAoZWxlbSA9IDA7IGVsZW0gPCBjb3VudEVsZW07IGVsZW0rKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbShlbGVtKTtcbiAgICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KGVsZW1lbnQsIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCkpKSB7XG4gICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0gPiAwID8gY2hpbGRyZW4uaXRlbShlbGVtIC0gMSkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlbGVtICsgMSA8IGNvdW50RWxlbSA/IGNoaWxkcmVuLml0ZW0oZWxlbSArIDEpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGdldEVsZW0obnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICByZXR1cm4gZWxlbXMuaXRlbShudW0gIT09IG51bGwgPyBudW0gOiBlbGVtcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4oKTogSFRNTENvbGxlY3Rpb24ge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBlbC5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGVmdE9mZnNldCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdIDogbnVsbDtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKCkge1xuICAgIHRoaXMuc2hvd0xlZnQgPSAhdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydCh0aGlzLmdldEVsZW0oMCksIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCksIDAuOCk7XG4gICAgdGhpcy5zaG93UmlnaHQgPSAhdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydCh0aGlzLmdldEVsZW0obnVsbCksIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCksIDAuOCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2hvd0xlZnQgPSAhdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydCh0aGlzLmdldEVsZW0oMCksIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCksIDAuOCk7XG4gICAgY29uc3Qgc2hvd1JpZ2h0ID0gIXRoaXMuX3ZpZXdwb3J0U2VydmljZS5jaGVja0luVmlld3BvcnQodGhpcy5nZXRFbGVtKG51bGwpLCAxMDAsIHRoaXMuZ2V0TGVmdE9mZnNldCgpLCAwLjgpO1xuICAgIGlmIChzaG93TGVmdCAhPT0gdGhpcy5zaG93TGVmdCB8fCBzaG93UmlnaHQgIT09IHRoaXMuc2hvd1JpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dMZWZ0ID0gc2hvd0xlZnQ7XG4gICAgICB0aGlzLnNob3dSaWdodCA9IHNob3dSaWdodDtcbiAgICAgIHRoaXMuX2NkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==