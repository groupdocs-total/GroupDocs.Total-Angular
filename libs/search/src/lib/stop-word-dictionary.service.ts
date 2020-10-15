import { Injectable } from '@angular/core';
import { StopWordsReadResponse, StopWordsUpdateRequest } from './search-models';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class StopWordDictionaryService {
  words: StopWordWrapper[];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getStopWordDictionary().subscribe((response: StopWordsReadResponse) => {
      this.words = new Array(response.StopWords.length);
      for (let i = 0; i < response.StopWords.length; i++) {
        this.words[i] = new StopWordWrapper();
        this.words[i].word = response.StopWords[i];
        this.words[i].state = StopWordState.Old;
      }
      this.sort();
    });
  }

  sort() {
    this.words.sort((a, b) => this.compare(a.word, b.word));
  }

  compare(a: string, b:string) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  save() {
    const request = new StopWordsUpdateRequest();

    let count = 0;
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].state === StopWordState.Old ||
        this.words[i].state === StopWordState.New) {
        count++;
      }
    }

    request.StopWords = new Array(count);
    let index = 0;
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].state === StopWordState.Old ||
        this.words[i].state === StopWordState.New) {
        request.StopWords[index] = this.words[i].word;
        index++;
      }
    }

    this._searchService.setStopWordDictionary(request).subscribe(() => {
      console.log("Stop word dictionary updated")
      this.init();
    });
  }
}

export enum StopWordState {
  Old = "Old",
  DeletedOld = "DeletedOld",
  New = "New",
  DeletedNew = "DeletedNew",
}

export class StopWordWrapper {
  word: string;
  state: StopWordState;
}
