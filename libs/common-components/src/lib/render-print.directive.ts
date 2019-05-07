import {Directive, Input} from '@angular/core';
import {PageModel} from "./file.service";
import {RenderPrintService} from "./render-print.service";

@Directive({
  selector: '[gdRenderPrint]'
})
export class RenderPrintDirective {
  @Input() htmlMode: boolean;

  constructor(private _renderService: RenderPrintService) {
    _renderService.renderPrint.subscribe(pages => {
      this.renderPrint(pages);
    });
    _renderService.renderPrintBlob.subscribe(file => {
      this.renderPrintBlob(file);
    });
  }

  private renderPrint(pages: PageModel[]) {
    var pagesHtml = '';
    if (this.htmlMode) {
      for (let page of pages) {
        pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page" style="min-width: ' +
          page.width + 'px; min-height: ' + page.height + 'px;">' +
          '<div class="gd-wrapper">' + page.data + '</div>' +
          '</div>';
      }
    } else {
      for (let page of pages) {
        pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page" style="min-width: ' +
          page.width + 'px; min-height: ' + page.height + 'px;">' +
          '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
          '</div>';
      }
    }
    this.openWindow(pagesHtml);
  }

  private openWindow(pagesHtml) {
    var cssPrint = '<style>' +
      '.gd-page {height: 100% !important; page-break-after:always; page-break-inside: avoid; } .gd-page:last-child {page-break-after: auto;}';
    cssPrint = cssPrint + '</style>';

    var windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
    windowObject.focus();
    windowObject.document.writeln(cssPrint);
    windowObject.document.writeln(pagesHtml);
    windowObject.document.close();
    windowObject.focus();
    windowObject.print();
    windowObject.close();
  }

  private renderPrintBlob(file: Blob) {
    var fileURL = URL.createObjectURL(file);
    var windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
    windowObject.focus();
    windowObject.print();
    windowObject.close();
  }
}
