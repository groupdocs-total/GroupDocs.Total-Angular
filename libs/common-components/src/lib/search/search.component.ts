import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'gd-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Output() hidePanel = new EventEmitter<boolean>(false);

  current = 0;
  total = 0;

  @ViewChild('text') textElement: ElementRef;

  constructor(private _searchService: SearchService) {
    _searchService.totalChange.subscribe((total: number) => {
      this.total = total;
      if (total !== 0) {
        this.current = 1;
      } else {
        this.current = 0;
      }
      this._searchService.setCurrent(this.current);
    });
  }

  ngOnInit() {
  }

  setText(text: string) {
    this._searchService.setText(text);
  }

  hide() {
    this.setText('');
    this.hidePanel.emit(true);
  }

  prev() {
    if (this.current > 1) {
      this.current--;
      this._searchService.setCurrent(this.current);
    }
  }

  next() {
    if (this.current < this.total) {
      this.current++;
      this._searchService.setCurrent(this.current);
    }
  }

  ngAfterViewInit(): void {
    this.textElement.nativeElement.focus();
  }
}
