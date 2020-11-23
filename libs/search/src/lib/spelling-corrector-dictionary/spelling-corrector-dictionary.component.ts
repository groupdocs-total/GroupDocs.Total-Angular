import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommandsService } from '../commands.service';
import { WordState, WordWrapper } from '../search-models';
import { SpellingCorrectorDictionaryService } from '../spelling-corrector-dictionary.service';

@Component({
  selector: 'gd-spelling-corrector-dictionary',
  templateUrl: './spelling-corrector-dictionary.component.html',
  styleUrls: ['./spelling-corrector-dictionary.component.less']
})
export class SpellingCorrectorDictionaryComponent implements OnInit, OnDestroy {
  subscription: any;

  constructor(public dictionary: SpellingCorrectorDictionaryService,
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

  addWord(newWord: string) {
    const trimmed = newWord.trim().toLowerCase();
    if (trimmed.length > 0 &&
      !this.dictionary.words.some(e => e.word === trimmed)) {
      const ww = new WordWrapper();
      ww.word = trimmed;
      ww.state = WordState.New;
      this.dictionary.words.push(ww);
      this.dictionary.sort();
    }
  }
}
