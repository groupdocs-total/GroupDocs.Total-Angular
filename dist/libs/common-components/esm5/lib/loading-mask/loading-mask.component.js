/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { LoadingMaskService } from "../loading-mask.service";
var LoadingMaskComponent = /** @class */ (function () {
    function LoadingMaskComponent(_loadingMaskService) {
        this._loadingMaskService = _loadingMaskService;
        this.loadingMask = false;
    }
    /**
     * @return {?}
     */
    LoadingMaskComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingMaskComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._loadingMaskService
            .onLoadingChanged
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) { return _this.loadingMask = loading; }));
    };
    LoadingMaskComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-loading-mask',
                    template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;{{'Loading... Please wait.' | translate}}\n    </div>\n</div>\n",
                    styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                }] }
    ];
    /** @nocollapse */
    LoadingMaskComponent.ctorParameters = function () { return [
        { type: LoadingMaskService }
    ]; };
    LoadingMaskComponent.propDecorators = {
        loadingMask: [{ type: Input }]
    };
    return LoadingMaskComponent;
}());
export { LoadingMaskComponent };
if (false) {
    /** @type {?} */
    LoadingMaskComponent.prototype.loadingMask;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskComponent.prototype._loadingMaskService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9sb2FkaW5nLW1hc2svbG9hZGluZy1tYXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTNEO0lBU0UsOEJBQW9CLG1CQUF1QztRQUF2Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBRmxELGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRzdCLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsOENBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsbUJBQW1CO2FBQ3JCLGdCQUFnQjthQUNoQixTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDJQQUE0Qzs7aUJBRTdDOzs7O2dCQU5PLGtCQUFrQjs7OzhCQVN2QixLQUFLOztJQWFSLDJCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FkWSxvQkFBb0I7OztJQUMvQiwyQ0FBNkI7Ozs7O0lBRWpCLG1EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9hZGluZ01hc2tTZXJ2aWNlfSBmcm9tIFwiLi4vbG9hZGluZy1tYXNrLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtbG9hZGluZy1tYXNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctbWFzay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctbWFzay5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTG9hZGluZ01hc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBsb2FkaW5nTWFzayA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcbiAgICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmxvYWRpbmdNYXNrID0gbG9hZGluZyk7XG4gIH1cbn1cbiJdfQ==