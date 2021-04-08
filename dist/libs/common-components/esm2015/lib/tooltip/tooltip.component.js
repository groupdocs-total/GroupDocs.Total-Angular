/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TooltipComponent {
    constructor() {
        this.position = 0;
        this.visibility = 'hidden';
    }
    /**
     * @return {?}
     */
    getClass() {
        if (this.position === 0) {
            return 'tooltip';
        }
        return 'tooltip ' + (this.position > 0 ? 'last-element' : 'first-element');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set show(value) {
        this.visibility = value ? 'shown' : 'hidden';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-tooltip',
                template: "<span [class]=\"getClass()\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\r\n",
                styles: [".tooltip{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px;z-index:1;font-size:10px;height:11px;line-height:11px;-ms-grid-row-align:center;align-self:center;margin:8px!important}.first-element{margin-left:10px!important}.last-element{margin-left:-10px!important}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    text: [{ type: Input }],
    position: [{ type: Input }],
    show: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TooltipComponent.prototype.text;
    /** @type {?} */
    TooltipComponent.prototype.position;
    /** @type {?} */
    TooltipComponent.prototype.visibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQjtRQUhTLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFHLFFBQVEsQ0FBQztJQUd0QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsSUFDSSxJQUFJLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixrR0FBdUM7O2FBRXhDOzs7OzttQkFHRSxLQUFLO3VCQUNMLEtBQUs7bUJBYUwsS0FBSzs7OztJQWROLGdDQUFzQjs7SUFDdEIsb0NBQXNCOztJQUN0QixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXRvb2x0aXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b29sdGlwLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcG9zaXRpb24gPSAwO1xyXG4gIHZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzcygpIHtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAndG9vbHRpcCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ3Rvb2x0aXAgJyArICh0aGlzLnBvc2l0aW9uID4gMCA/ICdsYXN0LWVsZW1lbnQnIDogJ2ZpcnN0LWVsZW1lbnQnKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNob3codmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudmlzaWJpbGl0eSA9IHZhbHVlID8gJ3Nob3duJyA6ICdoaWRkZW4nO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=