/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { SelectionService } from './selection.service';
import { EditHtmlService } from "./edit-html.service";
export class EditorDirective {
    /**
     * @param {?} _selectionService
     * @param {?} _htmlService
     */
    constructor(_selectionService, _htmlService) {
        this._selectionService = _selectionService;
        this._htmlService = _htmlService;
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        this.text = event.target;
        if (this.isIE) {
            if (this.text.innerHTML) {
                /** @type {?} */
                const html = this.text.innerHTML.toString();
                this._htmlService.observer.next(html);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseleave(event) {
        this._selectionService.captureSelection();
        // this code is required to fix IE11 issue - it doesn't trigger blur event, since that we need to save updated HTML here
        if (this.isIE) {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        event.preventDefault();
        this._selectionService.restoreSelection();
        if (this.text.innerHTML) {
            /** @type {?} */
            const html = this.text.innerHTML.toString();
            this._htmlService.observer.next(html);
        }
        else {
            this._htmlService.observer.next(event.target.innerHTML.toString());
        }
    }
}
EditorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdEditor]'
            },] }
];
/** @nocollapse */
EditorDirective.ctorParameters = () => [
    { type: SelectionService },
    { type: EditHtmlService }
];
EditorDirective.propDecorators = {
    text: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onMouseleave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBS3BELE1BQU0sT0FBTyxlQUFlOzs7OztJQUsxQixZQUFvQixpQkFBbUMsRUFBVSxZQUE2QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBRnRGLFNBQUksR0FBd0IsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBR3BHLENBQUM7Ozs7O0lBR00sT0FBTyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNYLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7O3NCQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Ozs7O0lBR00sWUFBWSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsd0hBQXdIO1FBQ3hILElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Ozs7SUFHTSxNQUFNLENBQUMsS0FBSztRQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFMTyxnQkFBZ0I7WUFDaEIsZUFBZTs7O21CQU1wQixLQUFLO3NCQU9MLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBV2hDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBU3JDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUEzQmhDLCtCQUFtQjs7Ozs7SUFFbkIsK0JBQW9HOzs7OztJQUV4Riw0Q0FBMkM7Ozs7O0lBQUUsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NlbGVjdGlvblNlcnZpY2V9IGZyb20gJy4vc2VsZWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0VkaXRIdG1sU2VydmljZX0gZnJvbSBcIi4vZWRpdC1odG1sLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkRWRpdG9yXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvckRpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgdGV4dDogYW55O1xyXG5cclxuICBwcml2YXRlIGlzSUU6IGJvb2xlYW4gPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSwgcHJpdmF0ZSBfaHRtbFNlcnZpY2U6IEVkaXRIdG1sU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbklucHV0KGV2ZW50KSB7XHJcbiAgICB0aGlzLnRleHQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZih0aGlzLmlzSUUpe1xyXG4gICAgICBpZiAodGhpcy50ZXh0LmlubmVySFRNTCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLnRleHQuaW5uZXJIVE1MLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5faHRtbFNlcnZpY2Uub2JzZXJ2ZXIubmV4dChodG1sKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uTW91c2VsZWF2ZShldmVudCkge1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKCk7XHJcbiAgICAvLyB0aGlzIGNvZGUgaXMgcmVxdWlyZWQgdG8gZml4IElFMTEgaXNzdWUgLSBpdCBkb2Vzbid0IHRyaWdnZXIgYmx1ciBldmVudCwgc2luY2UgdGhhdCB3ZSBuZWVkIHRvIHNhdmUgdXBkYXRlZCBIVE1MIGhlcmVcclxuICAgIGlmKHRoaXMuaXNJRSl7XHJcbiAgICAgIHRoaXMuX2h0bWxTZXJ2aWNlLm9ic2VydmVyLm5leHQoZXZlbnQudGFyZ2V0LmlubmVySFRNTC50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkJsdXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuICAgIGlmICh0aGlzLnRleHQuaW5uZXJIVE1MKSB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLnRleHQuaW5uZXJIVE1MLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX2h0bWxTZXJ2aWNlLm9ic2VydmVyLm5leHQoaHRtbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9odG1sU2VydmljZS5vYnNlcnZlci5uZXh0KGV2ZW50LnRhcmdldC5pbm5lckhUTUwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==