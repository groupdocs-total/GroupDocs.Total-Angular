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
        if (this.htmlMode) {
            for (const page of pages) {
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper">' + page.data + '</div>' +
                    '</div>';
            }
        }
        else {
            for (const page of pages) {
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
                    '</div>';
            }
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
        //windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        // windowObject.close();
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    renderPrintBlob(file) {
        /** @type {?} */
        const fileURL = URL.createObjectURL(file);
        /** @type {?} */
        const windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUsxRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUNwRCxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFrQjs7WUFDaEMsU0FBUyxHQUFHLEVBQUU7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN4QixTQUFTLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0I7b0JBQ25FLDBCQUEwQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUTtvQkFDakQsUUFBUSxDQUFDO2FBQ1o7U0FDRjthQUFNO1lBQ0wsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ3hCLFNBQVMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQjtvQkFDbkUsb0hBQW9ILEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0I7b0JBQ3pKLFFBQVEsQ0FBQzthQUNaO1NBQ0Y7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7OztJQUVPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU07O2NBQ25DLFFBQVEsR0FBRyxHQUFHOztjQUNkLE9BQU8sR0FBRyxHQUFHOztZQUNmLGVBQWUsR0FBRyxFQUFFO1FBQ3hCLElBQUcsS0FBSyxHQUFHLE9BQU8sSUFBSSxNQUFNLEdBQUcsUUFBUSxFQUFDOztrQkFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUc7WUFDaEQsZUFBZSxHQUFHLHFEQUFxRCxDQUFDO1lBQ3hFLElBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7Z0JBQzNELGVBQWUsR0FBRyxrQ0FBa0MsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3JFO1NBQ0Y7O1lBQ0csUUFBUSxHQUFHLFNBQVM7WUFDdEIsaUZBQWlGO1lBQ2pGLGdEQUFnRCxHQUFHLGVBQWU7UUFDcEUsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7O2NBRTNCLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsMEZBQTBGLENBQUM7UUFDL0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLGdDQUFnQztRQUNoQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLHdCQUF3QjtJQUN6QixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsSUFBVTs7Y0FDMUIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDOztjQUNuQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLDBGQUEwRixDQUFDO1FBQ3BKLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQUpPLGtCQUFrQjs7O3VCQU12QixLQUFLOzs7O0lBQU4sd0NBQTJCOzs7OztJQUVmLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VNb2RlbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbmRlclByaW50U2VydmljZX0gZnJvbSBcIi4vcmVuZGVyLXByaW50LnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkUmVuZGVyUHJpbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZW5kZXJQcmludERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGh0bWxNb2RlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlclNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSkge1xuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50LnN1YnNjcmliZShwYWdlcyA9PiB7XG4gICAgICB0aGlzLnJlbmRlclByaW50KHBhZ2VzKTtcbiAgICB9KTtcbiAgICBfcmVuZGVyU2VydmljZS5yZW5kZXJQcmludEJsb2Iuc3Vic2NyaWJlKGZpbGUgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJQcmludEJsb2IoZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW50KHBhZ2VzOiBQYWdlTW9kZWxbXSkge1xuICAgIGxldCBwYWdlc0h0bWwgPSAnJztcbiAgICBpZiAodGhpcy5odG1sTW9kZSkge1xuICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG4gICAgICAgIHBhZ2VzSHRtbCArPSAnPGRpdiBpZD1cImdkLXBhZ2UtJyArIHBhZ2UubnVtYmVyICsgJ1wiIGNsYXNzPVwiZ2QtcGFnZVwiPicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2Qtd3JhcHBlclwiPicgKyBwYWdlLmRhdGEgKyAnPC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2Pic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuICAgICAgICBwYWdlc0h0bWwgKz0gJzxkaXYgaWQ9XCJnZC1wYWdlLScgKyBwYWdlLm51bWJlciArICdcIiBjbGFzcz1cImdkLXBhZ2VcIj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImdkLXdyYXBwZXJcIj48aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50XCIgY2xhc3M9XCJnZC1wYWdlLWltYWdlXCIgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBwYWdlLmRhdGEgKyAnXCIgYWx0PjwvaW1hZ2U+PC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2Pic7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub3BlbldpbmRvdyhwYWdlc0h0bWwsIHBhZ2VzWzBdLndpZHRoLCBwYWdlc1swXS5oZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuV2luZG93KHBhZ2VzSHRtbCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGE0SGVpZ2h0ID0gODQyO1xuICAgIGNvbnN0IGE0V2lkdGggPSA1OTU7XG4gICAgbGV0IGltYWdlQTRBZGp1c3RlZCA9ICcnO1xuICAgIGlmKHdpZHRoID4gYTRXaWR0aCAmJiBoZWlnaHQgPiBhNEhlaWdodCl7XG4gICAgICBjb25zdCB6b29tID0gTWF0aC5yb3VuZChoZWlnaHQgLyBhNEhlaWdodCkgLyAxMDA7XG4gICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgd2lkdGg6IDEwMCU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9JztcbiAgICAgIGlmKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSl7XG4gICAgICAgIGltYWdlQTRBZGp1c3RlZCA9ICcuZ2QtcGFnZSBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKCcgKyB6b29tICsgJyk7fSc7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBjc3NQcmludCA9ICc8c3R5bGU+JyArXG4gICAgICAnLmdkLXBhZ2UgeyBkaXNwbGF5OiBibG9jazsgcGFnZS1icmVhay1hZnRlcjphbHdheXM7IHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfScgK1xuICAgICAgJyAuZ2QtcGFnZTpsYXN0LWNoaWxkIHtwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO30nICsgaW1hZ2VBNEFkanVzdGVkO1xuICAgIGNzc1ByaW50ID0gY3NzUHJpbnQgKyAnPC9zdHlsZT4nO1xuXG4gICAgY29uc3Qgd2luZG93T2JqZWN0ID0gd2luZG93Lm9wZW4oJycsIFwiUHJpbnRXaW5kb3dcIiwgXCJ3aWR0aD03NTAsaGVpZ2h0PTY1MCx0b3A9NTAsbGVmdD01MCx0b29sYmFycz15ZXMsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcyxyZXNpemFibGU9eWVzXCIpO1xuICAgIHdpbmRvd09iamVjdC5mb2N1cygpO1xuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKGNzc1ByaW50KTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQud3JpdGVsbihwYWdlc0h0bWwpO1xuICAgIC8vd2luZG93T2JqZWN0LmRvY3VtZW50LmNsb3NlKCk7XG4gICAgd2luZG93T2JqZWN0LmZvY3VzKCk7XG4gICAgd2luZG93T2JqZWN0LnByaW50KCk7XG4gICAvLyB3aW5kb3dPYmplY3QuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpbnRCbG9iKGZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCBmaWxlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBjb25zdCB3aW5kb3dPYmplY3QgPSB3aW5kb3cub3BlbihmaWxlVVJMLCBcIlByaW50V2luZG93XCIsIFwid2lkdGg9NzUwLGhlaWdodD02NTAsdG9wPTUwLGxlZnQ9NTAsdG9vbGJhcnM9eWVzLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMscmVzaXphYmxlPXllc1wiKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QucHJpbnQoKTtcbiAgICB3aW5kb3dPYmplY3QuY2xvc2UoKTtcbiAgfVxufVxuIl19