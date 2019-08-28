/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';
export class OutsideDirective {
    /**
     * @param {?} _elRef
     */
    constructor(_elRef) {
        this._elRef = _elRef;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.globalClick = fromEvent(document, 'click');
        this.globalClick.pipe(delay(0)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.onGlobalClick(event);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onGlobalClick(event) {
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
    }
    /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    isDescendant(parent, child) {
        /** @type {?} */
        let node = child;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            else {
                node = node.parentNode;
            }
        }
        return false;
    }
}
OutsideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdOutside]'
            },] }
];
/** @nocollapse */
OutsideDirective.ctorParameters = () => [
    { type: ElementRef }
];
OutsideDirective.propDecorators = {
    clickOutsideEnabled: [{ type: Input }],
    clickOutside: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2QyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBTTNCLFlBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQVcsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsV0FBVyxLQUFJLENBQUM7Ozs7O0lBRWhCLGFBQWEsQ0FBQyxLQUFXO1FBQ3ZCLElBQUksS0FBSyxZQUFZLFVBQVUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQU0sSUFBSSxFQUFFO1lBQ3JFLElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDckIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7b0JBQzlCLEtBQUssRUFBRSxLQUFLO2lCQUNiLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNyQixNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztvQkFDOUIsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSzs7WUFDcEIsSUFBSSxHQUFHLEtBQUs7UUFDaEIsT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4QjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7O1lBTjRELFVBQVU7OztrQ0FVcEUsS0FBSzsyQkFDTCxNQUFNOzs7Ozs7O0lBSFAsdUNBQXNDOztJQUV0QywrQ0FBc0M7O0lBQ3RDLHdDQUE0Qzs7Ozs7SUFFaEMsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RPdXRzaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgT3V0c2lkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBnbG9iYWxDbGljazpPYnNlcnZhYmxlPEV2ZW50PjtcblxuICBASW5wdXQoKSBjbGlja091dHNpZGVFbmFibGVkOiBib29sZWFuO1xuICBAT3V0cHV0KCkgY2xpY2tPdXRzaWRlOkV2ZW50RW1pdHRlcjxPYmplY3Q+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOkVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmNsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2xvYmFsQ2xpY2sgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICAgIHRoaXMuZ2xvYmFsQ2xpY2sucGlwZShkZWxheSgwKSkuc3Vic2NyaWJlKChldmVudDpFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm9uR2xvYmFsQ2xpY2soZXZlbnQpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG5cbiAgb25HbG9iYWxDbGljayhldmVudDpFdmVudCkge1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgdGhpcy5jbGlja091dHNpZGVFbmFibGVkICA9PT0gdHJ1ZSkge1xuICAgICAgaWYodGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgZXZlbnQudGFyZ2V0KSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KHtcbiAgICAgICAgICB0YXJnZXQ6IChldmVudC50YXJnZXQgfHwgbnVsbCksXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdCh7XG4gICAgICAgICAgdGFyZ2V0OiAoZXZlbnQudGFyZ2V0IHx8IG51bGwpLFxuICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gICAgbGV0IG5vZGUgPSBjaGlsZDtcbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19