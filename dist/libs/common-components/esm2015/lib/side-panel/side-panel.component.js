/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SidePanelComponent {
    constructor() {
        this.hideSidePanel = new EventEmitter();
        this.onlyTitle = false;
    }
    /**
     * @return {?}
     */
    openSidePanel() {
        this.hideSidePanel.emit(true);
    }
    /**
     * @return {?}
     */
    toggleTitleMode() {
        this.onlyTitle = !this.onlyTitle;
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-side-panel',
                template: "<div [ngClass]=\"{'only-title': onlyTitle}\" class=\"gd-side-panel-wrapper\">\r\n  <div class=\"gd-side-panel-header\" (click)=\"toggleTitleMode()\">\r\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"close\">\r\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"openSidePanel()\"></gd-button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!onlyTitle\" class=\"gd-side-panel-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:18px;line-height:24px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:13px;font-weight:700;color:#edf0f2;opacity:.57;margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close{display:flex;align-items:center}.gd-side-panel-wrapper .gd-side-panel-header /deep/ gd-button .text{padding:0}.gd-side-panel-wrapper .gd-side-panel-body{display:flex;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}.gd-side-panel-wrapper.only-title{height:60px!important}}"]
            }] }
];
/** @nocollapse */
SidePanelComponent.ctorParameters = () => [];
SidePanelComponent.propDecorators = {
    title: [{ type: Input }],
    icon: [{ type: Input }],
    hideSidePanel: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVFyRSxNQUFNLE9BQU8sa0JBQWtCO0lBTzdCO1FBSlUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXRELGNBQVMsR0FBRyxLQUFLLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDhrQkFBMEM7O2FBRTNDOzs7OztvQkFHRSxLQUFLO21CQUNMLEtBQUs7NEJBQ0wsTUFBTTs7OztJQUZQLG1DQUF1Qjs7SUFDdkIsa0NBQXNCOztJQUN0QiwyQ0FBc0Q7O0lBRXRELHVDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zaWRlLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1wYW5lbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZVBhbmVsQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBAT3V0cHV0KCkgaGlkZVNpZGVQYW5lbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgb25seVRpdGxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgb3BlblNpZGVQYW5lbCgpIHtcclxuICAgIHRoaXMuaGlkZVNpZGVQYW5lbC5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVGl0bGVNb2RlKCl7XHJcbiAgICB0aGlzLm9ubHlUaXRsZSA9ICF0aGlzLm9ubHlUaXRsZTtcclxuICB9XHJcbn1cclxuIl19