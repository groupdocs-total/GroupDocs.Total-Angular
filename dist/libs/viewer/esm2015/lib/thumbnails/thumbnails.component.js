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
                        .replace(/\uFEFF/g, "")
                        .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
                        .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
                        .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer');
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
                template: "<div class=\"gd-thumbnails\">\r\n  <div class=\"gd-thumbnails-panzoom\">\r\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\r\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\r\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <div class=\"gd-wrapper\"\r\n           [style.height]=\"getDimensionWithUnit(page.height)\"\r\n           [style.width]=\"getDimensionWithUnit(page.width)\"\r\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\r\n           *ngIf=\"page.data && isHtmlMode\"\r\n           [innerHTML]=\"page.data | safeHtml\"></div>\r\n      <div class=\"gd-wrapper\" \r\n           [style.height]=\"getDimensionWithUnit(page.height)\"\r\n           [style.width]=\"getDimensionWithUnit(page.width)\"\r\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\r\n           *ngIf=\"page.data && !isHtmlMode\">\r\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\r\n             alt/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxlQUFlLEVBQWEsV0FBVyxFQUFFLFFBQVEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBT2hILE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUTlCLFlBQW9CLGdCQUFpQyxFQUFVLFlBQXlCO1FBQXBFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUY5RSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsV0FBVztRQUNULDJFQUEyRTtRQUMzRSwrREFBK0Q7UUFDL0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUM7eUJBQ3RCLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDO3lCQUNyQixPQUFPLENBQUMsaUJBQWlCLEVBQUUsb0NBQW9DLENBQUM7eUJBQ2hFLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxtQ0FBbUMsQ0FBQzt5QkFDOUQsT0FBTyxDQUFDLGlCQUFpQixFQUFFLG9DQUFvQyxDQUFDLENBQUM7aUJBQ3hGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTs7Y0FDWixrQkFBa0IsR0FBRyx3QkFBd0I7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFHRCxvQkFBb0IsQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsd3lDQUEwQzs7YUFFM0M7Ozs7WUFOTyxlQUFlO1lBQWEsV0FBVzs7O29CQVM1QyxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLE1BQU07Ozs7SUFKUCxvQ0FBNEI7O0lBQzVCLG1DQUFzQjs7SUFDdEIsbUNBQXVCOztJQUN2Qix5Q0FBNkI7O0lBQzdCLDJDQUFvRDs7Ozs7SUFFeEMsK0NBQXlDOzs7OztJQUFFLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05hdmlnYXRlU2VydmljZSwgUGFnZU1vZGVsLCBab29tU2VydmljZSwgRmlsZVV0aWx9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtdGh1bWJuYWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RodW1ibmFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGh1bWJuYWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBwYWdlczogUGFnZU1vZGVsW107XHJcbiAgQElucHV0KCkgZ3VpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNIdG1sTW9kZTogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLCBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAvLyBUT0RPOiB0aGlzIGlzIHRlbXBvcmFyeSBuZWVkZWQgdG8gcmVtb3ZlIHVubmVlZGVkIHNwYWNlcyBhbmQgQk9NIHN5bWJvbCBcclxuICAgIC8vIHdoaWNoIGxlYWRzIHRvIHVuZGVzaXJlZCBzcGFjZXMgb24gdGhlIHRvcCBvZiB0aGUgZG9jcyBwYWdlc1xyXG4gICAgaWYgKHRoaXMucGFnZXMpIHtcclxuICAgICAgdGhpcy5wYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgICAgIGlmIChwYWdlLmRhdGEpIHtcclxuICAgICAgICAgIHBhZ2UuZGF0YSA9IHBhZ2UuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywnPjwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcdUZFRkYvZyxcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL2hyZWY9XCJcXC92aWV3ZXIvZywgJ2hyZWY9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9zcmM9XCJcXC92aWV3ZXIvZywgJ3NyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92aWV3ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL2RhdGE9XCJcXC92aWV3ZXIvZywgJ2RhdGE9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGltZ0RhdGEoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkYXRhSW1hZ2VQbmdCYXNlNjQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XHJcbiAgICBpZiAoIXRoaXMuaXNIdG1sTW9kZSkge1xyXG4gICAgICByZXR1cm4gZGF0YUltYWdlUG5nQmFzZTY0ICsgZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhSW1hZ2VQbmdCYXNlNjQ7XHJcbiAgfVxyXG5cclxuICBnZXRTY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKDE5MCAvIHgsIDE5MCAvIHkpO1xyXG4gIH1cclxuXHJcbiAgb3BlblBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkUGFnZS5lbWl0KHBhZ2VOdW1iZXIpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlVG8ocGFnZU51bWJlcik7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBjb25zaWRlciBwbGFjaW5nIGluIG9uZSBzZXJ2aWNlXHJcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHZhbHVlICsgRmlsZVV0aWwuZmluZCh0aGlzLmd1aWQsIGZhbHNlKS51bml0O1xyXG4gIH1cclxufVxyXG4iXX0=