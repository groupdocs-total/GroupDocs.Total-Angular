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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUU5RjtJQWlCRTtRQVJTLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFTM0IsQ0FBQzs7Ozs7SUFFTyx3Q0FBWTs7OztJQUFwQjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztxQkFDOUI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7cUJBQ25DO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7cUJBQ25DO2lCQUNGO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUFFO2dCQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNGO0lBRUgsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7Ozt3QkFHRSxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBRUwsV0FBVyxTQUFDLGlCQUFpQjs2QkFDN0IsV0FBVyxTQUFDLDJCQUEyQjs0QkFDdkMsV0FBVyxTQUFDLGlCQUFpQjt5QkFFN0IsV0FBVyxTQUFDLGNBQWM7O0lBd0Q3Qix3QkFBQztDQUFBLEFBdkVELElBdUVDO1NBcEVZLGlCQUFpQjs7O0lBRTVCLGtDQUF1Qjs7SUFDdkIsdUNBQTZCOztJQUM3QixrQ0FBdUI7O0lBQ3ZCLG1DQUF3Qjs7SUFDeEIsdUNBQTJCOztJQUUzQixzQ0FBa0Q7O0lBQ2xELHVDQUE2RDs7SUFDN0Qsc0NBQWtEOztJQUVsRCxtQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFJvdGF0aW9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBhbmdsZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGlzSHRtbE1vZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aXRoTWFyZ2luID0gdHJ1ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5hbmltYXRpb24nKSBhbmltYXRpb246IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zaXRpb24tcHJvcGVydHknKSB0cmFuc2l0aW9uOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0nKSB0cmFuc2Zvcm06IHN0cmluZztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4nKSBtYXJnaW46IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUN1cnNvcigpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5hbmdsZSA9PT0gXCJzdHJpbmdcIil7XHJcbiAgICAgIHRoaXMuYW5nbGUgPSBwYXJzZUludCh0aGlzLmFuZ2xlLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYW5nbGUpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9ICdub25lJztcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID09PSAwICYmIHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gbnVsbDtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uID0gbnVsbDtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLndpdGhNYXJnaW4pIHtcclxuICAgICAgaWYgKHRoaXMuYW5nbGUgPT09IDkwIHx8IHRoaXMuYW5nbGUgPT09IDI3MCB8fCB0aGlzLmFuZ2xlID09PSAtOTAgfHwgdGhpcy5hbmdsZSA9PT0gLTI3MCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSHRtbE1vZGUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnMTY0cHggMjU0cHgnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnLTExMXB4IDI1NHB4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNMYW5kc2NhcGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICcxMjlweCAxMDBweCAtNzlweCc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICctNzJweCAxMDBweCAtNzlweCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPT09IC0xODAgfHwgdGhpcy5hbmdsZSA9PT0gMTgwKSB7XHJcbiAgICAgICAgdGhpcy5tYXJnaW4gPSAnMjgwcHgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubWFyZ2luID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGlzTGFuZHNjYXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggPiB0aGlzLmhlaWdodDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ3Vyc29yKClcclxuICB9XHJcblxyXG59XHJcbiJdfQ==