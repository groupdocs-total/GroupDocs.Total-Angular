/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
/** @type {?} */
const DEFAULT_COLORS = ['#000000', '#993300', '#333300', '#000080', '#333399', '#333333',
    '#800000', '#FF6600', '#808000', '#008000', '#008080', '#0000FF',
    '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966',
    '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
    '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0',
    '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFFF', '#99CCFF', '#FFFFFF'];
export class ColorPickerComponent {
    constructor() {
        this.selectedColor = new EventEmitter();
        this.colors = DEFAULT_COLORS;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @param {?} color
     * @return {?}
     */
    select($event, color) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selectedColor.emit(color);
    }
}
ColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-color-picker',
                template: "<div class=\"bcPicker-picker\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:232px;padding:5px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999}.bcPicker-palette>.bcPicker-color{width:14px;height:14px;margin:2px;display:inline-block;border:1px solid #efefef;background-color:#9da97b;cursor:pointer}"]
            }] }
];
/** @nocollapse */
ColorPickerComponent.ctorParameters = () => [];
ColorPickerComponent.propDecorators = {
    selectedColor: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ColorPickerComponent.prototype.selectedColor;
    /** @type {?} */
    ColorPickerComponent.prototype.colors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztNQUVoRSxjQUFjLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ2hFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUNoRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDaEUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ2hFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0FBUW5FLE1BQU0sT0FBTyxvQkFBb0I7SUFJL0I7UUFIVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDckQsV0FBTSxHQUFRLGNBQWMsQ0FBQztJQUc3QixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBYTtRQUMxQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsaVBBQTRDOzthQUU3Qzs7Ozs7NEJBRUUsTUFBTTs7OztJQUFQLDZDQUFxRDs7SUFDckQsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBERUZBVUxUX0NPTE9SUyA9IFsnIzAwMDAwMCcsICcjOTkzMzAwJywgJyMzMzMzMDAnLCAnIzAwMDA4MCcsICcjMzMzMzk5JywgJyMzMzMzMzMnLFxuICAnIzgwMDAwMCcsICcjRkY2NjAwJywgJyM4MDgwMDAnLCAnIzAwODAwMCcsICcjMDA4MDgwJywgJyMwMDAwRkYnLFxuICAnIzY2NjY5OScsICcjODA4MDgwJywgJyNGRjAwMDAnLCAnI0ZGOTkwMCcsICcjOTlDQzAwJywgJyMzMzk5NjYnLFxuICAnIzMzQ0NDQycsICcjMzM2NkZGJywgJyM4MDAwODAnLCAnIzk5OTk5OScsICcjRkYwMEZGJywgJyNGRkNDMDAnLFxuICAnI0ZGRkYwMCcsICcjMDBGRjAwJywgJyMwMEZGRkYnLCAnIzAwQ0NGRicsICcjOTkzMzY2JywgJyNDMEMwQzAnLFxuICAnI0ZGOTlDQycsICcjRkZDQzk5JywgJyNGRkZGOTknLCAnI0NDRkZGRicsICcjOTlDQ0ZGJywgJyNGRkZGRkYnXTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb2xvci1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDb2xvciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBjb2xvcnM6IGFueSA9IERFRkFVTFRfQ09MT1JTO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZWxlY3QoJGV2ZW50LCBjb2xvcjogc3RyaW5nKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2VsZWN0ZWRDb2xvci5lbWl0KGNvbG9yKTtcbiAgfVxufVxuIl19