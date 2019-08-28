/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';
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
        this.globalClick.pipe(delay(0)).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QztJQVNFLDBCQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBVztZQUNsRCxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWCxjQUFlLENBQUM7Ozs7O0lBRWhCLHdDQUFhOzs7O0lBQWIsVUFBYyxLQUFXO1FBQ3ZCLElBQUksS0FBSyxZQUFZLFVBQVUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQU0sSUFBSSxFQUFFO1lBQ3JFLElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDckIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7b0JBQzlCLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNyQixNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztvQkFDOUIsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVELHVDQUFZOzs7OztJQUFaLFVBQWEsTUFBTSxFQUFFLEtBQUs7O1lBQ3BCLElBQUksR0FBRyxLQUFLO1FBQ2hCLE9BQU8sSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0JBTjRELFVBQVU7OztzQ0FVcEUsS0FBSzsrQkFDTCxNQUFNOztJQTBDVCx1QkFBQztDQUFBLEFBakRELElBaURDO1NBOUNZLGdCQUFnQjs7Ozs7O0lBQzNCLHVDQUFzQzs7SUFFdEMsK0NBQXNDOztJQUN0Qyx3Q0FBNEM7Ozs7O0lBRWhDLGtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkT3V0c2lkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE91dHNpZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZ2xvYmFsQ2xpY2s6T2JzZXJ2YWJsZTxFdmVudD47XG5cbiAgQElucHV0KCkgY2xpY2tPdXRzaWRlRW5hYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGNsaWNrT3V0c2lkZTpFdmVudEVtaXR0ZXI8T2JqZWN0PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjpFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5jbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdsb2JhbENsaWNrID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAgICB0aGlzLmdsb2JhbENsaWNrLnBpcGUoZGVsYXkoMCkpLnN1YnNjcmliZSgoZXZlbnQ6RXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5vbkdsb2JhbENsaWNrKGV2ZW50KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxuXG4gIG9uR2xvYmFsQ2xpY2soZXZlbnQ6RXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ICYmIHRoaXMuY2xpY2tPdXRzaWRlRW5hYmxlZCAgPT09IHRydWUpIHtcbiAgICAgIGlmKHRoaXMuaXNEZXNjZW5kYW50KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50LnRhcmdldCkgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdCh7XG4gICAgICAgICAgdGFyZ2V0OiAoZXZlbnQudGFyZ2V0IHx8IG51bGwpLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQoe1xuICAgICAgICAgIHRhcmdldDogKGV2ZW50LnRhcmdldCB8fCBudWxsKSxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICAgIGxldCBub2RlID0gY2hpbGQ7XG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==