import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FoundTermNavigationService } from './found-term-navigation.service';
import { SearchConfigService } from './search-config.service';
import { DocumentPage, GetDocumentPageRequest, GetDocumentPageResponse, SearchResultItemModel } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class DocumentViewService {
  displayDocument = false;
  documentName = "";
  pages: DocumentPage[] = [];

  constructor(private _searchService : SearchService,
              private _searchConfigService: SearchConfigService,
              private _foundTermNavigationService: FoundTermNavigationService,
              private _sanitizer: DomSanitizer) {
  }

  open(item: SearchResultItemModel) {
    this.documentName = item.name;
    this.pages.length = 0;
    this.loadPage(item, 1);
    this.displayDocument = true;
  }

  close() {
    this.displayDocument = false;
    this.pages.length = 0;
    this.documentName = "";
  }

  private loadPage(item: SearchResultItemModel, pageNumber : number) {
    const request = new GetDocumentPageRequest();
    request.FolderName = this._searchConfigService.folderName;
    request.pageNumber = pageNumber;
    request.fileName = item.guid;
    request.terms = item.terms;
    request.caseSensitive = item.isCaseSensitive;

    this._searchService.getDocumentPage(request).subscribe((response: GetDocumentPageResponse) => {
      if (response.pageNumber === pageNumber) {
        const page = new DocumentPage();
        page.Width = response.width;
        page.Height = response.height;
        page.Data = this._sanitizer.bypassSecurityTrustHtml(response.data);

        setTimeout(() => {
          this._foundTermNavigationService.updateTotal();
          this._foundTermNavigationService.navigateFirst();
        }, 100);

        this.pages[response.pageNumber - 1] = page;

        if (response.pageNumber < response.pageCount) {
          this.loadPage(item, response.pageNumber + 1);
        }
      }
    });
  }
}
