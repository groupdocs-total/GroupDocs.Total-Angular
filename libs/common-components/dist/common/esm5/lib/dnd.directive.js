import * as tslib_1 from "tslib";
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { UploadFilesService } from "./upload-files.service";
var DndDirective = /** @class */ (function () {
    function DndDirective(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.isBackground = true;
        this.background = '#f8f8f8';
    }
    DndDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#999';
        }
        else {
            this.open.emit(true);
        }
    };
    DndDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#f8f8f8';
        }
        else {
            // TODO: fix blinking
            //this.open.emit(false);
        }
    };
    DndDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = '#f8f8f8';
            this._uploadFilesService.changeFilesList(files);
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
    DndDirective = tslib_1.__decorate([
        Directive({
            selector: '[gdDnd]'
        }),
        tslib_1.__metadata("design:paramtypes", [UploadFilesService])
    ], DndDirective);
    return DndDirective;
}());
export { DndDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFNMUQ7SUFRRSxzQkFBb0IsbUJBQXVDO1FBQXZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFOakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFSSxlQUFVLEdBQUcsU0FBUyxDQUFDO0lBR3hELENBQUM7SUFHTSxpQ0FBVSxHQUFqQixVQUFrQixHQUFHO1FBQ25CLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFHTSxrQ0FBVyxHQUFsQixVQUFtQixHQUFHO1FBQ3BCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzdCO2FBQU07WUFDTCxxQkFBcUI7WUFDckIsd0JBQXdCO1NBQ3pCO0lBQ0gsQ0FBQztJQUdNLDZCQUFNLEdBQWIsVUFBYyxHQUFHO1FBQ2YsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBM0NTO1FBQVQsTUFBTSxFQUFFOzsrQ0FBcUM7SUFDcEM7UUFBVCxNQUFNLEVBQUU7OzhDQUFvQztJQUNwQztRQUFSLEtBQUssRUFBRTs7c0RBQXFCO0lBRUk7UUFBaEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDOztvREFBd0I7SUFNeEQ7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7a0RBU3BDO0lBR0Q7UUFEQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7bURBVXJDO0lBR0Q7UUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7OENBV2hDO0lBN0NVLFlBQVk7UUFIeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7U0FDcEIsQ0FBQztpREFTeUMsa0JBQWtCO09BUmhELFlBQVksQ0E4Q3hCO0lBQUQsbUJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTlDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcbmltcG9ydCB7aXNCbG9ja1Njb3BlQm91bmRhcnl9IGZyb20gXCJ0c2xpbnRcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkRG5kXSdcbn0pXG5leHBvcnQgY2xhc3MgRG5kRGlyZWN0aXZlIHtcblxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBpc0JhY2tncm91bmQgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZCcpIGJhY2tncm91bmQgPSAnI2Y4ZjhmOCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ092ZXIoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmlzQmFja2dyb3VuZCkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyM5OTknO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4uZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnTGVhdmUoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmlzQmFja2dyb3VuZCkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmOGY4ZjgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBmaXggYmxpbmtpbmdcbiAgICAgIC8vdGhpcy5vcGVuLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Ecm9wKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBmaWxlcyA9IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjhmOGY4JztcbiAgICAgIHRoaXMuX3VwbG9hZEZpbGVzU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5vcGVuLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIl19