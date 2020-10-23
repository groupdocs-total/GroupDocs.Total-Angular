import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommandsService } from '../commands.service';
import { StopWordDictionaryService, StopWordState, StopWordWrapper } from '../stop-word-dictionary.service';

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
      .subscribe((name: string) => {
        if (name === "save") {
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
      case StopWordState.Old: {
        this.dictionary.words[index].state = StopWordState.DeletedOld;
        break;
      }
      case StopWordState.DeletedOld: {
        this.dictionary.words[index].state = StopWordState.Old;
        break;
      }
      case StopWordState.New: {
        this.dictionary.words[index].state = StopWordState.DeletedNew;
        break;
      }
      case StopWordState.DeletedNew: {
        this.dictionary.words[index].state = StopWordState.New;
        break;
      }
    }
  }

  addWord(newStopWord: string) {
    const trimmed = newStopWord.trim().toLowerCase();
    if (trimmed.length > 0 &&
      !this.dictionary.words.some(e => e.word === trimmed)) {
      const sww = new StopWordWrapper();
      sww.word = trimmed;
      sww.state = StopWordState.New;
      this.dictionary.words.push(sww);
      this.dictionary.sort();
    }
  }
}
