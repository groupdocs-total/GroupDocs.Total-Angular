/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgModel } from "@angular/forms";
var GdIntegerDirective = /** @class */ (function () {
    function GdIntegerDirective(ngModel, element) {
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
    GdIntegerDirective.prototype.isInteger = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return String(value).match(new RegExp(/^(\-){0,1}\d*$/));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GdIntegerDirective.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        /** @type {?} */
        var current = this.element.nativeElement.value;
        /** @type {?} */
        var position = this.element.nativeElement.selectionStart;
        /** @type {?} */
        var next = [current.slice(0, position), event.key, current.slice(position)].join('');
        if (next && !this.isInteger(next)) {
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    GdIntegerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngModel.control.valueChanges.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = _this.element.nativeElement.value;
            if (!value)
                return;
            _this.ngModel.control.setValue(value === "-" ? 0 : parseInt(value, 10), { emitModelToViewChange: false, emitViewToModelChange: true, emitEvent: false });
        }));
    };
    GdIntegerDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[gdInteger]"
                },] }
    ];
    /** @nocollapse */
    GdIntegerDirective.ctorParameters = function () { return [
        { type: NgModel },
        { type: ElementRef }
    ]; };
    GdIntegerDirective.propDecorators = {
        onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return GdIntegerDirective;
}());
export { GdIntegerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtaW50ZWdlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nZC1pbnRlZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QztJQVlJLDRCQUFvQixPQUFnQixFQUFVLE9BQW1CO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUnpELGdCQUFXLEdBQUc7WUFDbEIsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUTtTQUN2RSxDQUFDO0lBTWdFLENBQUM7Ozs7OztJQUo3RCxzQ0FBUzs7Ozs7SUFBakIsVUFBa0IsS0FBYTtRQUMzQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBS0Qsc0NBQVM7Ozs7SUFEVCxVQUNVLEtBQW9CO1FBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE9BQU87U0FDVjs7WUFFSyxPQUFPLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSzs7WUFDbEQsUUFBUSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWM7O1lBQzVELElBQUksR0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUYsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBQzs7Z0JBQ2xDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLO1lBQzlDLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDNUosQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkFsQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs7OztnQkFKTyxPQUFPO2dCQUZLLFVBQVU7Ozs0QkFrQnpCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBcUJ2Qyx5QkFBQztDQUFBLEFBbkNELElBbUNDO1NBaENZLGtCQUFrQjs7Ozs7O0lBQzNCLHlDQUVJOzs7OztJQU1RLHFDQUF3Qjs7Ozs7SUFBRSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtOZ01vZGVsfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2dkSW50ZWdlcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBHZEludGVnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgc3BlY2lhbEtleXMgPSBbIFxuICAgICAgICAnQmFja3NwYWNlJywgJ1RhYicsICdFbmQnLCAnSG9tZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdEZWxldGUnXG4gICAgICBdO1xuXG4gICAgcHJpdmF0ZSBpc0ludGVnZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKS5tYXRjaChuZXcgUmVnRXhwKC9eKFxcLSl7MCwxfVxcZCokLykpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdNb2RlbDogTmdNb2RlbCwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5zcGVjaWFsS2V5cy5pbmRleE9mKGV2ZW50LmtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IHN0cmluZyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICBjb25zdCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGNvbnN0IG5leHQ6IHN0cmluZyA9IFtjdXJyZW50LnNsaWNlKDAsIHBvc2l0aW9uKSwgZXZlbnQua2V5LCBjdXJyZW50LnNsaWNlKHBvc2l0aW9uKV0uam9pbignJylcbiAgICAgICAgaWYgKG5leHQgJiYgIXRoaXMuaXNJbnRlZ2VyKG5leHQpKSB7XG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5uZ01vZGVsLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5uZ01vZGVsLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUgPT09IFwiLVwiID8gMCA6IHBhcnNlSW50KHZhbHVlLCAxMCksIHsgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlOiBmYWxzZSwgZW1pdFZpZXdUb01vZGVsQ2hhbmdlOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19