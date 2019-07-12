/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FileDescription, FileUtil } from "../file.service";
import { ZoomService } from "../zoom.service";
export class DocumentComponent {
    /**
     * @param {?} zoomService
     */
    constructor(zoomService) {
        this.wait = false;
        zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this.zoom = val;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ifPdf() {
        return FileUtil.find(this.file.guid, false).format === "Portable Document Format";
    }
    /**
     * @return {?}
     */
    ifImage() {
        return FileUtil.find(this.file.guid, false).format === "Joint Photographic Experts Group";
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refreshView = !this.refreshView;
    }
    /**
     * @return {?}
     */
    ifChromeOrFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
    }
    /**
     * @return {?}
     */
    ifFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
}
DocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\"></gd-page>\n    </div>\n  </div>\n</div>\n",
                styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [
    { type: ZoomService }
];
DocumentComponent.propDecorators = {
    mode: [{ type: Input }],
    preloadPageCount: [{ type: Input }],
    file: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DocumentComponent.prototype.mode;
    /** @type {?} */
    DocumentComponent.prototype.preloadPageCount;
    /** @type {?} */
    DocumentComponent.prototype.file;
    /** @type {?} */
    DocumentComponent.prototype.wait;
    /** @type {?} */
    DocumentComponent.prototype.refreshView;
    /** @type {?} */
    DocumentComponent.prototype.zoom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTzVDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFTNUIsWUFBWSxXQUF3QjtRQUpwQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBTVgsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLDBCQUEwQixDQUFDO0lBQ3BGLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxrQ0FBa0MsQ0FBQztJQUM1RixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEYsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG0yQkFBd0M7O2FBRXpDOzs7O1lBTk8sV0FBVzs7O21CQVNoQixLQUFLOytCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUZOLGlDQUF1Qjs7SUFDdkIsNkNBQWtDOztJQUNsQyxpQ0FBK0I7O0lBQy9CLGlDQUFhOztJQUNiLHdDQUFxQjs7SUFDckIsaUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4uL3pvb20uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJlbG9hZFBhZ2VDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHdhaXQgPSBmYWxzZTtcbiAgcmVmcmVzaFZpZXc6IGJvb2xlYW47XG4gIHpvb206IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih6b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcblxuICAgIHpvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBpZlBkZigpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXRcIjtcbiAgfVxuXG4gIGlmSW1hZ2UoKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXBcIjtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hWaWV3ID0gIXRoaXMucmVmcmVzaFZpZXc7XG4gIH1cblxuICBpZkNocm9tZU9yRmlyZWZveCgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID4gLTEgfHwgdGhpcy5pZkZpcmVmb3goKTtcbiAgfVxuXG4gIGlmRmlyZWZveCgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuICB9XG59XG4iXX0=