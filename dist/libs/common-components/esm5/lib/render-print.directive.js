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
        var _this = this;
        /** @type {?} */
        var iframeId = 'print-window';
        /** @type {?} */
        var objectUrl = window.URL.createObjectURL(file)
        // Remove previous iframe if exists
        ;
        // Remove previous iframe if exists
        /** @type {?} */
        var iframe = document.getElementById(iframeId);
        if (iframe) {
            iframe.remove();
        }
        // Create new iframe
        iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute; border: 0');
        iframe.setAttribute('id', iframeId);
        iframe.setAttribute('src', objectUrl);
        // Append to the document
        document.getElementsByTagName('body')[0].appendChild(iframe);
        // Wait and print
        /** @type {?} */
        var iframeElement = (/** @type {?} */ (document.getElementById(iframeId)));
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.doPrint(iframeElement); }), 1000);
    };
    /**
     * @param {?} iframe
     * @return {?}
     */
    RenderPrintDirective.prototype.doPrint = /**
     * @param {?} iframe
     * @return {?}
     */
    function (iframe) {
        try {
            iframe.focus();
            iframe.contentWindow.document.execCommand('print', false);
        }
        catch (e) {
            iframe.contentWindow.print();
        }
        finally {
            // Hide iframe
            iframe.style.visibility = 'hidden';
            iframe.style.left = '-1px';
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFJMUQ7SUFNRSw4QkFBb0IsY0FBa0M7UUFBdEQsaUJBT0M7UUFQbUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ3BELGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTywwQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBa0I7OztZQUNoQyxTQUFTLEdBQUcsRUFBRTs7WUFFbEIsS0FBbUIsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBckIsSUFBTSxJQUFJLGtCQUFBOztvQkFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUNsRyxTQUFTLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0I7b0JB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SUFDdEQsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVMsTUFBYztRQUNyQixJQUFJO1lBQ0EsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUM1RDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUMvQjtnQkFBUztZQUNOLGNBQWM7WUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUE7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBM0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFOTyxrQkFBa0I7OzsyQkFRdkIsS0FBSzs7SUF5RlIsMkJBQUM7Q0FBQSxBQTdGRCxJQTZGQztTQTFGWSxvQkFBb0I7OztJQUMvQix3Q0FBMkI7Ozs7O0lBRWYsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xuXG50eXBlIElGcmFtZSA9IEhUTUxFbGVtZW50ICYge2NvbnRlbnRXaW5kb3c6IFdpbmRvd31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkUmVuZGVyUHJpbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZW5kZXJQcmludERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGh0bWxNb2RlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlclNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSkge1xuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50LnN1YnNjcmliZShwYWdlcyA9PiB7XG4gICAgICB0aGlzLnJlbmRlclByaW50KHBhZ2VzKTtcbiAgICB9KTtcbiAgICBfcmVuZGVyU2VydmljZS5yZW5kZXJQcmludEJsb2Iuc3Vic2NyaWJlKGZpbGUgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJQcmludEJsb2IoZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW50KHBhZ2VzOiBQYWdlTW9kZWxbXSkge1xuICAgIGxldCBwYWdlc0h0bWwgPSAnJztcblxuICAgIGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuICAgICAgY29uc3QgZGF0YSA9IHBhZ2UuZGF0YS5zdGFydHNXaXRoKCdkYXRhOmltYWdlJykgPyBwYWdlLmRhdGEgOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBwYWdlLmRhdGE7XG4gICAgICBwYWdlc0h0bWwgKz0gJzxkaXYgaWQ9XCJnZC1wYWdlLScgKyBwYWdlLm51bWJlciArICdcIiBjbGFzcz1cImdkLXBhZ2VcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnZC13cmFwcGVyXCI+PGltYWdlIHN0eWxlPVwid2lkdGg6IGluaGVyaXQgIWltcG9ydGFudFwiIGNsYXNzPVwiZ2QtcGFnZS1pbWFnZVwiIHNyYz1cIicgKyBkYXRhICsgJ1wiIGFsdD48L2ltYWdlPjwvZGl2PicgK1xuICAgICAgICAnPC9kaXY+JztcbiAgICB9XG5cbiAgICB0aGlzLm9wZW5XaW5kb3cocGFnZXNIdG1sLCBwYWdlc1swXS53aWR0aCwgcGFnZXNbMF0uaGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbldpbmRvdyhwYWdlc0h0bWwsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBhNEhlaWdodCA9IDg0MjtcbiAgICBjb25zdCBhNFdpZHRoID0gNTk1O1xuICAgIGxldCBpbWFnZUE0QWRqdXN0ZWQgPSAnJztcbiAgICBpZih3aWR0aCA+IGE0V2lkdGggJiYgaGVpZ2h0ID4gYTRIZWlnaHQpe1xuICAgICAgY29uc3Qgem9vbSA9IE1hdGgucm91bmQoaGVpZ2h0IC8gYTRIZWlnaHQpIC8gMTAwO1xuICAgICAgaW1hZ2VBNEFkanVzdGVkID0gJy5nZC1wYWdlIGltZyB7IHdpZHRoOiAxMDAlOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7fSc7XG4gICAgICBpZihuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpe1xuICAgICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgnICsgem9vbSArICcpO30nO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgY3NzUHJpbnQgPSAnPHN0eWxlPicgK1xuICAgICAgJy5nZC1wYWdlIHsgZGlzcGxheTogYmxvY2s7IHBhZ2UtYnJlYWstYWZ0ZXI6YWx3YXlzOyBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7IH0nICtcbiAgICAgICcgLmdkLXBhZ2U6bGFzdC1jaGlsZCB7cGFnZS1icmVhay1hZnRlcjogYXV0bzt9JyArIGltYWdlQTRBZGp1c3RlZDtcbiAgICBjc3NQcmludCA9IGNzc1ByaW50ICsgJzwvc3R5bGU+JztcblxuICAgIGNvbnN0IHdpbmRvd09iamVjdCA9IHdpbmRvdy5vcGVuKCcnLCBcIlByaW50V2luZG93XCIsIFwid2lkdGg9NzUwLGhlaWdodD02NTAsdG9wPTUwLGxlZnQ9NTAsdG9vbGJhcnM9eWVzLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMscmVzaXphYmxlPXllc1wiKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQud3JpdGVsbihjc3NQcmludCk7XG4gICAgd2luZG93T2JqZWN0LmRvY3VtZW50LndyaXRlbG4ocGFnZXNIdG1sKTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvd09iamVjdC5mb2N1cygpO1xuICAgICAgd2luZG93T2JqZWN0LnByaW50KCk7XG4gICAgICB3aW5kb3dPYmplY3QuY2xvc2UoKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmludEJsb2IoZmlsZTogQmxvYikge1xuICAgIGNvbnN0IGlmcmFtZUlkID0gJ3ByaW50LXdpbmRvdyc7XG4gICAgY29uc3Qgb2JqZWN0VXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcblxuICAgIC8vIFJlbW92ZSBwcmV2aW91cyBpZnJhbWUgaWYgZXhpc3RzXG4gICAgbGV0IGlmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlmcmFtZUlkKVxuICAgIGlmIChpZnJhbWUpIHtcbiAgICAgIGlmcmFtZS5yZW1vdmUoKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBuZXcgaWZyYW1lXG4gICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OiBoaWRkZW47IGhlaWdodDogMDsgd2lkdGg6IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm9yZGVyOiAwJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBpZnJhbWVJZClcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBvYmplY3RVcmwpXG5cbiAgICAvLyBBcHBlbmQgdG8gdGhlIGRvY3VtZW50XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgLy8gV2FpdCBhbmQgcHJpbnRcbiAgICBjb25zdCBpZnJhbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSWQpIGFzIElGcmFtZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZG9QcmludChpZnJhbWVFbGVtZW50KSwgMTAwMCk7ICBcbiAgfVxuXG4gIGRvUHJpbnQgKGlmcmFtZTogSUZyYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWZyYW1lLmZvY3VzKClcbiAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3ByaW50JywgZmFsc2UpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wcmludCgpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gSGlkZSBpZnJhbWVcbiAgICAgICAgaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICBpZnJhbWUuc3R5bGUubGVmdCA9ICctMXB4J1xuICAgIH1cbiAgfVxuXG59XG4iXX0=