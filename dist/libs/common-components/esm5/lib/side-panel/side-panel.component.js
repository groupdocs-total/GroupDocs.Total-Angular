/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent() {
        this.hideSidePanel = new EventEmitter();
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
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-side-panel',
                    template: "<div class=\"gd-side-panel-wrapper\">\n  <div class=\"gd-side-panel-header\">\n    <fa-icon class=\"fas fa-info-circle\" [icon]=\"['fas',icon]\"></fa-icon>\n    <span>{{title}}</span>\n    <div class=\"close\">\n      <gd-button class=\"fas fa-times\" [icon]=\"'times'\" [tooltip]=\"'Close'\" (click)=\"openSidePanel()\"></gd-button>\n    </div>\n  </div>\n  <div class=\"gd-side-panel-body\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".gd-side-panel-wrapper{margin-right:0;width:334px!important;z-index:999;background-color:#fff;transition:margin-right .2s}.gd-side-panel-header{height:60px;background-color:#222e35;display:flex;flex-flow:row}.gd-side-panel-header>fa-icon:first-child{font-size:24px;color:#959da5;margin:12px 9px 18px 14px}.gd-side-panel-header span{font-size:13px;color:rgba(237,240,242,.57);margin:18px 176px 23px 0}.gd-side-panel-header .close{font-size:24px!important;margin-top:12px}"]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVyRTtJQVdFO1FBRlUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBR3RELENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix3Y0FBMEM7O2lCQUUzQzs7Ozs7d0JBR0UsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLE1BQU07O0lBUVQseUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVhZLGtCQUFrQjs7O0lBQzdCLG1DQUF1Qjs7SUFDdkIsa0NBQXNCOztJQUN0QiwyQ0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2lkZS1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1wYW5lbC5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2lkZVBhbmVsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBAT3V0cHV0KCkgaGlkZVNpZGVQYW5lbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG9wZW5TaWRlUGFuZWwoKSB7XG4gICAgdGhpcy5oaWRlU2lkZVBhbmVsLmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==