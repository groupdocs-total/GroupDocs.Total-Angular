/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ConversionQueueComponent {
    constructor() {
        this.items = [];
        this.selectedItemToConvert = new EventEmitter();
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
    convertSingleItem($event) {
        this.selectedItemToConvert.emit($event);
    }
}
ConversionQueueComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-conversion-queue',
                template: "<div id=\"gd-convert-queue\">\n  <div class=\"gd-queue-header\">\n    <div class=\"gd-placeholder\"></div>\n    <div>Source</div>\n    <div>Size</div>\n    <div>State</div>\n    <div>Target</div>\n    <div class=\"gd-queue-last-placeholder\"></div>\n  </div>\n  <div class=\"gd-queue-body\">\n    <div *ngFor=\"let item of items\">\n        <gd-conversion-item [item]=\"item\"></gd-conversion-item>\n    </div>\n  </div>\n</div>",
                styles: ["#gd-convert-queue{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;background-color:#e7e7e7}.gd-queue-header{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#6e6e6e;width:100%;height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center}.gd-placeholder{margin:0 42px}.gd-queue-header div:nth-child(2){width:671px;text-align:left;display:-webkit-box;display:flex}.gd-queue-header div:nth-child(4){margin:0 162px 0 111px;width:32px}.gd-queue-header div:nth-child(3){width:112px;text-align:left}.gd-queue-header div:nth-child(5){width:644px;text-align:left}.gd-queue-body{overflow-y:scroll;height:calc(100% - 120px)}.gd-queue-last-placeholder{margin:0 52px}@media (max-width:1037px){.gd-queue-header{display:none}}"]
            }] }
];
/** @nocollapse */
ConversionQueueComponent.ctorParameters = () => [];
ConversionQueueComponent.propDecorators = {
    items: [{ type: Input }],
    selectedItemToConvert: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ConversionQueueComponent.prototype.items;
    /** @type {?} */
    ConversionQueueComponent.prototype.selectedItemToConvert;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1xdWV1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29udmVyc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJzaW9uLXF1ZXVlL2NvbnZlcnNpb24tcXVldWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUy9FLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkM7UUFIUyxVQUFLLEdBQTBCLEVBQUUsQ0FBQztRQUNqQywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztJQUcxRSxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBMkI7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHdiQUFnRDs7YUFFakQ7Ozs7O29CQUdFLEtBQUs7b0NBQ0wsTUFBTTs7OztJQURQLHlDQUEyQzs7SUFDM0MseURBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udmVyc2lvbkl0ZW1Nb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbnZlcnNpb24tcXVldWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2lvbi1xdWV1ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24tcXVldWUuY29tcG9uZW50Lmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25RdWV1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBDb252ZXJzaW9uSXRlbU1vZGVsW10gPSBbXTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbVRvQ29udmVydCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29udmVyc2lvbkl0ZW1Nb2RlbD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBjb252ZXJ0U2luZ2xlSXRlbSgkZXZlbnQ6IENvbnZlcnNpb25JdGVtTW9kZWwpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbVRvQ29udmVydC5lbWl0KCRldmVudCk7XG4gIH1cbn1cbiJdfQ==