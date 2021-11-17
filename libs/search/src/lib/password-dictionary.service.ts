import { Injectable } from '@angular/core';
import { DocumentPasswordsReadResponse, DocumentPasswordsUpdateRequest, KeyPasswordPair } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class PasswordDictionaryService {
  passwords: KeyPasswordPair[];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getDocumentPasswordDictionary().subscribe((response: DocumentPasswordsReadResponse) => {
      this.passwords = response.passwords;
      this.sort();
    });
  }

  sort() {
    this.passwords.sort((a, b) => this.compare(a.key, b.key));
  }

  private compare(a: string, b:string) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  save() {
    const request = new DocumentPasswordsUpdateRequest();
    request.passwords = this.passwords;

    this._searchService.setDocumentPasswordDictionary(request).subscribe(() => {
      console.log("Document password dictionary updated");
    });
  }
}
