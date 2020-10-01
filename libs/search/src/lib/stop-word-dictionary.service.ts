import { Injectable } from '@angular/core';
import { StopWordsReadResponse, StopWordsUpdateRequest } from './search-models';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class StopWordDictionaryService {
  words: string[];

  constructor(private _searchService: SearchService) {
  }

  init() {
    this._searchService.getStopWordDictionary().subscribe((response: StopWordsReadResponse) => {
      this.words = new Array(response.StopWords.length);
      for (let i = 0; i < response.StopWords.length; i++) {
        this.words[i] = response.StopWords[i];
      }
      this.words.sort();
    });
  }

  save() {
    const request = new StopWordsUpdateRequest();
    request.StopWords = new Array(this.words.length);

    for (let i = 0; i < this.words.length; i++) {
      request.StopWords[i] = this.words[i];
    }

    this._searchService.setStopWordDictionary(request).subscribe(() => {
      console.log("Stop word dictionary updated")
    });
  }
}
