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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUs5RixNQUFNLE9BQU8saUJBQWlCO0lBYzVCO1FBUlMsZUFBVSxHQUFHLElBQUksQ0FBQztJQVMzQixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ2xEO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUN4RixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO3dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7cUJBQzlCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO3dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO3FCQUNuQzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO3FCQUNuQztpQkFDRjthQUNGO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjtJQUVILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7OztZQXJFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7O29CQUdFLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFFTCxXQUFXLFNBQUMsaUJBQWlCO3lCQUM3QixXQUFXLFNBQUMsMkJBQTJCO3dCQUN2QyxXQUFXLFNBQUMsaUJBQWlCO3FCQUU3QixXQUFXLFNBQUMsY0FBYzs7OztJQVYzQixrQ0FBdUI7O0lBQ3ZCLHVDQUE2Qjs7SUFDN0Isa0NBQXVCOztJQUN2QixtQ0FBd0I7O0lBQ3hCLHVDQUEyQjs7SUFFM0Isc0NBQWtEOztJQUNsRCx1Q0FBNkQ7O0lBQzdELHNDQUFrRDs7SUFFbEQsbUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RSb3RhdGlvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgYW5nbGU6IG51bWJlcjtcclxuICBASW5wdXQoKSBpc0h0bWxNb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgd2l0aE1hcmdpbiA9IHRydWU7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYW5pbWF0aW9uJykgYW5pbWF0aW9uOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2l0aW9uLXByb3BlcnR5JykgdHJhbnNpdGlvbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtJykgdHJhbnNmb3JtOiBzdHJpbmc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJykgbWFyZ2luOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDdXJzb3IoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYW5nbGUgPT09IFwic3RyaW5nXCIpe1xyXG4gICAgICB0aGlzLmFuZ2xlID0gcGFyc2VJbnQodGhpcy5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYW5nbGUpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9ICdub25lJztcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID09PSAwICYmIHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gbnVsbDtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uID0gbnVsbDtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLndpdGhNYXJnaW4pIHtcclxuICAgICAgaWYgKHRoaXMuYW5nbGUgPT09IDkwIHx8IHRoaXMuYW5nbGUgPT09IDI3MCB8fCB0aGlzLmFuZ2xlID09PSAtOTAgfHwgdGhpcy5hbmdsZSA9PT0gLTI3MCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSHRtbE1vZGUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnMTY0cHggMjU0cHgnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnLTExMXB4IDI1NHB4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNMYW5kc2NhcGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICcxMjlweCAxMDBweCAtNzlweCc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICctNzJweCAxMDBweCAtNzlweCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPT09IC0xODAgfHwgdGhpcy5hbmdsZSA9PT0gMTgwKSB7XHJcbiAgICAgICAgdGhpcy5tYXJnaW4gPSAnMjgwcHgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubWFyZ2luID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGlzTGFuZHNjYXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggPiB0aGlzLmhlaWdodDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ3Vyc29yKClcclxuICB9XHJcblxyXG59XHJcbiJdfQ==