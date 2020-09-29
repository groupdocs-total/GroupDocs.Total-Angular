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

  constructor(private _alphabet: AlphabetDictionaryService) { }

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
