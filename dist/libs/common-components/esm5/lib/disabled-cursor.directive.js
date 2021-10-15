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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQtY3Vyc29yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRTlGO0lBT0U7SUFDQSxDQUFDOzs7OztJQUlPLDhDQUFZOzs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7OztzQkFHRSxLQUFLO3lCQUtMLFdBQVcsU0FBQyxnQkFBZ0I7O0lBYS9CLDhCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FwQlksdUJBQXVCOzs7SUFFbEMsc0NBQXNCOztJQUt0Qix5Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZERpc2FibGVkQ3Vyc29yXSdcbn0pXG5leHBvcnQgY2xhc3MgRGlzYWJsZWRDdXJzb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZGlzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbmFjdGl2ZScpIGN1cnNvcjogYm9vbGVhbjtcblxuICBwcml2YXRlIHVwZGF0ZUN1cnNvcigpIHtcbiAgICB0aGlzLmN1cnNvciA9IHRoaXMuZGlzID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpXG4gIH1cbn1cbiJdfQ==