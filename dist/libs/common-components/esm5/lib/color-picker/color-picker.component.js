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
                    template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                    styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:flex;flex-wrap:wrap;padding-left:7px}.bcPicker-palette>.bcPicker-color{width:19px;height:19px;margin:2px;cursor:pointer;border:1px solid #707070}"]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7SUFFdkUsY0FBYyxHQUFHO0lBQ3JCLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztDQUM3RztBQUdEO0lBV0U7UUFMUyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNyRCxXQUFNLEdBQVEsY0FBYyxDQUFDO0lBRzdCLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7Ozs7SUFFRCxxQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQU0sRUFBRSxLQUFhO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELG9DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsOFRBQTRDOztpQkFFN0M7Ozs7O3lCQUVFLEtBQUs7Z0NBQ0wsTUFBTTsrQkFDTixNQUFNOztJQW1CVCwyQkFBQztDQUFBLEFBM0JELElBMkJDO1NBdEJZLG9CQUFvQjs7O0lBQy9CLHNDQUF3Qjs7SUFDeEIsNkNBQXFEOztJQUNyRCw0Q0FBcUQ7O0lBQ3JELHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IERFRkFVTFRfQ09MT1JTID0gW1xuICAnIzAwMDAwMCcsICcjNDM0MzQzJywgJyM2NjY2NjYnLCAnIzk5OTk5OScsICcjQjdCN0I3JywgJyNDQ0NDQ0MnLCAnI0Q5RDlEOScsICcjRUZFRkVGJywgJyNGM0YzRjMnLCAnI0ZGRkZGRicsXG4gICcjOTgwMDAwJywgJyNGRjAwMDAnLCAnI0ZGOTkwMCcsICcjRkZGRjAwJywgJyMwMEZGMDAnLCAnIzAwRkZGRicsICcjNDk4NkU4JywgJyMwMDAwRkYnLCAnIzk5MDBGRicsICcjRkYwMEZGJyxcbiAgJyNFNkI4QUYnLCAnI0Y0Q0NDQycsICcjRkRFNUNEJywgJyNGRkYyQ0MnLCAnI0Q5RUFEMycsICcjRDBFMEUyJywgJyNDOURBRjgnLCAnI0NGRTJGMycsICcjRDlEMkU5JywgJyNFQUQxREMnLFxuICAnI0REN0U2QicsICcjRUE5ODk5JywgJyNGOUNCOUMnLCAnI0ZGRTU5QScsICcjQjdEN0E4JywgJyNBMkM0QzknLCAnI0E0QzJGNCcsICcjOUZDNUU4JywgJyNCNEE3RDcnLCAnI0Q1QTZCRCcsXG4gICcjQ0M0MTI1JywgJyNFMDY2NjYnLCAnI0Y2QjI2QicsICcjRkZEOTY2JywgJyM5MkM0N0QnLCAnIzc1QTVBRicsICcjNkQ5RUVCJywgJyM2RkE5REInLCAnIzhFN0NDMycsICcjQzI3QkEwJyxcbiAgJyNBNjFDMDAnLCAnI0NDMDAwMCcsICcjRTY5MTM4JywgJyNGMkMxMzEnLCAnIzZBQTg0RicsICcjNDU4MThFJywgJyMzQzc4RDgnLCAnIzNDODVDNicsICcjNjc0RUE3JywgJyNBNjRENzknLFxuICAnIzg1MjAwQicsICcjOTkwMDAwJywgJyNCNDVGMDUnLCAnI0JGOTAwMCcsICcjMzc3NjFEJywgJyMxNDRGNUMnLCAnIzEyNTRDQycsICcjMEE1Mzk0JywgJyMzNTFDNzUnLCAnIzc0MUI0NycsXG4gICcjNUIwRjAwJywgJyM2NjAwMDAnLCAnIzc4M0YwMycsICcjN0Y2MDAwJywgJyMyODRFMTMnLCAnIzBCMzQzRCcsICcjMUI0NTg2JywgJyMwNjM3NjMnLCAnIzIwMTI0RCcsICcjNEMxMDMwJyxcbl07XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29sb3ItcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbG9yLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbG9yLXBpY2tlci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZENvbG9yID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjbG9zZU91dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGNvbG9yczogYW55ID0gREVGQVVMVF9DT0xPUlM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdCgkZXZlbnQsIGNvbG9yOiBzdHJpbmcpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlT3V0c2lkZS5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=