/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { SelectionService } from './selection.service';
import { EditHtmlService } from "./edit-html.service";
var EditorDirective = /** @class */ (function () {
    function EditorDirective(_selectionService, _htmlService) {
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EditorDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.text = event.target;
        if (this.isIE) {
            if (this.text.innerHTML) {
                /** @type {?} */
                var html = this.text.innerHTML.toString();
                this._htmlService.observer.next(html);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditorDirective.prototype.onMouseleave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._selectionService.captureSelection();
        // this code is required to fix IE11 issue - it doesn't trigger blur event, since that we need to save updated HTML here
        if (this.isIE) {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EditorDirective.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this._selectionService.restoreSelection();
        if (this.text.innerHTML) {
            /** @type {?} */
            var html = this.text.innerHTML.toString();
            this._htmlService.observer.next(html);
        }
        else {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    };
    EditorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdEditor]'
                },] }
    ];
    /** @nocollapse */
    EditorDirective.ctorParameters = function () { return [
        { type: SelectionService },
        { type: EditHtmlService }
    ]; };
    EditorDirective.propDecorators = {
        text: [{ type: Input }],
        onInput: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onMouseleave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
    };
    return EditorDirective;
}());
export { EditorDirective };
if (false) {
    /** @type {?} */
    EditorDirective.prototype.text;
    /**
     * @type {?}
     * @private
     */
    EditorDirective.prototype.isIE;
    /**
     * @type {?}
     * @private
     */
    EditorDirective.prototype._selectionService;
    /**
     * @type {?}
     * @private
     */
    EditorDirective.prototype._htmlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXBEO0lBUUUseUJBQW9CLGlCQUFtQyxFQUFVLFlBQTZCO1FBQTFFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFGdEYsU0FBSSxHQUF3QixLQUFLLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFHcEcsQ0FBQzs7Ozs7SUFHTSxpQ0FBTzs7OztJQURkLFVBQ2UsS0FBSztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTs7b0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFHTSxzQ0FBWTs7OztJQURuQixVQUNvQixLQUFLO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLHdIQUF3SDtRQUN4SCxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7Ozs7O0lBR00sZ0NBQU07Ozs7SUFEYixVQUNjLEtBQUs7UUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFMTyxnQkFBZ0I7Z0JBQ2hCLGVBQWU7Ozt1QkFNcEIsS0FBSzswQkFPTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOytCQVdoQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQVNyQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQVdsQyxzQkFBQztDQUFBLEFBMUNELElBMENDO1NBdkNZLGVBQWU7OztJQUMxQiwrQkFBbUI7Ozs7O0lBRW5CLCtCQUFvRzs7Ozs7SUFFeEYsNENBQTJDOzs7OztJQUFFLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VsZWN0aW9uU2VydmljZX0gZnJvbSAnLi9zZWxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQge0VkaXRIdG1sU2VydmljZX0gZnJvbSBcIi4vZWRpdC1odG1sLnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkRWRpdG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgdGV4dDogYW55O1xuXG4gIHByaXZhdGUgaXNJRTogYm9vbGVhbiA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGVjdGlvblNlcnZpY2U6IFNlbGVjdGlvblNlcnZpY2UsIHByaXZhdGUgX2h0bWxTZXJ2aWNlOiBFZGl0SHRtbFNlcnZpY2UpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnRleHQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGhpcy5pc0lFKXtcbiAgICAgIGlmICh0aGlzLnRleHQuaW5uZXJIVE1MKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLnRleHQuaW5uZXJIVE1MLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX2h0bWxTZXJ2aWNlLm9ic2VydmVyLm5leHQoaHRtbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbk1vdXNlbGVhdmUoZXZlbnQpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICAvLyB0aGlzIGNvZGUgaXMgcmVxdWlyZWQgdG8gZml4IElFMTEgaXNzdWUgLSBpdCBkb2Vzbid0IHRyaWdnZXIgYmx1ciBldmVudCwgc2luY2UgdGhhdCB3ZSBuZWVkIHRvIHNhdmUgdXBkYXRlZCBIVE1MIGhlcmVcbiAgICBpZih0aGlzLmlzSUUpe1xuICAgICAgdGhpcy5faHRtbFNlcnZpY2Uub2JzZXJ2ZXIubmV4dChldmVudC50YXJnZXQuaW5uZXJIVE1MLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25CbHVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgICBpZiAodGhpcy50ZXh0LmlubmVySFRNTCkge1xuICAgICAgY29uc3QgaHRtbCA9IHRoaXMudGV4dC5pbm5lckhUTUwudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuX2h0bWxTZXJ2aWNlLm9ic2VydmVyLm5leHQoaHRtbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2h0bWxTZXJ2aWNlLm9ic2VydmVyLm5leHQoZXZlbnQudGFyZ2V0LmlubmVySFRNTC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==