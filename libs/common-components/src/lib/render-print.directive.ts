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
        pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
          '<div class="gd-wrapper">' + page.data + '</div>' +
          '</div>';
      }
    } else {
      for (let page of pages) {
        pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
          '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
          '</div>';
      }
    }
    this.openWindow(pagesHtml, pages[0].width, pages[0].height);
  }

  private openWindow(pagesHtml, width, height) {
    const a4Height = 842;
    const a4Width = 595;
    var imageA4Adjusted = '';
    if(width > a4Width && height > a4Height){
      var zoom = (height > width) ? Math.round(height / a4Height) / 100 : Math.round(width / a4Width) / 100;
      imageA4Adjusted = '.gd-page img { zoom:' + zoom + '; margin: 0; padding: 0;}';
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
      }
    }
    var cssPrint = '<style>' +
      '.gd-page { width: 21cm; height: 29.7cm; display: block; page-break-after:always; page-break-inside: avoid; }' +
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
  }

  private renderPrintBlob(file: Blob) {
    var fileURL = URL.createObjectURL(file);
    var windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
    windowObject.focus();
    windowObject.print();
    windowObject.close();
  }
}
