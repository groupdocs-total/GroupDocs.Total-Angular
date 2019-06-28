import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
var DisabledCursorDirective = /** @class */ (function () {
    function DisabledCursorDirective() {
    }
    DisabledCursorDirective.prototype.updateCursor = function () {
        this.cursor = this.dis ? 'not-allowed' : 'pointer';
    };
    DisabledCursorDirective.prototype.ngOnInit = function () {
        this.updateCursor();
    };
    DisabledCursorDirective.prototype.ngOnChanges = function (changes) {
        this.updateCursor();
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
    return DisabledCursorDirective;
}());
export { DisabledCursorDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQtY3Vyc29yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBSzlGO0lBSUU7SUFDQSxDQUFDO0lBSU8sOENBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFqQlE7UUFBUixLQUFLLEVBQUU7O3dEQUFjO0lBS087UUFBNUIsV0FBVyxDQUFDLGNBQWMsQ0FBQzs7MkRBQWdCO0lBUGpDLHVCQUF1QjtRQUhuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1NBQy9CLENBQUM7O09BQ1csdUJBQXVCLENBb0JuQztJQUFELDhCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2REaXNhYmxlZEN1cnNvcl0nXG59KVxuZXhwb3J0IGNsYXNzIERpc2FibGVkQ3Vyc29yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGRpczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSB1cGRhdGVDdXJzb3IoKSB7XG4gICAgdGhpcy5jdXJzb3IgPSB0aGlzLmRpcyA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcic7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ3Vyc29yKClcbiAgfVxufVxuIl19