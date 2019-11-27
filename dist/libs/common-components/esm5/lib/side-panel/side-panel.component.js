/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent() {
        this.hideSidePanel = new EventEmitter();
        this.onlyTitle = false;
    }
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.openSidePanel = /**
     * @return {?}
     */
    function () {
        this.hideSidePanel.emit(true);
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.toggleTitleMode = /**
     * @return {?}
     */
    function () {
        this.onlyTitle = !this.onlyTitle;
    };
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-side-panel',
                    template: "<div [ngClass]=\"{'only-title': onlyTitle}\" class=\"gd-side-panel-wrapper\">\r\n  <div class=\"gd-side-panel-header\" (click)=\"toggleTitleMode()\">\r\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"close\">\r\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"openSidePanel()\"></gd-button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!onlyTitle\" class=\"gd-side-panel-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:18px;line-height:24px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:13px;font-weight:700;color:#edf0f2;opacity:.57;margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close{display:flex;align-items:center}.gd-side-panel-wrapper .gd-side-panel-header /deep/ gd-button .text{padding:0}.gd-side-panel-wrapper .gd-side-panel-body{display:flex;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}.gd-side-panel-wrapper.only-title{height:60px!important}}"]
                }] }
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return []; };
    SidePanelComponent.propDecorators = {
        title: [{ type: Input }],
        icon: [{ type: Input }],
        hideSidePanel: [{ type: Output }]
    };
    return SidePanelComponent;
}());
export { SidePanelComponent };
if (false) {
    /** @type {?} */
    SidePanelComponent.prototype.title;
    /** @type {?} */
    SidePanelComponent.prototype.icon;
    /** @type {?} */
    SidePanelComponent.prototype.hideSidePanel;
    /** @type {?} */
    SidePanelComponent.prototype.onlyTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVyRTtJQWFFO1FBSlUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXRELGNBQVMsR0FBRyxLQUFLLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELDBDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw4a0JBQTBDOztpQkFFM0M7Ozs7O3dCQUdFLEtBQUs7dUJBQ0wsS0FBSztnQ0FDTCxNQUFNOztJQWNULHlCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FqQlksa0JBQWtCOzs7SUFDN0IsbUNBQXVCOztJQUN2QixrQ0FBc0I7O0lBQ3RCLDJDQUFzRDs7SUFFdEQsdUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXNpZGUtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBoaWRlU2lkZVBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvbmx5VGl0bGUgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBvcGVuU2lkZVBhbmVsKCkge1xyXG4gICAgdGhpcy5oaWRlU2lkZVBhbmVsLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUaXRsZU1vZGUoKXtcclxuICAgIHRoaXMub25seVRpdGxlID0gIXRoaXMub25seVRpdGxlO1xyXG4gIH1cclxufVxyXG4iXX0=