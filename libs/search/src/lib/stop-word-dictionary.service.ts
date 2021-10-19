import { Injectable } from '@angular/core';
import { SearchConfigService } from './search-config.service';
import { SearchBaseRequest, StopWordsReadResponse, StopWordsUpdateRequest, WordState, WordWrapper } from './search-models';
import { SearchService } from './search.service';

@Injectable()
export class StopWordDictionaryService {
  words: WordWrapper[];

  constructor(
    private _searchService: SearchService,
    private _configService: SearchConfigService) {
  }

  init() {
    const request = new SearchBaseRequest();
    request.FolderName = this._configService.folderName;
    this._searchService.getStopWordDictionary(request).subscribe((response: StopWordsReadResponse) => {
      this.words = new Array(response.stopWords.length);
      for (let i = 0; i < response.stopWords.length; i++) {
        this.words[i] = new WordWrapper();
        this.words[i].word = response.stopWords[i];
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
    const request = new StopWordsUpdateRequest();
    request.FolderName = this._configService.folderName;

    let count = 0;
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].state === WordState.Old ||
        this.words[i].state === WordState.New) {
        count++;
      }
    }

    request.stopWords = new Array(count);
    let index = 0;
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].state === WordState.Old ||
        this.words[i].state === WordState.New) {
        request.stopWords[index] = this.words[i].word;
        index++;
      }
    }

    this._searchService.setStopWordDictionary(request).subscribe(() => {
      console.log("Stop word dictionary updated");
      this.init();
    });
  }
}
