import { Component, Input, OnInit } from '@angular/core';
import { ConversionItemModel } from '../models';

@Component({
  selector: 'gd-conversion-item',
  templateUrl: './conversion-item.component.html',
  styleUrls: ['./conversion-item.component.less']
})

export class ConversionItemComponent implements OnInit {
  @Input() item: ConversionItemModel;

  constructor() {
  }
  
  ngOnInit(): void {
  }
}
