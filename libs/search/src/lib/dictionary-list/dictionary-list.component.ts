import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlphabetDictionaryService } from '../alphabet-dictionary.service';
import { AppState } from '../search-models';

@Component({
  selector: 'gd-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.less']
})
export class DictionaryListComponent implements OnInit {
  @Output() dictionarySelected = new EventEmitter<AppState>();
  dictionaries: { appState: AppState, name: string, disabled: boolean }[];

  constructor(private _alphabet: AlphabetDictionaryService) {
    this.dictionaries = [
      { appState: AppState.AliasDictionary, name: "Alias", disabled: true },
      { appState: AppState.StopWordDictionary, name: "Stop word", disabled: true },
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
    if (state === AppState.AlphabetDictionary) {
      this._alphabet.init();
    }
    this.dictionarySelected.emit(state);
  }
}
