import { Component, Input, OnInit } from '@angular/core';
import { TableValue } from '../app-models';

@Component({
  selector: 'gd-table-viewer',
  templateUrl: './table-viewer.component.html',
  styleUrls: ['./table-viewer.component.less']
})
export class TableViewerComponent implements OnInit {
  table : TableValue;

  constructor() { }

  ngOnInit() {
  }

}
