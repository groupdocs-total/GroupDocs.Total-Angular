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
        return data.startsWith('data:image')
            ? data
            : 'data:image/png;base64,' + data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxlQUFlLEVBQWEsV0FBVyxFQUFFLFFBQVEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRWhIO0lBYUUsNkJBQW9CLGdCQUFpQyxFQUFVLFlBQXlCO1FBQXBFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUY5RSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSwyRUFBMkU7UUFDM0UsK0RBQStEO1FBQy9ELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQzt5QkFDdEIsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQztpQkFDN0M7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUFBLGlCQUlDO1FBSEMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7O0lBRUQscUNBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztZQUNsQyxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUQsc0NBQVE7Ozs7O0lBQVIsVUFBUyxDQUFTLEVBQUUsQ0FBUztRQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBUTs7OztJQUFSLFVBQVMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsd0NBQXdDOzs7Ozs7SUFDeEMsa0RBQW9COzs7Ozs7SUFBcEIsVUFBcUIsS0FBYTtRQUNoQyxPQUFPLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDR2Q0FBMEM7O2lCQUUzQzs7OztnQkFOTyxlQUFlO2dCQUFhLFdBQVc7Ozt3QkFTNUMsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxNQUFNOztJQWtEVCwwQkFBQztDQUFBLEFBN0RELElBNkRDO1NBeERZLG1CQUFtQjs7O0lBRTlCLG9DQUE0Qjs7SUFDNUIsbUNBQXNCOztJQUN0QixtQ0FBdUI7O0lBQ3ZCLHlDQUE2Qjs7SUFDN0IsMkNBQW9EOzs7OztJQUV4QywrQ0FBeUM7Ozs7O0lBQUUsMkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRlU2VydmljZSwgUGFnZU1vZGVsLCBab29tU2VydmljZSwgRmlsZVV0aWx9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdGh1bWJuYWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi90aHVtYm5haWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGh1bWJuYWlscy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRodW1ibmFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBwYWdlczogUGFnZU1vZGVsW107XG4gIEBJbnB1dCgpIGd1aWQ6IHN0cmluZztcbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNIdG1sTW9kZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLCBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgLy8gVE9ETzogdGhpcyBpcyB0ZW1wb3JhcnkgbmVlZGVkIHRvIHJlbW92ZSB1bm5lZWRlZCBzcGFjZXMgYW5kIEJPTSBzeW1ib2wgXG4gICAgLy8gd2hpY2ggbGVhZHMgdG8gdW5kZXNpcmVkIHNwYWNlcyBvbiB0aGUgdG9wIG9mIHRoZSBkb2NzIHBhZ2VzXG4gICAgaWYgKHRoaXMucGFnZXMpIHtcbiAgICAgIHRoaXMucGFnZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgaWYgKHBhZ2UuZGF0YSkge1xuICAgICAgICAgIHBhZ2UuZGF0YSA9IHBhZ2UuZGF0YS5yZXBsYWNlKC8+XFxzKzwvZywnPjwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHVGRUZGL2csXCJcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBpbWdEYXRhKGRhdGE6IHN0cmluZykge1xuICAgIHJldHVybiBkYXRhLnN0YXJ0c1dpdGgoJ2RhdGE6aW1hZ2UnKSBcbiAgICAgID8gZGF0YSBcbiAgICAgIDogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgZGF0YTtcbiAgfVxuXG4gIGdldFNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKDE5MCAvIHgsIDE5MCAvIHkpO1xuICB9XG5cbiAgb3BlblBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZFBhZ2UuZW1pdChwYWdlTnVtYmVyKTtcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGVUbyhwYWdlTnVtYmVyKTtcbiAgfVxuXG4gIC8vIFRPRE86IGNvbnNpZGVyIHBsYWNpbmcgaW4gb25lIHNlcnZpY2VcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiB2YWx1ZSArIEZpbGVVdGlsLmZpbmQodGhpcy5ndWlkLCBmYWxzZSkudW5pdDtcbiAgfVxufVxuIl19