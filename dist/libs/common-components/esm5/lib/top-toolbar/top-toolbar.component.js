/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { ViewportService } from "../viewport.service";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
        this.leftOffset = true;
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
        if (!this.leftOffset) {
            return 0;
        }
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
                    styles: [".top-toolbar{width:100%;height:60px;z-index:999;display:flex;align-items:center}.tools{width:100%;height:100%;display:flex;align-items:center}@media (max-width:480px){.top-toolbar{height:60px}.arrow-right{position:absolute;right:0}.tools{width:calc(100% - 120px);height:100%;overflow-x:auto;overflow-scrolling:touch;display:flex;align-items:center;transition:.3s ease-in-out;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.tools::-webkit-scrollbar{width:0;height:0;background-color:#3e4e5a}}"]
                }] }
    ];
    /** @nocollapse */
    TopToolbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewportService },
        { type: ChangeDetectorRef }
    ]; };
    TopToolbarComponent.propDecorators = {
        leftOffset: [{ type: Input }]
    };
    return TopToolbarComponent;
}());
export { TopToolbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBQzNCLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBV0UsNkJBQW9CLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxNQUF5QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVBwQyxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBUTNCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBQ1QsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBQ3hCLEtBQUssR0FBRyxJQUFJO1FBQ2xCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFROzs7UUFBRTtZQUM1QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSOztZQUNRLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQzlCLElBQUksRUFBRSxFQUFFOztnQkFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxJQUFJLEVBQUU7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U0FBUyxFQUFFO1lBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkEvR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGdqQkFBMkM7O2lCQUU1Qzs7OztnQkFUdUQsVUFBVTtnQkFDMUQsZUFBZTtnQkFERyxpQkFBaUI7Ozs2QkFXeEMsS0FBSzs7SUEwR1IsMEJBQUM7Q0FBQSxBQWhIRCxJQWdIQztTQTNHWSxtQkFBbUI7OztJQUM5Qix5Q0FBMkI7O0lBRTNCLHVDQUFrQjs7SUFDbEIsd0NBQW1COzs7OztJQUVQLDBDQUE0Qzs7Ozs7SUFDNUMsK0NBQXlDOzs7OztJQUN6QyxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRvcC10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLXRvb2xiYXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb3BUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgbGVmdE9mZnNldCA9IHRydWU7XG5cbiAgc2hvd0xlZnQ6IGJvb2xlYW47XG4gIHNob3dSaWdodDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFRvb2xzRWxlbSgpO1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkdGhpcy5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5jYW5Nb3ZlVG8odHJ1ZSk7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGxlZnQ6ICQoZWxlbSkub2Zmc2V0KCkubGVmdCArIGVsLnNjcm9sbExlZnQgLSB0aGlzLmdldExlZnRPZmZzZXQoKSxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGVsLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZ2V0VG9vbHNFbGVtKCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5jYW5Nb3ZlVG8oZmFsc2UpO1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBsZWZ0OiAkKGVsZW0pLm9mZnNldCgpLmxlZnQgKyBlbC5zY3JvbGxMZWZ0IC0gdGhpcy5nZXRMZWZ0T2Zmc2V0KCksXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICB9O1xuICAgICAgICBlbC5zY3JvbGxUbyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRvb2xzRWxlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZiA/IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5xdWVyeVNlbGVjdG9yKCcjdG9vbHMnKSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNhbk1vdmVUbyhsZWZ0OiBib29sZWFuKSB7XG4gICAgbGV0IGVsZW07XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgY29uc3QgY291bnRFbGVtID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAoZWxlbSA9IDA7IGVsZW0gPCBjb3VudEVsZW07IGVsZW0rKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbShlbGVtKTtcbiAgICAgIGlmICh0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KGVsZW1lbnQsIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCkpKSB7XG4gICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0gPiAwID8gY2hpbGRyZW4uaXRlbShlbGVtIC0gMSkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlbGVtICsgMSA8IGNvdW50RWxlbSA/IGNoaWxkcmVuLml0ZW0oZWxlbSArIDEpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGdldEVsZW0obnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICByZXR1cm4gZWxlbXMuaXRlbShudW0gIT09IG51bGwgPyBudW0gOiBlbGVtcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4oKTogSFRNTENvbGxlY3Rpb24ge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRUb29sc0VsZW0oKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBlbC5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGVmdE9mZnNldCgpIHtcbiAgICBpZiAoIXRoaXMubGVmdE9mZnNldCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0gOiBudWxsO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZWwuY2xpZW50V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICB0aGlzLnNob3dSaWdodCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbShudWxsKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaG93TGVmdCA9ICF0aGlzLl92aWV3cG9ydFNlcnZpY2UuY2hlY2tJblZpZXdwb3J0KHRoaXMuZ2V0RWxlbSgwKSwgMTAwLCB0aGlzLmdldExlZnRPZmZzZXQoKSwgMC44KTtcbiAgICBjb25zdCBzaG93UmlnaHQgPSAhdGhpcy5fdmlld3BvcnRTZXJ2aWNlLmNoZWNrSW5WaWV3cG9ydCh0aGlzLmdldEVsZW0obnVsbCksIDEwMCwgdGhpcy5nZXRMZWZ0T2Zmc2V0KCksIDAuOCk7XG4gICAgaWYgKHNob3dMZWZ0ICE9PSB0aGlzLnNob3dMZWZ0IHx8IHNob3dSaWdodCAhPT0gdGhpcy5zaG93UmlnaHQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnQgPSBzaG93TGVmdDtcbiAgICAgIHRoaXMuc2hvd1JpZ2h0ID0gc2hvd1JpZ2h0O1xuICAgICAgdGhpcy5fY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIl19