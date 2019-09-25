/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NavigateService } from "@groupdocs.examples.angular/common-components";
export class ThumbnailsComponent {
    /**
     * @param {?} _navigateService
     */
    constructor(_navigateService) {
        this._navigateService = _navigateService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
}
ThumbnailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-thumbnails',
                template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.width.pt]=\"page.width\"\n           [style.height.pt]=\"page.height\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" *ngIf=\"page.data && !isHtmlMode\">\n        <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".gd-thumbnails{z-index:9;width:300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38)}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails-panzoom .gd-wrapper>div>div>img{width:inherit}.gd-thumbnails .gd-wrapper>img{width:-webkit-fill-available!important;margin:0 20px 0 0!important}.gd-thumbnails .gd-page-image{height:inherit;margin-left:153px!important}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
            }] }
];
/** @nocollapse */
ThumbnailsComponent.ctorParameters = () => [
    { type: NavigateService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBVyxlQUFlLEVBQVksTUFBTSwrQ0FBK0MsQ0FBQztBQU9uRyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBTzlCLFlBQW9CLGdCQUFpQztRQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO0lBQ3JELENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTs7Y0FDWixrQkFBa0IsR0FBRyx3QkFBd0I7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw0OEJBQTBDOzthQUUzQzs7OztZQU5pQixlQUFlOzs7b0JBUzlCLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO3lCQUNMLEtBQUs7Ozs7SUFITixvQ0FBNEI7O0lBQzVCLG1DQUFzQjs7SUFDdEIsbUNBQXVCOztJQUN2Qix5Q0FBNkI7Ozs7O0lBRWpCLCtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZVV0aWwsIE5hdmlnYXRlU2VydmljZSwgUGFnZU1vZGVsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRodW1ibmFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGh1bWJuYWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwYWdlczogUGFnZU1vZGVsW107XG4gIEBJbnB1dCgpIGd1aWQ6IHN0cmluZztcbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNIdG1sTW9kZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBpbWdEYXRhKGRhdGE6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGFJbWFnZVBuZ0Jhc2U2NCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcbiAgICBpZiAoIXRoaXMuaXNIdG1sTW9kZSkge1xuICAgICAgcmV0dXJuIGRhdGFJbWFnZVBuZ0Jhc2U2NCArIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBkYXRhSW1hZ2VQbmdCYXNlNjQ7XG4gIH1cblxuICBnZXRTY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLm1pbigxOTAgLyB4LCAxOTAgLyB5KTtcbiAgfVxuXG4gIG9wZW5QYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZVRvKHBhZ2VOdW1iZXIpO1xuICB9XG59XG4iXX0=