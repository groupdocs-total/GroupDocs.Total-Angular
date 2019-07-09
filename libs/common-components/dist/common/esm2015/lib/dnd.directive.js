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
            this.closeArea();
        }
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = '#f8f8f8';
            this._uploadFilesService.changeFilesList(files);
            this.closeArea();
        }
    }
    onClick(event) {
        this.closeArea();
    }
    closeArea() {
        this.close.emit(true);
        this.open.emit(false);
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
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DndDirective.prototype, "onClick", null);
DndDirective = tslib_1.__decorate([
    Directive({
        selector: '[gdDnd]'
    }),
    tslib_1.__metadata("design:paramtypes", [UploadFilesService])
], DndDirective);
export { DndDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFLMUQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQVF2QixZQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQU5qRCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVJLGVBQVUsR0FBRyxTQUFTLENBQUM7SUFHeEQsQ0FBQztJQUdNLFVBQVUsQ0FBQyxHQUFHO1FBQ25CLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFHTSxXQUFXLENBQUMsR0FBRztRQUNwQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUdNLE1BQU0sQ0FBQyxHQUFHO1FBQ2YsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUdNLE9BQU8sQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBcERXO0lBQVQsTUFBTSxFQUFFOzsyQ0FBcUM7QUFDcEM7SUFBVCxNQUFNLEVBQUU7OzBDQUFvQztBQUNwQztJQUFSLEtBQUssRUFBRTs7a0RBQXFCO0FBRUk7SUFBaEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDOztnREFBd0I7QUFNeEQ7SUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7OENBU3BDO0FBR0Q7SUFEQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7K0NBU3JDO0FBR0Q7SUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7MENBVWhDO0FBR0Q7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7MkNBR2pDO0FBaERVLFlBQVk7SUFIeEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQzs2Q0FTeUMsa0JBQWtCO0dBUmhELFlBQVksQ0FzRHhCO1NBdERZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2REbmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBEbmREaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIGlzQmFja2dyb3VuZCA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5iYWNrZ3JvdW5kJykgYmFja2dyb3VuZCA9ICcjZjhmOGY4JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnT3ZlcihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuaXNCYWNrZ3JvdW5kKSB7XG4gICAgICB0aGlzLmJhY2tncm91bmQgPSAnIzk5OSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3Blbi5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyYWdMZWF2ZShldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuaXNCYWNrZ3JvdW5kKSB7XG4gICAgICB0aGlzLmJhY2tncm91bmQgPSAnI2Y4ZjhmOCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VBcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyb3AoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGZpbGVzID0gZXZ0LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmOGY4ZjgnO1xuICAgICAgdGhpcy5fdXBsb2FkRmlsZXNTZXJ2aWNlLmNoYW5nZUZpbGVzTGlzdChmaWxlcyk7XG4gICAgICB0aGlzLmNsb3NlQXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlQXJlYSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUFyZWEoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICAgIHRoaXMub3Blbi5lbWl0KGZhbHNlKTtcbiAgfVxufVxuIl19