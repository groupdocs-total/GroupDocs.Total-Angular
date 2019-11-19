import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gd-tabbed-toolbars',
  templateUrl: './tabbed-toolbars.component.html',
  styleUrls: ['./tabbed-toolbars.component.less']
})
export class TabbedToolbarsComponent implements OnInit {
  @Input() logo: string;
  @Input() icon: string;

  constructor() {
  }

  ngOnInit() {
  }

}
