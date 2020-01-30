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
                    template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\"\n      (click)=\"select($event, color)\" [style.border]=\"'1px solid ' + (color === white ? '#707070' : color)\"></div>\n  </div>\n</div>\n",
                    styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}.bcPicker-palette>.bcPicker-color{width:18px;height:18px;margin:2px;cursor:pointer}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7SUFFdkUsY0FBYyxHQUFHO0lBQ3JCLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztDQUM3RztBQUVEO0lBWUU7UUFOUyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNyRCxXQUFNLEdBQVEsY0FBYyxDQUFDO1FBQzdCLFVBQUssR0FBRyxTQUFTLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sTUFBTSxFQUFFLEtBQWE7UUFDMUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw2WUFBNEM7O2lCQUU3Qzs7Ozs7eUJBRUUsS0FBSztnQ0FDTCxNQUFNOytCQUNOLE1BQU07O0lBb0JULDJCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F2Qlksb0JBQW9COzs7SUFDL0Isc0NBQXdCOztJQUN4Qiw2Q0FBcUQ7O0lBQ3JELDRDQUFxRDs7SUFDckQsc0NBQTZCOztJQUM3QixxQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBERUZBVUxUX0NPTE9SUyA9IFtcbiAgJyMwMDAwMDAnLCAnIzQzNDM0MycsICcjNjY2NjY2JywgJyM5OTk5OTknLCAnI0I3QjdCNycsICcjQ0NDQ0NDJywgJyNEOUQ5RDknLCAnI0VGRUZFRicsICcjRjNGM0YzJywgJyNGRkZGRkYnLFxuICAnIzk4MDAwMCcsICcjRkYwMDAwJywgJyNGRjk5MDAnLCAnI0ZGRkYwMCcsICcjMDBGRjAwJywgJyMwMEZGRkYnLCAnIzQ5ODZFOCcsICcjMDAwMEZGJywgJyM5OTAwRkYnLCAnI0ZGMDBGRicsXG4gICcjRTZCOEFGJywgJyNGNENDQ0MnLCAnI0ZERTVDRCcsICcjRkZGMkNDJywgJyNEOUVBRDMnLCAnI0QwRTBFMicsICcjQzlEQUY4JywgJyNDRkUyRjMnLCAnI0Q5RDJFOScsICcjRUFEMURDJyxcbiAgJyNERDdFNkInLCAnI0VBOTg5OScsICcjRjlDQjlDJywgJyNGRkU1OUEnLCAnI0I3RDdBOCcsICcjQTJDNEM5JywgJyNBNEMyRjQnLCAnIzlGQzVFOCcsICcjQjRBN0Q3JywgJyNENUE2QkQnLFxuICAnI0NDNDEyNScsICcjRTA2NjY2JywgJyNGNkIyNkInLCAnI0ZGRDk2NicsICcjOTJDNDdEJywgJyM3NUE1QUYnLCAnIzZEOUVFQicsICcjNkZBOURCJywgJyM4RTdDQzMnLCAnI0MyN0JBMCcsXG4gICcjQTYxQzAwJywgJyNDQzAwMDAnLCAnI0U2OTEzOCcsICcjRjJDMTMxJywgJyM2QUE4NEYnLCAnIzQ1ODE4RScsICcjM0M3OEQ4JywgJyMzQzg1QzYnLCAnIzY3NEVBNycsICcjQTY0RDc5JyxcbiAgJyM4NTIwMEInLCAnIzk5MDAwMCcsICcjQjQ1RjA1JywgJyNCRjkwMDAnLCAnIzM3NzYxRCcsICcjMTQ0RjVDJywgJyMxMjU0Q0MnLCAnIzBBNTM5NCcsICcjMzUxQzc1JywgJyM3NDFCNDcnLFxuICAnIzVCMEYwMCcsICcjNjYwMDAwJywgJyM3ODNGMDMnLCAnIzdGNjAwMCcsICcjMjg0RTEzJywgJyMwQjM0M0QnLCAnIzFCNDU4NicsICcjMDYzNzYzJywgJyMyMDEyNEQnLCAnIzRDMTAzMCcsXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb2xvci1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc09wZW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ29sb3IgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNsb3NlT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgY29sb3JzOiBhbnkgPSBERUZBVUxUX0NPTE9SUztcbiAgd2hpdGUgPSAnI0ZGRkZGRic7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdCgkZXZlbnQsIGNvbG9yOiBzdHJpbmcpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlT3V0c2lkZS5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=