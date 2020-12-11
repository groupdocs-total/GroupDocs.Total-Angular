import { Injectable } from '@angular/core';

@Injectable()
export class SearchOptionsService {

  isOptionsVisible = false;
  SearchType = "PhraseSearch";
  CaseSensitiveSearch = false;
  FuzzySearch = false;
  FuzzySearchMistakeCount = 2;
  FuzzySearchOnlyBestResults = false;
  KeyboardLayoutCorrection = false;
  SynonymSearch = false;
  HomophoneSearch = false;
  WordFormsSearch = false;
  SpellingCorrection = false;
  SpellingCorrectionMistakeCount = 2;
  SpellingCorrectionOnlyBestResults = false;

  constructor() { }
}
