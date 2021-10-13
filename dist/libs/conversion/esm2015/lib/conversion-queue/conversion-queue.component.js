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
                template: "<div id=\"gd-convert-queue\">\r\n  <div class=\"gd-queue-header\">\r\n    <div class=\"gd-placeholder\"></div>\r\n    <div>Source</div>\r\n    <div>Size</div>\r\n    <div>State</div>\r\n    <div>Target</div>\r\n    <div class=\"gd-queue-last-placeholder\"></div>\r\n  </div>\r\n  <div class=\"gd-queue-body\">\r\n    <div *ngFor=\"let item of items\">\r\n        <gd-conversion-item [item]=\"item\"></gd-conversion-item>\r\n    </div>\r\n  </div>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1xdWV1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29udmVyc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJzaW9uLXF1ZXVlL2NvbnZlcnNpb24tcXVldWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUy9FLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkM7UUFIUyxVQUFLLEdBQTBCLEVBQUUsQ0FBQztRQUNqQywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztJQUcxRSxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBMkI7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG9kQUFnRDs7YUFFakQ7Ozs7O29CQUdFLEtBQUs7b0NBQ0wsTUFBTTs7OztJQURQLHlDQUEyQzs7SUFDM0MseURBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uSXRlbU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtY29udmVyc2lvbi1xdWV1ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNpb24tcXVldWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24tcXVldWUuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25RdWV1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaXRlbXM6IENvbnZlcnNpb25JdGVtTW9kZWxbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEl0ZW1Ub0NvbnZlcnQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbnZlcnNpb25JdGVtTW9kZWw+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRTaW5nbGVJdGVtKCRldmVudDogQ29udmVyc2lvbkl0ZW1Nb2RlbCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1Ub0NvbnZlcnQuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=