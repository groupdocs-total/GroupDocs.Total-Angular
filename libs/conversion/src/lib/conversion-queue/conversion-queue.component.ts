import { Component, Input, OnInit } from '@angular/core';
import { ConversionItemModel } from '../models';

@Component({
  selector: 'gd-conversion-queue',
  templateUrl: './conversion-queue.component.html',
  styleUrls: ['./conversion-queue.component.less']
})

export class ConversionQueueComponent implements OnInit {
  @Input() items: ConversionItemModel[] = [];

  constructor() {
  }
  
  ngOnInit(): void {
  }
}
