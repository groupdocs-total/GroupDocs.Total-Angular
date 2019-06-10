import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from "../tabs/tabs.component";

@Component({
  selector: 'gd-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {

  @Input() tabTitle;
  @Input() icon;
  active: boolean;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this)
  }

  ngOnInit() {
  }

}
