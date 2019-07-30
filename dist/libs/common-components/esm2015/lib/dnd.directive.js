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
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.active = true;
        this.opening.emit(true);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.active = false;
        this.closeArea();
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
    DndDirective.prototype._uploadFilesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFTLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUsxRCxNQUFNLE9BQU8sWUFBWTs7OztJQVF2QixZQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQU5qRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVuQixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRzVDLENBQUM7Ozs7O0lBR00sVUFBVSxDQUFDLEdBQUc7UUFDbkIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUdNLFdBQVcsQ0FBQyxHQUFHO1FBQ3BCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBR00sTUFBTSxDQUFDLEdBQUc7UUFDZixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDOztjQUNoQixLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLO1FBQ3BDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQUdNLE9BQU8sQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7O1lBSk8sa0JBQWtCOzs7c0JBT3ZCLE1BQU07c0JBQ04sTUFBTTtzQkFDTixNQUFNO3FCQUVOLFdBQVcsU0FBQyxjQUFjO3lCQUsxQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVFuQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQVFwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQWEvQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBdENqQywrQkFBZ0Q7O0lBQ2hELCtCQUFnRDs7SUFDaEQsK0JBQWdEOztJQUVoRCw4QkFBNEM7Ozs7O0lBRWhDLDJDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZERuZF0nXG59KVxuZXhwb3J0IGNsYXNzIERuZERpcmVjdGl2ZSB7XG5cbiAgQE91dHB1dCgpIGNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvcGVuaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgZHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyYWdPdmVyKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5vcGVuaW5nLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnTGVhdmUoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZUFyZWEoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Ecm9wKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBmaWxlcyA9IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmRyb3BwZWQuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMuX3VwbG9hZEZpbGVzU2VydmljZS5jaGFuZ2VGaWxlc0xpc3QoZmlsZXMpO1xuICAgICAgdGhpcy5jbG9zZUFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZUFyZWEoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VBcmVhKCkge1xuICAgIHRoaXMuY2xvc2luZy5lbWl0KHRydWUpO1xuICAgIHRoaXMub3BlbmluZy5lbWl0KGZhbHNlKTtcbiAgfVxufVxuIl19