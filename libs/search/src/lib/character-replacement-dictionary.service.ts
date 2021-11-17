import { Injectable, OnDestroy, SystemJsNgModuleLoader } from '@angular/core';
import { CharacterSelectorService } from './character-selector.service';
import { SearchConfigService } from './search-config.service';
import { CharacterReplacement, CharacterReplacementsReadResponse, CharacterReplacementsUpdateRequest, SearchBaseRequest } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class CharacterReplacementDictionaryService {
  readonly totalCount = 65536;
  readonly longStep = 16;
  replacements: CharacterReplacement[];
  readonly pageCapacity = 256;
  readonly pageCount = 256;
  pageIndex = 0;
  page: CharacterReplacement[];

  constructor(
    private _searchService: SearchService,
    private _configService: SearchConfigService,
    private _characterSelector: CharacterSelectorService) {
  }

  init() {
    const request = new SearchBaseRequest();
    request.FolderName = this._configService.folderName;
    this.replacements = null;
    this.page = null;

    this._searchService.getCharacterReplacementDictionary(request).subscribe((response: CharacterReplacementsReadResponse) => {
      const replacements = new Array(this.totalCount);
      for (let cId = 0; cId < response.replacements.length; cId++) {
        const rId = response.replacements[cId];
        const cr = CharacterReplacement.create(cId, rId);
        replacements[cId] = cr;
      }
      this.replacements = replacements;
  
      this.pageIndex = 0;

      this.populatePage();
    });
  }

  save() {
    const request = new CharacterReplacementsUpdateRequest();
    request.FolderName = this._configService.folderName;

    request.replacements = new Array(this.totalCount);
    for (let i = 0; i < this.replacements.length; i++) {
      request.replacements[i] = this.replacements[i].ReplacementId;
    }

    this._searchService.setCharacterReplacementDictionary(request).subscribe(() => {
      console.log("Character replacement dictionary updated");
    });
  }

  selectReplacement(replacement: CharacterReplacement) {
    this._characterSelector.characterReplacementUpdated.subscribe((replacement) => {
      for (let i = 0; i < this.replacements.length; i++) {
        if (this.replacements[i].CharacterId === replacement.CharacterId) {
          this.replacements[i] = replacement;
          break;
        }
      }
      this.populatePage();
    });
    this._characterSelector.open(replacement);
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
    const page = new Array(this.pageCapacity)
    const baseIndex = this.pageIndex * this.pageCapacity;
    for (let i = 0; i < page.length; i++) {
      page[i] = this.replacements[i + baseIndex];
    }
    this.page = page;
  }
}
