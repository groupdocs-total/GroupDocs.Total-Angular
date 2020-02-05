/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.first = false;
        this.visibility = 'hidden';
    }
    /**
     * @return {?}
     */
    TooltipComponent.prototype.getClass = /**
     * @return {?}
     */
    function () {
        return this.first ? 'tooltip first-element' : 'tooltip';
    };
    Object.defineProperty(TooltipComponent.prototype, "show", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.visibility = value ? 'shown' : 'hidden';
            }), 1000);
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
                    template: "<span [class]=\"getClass()\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                    styles: [".tooltip{position:absolute;margin-top:37px!important;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px;z-index:1;margin-left:unset!important;margin-right:unset!important;font-size:10px;height:11px;line-height:11px;-ms-grid-row-align:center;align-self:center}.first-element{margin-left:10px!important}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return []; };
    TooltipComponent.propDecorators = {
        text: [{ type: Input }],
        first: [{ type: Input }],
        show: [{ type: Input }]
    };
    return TooltipComponent;
}());
export { TooltipComponent };
if (false) {
    /** @type {?} */
    TooltipComponent.prototype.text;
    /** @type {?} */
    TooltipComponent.prototype.first;
    /** @type {?} */
    TooltipComponent.prototype.visibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFXRTtRQUhTLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUFHLFFBQVEsQ0FBQztJQUd0QixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO0lBQ3pELENBQUM7SUFFRCxzQkFDSSxrQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQWM7WUFEdkIsaUJBS0M7WUFIQyxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDL0MsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQzs7O09BQUE7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixnR0FBdUM7O2lCQUV4Qzs7Ozs7dUJBR0UsS0FBSzt3QkFDTCxLQUFLO3VCQVVMLEtBQUs7O0lBVVIsdUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXZCWSxnQkFBZ0I7OztJQUUzQixnQ0FBc0I7O0lBQ3RCLGlDQUF1Qjs7SUFDdkIsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sdGlwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBmaXJzdCA9IGZhbHNlO1xuICB2aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdCA/ICd0b29sdGlwIGZpcnN0LWVsZW1lbnQnIDogJ3Rvb2x0aXAnXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2hvdyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gdmFsdWUgPyAnc2hvd24nIDogJ2hpZGRlbic7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=