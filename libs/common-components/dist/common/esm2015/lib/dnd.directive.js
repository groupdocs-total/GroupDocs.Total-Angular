import * as tslib_1 from "tslib";
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { UploadFilesService } from "./upload-files.service";
let DndDirective = class DndDirective {
    constructor(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.isBackground = true;
        this.background = '#f8f8f8';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#999';
        }
        else {
            this.open.emit(true);
        }
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#f8f8f8';
        }
        else {
            // TODO: fix blinking
            //this.open.emit(false);
        }
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = '#f8f8f8';
            this._uploadFilesService.changeFilesList(files);
            this.close.emit(true);
            this.open.emit(false);
        }
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DndDirective.prototype, "close", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DndDirective.prototype, "open", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], DndDirective.prototype, "isBackground", void 0);
tslib_1.__decorate([
    HostBinding('style.background'),
    tslib_1.__metadata("design:type", Object)
], DndDirective.prototype, "background", void 0);
tslib_1.__decorate([
    HostListener('dragover', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DndDirective.prototype, "onDragOver", null);
tslib_1.__decorate([
    HostListener('dragleave', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DndDirective.prototype, "onDragLeave", null);
tslib_1.__decorate([
    HostListener('drop', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DndDirective.prototype, "onDrop", null);
DndDirective = tslib_1.__decorate([
    Directive({
        selector: '[gdDnd]'
    }),
    tslib_1.__metadata("design:paramtypes", [UploadFilesService])
], DndDirective);
export { DndDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFNMUQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQVF2QixZQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQU5qRCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVJLGVBQVUsR0FBRyxTQUFTLENBQUM7SUFHeEQsQ0FBQztJQUdNLFVBQVUsQ0FBQyxHQUFHO1FBQ25CLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFHTSxXQUFXLENBQUMsR0FBRztRQUNwQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjthQUFNO1lBQ0wscUJBQXFCO1lBQ3JCLHdCQUF3QjtTQUN6QjtJQUNILENBQUM7SUFHTSxNQUFNLENBQUMsR0FBRztRQUNmLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUE1Q1c7SUFBVCxNQUFNLEVBQUU7OzJDQUFxQztBQUNwQztJQUFULE1BQU0sRUFBRTs7MENBQW9DO0FBQ3BDO0lBQVIsS0FBSyxFQUFFOztrREFBcUI7QUFFSTtJQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7O2dEQUF3QjtBQU14RDtJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs4Q0FTcEM7QUFHRDtJQURDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzsrQ0FVckM7QUFHRDtJQURDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzswQ0FXaEM7QUE3Q1UsWUFBWTtJQUh4QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDOzZDQVN5QyxrQkFBa0I7R0FSaEQsWUFBWSxDQThDeEI7U0E5Q1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XG5pbXBvcnQge2lzQmxvY2tTY29wZUJvdW5kYXJ5fSBmcm9tIFwidHNsaW50XCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZERuZF0nXG59KVxuZXhwb3J0IGNsYXNzIERuZERpcmVjdGl2ZSB7XG5cbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgaXNCYWNrZ3JvdW5kID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJhY2tncm91bmQnKSBiYWNrZ3JvdW5kID0gJyNmOGY4ZjgnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyYWdPdmVyKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5pc0JhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjOTk5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ0xlYXZlKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5pc0JhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjhmOGY4JztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogZml4IGJsaW5raW5nXG4gICAgICAvL3RoaXMub3Blbi5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJvcChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZmlsZXMgPSBldnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmJhY2tncm91bmQgPSAnI2Y4ZjhmOCc7XG4gICAgICB0aGlzLl91cGxvYWRGaWxlc1NlcnZpY2UuY2hhbmdlRmlsZXNMaXN0KGZpbGVzKTtcbiAgICAgIHRoaXMuY2xvc2UuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMub3Blbi5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==