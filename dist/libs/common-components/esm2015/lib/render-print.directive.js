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
        windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        windowObject.close();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUsxRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUNwRCxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFrQjs7WUFDaEMsU0FBUyxHQUFHLEVBQUU7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN4QixTQUFTLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0I7b0JBQ25FLDBCQUEwQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUTtvQkFDakQsUUFBUSxDQUFDO2FBQ1o7U0FDRjthQUFNO1lBQ0wsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ3hCLFNBQVMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQjtvQkFDbkUsb0hBQW9ILEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0I7b0JBQ3pKLFFBQVEsQ0FBQzthQUNaO1NBQ0Y7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7OztJQUVPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU07O2NBQ25DLFFBQVEsR0FBRyxHQUFHOztjQUNkLE9BQU8sR0FBRyxHQUFHOztZQUNmLGVBQWUsR0FBRyxFQUFFO1FBQ3hCLElBQUcsS0FBSyxHQUFHLE9BQU8sSUFBSSxNQUFNLEdBQUcsUUFBUSxFQUFDOztrQkFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUc7WUFDaEQsZUFBZSxHQUFHLHFEQUFxRCxDQUFDO1lBQ3hFLElBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7Z0JBQzNELGVBQWUsR0FBRyxrQ0FBa0MsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3JFO1NBQ0Y7O1lBQ0csUUFBUSxHQUFHLFNBQVM7WUFDdEIsaUZBQWlGO1lBQ2pGLGdEQUFnRCxHQUFHLGVBQWU7UUFDcEUsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7O2NBRTNCLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsMEZBQTBGLENBQUM7UUFDL0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLElBQVU7O2NBQzFCLE9BQU8sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQzs7Y0FDbkMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSwwRkFBMEYsQ0FBQztRQUNwSixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFKTyxrQkFBa0I7Ozt1QkFNdkIsS0FBSzs7OztJQUFOLHdDQUEyQjs7Ozs7SUFFZiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtSZW5kZXJQcmludFNlcnZpY2V9IGZyb20gXCIuL3JlbmRlci1wcmludC5zZXJ2aWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFJlbmRlclByaW50XSdcbn0pXG5leHBvcnQgY2xhc3MgUmVuZGVyUHJpbnREaXJlY3RpdmUge1xuICBASW5wdXQoKSBodG1sTW9kZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UpIHtcbiAgICBfcmVuZGVyU2VydmljZS5yZW5kZXJQcmludC5zdWJzY3JpYmUocGFnZXMgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJQcmludChwYWdlcyk7XG4gICAgfSk7XG4gICAgX3JlbmRlclNlcnZpY2UucmVuZGVyUHJpbnRCbG9iLnN1YnNjcmliZShmaWxlID0+IHtcbiAgICAgIHRoaXMucmVuZGVyUHJpbnRCbG9iKGZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmludChwYWdlczogUGFnZU1vZGVsW10pIHtcbiAgICBsZXQgcGFnZXNIdG1sID0gJyc7XG4gICAgaWYgKHRoaXMuaHRtbE1vZGUpIHtcbiAgICAgIGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuICAgICAgICBwYWdlc0h0bWwgKz0gJzxkaXYgaWQ9XCJnZC1wYWdlLScgKyBwYWdlLm51bWJlciArICdcIiBjbGFzcz1cImdkLXBhZ2VcIj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImdkLXdyYXBwZXJcIj4nICsgcGFnZS5kYXRhICsgJzwvZGl2PicgK1xuICAgICAgICAgICc8L2Rpdj4nO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcbiAgICAgICAgcGFnZXNIdG1sICs9ICc8ZGl2IGlkPVwiZ2QtcGFnZS0nICsgcGFnZS5udW1iZXIgKyAnXCIgY2xhc3M9XCJnZC1wYWdlXCI+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJnZC13cmFwcGVyXCI+PGltYWdlIHN0eWxlPVwid2lkdGg6IGluaGVyaXQgIWltcG9ydGFudFwiIGNsYXNzPVwiZ2QtcGFnZS1pbWFnZVwiIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcGFnZS5kYXRhICsgJ1wiIGFsdD48L2ltYWdlPjwvZGl2PicgK1xuICAgICAgICAgICc8L2Rpdj4nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9wZW5XaW5kb3cocGFnZXNIdG1sLCBwYWdlc1swXS53aWR0aCwgcGFnZXNbMF0uaGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbldpbmRvdyhwYWdlc0h0bWwsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBhNEhlaWdodCA9IDg0MjtcbiAgICBjb25zdCBhNFdpZHRoID0gNTk1O1xuICAgIGxldCBpbWFnZUE0QWRqdXN0ZWQgPSAnJztcbiAgICBpZih3aWR0aCA+IGE0V2lkdGggJiYgaGVpZ2h0ID4gYTRIZWlnaHQpe1xuICAgICAgY29uc3Qgem9vbSA9IE1hdGgucm91bmQoaGVpZ2h0IC8gYTRIZWlnaHQpIC8gMTAwO1xuICAgICAgaW1hZ2VBNEFkanVzdGVkID0gJy5nZC1wYWdlIGltZyB7IHdpZHRoOiAxMDAlOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7fSc7XG4gICAgICBpZihuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpe1xuICAgICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgnICsgem9vbSArICcpO30nO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgY3NzUHJpbnQgPSAnPHN0eWxlPicgK1xuICAgICAgJy5nZC1wYWdlIHsgZGlzcGxheTogYmxvY2s7IHBhZ2UtYnJlYWstYWZ0ZXI6YWx3YXlzOyBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7IH0nICtcbiAgICAgICcgLmdkLXBhZ2U6bGFzdC1jaGlsZCB7cGFnZS1icmVhay1hZnRlcjogYXV0bzt9JyArIGltYWdlQTRBZGp1c3RlZDtcbiAgICBjc3NQcmludCA9IGNzc1ByaW50ICsgJzwvc3R5bGU+JztcblxuICAgIGNvbnN0IHdpbmRvd09iamVjdCA9IHdpbmRvdy5vcGVuKCcnLCBcIlByaW50V2luZG93XCIsIFwid2lkdGg9NzUwLGhlaWdodD02NTAsdG9wPTUwLGxlZnQ9NTAsdG9vbGJhcnM9eWVzLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMscmVzaXphYmxlPXllc1wiKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQud3JpdGVsbihjc3NQcmludCk7XG4gICAgd2luZG93T2JqZWN0LmRvY3VtZW50LndyaXRlbG4ocGFnZXNIdG1sKTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QucHJpbnQoKTtcbiAgICB3aW5kb3dPYmplY3QuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpbnRCbG9iKGZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCBmaWxlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBjb25zdCB3aW5kb3dPYmplY3QgPSB3aW5kb3cub3BlbihmaWxlVVJMLCBcIlByaW50V2luZG93XCIsIFwid2lkdGg9NzUwLGhlaWdodD02NTAsdG9wPTUwLGxlZnQ9NTAsdG9vbGJhcnM9eWVzLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMscmVzaXphYmxlPXllc1wiKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QucHJpbnQoKTtcbiAgICB3aW5kb3dPYmplY3QuY2xvc2UoKTtcbiAgfVxufVxuIl19