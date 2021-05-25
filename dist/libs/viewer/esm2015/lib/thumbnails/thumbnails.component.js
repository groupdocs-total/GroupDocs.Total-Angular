/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavigateService, ZoomService, FileUtil } from "@groupdocs.examples.angular/common-components";
export class ThumbnailsComponent {
    /**
     * @param {?} _navigateService
     * @param {?} _zoomService
     */
    constructor(_navigateService, _zoomService) {
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this.selectedPage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        if (this.pages) {
            this.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            page => {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><')
                        .replace(/\uFEFF/g, "");
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._zoomService.changeZoom(this._zoomService.zoom);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._zoomService.changeZoom(this._zoomService.zoom);
        }), 100);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    imgData(data) {
        /** @type {?} */
        const dataImagePngBase64 = 'data:image/png;base64,';
        if (!this.isHtmlMode) {
            return dataImagePngBase64 + data;
        }
        return dataImagePngBase64;
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    getScale(x, y) {
        return Math.min(190 / x, 190 / y);
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    openPage(pageNumber) {
        this.selectedPage.emit(pageNumber);
        this._navigateService.navigateTo(pageNumber);
    }
    // TODO: consider placing in one service
    /**
     * @param {?} value
     * @return {?}
     */
    getDimensionWithUnit(value) {
        return value + FileUtil.find(this.guid, false).unit;
    }
}
ThumbnailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-thumbnails',
                template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" \n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && !isHtmlMode\">\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [":host{-webkit-box-flex:0;flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;-webkit-transition:margin-left .2s;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;-webkit-transition:.3s;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);pointer-events:none}.gd-wrapper ::ng-deep img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
            }] }
];
/** @nocollapse */
ThumbnailsComponent.ctorParameters = () => [
    { type: NavigateService },
    { type: ZoomService }
];
ThumbnailsComponent.propDecorators = {
    pages: [{ type: Input }],
    guid: [{ type: Input }],
    mode: [{ type: Input }],
    isHtmlMode: [{ type: Input }],
    selectedPage: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ThumbnailsComponent.prototype.pages;
    /** @type {?} */
    ThumbnailsComponent.prototype.guid;
    /** @type {?} */
    ThumbnailsComponent.prototype.mode;
    /** @type {?} */
    ThumbnailsComponent.prototype.isHtmlMode;
    /** @type {?} */
    ThumbnailsComponent.prototype.selectedPage;
    /**
     * @type {?}
     * @private
     */
    ThumbnailsComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ThumbnailsComponent.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxlQUFlLEVBQWEsV0FBVyxFQUFFLFFBQVEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBT2hILE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUTlCLFlBQW9CLGdCQUFpQyxFQUFVLFlBQXlCO1FBQXBFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUY5RSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsV0FBVztRQUNULDJFQUEyRTtRQUMzRSwrREFBK0Q7UUFDL0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUM7eUJBQ3RCLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzdDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTs7Y0FDWixrQkFBa0IsR0FBRyx3QkFBd0I7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFHRCxvQkFBb0IsQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNHZDQUEwQzs7YUFFM0M7Ozs7WUFOTyxlQUFlO1lBQWEsV0FBVzs7O29CQVM1QyxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLE1BQU07Ozs7SUFKUCxvQ0FBNEI7O0lBQzVCLG1DQUFzQjs7SUFDdEIsbUNBQXVCOztJQUN2Qix5Q0FBNkI7O0lBQzdCLDJDQUFvRDs7Ozs7SUFFeEMsK0NBQXlDOzs7OztJQUFFLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2UsIFBhZ2VNb2RlbCwgWm9vbVNlcnZpY2UsIEZpbGVVdGlsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRodW1ibmFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGh1bWJuYWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgcGFnZXM6IFBhZ2VNb2RlbFtdO1xuICBASW5wdXQoKSBndWlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzSHRtbE1vZGU6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIC8vIFRPRE86IHRoaXMgaXMgdGVtcG9yYXJ5IG5lZWRlZCB0byByZW1vdmUgdW5uZWVkZWQgc3BhY2VzIGFuZCBCT00gc3ltYm9sIFxuICAgIC8vIHdoaWNoIGxlYWRzIHRvIHVuZGVzaXJlZCBzcGFjZXMgb24gdGhlIHRvcCBvZiB0aGUgZG9jcyBwYWdlc1xuICAgIGlmICh0aGlzLnBhZ2VzKSB7XG4gICAgICB0aGlzLnBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgIGlmIChwYWdlLmRhdGEpIHtcbiAgICAgICAgICBwYWdlLmRhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgaW1nRGF0YShkYXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXRhSW1hZ2VQbmdCYXNlNjQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XG4gICAgaWYgKCF0aGlzLmlzSHRtbE1vZGUpIHtcbiAgICAgIHJldHVybiBkYXRhSW1hZ2VQbmdCYXNlNjQgKyBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YUltYWdlUG5nQmFzZTY0O1xuICB9XG5cbiAgZ2V0U2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oMTkwIC8geCwgMTkwIC8geSk7XG4gIH1cblxuICBvcGVuUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZS5lbWl0KHBhZ2VOdW1iZXIpO1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZVRvKHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgLy8gVE9ETzogY29uc2lkZXIgcGxhY2luZyBpbiBvbmUgc2VydmljZVxuICBnZXREaW1lbnNpb25XaXRoVW5pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgRmlsZVV0aWwuZmluZCh0aGlzLmd1aWQsIGZhbHNlKS51bml0O1xuICB9XG59XG4iXX0=