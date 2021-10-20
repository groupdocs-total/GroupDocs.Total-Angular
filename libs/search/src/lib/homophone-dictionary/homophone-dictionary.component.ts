import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommandsService } from '../commands.service';
import { AppState, WordState, WordWrapper } from '../search-models';
import { HomophoneDictionaryService } from '../homophone-dictionary.service';

@Component({
  selector: 'gd-homophone-dictionary',
  templateUrl: './homophone-dictionary.component.html',
  styleUrls: ['./homophone-dictionary.component.less']
})
export class HomophoneDictionaryComponent implements OnInit, AfterViewChecked {
  subscription: any;
  needToScroll = false;

  @ViewChild('scrollContainer', {static: false})
  private scrollContainer: ElementRef;

  constructor(public dictionary: HomophoneDictionaryService,
              private _commandsService: CommandsService) {
    this.subscription = this._commandsService.getEventEmitter()
      .subscribe(({name, state}) => {
        if (name === "save" && state === AppState.HomophoneDictionary) {
          this.dictionary.save();
        }
      });
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  addGroup() {
    const group = new Array<WordWrapper>(0);
    this.dictionary.homophoneGroups.push(group);
    this.needToScroll = true;
  }

  addWord(newHomophone: string, groupIndex: number) {
    const trimmed = newHomophone.trim().toLowerCase();
    const group = this.dictionary.homophoneGroups[groupIndex];
    if (trimmed.length > 0 &&
      !group.some(e => e.word === trimmed)) {
      const ww = new WordWrapper();
      ww.word = trimmed;
      ww.state = WordState.New;
      group.push(ww);
      group.sort();
    }
  }

  deleteGroup(groupIndex: number) {
    const group = this.dictionary.homophoneGroups[groupIndex];
    if (group.length === 0) {
      this.dictionary.homophoneGroups.splice(groupIndex, 1);
      return;
    }

    let deleted = true;
    for (let i = 0; i < group.length; i++) {
      if (group[i].state === WordState.Old || group[i].state === WordState.New) {
        deleted = false;
        break;
      }
    }

    if (!deleted) {
      for (let i = 0; i < group.length; i++) {
        if (group[i].state === WordState.Old) {
          group[i].state = WordState.DeletedOld;
        } else
        if (group[i].state === WordState.New) {
          group[i].state = WordState.DeletedNew;
        }
      }
    } else {
      for (let i = 0; i < group.length; i++) {
        if (group[i].state === WordState.DeletedOld) {
          group[i].state = WordState.Old;
        } else
        if (group[i].state === WordState.DeletedNew) {
          group[i].state = WordState.New;
        }
      }
    }
  }

  deleteWord(groupIndex: number, wordIndex: number) {
    const wrapper = this.dictionary.homophoneGroups[groupIndex][wordIndex];
    switch (wrapper.state) {
      case WordState.Old: {
        wrapper.state = WordState.DeletedOld;
        break;
      }
      case WordState.DeletedOld: {
        wrapper.state = WordState.Old;
        break;
      }
      case WordState.New: {
        wrapper.state = WordState.DeletedNew;
        break;
      }
      case WordState.DeletedNew: {
        wrapper.state = WordState.New;
        break;
      }
    }
  }

  private scrollToBottom(): void {
    if (this.needToScroll) {
      try {
          this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      } catch(err) {
      }
      finally {
        this.needToScroll = false;
      }
    }
  }
}
