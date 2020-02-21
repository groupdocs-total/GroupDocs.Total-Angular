import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gd-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.less']
})
export class SearchPanelComponent implements OnInit {

  private text = "";
  @Output() searchText = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    this.searchText.emit(this.text);
  }

  setText(value: string) {
    this.text = value;
  }
}
