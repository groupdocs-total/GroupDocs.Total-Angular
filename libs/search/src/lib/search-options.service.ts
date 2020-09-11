import { Injectable } from '@angular/core';

@Injectable()
export class SearchOptionsService {

  CaseSensitiveSearch: boolean = false;
  FuzzySearch: boolean = false;
  FuzzySearchMistakeCount: number = 3;
  FuzzySearchOnlyBestResults: boolean = false;

  constructor() { }
}
