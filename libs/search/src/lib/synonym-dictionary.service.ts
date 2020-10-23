import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { SynonymsReadResponse, SynonymsUpdateRequest } from './search-models';

@Injectable()
export class SynonymDictionaryService {
  synonymGroups: WordWrapper[][];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getSynonymDictionary().subscribe((response: SynonymsReadResponse) => {
      this.synonymGroups = new Array(response.SynonymGroups.length);
      for (let i = 0; i < response.SynonymGroups.length; i++) {
        const wordArray = response.SynonymGroups[i];
        const wrapperArray = new Array(wordArray.length);
        for (let j = 0; j < wrapperArray.length; j++) {
          wrapperArray[j] = new WordWrapper();
          wrapperArray[j].word = wordArray[j];
          wrapperArray[j].state = WordState.Old;
        }
        this.synonymGroups[i] = wrapperArray;
      }
      this.sort();
    });
  }

  sort() {
    for (let i = 0; i < this.synonymGroups.length; i++) {
      this.synonymGroups[i].sort((a, b) => this.compare(a.word, b.word));
    }
    this.synonymGroups.sort((a, b) => this.compare(a[0].word, b[0].word));
  }

  compare(a: string, b:string) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  save() {
    let result = new Array<string[]>(this.synonymGroups.length);
    let groupIndex = 0;
    for (let i = 0; i < this.synonymGroups.length; i++) {
      const group = this.synonymGroups[i];
      let wordCount = 0;
      for (let j = 0; j < group.length; j++) {
        if (group[j].state === WordState.Old ||
          group[j].state === WordState.New) {
          wordCount++;
        }
      }
      if (wordCount < 2) continue;

      const words = new Array<string>(wordCount);
      let wordIndex = 0;
      for (let j = 0; j < group.length; j++) {
        if (group[j].state === WordState.Old ||
          group[j].state === WordState.New) {
          words[wordIndex] = group[j].word;
          wordIndex++;
        }
      }
      result[groupIndex] = words;
      groupIndex++;
    }

    if (groupIndex < result.length) {
      result = result.slice(0, groupIndex);
    }

    const request = new SynonymsUpdateRequest();
    request.SynonymGroups = result;
    this._searchService.setSynonymDictionary(request).subscribe(() => {
      console.log("Synonym dictionary updated")
      this.init();
    });
  }
}

export enum WordState {
  Old = "Old",
  DeletedOld = "DeletedOld",
  New = "New",
  DeletedNew = "DeletedNew",
}

export class WordWrapper {
  word: string;
  state: WordState;
}
