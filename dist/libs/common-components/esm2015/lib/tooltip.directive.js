/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
export class TooltipDirective {
    constructor() {
        this.showToolTip = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onHovering() {
        this.showToolTip.emit(true);
    }
    /**
     * @return {?}
     */
    onUnhovering() {
        this.showToolTip.emit(false);
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdTooltip]'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [];
TooltipDirective.propDecorators = {
    showToolTip: [{ type: Output }],
    onHovering: [{ type: HostListener, args: ['mouseenter',] }],
    onUnhovering: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.showToolTip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBUyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLbkYsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtRQUZVLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUdwRCxDQUFDOzs7O0lBR00sVUFBVTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFHTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7OzBCQUdFLE1BQU07eUJBS04sWUFBWSxTQUFDLFlBQVk7MkJBS3pCLFlBQVksU0FBQyxZQUFZOzs7O0lBVjFCLHVDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFRvb2x0aXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSB7XHJcblxyXG4gIEBPdXRwdXQoKSBzaG93VG9vbFRpcCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBwdWJsaWMgb25Ib3ZlcmluZygpIHtcclxuICAgIHRoaXMuc2hvd1Rvb2xUaXAuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIHB1YmxpYyBvblVuaG92ZXJpbmcoKSB7XHJcbiAgICB0aGlzLnNob3dUb29sVGlwLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19