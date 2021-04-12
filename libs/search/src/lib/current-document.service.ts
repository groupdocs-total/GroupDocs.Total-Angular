import { Injectable } from '@angular/core';
import { SearchConfigService } from './search-config.service';
import { HighlightRequest, SearchResultItemModel } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class CurrentDocumentService {
  documentId: string;
  documentName: string;
  displayDocument = false;

  constructor(
    private _searchService: SearchService,
    private _searchConfigService: SearchConfigService) {
    }

  setDocument(item: SearchResultItemModel) {
    this.documentId = item.documentId;
    this.documentName = item.name;
  }

  setVisible() {
    this.displayDocument = true;
  }

  close() {
    this.documentId = "";
    this.documentName = "";
    this.displayDocument = false;
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
