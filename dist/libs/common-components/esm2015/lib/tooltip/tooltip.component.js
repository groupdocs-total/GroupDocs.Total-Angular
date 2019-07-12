/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TooltipComponent {
    constructor() {
        this.visibility = 'hidden';
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
                template: "<span class=\"tooltip\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n",
                styles: [".tooltip{position:absolute;margin-top:37px;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:0;padding:5px 0;z-index:1;margin-left:-66px;font-size:10px}.tooltip.hidden{visibility:hidden}.tooltip.shown{visibility:visible}.shown:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom-color:#000}"]
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    text: [{ type: Input }],
    show: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TooltipComponent.prototype.text;
    /** @type {?} */
    TooltipComponent.prototype.visibility;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTSxPQUFPLGdCQUFnQjtJQUszQjtRQUZBLGVBQVUsR0FBRyxRQUFRLENBQUM7SUFHdEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLElBQUksQ0FBQyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDJGQUF1Qzs7YUFFeEM7Ozs7O21CQUdFLEtBQUs7bUJBTUwsS0FBSzs7OztJQU5OLGdDQUFxQjs7SUFDckIsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sdGlwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGV4dDpzdHJpbmc7XG4gIHZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaG93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gdmFsdWUgPyAnc2hvd24nIDogJ2hpZGRlbic7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=