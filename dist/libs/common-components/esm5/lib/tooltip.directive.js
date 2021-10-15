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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBUyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkY7SUFPRTtRQUZVLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUdwRCxDQUFDOzs7O0lBR00scUNBQVU7OztJQURqQjtRQUVFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFHTSx1Q0FBWTs7O0lBRG5CO1FBRUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7OzhCQUdFLE1BQU07NkJBS04sWUFBWSxTQUFDLFlBQVk7K0JBS3pCLFlBQVksU0FBQyxZQUFZOztJQUs1Qix1QkFBQztDQUFBLEFBcEJELElBb0JDO1NBakJZLGdCQUFnQjs7O0lBRTNCLHVDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFRvb2x0aXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcblxuICBAT3V0cHV0KCkgc2hvd1Rvb2xUaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgcHVibGljIG9uSG92ZXJpbmcoKSB7XG4gICAgdGhpcy5zaG93VG9vbFRpcC5lbWl0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIHB1YmxpYyBvblVuaG92ZXJpbmcoKSB7XG4gICAgdGhpcy5zaG93VG9vbFRpcC5lbWl0KGZhbHNlKTtcbiAgfVxuXG59XG4iXX0=