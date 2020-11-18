/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavigateService, ZoomService, FileUtil } from "@groupdocs.examples.angular/common-components";
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
                        .replace(/\uFEFF/g, "")
                        .replace(/href="\/viewer/g, 'href="http://localhost:8080/viewer')
                        .replace(/src="\/viewer/g, 'src="http://localhost:8080/viewer')
                        .replace(/data="\/viewer/g, 'data="http://localhost:8080/viewer');
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
    ThumbnailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-thumbnails',
                    template: "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" \n           [style.height]=\"getDimensionWithUnit(page.height)\"\n           [style.width]=\"getDimensionWithUnit(page.width)\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && !isHtmlMode\">\n           <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxlQUFlLEVBQWEsV0FBVyxFQUFFLFFBQVEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRWhIO0lBYUUsNkJBQW9CLGdCQUFpQyxFQUFVLFlBQXlCO1FBQXBFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUY5RSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSwyRUFBMkU7UUFDM0UsK0RBQStEO1FBQy9ELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQzt5QkFDdEIsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUM7eUJBQ3JCLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxvQ0FBb0MsQ0FBQzt5QkFDaEUsT0FBTyxDQUFDLGdCQUFnQixFQUFFLG1DQUFtQyxDQUFDO3lCQUM5RCxPQUFPLENBQUMsaUJBQWlCLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztpQkFDeEY7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUFBLGlCQUlDO1FBSEMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7O0lBRUQscUNBQU87Ozs7SUFBUCxVQUFRLElBQVk7O1lBQ1osa0JBQWtCLEdBQUcsd0JBQXdCO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU8sa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFRCxzQ0FBUTs7Ozs7SUFBUixVQUFTLENBQVMsRUFBRSxDQUFTO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHNDQUFROzs7O0lBQVIsVUFBUyxVQUFrQjtRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx3Q0FBd0M7Ozs7OztJQUN4QyxrREFBb0I7Ozs7OztJQUFwQixVQUFxQixLQUFhO1FBQ2hDLE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsNHZDQUEwQzs7aUJBRTNDOzs7O2dCQU5PLGVBQWU7Z0JBQWEsV0FBVzs7O3dCQVM1QyxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLE1BQU07O0lBdURULDBCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E3RFksbUJBQW1COzs7SUFFOUIsb0NBQTRCOztJQUM1QixtQ0FBc0I7O0lBQ3RCLG1DQUF1Qjs7SUFDdkIseUNBQTZCOztJQUM3QiwyQ0FBb0Q7Ozs7O0lBRXhDLCtDQUF5Qzs7Ozs7SUFBRSwyQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlLCBQYWdlTW9kZWwsIFpvb21TZXJ2aWNlLCBGaWxlVXRpbH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10aHVtYm5haWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RodW1ibmFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aHVtYm5haWxzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGh1bWJuYWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIHBhZ2VzOiBQYWdlTW9kZWxbXTtcbiAgQElucHV0KCkgZ3VpZDogc3RyaW5nO1xuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0h0bWxNb2RlOiBib29sZWFuO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICAvLyBUT0RPOiB0aGlzIGlzIHRlbXBvcmFyeSBuZWVkZWQgdG8gcmVtb3ZlIHVubmVlZGVkIHNwYWNlcyBhbmQgQk9NIHN5bWJvbCBcbiAgICAvLyB3aGljaCBsZWFkcyB0byB1bmRlc2lyZWQgc3BhY2VzIG9uIHRoZSB0b3Agb2YgdGhlIGRvY3MgcGFnZXNcbiAgICBpZiAodGhpcy5wYWdlcykge1xuICAgICAgdGhpcy5wYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICBpZiAocGFnZS5kYXRhKSB7XG4gICAgICAgICAgcGFnZS5kYXRhID0gcGFnZS5kYXRhLnJlcGxhY2UoLz5cXHMrPC9nLCc+PCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcdUZFRkYvZyxcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9ocmVmPVwiXFwvdmlld2VyL2csICdocmVmPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3ZpZXdlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3NyYz1cIlxcL3ZpZXdlci9nLCAnc3JjPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3ZpZXdlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL2RhdGE9XCJcXC92aWV3ZXIvZywgJ2RhdGE9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdmlld2VyJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBpbWdEYXRhKGRhdGE6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGFJbWFnZVBuZ0Jhc2U2NCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcbiAgICBpZiAoIXRoaXMuaXNIdG1sTW9kZSkge1xuICAgICAgcmV0dXJuIGRhdGFJbWFnZVBuZ0Jhc2U2NCArIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBkYXRhSW1hZ2VQbmdCYXNlNjQ7XG4gIH1cblxuICBnZXRTY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLm1pbigxOTAgLyB4LCAxOTAgLyB5KTtcbiAgfVxuXG4gIG9wZW5QYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRQYWdlLmVtaXQocGFnZU51bWJlcik7XG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlVG8ocGFnZU51bWJlcik7XG4gIH1cblxuICAvLyBUT0RPOiBjb25zaWRlciBwbGFjaW5nIGluIG9uZSBzZXJ2aWNlXG4gIGdldERpbWVuc2lvbldpdGhVbml0KHZhbHVlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmFsdWUgKyBGaWxlVXRpbC5maW5kKHRoaXMuZ3VpZCwgZmFsc2UpLnVuaXQ7XG4gIH1cbn1cbiJdfQ==