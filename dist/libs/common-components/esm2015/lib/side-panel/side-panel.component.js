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
                template: "<div class=\"gd-side-panel-wrapper\">\n  <div class=\"gd-side-panel-header\">\n    <fa-icon class=\"fas fa-info-circle\" [icon]=\"['fas',icon]\"></fa-icon>\n    <span>{{title}}</span>\n    <div class=\"close\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"openSidePanel()\"></gd-button>\n    </div>\n  </div>\n  <div class=\"gd-side-panel-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".gd-side-panel-wrapper{margin-right:0;width:334px!important;z-index:999;background-color:#fff;transition:margin-right .2s;display:flex;flex-flow:column}.gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-flow:row}.gd-side-panel-body{display:flex;flex-flow:column;padding-top:14px;overflow:visible;overflow-y:auto;overflow-x:hidden;height:100%}.gd-side-panel-header>fa-icon:first-child{font-size:24px;color:#959da5;margin:12px 9px 18px 14px}.gd-side-panel-header span{font-size:13px;color:rgba(237,240,242,.57);margin:18px 176px 23px 0}.gd-side-panel-header .close{font-size:24px!important;margin-top:12px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVFyRSxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCO1FBRlUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBR3RELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsd2NBQTBDOzthQUUzQzs7Ozs7b0JBR0UsS0FBSzttQkFDTCxLQUFLOzRCQUNMLE1BQU07Ozs7SUFGUCxtQ0FBdUI7O0lBQ3ZCLGtDQUFzQjs7SUFDdEIsMkNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXNpZGUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGUtcGFuZWwuY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQE91dHB1dCgpIGhpZGVTaWRlUGFuZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBvcGVuU2lkZVBhbmVsKCkge1xuICAgIHRoaXMuaGlkZVNpZGVQYW5lbC5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=