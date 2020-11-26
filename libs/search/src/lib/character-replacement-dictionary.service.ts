import { Injectable } from '@angular/core';
import { CharacterReplacement, CharacterReplacementsReadResponse, CharacterReplacementsUpdateRequest } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class CharacterReplacementDictionaryService {
  totalCount = 65536;
  longStep = 16;
  replacements: CharacterReplacement[];
  pageCapacity = 256;
  pageCount = 256;
  pageIndex = 0;
  page: CharacterReplacement[];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getCharacterReplacementDictionary().subscribe((response: CharacterReplacementsReadResponse) => {
      this.replacements = new Array(this.totalCount);
      for (let cId = 0; cId < response.Replacements.length; cId++) {
        const rId = response.Replacements[cId];
        const cr = new CharacterReplacement();
        cr.CharacterId = cId;
        cr.Character = String.fromCharCode(cId);
        cr.CharacterCode = cId.toString(16).toUpperCase().padStart(4, "0");
        cr.ReplacementId = rId;
        cr.Replacement = String.fromCharCode(rId);
        cr.ReplacementCode = rId.toString(16).toUpperCase().padStart(4, "0");
        this.replacements[cId] = cr;
      }

      this.pageIndex = 0;

      // Fill the first page
      if (!this.page) {
        this.page = new Array(this.pageCapacity);
      }
      this.populatePage();
    });
  }

  save() {
    const request = new CharacterReplacementsUpdateRequest();
    request.Replacements = new Array(this.totalCount);
    for (let i = 0; i < this.replacements.length; i++) {
      request.Replacements[i] = this.replacements[i].ReplacementId;
    }

    this._searchService.setCharacterReplacementDictionary(request).subscribe(() => {
      console.log("Character replacement dictionary updated")
    });
  }

  firstPage() {
    this.pageIndex = 0;
    this.populatePage();
  }

  lastPage() {
    this.pageIndex = this.pageCount - 1;
    this.populatePage();
  }

  nextPage() {
    if (this.pageIndex < this.pageCount - 1) {
      this.pageIndex++;
      this.populatePage();
    }
  }

  previousPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.populatePage();
    }
  }

  forward() {
    let newIndex = this.pageIndex + this.longStep;
    if (newIndex >= this.pageCount) {
      newIndex = this.pageCount - 1;
    }
    this.pageIndex = newIndex;
    this.populatePage();
  }

  backward() {
    let newIndex = this.pageIndex - this.longStep;
    if (newIndex < 0) {
      newIndex = 0;
    }
    this.pageIndex = newIndex;
    this.populatePage();
  }

  private populatePage() {
    const baseIndex = this.pageIndex * this.pageCapacity;
    for (let i = 0; i < this.page.length; i++) {
      this.page[i] = this.replacements[i + baseIndex];
    }
  }
}
