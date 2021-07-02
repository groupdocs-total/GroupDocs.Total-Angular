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
                /** @type {?} */
                var data = page.data.startsWith('data:image') ? page.data : 'data:image/png;base64,' + page.data;
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="' + data + '" alt></image></div>' +
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQ7SUFNRSw4QkFBb0IsY0FBa0M7UUFBdEQsaUJBT0M7UUFQbUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ3BELGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTywwQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBa0I7OztZQUNoQyxTQUFTLEdBQUcsRUFBRTs7WUFFbEIsS0FBbUIsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBckIsSUFBTSxJQUFJLGtCQUFBOztvQkFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUNsRyxTQUFTLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0I7b0JBQ25FLDhGQUE4RixHQUFHLElBQUksR0FBRyxzQkFBc0I7b0JBQzlILFFBQVEsQ0FBQzthQUNaOzs7Ozs7Ozs7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7OztJQUVPLHlDQUFVOzs7Ozs7O0lBQWxCLFVBQW1CLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDbkMsUUFBUSxHQUFHLEdBQUc7O1lBQ2QsT0FBTyxHQUFHLEdBQUc7O1lBQ2YsZUFBZSxHQUFHLEVBQUU7UUFDeEIsSUFBRyxLQUFLLEdBQUcsT0FBTyxJQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUM7O2dCQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRztZQUNoRCxlQUFlLEdBQUcscURBQXFELENBQUM7WUFDeEUsSUFBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztnQkFDM0QsZUFBZSxHQUFHLGtDQUFrQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7YUFDckU7U0FDRjs7WUFDRyxRQUFRLEdBQUcsU0FBUztZQUN0QixpRkFBaUY7WUFDakYsZ0RBQWdELEdBQUcsZUFBZTtRQUNwRSxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQzs7WUFFM0IsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSwwRkFBMEYsQ0FBQztRQUMvSSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixVQUFVOzs7UUFBQztZQUNULFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7OztJQUVPLDhDQUFlOzs7OztJQUF2QixVQUF3QixJQUFVOztZQUMxQixPQUFPLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7O1lBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsMEZBQTBGLENBQUM7UUFDcEosWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFKTyxrQkFBa0I7OzsyQkFNdkIsS0FBSzs7SUEyRFIsMkJBQUM7Q0FBQSxBQS9ERCxJQStEQztTQTVEWSxvQkFBb0I7OztJQUMvQix3Q0FBMkI7Ozs7O0lBRWYsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RSZW5kZXJQcmludF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlbmRlclByaW50RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaHRtbE1vZGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyU2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlKSB7XG4gICAgX3JlbmRlclNlcnZpY2UucmVuZGVyUHJpbnQuc3Vic2NyaWJlKHBhZ2VzID0+IHtcbiAgICAgIHRoaXMucmVuZGVyUHJpbnQocGFnZXMpO1xuICAgIH0pO1xuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50QmxvYi5zdWJzY3JpYmUoZmlsZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclByaW50QmxvYihmaWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpbnQocGFnZXM6IFBhZ2VNb2RlbFtdKSB7XG4gICAgbGV0IHBhZ2VzSHRtbCA9ICcnO1xuXG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG4gICAgICBjb25zdCBkYXRhID0gcGFnZS5kYXRhLnN0YXJ0c1dpdGgoJ2RhdGE6aW1hZ2UnKSA/IHBhZ2UuZGF0YSA6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHBhZ2UuZGF0YTtcbiAgICAgIHBhZ2VzSHRtbCArPSAnPGRpdiBpZD1cImdkLXBhZ2UtJyArIHBhZ2UubnVtYmVyICsgJ1wiIGNsYXNzPVwiZ2QtcGFnZVwiPicgK1xuICAgICAgICAnPGRpdiBjbGFzcz1cImdkLXdyYXBwZXJcIj48aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50XCIgY2xhc3M9XCJnZC1wYWdlLWltYWdlXCIgc3JjPVwiJyArIGRhdGEgKyAnXCIgYWx0PjwvaW1hZ2U+PC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nO1xuICAgIH1cblxuICAgIHRoaXMub3BlbldpbmRvdyhwYWdlc0h0bWwsIHBhZ2VzWzBdLndpZHRoLCBwYWdlc1swXS5oZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuV2luZG93KHBhZ2VzSHRtbCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGE0SGVpZ2h0ID0gODQyO1xuICAgIGNvbnN0IGE0V2lkdGggPSA1OTU7XG4gICAgbGV0IGltYWdlQTRBZGp1c3RlZCA9ICcnO1xuICAgIGlmKHdpZHRoID4gYTRXaWR0aCAmJiBoZWlnaHQgPiBhNEhlaWdodCl7XG4gICAgICBjb25zdCB6b29tID0gTWF0aC5yb3VuZChoZWlnaHQgLyBhNEhlaWdodCkgLyAxMDA7XG4gICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgd2lkdGg6IDEwMCU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9JztcbiAgICAgIGlmKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSl7XG4gICAgICAgIGltYWdlQTRBZGp1c3RlZCA9ICcuZ2QtcGFnZSBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKCcgKyB6b29tICsgJyk7fSc7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBjc3NQcmludCA9ICc8c3R5bGU+JyArXG4gICAgICAnLmdkLXBhZ2UgeyBkaXNwbGF5OiBibG9jazsgcGFnZS1icmVhay1hZnRlcjphbHdheXM7IHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfScgK1xuICAgICAgJyAuZ2QtcGFnZTpsYXN0LWNoaWxkIHtwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO30nICsgaW1hZ2VBNEFkanVzdGVkO1xuICAgIGNzc1ByaW50ID0gY3NzUHJpbnQgKyAnPC9zdHlsZT4nO1xuXG4gICAgY29uc3Qgd2luZG93T2JqZWN0ID0gd2luZG93Lm9wZW4oJycsIFwiUHJpbnRXaW5kb3dcIiwgXCJ3aWR0aD03NTAsaGVpZ2h0PTY1MCx0b3A9NTAsbGVmdD01MCx0b29sYmFycz15ZXMsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcyxyZXNpemFibGU9eWVzXCIpO1xuICAgIHdpbmRvd09iamVjdC5mb2N1cygpO1xuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKGNzc1ByaW50KTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQud3JpdGVsbihwYWdlc0h0bWwpO1xuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC5jbG9zZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93T2JqZWN0LmZvY3VzKCk7XG4gICAgICB3aW5kb3dPYmplY3QucHJpbnQoKTtcbiAgICAgIHdpbmRvd09iamVjdC5jbG9zZSgpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW50QmxvYihmaWxlOiBCbG9iKSB7XG4gICAgY29uc3QgZmlsZVVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgY29uc3Qgd2luZG93T2JqZWN0ID0gd2luZG93Lm9wZW4oZmlsZVVSTCwgXCJQcmludFdpbmRvd1wiLCBcIndpZHRoPTc1MCxoZWlnaHQ9NjUwLHRvcD01MCxsZWZ0PTUwLHRvb2xiYXJzPXllcyxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzLHJlc2l6YWJsZT15ZXNcIik7XG4gICAgd2luZG93T2JqZWN0LmZvY3VzKCk7XG4gICAgd2luZG93T2JqZWN0LnByaW50KCk7XG4gICAgd2luZG93T2JqZWN0LmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==