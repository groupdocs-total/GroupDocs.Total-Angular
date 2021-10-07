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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBUyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLbkYsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtRQUZVLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUdwRCxDQUFDOzs7O0lBR00sVUFBVTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFHTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7OzBCQUdFLE1BQU07eUJBS04sWUFBWSxTQUFDLFlBQVk7MkJBS3pCLFlBQVksU0FBQyxZQUFZOzs7O0lBVjFCLHVDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFRvb2x0aXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcblxuICBAT3V0cHV0KCkgc2hvd1Rvb2xUaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgcHVibGljIG9uSG92ZXJpbmcoKSB7XG4gICAgdGhpcy5zaG93VG9vbFRpcC5lbWl0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIHB1YmxpYyBvblVuaG92ZXJpbmcoKSB7XG4gICAgdGhpcy5zaG93VG9vbFRpcC5lbWl0KGZhbHNlKTtcbiAgfVxuXG59XG4iXX0=