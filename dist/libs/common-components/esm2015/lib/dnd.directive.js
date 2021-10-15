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
     * @protected
     */
    DndDirective.prototype._uploadFilesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFTLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUsxRCxNQUFNLE9BQU8sWUFBWTs7OztJQVV2QixZQUFzQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQVJuRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVuQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBR3hCLENBQUM7Ozs7O0lBR00sV0FBVyxDQUFDLEdBQUc7UUFDcEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHTSxVQUFVLENBQUMsR0FBRztRQUNuQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFHTSxXQUFXLENBQUMsR0FBRztRQUNwQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBR00sTUFBTSxDQUFDLEdBQUc7UUFDZixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDOztjQUNoQixLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLO1FBQ3BDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQUdNLE9BQU8sQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7O1lBSk8sa0JBQWtCOzs7c0JBT3ZCLE1BQU07c0JBQ04sTUFBTTtzQkFDTixNQUFNO3FCQUVOLFdBQVcsU0FBQyxjQUFjOzBCQU8xQixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQVNwQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQU9uQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQVdwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQWEvQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBbkRqQywrQkFBZ0Q7O0lBQ2hELCtCQUFnRDs7SUFDaEQsK0JBQWdEOztJQUVoRCw4QkFBNEM7Ozs7O0lBRTVDLG1DQUF3Qjs7Ozs7SUFFWiwyQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2REbmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBEbmREaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBjbG9zaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb3BlbmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGRyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBhY3RpdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIGRyYWdDb3VudGVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnRW50ZXIoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZHJhZ0NvdW50ZXIrKztcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5vcGVuaW5nLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyYWdPdmVyKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnTGVhdmUoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZHJhZ0NvdW50ZXItLTtcbiAgICBpZiAodGhpcy5kcmFnQ291bnRlciA9PT0gMCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xvc2VBcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyb3AoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGZpbGVzID0gZXZ0LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHJvcHBlZC5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5fdXBsb2FkRmlsZXNTZXJ2aWNlLmNoYW5nZUZpbGVzTGlzdChmaWxlcyk7XG4gICAgICB0aGlzLmNsb3NlQXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlQXJlYSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUFyZWEoKSB7XG4gICAgdGhpcy5jbG9zaW5nLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5vcGVuaW5nLmVtaXQoZmFsc2UpO1xuICB9XG59XG4iXX0=