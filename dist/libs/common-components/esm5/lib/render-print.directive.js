/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { RenderPrintService } from "./render-print.service";
var RenderPrintDirective = /** @class */ (function () {
    function RenderPrintDirective(_renderService) {
        var _this = this;
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe((/**
         * @param {?} pages
         * @return {?}
         */
        function (pages) {
            _this.renderPrint(pages);
        }));
        _renderService.renderPrintBlob.subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.renderPrintBlob(file);
        }));
    }
    /**
     * @private
     * @param {?} pages
     * @return {?}
     */
    RenderPrintDirective.prototype.renderPrint = /**
     * @private
     * @param {?} pages
     * @return {?}
     */
    function (pages) {
        var e_1, _a;
        /** @type {?} */
        var pagesHtml = '';
        try {
            for (var pages_1 = tslib_1.__values(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                var page = pages_1_1.value;
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
                    '</div>';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (pages_1_1 && !pages_1_1.done && (_a = pages_1.return)) _a.call(pages_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.openWindow(pagesHtml, pages[0].width, pages[0].height);
    };
    /**
     * @private
     * @param {?} pagesHtml
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    RenderPrintDirective.prototype.openWindow = /**
     * @private
     * @param {?} pagesHtml
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (pagesHtml, width, height) {
        /** @type {?} */
        var a4Height = 842;
        /** @type {?} */
        var a4Width = 595;
        /** @type {?} */
        var imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            /** @type {?} */
            var zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        /** @type {?} */
        var cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        /** @type {?} */
        var windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        windowObject.document.close();
        setTimeout((/**
         * @return {?}
         */
        function () {
            windowObject.focus();
            windowObject.print();
            windowObject.close();
        }), 100);
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    RenderPrintDirective.prototype.renderPrintBlob = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var fileURL = URL.createObjectURL(file);
        /** @type {?} */
        var windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    };
    RenderPrintDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdRenderPrint]'
                },] }
    ];
    /** @nocollapse */
    RenderPrintDirective.ctorParameters = function () { return [
        { type: RenderPrintService }
    ]; };
    RenderPrintDirective.propDecorators = {
        htmlMode: [{ type: Input }]
    };
    return RenderPrintDirective;
}());
export { RenderPrintDirective };
if (false) {
    /** @type {?} */
    RenderPrintDirective.prototype.htmlMode;
    /**
     * @type {?}
     * @private
     */
    RenderPrintDirective.prototype._renderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQ7SUFNRSw4QkFBb0IsY0FBa0M7UUFBdEQsaUJBT0M7UUFQbUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ3BELGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTywwQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBa0I7OztZQUNoQyxTQUFTLEdBQUcsRUFBRTs7WUFFbEIsS0FBbUIsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBckIsSUFBTSxJQUFJLGtCQUFBO2dCQUNiLFNBQVMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQjtvQkFDbkUsb0hBQW9ILEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0I7b0JBQ3pKLFFBQVEsQ0FBQzthQUNaOzs7Ozs7Ozs7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7OztJQUVPLHlDQUFVOzs7Ozs7O0lBQWxCLFVBQW1CLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDbkMsUUFBUSxHQUFHLEdBQUc7O1lBQ2QsT0FBTyxHQUFHLEdBQUc7O1lBQ2YsZUFBZSxHQUFHLEVBQUU7UUFDeEIsSUFBRyxLQUFLLEdBQUcsT0FBTyxJQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUM7O2dCQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRztZQUNoRCxlQUFlLEdBQUcscURBQXFELENBQUM7WUFDeEUsSUFBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztnQkFDM0QsZUFBZSxHQUFHLGtDQUFrQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7YUFDckU7U0FDRjs7WUFDRyxRQUFRLEdBQUcsU0FBUztZQUN0QixpRkFBaUY7WUFDakYsZ0RBQWdELEdBQUcsZUFBZTtRQUNwRSxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQzs7WUFFM0IsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSwwRkFBMEYsQ0FBQztRQUMvSSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixVQUFVOzs7UUFBQztZQUNULFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7OztJQUVPLDhDQUFlOzs7OztJQUF2QixVQUF3QixJQUFVOztZQUMxQixPQUFPLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7O1lBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsMEZBQTBGLENBQUM7UUFDcEosWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBN0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFKTyxrQkFBa0I7OzsyQkFNdkIsS0FBSzs7SUEwRFIsMkJBQUM7Q0FBQSxBQTlERCxJQThEQztTQTNEWSxvQkFBb0I7OztJQUMvQix3Q0FBMkI7Ozs7O0lBRWYsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1JlbmRlclByaW50U2VydmljZX0gZnJvbSBcIi4vcmVuZGVyLXByaW50LnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkUmVuZGVyUHJpbnRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVuZGVyUHJpbnREaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIGh0bWxNb2RlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UpIHtcclxuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50LnN1YnNjcmliZShwYWdlcyA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyUHJpbnQocGFnZXMpO1xyXG4gICAgfSk7XHJcbiAgICBfcmVuZGVyU2VydmljZS5yZW5kZXJQcmludEJsb2Iuc3Vic2NyaWJlKGZpbGUgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlclByaW50QmxvYihmaWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJQcmludChwYWdlczogUGFnZU1vZGVsW10pIHtcclxuICAgIGxldCBwYWdlc0h0bWwgPSAnJztcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcclxuICAgICAgcGFnZXNIdG1sICs9ICc8ZGl2IGlkPVwiZ2QtcGFnZS0nICsgcGFnZS5udW1iZXIgKyAnXCIgY2xhc3M9XCJnZC1wYWdlXCI+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnZC13cmFwcGVyXCI+PGltYWdlIHN0eWxlPVwid2lkdGg6IGluaGVyaXQgIWltcG9ydGFudFwiIGNsYXNzPVwiZ2QtcGFnZS1pbWFnZVwiIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcGFnZS5kYXRhICsgJ1wiIGFsdD48L2ltYWdlPjwvZGl2PicgK1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3BlbldpbmRvdyhwYWdlc0h0bWwsIHBhZ2VzWzBdLndpZHRoLCBwYWdlc1swXS5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuV2luZG93KHBhZ2VzSHRtbCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgYTRIZWlnaHQgPSA4NDI7XHJcbiAgICBjb25zdCBhNFdpZHRoID0gNTk1O1xyXG4gICAgbGV0IGltYWdlQTRBZGp1c3RlZCA9ICcnO1xyXG4gICAgaWYod2lkdGggPiBhNFdpZHRoICYmIGhlaWdodCA+IGE0SGVpZ2h0KXtcclxuICAgICAgY29uc3Qgem9vbSA9IE1hdGgucm91bmQoaGVpZ2h0IC8gYTRIZWlnaHQpIC8gMTAwO1xyXG4gICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgd2lkdGg6IDEwMCU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9JztcclxuICAgICAgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKXtcclxuICAgICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgnICsgem9vbSArICcpO30nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgY3NzUHJpbnQgPSAnPHN0eWxlPicgK1xyXG4gICAgICAnLmdkLXBhZ2UgeyBkaXNwbGF5OiBibG9jazsgcGFnZS1icmVhay1hZnRlcjphbHdheXM7IHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfScgK1xyXG4gICAgICAnIC5nZC1wYWdlOmxhc3QtY2hpbGQge3BhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87fScgKyBpbWFnZUE0QWRqdXN0ZWQ7XHJcbiAgICBjc3NQcmludCA9IGNzc1ByaW50ICsgJzwvc3R5bGU+JztcclxuXHJcbiAgICBjb25zdCB3aW5kb3dPYmplY3QgPSB3aW5kb3cub3BlbignJywgXCJQcmludFdpbmRvd1wiLCBcIndpZHRoPTc1MCxoZWlnaHQ9NjUwLHRvcD01MCxsZWZ0PTUwLHRvb2xiYXJzPXllcyxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzLHJlc2l6YWJsZT15ZXNcIik7XHJcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcclxuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKGNzc1ByaW50KTtcclxuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKHBhZ2VzSHRtbCk7XHJcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQuY2xvc2UoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcclxuICAgICAgd2luZG93T2JqZWN0LnByaW50KCk7XHJcbiAgICAgIHdpbmRvd09iamVjdC5jbG9zZSgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyUHJpbnRCbG9iKGZpbGU6IEJsb2IpIHtcclxuICAgIGNvbnN0IGZpbGVVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgY29uc3Qgd2luZG93T2JqZWN0ID0gd2luZG93Lm9wZW4oZmlsZVVSTCwgXCJQcmludFdpbmRvd1wiLCBcIndpZHRoPTc1MCxoZWlnaHQ9NjUwLHRvcD01MCxsZWZ0PTUwLHRvb2xiYXJzPXllcyxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzLHJlc2l6YWJsZT15ZXNcIik7XHJcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcclxuICAgIHdpbmRvd09iamVjdC5wcmludCgpO1xyXG4gICAgd2luZG93T2JqZWN0LmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==