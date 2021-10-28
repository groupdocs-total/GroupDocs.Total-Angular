/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { RenderPrintService } from "./render-print.service";
export class RenderPrintDirective {
    /**
     * @param {?} _renderService
     */
    constructor(_renderService) {
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe((/**
         * @param {?} pages
         * @return {?}
         */
        pages => {
            this.renderPrint(pages);
        }));
        _renderService.renderPrintBlob.subscribe((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            this.renderPrintBlob(file);
        }));
    }
    /**
     * @private
     * @param {?} pages
     * @return {?}
     */
    renderPrint(pages) {
        /** @type {?} */
        let pagesHtml = '';
        for (const page of pages) {
            /** @type {?} */
            const data = page.data.startsWith('data:image') ? page.data : 'data:image/png;base64,' + page.data;
            pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="' + data + '" alt></image></div>' +
                '</div>';
        }
        this.openWindow(pagesHtml, pages[0].width, pages[0].height);
    }
    /**
     * @private
     * @param {?} pagesHtml
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    openWindow(pagesHtml, width, height) {
        /** @type {?} */
        const a4Height = 842;
        /** @type {?} */
        const a4Width = 595;
        /** @type {?} */
        let imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            /** @type {?} */
            const zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        /** @type {?} */
        let cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        /** @type {?} */
        const windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        windowObject.document.close();
        setTimeout((/**
         * @return {?}
         */
        () => {
            windowObject.focus();
            windowObject.print();
            windowObject.close();
        }), 100);
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    renderPrintBlob(file) {
        /** @type {?} */
        const iframeId = 'print-window';
        /** @type {?} */
        const objectUrl = window.URL.createObjectURL(file)
        // Remove previous iframe if exists
        ;
        // Remove previous iframe if exists
        /** @type {?} */
        let iframe = document.getElementById(iframeId);
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
        const iframeElement = (/** @type {?} */ (document.getElementById(iframeId)));
        setTimeout((/**
         * @return {?}
         */
        () => this.doPrint(iframeElement)), 1000);
    }
    /**
     * @param {?} iframe
     * @return {?}
     */
    doPrint(iframe) {
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
    }
}
RenderPrintDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdRenderPrint]'
            },] }
];
/** @nocollapse */
RenderPrintDirective.ctorParameters = () => [
    { type: RenderPrintService }
];
RenderPrintDirective.propDecorators = {
    htmlMode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RenderPrintDirective.prototype.htmlMode;
    /**
     * @type {?}
     * @private
     */
    RenderPrintDirective.prototype._renderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQU8xRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUNwRCxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFrQjs7WUFDaEMsU0FBUyxHQUFHLEVBQUU7UUFFbEIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7O2tCQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ2xHLFNBQVMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQjtnQkFDbkUsOEZBQThGLEdBQUcsSUFBSSxHQUFHLHNCQUFzQjtn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Q2QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUM1RDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUMvQjtnQkFBUztZQUNOLGNBQWM7WUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUE7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO1NBQzdCO0lBQ0gsQ0FBQzs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBTk8sa0JBQWtCOzs7dUJBUXZCLEtBQUs7Ozs7SUFBTix3Q0FBMkI7Ozs7O0lBRWYsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xuXG50eXBlIElGcmFtZSA9IEhUTUxFbGVtZW50ICYge2NvbnRlbnRXaW5kb3c6IFdpbmRvd31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkUmVuZGVyUHJpbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZW5kZXJQcmludERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGh0bWxNb2RlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlclNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSkge1xuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50LnN1YnNjcmliZShwYWdlcyA9PiB7XG4gICAgICB0aGlzLnJlbmRlclByaW50KHBhZ2VzKTtcbiAgICB9KTtcbiAgICBfcmVuZGVyU2VydmljZS5yZW5kZXJQcmludEJsb2Iuc3Vic2NyaWJlKGZpbGUgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJQcmludEJsb2IoZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW50KHBhZ2VzOiBQYWdlTW9kZWxbXSkge1xuICAgIGxldCBwYWdlc0h0bWwgPSAnJztcblxuICAgIGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuICAgICAgY29uc3QgZGF0YSA9IHBhZ2UuZGF0YS5zdGFydHNXaXRoKCdkYXRhOmltYWdlJykgPyBwYWdlLmRhdGEgOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBwYWdlLmRhdGE7XG4gICAgICBwYWdlc0h0bWwgKz0gJzxkaXYgaWQ9XCJnZC1wYWdlLScgKyBwYWdlLm51bWJlciArICdcIiBjbGFzcz1cImdkLXBhZ2VcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnZC13cmFwcGVyXCI+PGltYWdlIHN0eWxlPVwid2lkdGg6IGluaGVyaXQgIWltcG9ydGFudFwiIGNsYXNzPVwiZ2QtcGFnZS1pbWFnZVwiIHNyYz1cIicgKyBkYXRhICsgJ1wiIGFsdD48L2ltYWdlPjwvZGl2PicgK1xuICAgICAgICAnPC9kaXY+JztcbiAgICB9XG5cbiAgICB0aGlzLm9wZW5XaW5kb3cocGFnZXNIdG1sLCBwYWdlc1swXS53aWR0aCwgcGFnZXNbMF0uaGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbldpbmRvdyhwYWdlc0h0bWwsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBhNEhlaWdodCA9IDg0MjtcbiAgICBjb25zdCBhNFdpZHRoID0gNTk1O1xuICAgIGxldCBpbWFnZUE0QWRqdXN0ZWQgPSAnJztcbiAgICBpZih3aWR0aCA+IGE0V2lkdGggJiYgaGVpZ2h0ID4gYTRIZWlnaHQpe1xuICAgICAgY29uc3Qgem9vbSA9IE1hdGgucm91bmQoaGVpZ2h0IC8gYTRIZWlnaHQpIC8gMTAwO1xuICAgICAgaW1hZ2VBNEFkanVzdGVkID0gJy5nZC1wYWdlIGltZyB7IHdpZHRoOiAxMDAlOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7fSc7XG4gICAgICBpZihuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpe1xuICAgICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgnICsgem9vbSArICcpO30nO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgY3NzUHJpbnQgPSAnPHN0eWxlPicgK1xuICAgICAgJy5nZC1wYWdlIHsgZGlzcGxheTogYmxvY2s7IHBhZ2UtYnJlYWstYWZ0ZXI6YWx3YXlzOyBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7IH0nICtcbiAgICAgICcgLmdkLXBhZ2U6bGFzdC1jaGlsZCB7cGFnZS1icmVhay1hZnRlcjogYXV0bzt9JyArIGltYWdlQTRBZGp1c3RlZDtcbiAgICBjc3NQcmludCA9IGNzc1ByaW50ICsgJzwvc3R5bGU+JztcblxuICAgIGNvbnN0IHdpbmRvd09iamVjdCA9IHdpbmRvdy5vcGVuKCcnLCBcIlByaW50V2luZG93XCIsIFwid2lkdGg9NzUwLGhlaWdodD02NTAsdG9wPTUwLGxlZnQ9NTAsdG9vbGJhcnM9eWVzLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMscmVzaXphYmxlPXllc1wiKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQud3JpdGVsbihjc3NQcmludCk7XG4gICAgd2luZG93T2JqZWN0LmRvY3VtZW50LndyaXRlbG4ocGFnZXNIdG1sKTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvd09iamVjdC5mb2N1cygpO1xuICAgICAgd2luZG93T2JqZWN0LnByaW50KCk7XG4gICAgICB3aW5kb3dPYmplY3QuY2xvc2UoKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmludEJsb2IoZmlsZTogQmxvYikge1xuICAgIGNvbnN0IGlmcmFtZUlkID0gJ3ByaW50LXdpbmRvdyc7XG4gICAgY29uc3Qgb2JqZWN0VXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcblxuICAgIC8vIFJlbW92ZSBwcmV2aW91cyBpZnJhbWUgaWYgZXhpc3RzXG4gICAgbGV0IGlmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlmcmFtZUlkKVxuICAgIGlmIChpZnJhbWUpIHtcbiAgICAgIGlmcmFtZS5yZW1vdmUoKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBuZXcgaWZyYW1lXG4gICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OiBoaWRkZW47IGhlaWdodDogMDsgd2lkdGg6IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm9yZGVyOiAwJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBpZnJhbWVJZClcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBvYmplY3RVcmwpXG5cbiAgICAvLyBBcHBlbmQgdG8gdGhlIGRvY3VtZW50XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgLy8gV2FpdCBhbmQgcHJpbnRcbiAgICBjb25zdCBpZnJhbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSWQpIGFzIElGcmFtZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZG9QcmludChpZnJhbWVFbGVtZW50KSwgMTAwMCk7ICBcbiAgfVxuXG4gIGRvUHJpbnQgKGlmcmFtZTogSUZyYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWZyYW1lLmZvY3VzKClcbiAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3ByaW50JywgZmFsc2UpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wcmludCgpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gSGlkZSBpZnJhbWVcbiAgICAgICAgaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICBpZnJhbWUuc3R5bGUubGVmdCA9ICctMXB4J1xuICAgIH1cbiAgfVxuXG59XG4iXX0=