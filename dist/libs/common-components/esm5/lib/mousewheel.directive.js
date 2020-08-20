/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as jquery from "jquery";
/** @type {?} */
var $ = jquery;
var MouseWheelDirective = /** @class */ (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new EventEmitter();
        this.mouseWheelDown = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MouseWheelDirective.prototype.onMouseWheelChrome = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mouseWheelFunc(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MouseWheelDirective.prototype.onMouseWheelFirefox = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mouseWheelFunc(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MouseWheelDirective.prototype.onMouseWheelIE = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mouseWheelFunc(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MouseWheelDirective.prototype.mouseWheelFunc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event = window.event;
        /** @type {?} */
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            console.log("this.mouseWheelUp.emit(event);");
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            console.log("this.mouseWheelDown.emit(event);");
            this.mouseWheelDown.emit(event);
        }
    };
    MouseWheelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdMouseWheel]'
                },] }
    ];
    MouseWheelDirective.propDecorators = {
        mouseWheelUp: [{ type: Output }],
        mouseWheelDown: [{ type: Output }],
        onMouseWheelChrome: [{ type: HostListener, args: ['mousewheel', ['$event'],] }],
        onMouseWheelFirefox: [{ type: HostListener, args: ['DOMMouseScroll', ['$event'],] }],
        onMouseWheelIE: [{ type: HostListener, args: ['onmousewheel', ['$event'],] }]
    };
    return MouseWheelDirective;
}());
export { MouseWheelDirective };
if (false) {
    /** @type {?} */
    MouseWheelDirective.prototype.mouseWheelUp;
    /** @type {?} */
    MouseWheelDirective.prototype.mouseWheelDown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbW91c2V3aGVlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0IsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0lBQzNCLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBQUE7UUFJWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBeUJoRCxDQUFDOzs7OztJQXZCeUMsZ0RBQWtCOzs7O0lBQTFELFVBQTJELEtBQVU7UUFDbkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUUyQyxpREFBbUI7Ozs7SUFBL0QsVUFBZ0UsS0FBVTtRQUN4RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRXlDLDRDQUFjOzs7O0lBQXhELFVBQXlELEtBQVU7UUFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxLQUFVO1FBQ3ZCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFFOztZQUNsQixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7YUFBTSxJQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OytCQUVFLE1BQU07aUNBQ04sTUFBTTtxQ0FFTixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO3NDQUlyQyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUNBSXpDLFlBQVksU0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBZTFDLDBCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0EzQlksbUJBQW1COzs7SUFDOUIsMkNBQTRDOztJQUM1Qyw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZE1vdXNlV2hlZWxdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW91c2VXaGVlbERpcmVjdGl2ZSB7XHJcbiAgQE91dHB1dCgpIG1vdXNlV2hlZWxVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbW91c2VXaGVlbERvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBbJyRldmVudCddKSBvbk1vdXNlV2hlZWxDaHJvbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5tb3VzZVdoZWVsRnVuYyhldmVudCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIFsnJGV2ZW50J10pIG9uTW91c2VXaGVlbEZpcmVmb3goZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5tb3VzZVdoZWVsRnVuYyhldmVudCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdvbm1vdXNld2hlZWwnLCBbJyRldmVudCddKSBvbk1vdXNlV2hlZWxJRShldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm1vdXNlV2hlZWxGdW5jKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG1vdXNlV2hlZWxGdW5jKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50ID0gd2luZG93LmV2ZW50IDtcclxuICAgIHZhciBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAoZXZlbnQud2hlZWxEZWx0YSB8fCAtZXZlbnQuZGV0YWlsKSkpO1xyXG4gICAgaWYoZGVsdGEgPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1vdXNlV2hlZWxVcC5lbWl0KGV2ZW50KTtcIik7XHJcbiAgICAgICAgdGhpcy5tb3VzZVdoZWVsVXAuZW1pdChldmVudCk7XHJcbiAgICB9IGVsc2UgaWYoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1vdXNlV2hlZWxEb3duLmVtaXQoZXZlbnQpO1wiKTtcclxuICAgICAgICB0aGlzLm1vdXNlV2hlZWxEb3duLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=