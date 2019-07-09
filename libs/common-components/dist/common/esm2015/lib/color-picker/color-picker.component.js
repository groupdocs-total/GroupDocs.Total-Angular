import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
const DEFAULT_COLORS = ['#000000', '#993300', '#333300', '#000080', '#333399', '#333333',
    '#800000', '#FF6600', '#808000', '#008000', '#008080', '#0000FF',
    '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966',
    '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
    '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0',
    '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFFF', '#99CCFF', '#FFFFFF'];
let ColorPickerComponent = class ColorPickerComponent {
    constructor() {
        this.selectedColor = new EventEmitter();
        this.colors = DEFAULT_COLORS;
    }
    ngOnInit() {
    }
    select($event, color) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selectedColor.emit(color);
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ColorPickerComponent.prototype, "selectedColor", void 0);
ColorPickerComponent = tslib_1.__decorate([
    Component({
        selector: 'gd-color-picker',
        template: "<div class=\"bcPicker-picker\">\n  <div class=\"bcPicker-palette\">\n    <div class=\"bcPicker-color\" *ngFor=\"let color of colors\" [style.background-color]=\"color\" (click)=\"select($event, color)\"></div>\n  </div>\n</div>\n",
        styles: [".bcPicker-picker{border:1px;border-radius:100%}.bcPicker-palette{width:232px;padding:5px;border:1px solid #efefef;background-color:#fdfdfd;z-index:999}.bcPicker-palette>.bcPicker-color{width:14px;height:14px;margin:2px;display:inline-block;border:1px solid #efefef;background-color:#9da97b;cursor:pointer}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ColorPickerComponent);
export { ColorPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUNoRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDaEUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ2hFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUNoRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBUXBFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBSS9CO1FBSFUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3JELFdBQU0sR0FBUSxjQUFjLENBQUM7SUFHN0IsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFhO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGLENBQUE7QUFkVztJQUFULE1BQU0sRUFBRTs7MkRBQTRDO0FBRDFDLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLGlQQUE0Qzs7S0FFN0MsQ0FBQzs7R0FDVyxvQkFBb0IsQ0FlaEM7U0FmWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IERFRkFVTFRfQ09MT1JTID0gWycjMDAwMDAwJywgJyM5OTMzMDAnLCAnIzMzMzMwMCcsICcjMDAwMDgwJywgJyMzMzMzOTknLCAnIzMzMzMzMycsXG4gICcjODAwMDAwJywgJyNGRjY2MDAnLCAnIzgwODAwMCcsICcjMDA4MDAwJywgJyMwMDgwODAnLCAnIzAwMDBGRicsXG4gICcjNjY2Njk5JywgJyM4MDgwODAnLCAnI0ZGMDAwMCcsICcjRkY5OTAwJywgJyM5OUNDMDAnLCAnIzMzOTk2NicsXG4gICcjMzNDQ0NDJywgJyMzMzY2RkYnLCAnIzgwMDA4MCcsICcjOTk5OTk5JywgJyNGRjAwRkYnLCAnI0ZGQ0MwMCcsXG4gICcjRkZGRjAwJywgJyMwMEZGMDAnLCAnIzAwRkZGRicsICcjMDBDQ0ZGJywgJyM5OTMzNjYnLCAnI0MwQzBDMCcsXG4gICcjRkY5OUNDJywgJyNGRkNDOTknLCAnI0ZGRkY5OScsICcjQ0NGRkZGJywgJyM5OUNDRkYnLCAnI0ZGRkZGRiddO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbG9yLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xvci1waWNrZXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZENvbG9yID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGNvbG9yczogYW55ID0gREVGQVVMVF9DT0xPUlM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdCgkZXZlbnQsIGNvbG9yOiBzdHJpbmcpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICB9XG59XG4iXX0=