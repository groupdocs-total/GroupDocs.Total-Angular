import { Injectable } from '@angular/core';
import { SpellingCorrectorReadResponse, SpellingCorrectorUpdateRequest, WordState, WordWrapper } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class SpellingCorrectorDictionaryService {
  words: WordWrapper[];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getSpellingCorrectorDictionary().subscribe((response: SpellingCorrectorReadResponse) => {
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
  }

  private compare(a: string, b:string) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
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
