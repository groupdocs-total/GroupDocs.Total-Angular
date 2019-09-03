/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var InitStateComponent = /** @class */ (function () {
    function InitStateComponent() {
        this.fileDropped = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InitStateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    InitStateComponent.prototype.dropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.fileDropped.emit($event);
        }
    };
    InitStateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-init-state',
                    template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\">\r\n  <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n  <span class=\"text\">{{text}}</span>\r\n  <span class=\"start\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n</div>\r\n",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}.gd-drag-n-drop-wrap.active{background-color:#bababa}"]
                }] }
    ];
    /** @nocollapse */
    InitStateComponent.ctorParameters = function () { return []; };
    InitStateComponent.propDecorators = {
        icon: [{ type: Input }],
        text: [{ type: Input }],
        fileDropped: [{ type: Output }]
    };
    return InitStateComponent;
}());
export { InitStateComponent };
if (false) {
    /** @type {?} */
    InitStateComponent.prototype.icon;
    /** @type {?} */
    InitStateComponent.prototype.text;
    /** @type {?} */
    InitStateComponent.prototype.fileDropped;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1zdGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvaW5pdC1zdGF0ZS9pbml0LXN0YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUU3RTtJQVVFO1FBRlUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBR3BELENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELG9DQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQ1osSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDZSQUEwQzs7aUJBRTNDOzs7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsTUFBTTs7SUFhVCx5QkFBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLGtCQUFrQjs7O0lBQzdCLGtDQUFzQjs7SUFDdEIsa0NBQXNCOztJQUN0Qix5Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1pbml0LXN0YXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5pdC1zdGF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5pdC1zdGF0ZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbml0U3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGZpbGVEcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZHJvcHBlZCgkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5maWxlRHJvcHBlZC5lbWl0KCRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==