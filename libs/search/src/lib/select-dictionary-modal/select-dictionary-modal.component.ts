import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '@groupdocs.examples.angular/common-components';
import { AlphabetDictionaryService } from '../alphabet-dictionary.service';
import { CharacterReplacementDictionaryService } from '../character-replacement-dictionary.service';
import { HomophoneDictionaryService } from '../homophone-dictionary.service';
import { PasswordDictionaryService } from '../password-dictionary.service';
import { AppState, DocumentPasswordsReadResponse } from '../search-models';
import { SpellingCorrectorDictionaryService } from '../spelling-corrector-dictionary.service';
import { StopWordDictionaryService } from '../stop-word-dictionary.service';
import { SynonymDictionaryService } from '../synonym-dictionary.service';

@Component({
  selector: 'gd-select-dictionary-modal',
  templateUrl: './select-dictionary-modal.component.html',
  styleUrls: ['./select-dictionary-modal.component.less']
})
export class SelectDictionaryModalComponent implements OnInit {
  @Output() dictionarySelected = new EventEmitter<AppState>();
  dictionaries: { appState: AppState, name: string, disabled: boolean, link: string }[];

  @ViewChild('modal', {static: false})
  modalComponent: ModalComponent;

  constructor(private _alphabet: AlphabetDictionaryService,
              private _stopWords: StopWordDictionaryService,
              private _synonyms: SynonymDictionaryService,
              private _homophones: HomophoneDictionaryService,
              private _spellingCorrectorWords: SpellingCorrectorDictionaryService,
              private _characterReplacements: CharacterReplacementDictionaryService,
              private _passwords: PasswordDictionaryService) {
    this.dictionaries = [
      //{ appState: AppState.AliasDictionary, name: "Alias", disabled: true, link: "https://docs.groupdocs.com/search/net/using-aliases/" },
      { appState: AppState.StopWordDictionary, name: "Stop word", disabled: false, link: "https://docs.groupdocs.com/search/net/indexing-with-stop-words/" },
      { appState: AppState.SynonymDictionary, name: "Synonym", disabled: false, link: "https://docs.groupdocs.com/search/net/synonym-search/" },
      //{ appState: AppState.PasswordDictionary, name: "Password", disabled: false, link: "https://docs.groupdocs.com/search/net/indexing-password-protected-documents/" },
      { appState: AppState.SpellingCorrectorDictionary, name: "Spelling corrector", disabled: false, link: "https://docs.groupdocs.com/search/net/spell-checking/" },
      { appState: AppState.HomophoneDictionary, name: "Homophone", disabled: false, link: "https://docs.groupdocs.com/search/net/homophone-search/" },
      { appState: AppState.AlphabetDictionary, name: "Alphabet", disabled: false, link: "https://docs.groupdocs.com/search/net/character-types/" },
      { appState: AppState.CharacterReplacementDictionary, name: "Character replacement", disabled: false, link: "https://docs.groupdocs.com/search/net/character-replacement-during-indexing/" },
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
      case AppState.SynonymDictionary: {
        this._synonyms.init();
        break;
      }
      case AppState.HomophoneDictionary: {
        this._homophones.init();
        break;
      }
      case AppState.SpellingCorrectorDictionary: {
        this._spellingCorrectorWords.init();
        break;
      }
      case AppState.CharacterReplacementDictionary: {
        this._characterReplacements.init();
        break;
      }
      case AppState.PasswordDictionary: {
        this._passwords.init();
        break;
      }
    }
    this.modalComponent.close();
    this.dictionarySelected.emit(state);
  }
}
