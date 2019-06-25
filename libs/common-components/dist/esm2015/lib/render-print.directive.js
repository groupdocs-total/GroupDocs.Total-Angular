import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { RenderPrintService } from "./render-print.service";
let RenderPrintDirective = class RenderPrintDirective {
    constructor(_renderService) {
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe(pages => {
            this.renderPrint(pages);
        });
        _renderService.renderPrintBlob.subscribe(file => {
            this.renderPrintBlob(file);
        });
    }
    renderPrint(pages) {
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
    openWindow(pagesHtml, width, height) {
        const a4Height = 842;
        const a4Width = 595;
        let imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            const zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        let cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        const windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        //windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        // windowObject.close();
    }
    renderPrintBlob(file) {
        const fileURL = URL.createObjectURL(file);
        const windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], RenderPrintDirective.prototype, "htmlMode", void 0);
RenderPrintDirective = tslib_1.__decorate([
    Directive({
        selector: '[gdRenderPrint]'
    }),
    tslib_1.__metadata("design:paramtypes", [RenderPrintService])
], RenderPrintDirective);
export { RenderPrintDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUsxRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUcvQixZQUFvQixjQUFrQztRQUFsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFDcEQsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILGNBQWMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQWtCO1FBQ3BDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ3hCLFNBQVMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQjtvQkFDbkUsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRO29CQUNqRCxRQUFRLENBQUM7YUFDWjtTQUNGO2FBQU07WUFDTCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDeEIsU0FBUyxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CO29CQUNuRSxvSEFBb0gsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQjtvQkFDekosUUFBUSxDQUFDO2FBQ1o7U0FDRjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNyQixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUcsS0FBSyxHQUFHLE9BQU8sSUFBSSxNQUFNLEdBQUcsUUFBUSxFQUFDO1lBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNqRCxlQUFlLEdBQUcscURBQXFELENBQUM7WUFDeEUsSUFBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztnQkFDM0QsZUFBZSxHQUFHLGtDQUFrQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7YUFDckU7U0FDRjtRQUNELElBQUksUUFBUSxHQUFHLFNBQVM7WUFDdEIsaUZBQWlGO1lBQ2pGLGdEQUFnRCxHQUFHLGVBQWUsQ0FBQztRQUNyRSxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUVqQyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsMEZBQTBGLENBQUMsQ0FBQztRQUNoSixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsZ0NBQWdDO1FBQ2hDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsd0JBQXdCO0lBQ3pCLENBQUM7SUFFTyxlQUFlLENBQUMsSUFBVTtRQUNoQyxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSwwRkFBMEYsQ0FBQyxDQUFDO1FBQ3JKLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBO0FBOURVO0lBQVIsS0FBSyxFQUFFOztzREFBbUI7QUFEaEIsb0JBQW9CO0lBSGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7S0FDNUIsQ0FBQzs2Q0FJb0Msa0JBQWtCO0dBSDNDLG9CQUFvQixDQStEaEM7U0EvRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RSZW5kZXJQcmludF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlbmRlclByaW50RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaHRtbE1vZGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyU2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlKSB7XG4gICAgX3JlbmRlclNlcnZpY2UucmVuZGVyUHJpbnQuc3Vic2NyaWJlKHBhZ2VzID0+IHtcbiAgICAgIHRoaXMucmVuZGVyUHJpbnQocGFnZXMpO1xuICAgIH0pO1xuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50QmxvYi5zdWJzY3JpYmUoZmlsZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclByaW50QmxvYihmaWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpbnQocGFnZXM6IFBhZ2VNb2RlbFtdKSB7XG4gICAgbGV0IHBhZ2VzSHRtbCA9ICcnO1xuICAgIGlmICh0aGlzLmh0bWxNb2RlKSB7XG4gICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcbiAgICAgICAgcGFnZXNIdG1sICs9ICc8ZGl2IGlkPVwiZ2QtcGFnZS0nICsgcGFnZS5udW1iZXIgKyAnXCIgY2xhc3M9XCJnZC1wYWdlXCI+JyArXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJnZC13cmFwcGVyXCI+JyArIHBhZ2UuZGF0YSArICc8L2Rpdj4nICtcbiAgICAgICAgICAnPC9kaXY+JztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG4gICAgICAgIHBhZ2VzSHRtbCArPSAnPGRpdiBpZD1cImdkLXBhZ2UtJyArIHBhZ2UubnVtYmVyICsgJ1wiIGNsYXNzPVwiZ2QtcGFnZVwiPicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2Qtd3JhcHBlclwiPjxpbWFnZSBzdHlsZT1cIndpZHRoOiBpbmhlcml0ICFpbXBvcnRhbnRcIiBjbGFzcz1cImdkLXBhZ2UtaW1hZ2VcIiBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHBhZ2UuZGF0YSArICdcIiBhbHQ+PC9pbWFnZT48L2Rpdj4nICtcbiAgICAgICAgICAnPC9kaXY+JztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vcGVuV2luZG93KHBhZ2VzSHRtbCwgcGFnZXNbMF0ud2lkdGgsIHBhZ2VzWzBdLmhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5XaW5kb3cocGFnZXNIdG1sLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYTRIZWlnaHQgPSA4NDI7XG4gICAgY29uc3QgYTRXaWR0aCA9IDU5NTtcbiAgICBsZXQgaW1hZ2VBNEFkanVzdGVkID0gJyc7XG4gICAgaWYod2lkdGggPiBhNFdpZHRoICYmIGhlaWdodCA+IGE0SGVpZ2h0KXtcbiAgICAgIGNvbnN0IHpvb20gPSBNYXRoLnJvdW5kKGhlaWdodCAvIGE0SGVpZ2h0KSAvIDEwMDtcbiAgICAgIGltYWdlQTRBZGp1c3RlZCA9ICcuZ2QtcGFnZSBpbWcgeyB3aWR0aDogMTAwJTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO30nO1xuICAgICAgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKXtcbiAgICAgICAgaW1hZ2VBNEFkanVzdGVkID0gJy5nZC1wYWdlIGltZyB7IHRyYW5zZm9ybTogc2NhbGUoJyArIHpvb20gKyAnKTt9JztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNzc1ByaW50ID0gJzxzdHlsZT4nICtcbiAgICAgICcuZ2QtcGFnZSB7IGRpc3BsYXk6IGJsb2NrOyBwYWdlLWJyZWFrLWFmdGVyOmFsd2F5czsgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkOyB9JyArXG4gICAgICAnIC5nZC1wYWdlOmxhc3QtY2hpbGQge3BhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87fScgKyBpbWFnZUE0QWRqdXN0ZWQ7XG4gICAgY3NzUHJpbnQgPSBjc3NQcmludCArICc8L3N0eWxlPic7XG5cbiAgICBjb25zdCB3aW5kb3dPYmplY3QgPSB3aW5kb3cub3BlbignJywgXCJQcmludFdpbmRvd1wiLCBcIndpZHRoPTc1MCxoZWlnaHQ9NjUwLHRvcD01MCxsZWZ0PTUwLHRvb2xiYXJzPXllcyxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzLHJlc2l6YWJsZT15ZXNcIik7XG4gICAgd2luZG93T2JqZWN0LmZvY3VzKCk7XG4gICAgd2luZG93T2JqZWN0LmRvY3VtZW50LndyaXRlbG4oY3NzUHJpbnQpO1xuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKHBhZ2VzSHRtbCk7XG4gICAgLy93aW5kb3dPYmplY3QuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QucHJpbnQoKTtcbiAgIC8vIHdpbmRvd09iamVjdC5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcmludEJsb2IoZmlsZTogQmxvYikge1xuICAgIGNvbnN0IGZpbGVVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIGNvbnN0IHdpbmRvd09iamVjdCA9IHdpbmRvdy5vcGVuKGZpbGVVUkwsIFwiUHJpbnRXaW5kb3dcIiwgXCJ3aWR0aD03NTAsaGVpZ2h0PTY1MCx0b3A9NTAsbGVmdD01MCx0b29sYmFycz15ZXMsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcyxyZXNpemFibGU9eWVzXCIpO1xuICAgIHdpbmRvd09iamVjdC5mb2N1cygpO1xuICAgIHdpbmRvd09iamVjdC5wcmludCgpO1xuICAgIHdpbmRvd09iamVjdC5jbG9zZSgpO1xuICB9XG59XG4iXX0=