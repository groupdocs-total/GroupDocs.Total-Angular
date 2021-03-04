import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FoundTermNavigationService } from './found-term-navigation.service';
import { SearchConfigService } from './search-config.service';
import { HighlightRequest, SearchResultItemModel } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class HighlightDocumentService{
  displayDocument = false;
  documentId: string;
  documentName: string;
  documentBody: SafeHtml;

  constructor(private _searchService: SearchService,
              private _searchConfigService: SearchConfigService,
              private _foundTermNavigationService: FoundTermNavigationService,
              private _sanitizer: DomSanitizer) {
  }

  open(item: SearchResultItemModel) {
    const request = new HighlightRequest();
    request.FolderName = this._searchConfigService.folderName;
    request.FoundDocumentId = item.documentId;
    this.documentId = item.documentId;
    this.documentName = item.name;
    this.documentBody = "";
    this._searchService.highlight(request).subscribe(html => {
      this.documentBody = this._sanitizer.bypassSecurityTrustHtml(html);
      setTimeout(() => {
        this._foundTermNavigationService.updateTotal();
        this._foundTermNavigationService.navigateFirst();
      }, 100);
    });
    this.displayDocument = true;
  }

  close() {
    this.displayDocument = false;
    this.documentId = "";
    this.documentName = "";
    this.documentBody = "";
  }

  downloadSourceFile() {
    const request = new HighlightRequest();
    request.FolderName = this._searchConfigService.folderName;
    request.FoundDocumentId = this.documentId;
    this._searchService.downloadSourceFile(request).subscribe((response: any) => {
      const dataType = response.type;
      const binaryData = [];
      binaryData.push(response);
      const url = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      //window.open(url, '_blank');

      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      downloadLink.setAttribute('download', this.documentName);
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
  }

  downloadExtractedText() {
    const request = new HighlightRequest();
    request.FolderName = this._searchConfigService.folderName;
    request.FoundDocumentId = this.documentId;
    this._searchService.downloadExtractedText(request).subscribe((response: any) => {
      const dataType = response.type;
      const binaryData = [];
      binaryData.push(response);
      const url = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      //window.open(url, '_blank');

      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      downloadLink.setAttribute('download', this.documentName + ".html");
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
  }  
}
