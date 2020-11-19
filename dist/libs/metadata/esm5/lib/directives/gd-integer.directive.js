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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtaW50ZWdlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nZC1pbnRlZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QztJQVlJLDRCQUFvQixPQUFnQixFQUFVLE9BQW1CO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUnpELGdCQUFXLEdBQUc7WUFDbEIsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUTtTQUN2RSxDQUFDO0lBTWdFLENBQUM7Ozs7OztJQUo3RCxzQ0FBUzs7Ozs7SUFBakIsVUFBa0IsS0FBYTtRQUMzQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBS0Qsc0NBQVM7Ozs7SUFEVCxVQUNVLEtBQW9CO1FBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE9BQU87U0FDVjs7WUFFSyxPQUFPLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSzs7WUFDbEQsUUFBUSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWM7O1lBQzVELElBQUksR0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUYsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBQzs7Z0JBQ2xDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLO1lBQzlDLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDNUosQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkFsQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs7OztnQkFKTyxPQUFPO2dCQUZLLFVBQVU7Ozs0QkFrQnpCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBcUJ2Qyx5QkFBQztDQUFBLEFBbkNELElBbUNDO1NBaENZLGtCQUFrQjs7Ozs7O0lBQzNCLHlDQUVJOzs7OztJQU1RLHFDQUF3Qjs7Ozs7SUFBRSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7TmdNb2RlbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiBcIltnZEludGVnZXJdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEdkSW50ZWdlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIHNwZWNpYWxLZXlzID0gWyBcclxuICAgICAgICAnQmFja3NwYWNlJywgJ1RhYicsICdFbmQnLCAnSG9tZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdEZWxldGUnXHJcbiAgICAgIF07XHJcblxyXG4gICAgcHJpdmF0ZSBpc0ludGVnZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpLm1hdGNoKG5ldyBSZWdFeHAoL14oXFwtKXswLDF9XFxkKiQvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BlY2lhbEtleXMuaW5kZXhPZihldmVudC5rZXkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IHN0cmluZyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICBjb25zdCBuZXh0OiBzdHJpbmcgPSBbY3VycmVudC5zbGljZSgwLCBwb3NpdGlvbiksIGV2ZW50LmtleSwgY3VycmVudC5zbGljZShwb3NpdGlvbildLmpvaW4oJycpXHJcbiAgICAgICAgaWYgKG5leHQgJiYgIXRoaXMuaXNJbnRlZ2VyKG5leHQpKSB7XHJcbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uZ01vZGVsLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5uZ01vZGVsLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUgPT09IFwiLVwiID8gMCA6IHBhcnNlSW50KHZhbHVlLCAxMCksIHsgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlOiBmYWxzZSwgZW1pdFZpZXdUb01vZGVsQ2hhbmdlOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19