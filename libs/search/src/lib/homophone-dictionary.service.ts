import { Injectable } from '@angular/core';
import { HomophonesReadResponse, HomophonesUpdateRequest, WordState, WordWrapper } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class HomophoneDictionaryService {
  homophoneGroups: WordWrapper[][];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getHomophoneDictionary().subscribe((response: HomophonesReadResponse) => {
      this.homophoneGroups = new Array(response.HomophoneGroups.length);
      for (let i = 0; i < response.HomophoneGroups.length; i++) {
        const wordArray = response.HomophoneGroups[i];
        const wrapperArray = new Array(wordArray.length);
        for (let j = 0; j < wrapperArray.length; j++) {
          wrapperArray[j] = new WordWrapper();
          wrapperArray[j].word = wordArray[j];
          wrapperArray[j].state = WordState.Old;
        }
        this.homophoneGroups[i] = wrapperArray;
      }
      this.sort();
    });
  }

  private sort() {
    for (let i = 0; i < this.homophoneGroups.length; i++) {
      this.homophoneGroups[i].sort((a, b) => this.compare(a.word, b.word));
    }
    this.homophoneGroups.sort((a, b) => this.compare(a[0].word, b[0].word));
  }

  private compare(a: string, b:string) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  save() {
    let result = new Array<string[]>(this.homophoneGroups.length);
    let groupIndex = 0;
    for (let i = 0; i < this.homophoneGroups.length; i++) {
      const group = this.homophoneGroups[i];
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

    const request = new HomophonesUpdateRequest();
    request.HomophoneGroups = result;
    this._searchService.setHomophoneDictionary(request).subscribe(() => {
      console.log("Homophone dictionary updated")
      this.init();
    });
  }
}
