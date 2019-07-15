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
            this.closeArea();
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
            this.closeArea();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.closeArea();
    };
    /**
     * @private
     * @return {?}
     */
    DndDirective.prototype.closeArea = /**
     * @private
     * @return {?}
     */
    function () {
        this.close.emit(true);
        this.open.emit(false);
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
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQ7SUFXRSxzQkFBb0IsbUJBQXVDO1FBQXZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFOakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFSSxlQUFVLEdBQUcsYUFBYSxDQUFDO0lBRzVELENBQUM7Ozs7O0lBR00saUNBQVU7Ozs7SUFEakIsVUFDa0IsR0FBRztRQUNuQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQUdNLGtDQUFXOzs7O0lBRGxCLFVBQ21CLEdBQUc7UUFDcEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBR00sNkJBQU07Ozs7SUFEYixVQUNjLEdBQUc7UUFDZixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUNoQixLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLO1FBQ3BDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQUdNLDhCQUFPOzs7O0lBRGQsVUFDZSxLQUFLO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLGdDQUFTOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBSk8sa0JBQWtCOzs7d0JBT3ZCLE1BQU07dUJBQ04sTUFBTTsrQkFDTixLQUFLOzZCQUVMLFdBQVcsU0FBQyxrQkFBa0I7NkJBSzlCLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBV25DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBV3BDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBWS9CLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBU25DLG1CQUFDO0NBQUEsQUF6REQsSUF5REM7U0F0RFksWUFBWTs7O0lBRXZCLDZCQUE4Qzs7SUFDOUMsNEJBQTZDOztJQUM3QyxvQ0FBNkI7O0lBRTdCLGtDQUE0RDs7Ozs7SUFFaEQsMkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkRG5kXSdcbn0pXG5leHBvcnQgY2xhc3MgRG5kRGlyZWN0aXZlIHtcblxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBpc0JhY2tncm91bmQgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZCcpIGJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyYWdPdmVyKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5pc0JhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjOTk5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ0xlYXZlKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5pc0JhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjhmOGY4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZUFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJvcChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZmlsZXMgPSBldnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmJhY2tncm91bmQgPSAnI2Y4ZjhmOCc7XG4gICAgICB0aGlzLl91cGxvYWRGaWxlc1NlcnZpY2UuY2hhbmdlRmlsZXNMaXN0KGZpbGVzKTtcbiAgICAgIHRoaXMuY2xvc2VBcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudCkge1xuICAgIHRoaXMuY2xvc2VBcmVhKCk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlQXJlYSgpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5vcGVuLmVtaXQoZmFsc2UpO1xuICB9XG59XG4iXX0=