/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
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
        this.globalClick.subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBSzdDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFNM0IsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFXLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVcsS0FBSSxDQUFDOzs7OztJQUVoQixhQUFhLENBQUMsS0FBVztRQUN2QixJQUFJLEtBQUssWUFBWSxVQUFVLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFNLElBQUksRUFBRTtZQUNyRSxJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDdEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO29CQUM5QixLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDckIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7b0JBQzlCLEtBQUssRUFBRSxJQUFJO2lCQUNaLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUs7O1lBQ3BCLElBQUksR0FBRyxLQUFLO1FBQ2hCLE9BQU8sSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7OztZQUw0RCxVQUFVOzs7a0NBU3BFLEtBQUs7MkJBQ0wsTUFBTTs7Ozs7OztJQUhQLHVDQUFzQzs7SUFFdEMsK0NBQXNDOztJQUN0Qyx3Q0FBNEM7Ozs7O0lBRWhDLGtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZE91dHNpZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBPdXRzaWRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGdsb2JhbENsaWNrOk9ic2VydmFibGU8RXZlbnQ+O1xuXG4gIEBJbnB1dCgpIGNsaWNrT3V0c2lkZUVuYWJsZWQ6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBjbGlja091dHNpZGU6RXZlbnRFbWl0dGVyPE9iamVjdD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6RWxlbWVudFJlZikge1xuICAgIHRoaXMuY2xpY2tPdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nbG9iYWxDbGljayA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gICAgdGhpcy5nbG9iYWxDbGljay5zdWJzY3JpYmUoKGV2ZW50OkV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMub25HbG9iYWxDbGljayhldmVudCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge31cblxuICBvbkdsb2JhbENsaWNrKGV2ZW50OkV2ZW50KSB7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCAmJiB0aGlzLmNsaWNrT3V0c2lkZUVuYWJsZWQgID09PSB0cnVlKSB7XG4gICAgICBpZih0aGlzLmlzRGVzY2VuZGFudCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQpID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQoe1xuICAgICAgICAgIHRhcmdldDogKGV2ZW50LnRhcmdldCB8fCBudWxsKSxcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KHtcbiAgICAgICAgICB0YXJnZXQ6IChldmVudC50YXJnZXQgfHwgbnVsbCksXG4gICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNEZXNjZW5kYW50KHBhcmVudCwgY2hpbGQpIHtcbiAgICBsZXQgbm9kZSA9IGNoaWxkO1xuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=