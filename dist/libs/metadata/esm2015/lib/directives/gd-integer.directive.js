/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgModel } from "@angular/forms";
export class GdIntegerDirective {
    /**
     * @param {?} ngModel
     * @param {?} element
     */
    constructor(ngModel, element) {
        this.ngModel = ngModel;
        this.element = element;
        this.specialKeys = [
            'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
        ];
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isInteger(value) {
        return String(value).match(new RegExp(/^(\-){0,1}\d*$/));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        /** @type {?} */
        const current = this.element.nativeElement.value;
        /** @type {?} */
        const position = this.element.nativeElement.selectionStart;
        /** @type {?} */
        const next = [current.slice(0, position), event.key, current.slice(position)].join('');
        if (next && !this.isInteger(next)) {
            event.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngModel.control.valueChanges.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const value = this.element.nativeElement.value;
            if (!value)
                return;
            this.ngModel.control.setValue(value === "-" ? 0 : parseInt(value, 10), { emitModelToViewChange: false, emitViewToModelChange: true, emitEvent: false });
        }));
    }
}
GdIntegerDirective.decorators = [
    { type: Directive, args: [{
                selector: "[gdInteger]"
            },] }
];
/** @nocollapse */
GdIntegerDirective.ctorParameters = () => [
    { type: NgModel },
    { type: ElementRef }
];
GdIntegerDirective.propDecorators = {
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    GdIntegerDirective.prototype.specialKeys;
    /**
     * @type {?}
     * @private
     */
    GdIntegerDirective.prototype.ngModel;
    /**
     * @type {?}
     * @private
     */
    GdIntegerDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtaW50ZWdlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nZC1pbnRlZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2QyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQVMzQixZQUFvQixPQUFnQixFQUFVLE9BQW1CO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUnpELGdCQUFXLEdBQUc7WUFDbEIsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUTtTQUN2RSxDQUFDO0lBTWdFLENBQUM7Ozs7OztJQUo3RCxTQUFTLENBQUMsS0FBYTtRQUMzQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBS0QsU0FBUyxDQUFDLEtBQW9CO1FBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE9BQU87U0FDVjs7Y0FFSyxPQUFPLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSzs7Y0FDbEQsUUFBUSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWM7O2NBQzVELElBQUksR0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUYsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLO1lBQzlDLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDNUosQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFsQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2FBQzFCOzs7O1lBSk8sT0FBTztZQUZLLFVBQVU7Ozt3QkFrQnpCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFWbkMseUNBRUk7Ozs7O0lBTVEscUNBQXdCOzs7OztJQUFFLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtOZ01vZGVsfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6IFwiW2dkSW50ZWdlcl1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RJbnRlZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgc3BlY2lhbEtleXMgPSBbIFxyXG4gICAgICAgICdCYWNrc3BhY2UnLCAnVGFiJywgJ0VuZCcsICdIb21lJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0RlbGV0ZSdcclxuICAgICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGlzSW50ZWdlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSkubWF0Y2gobmV3IFJlZ0V4cCgvXihcXC0pezAsMX1cXGQqJC8pKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWwsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXHJcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5zcGVjaWFsS2V5cy5pbmRleE9mKGV2ZW50LmtleSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY3VycmVudDogc3RyaW5nID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IG5leHQ6IHN0cmluZyA9IFtjdXJyZW50LnNsaWNlKDAsIHBvc2l0aW9uKSwgZXZlbnQua2V5LCBjdXJyZW50LnNsaWNlKHBvc2l0aW9uKV0uam9pbignJylcclxuICAgICAgICBpZiAobmV4dCAmJiAhdGhpcy5pc0ludGVnZXIobmV4dCkpIHtcclxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5nTW9kZWwuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLm5nTW9kZWwuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSA9PT0gXCItXCIgPyAwIDogcGFyc2VJbnQodmFsdWUsIDEwKSwgeyBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U6IGZhbHNlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=