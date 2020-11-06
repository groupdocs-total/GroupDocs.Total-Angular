import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gd-view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.less']
})
export class ViewHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
