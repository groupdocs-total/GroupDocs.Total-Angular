/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { DndDirective, UploadFilesService } from "@groupdocs.examples.angular/common-components";
var DndSignatureDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DndSignatureDirective, _super);
    function DndSignatureDirective(_uploadFilesService) {
        var _this = _super.call(this, _uploadFilesService) || this;
        _this.files = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    DndSignatureDirective.prototype.onDrop = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        /** @type {?} */
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.active = false;
            this.files.emit(files);
        }
    };
    DndSignatureDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdDndSignature]'
                },] }
    ];
    /** @nocollapse */
    DndSignatureDirective.ctorParameters = function () { return [
        { type: UploadFilesService }
    ]; };
    DndSignatureDirective.propDecorators = {
        files: [{ type: Output }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return DndSignatureDirective;
}(DndDirective));
export { DndSignatureDirective };
if (false) {
    /** @type {?} */
    DndSignatureDirective.prototype.files;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLXNpZ25hdHVyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL2RuZC1zaWduYXR1cmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFL0Y7SUFHMkMsaURBQVk7SUFHckQsK0JBQVksbUJBQXVDO1FBQW5ELFlBQ0Usa0JBQU0sbUJBQW1CLENBQUMsU0FDM0I7UUFKUyxXQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFJckMsQ0FBQzs7Ozs7SUFHTSxzQ0FBTTs7OztJQURiLFVBQ2MsR0FBRztRQUNmLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7O1lBQ2hCLEtBQUssR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUs7UUFDcEMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBSnFCLGtCQUFrQjs7O3dCQU1yQyxNQUFNO3lCQU1OLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBV2xDLDRCQUFDO0NBQUEsQUFyQkQsQ0FHMkMsWUFBWSxHQWtCdEQ7U0FsQlkscUJBQXFCOzs7SUFDaEMsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RuZERpcmVjdGl2ZSwgVXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZERuZFNpZ25hdHVyZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEbmRTaWduYXR1cmVEaXJlY3RpdmUgZXh0ZW5kcyBEbmREaXJlY3RpdmUge1xyXG4gIEBPdXRwdXQoKSBmaWxlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihfdXBsb2FkRmlsZXNTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkRyb3AoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGZpbGVzID0gZXZ0LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZmlsZXMuZW1pdChmaWxlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=