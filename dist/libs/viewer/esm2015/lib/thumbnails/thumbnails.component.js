/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NavigateService, ZoomService, FileUtil } from "@groupdocs.examples.angular/common-components";
export class ThumbnailsComponent {
    /**
     * @param {?} _navigateService
     * @param {?} _zoomService
     */
    constructor(_navigateService, _zoomService) {
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
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
        this.pages.forEach((/**
         * @param {?} page
         * @return {?}
         */
        page => {
            if (page.data) {
                page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "");
            }
        }));
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
        this._zoomService.changeZoom(this._zoomService.zoom);
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
                styles: [":host{-webkit-box-flex:0;flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;-webkit-transition:margin-left .2s;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;-webkit-transition:.3s;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38)}.gd-wrapper ::ng-deep img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
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
    isHtmlMode: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUE4QyxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUMsZUFBZSxFQUFhLFdBQVcsRUFBRSxRQUFRLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQU9oSCxNQUFNLE9BQU8sbUJBQW1COzs7OztJQU85QixZQUFvQixnQkFBaUMsRUFBVSxZQUF5QjtRQUFwRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFDeEYsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsV0FBVztRQUNULDJFQUEyRTtRQUMzRSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUM7YUFDcEU7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTs7Y0FDWixrQkFBa0IsR0FBRyx3QkFBd0I7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFHRCxvQkFBb0IsQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNHZDQUEwQzs7YUFFM0M7Ozs7WUFOTyxlQUFlO1lBQWEsV0FBVzs7O29CQVM1QyxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzs7O0lBSE4sb0NBQTRCOztJQUM1QixtQ0FBc0I7O0lBQ3RCLG1DQUF1Qjs7SUFDdkIseUNBQTZCOzs7OztJQUVqQiwrQ0FBeUM7Ozs7O0lBQUUsMkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlLCBQYWdlTW9kZWwsIFpvb21TZXJ2aWNlLCBGaWxlVXRpbH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10aHVtYm5haWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RodW1ibmFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aHVtYm5haWxzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGh1bWJuYWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIHBhZ2VzOiBQYWdlTW9kZWxbXTtcbiAgQElucHV0KCkgZ3VpZDogc3RyaW5nO1xuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0h0bWxNb2RlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLCBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgLy8gVE9ETzogdGhpcyBpcyB0ZW1wb3JhcnkgbmVlZGVkIHRvIHJlbW92ZSB1bm5lZWRlZCBzcGFjZXMgYW5kIEJPTSBzeW1ib2wgXG4gICAgLy8gd2hpY2ggbGVhZHMgdG8gdW5kZXNpcmVkIHNwYWNlcyBvbiB0aGUgdG9wIG9mIHRoZSBkb2NzIHBhZ2VzXG4gICAgdGhpcy5wYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgaWYgKHBhZ2UuZGF0YSkge1xuICAgICAgICBwYWdlLmRhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JykucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICB9XG5cbiAgaW1nRGF0YShkYXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXRhSW1hZ2VQbmdCYXNlNjQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XG4gICAgaWYgKCF0aGlzLmlzSHRtbE1vZGUpIHtcbiAgICAgIHJldHVybiBkYXRhSW1hZ2VQbmdCYXNlNjQgKyBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YUltYWdlUG5nQmFzZTY0O1xuICB9XG5cbiAgZ2V0U2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oMTkwIC8geCwgMTkwIC8geSk7XG4gIH1cblxuICBvcGVuUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGVUbyhwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIC8vIFRPRE86IGNvbnNpZGVyIHBsYWNpbmcgaW4gb25lIHNlcnZpY2VcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiB2YWx1ZSArIEZpbGVVdGlsLmZpbmQodGhpcy5ndWlkLCBmYWxzZSkudW5pdDtcbiAgfVxufVxuIl19