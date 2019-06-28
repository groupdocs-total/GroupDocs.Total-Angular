import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
let DisabledCursorDirective = class DisabledCursorDirective {
    constructor() {
    }
    updateCursor() {
        this.cursor = this.dis ? 'not-allowed' : 'pointer';
    }
    ngOnInit() {
        this.updateCursor();
    }
    ngOnChanges(changes) {
        this.updateCursor();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], DisabledCursorDirective.prototype, "dis", void 0);
tslib_1.__decorate([
    HostBinding('style.cursor'),
    tslib_1.__metadata("design:type", String)
], DisabledCursorDirective.prototype, "cursor", void 0);
DisabledCursorDirective = tslib_1.__decorate([
    Directive({
        selector: '[gdDisabledCursor]'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DisabledCursorDirective);
export { DisabledCursorDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQtY3Vyc29yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBSzlGLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBSWxDO0lBQ0EsQ0FBQztJQUlPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0NBQ0YsQ0FBQTtBQWxCVTtJQUFSLEtBQUssRUFBRTs7b0RBQWM7QUFLTztJQUE1QixXQUFXLENBQUMsY0FBYyxDQUFDOzt1REFBZ0I7QUFQakMsdUJBQXVCO0lBSG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7S0FDL0IsQ0FBQzs7R0FDVyx1QkFBdUIsQ0FvQm5DO1NBcEJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkRGlzYWJsZWRDdXJzb3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBkaXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmN1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgdXBkYXRlQ3Vyc29yKCkge1xuICAgIHRoaXMuY3Vyc29yID0gdGhpcy5kaXMgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpXG4gIH1cbn1cbiJdfQ==