/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective() {
        this.showToolTip = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onHovering = /**
     * @return {?}
     */
    function () {
        this.showToolTip.emit(true);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onUnhovering = /**
     * @return {?}
     */
    function () {
        this.showToolTip.emit(false);
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdTooltip]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return []; };
    TooltipDirective.propDecorators = {
        showToolTip: [{ type: Output }],
        onHovering: [{ type: HostListener, args: ['mouseenter',] }],
        onUnhovering: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return TooltipDirective;
}());
export { TooltipDirective };
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.showToolTip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBUyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkY7SUFPRTtRQUZVLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUdwRCxDQUFDOzs7O0lBR00scUNBQVU7OztJQURqQjtRQUVFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFHTSx1Q0FBWTs7O0lBRG5CO1FBRUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7OzhCQUdFLE1BQU07NkJBS04sWUFBWSxTQUFDLFlBQVk7K0JBS3pCLFlBQVksU0FBQyxZQUFZOztJQUs1Qix1QkFBQztDQUFBLEFBcEJELElBb0JDO1NBakJZLGdCQUFnQjs7O0lBRTNCLHVDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFRvb2x0aXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSB7XHJcblxyXG4gIEBPdXRwdXQoKSBzaG93VG9vbFRpcCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBwdWJsaWMgb25Ib3ZlcmluZygpIHtcclxuICAgIHRoaXMuc2hvd1Rvb2xUaXAuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIHB1YmxpYyBvblVuaG92ZXJpbmcoKSB7XHJcbiAgICB0aGlzLnNob3dUb29sVGlwLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19