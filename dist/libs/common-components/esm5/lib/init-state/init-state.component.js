/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var InitStateComponent = /** @class */ (function () {
    function InitStateComponent() {
        this.fileDropped = new EventEmitter();
        this.showUploadFile = false;
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
            this.showUploadFile = false;
        }
    };
    InitStateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-init-state',
                    template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\r\n  <div class=\"init-state-wrapper\">\r\n    <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n    <span class=\"start\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n  </div>\r\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\r\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\r\n    <span class=\"text\">{{text}}</span>\r\n  </div>\r\n</div>\r\n",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;width:65px;height:65px;display:flex;color:#959da5}.start{font-size:14px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:0;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#3e4e5a;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:flex;flex-direction:column;width:250px;height:250px;align-items:center;justify-content:center}.init-state-wrapper{top:-60px;position:relative}"]
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
    /** @type {?} */
    InitStateComponent.prototype.showUploadFile;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1zdGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvaW5pdC1zdGF0ZS9pbml0LXN0YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUU3RTtJQVdFO1FBSFUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBR3ZCLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELG9DQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQ1osSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHdqQkFBMEM7O2lCQUUzQzs7Ozs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLE1BQU07O0lBZVQseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWxCWSxrQkFBa0I7OztJQUM3QixrQ0FBc0I7O0lBQ3RCLGtDQUFzQjs7SUFDdEIseUNBQW9EOztJQUNwRCw0Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1pbml0LXN0YXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5pdC1zdGF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5pdC1zdGF0ZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbml0U3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGZpbGVEcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIHNob3dVcGxvYWRGaWxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBkcm9wcGVkKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLmZpbGVEcm9wcGVkLmVtaXQoJGV2ZW50KTtcclxuICAgICAgdGhpcy5zaG93VXBsb2FkRmlsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=