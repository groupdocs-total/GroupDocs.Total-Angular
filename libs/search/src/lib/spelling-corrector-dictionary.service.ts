import { Injectable } from '@angular/core';
import { SpellingCorrectorReadResponse, SpellingCorrectorUpdateRequest, WordState, WordWrapper } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class SpellingCorrectorDictionaryService {
  words: WordWrapper[];

  longStep = 10;
  pageCapacity = 1000;
  pageCount: number;
  pageIndex = 0;
  page: WordWrapper[];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getSpellingCorrectorDictionary().subscribe((response: SpellingCorrectorReadResponse) => {
      this.pageIndex = 0;
      this.words = new Array(response.Words.length);
      for (let i = 0; i < response.Words.length; i++) {
        this.words[i] = new WordWrapper();
        this.words[i].word = response.Words[i];
        this.words[i].state = WordState.Old;
      }
      this.sort();
    });
  }

  sort() {
    this.words.sort((a, b) => this.compare(a.word, b.word));
    this.pageCount = Math.ceil(this.words.length / this.pageCapacity);
    this.populatePage();
  }

  private compare(a: string, b:string) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
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
    let count = this.words.length - this.pageIndex * this.pageCapacity;
    if (this.pageCapacity < count) {
      count = this.pageCapacity;
    }
    this.page = new Array(count);

    const baseIndex = this.pageIndex * this.pageCapacity;
    for (let i = 0; i < this.page.length; i++) {
      this.page[i] = this.words[i + baseIndex];
    }
  }

  save() {
    const request = new SpellingCorrectorUpdateRequest();

    let count = 0;
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].state === WordState.Old ||
        this.words[i].state === WordState.New) {
        count++;
      }
    }

    request.Words = new Array(count);
    let index = 0;
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].state === WordState.Old ||
        this.words[i].state === WordState.New) {
        request.Words[index] = this.words[i].word;
        index++;
      }
    }

    this._searchService.setSpellingCorrectorDictionary(request).subscribe(() => {
      console.log("Spelling corrector dictionary updated")
      this.init();
    });
  }
}
