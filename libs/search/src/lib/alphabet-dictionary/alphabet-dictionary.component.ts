import { Component, OnInit } from '@angular/core';
import { AlphabetDictionaryService } from '../alphabet-dictionary.service';
import { CommandsService } from '../commands.service';

@Component({
  selector: 'gd-alphabet-dictionary',
  templateUrl: './alphabet-dictionary.component.html',
  styleUrls: ['./alphabet-dictionary.component.less']
})
export class AlphabetDictionaryComponent implements OnInit {
  subscription: any;

  constructor(public alphabet: AlphabetDictionaryService,
              private _commandsService: CommandsService) {
  }

  ngOnInit() {
    this.subscription = this._commandsService.getEventEmitter()
      .subscribe((name: string) => {
        if (name == "save") {
          this.alphabet.save();
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  firstPage() {
    this.alphabet.firstPage();
  }

  lastPage() {
    this.alphabet.lastPage();
  }

  nextPage() {
    this.alphabet.nextPage();
  }

  previousPage() {
    this.alphabet.previousPage();
  }

  forward() {
    this.alphabet.forward();
  }

  backward() {
    this.alphabet.backward();
  }

  changeType(code: number) {
    this.alphabet.changeType(code);
  }
}
