/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { DndDirective, UploadFilesService } from "@groupdocs.examples.angular/common-components";
export class DndSignatureDirective extends DndDirective {
    /**
     * @param {?} _uploadFilesService
     */
    constructor(_uploadFilesService) {
        super(_uploadFilesService);
        this.files = new EventEmitter();
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
            this.files.emit(files);
        }
    }
}
DndSignatureDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdDndSignature]'
            },] }
];
/** @nocollapse */
DndSignatureDirective.ctorParameters = () => [
    { type: UploadFilesService }
];
DndSignatureDirective.propDecorators = {
    files: [{ type: Output }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DndSignatureDirective.prototype.files;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLXNpZ25hdHVyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL2RuZC1zaWduYXR1cmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUsvRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsWUFBWTs7OztJQUdyRCxZQUFZLG1CQUF1QztRQUNqRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUhuQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUlyQyxDQUFDOzs7OztJQUdNLE1BQU0sQ0FBQyxHQUFHO1FBQ2YsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Y0FDaEIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSztRQUNwQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBSnFCLGtCQUFrQjs7O29CQU1yQyxNQUFNO3FCQU1OLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFOaEMsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RuZERpcmVjdGl2ZSwgVXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZERuZFNpZ25hdHVyZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEbmRTaWduYXR1cmVEaXJlY3RpdmUgZXh0ZW5kcyBEbmREaXJlY3RpdmUge1xyXG4gIEBPdXRwdXQoKSBmaWxlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihfdXBsb2FkRmlsZXNTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkRyb3AoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGZpbGVzID0gZXZ0LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZmlsZXMuZW1pdChmaWxlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=