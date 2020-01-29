/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SidePanelComponent {
    constructor() {
        this.closable = true;
        this.hideSidePanel = new EventEmitter();
        this.onlyTitle = false;
    }
    /**
     * @return {?}
     */
    closeSidePanel() {
        this.hideSidePanel.emit(true);
    }
    /**
     * @return {?}
     */
    toggleTitleMode() {
        if (this.closable) {
            this.onlyTitle = !this.onlyTitle;
        }
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-side-panel',
                template: "<div [ngClass]=\"{'only-title': onlyTitle}\" class=\"gd-side-panel-wrapper\">\r\n  <div class=\"gd-side-panel-header\" (click)=\"toggleTitleMode()\">\r\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"close\" *ngIf=\"closable\">\r\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"closeSidePanel()\"></gd-button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!onlyTitle\" class=\"gd-side-panel-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:18px;line-height:24px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:13px;font-weight:700;color:#edf0f2;opacity:.57;margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close{display:flex;align-items:center}.gd-side-panel-wrapper .gd-side-panel-header /deep/ gd-button .text{padding:0}.gd-side-panel-wrapper .gd-side-panel-body{display:flex;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}.gd-side-panel-wrapper.only-title{height:60px!important}}"]
            }] }
];
/** @nocollapse */
SidePanelComponent.ctorParameters = () => [];
SidePanelComponent.propDecorators = {
    title: [{ type: Input }],
    icon: [{ type: Input }],
    closable: [{ type: Input }],
    hideSidePanel: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SidePanelComponent.prototype.title;
    /** @type {?} */
    SidePanelComponent.prototype.icon;
    /** @type {?} */
    SidePanelComponent.prototype.closable;
    /** @type {?} */
    SidePanelComponent.prototype.hideSidePanel;
    /** @type {?} */
    SidePanelComponent.prototype.onlyTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVFyRSxNQUFNLE9BQU8sa0JBQWtCO0lBUTdCO1FBTFMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV0RCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBR2xCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixrbUJBQTBDOzthQUUzQzs7Ozs7b0JBR0UsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsTUFBTTs7OztJQUhQLG1DQUF1Qjs7SUFDdkIsa0NBQXNCOztJQUN0QixzQ0FBeUI7O0lBQ3pCLDJDQUFzRDs7SUFFdEQsdUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXNpZGUtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsb3NhYmxlID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgaGlkZVNpZGVQYW5lbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgb25seVRpdGxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgY2xvc2VTaWRlUGFuZWwoKSB7XHJcbiAgICB0aGlzLmhpZGVTaWRlUGFuZWwuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVRpdGxlTW9kZSgpe1xyXG4gICAgaWYgKHRoaXMuY2xvc2FibGUpIHtcclxuICAgICAgdGhpcy5vbmx5VGl0bGUgPSAhdGhpcy5vbmx5VGl0bGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==