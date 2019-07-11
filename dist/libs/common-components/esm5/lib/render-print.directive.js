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
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var pagesHtml = '';
        if (this.htmlMode) {
            try {
                for (var pages_1 = tslib_1.__values(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                    var page = pages_1_1.value;
                    pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                        '<div class="gd-wrapper">' + page.data + '</div>' +
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
        }
        else {
            try {
                for (var pages_2 = tslib_1.__values(pages), pages_2_1 = pages_2.next(); !pages_2_1.done; pages_2_1 = pages_2.next()) {
                    var page = pages_2_1.value;
                    pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                        '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
                        '</div>';
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (pages_2_1 && !pages_2_1.done && (_b = pages_2.return)) _b.call(pages_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
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
        //windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        // windowObject.close();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQ7SUFNRSw4QkFBb0IsY0FBa0M7UUFBdEQsaUJBT0M7UUFQbUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ3BELGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTywwQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBa0I7OztZQUNoQyxTQUFTLEdBQUcsRUFBRTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O2dCQUNqQixLQUFtQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFyQixJQUFNLElBQUksa0JBQUE7b0JBQ2IsU0FBUyxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CO3dCQUNuRSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVE7d0JBQ2pELFFBQVEsQ0FBQztpQkFDWjs7Ozs7Ozs7O1NBQ0Y7YUFBTTs7Z0JBQ0wsS0FBbUIsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtvQkFBckIsSUFBTSxJQUFJLGtCQUFBO29CQUNiLFNBQVMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQjt3QkFDbkUsb0hBQW9ILEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0I7d0JBQ3pKLFFBQVEsQ0FBQztpQkFDWjs7Ozs7Ozs7O1NBQ0Y7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7OztJQUVPLHlDQUFVOzs7Ozs7O0lBQWxCLFVBQW1CLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDbkMsUUFBUSxHQUFHLEdBQUc7O1lBQ2QsT0FBTyxHQUFHLEdBQUc7O1lBQ2YsZUFBZSxHQUFHLEVBQUU7UUFDeEIsSUFBRyxLQUFLLEdBQUcsT0FBTyxJQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUM7O2dCQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRztZQUNoRCxlQUFlLEdBQUcscURBQXFELENBQUM7WUFDeEUsSUFBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztnQkFDM0QsZUFBZSxHQUFHLGtDQUFrQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7YUFDckU7U0FDRjs7WUFDRyxRQUFRLEdBQUcsU0FBUztZQUN0QixpRkFBaUY7WUFDakYsZ0RBQWdELEdBQUcsZUFBZTtRQUNwRSxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQzs7WUFFM0IsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSwwRkFBMEYsQ0FBQztRQUMvSSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsZ0NBQWdDO1FBQ2hDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsd0JBQXdCO0lBQ3pCLENBQUM7Ozs7OztJQUVPLDhDQUFlOzs7OztJQUF2QixVQUF3QixJQUFVOztZQUMxQixPQUFPLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7O1lBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsMEZBQTBGLENBQUM7UUFDcEosWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFKTyxrQkFBa0I7OzsyQkFNdkIsS0FBSzs7SUE4RFIsMkJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQS9EWSxvQkFBb0I7OztJQUMvQix3Q0FBMkI7Ozs7O0lBRWYsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RSZW5kZXJQcmludF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlbmRlclByaW50RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaHRtbE1vZGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyU2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlKSB7XG4gICAgX3JlbmRlclNlcnZpY2UucmVuZGVyUHJpbnQuc3Vic2NyaWJlKHBhZ2VzID0+IHtcbiAgICAgIHRoaXMucmVuZGVyUHJpbnQocGFnZXMpO1xuICAgIH0pO1xuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50QmxvYi5zdWJzY3JpYmUoZmlsZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclByaW50QmxvYihmaWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpbnQocGFnZXM6IFBhZ2VNb2RlbFtdKSB7XG4gICAgbGV0IHBhZ2VzSHRtbCA9ICcnO1xuICAgIGlmICh0aGlzLmh0bWxNb2RlKSB7XG4gICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcbiAgICAgICAgcGFnZXNIdG1sICs9ICc8ZGl2IGlkPVwiZ2QtcGFnZS0nICsgcGFnZS5udW1iZXIgKyAnXCIgY2xhc3M9XCJnZC1wYWdlXCI+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJnZC13cmFwcGVyXCI+JyArIHBhZ2UuZGF0YSArICc8L2Rpdj4nICtcbiAgICAgICAgICAnPC9kaXY+JztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG4gICAgICAgIHBhZ2VzSHRtbCArPSAnPGRpdiBpZD1cImdkLXBhZ2UtJyArIHBhZ2UubnVtYmVyICsgJ1wiIGNsYXNzPVwiZ2QtcGFnZVwiPicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2Qtd3JhcHBlclwiPjxpbWFnZSBzdHlsZT1cIndpZHRoOiBpbmhlcml0ICFpbXBvcnRhbnRcIiBjbGFzcz1cImdkLXBhZ2UtaW1hZ2VcIiBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHBhZ2UuZGF0YSArICdcIiBhbHQ+PC9pbWFnZT48L2Rpdj4nICtcbiAgICAgICAgICAnPC9kaXY+JztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vcGVuV2luZG93KHBhZ2VzSHRtbCwgcGFnZXNbMF0ud2lkdGgsIHBhZ2VzWzBdLmhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5XaW5kb3cocGFnZXNIdG1sLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYTRIZWlnaHQgPSA4NDI7XG4gICAgY29uc3QgYTRXaWR0aCA9IDU5NTtcbiAgICBsZXQgaW1hZ2VBNEFkanVzdGVkID0gJyc7XG4gICAgaWYod2lkdGggPiBhNFdpZHRoICYmIGhlaWdodCA+IGE0SGVpZ2h0KXtcbiAgICAgIGNvbnN0IHpvb20gPSBNYXRoLnJvdW5kKGhlaWdodCAvIGE0SGVpZ2h0KSAvIDEwMDtcbiAgICAgIGltYWdlQTRBZGp1c3RlZCA9ICcuZ2QtcGFnZSBpbWcgeyB3aWR0aDogMTAwJTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO30nO1xuICAgICAgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKXtcbiAgICAgICAgaW1hZ2VBNEFkanVzdGVkID0gJy5nZC1wYWdlIGltZyB7IHRyYW5zZm9ybTogc2NhbGUoJyArIHpvb20gKyAnKTt9JztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNzc1ByaW50ID0gJzxzdHlsZT4nICtcbiAgICAgICcuZ2QtcGFnZSB7IGRpc3BsYXk6IGJsb2NrOyBwYWdlLWJyZWFrLWFmdGVyOmFsd2F5czsgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkOyB9JyArXG4gICAgICAnIC5nZC1wYWdlOmxhc3QtY2hpbGQge3BhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87fScgKyBpbWFnZUE0QWRqdXN0ZWQ7XG4gICAgY3NzUHJpbnQgPSBjc3NQcmludCArICc8L3N0eWxlPic7XG5cbiAgICBjb25zdCB3aW5kb3dPYmplY3QgPSB3aW5kb3cub3BlbignJywgXCJQcmludFdpbmRvd1wiLCBcIndpZHRoPTc1MCxoZWlnaHQ9NjUwLHRvcD01MCxsZWZ0PTUwLHRvb2xiYXJzPXllcyxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzLHJlc2l6YWJsZT15ZXNcIik7XG4gICAgd2luZG93T2JqZWN0LmZvY3VzKCk7XG4gICAgd2luZG93T2JqZWN0LmRvY3VtZW50LndyaXRlbG4oY3NzUHJpbnQpO1xuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKHBhZ2VzSHRtbCk7XG4gICAgLy93aW5kb3dPYmplY3QuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QucHJpbnQoKTtcbiAgIC8vIHdpbmRvd09iamVjdC5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmludEJsb2IoZmlsZTogQmxvYikge1xuICAgIGNvbnN0IGZpbGVVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIGNvbnN0IHdpbmRvd09iamVjdCA9IHdpbmRvdy5vcGVuKGZpbGVVUkwsIFwiUHJpbnRXaW5kb3dcIiwgXCJ3aWR0aD03NTAsaGVpZ2h0PTY1MCx0b3A9NTAsbGVmdD01MCx0b29sYmFycz15ZXMsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcyxyZXNpemFibGU9eWVzXCIpO1xuICAgIHdpbmRvd09iamVjdC5mb2N1cygpO1xuICAgIHdpbmRvd09iamVjdC5wcmludCgpO1xuICAgIHdpbmRvd09iamVjdC5jbG9zZSgpO1xuICB9XG59XG4iXX0=