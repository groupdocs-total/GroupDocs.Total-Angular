import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { FoundTermNavigationService } from './found-term-navigation.service';
import { SearchConfigService } from './search-config.service';
import { GetDocumentPageRequest, GetDocumentPageResponse, SearchApi, SearchResultItemModel } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class DocumentViewService {
  displayDocument = false;
  documentName = "";
  pages: SafeHtml[] = [];

  constructor(private _searchService : SearchService,
              private _searchConfigService: SearchConfigService,
              private _foundTermNavigationService: FoundTermNavigationService,
              private _loadingMaskService: LoadingMaskService,
              private _sanitizer: DomSanitizer) {
    _loadingMaskService['stopList'].push(SearchApi.GET_DOCUMENT_PAGE);
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
        if (this.pages.length !== response.pageCount) {
          this.pages.length = response.pageCount;
        }
        const page = this._sanitizer.bypassSecurityTrustHtml(response.data);

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
