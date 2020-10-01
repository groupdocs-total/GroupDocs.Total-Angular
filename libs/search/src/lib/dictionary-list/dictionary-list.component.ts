import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlphabetDictionaryService } from '../alphabet-dictionary.service';
import { AppState } from '../search-models';
import { StopWordDictionaryService } from '../stop-word-dictionary.service';

@Component({
  selector: 'gd-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.less']
})
export class DictionaryListComponent implements OnInit {
  @Output() dictionarySelected = new EventEmitter<AppState>();
  dictionaries: { appState: AppState, name: string, disabled: boolean }[];

  constructor(private _alphabet: AlphabetDictionaryService,
              private _stopWords: StopWordDictionaryService) {
    this.dictionaries = [
      { appState: AppState.AliasDictionary, name: "Alias", disabled: true },
      { appState: AppState.StopWordDictionary, name: "Stop word", disabled: false },
      { appState: AppState.SynonymDictionary, name: "Synonym", disabled: true },
      { appState: AppState.PasswordDictionary, name: "Password", disabled: true },
      { appState: AppState.SpellingCorrectorDictionary, name: "Spelling corrector", disabled: true },
      { appState: AppState.HomophoneDictionary, name: "Homophone", disabled: true },
      { appState: AppState.AlphabetDictionary, name: "Alphabet", disabled: false },
      { appState: AppState.CharacterReplacementDictionary, name: "Character replacement", disabled: true },
    ];
  }

  ngOnInit() {
  }

  selectDictionary(name: string) {
    const state = AppState[name];
    switch (state) {
      case AppState.AlphabetDictionary: {
        this._alphabet.init();
        break;
      }
      case AppState.StopWordDictionary: {
        this._stopWords.init();
        break;
      }
    }
    this.dictionarySelected.emit(state);
  }
}
