/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as jquery from "jquery";
/** @type {?} */
const $ = jquery;
export class MouseWheelDirective {
    constructor() {
        this.mouseWheelUp = new EventEmitter();
        this.mouseWheelDown = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheelChrome(event) {
        this.mouseWheelFunc(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheelFirefox(event) {
        this.mouseWheelFunc(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheelIE(event) {
        this.mouseWheelFunc(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mouseWheelFunc(event) {
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
    }
}
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
if (false) {
    /** @type {?} */
    MouseWheelDirective.prototype.mouseWheelUp;
    /** @type {?} */
    MouseWheelDirective.prototype.mouseWheelDown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbW91c2V3aGVlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0IsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNO0FBS2hCLE1BQU0sT0FBTyxtQkFBbUI7SUFIaEM7UUFJWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBeUJoRCxDQUFDOzs7OztJQXZCeUMsa0JBQWtCLENBQUMsS0FBVTtRQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRTJDLG1CQUFtQixDQUFDLEtBQVU7UUFDeEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUV5QyxjQUFjLENBQUMsS0FBVTtRQUNqRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUU7O1lBQ2xCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzthQUFNLElBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7OzsyQkFFRSxNQUFNOzZCQUNOLE1BQU07aUNBRU4sWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztrQ0FJckMsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzZCQUl6QyxZQUFZLFNBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBWHhDLDJDQUE0Qzs7SUFDNUMsNkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RNb3VzZVdoZWVsXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vdXNlV2hlZWxEaXJlY3RpdmUge1xyXG4gIEBPdXRwdXQoKSBtb3VzZVdoZWVsVXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1vdXNlV2hlZWxEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZXdoZWVsJywgWyckZXZlbnQnXSkgb25Nb3VzZVdoZWVsQ2hyb21lKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubW91c2VXaGVlbEZ1bmMoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBbJyRldmVudCddKSBvbk1vdXNlV2hlZWxGaXJlZm94KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubW91c2VXaGVlbEZ1bmMoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignb25tb3VzZXdoZWVsJywgWyckZXZlbnQnXSkgb25Nb3VzZVdoZWVsSUUoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5tb3VzZVdoZWVsRnVuYyhldmVudCk7XHJcbiAgfVxyXG5cclxuICBtb3VzZVdoZWVsRnVuYyhldmVudDogYW55KSB7XHJcbiAgICBldmVudCA9IHdpbmRvdy5ldmVudCA7XHJcbiAgICB2YXIgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpKTtcclxuICAgIGlmKGRlbHRhID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5tb3VzZVdoZWVsVXAuZW1pdChldmVudCk7XCIpO1xyXG4gICAgICAgIHRoaXMubW91c2VXaGVlbFVwLmVtaXQoZXZlbnQpO1xyXG4gICAgfSBlbHNlIGlmKGRlbHRhIDwgMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5tb3VzZVdoZWVsRG93bi5lbWl0KGV2ZW50KTtcIik7XHJcbiAgICAgICAgdGhpcy5tb3VzZVdoZWVsRG93bi5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19