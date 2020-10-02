import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommandsService } from '../commands.service';
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
  }

  ngOnInit() {
    this.subscription = this._commandsService.getEventEmitter()
      .subscribe((name: string) => {
        if (name === "save") {
          this.dictionary.save();
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete(index: number) {
    if (index > -1) {
      this.dictionary.words.splice(index, 1);
    }
  }

  addWord(newStopWord: string) {
    const trimmed = newStopWord.trim().toLowerCase();
    if (trimmed.length > 0 &&
      this.dictionary.words.indexOf(trimmed) < 0) {
      this.dictionary.words.push(trimmed);
      this.dictionary.words.sort();
    }
  }
}
