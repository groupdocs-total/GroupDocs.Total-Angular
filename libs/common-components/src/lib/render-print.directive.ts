import {Directive, Input} from '@angular/core';
import {PageModel} from "./file.service";
import {RenderPrintService} from "./render-print.service";

type IFrame = HTMLElement & {contentWindow: Window}

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
    let pagesHtml = '';

    for (const page of pages) {
      const data = page.data.startsWith('data:image') ? page.data : 'data:image/png;base64,' + page.data;
      pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
        '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="' + data + '" alt></image></div>' +
        '</div>';
    }

    this.openWindow(pagesHtml, pages[0].width, pages[0].height);
  }

  private openWindow(pagesHtml, width, height) {
    const a4Height = 842;
    const a4Width = 595;
    let imageA4Adjusted = '';
    if(width > a4Width && height > a4Height){
      const zoom = Math.round(height / a4Height) / 100;
      imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
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
    windowObject.document.close();
    setTimeout(() => {
      windowObject.focus();
      windowObject.print();
      windowObject.close();
    }, 100);
  }

  private renderPrintBlob(file: Blob) {
    const iframeId = 'print-window';
    const objectUrl = window.URL.createObjectURL(file)

    // Remove previous iframe if exists
    let iframe = document.getElementById(iframeId)
    if (iframe) {
      iframe.remove()
    }

    // Create new iframe
    iframe = document.createElement('iframe')
    iframe.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute; border: 0');
    iframe.setAttribute('id', iframeId)
    iframe.setAttribute('src', objectUrl)

    // Append to the document
    document.getElementsByTagName('body')[0].appendChild(iframe);

    // Wait and print
    const iframeElement = document.getElementById(iframeId) as IFrame;
    setTimeout(() => this.doPrint(iframeElement), 1000);  
  }

  doPrint (iframe: IFrame) {
    try {
        iframe.focus()
        iframe.contentWindow.document.execCommand('print', false)
    } catch (e) {
        iframe.contentWindow.print()
    } finally {
        // Hide iframe
        iframe.style.visibility = 'hidden'
        iframe.style.left = '-1px'
    }
  }

}
