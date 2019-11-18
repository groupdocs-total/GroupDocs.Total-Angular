/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.visibility = 'hidden';
    }
    Object.defineProperty(TooltipComponent.prototype, "show", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.visibility = value ? 'shown' : 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-tooltip',
                    template: "<span class=\"tooltip\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                    styles: [".tooltip{position:absolute;margin-top:37px;width:100px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px;height:11px;line-height:11px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return []; };
    TooltipComponent.propDecorators = {
        text: [{ type: Input }],
        show: [{ type: Input }]
    };
    return TooltipComponent;
}());
export { TooltipComponent };
if (false) {
    /** @type {?} */
    TooltipComponent.prototype.text;
    /** @type {?} */
    TooltipComponent.prototype.visibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFVRTtRQUZBLGVBQVUsR0FBRyxRQUFRLENBQUM7SUFHdEIsQ0FBQztJQUVELHNCQUNJLGtDQUFJOzs7OztRQURSLFVBQ1MsS0FBYztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwyRkFBdUM7O2lCQUV4Qzs7Ozs7dUJBR0UsS0FBSzt1QkFNTCxLQUFLOztJQVFSLHVCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksZ0JBQWdCOzs7SUFFM0IsZ0NBQXNCOztJQUN0QixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rvb2x0aXAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIHZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaG93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gdmFsdWUgPyAnc2hvd24nIDogJ2hpZGRlbic7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=