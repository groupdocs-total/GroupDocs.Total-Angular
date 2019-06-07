import { Component, OnInit } from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'gd-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
  tabs: TabComponent[] = [];
  active: boolean;

  constructor() {

  }

  ngOnInit() {
  }

  addTab(tab:TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab:TabsComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

}
