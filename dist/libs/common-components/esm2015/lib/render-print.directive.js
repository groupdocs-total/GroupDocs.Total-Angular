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
            pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUsxRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQW9CLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUNwRCxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFrQjs7WUFDaEMsU0FBUyxHQUFHLEVBQUU7UUFFbEIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDeEIsU0FBUyxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CO2dCQUNuRSxvSEFBb0gsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQjtnQkFDekosUUFBUSxDQUFDO1NBQ1o7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7OztJQUVPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU07O2NBQ25DLFFBQVEsR0FBRyxHQUFHOztjQUNkLE9BQU8sR0FBRyxHQUFHOztZQUNmLGVBQWUsR0FBRyxFQUFFO1FBQ3hCLElBQUcsS0FBSyxHQUFHLE9BQU8sSUFBSSxNQUFNLEdBQUcsUUFBUSxFQUFDOztrQkFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUc7WUFDaEQsZUFBZSxHQUFHLHFEQUFxRCxDQUFDO1lBQ3hFLElBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7Z0JBQzNELGVBQWUsR0FBRyxrQ0FBa0MsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3JFO1NBQ0Y7O1lBQ0csUUFBUSxHQUFHLFNBQVM7WUFDdEIsaUZBQWlGO1lBQ2pGLGdEQUFnRCxHQUFHLGVBQWU7UUFDcEUsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7O2NBRTNCLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsMEZBQTBGLENBQUM7UUFDL0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLElBQVU7O2NBQzFCLE9BQU8sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQzs7Y0FDbkMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSwwRkFBMEYsQ0FBQztRQUNwSixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFKTyxrQkFBa0I7Ozt1QkFNdkIsS0FBSzs7OztJQUFOLHdDQUEyQjs7Ozs7SUFFZiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtSZW5kZXJQcmludFNlcnZpY2V9IGZyb20gXCIuL3JlbmRlci1wcmludC5zZXJ2aWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFJlbmRlclByaW50XSdcbn0pXG5leHBvcnQgY2xhc3MgUmVuZGVyUHJpbnREaXJlY3RpdmUge1xuICBASW5wdXQoKSBodG1sTW9kZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UpIHtcbiAgICBfcmVuZGVyU2VydmljZS5yZW5kZXJQcmludC5zdWJzY3JpYmUocGFnZXMgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJQcmludChwYWdlcyk7XG4gICAgfSk7XG4gICAgX3JlbmRlclNlcnZpY2UucmVuZGVyUHJpbnRCbG9iLnN1YnNjcmliZShmaWxlID0+IHtcbiAgICAgIHRoaXMucmVuZGVyUHJpbnRCbG9iKGZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmludChwYWdlczogUGFnZU1vZGVsW10pIHtcbiAgICBsZXQgcGFnZXNIdG1sID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcbiAgICAgIHBhZ2VzSHRtbCArPSAnPGRpdiBpZD1cImdkLXBhZ2UtJyArIHBhZ2UubnVtYmVyICsgJ1wiIGNsYXNzPVwiZ2QtcGFnZVwiPicgK1xuICAgICAgICAnPGRpdiBjbGFzcz1cImdkLXdyYXBwZXJcIj48aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50XCIgY2xhc3M9XCJnZC1wYWdlLWltYWdlXCIgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBwYWdlLmRhdGEgKyAnXCIgYWx0PjwvaW1hZ2U+PC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nO1xuICAgIH1cblxuICAgIHRoaXMub3BlbldpbmRvdyhwYWdlc0h0bWwsIHBhZ2VzWzBdLndpZHRoLCBwYWdlc1swXS5oZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuV2luZG93KHBhZ2VzSHRtbCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGE0SGVpZ2h0ID0gODQyO1xuICAgIGNvbnN0IGE0V2lkdGggPSA1OTU7XG4gICAgbGV0IGltYWdlQTRBZGp1c3RlZCA9ICcnO1xuICAgIGlmKHdpZHRoID4gYTRXaWR0aCAmJiBoZWlnaHQgPiBhNEhlaWdodCl7XG4gICAgICBjb25zdCB6b29tID0gTWF0aC5yb3VuZChoZWlnaHQgLyBhNEhlaWdodCkgLyAxMDA7XG4gICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgd2lkdGg6IDEwMCU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9JztcbiAgICAgIGlmKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSl7XG4gICAgICAgIGltYWdlQTRBZGp1c3RlZCA9ICcuZ2QtcGFnZSBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKCcgKyB6b29tICsgJyk7fSc7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBjc3NQcmludCA9ICc8c3R5bGU+JyArXG4gICAgICAnLmdkLXBhZ2UgeyBkaXNwbGF5OiBibG9jazsgcGFnZS1icmVhay1hZnRlcjphbHdheXM7IHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfScgK1xuICAgICAgJyAuZ2QtcGFnZTpsYXN0LWNoaWxkIHtwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO30nICsgaW1hZ2VBNEFkanVzdGVkO1xuICAgIGNzc1ByaW50ID0gY3NzUHJpbnQgKyAnPC9zdHlsZT4nO1xuXG4gICAgY29uc3Qgd2luZG93T2JqZWN0ID0gd2luZG93Lm9wZW4oJycsIFwiUHJpbnRXaW5kb3dcIiwgXCJ3aWR0aD03NTAsaGVpZ2h0PTY1MCx0b3A9NTAsbGVmdD01MCx0b29sYmFycz15ZXMsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcyxyZXNpemFibGU9eWVzXCIpO1xuICAgIHdpbmRvd09iamVjdC5mb2N1cygpO1xuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKGNzc1ByaW50KTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQud3JpdGVsbihwYWdlc0h0bWwpO1xuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC5jbG9zZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93T2JqZWN0LmZvY3VzKCk7XG4gICAgICB3aW5kb3dPYmplY3QucHJpbnQoKTtcbiAgICAgIHdpbmRvd09iamVjdC5jbG9zZSgpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW50QmxvYihmaWxlOiBCbG9iKSB7XG4gICAgY29uc3QgZmlsZVVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgY29uc3Qgd2luZG93T2JqZWN0ID0gd2luZG93Lm9wZW4oZmlsZVVSTCwgXCJQcmludFdpbmRvd1wiLCBcIndpZHRoPTc1MCxoZWlnaHQ9NjUwLHRvcD01MCxsZWZ0PTUwLHRvb2xiYXJzPXllcyxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzLHJlc2l6YWJsZT15ZXNcIik7XG4gICAgd2luZG93T2JqZWN0LmZvY3VzKCk7XG4gICAgd2luZG93T2JqZWN0LnByaW50KCk7XG4gICAgd2luZG93T2JqZWN0LmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==