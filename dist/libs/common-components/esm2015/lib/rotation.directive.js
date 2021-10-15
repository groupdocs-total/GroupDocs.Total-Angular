/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
export class RotationDirective {
    constructor() {
        this.withMargin = true;
    }
    /**
     * @private
     * @return {?}
     */
    updateCursor() {
        if (typeof this.angle === "string") {
            this.angle = parseInt(this.angle, 10);
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
    }
    /**
     * @return {?}
     */
    isLandscape() {
        return this.width > this.height;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateCursor();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.updateCursor();
    }
}
RotationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdRotation]'
            },] }
];
/** @nocollapse */
RotationDirective.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUs5RixNQUFNLE9BQU8saUJBQWlCO0lBYzVCO1FBUlMsZUFBVSxHQUFHLElBQUksQ0FBQztJQVMzQixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNsRDthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDeEYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO3FCQUM5QjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztxQkFDbkM7aUJBQ0Y7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7SUFFSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7OztvQkFHRSxLQUFLO3lCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBRUwsV0FBVyxTQUFDLGlCQUFpQjt5QkFDN0IsV0FBVyxTQUFDLDJCQUEyQjt3QkFDdkMsV0FBVyxTQUFDLGlCQUFpQjtxQkFFN0IsV0FBVyxTQUFDLGNBQWM7Ozs7SUFWM0Isa0NBQXVCOztJQUN2Qix1Q0FBNkI7O0lBQzdCLGtDQUF1Qjs7SUFDdkIsbUNBQXdCOztJQUN4Qix1Q0FBMkI7O0lBRTNCLHNDQUFrRDs7SUFDbEQsdUNBQTZEOztJQUM3RCxzQ0FBa0Q7O0lBRWxELG1DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkUm90YXRpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGFuZ2xlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaXNIdG1sTW9kZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHdpdGhNYXJnaW4gPSB0cnVlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmFuaW1hdGlvbicpIGFuaW1hdGlvbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNpdGlvbi1wcm9wZXJ0eScpIHRyYW5zaXRpb246IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbicpIG1hcmdpbjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ3Vyc29yKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmFuZ2xlID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgdGhpcy5hbmdsZSA9IHBhcnNlSW50KHRoaXMuYW5nbGUsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hbmdsZSkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9ICdub25lJztcclxuICAgICAgdGhpcy50cmFuc2l0aW9uID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPT09IDAgJiYgdGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSBudWxsO1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSBudWxsO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMud2l0aE1hcmdpbikge1xyXG4gICAgICBpZiAodGhpcy5hbmdsZSA9PT0gOTAgfHwgdGhpcy5hbmdsZSA9PT0gMjcwIHx8IHRoaXMuYW5nbGUgPT09IC05MCB8fCB0aGlzLmFuZ2xlID09PSAtMjcwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNIdG1sTW9kZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNMYW5kc2NhcGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICcxNjRweCAyNTRweCc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICctMTExcHggMjU0cHgnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0xhbmRzY2FwZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJzEyOXB4IDEwMHB4IC03OXB4JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJy03MnB4IDEwMHB4IC03OXB4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmdsZSA9PT0gLTE4MCB8fCB0aGlzLmFuZ2xlID09PSAxODApIHtcclxuICAgICAgICB0aGlzLm1hcmdpbiA9ICcyODBweCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tYXJnaW4gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaXNMYW5kc2NhcGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCA+IHRoaXMuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKVxyXG4gIH1cclxuXHJcbn1cclxuIl19