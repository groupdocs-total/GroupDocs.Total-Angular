/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
var DisabledCursorDirective = /** @class */ (function () {
    function DisabledCursorDirective() {
    }
    /**
     * @private
     * @return {?}
     */
    DisabledCursorDirective.prototype.updateCursor = /**
     * @private
     * @return {?}
     */
    function () {
        this.cursor = this.dis ? true : false;
    };
    /**
     * @return {?}
     */
    DisabledCursorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateCursor();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DisabledCursorDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.updateCursor();
    };
    DisabledCursorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdDisabledCursor]'
                },] }
    ];
    /** @nocollapse */
    DisabledCursorDirective.ctorParameters = function () { return []; };
    DisabledCursorDirective.propDecorators = {
        dis: [{ type: Input }],
        cursor: [{ type: HostBinding, args: ['class.inactive',] }]
    };
    return DisabledCursorDirective;
}());
export { DisabledCursorDirective };
if (false) {
    /** @type {?} */
    DisabledCursorDirective.prototype.dis;
    /** @type {?} */
    DisabledCursorDirective.prototype.cursor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQtY3Vyc29yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRTlGO0lBT0U7SUFDQSxDQUFDOzs7OztJQUlPLDhDQUFZOzs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7OztzQkFHRSxLQUFLO3lCQUtMLFdBQVcsU0FBQyxnQkFBZ0I7O0lBYS9CLDhCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FwQlksdUJBQXVCOzs7SUFFbEMsc0NBQXNCOztJQUt0Qix5Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZERpc2FibGVkQ3Vyc29yXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERpc2FibGVkQ3Vyc29yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBkaXM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbmFjdGl2ZScpIGN1cnNvcjogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDdXJzb3IoKSB7XHJcbiAgICB0aGlzLmN1cnNvciA9IHRoaXMuZGlzID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKVxyXG4gIH1cclxufVxyXG4iXX0=