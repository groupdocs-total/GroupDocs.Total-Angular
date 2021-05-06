import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { CurrentDocumentService } from './current-document.service';
import { FoundTermNavigationService } from './found-term-navigation.service';
import { SearchConfigService } from './search-config.service';
import { GetDocumentPageRequest, GetDocumentPageResponse, PrepareDocumentRequest, PrepareDocumentResponse, SearchApi, SearchResultItemModel } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class DocumentViewService {
  isPreparing = false;
  visible = false;
  documentName = "";
  pages: SafeHtml[] = [];
  private initialized = false;
  request: GetDocumentPageRequest;
  prepareRequest: PrepareDocumentRequest;

  constructor(private _searchService : SearchService,
              private _currentDocumentService: CurrentDocumentService,
              private _searchConfigService: SearchConfigService,
              private _foundTermNavigationService: FoundTermNavigationService,
              private _loadingMaskService: LoadingMaskService,
              private _sanitizer: DomSanitizer) {
    _loadingMaskService['stopList'].push(SearchApi.PREPARE_DOCUMENT);
    _loadingMaskService['stopList'].push(SearchApi.GET_DOCUMENT_PAGE);
  }

  open(item: SearchResultItemModel) {
    this.documentName = item.name;
    if (item.formatFamily !== "presentation") {
      this._foundTermNavigationService.enable();
    }
    this.pages.length = 0;
    this.prepare(item);
    this._currentDocumentService.setDocument(item);
    this._currentDocumentService.setVisible();
    this.visible = true;
    this.isPreparing = true;
  }

  close() {
    this.request = null;
    this._foundTermNavigationService.disable();
    this.visible = false;
    this.isPreparing = false;
    this._currentDocumentService.close();
    this.pages.length = 0;
    this.documentName = "";
    this.initialized = false;
  }

  private prepare(item: SearchResultItemModel) {
    this.prepareRequest = new PrepareDocumentRequest();
    this.prepareRequest.FolderName = this._searchConfigService.folderName;
    this.prepareRequest.fileName = item.guid;

    this._searchService.prepareDocument(this.prepareRequest).subscribe((response: PrepareDocumentResponse) => {
      if (response.fileName == this.prepareRequest.fileName) {
        if (response.isPrepared) {
          this.isPreparing = false;
          this.loadPage(item, 1);
        }
        else {
          setTimeout(() => {
            this.prepare(item);
          }, 1000);
        }
      }
    });
  }

  private loadPage(item: SearchResultItemModel, pageNumber : number) {
    this.request = new GetDocumentPageRequest();
    this.request.FolderName = this._searchConfigService.folderName;
    this.request.pageNumber = pageNumber;
    this.request.fileName = item.guid;
    this.request.terms = item.terms;
    this.request.termSequences = item.termSequences;
    this.request.caseSensitive = item.isCaseSensitive;

    this._searchService.getDocumentPage(this.request).subscribe((response: GetDocumentPageResponse) => {
      if (response.pageNumber === pageNumber) {
        if (this.pages.length !== response.pageCount) {
          this.pages.length = response.pageCount;
        }
        const page = this._sanitizer.bypassSecurityTrustHtml(response.data);

        setTimeout(() => {
          this._foundTermNavigationService.updateTotal();
          if (!this.initialized) {
            this._foundTermNavigationService.navigateFirst();
            this.initialized = true;
          }
        }, 100);

        this.pages[response.pageNumber - 1] = page;

        if (this.request != null &&
          response.fileName === this.request.fileName &&
          response.pageNumber === this.request.pageNumber &&
          response.pageNumber < response.pageCount) {
          this.loadPage(item, response.pageNumber + 1);
        }
      }
    });
  }
}
