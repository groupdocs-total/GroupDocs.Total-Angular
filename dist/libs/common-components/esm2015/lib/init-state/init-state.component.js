/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class InitStateComponent {
    constructor() {
        this.fileDropped = new EventEmitter();
        this.showUploadFile = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dropped($event) {
        if ($event) {
            this.fileDropped.emit($event);
            this.showUploadFile = false;
        }
    }
}
InitStateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-init-state',
                template: "<div class=\"wrapper gd-drag-n-drop-wrap\" gdDnd (dropped)=\"dropped($event)\" (opening)=\"showUploadFile=$event\">\n  <div class=\"init-state-wrapper\">\n    <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n    <span class=\"start\">\n      <ng-content></ng-content>\n    </span>\n  </div>\n  <div *ngIf=\"showUploadFile\" class=\"init-state-dnd-wrapper\">\n    <fa-icon  class=\"icon\" [icon]=\"['fas','cloud-download-alt']\" aria-hidden=\"true\"></fa-icon>\n    <span class=\"text\">{{text}}</span>\n  </div>\n</div>\n",
                styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.icon{font-size:65px;margin-bottom:43px;display:flex;color:#959da5}.start{font-size:15px;text-align:center;color:#959da5}.gd-drag-n-drop-wrap.active{background-color:#fff;position:fixed;top:0;background:rgba(255,255,255,.8)}.gd-drag-n-drop-wrap.active .init-state-wrapper{position:absolute;opacity:.2;top:unset}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper{top:0;z-index:999}.gd-drag-n-drop-wrap.active .init-state-dnd-wrapper .icon{width:113px;height:90px;font-size:90px;color:#3e4e5a;margin-bottom:30px}.gd-drag-n-drop-wrap.active .text{color:#6e6e6e;font-size:14px}.init-state-dnd-wrapper,.init-state-wrapper{display:flex;flex-direction:column;width:250px;height:250px;align-items:center;justify-content:center}.init-state-wrapper{top:-60px;position:relative}"]
            }] }
];
/** @nocollapse */
InitStateComponent.ctorParameters = () => [];
InitStateComponent.propDecorators = {
    icon: [{ type: Input }],
    text: [{ type: Input }],
    fileDropped: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    InitStateComponent.prototype.icon;
    /** @type {?} */
    InitStateComponent.prototype.text;
    /** @type {?} */
    InitStateComponent.prototype.fileDropped;
    /** @type {?} */
    InitStateComponent.prototype.showUploadFile;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1zdGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvaW5pdC1zdGF0ZS9pbml0LXN0YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQU83RSxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCO1FBSFUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBR3ZCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBTTtRQUNaLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixnaUJBQTBDOzthQUUzQzs7Ozs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzBCQUNMLE1BQU07Ozs7SUFGUCxrQ0FBc0I7O0lBQ3RCLGtDQUFzQjs7SUFDdEIseUNBQW9EOztJQUNwRCw0Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1pbml0LXN0YXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luaXQtc3RhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbml0LXN0YXRlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5pdFN0YXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBmaWxlRHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZHJvcHBlZCgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmZpbGVEcm9wcGVkLmVtaXQoJGV2ZW50KTtcbiAgICAgIHRoaXMuc2hvd1VwbG9hZEZpbGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==