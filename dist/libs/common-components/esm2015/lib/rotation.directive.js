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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUs5RixNQUFNLE9BQU8saUJBQWlCO0lBYzVCO1FBUlMsZUFBVSxHQUFHLElBQUksQ0FBQztJQVMzQixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztxQkFDOUI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7cUJBQ25DO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7cUJBQ25DO2lCQUNGO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUFFO2dCQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNGO0lBRUgsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7Ozs7b0JBR0UsS0FBSzt5QkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUVMLFdBQVcsU0FBQyxpQkFBaUI7eUJBQzdCLFdBQVcsU0FBQywyQkFBMkI7d0JBQ3ZDLFdBQVcsU0FBQyxpQkFBaUI7cUJBRTdCLFdBQVcsU0FBQyxjQUFjOzs7O0lBVjNCLGtDQUF1Qjs7SUFDdkIsdUNBQTZCOztJQUM3QixrQ0FBdUI7O0lBQ3ZCLG1DQUF3Qjs7SUFDeEIsdUNBQTJCOztJQUUzQixzQ0FBa0Q7O0lBQ2xELHVDQUE2RDs7SUFDN0Qsc0NBQWtEOztJQUVsRCxtQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFJvdGF0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgUm90YXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgYW5nbGU6IG51bWJlcjtcbiAgQElucHV0KCkgaXNIdG1sTW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpdGhNYXJnaW4gPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYW5pbWF0aW9uJykgYW5pbWF0aW9uOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNpdGlvbi1wcm9wZXJ0eScpIHRyYW5zaXRpb246IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0nKSB0cmFuc2Zvcm06IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbicpIG1hcmdpbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDdXJzb3IoKSB7XG4gICAgaWYgKHRoaXMuYW5nbGUpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gJ25vbmUnO1xuICAgICAgdGhpcy50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdGhpcy50cmFuc2Zvcm0gPSAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbmdsZSA9PT0gMCAmJiB0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb24gPSBudWxsO1xuICAgICAgdGhpcy50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy53aXRoTWFyZ2luKSB7XG4gICAgICBpZiAodGhpcy5hbmdsZSA9PT0gOTAgfHwgdGhpcy5hbmdsZSA9PT0gMjcwIHx8IHRoaXMuYW5nbGUgPT09IC05MCB8fCB0aGlzLmFuZ2xlID09PSAtMjcwKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSHRtbE1vZGUpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICcxNjRweCAyNTRweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJy0xMTFweCAyNTRweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJzEyOXB4IDEwMHB4IC03OXB4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnLTcycHggMTAwcHggLTc5cHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID09PSAtMTgwIHx8IHRoaXMuYW5nbGUgPT09IDE4MCkge1xuICAgICAgICB0aGlzLm1hcmdpbiA9ICcyODBweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcmdpbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBpc0xhbmRzY2FwZSgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aCA+IHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpXG4gIH1cblxufVxuIl19