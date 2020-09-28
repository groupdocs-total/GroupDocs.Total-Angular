import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Template, TemplateId } from '../app-models';

@Component({
  selector: 'app-template-browser',
  templateUrl: './template-browser.component.html',
  styleUrls: ['./template-browser.component.less']
})
export class TemplateBrowserComponent implements OnInit {

  @Output() choosed = new EventEmitter();

  ids: Array<TemplateId>;

  constructor() {
    this.loadIds();
  }

  ngOnInit() {
  }

  loadIds() {
    this.ids = Template.getTemplateIds();
  }

  refresh($event) {
    if ($event) {
      this.loadIds();
    }
  }

  choose(id: TemplateId) {
    this.choosed.emit(id);
  }

  getTemplateIds(): Array<TemplateId> {
    return Template.getTemplateIds();
  }

}
