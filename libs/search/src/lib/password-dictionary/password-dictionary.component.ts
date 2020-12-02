import { Component, OnInit } from '@angular/core';
import { CommandsService } from '../commands.service';
import { PasswordDictionaryService } from '../password-dictionary.service';

@Component({
  selector: 'gd-password-dictionary',
  templateUrl: './password-dictionary.component.html',
  styleUrls: ['./password-dictionary.component.less']
})
export class PasswordDictionaryComponent implements OnInit {
  subscription: any;

  constructor(public dictionary: PasswordDictionaryService,
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

  addPassword() {
    // Not implemented
  }
}
