/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/** @type {?} */
var DEFAULT_COLORS = [
    '#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF',
    '#980000', '#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#4986E8', '#0000FF', '#9900FF', '#FF00FF',
    '#E6B8AF', '#F4CCCC', '#FDE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E2', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
    '#DD7E6B', '#EA9899', '#F9CB9C', '#FFE59A', '#B7D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D7', '#D5A6BD',
    '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#92C47D', '#75A5AF', '#6D9EEB', '#6FA9DB', '#8E7CC3', '#C27BA0',
    '#A61C00', '#CC0000', '#E69138', '#F2C131', '#6AA84F', '#45818E', '#3C78D8', '#3C85C6', '#674EA7', '#A64D79',
    '#85200B', '#990000', '#B45F05', '#BF9000', '#37761D', '#144F5C', '#1254CC', '#0A5394', '#351C75', '#741B47',
    '#5B0F00', '#660000', '#783F03', '#7F6000', '#284E13', '#0B343D', '#1B4586', '#063763', '#20124D', '#4C1030',
];
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        this.isOpen = false;
        this.selectedColor = new EventEmitter();
        this.closeOutside = new EventEmitter();
        this.colors = DEFAULT_COLORS;
        this.white = '#FFFFFF';
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
        this.closeOutside.emit(true);
    };
    ColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-color-picker',
                    template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\r\n  <div class=\"bcPicker-palette\">\r\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\"\r\n      (click)=\"select($event, color)\" [style.border]=\"'1px solid ' + (color === white ? '#707070' : color)\"\r\n      (touchstart)=\"select($event, color)\"></div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:flex;flex-wrap:wrap;justify-content:center}.bcPicker-palette>.bcPicker-color{width:18px;height:18px;margin:2px;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return []; };
    ColorPickerComponent.propDecorators = {
        isOpen: [{ type: Input }],
        selectedColor: [{ type: Output }],
        closeOutside: [{ type: Output }]
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
    ColorPickerComponent.prototype.closeOutside;
    /** @type {?} */
    ColorPickerComponent.prototype.colors;
    /** @type {?} */
    ColorPickerComponent.prototype.white;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7SUFFdkUsY0FBYyxHQUFHO0lBQ3JCLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztDQUM3RztBQUVEO0lBWUU7UUFOUyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNyRCxXQUFNLEdBQVEsY0FBYyxDQUFDO1FBQzdCLFVBQUssR0FBRyxTQUFTLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sTUFBTSxFQUFFLEtBQWE7UUFDMUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix5Y0FBNEM7O2lCQUU3Qzs7Ozs7eUJBRUUsS0FBSztnQ0FDTCxNQUFNOytCQUNOLE1BQU07O0lBb0JULDJCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F2Qlksb0JBQW9COzs7SUFDL0Isc0NBQXdCOztJQUN4Qiw2Q0FBcUQ7O0lBQ3JELDRDQUFxRDs7SUFDckQsc0NBQTZCOztJQUM3QixxQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbXHJcbiAgJyMwMDAwMDAnLCAnIzQzNDM0MycsICcjNjY2NjY2JywgJyM5OTk5OTknLCAnI0I3QjdCNycsICcjQ0NDQ0NDJywgJyNEOUQ5RDknLCAnI0VGRUZFRicsICcjRjNGM0YzJywgJyNGRkZGRkYnLFxyXG4gICcjOTgwMDAwJywgJyNGRjAwMDAnLCAnI0ZGOTkwMCcsICcjRkZGRjAwJywgJyMwMEZGMDAnLCAnIzAwRkZGRicsICcjNDk4NkU4JywgJyMwMDAwRkYnLCAnIzk5MDBGRicsICcjRkYwMEZGJyxcclxuICAnI0U2QjhBRicsICcjRjRDQ0NDJywgJyNGREU1Q0QnLCAnI0ZGRjJDQycsICcjRDlFQUQzJywgJyNEMEUwRTInLCAnI0M5REFGOCcsICcjQ0ZFMkYzJywgJyNEOUQyRTknLCAnI0VBRDFEQycsXHJcbiAgJyNERDdFNkInLCAnI0VBOTg5OScsICcjRjlDQjlDJywgJyNGRkU1OUEnLCAnI0I3RDdBOCcsICcjQTJDNEM5JywgJyNBNEMyRjQnLCAnIzlGQzVFOCcsICcjQjRBN0Q3JywgJyNENUE2QkQnLFxyXG4gICcjQ0M0MTI1JywgJyNFMDY2NjYnLCAnI0Y2QjI2QicsICcjRkZEOTY2JywgJyM5MkM0N0QnLCAnIzc1QTVBRicsICcjNkQ5RUVCJywgJyM2RkE5REInLCAnIzhFN0NDMycsICcjQzI3QkEwJyxcclxuICAnI0E2MUMwMCcsICcjQ0MwMDAwJywgJyNFNjkxMzgnLCAnI0YyQzEzMScsICcjNkFBODRGJywgJyM0NTgxOEUnLCAnIzNDNzhEOCcsICcjM0M4NUM2JywgJyM2NzRFQTcnLCAnI0E2NEQ3OScsXHJcbiAgJyM4NTIwMEInLCAnIzk5MDAwMCcsICcjQjQ1RjA1JywgJyNCRjkwMDAnLCAnIzM3NzYxRCcsICcjMTQ0RjVDJywgJyMxMjU0Q0MnLCAnIzBBNTM5NCcsICcjMzUxQzc1JywgJyM3NDFCNDcnLFxyXG4gICcjNUIwRjAwJywgJyM2NjAwMDAnLCAnIzc4M0YwMycsICcjN0Y2MDAwJywgJyMyODRFMTMnLCAnIzBCMzQzRCcsICcjMUI0NTg2JywgJyMwNjM3NjMnLCAnIzIwMTI0RCcsICcjNEMxMDMwJyxcclxuXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtY29sb3ItcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb2xvci1waWNrZXIuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENvbG9yID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBjb2xvcnM6IGFueSA9IERFRkFVTFRfQ09MT1JTO1xyXG4gIHdoaXRlID0gJyNGRkZGRkYnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KCRldmVudCwgY29sb3I6IHN0cmluZykge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsb3NlT3V0c2lkZS5lbWl0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=