/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent() {
        this.closable = true;
        this.saveable = true;
        this.hideSidePanel = new EventEmitter();
        this.saveInSidePanel = new EventEmitter();
        this.onlyTitle = false;
    }
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.closeSidePanel = /**
     * @return {?}
     */
    function () {
        this.hideSidePanel.emit(true);
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.saveBySidePanel = /**
     * @return {?}
     */
    function () {
        this.saveInSidePanel.emit(true);
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.toggleTitleMode = /**
     * @return {?}
     */
    function () {
        if (this.closable && !this.saveable) {
            this.onlyTitle = !this.onlyTitle;
        }
    };
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-side-panel',
                    template: "<div [ngClass]=\"{'only-title': onlyTitle}\" class=\"gd-side-panel-wrapper\">\r\n  <div class=\"gd-side-panel-header\" (click)=\"toggleTitleMode()\">\r\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"save\" *ngIf=\"saveable\">\r\n      <gd-button class=\"fas fa-times\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"saveBySidePanel()\"></gd-button>\r\n    </div>\r\n    <div class=\"close\" *ngIf=\"closable\">\r\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"closeSidePanel()\"></gd-button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!onlyTitle\" class=\"gd-side-panel-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;-webkit-transition:margin-right .2s;transition:margin-right .2s;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:18px;line-height:24px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:13px;font-weight:700;color:#edf0f2;opacity:.57;margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close,.gd-side-panel-wrapper .gd-side-panel-header .save{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.gd-side-panel-wrapper .gd-side-panel-header ::ng-deep gd-button .text{padding:0}.gd-side-panel-wrapper .gd-side-panel-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}.gd-side-panel-wrapper.only-title{height:60px!important}}"]
                }] }
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return []; };
    SidePanelComponent.propDecorators = {
        title: [{ type: Input }],
        icon: [{ type: Input }],
        closable: [{ type: Input }],
        saveable: [{ type: Input }],
        hideSidePanel: [{ type: Output }],
        saveInSidePanel: [{ type: Output }]
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
    SidePanelComponent.prototype.closable;
    /** @type {?} */
    SidePanelComponent.prototype.saveable;
    /** @type {?} */
    SidePanelComponent.prototype.hideSidePanel;
    /** @type {?} */
    SidePanelComponent.prototype.saveInSidePanel;
    /** @type {?} */
    SidePanelComponent.prototype.onlyTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVyRTtJQWdCRTtRQVBTLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFeEQsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUdsQixDQUFDOzs7O0lBRUQsMkNBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsNHhCQUEwQzs7aUJBRTNDOzs7Ozt3QkFHRSxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLE1BQU07a0NBQ04sTUFBTTs7SUFvQlQseUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTFCWSxrQkFBa0I7OztJQUM3QixtQ0FBdUI7O0lBQ3ZCLGtDQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixzQ0FBeUI7O0lBQ3pCLDJDQUFzRDs7SUFDdEQsNkNBQXdEOztJQUV4RCx1Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2Qtc2lkZS1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtcGFuZWwuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xvc2FibGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNhdmVhYmxlID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgaGlkZVNpZGVQYW5lbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgc2F2ZUluU2lkZVBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvbmx5VGl0bGUgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBjbG9zZVNpZGVQYW5lbCgpIHtcclxuICAgIHRoaXMuaGlkZVNpZGVQYW5lbC5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUJ5U2lkZVBhbmVsKCkge1xyXG4gICAgdGhpcy5zYXZlSW5TaWRlUGFuZWwuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVRpdGxlTW9kZSgpe1xyXG4gICAgaWYgKHRoaXMuY2xvc2FibGUgJiYgIXRoaXMuc2F2ZWFibGUpIHtcclxuICAgICAgdGhpcy5vbmx5VGl0bGUgPSAhdGhpcy5vbmx5VGl0bGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==