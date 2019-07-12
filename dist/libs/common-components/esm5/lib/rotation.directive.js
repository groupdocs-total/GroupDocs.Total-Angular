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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUU5RjtJQWlCRTtRQVJTLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFTM0IsQ0FBQzs7Ozs7SUFFTyx3Q0FBWTs7OztJQUFwQjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ2xEO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUN4RixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO3dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7cUJBQzlCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO3dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO3FCQUNuQzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO3FCQUNuQztpQkFDRjthQUNGO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjtJQUVILENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7Ozs7d0JBR0UsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUVMLFdBQVcsU0FBQyxpQkFBaUI7NkJBQzdCLFdBQVcsU0FBQywyQkFBMkI7NEJBQ3ZDLFdBQVcsU0FBQyxpQkFBaUI7eUJBRTdCLFdBQVcsU0FBQyxjQUFjOztJQW9EN0Isd0JBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQWhFWSxpQkFBaUI7OztJQUU1QixrQ0FBdUI7O0lBQ3ZCLHVDQUE2Qjs7SUFDN0Isa0NBQXVCOztJQUN2QixtQ0FBd0I7O0lBQ3hCLHVDQUEyQjs7SUFFM0Isc0NBQWtEOztJQUNsRCx1Q0FBNkQ7O0lBQzdELHNDQUFrRDs7SUFFbEQsbUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RSb3RhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGlzSHRtbE1vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSB3aXRoTWFyZ2luID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmFuaW1hdGlvbicpIGFuaW1hdGlvbjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zaXRpb24tcHJvcGVydHknKSB0cmFuc2l0aW9uOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtJykgdHJhbnNmb3JtOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4nKSBtYXJnaW46IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ3Vyc29yKCkge1xuICAgIGlmICh0aGlzLmFuZ2xlKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbiA9ICdub25lJztcbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgdGhpcy5hbmdsZSArICdkZWcpJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPT09IDAgJiYgdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud2l0aE1hcmdpbikge1xuICAgICAgaWYgKHRoaXMuYW5nbGUgPT09IDkwIHx8IHRoaXMuYW5nbGUgPT09IDI3MCB8fCB0aGlzLmFuZ2xlID09PSAtOTAgfHwgdGhpcy5hbmdsZSA9PT0gLTI3MCkge1xuICAgICAgICBpZiAodGhpcy5pc0h0bWxNb2RlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNMYW5kc2NhcGUoKSkge1xuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnMTY0cHggMjU0cHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICctMTExcHggMjU0cHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICcxMjlweCAxMDBweCAtNzlweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJy03MnB4IDEwMHB4IC03OXB4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmdsZSA9PT0gLTE4MCB8fCB0aGlzLmFuZ2xlID09PSAxODApIHtcbiAgICAgICAgdGhpcy5tYXJnaW4gPSAnMjgwcHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXJnaW4gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgaXNMYW5kc2NhcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggPiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ3Vyc29yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKVxuICB9XG5cbn1cbiJdfQ==