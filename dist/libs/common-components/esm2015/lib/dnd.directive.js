/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { UploadFilesService } from "./upload-files.service";
export class DndDirective {
    /**
     * @param {?} _uploadFilesService
     */
    constructor(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.closing = new EventEmitter();
        this.opening = new EventEmitter();
        this.dropped = new EventEmitter();
        this.active = false;
        this.dragCounter = 0;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragEnter(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.dragCounter++;
        this.active = true;
        this.opening.emit(true);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        return false;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter === 0) {
            this.active = false;
            this.closeArea();
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        /** @type {?} */
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.active = false;
            this.dropped.emit(true);
            this._uploadFilesService.changeFilesList(files);
            this.closeArea();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.closeArea();
    }
    /**
     * @private
     * @return {?}
     */
    closeArea() {
        this.closing.emit(true);
        this.opening.emit(false);
    }
}
DndDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdDnd]'
            },] }
];
/** @nocollapse */
DndDirective.ctorParameters = () => [
    { type: UploadFilesService }
];
DndDirective.propDecorators = {
    closing: [{ type: Output }],
    opening: [{ type: Output }],
    dropped: [{ type: Output }],
    active: [{ type: HostBinding, args: ['class.active',] }],
    onDragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DndDirective.prototype.closing;
    /** @type {?} */
    DndDirective.prototype.opening;
    /** @type {?} */
    DndDirective.prototype.dropped;
    /** @type {?} */
    DndDirective.prototype.active;
    /**
     * @type {?}
     * @private
     */
    DndDirective.prototype.dragCounter;
    /**
     * @type {?}
     * @private
     */
    DndDirective.prototype._uploadFilesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFTLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUsxRCxNQUFNLE9BQU8sWUFBWTs7OztJQVV2QixZQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQVJqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVuQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBR3hCLENBQUM7Ozs7O0lBR00sV0FBVyxDQUFDLEdBQUc7UUFDcEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHTSxVQUFVLENBQUMsR0FBRztRQUNuQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFHTSxXQUFXLENBQUMsR0FBRztRQUNwQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBR00sTUFBTSxDQUFDLEdBQUc7UUFDZixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDOztjQUNoQixLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLO1FBQ3BDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQUdNLE9BQU8sQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7O1lBSk8sa0JBQWtCOzs7c0JBT3ZCLE1BQU07c0JBQ04sTUFBTTtzQkFDTixNQUFNO3FCQUVOLFdBQVcsU0FBQyxjQUFjOzBCQU8xQixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQVNwQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQU9uQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQVdwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQWEvQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBbkRqQywrQkFBZ0Q7O0lBQ2hELCtCQUFnRDs7SUFDaEQsK0JBQWdEOztJQUVoRCw4QkFBNEM7Ozs7O0lBRTVDLG1DQUF3Qjs7Ozs7SUFFWiwyQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZERuZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEbmREaXJlY3RpdmUge1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgb3BlbmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgZHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBhY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBkcmFnQ291bnRlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkRyYWdFbnRlcihldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5kcmFnQ291bnRlcisrO1xyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5vcGVuaW5nLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uRHJhZ092ZXIoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uRHJhZ0xlYXZlKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmRyYWdDb3VudGVyLS07XHJcbiAgICBpZiAodGhpcy5kcmFnQ291bnRlciA9PT0gMCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNsb3NlQXJlYSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uRHJvcChldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZmlsZXMgPSBldnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kcm9wcGVkLmVtaXQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuX3VwbG9hZEZpbGVzU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xyXG4gICAgICB0aGlzLmNsb3NlQXJlYSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICB0aGlzLmNsb3NlQXJlYSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZUFyZWEoKSB7XHJcbiAgICB0aGlzLmNsb3NpbmcuZW1pdCh0cnVlKTtcclxuICAgIHRoaXMub3BlbmluZy5lbWl0KGZhbHNlKTtcclxuICB9XHJcbn1cclxuIl19