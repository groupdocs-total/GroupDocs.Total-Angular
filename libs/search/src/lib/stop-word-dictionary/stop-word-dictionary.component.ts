import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommandsService } from '../commands.service';
import { AppState, WordState, WordWrapper } from '../search-models';
import { StopWordDictionaryService } from '../stop-word-dictionary.service';

@Component({
  selector: 'gd-stop-word-dictionary',
  templateUrl: './stop-word-dictionary.component.html',
  styleUrls: ['./stop-word-dictionary.component.less']
})
export class StopWordDictionaryComponent implements OnInit, OnDestroy {
  subscription: any;

  constructor(public dictionary: StopWordDictionaryService,
              private _commandsService: CommandsService) {
    this.subscription = this._commandsService.getEventEmitter()
      .subscribe(({name, state}) => {
        if (name === "save" && state === AppState.StopWordDictionary) {
          this.dictionary.save();
        }
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete(index: number) {
    switch (this.dictionary.words[index].state) {
      case WordState.Old: {
        this.dictionary.words[index].state = WordState.DeletedOld;
        break;
      }
      case WordState.DeletedOld: {
        this.dictionary.words[index].state = WordState.Old;
        break;
      }
      case WordState.New: {
        this.dictionary.words[index].state = WordState.DeletedNew;
        break;
      }
      case WordState.DeletedNew: {
        this.dictionary.words[index].state = WordState.New;
        break;
      }
    }
  }

  addWord(newStopWord: string) {
    const trimmed = newStopWord.trim().toLowerCase();
    if (trimmed.length > 0 &&
      !this.dictionary.words.some(e => e.word === trimmed)) {
      const sww = new WordWrapper();
      sww.word = trimmed;
      sww.state = WordState.New;
      this.dictionary.words.push(sww);
      this.dictionary.sort();
    }
  }
}
