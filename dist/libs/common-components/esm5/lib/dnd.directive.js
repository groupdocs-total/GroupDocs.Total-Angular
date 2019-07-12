/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { UploadFilesService } from "./upload-files.service";
var DndDirective = /** @class */ (function () {
    function DndDirective(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.isBackground = true;
        this.background = 'transparent';
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    DndDirective.prototype.onDragOver = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#999';
        }
        else {
            this.open.emit(true);
        }
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DndDirective.prototype.onDragLeave = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
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
    /**
     * @param {?} evt
     * @return {?}
     */
    DndDirective.prototype.onDrop = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        /** @type {?} */
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = '#f8f8f8';
            this._uploadFilesService.changeFilesList(files);
            this.close.emit(true);
            this.open.emit(false);
        }
    };
    DndDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdDnd]'
                },] }
    ];
    /** @nocollapse */
    DndDirective.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    DndDirective.propDecorators = {
        close: [{ type: Output }],
        open: [{ type: Output }],
        isBackground: [{ type: Input }],
        background: [{ type: HostBinding, args: ['style.background',] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return DndDirective;
}());
export { DndDirective };
if (false) {
    /** @type {?} */
    DndDirective.prototype.close;
    /** @type {?} */
    DndDirective.prototype.open;
    /** @type {?} */
    DndDirective.prototype.isBackground;
    /** @type {?} */
    DndDirective.prototype.background;
    /**
     * @type {?}
     * @private
     */
    DndDirective.prototype._uploadFilesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFHMUQ7SUFXRSxzQkFBb0IsbUJBQXVDO1FBQXZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFOakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFSSxlQUFVLEdBQUcsYUFBYSxDQUFDO0lBRzVELENBQUM7Ozs7O0lBR00saUNBQVU7Ozs7SUFEakIsVUFDa0IsR0FBRztRQUNuQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQUdNLGtDQUFXOzs7O0lBRGxCLFVBQ21CLEdBQUc7UUFDcEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7YUFBTTtZQUNMLHFCQUFxQjtZQUNyQix3QkFBd0I7U0FDekI7SUFDSCxDQUFDOzs7OztJQUdNLDZCQUFNOzs7O0lBRGIsVUFDYyxHQUFHO1FBQ2YsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFDaEIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSztRQUNwQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjs7OztnQkFMTyxrQkFBa0I7Ozt3QkFRdkIsTUFBTTt1QkFDTixNQUFNOytCQUNOLEtBQUs7NkJBRUwsV0FBVyxTQUFDLGtCQUFrQjs2QkFLOUIsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFXbkMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFZcEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFZbEMsbUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTlDWSxZQUFZOzs7SUFFdkIsNkJBQThDOztJQUM5Qyw0QkFBNkM7O0lBQzdDLG9DQUE2Qjs7SUFFN0Isa0NBQTREOzs7OztJQUVoRCwyQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuaW1wb3J0IHtpc0Jsb2NrU2NvcGVCb3VuZGFyeX0gZnJvbSBcInRzbGludFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2REbmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBEbmREaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIGlzQmFja2dyb3VuZCA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5iYWNrZ3JvdW5kJykgYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ092ZXIoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmlzQmFja2dyb3VuZCkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyM5OTknO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4uZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnTGVhdmUoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmlzQmFja2dyb3VuZCkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmOGY4ZjgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBmaXggYmxpbmtpbmdcbiAgICAgIC8vdGhpcy5vcGVuLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Ecm9wKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBmaWxlcyA9IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjhmOGY4JztcbiAgICAgIHRoaXMuX3VwbG9hZEZpbGVzU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5vcGVuLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIl19