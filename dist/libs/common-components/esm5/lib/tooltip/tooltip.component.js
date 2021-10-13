/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.position = 0;
        this.visibility = 'hidden';
    }
    /**
     * @return {?}
     */
    TooltipComponent.prototype.getClass = /**
     * @return {?}
     */
    function () {
        if (this.position === 0) {
            return 'tooltip';
        }
        return 'tooltip ' + (this.position > 0 ? 'last-element' : 'first-element');
    };
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
                    template: "<span [class]=\"getClass()\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                    styles: [".tooltip{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px;z-index:1;font-size:10px;height:11px;line-height:11px;-ms-grid-row-align:center;align-self:center;margin:8px!important}.first-element{margin-left:10px!important}.last-element{margin-left:-10px!important}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return []; };
    TooltipComponent.propDecorators = {
        text: [{ type: Input }],
        position: [{ type: Input }],
        show: [{ type: Input }]
    };
    return TooltipComponent;
}());
export { TooltipComponent };
if (false) {
    /** @type {?} */
    TooltipComponent.prototype.text;
    /** @type {?} */
    TooltipComponent.prototype.position;
    /** @type {?} */
    TooltipComponent.prototype.visibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFXRTtRQUhTLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFHLFFBQVEsQ0FBQztJQUd0QixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtZQUN2QixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE9BQU8sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHNCQUNJLGtDQUFJOzs7OztRQURSLFVBQ1MsS0FBYztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixnR0FBdUM7O2lCQUV4Qzs7Ozs7dUJBR0UsS0FBSzsyQkFDTCxLQUFLO3VCQWFMLEtBQUs7O0lBUVIsdUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSxnQkFBZ0I7OztJQUUzQixnQ0FBc0I7O0lBQ3RCLG9DQUFzQjs7SUFDdEIsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sdGlwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBwb3NpdGlvbiA9IDA7XG4gIHZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldENsYXNzKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gJ3Rvb2x0aXAnO1xuICAgIH1cbiAgICByZXR1cm4gJ3Rvb2x0aXAgJyArICh0aGlzLnBvc2l0aW9uID4gMCA/ICdsYXN0LWVsZW1lbnQnIDogJ2ZpcnN0LWVsZW1lbnQnKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaG93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gdmFsdWUgPyAnc2hvd24nIDogJ2hpZGRlbic7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=