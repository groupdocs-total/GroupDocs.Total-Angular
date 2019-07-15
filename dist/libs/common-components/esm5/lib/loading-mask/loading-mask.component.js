/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var LoadingMaskComponent = /** @class */ (function () {
    function LoadingMaskComponent() {
        this.loadingMask = false;
    }
    /**
     * @return {?}
     */
    LoadingMaskComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    LoadingMaskComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-loading-mask',
                    template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;Loading... Please wait.\n    </div>\n</div>\n",
                    styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]
                }] }
    ];
    /** @nocollapse */
    LoadingMaskComponent.ctorParameters = function () { return []; };
    LoadingMaskComponent.propDecorators = {
        loadingMask: [{ type: Input }]
    };
    return LoadingMaskComponent;
}());
export { LoadingMaskComponent };
if (false) {
    /** @type {?} */
    LoadingMaskComponent.prototype.loadingMask;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9sb2FkaW5nLW1hc2svbG9hZGluZy1tYXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFTSTtRQUZTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRWIsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFYaEIsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHlPQUE0Qzs7aUJBRS9DOzs7Ozs4QkFHSSxLQUFLOztJQUtWLDJCQUFDO0NBQUEsQUFaRCxJQVlDO1NBTlksb0JBQW9COzs7SUFDN0IsMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2QtbG9hZGluZy1tYXNrJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1tYXNrLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLW1hc2suY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvYWRpbmdNYXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBsb2FkaW5nTWFzayA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKCkge31cblxuICAgIG5nT25Jbml0KCkge31cbn0iXX0=