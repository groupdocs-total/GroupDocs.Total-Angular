import { Injectable } from '@angular/core';

@Injectable()
export class SearchOptionsService {

  CaseSensitiveSearch: boolean = false;
  FuzzySearch: boolean = false;
  FuzzySearchMistakeCount: number = 2;
  FuzzySearchOnlyBestResults: boolean = false;
  KeyboardLayoutCorrection: boolean = false;
  SynonymSearch: boolean = false;
  HomophoneSearch: boolean = false;
  WordFormsSearch: boolean = false;
  SpellingCorrection: boolean = false;
  SpellingCorrectionMistakeCount: number = 2;
  SpellingCorrectionOnlyBestResults: boolean = false;

  constructor() { }
}
