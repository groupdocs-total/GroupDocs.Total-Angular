import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '@groupdocs.examples.angular/common-components';
import { AlphabetDictionaryService } from '../alphabet-dictionary.service';
import { AppState } from '../search-models';
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
              private _synonyms: SynonymDictionaryService) {
    this.dictionaries = [
      { appState: AppState.AliasDictionary, name: "Alias", disabled: true, link: "https://docs.groupdocs.com/search/net/using-aliases/" },
      { appState: AppState.StopWordDictionary, name: "Stop word", disabled: false, link: "https://docs.groupdocs.com/search/net/indexing-with-stop-words/" },
      { appState: AppState.SynonymDictionary, name: "Synonym", disabled: false, link: "https://docs.groupdocs.com/search/net/synonym-search/" },
      { appState: AppState.PasswordDictionary, name: "Password", disabled: true, link: "https://docs.groupdocs.com/search/net/indexing-password-protected-documents/" },
      { appState: AppState.SpellingCorrectorDictionary, name: "Spelling corrector", disabled: true, link: "https://docs.groupdocs.com/search/net/spell-checking/" },
      { appState: AppState.HomophoneDictionary, name: "Homophone", disabled: true, link: "https://docs.groupdocs.com/search/net/homophone-search/" },
      { appState: AppState.AlphabetDictionary, name: "Alphabet", disabled: false, link: "https://docs.groupdocs.com/search/net/character-types/" },
      { appState: AppState.CharacterReplacementDictionary, name: "Character replacement", disabled: true, link: "https://docs.groupdocs.com/search/net/character-replacement-during-indexing/" },
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
    }
    this.modalComponent.close();
    this.dictionarySelected.emit(state);
  }
}
