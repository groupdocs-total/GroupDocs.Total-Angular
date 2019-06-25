import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
let RotationDirective = class RotationDirective {
    constructor() {
        this.withMargin = true;
    }
    updateCursor() {
        if (this.angle) {
            this.animation = 'none';
            this.transition = 'none';
            this.transform = 'rotate(' + this.angle + 'deg)';
        }
        else if (this.angle === 0 && this.animation) {
            this.animation = null;
            this.transition = null;
            this.transform = null;
        }
        if (this.withMargin) {
            if (this.angle === 90 || this.angle === 270 || this.angle === -90 || this.angle === -270) {
                if (this.isHtmlMode) {
                    if (this.isLandscape()) {
                        this.margin = '164px 254px';
                    }
                    else {
                        this.margin = '-111px 254px';
                    }
                }
                else {
                    if (this.isLandscape()) {
                        this.margin = '129px 100px -79px';
                    }
                    else {
                        this.margin = '-72px 100px -79px';
                    }
                }
            }
            else if (this.angle === -180 || this.angle === 180) {
                this.margin = '280px';
            }
            else {
                this.margin = null;
            }
        }
    }
    isLandscape() {
        return this.width > this.height;
    }
    ngOnInit() {
        this.updateCursor();
    }
    ngOnChanges(changes) {
        this.updateCursor();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], RotationDirective.prototype, "angle", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], RotationDirective.prototype, "isHtmlMode", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], RotationDirective.prototype, "width", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], RotationDirective.prototype, "height", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], RotationDirective.prototype, "withMargin", void 0);
tslib_1.__decorate([
    HostBinding('style.animation'),
    tslib_1.__metadata("design:type", String)
], RotationDirective.prototype, "animation", void 0);
tslib_1.__decorate([
    HostBinding('style.transition-property'),
    tslib_1.__metadata("design:type", String)
], RotationDirective.prototype, "transition", void 0);
tslib_1.__decorate([
    HostBinding('style.transform'),
    tslib_1.__metadata("design:type", String)
], RotationDirective.prototype, "transform", void 0);
tslib_1.__decorate([
    HostBinding('style.margin'),
    tslib_1.__metadata("design:type", String)
], RotationDirective.prototype, "margin", void 0);
RotationDirective = tslib_1.__decorate([
    Directive({
        selector: '[gdRotation]'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], RotationDirective);
export { RotationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUs5RixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWM1QjtRQVJTLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFTM0IsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztxQkFDOUI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7cUJBQ25DO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7cUJBQ25DO2lCQUNGO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUFFO2dCQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNGO0lBRUgsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0NBRUYsQ0FBQTtBQTlEVTtJQUFSLEtBQUssRUFBRTs7Z0RBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTs7cURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOztnREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOztpREFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTs7cURBQW1CO0FBRUs7SUFBL0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDOztvREFBbUI7QUFDUjtJQUF6QyxXQUFXLENBQUMsMkJBQTJCLENBQUM7O3FEQUFvQjtBQUM3QjtJQUEvQixXQUFXLENBQUMsaUJBQWlCLENBQUM7O29EQUFtQjtBQUVyQjtJQUE1QixXQUFXLENBQUMsY0FBYyxDQUFDOztpREFBZ0I7QUFaakMsaUJBQWlCO0lBSDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO0tBQ3pCLENBQUM7O0dBQ1csaUJBQWlCLENBZ0U3QjtTQWhFWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFJvdGF0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgUm90YXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgYW5nbGU6IG51bWJlcjtcbiAgQElucHV0KCkgaXNIdG1sTW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpdGhNYXJnaW4gPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYW5pbWF0aW9uJykgYW5pbWF0aW9uOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNpdGlvbi1wcm9wZXJ0eScpIHRyYW5zaXRpb246IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0nKSB0cmFuc2Zvcm06IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbicpIG1hcmdpbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDdXJzb3IoKSB7XG4gICAgaWYgKHRoaXMuYW5nbGUpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gJ25vbmUnO1xuICAgICAgdGhpcy50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdGhpcy50cmFuc2Zvcm0gPSAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbmdsZSA9PT0gMCAmJiB0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb24gPSBudWxsO1xuICAgICAgdGhpcy50cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy53aXRoTWFyZ2luKSB7XG4gICAgICBpZiAodGhpcy5hbmdsZSA9PT0gOTAgfHwgdGhpcy5hbmdsZSA9PT0gMjcwIHx8IHRoaXMuYW5nbGUgPT09IC05MCB8fCB0aGlzLmFuZ2xlID09PSAtMjcwKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSHRtbE1vZGUpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0xhbmRzY2FwZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICcxNjRweCAyNTRweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJy0xMTFweCAyNTRweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJzEyOXB4IDEwMHB4IC03OXB4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnLTcycHggMTAwcHggLTc5cHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID09PSAtMTgwIHx8IHRoaXMuYW5nbGUgPT09IDE4MCkge1xuICAgICAgICB0aGlzLm1hcmdpbiA9ICcyODBweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcmdpbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBpc0xhbmRzY2FwZSgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aCA+IHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDdXJzb3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpXG4gIH1cblxufVxuIl19