import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { RenderPrintService } from "./render-print.service";
var RenderPrintDirective = /** @class */ (function () {
    function RenderPrintDirective(_renderService) {
        var _this = this;
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe(function (pages) {
            _this.renderPrint(pages);
        });
        _renderService.renderPrintBlob.subscribe(function (file) {
            _this.renderPrintBlob(file);
        });
    }
    RenderPrintDirective.prototype.renderPrint = function (pages) {
        var e_1, _a, e_2, _b;
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
    RenderPrintDirective.prototype.openWindow = function (pagesHtml, width, height) {
        var a4Height = 842;
        var a4Width = 595;
        var imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            var zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        var cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        var windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        //windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        // windowObject.close();
    };
    RenderPrintDirective.prototype.renderPrintBlob = function (file) {
        var fileURL = URL.createObjectURL(file);
        var windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
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
    return RenderPrintDirective;
}());
export { RenderPrintDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUsxRDtJQUdFLDhCQUFvQixjQUFrQztRQUF0RCxpQkFPQztRQVBtQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFDcEQsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ3hDLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxjQUFjLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywwQ0FBVyxHQUFuQixVQUFvQixLQUFrQjs7UUFDcEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7Z0JBQ2pCLEtBQW1CLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7b0JBQXJCLElBQU0sSUFBSSxrQkFBQTtvQkFDYixTQUFTLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0I7d0JBQ25FLDBCQUEwQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUTt3QkFDakQsUUFBUSxDQUFDO2lCQUNaOzs7Ozs7Ozs7U0FDRjthQUFNOztnQkFDTCxLQUFtQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFyQixJQUFNLElBQUksa0JBQUE7b0JBQ2IsU0FBUyxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CO3dCQUNuRSxvSEFBb0gsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQjt3QkFDekosUUFBUSxDQUFDO2lCQUNaOzs7Ozs7Ozs7U0FDRjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyx5Q0FBVSxHQUFsQixVQUFtQixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU07UUFDekMsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBRyxLQUFLLEdBQUcsT0FBTyxJQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUM7WUFDdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2pELGVBQWUsR0FBRyxxREFBcUQsQ0FBQztZQUN4RSxJQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO2dCQUMzRCxlQUFlLEdBQUcsa0NBQWtDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNyRTtTQUNGO1FBQ0QsSUFBSSxRQUFRLEdBQUcsU0FBUztZQUN0QixpRkFBaUY7WUFDakYsZ0RBQWdELEdBQUcsZUFBZSxDQUFDO1FBQ3JFLFFBQVEsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBRWpDLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSwwRkFBMEYsQ0FBQyxDQUFDO1FBQ2hKLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxnQ0FBZ0M7UUFDaEMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0Qix3QkFBd0I7SUFDekIsQ0FBQztJQUVPLDhDQUFlLEdBQXZCLFVBQXdCLElBQVU7UUFDaEMsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsMEZBQTBGLENBQUMsQ0FBQztRQUNySixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBN0RRO1FBQVIsS0FBSyxFQUFFOzswREFBbUI7SUFEaEIsb0JBQW9CO1FBSGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQztpREFJb0Msa0JBQWtCO09BSDNDLG9CQUFvQixDQStEaEM7SUFBRCwyQkFBQztDQUFBLEFBL0RELElBK0RDO1NBL0RZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VNb2RlbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbmRlclByaW50U2VydmljZX0gZnJvbSBcIi4vcmVuZGVyLXByaW50LnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkUmVuZGVyUHJpbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZW5kZXJQcmludERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGh0bWxNb2RlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlclNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSkge1xuICAgIF9yZW5kZXJTZXJ2aWNlLnJlbmRlclByaW50LnN1YnNjcmliZShwYWdlcyA9PiB7XG4gICAgICB0aGlzLnJlbmRlclByaW50KHBhZ2VzKTtcbiAgICB9KTtcbiAgICBfcmVuZGVyU2VydmljZS5yZW5kZXJQcmludEJsb2Iuc3Vic2NyaWJlKGZpbGUgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJQcmludEJsb2IoZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByaW50KHBhZ2VzOiBQYWdlTW9kZWxbXSkge1xuICAgIGxldCBwYWdlc0h0bWwgPSAnJztcbiAgICBpZiAodGhpcy5odG1sTW9kZSkge1xuICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG4gICAgICAgIHBhZ2VzSHRtbCArPSAnPGRpdiBpZD1cImdkLXBhZ2UtJyArIHBhZ2UubnVtYmVyICsgJ1wiIGNsYXNzPVwiZ2QtcGFnZVwiPicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2Qtd3JhcHBlclwiPicgKyBwYWdlLmRhdGEgKyAnPC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2Pic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuICAgICAgICBwYWdlc0h0bWwgKz0gJzxkaXYgaWQ9XCJnZC1wYWdlLScgKyBwYWdlLm51bWJlciArICdcIiBjbGFzcz1cImdkLXBhZ2VcIj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImdkLXdyYXBwZXJcIj48aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50XCIgY2xhc3M9XCJnZC1wYWdlLWltYWdlXCIgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBwYWdlLmRhdGEgKyAnXCIgYWx0PjwvaW1hZ2U+PC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2Pic7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub3BlbldpbmRvdyhwYWdlc0h0bWwsIHBhZ2VzWzBdLndpZHRoLCBwYWdlc1swXS5oZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuV2luZG93KHBhZ2VzSHRtbCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGE0SGVpZ2h0ID0gODQyO1xuICAgIGNvbnN0IGE0V2lkdGggPSA1OTU7XG4gICAgbGV0IGltYWdlQTRBZGp1c3RlZCA9ICcnO1xuICAgIGlmKHdpZHRoID4gYTRXaWR0aCAmJiBoZWlnaHQgPiBhNEhlaWdodCl7XG4gICAgICBjb25zdCB6b29tID0gTWF0aC5yb3VuZChoZWlnaHQgLyBhNEhlaWdodCkgLyAxMDA7XG4gICAgICBpbWFnZUE0QWRqdXN0ZWQgPSAnLmdkLXBhZ2UgaW1nIHsgd2lkdGg6IDEwMCU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9JztcbiAgICAgIGlmKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSl7XG4gICAgICAgIGltYWdlQTRBZGp1c3RlZCA9ICcuZ2QtcGFnZSBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKCcgKyB6b29tICsgJyk7fSc7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBjc3NQcmludCA9ICc8c3R5bGU+JyArXG4gICAgICAnLmdkLXBhZ2UgeyBkaXNwbGF5OiBibG9jazsgcGFnZS1icmVhay1hZnRlcjphbHdheXM7IHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfScgK1xuICAgICAgJyAuZ2QtcGFnZTpsYXN0LWNoaWxkIHtwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO30nICsgaW1hZ2VBNEFkanVzdGVkO1xuICAgIGNzc1ByaW50ID0gY3NzUHJpbnQgKyAnPC9zdHlsZT4nO1xuXG4gICAgY29uc3Qgd2luZG93T2JqZWN0ID0gd2luZG93Lm9wZW4oJycsIFwiUHJpbnRXaW5kb3dcIiwgXCJ3aWR0aD03NTAsaGVpZ2h0PTY1MCx0b3A9NTAsbGVmdD01MCx0b29sYmFycz15ZXMsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcyxyZXNpemFibGU9eWVzXCIpO1xuICAgIHdpbmRvd09iamVjdC5mb2N1cygpO1xuICAgIHdpbmRvd09iamVjdC5kb2N1bWVudC53cml0ZWxuKGNzc1ByaW50KTtcbiAgICB3aW5kb3dPYmplY3QuZG9jdW1lbnQud3JpdGVsbihwYWdlc0h0bWwpO1xuICAgIC8vd2luZG93T2JqZWN0LmRvY3VtZW50LmNsb3NlKCk7XG4gICAgd2luZG93T2JqZWN0LmZvY3VzKCk7XG4gICAgd2luZG93T2JqZWN0LnByaW50KCk7XG4gICAvLyB3aW5kb3dPYmplY3QuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyUHJpbnRCbG9iKGZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCBmaWxlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBjb25zdCB3aW5kb3dPYmplY3QgPSB3aW5kb3cub3BlbihmaWxlVVJMLCBcIlByaW50V2luZG93XCIsIFwid2lkdGg9NzUwLGhlaWdodD02NTAsdG9wPTUwLGxlZnQ9NTAsdG9vbGJhcnM9eWVzLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMscmVzaXphYmxlPXllc1wiKTtcbiAgICB3aW5kb3dPYmplY3QuZm9jdXMoKTtcbiAgICB3aW5kb3dPYmplY3QucHJpbnQoKTtcbiAgICB3aW5kb3dPYmplY3QuY2xvc2UoKTtcbiAgfVxufVxuIl19