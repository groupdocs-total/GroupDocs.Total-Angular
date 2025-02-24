declare var require: any;

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HelpTopic } from '../app-models';
import { ParserConfigService } from '../parser-config.service';

@Component({
  selector: 'gd-parser-help-topics',
  templateUrl: './help-topics.component.html',
  styleUrls: ['./help-topics.component.less']
})
export class HelpTopicsComponent implements OnInit {
  topics: Array<HelpTopic>
  private _topic: HelpTopic = null 
  imageVisibility = "hidden"

  constructor(private _parserConfigService: ParserConfigService) { }

  get showHelpAtStart(): boolean {
    return this._parserConfigService.showHelpAtStart;
  }

  set showHelpAtStart(value: boolean) {
    this._parserConfigService.showHelpAtStart = value;
  }

  ngOnInit() {
  }

  refresh($event) {
    if ($event) {
      this.loadTopics();
    }
  }

  onLoad() {
    this.imageVisibility = "visible"
  }

  get topic() {
    return this._topic
  }

  set topic(topic: HelpTopic) {
    this.imageVisibility = "hidden"
    this._topic = topic
  }

  loadTopics() {
    this.topics = require('../../assets/help/topics.json').data
    if (this._parserConfigService.showHelpAtStart) {
      this.topic = this.topics[0]
    }
    else {
      this.showTopics()
    }
  }

  choose(topic: HelpTopic) {
    this.topic = topic
  }

  showTopics() {
    this.topic = null
  }

  isFirstTopic() {
    return this.topics.indexOf(this.topic) === 0;
  }

  isLastTopic() {
    return this.topics.indexOf(this.topic) === this.topics.length - 1;
  }

  goPrev() {
    const i = this.topics.indexOf(this.topic);

    if (i > 0) {
      this.topic = null;
      this.topic = this.topics[i - 1];
    }
  }

  goNext() {
    const i = this.topics.indexOf(this.topic);
    if (i < this.topics.length - 1) {
      this.topic = null;
      this.topic = this.topics[i + 1];
    }
  }
}
