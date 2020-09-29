import { Injectable } from '@angular/core';
import { AlphabetCharacter, AlphabetCharacterEx, AlphabetReadResponse, AlphabetUpdateRequest, CharacterType } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class AlphabetDictionaryService {
  totalCount = 65536;
  longStep = 16;
  alphabet: AlphabetCharacterEx[];
  pageCapacity = 256;
  pageCount = 256;
  pageIndex = 0;
  page: AlphabetCharacterEx[];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getAlphabetDictionary().subscribe((result: AlphabetReadResponse) => {

      this.alphabet = new Array(this.totalCount);
      for (let i = 0; i < result.Characters.length; i++) {
        const ac = result.Characters[i];
        this.create(ac.Character, ac.Type, this.alphabet);
      }

      let start = -1;
      for (let i = 0; i < result.Characters.length; i++) {
        const ac = result.Characters[i];
        const end = ac.Character;
        for (let j = start + 1; j < end; j++) {
          this.create(j, CharacterType.Separator, this.alphabet);
        }
        start = end;
      }
      const absoluteEnd = this.totalCount;
      for (let j = start + 1; j < absoluteEnd; j++) {
        this.create(j, CharacterType.Separator, this.alphabet);
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
    let count = 0;
    for (let i = 0; i < this.alphabet.length; i++) {
      if (this.alphabet[i].Type !== "Separator") {
        count++;
      }
    }
    const request = new AlphabetUpdateRequest();
    request.Characters = new Array(count);
    let index = 0;
    for (let i = 0; i < this.alphabet.length; i++) {
      const ace = this.alphabet[i];
      if (ace.Type !== "Separator") {
        const ac = new AlphabetCharacter();
        ac.Character = ace.Id;
        ac.Type = CharacterType[ace.Type];
        request.Characters[index] = ac;
        index++;
      }
    }

    this._searchService.saveAlphabetDictionary(request).subscribe(() => {
      console.log("Alphabet dictionary saved")
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

  changeType(code: number) {
    const ace = this.alphabet[code];
    const oldType = CharacterType[ace.Type];
    const newType = this.getNextType(oldType);
    this.alphabet[code].Type = CharacterType[newType];
    this.populatePage();
  }

  private getNextType(type: CharacterType): CharacterType {
    if (type === CharacterType.SeparateWord) {
      return CharacterType.Separator;
    }
    return type + 1;
  }

  private populatePage() {
    const baseIndex = this.pageIndex * this.pageCapacity;
    for (let i = 0; i < this.page.length; i++) {
      this.page[i] = this.alphabet[i + baseIndex];
    }
  }

  private create(code: number, type: CharacterType, alphabet: AlphabetCharacterEx[]) {
    const ace = new AlphabetCharacterEx();
    ace.Id = code;
    ace.Character = String.fromCharCode(code);
    ace.Code = code.toString(16).toUpperCase().padStart(4, "0");
    ace.Type = CharacterType[type];
    alphabet[code] = ace;
  }
}
