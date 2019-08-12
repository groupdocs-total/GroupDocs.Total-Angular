/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
var OutsideDirective = /** @class */ (function () {
    function OutsideDirective(_elRef) {
        this._elRef = _elRef;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @return {?}
     */
    OutsideDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.globalClick = fromEvent(document, 'click');
        this.globalClick.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.onGlobalClick(event);
        }));
    };
    /**
     * @return {?}
     */
    OutsideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    OutsideDirective.prototype.onGlobalClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof MouseEvent && this.clickOutsideEnabled === true) {
            if (this.isDescendant(this._elRef.nativeElement, event.target) === true) {
                this.clickOutside.emit({
                    target: (event.target || null),
                    value: false
                });
            }
            else {
                this.clickOutside.emit({
                    target: (event.target || null),
                    value: true
                });
            }
        }
    };
    /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    OutsideDirective.prototype.isDescendant = /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        /** @type {?} */
        var node = child;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            else {
                node = node.parentNode;
            }
        }
        return false;
    };
    OutsideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdOutside]'
                },] }
    ];
    /** @nocollapse */
    OutsideDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OutsideDirective.propDecorators = {
        clickOutsideEnabled: [{ type: Input }],
        clickOutside: [{ type: Output }]
    };
    return OutsideDirective;
}());
export { OutsideDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutsideDirective.prototype.globalClick;
    /** @type {?} */
    OutsideDirective.prototype.clickOutsideEnabled;
    /** @type {?} */
    OutsideDirective.prototype.clickOutside;
    /**
     * @type {?}
     * @private
     */
    OutsideDirective.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRTdDO0lBU0UsMEJBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQVc7WUFDbkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVgsY0FBZSxDQUFDOzs7OztJQUVoQix3Q0FBYTs7OztJQUFiLFVBQWMsS0FBVztRQUN2QixJQUFJLEtBQUssWUFBWSxVQUFVLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFNLElBQUksRUFBRTtZQUNyRSxJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDdEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO29CQUM5QixLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDckIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7b0JBQzlCLEtBQUssRUFBRSxJQUFJO2lCQUNaLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFRCx1Q0FBWTs7Ozs7SUFBWixVQUFhLE1BQU0sRUFBRSxLQUFLOztZQUNwQixJQUFJLEdBQUcsS0FBSztRQUNoQixPQUFPLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQUw0RCxVQUFVOzs7c0NBU3BFLEtBQUs7K0JBQ0wsTUFBTTs7SUEwQ1QsdUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTlDWSxnQkFBZ0I7Ozs7OztJQUMzQix1Q0FBc0M7O0lBRXRDLCtDQUFzQzs7SUFDdEMsd0NBQTRDOzs7OztJQUVoQyxrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RPdXRzaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgT3V0c2lkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBnbG9iYWxDbGljazpPYnNlcnZhYmxlPEV2ZW50PjtcblxuICBASW5wdXQoKSBjbGlja091dHNpZGVFbmFibGVkOiBib29sZWFuO1xuICBAT3V0cHV0KCkgY2xpY2tPdXRzaWRlOkV2ZW50RW1pdHRlcjxPYmplY3Q+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOkVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmNsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2xvYmFsQ2xpY2sgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICAgIHRoaXMuZ2xvYmFsQ2xpY2suc3Vic2NyaWJlKChldmVudDpFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm9uR2xvYmFsQ2xpY2soZXZlbnQpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG5cbiAgb25HbG9iYWxDbGljayhldmVudDpFdmVudCkge1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgdGhpcy5jbGlja091dHNpZGVFbmFibGVkICA9PT0gdHJ1ZSkge1xuICAgICAgaWYodGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgZXZlbnQudGFyZ2V0KSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KHtcbiAgICAgICAgICB0YXJnZXQ6IChldmVudC50YXJnZXQgfHwgbnVsbCksXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdCh7XG4gICAgICAgICAgdGFyZ2V0OiAoZXZlbnQudGFyZ2V0IHx8IG51bGwpLFxuICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gICAgbGV0IG5vZGUgPSBjaGlsZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19