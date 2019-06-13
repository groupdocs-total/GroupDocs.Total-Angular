import {Component, EventEmitter, OnInit, Output} from '@angular/core';

const DEFAULT_COLORS = ['#000000', '#993300', '#333300', '#000080', '#333399', '#333333',
  '#800000', '#FF6600', '#808000', '#008000', '#008080', '#0000FF',
  '#666699', '#808080', '#FF0000', '#FF9900', '#99CC00', '#339966',
  '#33CCCC', '#3366FF', '#800080', '#999999', '#FF00FF', '#FFCC00',
  '#FFFF00', '#00FF00', '#00FFFF', '#00CCFF', '#993366', '#C0C0C0',
  '#FF99CC', '#FFCC99', '#FFFF99', '#CCFFFF', '#99CCFF', '#FFFFFF'];


@Component({
  selector: 'gd-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.less']
})
export class ColorPickerComponent implements OnInit {
  @Output() selectedColor = new EventEmitter<string>();
  colors: any = DEFAULT_COLORS;

  constructor() {
  }

  ngOnInit() {
  }

  select(color: string) {
    this.selectedColor.emit(color);
  }
}
