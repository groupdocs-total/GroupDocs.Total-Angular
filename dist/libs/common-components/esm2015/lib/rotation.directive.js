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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUs5RixNQUFNLE9BQU8saUJBQWlCO0lBYzVCO1FBUlMsZUFBVSxHQUFHLElBQUksQ0FBQztJQVMzQixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNsRDthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDeEYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO3FCQUM5QjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztxQkFDbkM7aUJBQ0Y7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7SUFFSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7OztvQkFHRSxLQUFLO3lCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBRUwsV0FBVyxTQUFDLGlCQUFpQjt5QkFDN0IsV0FBVyxTQUFDLDJCQUEyQjt3QkFDdkMsV0FBVyxTQUFDLGlCQUFpQjtxQkFFN0IsV0FBVyxTQUFDLGNBQWM7Ozs7SUFWM0Isa0NBQXVCOztJQUN2Qix1Q0FBNkI7O0lBQzdCLGtDQUF1Qjs7SUFDdkIsbUNBQXdCOztJQUN4Qix1Q0FBMkI7O0lBRTNCLHNDQUFrRDs7SUFDbEQsdUNBQTZEOztJQUM3RCxzQ0FBa0Q7O0lBRWxELG1DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkUm90YXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBhbmdsZTogbnVtYmVyO1xuICBASW5wdXQoKSBpc0h0bWxNb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgd2l0aE1hcmdpbiA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5hbmltYXRpb24nKSBhbmltYXRpb246IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2l0aW9uLXByb3BlcnR5JykgdHJhbnNpdGlvbjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJykgbWFyZ2luOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUN1cnNvcigpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuYW5nbGUgPT09IFwic3RyaW5nXCIpe1xuICAgICAgdGhpcy5hbmdsZSA9IHBhcnNlSW50KHRoaXMuYW5nbGUsIDEwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmdsZSkge1xuICAgICAgdGhpcy5hbmltYXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID09PSAwICYmIHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy50cmFuc2Zvcm0gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLndpdGhNYXJnaW4pIHtcbiAgICAgIGlmICh0aGlzLmFuZ2xlID09PSA5MCB8fCB0aGlzLmFuZ2xlID09PSAyNzAgfHwgdGhpcy5hbmdsZSA9PT0gLTkwIHx8IHRoaXMuYW5nbGUgPT09IC0yNzApIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIdG1sTW9kZSkge1xuICAgICAgICAgIGlmICh0aGlzLmlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJzE2NHB4IDI1NHB4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnLTExMXB4IDI1NHB4JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNMYW5kc2NhcGUoKSkge1xuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnMTI5cHggMTAwcHggLTc5cHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICctNzJweCAxMDBweCAtNzlweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPT09IC0xODAgfHwgdGhpcy5hbmdsZSA9PT0gMTgwKSB7XG4gICAgICAgIHRoaXMubWFyZ2luID0gJzI4MHB4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFyZ2luID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGlzTGFuZHNjYXBlKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoID4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ3Vyc29yKClcbiAgfVxuXG59XG4iXX0=