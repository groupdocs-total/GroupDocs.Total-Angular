import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let ChoiceButtonComponent = class ChoiceButtonComponent {
    constructor() {
        this.selected = new EventEmitter();
        this.open = false;
    }
    ngOnInit() {
    }
    openChoices() {
        this.open = !this.open;
    }
    select(choice) {
        this.selected.emit(choice);
        this.open = false;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ChoiceButtonComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ChoiceButtonComponent.prototype, "icon", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ChoiceButtonComponent.prototype, "choices", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], ChoiceButtonComponent.prototype, "selected", void 0);
ChoiceButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'gd-choice-button',
        template: "<div class=\"choice-button\">\n  <i fa [name]=\"icon\"></i>\n  <span class=\"button-name\">{{name}}</span>\n  <div class=\"down\">\n    <i fa [name]=\"'angle-down'\" (click)=\"openChoices()\"></i>\n  </div>\n  <div class=\"choices\" *ngIf=\"open\">\n    <div class=\"upload-from\">Upload from:</div>\n    <div class=\"choice\" *ngFor=\"let choice of choices\" (click)=\"select(choice.name)\">\n      <i fa [name]=\"choice.icon\"></i>\n      {{choice.name}}\n    </div>\n  </div>\n</div>\n",
        styles: [".choice-button{width:137px;height:31px;color:#fff;background-color:#25c2d4;display:flex}.choice-button i{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:10px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ChoiceButtonComponent);
export { ChoiceButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvaWNlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY2hvaWNlLWJ1dHRvbi9jaG9pY2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU83RSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU9oQztRQUhVLGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0RSxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBRUcsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztDQUNGLENBQUE7QUFuQlU7SUFBUixLQUFLLEVBQUU7O21EQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7O21EQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7O3NEQUFTO0FBQ1A7SUFBVCxNQUFNLEVBQUU7c0NBQVcsWUFBWTt1REFBc0M7QUFKM0QscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsb2ZBQTZDOztLQUU5QyxDQUFDOztHQUNXLHFCQUFxQixDQW9CakM7U0FwQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY2hvaWNlLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaG9pY2UtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hvaWNlLWJ1dHRvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENob2ljZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBjaG9pY2VzO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIG9wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3BlbkNob2ljZXMoKSB7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgfVxuXG4gIHNlbGVjdChjaG9pY2U6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChjaG9pY2UpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG59XG4iXX0=