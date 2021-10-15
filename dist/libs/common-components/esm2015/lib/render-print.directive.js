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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQU8xRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUNwRCxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFrQjs7WUFDaEMsU0FBUyxHQUFHLEVBQUU7UUFFbEIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7O2tCQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ2xHLFNBQVMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQjtnQkFDbkUsOEZBQThGLEdBQUcsSUFBSSxHQUFHLHNCQUFzQjtn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Q2QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUM1RDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUMvQjtnQkFBUztZQUNOLGNBQWM7WUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUE7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO1NBQzdCO0lBQ0gsQ0FBQzs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBTk8sa0JBQWtCOzs7dUJBUXZCLEtBQUs7Ozs7SUFBTix3Q0FBMkI7Ozs7O0lBRWYsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1JlbmRlclByaW50U2VydmljZX0gZnJvbSBcIi4vcmVuZGVyLXByaW50LnNlcnZpY2VcIjtcclxuXHJcbnR5cGUgSUZyYW1lID0gSFRNTEVsZW1lbnQgJiB7Y29udGVudFdpbmRvdzogV2luZG93fVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RSZW5kZXJQcmludF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJQcmludERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgaHRtbE1vZGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlclNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSkge1xyXG4gICAgX3JlbmRlclNlcnZpY2UucmVuZGVyUHJpbnQuc3Vic2NyaWJlKHBhZ2VzID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJQcmludChwYWdlcyk7XHJcbiAgICB9KTtcclxuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50QmxvYi5zdWJzY3JpYmUoZmlsZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyUHJpbnRCbG9iKGZpbGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclByaW50KHBhZ2VzOiBQYWdlTW9kZWxbXSkge1xyXG4gICAgbGV0IHBhZ2VzSHRtbCA9ICcnO1xyXG5cclxuICAgIGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xyXG4gICAgICBjb25zdCBkYXRhID0gcGFnZS5kYXRhLnN0YXJ0c1dpdGgoJ2RhdGE6aW1hZ2UnKSA/IHBhZ2UuZGF0YSA6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHBhZ2UuZGF0YTtcclxuICAgICAgcGFnZXNIdG1sICs9ICc8ZGl2IGlkPVwiZ2QtcGFnZS0nICsgcGFnZS5udW1iZXIgKyAnXCIgY2xhc3M9XCJnZC1wYWdlXCI+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnZC13cmFwcGVyXCI+PGltYWdlIHN0eWxlPVwid2lkdGg6IGluaGVyaXQgIWltcG9ydGFudFwiIGNsYXNzPVwiZ2QtcGFnZS1pbWFnZVwiIHNyYz1cIicgKyBkYXRhICsgJ1wiIGFsdD48L2ltYWdlPjwvZGl2PicgK1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3BlbldpbmRvdyhwYWdlc0h0bWwsIHBhZ2VzWzBdLndpZHRoLCBwYWdlc1swXS5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuV2luZG93KHBhZ2VzSHRtbCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgYTRIZWlnaHQgPSA4NDI7XHJcbiAgICBjb25zdCBhNFdpZHRoID0gNTk1O1xyXG4gICAgbGV0IGltYWdlQTRBZGp1c3RlZCA9ICcnO1xyXG4gICAgaWYod2lkdGggPiBhNFdpZHRoICYmIGhlaWdodCA+IGE0SGVpZ2h0KXtcclxuICAgICAgY29uc3Qgem9vbSA9IE1hdGgucm91bmQoaGVpZ2h0IC8gYTRIZWlnaHQpIC8gMTAwO1xyXG4gICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgd2lkdGg6IDEwMCU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9JztcclxuICAgICAgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKXtcclxuICAgICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgnICsgem9vbSArICcpO30nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgY3NzUHJpbnQgPSAnPHN0eWxlPicgK1xyXG4gICAgICAnLmdkLXBhZ2UgeyBkaXNwbGF5OiBibG9jazsgcGFnZS1icmVhay1hZnRlcjphbHdheXM7IHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfScgK1xyXG4gICAgICAnIC5nZC1wYWdlOmxhc3QtY2hpbGQge3BhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87fScgKyBpbWFnZUE0QWRqdXN0ZWQ7XHJcbiAgICBjc3NQcmludCA9IGNzc1ByaW50ICsgJzwvc3R5bGU+JztcclxuXHJcbiAgICBjb25zdCB3aW5kb3dPYmplY3QgPSB3aW5kb3cub3BlbignJywgXCJQcmludFdpbmRvd1wiLCBcIndpZHRoPTc1MCxoZWlnaHQ9NjUwLHRvcD01MCxsZWZ0PTUwLHRvb2xiYXJzPXllcyxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzLHJlc2l6YWJsZT15ZXNcIik7XHJcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcclxuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKGNzc1ByaW50KTtcclxuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKHBhZ2VzSHRtbCk7XHJcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQuY2xvc2UoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcclxuICAgICAgd2luZG93T2JqZWN0LnByaW50KCk7XHJcbiAgICAgIHdpbmRvd09iamVjdC5jbG9zZSgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyUHJpbnRCbG9iKGZpbGU6IEJsb2IpIHtcclxuICAgIGNvbnN0IGlmcmFtZUlkID0gJ3ByaW50LXdpbmRvdyc7XHJcbiAgICBjb25zdCBvYmplY3RVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxyXG5cclxuICAgIC8vIFJlbW92ZSBwcmV2aW91cyBpZnJhbWUgaWYgZXhpc3RzXHJcbiAgICBsZXQgaWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSWQpXHJcbiAgICBpZiAoaWZyYW1lKSB7XHJcbiAgICAgIGlmcmFtZS5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgaWZyYW1lXHJcbiAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKVxyXG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTogaGlkZGVuOyBoZWlnaHQ6IDA7IHdpZHRoOiAwOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlcjogMCcpO1xyXG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBpZnJhbWVJZClcclxuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9iamVjdFVybClcclxuXHJcbiAgICAvLyBBcHBlbmQgdG8gdGhlIGRvY3VtZW50XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcblxyXG4gICAgLy8gV2FpdCBhbmQgcHJpbnRcclxuICAgIGNvbnN0IGlmcmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZnJhbWVJZCkgYXMgSUZyYW1lO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRvUHJpbnQoaWZyYW1lRWxlbWVudCksIDEwMDApOyAgXHJcbiAgfVxyXG5cclxuICBkb1ByaW50IChpZnJhbWU6IElGcmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZnJhbWUuZm9jdXMoKVxyXG4gICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdwcmludCcsIGZhbHNlKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnByaW50KClcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgLy8gSGlkZSBpZnJhbWVcclxuICAgICAgICBpZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICAgICAgaWZyYW1lLnN0eWxlLmxlZnQgPSAnLTFweCdcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==