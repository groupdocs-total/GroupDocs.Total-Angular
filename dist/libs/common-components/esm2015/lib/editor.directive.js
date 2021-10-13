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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBS3BELE1BQU0sT0FBTyxlQUFlOzs7OztJQUsxQixZQUFvQixpQkFBbUMsRUFBVSxZQUE2QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBRnRGLFNBQUksR0FBd0IsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBR3BHLENBQUM7Ozs7O0lBR00sT0FBTyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNYLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7O3NCQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Ozs7O0lBR00sWUFBWSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsd0hBQXdIO1FBQ3hILElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Ozs7SUFHTSxNQUFNLENBQUMsS0FBSztRQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFMTyxnQkFBZ0I7WUFDaEIsZUFBZTs7O21CQU1wQixLQUFLO3NCQU9MLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBV2hDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBU3JDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUEzQmhDLCtCQUFtQjs7Ozs7SUFFbkIsK0JBQW9HOzs7OztJQUV4Riw0Q0FBMkM7Ozs7O0lBQUUsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWxlY3Rpb25TZXJ2aWNlfSBmcm9tICcuL3NlbGVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7RWRpdEh0bWxTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0LWh0bWwuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RFZGl0b3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG5cbiAgcHJpdmF0ZSBpc0lFOiBib29sZWFuID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSwgcHJpdmF0ZSBfaHRtbFNlcnZpY2U6IEVkaXRIdG1sU2VydmljZSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25JbnB1dChldmVudCkge1xuICAgIHRoaXMudGV4dCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZih0aGlzLmlzSUUpe1xuICAgICAgaWYgKHRoaXMudGV4dC5pbm5lckhUTUwpIHtcbiAgICAgICAgY29uc3QgaHRtbCA9IHRoaXMudGV4dC5pbm5lckhUTUwudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5faHRtbFNlcnZpY2Uub2JzZXJ2ZXIubmV4dChodG1sKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uTW91c2VsZWF2ZShldmVudCkge1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIC8vIHRoaXMgY29kZSBpcyByZXF1aXJlZCB0byBmaXggSUUxMSBpc3N1ZSAtIGl0IGRvZXNuJ3QgdHJpZ2dlciBibHVyIGV2ZW50LCBzaW5jZSB0aGF0IHdlIG5lZWQgdG8gc2F2ZSB1cGRhdGVkIEhUTUwgaGVyZVxuICAgIGlmKHRoaXMuaXNJRSl7XG4gICAgICB0aGlzLl9odG1sU2VydmljZS5vYnNlcnZlci5uZXh0KGV2ZW50LnRhcmdldC5pbm5lckhUTUwudG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkJsdXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpO1xuICAgIGlmICh0aGlzLnRleHQuaW5uZXJIVE1MKSB7XG4gICAgICBjb25zdCBodG1sID0gdGhpcy50ZXh0LmlubmVySFRNTC50b1N0cmluZygpO1xuICAgICAgdGhpcy5faHRtbFNlcnZpY2Uub2JzZXJ2ZXIubmV4dChodG1sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faHRtbFNlcnZpY2Uub2JzZXJ2ZXIubmV4dChldmVudC50YXJnZXQuaW5uZXJIVE1MLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxufVxuIl19