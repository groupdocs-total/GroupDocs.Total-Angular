/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NavigateService, ZoomService } from "@groupdocs.examples.angular/common-components";
var ThumbnailsComponent = /** @class */ (function () {
    function ThumbnailsComponent(_navigateService, _zoomService) {
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
    }
    /**
     * @return {?}
     */
    ThumbnailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ThumbnailsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
        // which leads to undesired spaces on the top of the docs pages
        this.pages.forEach((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            page.data = page.data.replace(/>\s+</g, '><').replace(/\uFEFF/g, "");
        }));
    };
    /**
     * @return {?}
     */
    ThumbnailsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._zoomService.changeZoom(this._zoomService.zoom);
    };
    /**
     * @return {?}
     */
    ThumbnailsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._zoomService.changeZoom(this._zoomService.zoom);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ThumbnailsComponent.prototype.imgData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var dataImagePngBase64 = 'data:image/png;base64,';
        if (!this.isHtmlMode) {
            return dataImagePngBase64 + data;
        }
        return dataImagePngBase64;
    };
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    ThumbnailsComponent.prototype.getScale = /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        return Math.min(190 / x, 190 / y);
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ThumbnailsComponent.prototype.openPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this._navigateService.navigateTo(pageNumber);
    };
    ThumbnailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-thumbnails',
                    template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.width.pt]=\"page.width\"\n           [style.height.pt]=\"page.height\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" *ngIf=\"page.data && !isHtmlMode\">\n        <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host{flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38)}.gd-wrapper /deep/ img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit;margin-left:153px!important}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
                }] }
    ];
    /** @nocollapse */
    ThumbnailsComponent.ctorParameters = function () { return [
        { type: NavigateService },
        { type: ZoomService }
    ]; };
    ThumbnailsComponent.propDecorators = {
        pages: [{ type: Input }],
        guid: [{ type: Input }],
        mode: [{ type: Input }],
        isHtmlMode: [{ type: Input }]
    };
    return ThumbnailsComponent;
}());
export { ThumbnailsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUE4QyxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUMsZUFBZSxFQUFhLFdBQVcsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXRHO0lBWUUsNkJBQW9CLGdCQUFpQyxFQUFVLFlBQXlCO1FBQXBFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUN4RixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLDJFQUEyRTtRQUMzRSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELHFDQUFPOzs7O0lBQVAsVUFBUSxJQUFZOztZQUNaLGtCQUFrQixHQUFHLHdCQUF3QjtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNsQztRQUNELE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsc0NBQVE7Ozs7O0lBQVIsVUFBUyxDQUFTLEVBQUUsQ0FBUztRQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBUTs7OztJQUFSLFVBQVMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0OEJBQTBDOztpQkFFM0M7Ozs7Z0JBTk8sZUFBZTtnQkFBYSxXQUFXOzs7d0JBUzVDLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7O0lBdUNSLDBCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1ksbUJBQW1COzs7SUFFOUIsb0NBQTRCOztJQUM1QixtQ0FBc0I7O0lBQ3RCLG1DQUF1Qjs7SUFDdkIseUNBQTZCOzs7OztJQUVqQiwrQ0FBeUM7Ozs7O0lBQUUsMkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlLCBQYWdlTW9kZWwsIFpvb21TZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRodW1ibmFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGh1bWJuYWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgcGFnZXM6IFBhZ2VNb2RlbFtdO1xuICBASW5wdXQoKSBndWlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzSHRtbE1vZGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICAvLyBUT0RPOiB0aGlzIGlzIHRlbXBvcmFyeSBuZWVkZWQgdG8gcmVtb3ZlIHVubmVlZGVkIHNwYWNlcyBhbmQgQk9NIHN5bWJvbCBcbiAgICAvLyB3aGljaCBsZWFkcyB0byB1bmRlc2lyZWQgc3BhY2VzIG9uIHRoZSB0b3Agb2YgdGhlIGRvY3MgcGFnZXNcbiAgICB0aGlzLnBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICBwYWdlLmRhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JykucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICB9XG5cbiAgaW1nRGF0YShkYXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXRhSW1hZ2VQbmdCYXNlNjQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCc7XG4gICAgaWYgKCF0aGlzLmlzSHRtbE1vZGUpIHtcbiAgICAgIHJldHVybiBkYXRhSW1hZ2VQbmdCYXNlNjQgKyBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YUltYWdlUG5nQmFzZTY0O1xuICB9XG5cbiAgZ2V0U2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oMTkwIC8geCwgMTkwIC8geSk7XG4gIH1cblxuICBvcGVuUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGVUbyhwYWdlTnVtYmVyKTtcbiAgfVxufVxuIl19