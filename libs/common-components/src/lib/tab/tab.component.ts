import {Component, Input, OnInit} from '@angular/core';
import {TabActivatorService} from "../tab-activator.service";

@Component({
  selector: 'gd-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {
  @Input() id: string;
  @Input() tabTitle: string;
  @Input() icon: string;
  @Input() disabled = false;
  @Input() active = false;
  @Input() content = true;

  constructor(private _tabActivatorService: TabActivatorService) {
    this._tabActivatorService.activeTabChange.subscribe((tabId: string) => {
      this.activation(tabId);
    });
  }

  private activation(tabId: string) {
    if (this.id === tabId) {
      this.active = true;
    } else {
      this.active = false;
    }
  }

  ngOnInit() {
  }

  selectTab() {
    if (this.disabled) {
      return;
    }
    this._tabActivatorService.changeActiveTab(this.id);
  }
}
