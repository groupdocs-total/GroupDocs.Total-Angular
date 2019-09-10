/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
var RotationDirective = /** @class */ (function () {
    function RotationDirective() {
        this.withMargin = true;
    }
    /**
     * @private
     * @return {?}
     */
    RotationDirective.prototype.updateCursor = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.angle === "string") {
            this.angle = parseInt(this.angle);
        }
        if (this.angle) {
            this.animation = 'none';
            this.transition = 'none';
            this.transform = 'rotate(' + this.angle + 'deg)';
        }
        else if (this.angle === 0 && this.animation) {
            this.animation = null;
            this.transition = null;
            this.transform = null;
        }
        if (this.withMargin) {
            if (this.angle === 90 || this.angle === 270 || this.angle === -90 || this.angle === -270) {
                if (this.isHtmlMode) {
                    if (this.isLandscape()) {
                        this.margin = '164px 254px';
                    }
                    else {
                        this.margin = '-111px 254px';
                    }
                }
                else {
                    if (this.isLandscape()) {
                        this.margin = '129px 100px -79px';
                    }
                    else {
                        this.margin = '-72px 100px -79px';
                    }
                }
            }
            else if (this.angle === -180 || this.angle === 180) {
                this.margin = '280px';
            }
            else {
                this.margin = null;
            }
        }
    };
    /**
     * @return {?}
     */
    RotationDirective.prototype.isLandscape = /**
     * @return {?}
     */
    function () {
        return this.width > this.height;
    };
    /**
     * @return {?}
     */
    RotationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateCursor();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    RotationDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.updateCursor();
    };
    RotationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdRotation]'
                },] }
    ];
    /** @nocollapse */
    RotationDirective.ctorParameters = function () { return []; };
    RotationDirective.propDecorators = {
        angle: [{ type: Input }],
        isHtmlMode: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        withMargin: [{ type: Input }],
        animation: [{ type: HostBinding, args: ['style.animation',] }],
        transition: [{ type: HostBinding, args: ['style.transition-property',] }],
        transform: [{ type: HostBinding, args: ['style.transform',] }],
        margin: [{ type: HostBinding, args: ['style.margin',] }]
    };
    return RotationDirective;
}());
export { RotationDirective };
if (false) {
    /** @type {?} */
    RotationDirective.prototype.angle;
    /** @type {?} */
    RotationDirective.prototype.isHtmlMode;
    /** @type {?} */
    RotationDirective.prototype.width;
    /** @type {?} */
    RotationDirective.prototype.height;
    /** @type {?} */
    RotationDirective.prototype.withMargin;
    /** @type {?} */
    RotationDirective.prototype.animation;
    /** @type {?} */
    RotationDirective.prototype.transition;
    /** @type {?} */
    RotationDirective.prototype.transform;
    /** @type {?} */
    RotationDirective.prototype.margin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUU5RjtJQWlCRTtRQVJTLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFTM0IsQ0FBQzs7Ozs7SUFFTyx3Q0FBWTs7OztJQUFwQjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNsRDthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDeEYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO3FCQUM5QjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztxQkFDbkM7aUJBQ0Y7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7SUFFSCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHVDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQzs7Z0JBckVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7O3dCQUdFLEtBQUs7NkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFFTCxXQUFXLFNBQUMsaUJBQWlCOzZCQUM3QixXQUFXLFNBQUMsMkJBQTJCOzRCQUN2QyxXQUFXLFNBQUMsaUJBQWlCO3lCQUU3QixXQUFXLFNBQUMsY0FBYzs7SUF3RDdCLHdCQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0FwRVksaUJBQWlCOzs7SUFFNUIsa0NBQXVCOztJQUN2Qix1Q0FBNkI7O0lBQzdCLGtDQUF1Qjs7SUFDdkIsbUNBQXdCOztJQUN4Qix1Q0FBMkI7O0lBRTNCLHNDQUFrRDs7SUFDbEQsdUNBQTZEOztJQUM3RCxzQ0FBa0Q7O0lBRWxELG1DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkUm90YXRpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGFuZ2xlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaXNIdG1sTW9kZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHdpdGhNYXJnaW4gPSB0cnVlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmFuaW1hdGlvbicpIGFuaW1hdGlvbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNpdGlvbi1wcm9wZXJ0eScpIHRyYW5zaXRpb246IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbicpIG1hcmdpbjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ3Vyc29yKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmFuZ2xlID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgdGhpcy5hbmdsZSA9IHBhcnNlSW50KHRoaXMuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmFuZ2xlKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgdGhpcy5hbmdsZSArICdkZWcpJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hbmdsZSA9PT0gMCAmJiB0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9IG51bGw7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy53aXRoTWFyZ2luKSB7XHJcbiAgICAgIGlmICh0aGlzLmFuZ2xlID09PSA5MCB8fCB0aGlzLmFuZ2xlID09PSAyNzAgfHwgdGhpcy5hbmdsZSA9PT0gLTkwIHx8IHRoaXMuYW5nbGUgPT09IC0yNzApIHtcclxuICAgICAgICBpZiAodGhpcy5pc0h0bWxNb2RlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0xhbmRzY2FwZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJzE2NHB4IDI1NHB4JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJy0xMTFweCAyNTRweCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnMTI5cHggMTAwcHggLTc5cHgnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnLTcycHggMTAwcHggLTc5cHgnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID09PSAtMTgwIHx8IHRoaXMuYW5nbGUgPT09IDE4MCkge1xyXG4gICAgICAgIHRoaXMubWFyZ2luID0gJzI4MHB4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1hcmdpbiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBpc0xhbmRzY2FwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoID4gdGhpcy5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ3Vyc29yKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=