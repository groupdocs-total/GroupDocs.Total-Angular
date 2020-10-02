import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '@groupdocs.examples.angular/common-components';
import { AlphabetDictionaryService } from '../alphabet-dictionary.service';
import { AppState } from '../search-models';
import { StopWordDictionaryService } from '../stop-word-dictionary.service';

@Component({
  selector: 'gd-select-dictionary-modal',
  templateUrl: './select-dictionary-modal.component.html',
  styleUrls: ['./select-dictionary-modal.component.less']
})
export class SelectDictionaryModalComponent implements OnInit {
  @Output() dictionarySelected = new EventEmitter<AppState>();
  dictionaries: { appState: AppState, name: string, disabled: boolean }[];

  @ViewChild('modal', {static: false})
  modalComponent: ModalComponent;

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
    this.modalComponent.close();
    this.dictionarySelected.emit(state);
  }
}
