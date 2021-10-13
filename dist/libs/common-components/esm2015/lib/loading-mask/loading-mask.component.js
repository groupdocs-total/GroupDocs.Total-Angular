/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { LoadingMaskService } from "../loading-mask.service";
export class LoadingMaskComponent {
    /**
     * @param {?} _loadingMaskService
     */
    constructor(_loadingMaskService) {
        this._loadingMaskService = _loadingMaskService;
        this.loadingMask = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._loadingMaskService
            .onLoadingChanged
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        (loading) => this.loadingMask = loading));
    }
}
LoadingMaskComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-loading-mask',
                template: "<div class=\"loading-wrapper\" *ngIf=\"loadingMask\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon> &nbsp;{{'Loading... Please wait.' | translate}}\n    </div>\n</div>\n",
                styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            }] }
];
/** @nocollapse */
LoadingMaskComponent.ctorParameters = () => [
    { type: LoadingMaskService }
];
LoadingMaskComponent.propDecorators = {
    loadingMask: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoadingMaskComponent.prototype.loadingMask;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskComponent.prototype._loadingMaskService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9sb2FkaW5nLW1hc2svbG9hZGluZy1tYXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBUTNELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFHL0IsWUFBb0IsbUJBQXVDO1FBQXZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFGbEQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFHN0IsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxtQkFBbUI7YUFDckIsZ0JBQWdCO2FBQ2hCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxFQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwyUEFBNEM7O2FBRTdDOzs7O1lBTk8sa0JBQWtCOzs7MEJBU3ZCLEtBQUs7Ozs7SUFBTiwyQ0FBNkI7Ozs7O0lBRWpCLG1EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9hZGluZ01hc2tTZXJ2aWNlfSBmcm9tIFwiLi4vbG9hZGluZy1tYXNrLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtbG9hZGluZy1tYXNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctbWFzay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctbWFzay5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTG9hZGluZ01hc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBsb2FkaW5nTWFzayA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRpbmdNYXNrU2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nTWFza1NlcnZpY2VcbiAgICAgIC5vbkxvYWRpbmdDaGFuZ2VkXG4gICAgICAuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB0aGlzLmxvYWRpbmdNYXNrID0gbG9hZGluZyk7XG4gIH1cbn1cbiJdfQ==