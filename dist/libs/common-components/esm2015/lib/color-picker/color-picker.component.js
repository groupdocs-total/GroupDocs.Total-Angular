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
                template: "<div class=\"bcPicker-picker\" (clickOutside)=\"close()\" *ngIf=\"isOpen\" [clickOutsideEnabled]=\"isOpen\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
                styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:250px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999;box-shadow:0 0 5px #efefef;display:flex;flex-wrap:wrap;padding-left:7px}.bcPicker-palette>.bcPicker-color{width:19px;height:19px;margin:2px;cursor:pointer;border:1px solid #707070}"]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7TUFFdkUsY0FBYyxHQUFHO0lBQ3JCLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUM1RyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzVHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDNUcsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztDQUM3RztBQVFELE1BQU0sT0FBTyxvQkFBb0I7SUFNL0I7UUFMUyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNyRCxXQUFNLEdBQVEsY0FBYyxDQUFDO0lBRzdCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFhO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDhUQUE0Qzs7YUFFN0M7Ozs7O3FCQUVFLEtBQUs7NEJBQ0wsTUFBTTsyQkFDTixNQUFNOzs7O0lBRlAsc0NBQXdCOztJQUN4Qiw2Q0FBcUQ7O0lBQ3JELDRDQUFxRDs7SUFDckQsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbXG4gICcjMDAwMDAwJywgJyM0MzQzNDMnLCAnIzY2NjY2NicsICcjOTk5OTk5JywgJyNCN0I3QjcnLCAnI0NDQ0NDQycsICcjRDlEOUQ5JywgJyNFRkVGRUYnLCAnI0YzRjNGMycsICcjRkZGRkZGJyxcbiAgJyM5ODAwMDAnLCAnI0ZGMDAwMCcsICcjRkY5OTAwJywgJyNGRkZGMDAnLCAnIzAwRkYwMCcsICcjMDBGRkZGJywgJyM0OTg2RTgnLCAnIzAwMDBGRicsICcjOTkwMEZGJywgJyNGRjAwRkYnLFxuICAnI0U2QjhBRicsICcjRjRDQ0NDJywgJyNGREU1Q0QnLCAnI0ZGRjJDQycsICcjRDlFQUQzJywgJyNEMEUwRTInLCAnI0M5REFGOCcsICcjQ0ZFMkYzJywgJyNEOUQyRTknLCAnI0VBRDFEQycsXG4gICcjREQ3RTZCJywgJyNFQTk4OTknLCAnI0Y5Q0I5QycsICcjRkZFNTlBJywgJyNCN0Q3QTgnLCAnI0EyQzRDOScsICcjQTRDMkY0JywgJyM5RkM1RTgnLCAnI0I0QTdENycsICcjRDVBNkJEJyxcbiAgJyNDQzQxMjUnLCAnI0UwNjY2NicsICcjRjZCMjZCJywgJyNGRkQ5NjYnLCAnIzkyQzQ3RCcsICcjNzVBNUFGJywgJyM2RDlFRUInLCAnIzZGQTlEQicsICcjOEU3Q0MzJywgJyNDMjdCQTAnLFxuICAnI0E2MUMwMCcsICcjQ0MwMDAwJywgJyNFNjkxMzgnLCAnI0YyQzEzMScsICcjNkFBODRGJywgJyM0NTgxOEUnLCAnIzNDNzhEOCcsICcjM0M4NUM2JywgJyM2NzRFQTcnLCAnI0E2NEQ3OScsXG4gICcjODUyMDBCJywgJyM5OTAwMDAnLCAnI0I0NUYwNScsICcjQkY5MDAwJywgJyMzNzc2MUQnLCAnIzE0NEY1QycsICcjMTI1NENDJywgJyMwQTUzOTQnLCAnIzM1MUM3NScsICcjNzQxQjQ3JyxcbiAgJyM1QjBGMDAnLCAnIzY2MDAwMCcsICcjNzgzRjAzJywgJyM3RjYwMDAnLCAnIzI4NEUxMycsICcjMEIzNDNEJywgJyMxQjQ1ODYnLCAnIzA2Mzc2MycsICcjMjAxMjREJywgJyM0QzEwMzAnLFxuXTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb2xvci1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc09wZW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ29sb3IgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNsb3NlT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgY29sb3JzOiBhbnkgPSBERUZBVUxUX0NPTE9SUztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2VsZWN0KCRldmVudCwgY29sb3I6IHN0cmluZykge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VPdXRzaWRlLmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==