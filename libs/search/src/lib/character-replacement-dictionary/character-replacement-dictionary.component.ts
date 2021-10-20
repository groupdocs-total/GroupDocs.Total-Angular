import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterReplacementDictionaryService } from '../character-replacement-dictionary.service';
import { CommandsService } from '../commands.service';
import { AppState } from '../search-models';

@Component({
  selector: 'gd-character-replacement-dictionary',
  templateUrl: './character-replacement-dictionary.component.html',
  styleUrls: ['./character-replacement-dictionary.component.less']
})
export class CharacterReplacementDictionaryComponent implements OnInit, OnDestroy {
  subscription: any;

  constructor(public dictionary: CharacterReplacementDictionaryService,
              private _commandsService: CommandsService) {
  }

  ngOnInit() {
    this.subscription = this._commandsService.getEventEmitter()
      .subscribe(({name, state}) => {
        if (name === "save" && state === AppState.CharacterReplacementDictionary) {
          this.dictionary.save();
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  firstPage() {
    this.dictionary.firstPage();
  }

  lastPage() {
    this.dictionary.lastPage();
  }

  nextPage() {
    this.dictionary.nextPage();
  }

  previousPage() {
    this.dictionary.previousPage();
  }

  forward() {
    this.dictionary.forward();
  }

  backward() {
    this.dictionary.backward();
  }
}
