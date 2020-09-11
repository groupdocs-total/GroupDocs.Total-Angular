import {Component, EventEmitter, OnInit, Output, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'gd-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.less']
})
export class SearchPanelComponent implements OnInit {

  @ViewChild('text',{
    static : true
  }) textElement: ElementRef;

  private text = "";
  @Output() searchText = new EventEmitter();
  @Output() cleared = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    this.searchText.emit(this.text);
  }

  setText(value: string) {
    this.text = value;
    if (value === "")
    {
      this.clearQueryString();
    }
  }

  clearQueryString() {
    this.text = "";
    this.textElement.nativeElement.value = '';
    this.cleared.emit();
  }
}
