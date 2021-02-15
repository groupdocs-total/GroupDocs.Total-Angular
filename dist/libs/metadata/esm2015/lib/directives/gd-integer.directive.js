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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtaW50ZWdlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nZC1pbnRlZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2QyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQVMzQixZQUFvQixPQUFnQixFQUFVLE9BQW1CO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUnpELGdCQUFXLEdBQUc7WUFDbEIsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUTtTQUN2RSxDQUFDO0lBTWdFLENBQUM7Ozs7OztJQUo3RCxTQUFTLENBQUMsS0FBYTtRQUMzQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBS0QsU0FBUyxDQUFDLEtBQW9CO1FBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE9BQU87U0FDVjs7Y0FFSyxPQUFPLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSzs7Y0FDbEQsUUFBUSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWM7O2NBQzVELElBQUksR0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUYsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLO1lBQzlDLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDNUosQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFsQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2FBQzFCOzs7O1lBSk8sT0FBTztZQUZLLFVBQVU7Ozt3QkFrQnpCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFWbkMseUNBRUk7Ozs7O0lBTVEscUNBQXdCOzs7OztJQUFFLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge05nTW9kZWx9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbZ2RJbnRlZ2VyXVwiXG59KVxuZXhwb3J0IGNsYXNzIEdkSW50ZWdlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBzcGVjaWFsS2V5cyA9IFsgXG4gICAgICAgICdCYWNrc3BhY2UnLCAnVGFiJywgJ0VuZCcsICdIb21lJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0RlbGV0ZSdcbiAgICAgIF07XG5cbiAgICBwcml2YXRlIGlzSW50ZWdlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpLm1hdGNoKG5ldyBSZWdFeHAoL14oXFwtKXswLDF9XFxkKiQvKSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNwZWNpYWxLZXlzLmluZGV4T2YoZXZlbnQua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudDogc3RyaW5nID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgY29uc3QgbmV4dDogc3RyaW5nID0gW2N1cnJlbnQuc2xpY2UoMCwgcG9zaXRpb24pLCBldmVudC5rZXksIGN1cnJlbnQuc2xpY2UocG9zaXRpb24pXS5qb2luKCcnKVxuICAgICAgICBpZiAobmV4dCAmJiAhdGhpcy5pc0ludGVnZXIobmV4dCkpIHtcbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5nTW9kZWwuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLm5nTW9kZWwuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSA9PT0gXCItXCIgPyAwIDogcGFyc2VJbnQodmFsdWUsIDEwKSwgeyBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U6IGZhbHNlLCBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=