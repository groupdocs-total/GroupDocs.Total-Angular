/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SidePanelComponent {
    constructor() {
        this.hideSidePanel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    openSidePanel() {
        this.hideSidePanel.emit(true);
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-side-panel',
                template: "<div class=\"gd-side-panel-wrapper\">\r\n  <div class=\"gd-side-panel-header\">\r\n    <fa-icon class=\"fas fa-info-circle icon\" [icon]=\"['fas',icon]\"></fa-icon>\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"close\">\r\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"openSidePanel()\"></gd-button>\r\n    </div>\r\n  </div>\r\n  <div class=\"gd-side-panel-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-side-panel-wrapper{margin-right:0;width:334px;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column;height:100vh}.gd-side-panel-wrapper .gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-direction:row;flex-wrap:nowrap}.gd-side-panel-wrapper .gd-side-panel-header .icon{font-size:24px;color:#959da5;margin:12px 9px 18px 14px}.gd-side-panel-wrapper .gd-side-panel-header .title{font-size:14px;font-weight:700;color:rgba(237,240,242,.57);margin-top:20px;width:100%}.gd-side-panel-wrapper .gd-side-panel-header .close{font-size:24px!important;margin-top:12px}.gd-side-panel-wrapper .gd-side-panel-body{display:flex;flex-flow:column;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}@media (max-width:1037px){.gd-side-panel-wrapper{width:100%;position:absolute;left:0;right:0;top:0;bottom:0}}"]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVFyRSxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCO1FBRlUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBR3RELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsbWZBQTBDOzthQUUzQzs7Ozs7b0JBR0UsS0FBSzttQkFDTCxLQUFLOzRCQUNMLE1BQU07Ozs7SUFGUCxtQ0FBdUI7O0lBQ3ZCLGtDQUFzQjs7SUFDdEIsMkNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXNpZGUtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBoaWRlU2lkZVBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG9wZW5TaWRlUGFuZWwoKSB7XHJcbiAgICB0aGlzLmhpZGVTaWRlUGFuZWwuZW1pdCh0cnVlKTtcclxuICB9XHJcbn1cclxuIl19