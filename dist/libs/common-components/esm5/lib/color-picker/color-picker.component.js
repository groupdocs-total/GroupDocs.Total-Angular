/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/** @type {?} */
var DEFAULT_COLORS = ['#000000', '#993300', '#333300', '#000080', '#333399', '#333333',
    '#800000', '#FF6600', '#808000', '#008000', '#008080', '#0000FF',
    '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966',
    '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
    '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0',
    '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFFF', '#99CCFF', '#FFFFFF'];
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        this.isOpen = false;
        this.selectedColor = new EventEmitter();
        this.colors = DEFAULT_COLORS;
    }
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @param {?} color
     * @return {?}
     */
    ColorPickerComponent.prototype.select = /**
     * @param {?} $event
     * @param {?} color
     * @return {?}
     */
    function ($event, color) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selectedColor.emit(color);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
    };
    ColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-color-picker',
                    template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                    styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;padding:4px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999}.bcPicker-palette>.bcPicker-color{width:20px;height:20px;margin:2px;display:inline-block;border:1px solid #efefef;background-color:#9da97b;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return []; };
    ColorPickerComponent.propDecorators = {
        isOpen: [{ type: Input }],
        selectedColor: [{ type: Output }]
    };
    return ColorPickerComponent;
}());
export { ColorPickerComponent };
if (false) {
    /** @type {?} */
    ColorPickerComponent.prototype.isOpen;
    /** @type {?} */
    ColorPickerComponent.prototype.selectedColor;
    /** @type {?} */
    ColorPickerComponent.prototype.colors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7SUFFdkUsY0FBYyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUNoRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDaEUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ2hFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUNoRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztBQUduRTtJQVVFO1FBSlMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNkLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyRCxXQUFNLEdBQVEsY0FBYyxDQUFDO0lBRzdCLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7Ozs7SUFFRCxxQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQU0sRUFBRSxLQUFhO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELG9DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsOFRBQTRDOztpQkFFN0M7Ozs7O3lCQUVFLEtBQUs7Z0NBQ0wsTUFBTTs7SUFrQlQsMkJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXBCWSxvQkFBb0I7OztJQUMvQixzQ0FBd0I7O0lBQ3hCLDZDQUFxRDs7SUFDckQsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbJyMwMDAwMDAnLCAnIzk5MzMwMCcsICcjMzMzMzAwJywgJyMwMDAwODAnLCAnIzMzMzM5OScsICcjMzMzMzMzJyxcbiAgJyM4MDAwMDAnLCAnI0ZGNjYwMCcsICcjODA4MDAwJywgJyMwMDgwMDAnLCAnIzAwODA4MCcsICcjMDAwMEZGJyxcbiAgJyM2NjY2OTknLCAnIzgwODA4MCcsICcjRkYwMDAwJywgJyNGRjk5MDAnLCAnIzk5Q0MwMCcsICcjMzM5OTY2JyxcbiAgJyMzM0NDQ0MnLCAnIzMzNjZGRicsICcjODAwMDgwJywgJyM5OTk5OTknLCAnI0ZGMDBGRicsICcjRkZDQzAwJyxcbiAgJyNGRkZGMDAnLCAnIzAwRkYwMCcsICcjMDBGRkZGJywgJyMwMENDRkYnLCAnIzk5MzM2NicsICcjQzBDMEMwJyxcbiAgJyNGRjk5Q0MnLCAnI0ZGQ0M5OScsICcjRkZGRjk5JywgJyNDQ0ZGRkYnLCAnIzk5Q0NGRicsICcjRkZGRkZGJ107XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29sb3ItcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbG9yLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbG9yLXBpY2tlci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZENvbG9yID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGNvbG9yczogYW55ID0gREVGQVVMVF9DT0xPUlM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdCgkZXZlbnQsIGNvbG9yOiBzdHJpbmcpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxufVxuIl19