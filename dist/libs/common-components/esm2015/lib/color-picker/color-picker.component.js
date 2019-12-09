/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/** @type {?} */
const DEFAULT_COLORS = [
    '#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF',
    '#980000', '#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#4986E8', '#0000FF', '#9900FF', '#FF00FF',
    '#E6B8AF', '#F4CCCC', '#FDE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E2', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
    '#DD7E6B', '#EA9899', '#F9CB9C', '#FFE59A', '#B7D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D7', '#D5A6BD',
    '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#92C47D', '#75A5AF', '#6D9EEB', '#6FA9DB', '#8E7CC3', '#C27BA0',
    '#A61C00', '#CC0000', '#E69138', '#F2C131', '#6AA84F', '#45818E', '#3C78D8', '#3C85C6', '#674EA7', '#A64D79',
    '#85200B', '#990000', '#B45F05', '#BF9000', '#37761D', '#144F5C', '#1254CC', '#0A5394', '#351C75', '#741B47',
    '#5B0F00', '#660000', '#783F03', '#7F6000', '#284E13', '#0B343D', '#1B4586', '#063763', '#20124D', '#4C1030',
];
export class ColorPickerComponent {
    constructor() {
        this.isOpen = false;
        this.selectedColor = new EventEmitter();
        this.closeOutside = new EventEmitter();
        this.colors = DEFAULT_COLORS;
        this.white = '#FFFFFF';
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
    /**
     * @return {?}
     */
    close() {
        this.isOpen = false;
        this.closeOutside.emit(true);
    }
}
ColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-color-picker',
                template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\"\n      (click)=\"select($event, color)\" [style.border]=\"'1px solid ' + (color === white ? '#707070' : color)\"></div>\n  </div>\n</div>\n",
                styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}.bcPicker-palette>.bcPicker-color{width:18px;height:18px;margin:2px;cursor:pointer}"]
            }] }
];
/** @nocollapse */
ColorPickerComponent.ctorParameters = () => [];
ColorPickerComponent.propDecorators = {
    isOpen: [{ type: Input }],
    selectedColor: [{ type: Output }],
    closeOutside: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7TUFFdkUsY0FBYyxHQUFHO0lBQ3JCLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztDQUM3RztBQU9ELE1BQU0sT0FBTyxvQkFBb0I7SUFPL0I7UUFOUyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNyRCxXQUFNLEdBQVEsY0FBYyxDQUFDO1FBQzdCLFVBQUssR0FBRyxTQUFTLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQWE7UUFDMUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsNllBQTRDOzthQUU3Qzs7Ozs7cUJBRUUsS0FBSzs0QkFDTCxNQUFNOzJCQUNOLE1BQU07Ozs7SUFGUCxzQ0FBd0I7O0lBQ3hCLDZDQUFxRDs7SUFDckQsNENBQXFEOztJQUNyRCxzQ0FBNkI7O0lBQzdCLHFDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IERFRkFVTFRfQ09MT1JTID0gW1xuICAnIzAwMDAwMCcsICcjNDM0MzQzJywgJyM2NjY2NjYnLCAnIzk5OTk5OScsICcjQjdCN0I3JywgJyNDQ0NDQ0MnLCAnI0Q5RDlEOScsICcjRUZFRkVGJywgJyNGM0YzRjMnLCAnI0ZGRkZGRicsXG4gICcjOTgwMDAwJywgJyNGRjAwMDAnLCAnI0ZGOTkwMCcsICcjRkZGRjAwJywgJyMwMEZGMDAnLCAnIzAwRkZGRicsICcjNDk4NkU4JywgJyMwMDAwRkYnLCAnIzk5MDBGRicsICcjRkYwMEZGJyxcbiAgJyNFNkI4QUYnLCAnI0Y0Q0NDQycsICcjRkRFNUNEJywgJyNGRkYyQ0MnLCAnI0Q5RUFEMycsICcjRDBFMEUyJywgJyNDOURBRjgnLCAnI0NGRTJGMycsICcjRDlEMkU5JywgJyNFQUQxREMnLFxuICAnI0REN0U2QicsICcjRUE5ODk5JywgJyNGOUNCOUMnLCAnI0ZGRTU5QScsICcjQjdEN0E4JywgJyNBMkM0QzknLCAnI0E0QzJGNCcsICcjOUZDNUU4JywgJyNCNEE3RDcnLCAnI0Q1QTZCRCcsXG4gICcjQ0M0MTI1JywgJyNFMDY2NjYnLCAnI0Y2QjI2QicsICcjRkZEOTY2JywgJyM5MkM0N0QnLCAnIzc1QTVBRicsICcjNkQ5RUVCJywgJyM2RkE5REInLCAnIzhFN0NDMycsICcjQzI3QkEwJyxcbiAgJyNBNjFDMDAnLCAnI0NDMDAwMCcsICcjRTY5MTM4JywgJyNGMkMxMzEnLCAnIzZBQTg0RicsICcjNDU4MThFJywgJyMzQzc4RDgnLCAnIzNDODVDNicsICcjNjc0RUE3JywgJyNBNjRENzknLFxuICAnIzg1MjAwQicsICcjOTkwMDAwJywgJyNCNDVGMDUnLCAnI0JGOTAwMCcsICcjMzc3NjFEJywgJyMxNDRGNUMnLCAnIzEyNTRDQycsICcjMEE1Mzk0JywgJyMzNTFDNzUnLCAnIzc0MUI0NycsXG4gICcjNUIwRjAwJywgJyM2NjAwMDAnLCAnIzc4M0YwMycsICcjN0Y2MDAwJywgJyMyODRFMTMnLCAnIzBCMzQzRCcsICcjMUI0NTg2JywgJyMwNjM3NjMnLCAnIzIwMTI0RCcsICcjNEMxMDMwJyxcbl07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbG9yLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xvci1waWNrZXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDb2xvciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgY2xvc2VPdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBjb2xvcnM6IGFueSA9IERFRkFVTFRfQ09MT1JTO1xuICB3aGl0ZSA9ICcjRkZGRkZGJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2VsZWN0KCRldmVudCwgY29sb3I6IHN0cmluZykge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VPdXRzaWRlLmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==