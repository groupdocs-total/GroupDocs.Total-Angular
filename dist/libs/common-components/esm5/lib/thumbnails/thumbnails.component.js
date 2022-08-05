/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavigateService } from '../navigate.service';
import { ZoomService } from '../zoom.service';
import { FileUtil } from '../file.service';
var ThumbnailsComponent = /** @class */ (function () {
    function ThumbnailsComponent(_navigateService, _zoomService) {
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this.selectedPage = new EventEmitter();
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
        if (this.pages) {
            this.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (page.data) {
                    page.data = page.data.replace(/>\s+</g, '><')
                        .replace(/\uFEFF/g, "");
                }
            }));
        }
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
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._zoomService.changeZoom(_this._zoomService.zoom);
        }), 100);
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
        if (data) {
            return data.startsWith('data:image')
                ? data
                : 'data:image/png;base64,' + data;
        }
        return null;
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
        this.selectedPage.emit(pageNumber);
        this._navigateService.navigateTo(pageNumber);
    };
    // TODO: consider placing in one service
    // TODO: consider placing in one service
    /**
     * @param {?} value
     * @return {?}
     */
    ThumbnailsComponent.prototype.getDimensionWithUnit = 
    // TODO: consider placing in one service
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value + FileUtil.find(this.guid, false).unit;
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ThumbnailsComponent.prototype.emptyThumbData = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        return "<div style=\"height:100%;display:grid;color:#bfbfbf\"><div style=\"font-size:10vw;margin:auto;text-align:center;\">" + pageNumber + "</div></div>";
    };
    ThumbnailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-thumbnails',
                    template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" \n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && !isHtmlMode\">\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(800)\"\n           [style.width]=\"getDimensionWithUnit(800)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(800, 800)+')'}\"\n           *ngIf=\"!page.data\"\n           [innerHTML]=\"emptyThumbData(page.number) | safeHtml\">\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host{-webkit-box-flex:0;flex:0 0 300px;background:#f5f5f5;color:#fff;overflow-y:auto;display:block;-webkit-transition:margin-left .2s;transition:margin-left .2s;height:100%}.gd-page{width:272px;height:272px;-webkit-transition:.3s;transition:.3s;background-color:#e7e7e7;cursor:pointer;margin:14px 14px 0}.gd-page:hover{background-color:silver}.gd-wrapper{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;position:relative;background-color:#fff;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);pointer-events:none}.gd-wrapper ::ng-deep img{width:inherit}.gd-thumbnails::-webkit-scrollbar{width:0;background-color:#f5f5f5}.gd-thumbnails-panzoom>.gd-thumbnails-landscape{margin:-134px 0 -1px 12px}.gd-thumbnails .gd-page-image{height:inherit}.gd-thumbnails-landscape-image{margin:-90px 0 -23px!important}.gd-thumbnails-landscape-image-rotated{margin:126px 0 -3px -104px!important}"]
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
        isHtmlMode: [{ type: Input }],
        selectedPage: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFBO0FBRW5ELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTtBQUMzQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFhRSw2QkFBb0IsZ0JBQWlDLEVBQVUsWUFBeUI7UUFBcEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRjlFLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUdwRCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLDJFQUEyRTtRQUMzRSwrREFBK0Q7UUFDL0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDO3lCQUN0QixPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7SUFFRCxxQ0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixJQUFHLElBQUksRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELHNDQUFROzs7OztJQUFSLFVBQVMsQ0FBUyxFQUFFLENBQVM7UUFDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLFVBQWtCO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHdDQUF3Qzs7Ozs7O0lBQ3hDLGtEQUFvQjs7Ozs7O0lBQXBCLFVBQXFCLEtBQWE7UUFDaEMsT0FBTyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxVQUFrQjtRQUMvQixPQUFPLHdIQUFrSCxVQUFVLGlCQUFjLENBQUE7SUFDbkosQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsNG1EQUEwQzs7aUJBRTNDOzs7O2dCQVRPLGVBQWU7Z0JBRWYsV0FBVzs7O3dCQVVoQixLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLE1BQU07O0lBeURULDBCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0EvRFksbUJBQW1COzs7SUFFOUIsb0NBQTRCOztJQUM1QixtQ0FBc0I7O0lBQ3RCLG1DQUF1Qjs7SUFDdkIseUNBQTZCOztJQUM3QiwyQ0FBb0Q7Ozs7O0lBRXhDLCtDQUF5Qzs7Ozs7SUFBRSwyQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlfSBmcm9tICcuLi9uYXZpZ2F0ZS5zZXJ2aWNlJ1xuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gJy4uL2ZpbGUuc2VydmljZSdcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gJy4uL3pvb20uc2VydmljZSdcbmltcG9ydCB7RmlsZVV0aWx9IGZyb20gJy4uL2ZpbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXRodW1ibmFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGh1bWJuYWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgcGFnZXM6IFBhZ2VNb2RlbFtdO1xuICBASW5wdXQoKSBndWlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzSHRtbE1vZGU6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIC8vIFRPRE86IHRoaXMgaXMgdGVtcG9yYXJ5IG5lZWRlZCB0byByZW1vdmUgdW5uZWVkZWQgc3BhY2VzIGFuZCBCT00gc3ltYm9sIFxuICAgIC8vIHdoaWNoIGxlYWRzIHRvIHVuZGVzaXJlZCBzcGFjZXMgb24gdGhlIHRvcCBvZiB0aGUgZG9jcyBwYWdlc1xuICAgIGlmICh0aGlzLnBhZ2VzKSB7XG4gICAgICB0aGlzLnBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgIGlmIChwYWdlLmRhdGEpIHtcbiAgICAgICAgICBwYWdlLmRhdGEgPSBwYWdlLmRhdGEucmVwbGFjZSgvPlxccys8L2csJz48JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx1RkVGRi9nLFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgaW1nRGF0YShkYXRhOiBzdHJpbmcpIHtcbiAgICBpZihkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YS5zdGFydHNXaXRoKCdkYXRhOmltYWdlJykgXG4gICAgICAgID8gZGF0YSBcbiAgICAgICAgOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKDE5MCAvIHgsIDE5MCAvIHkpO1xuICB9XG5cbiAgb3BlblBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZFBhZ2UuZW1pdChwYWdlTnVtYmVyKTtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGVUbyhwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIC8vIFRPRE86IGNvbnNpZGVyIHBsYWNpbmcgaW4gb25lIHNlcnZpY2VcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiB2YWx1ZSArIEZpbGVVdGlsLmZpbmQodGhpcy5ndWlkLCBmYWxzZSkudW5pdDtcbiAgfVxuXG4gIGVtcHR5VGh1bWJEYXRhKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHJldHVybiBgPGRpdiBzdHlsZT1cImhlaWdodDoxMDAlO2Rpc3BsYXk6Z3JpZDtjb2xvcjojYmZiZmJmXCI+PGRpdiBzdHlsZT1cImZvbnQtc2l6ZToxMHZ3O21hcmdpbjphdXRvO3RleHQtYWxpZ246Y2VudGVyO1wiPiR7cGFnZU51bWJlcn08L2Rpdj48L2Rpdj5gXG4gIH1cbn1cbiJdfQ==