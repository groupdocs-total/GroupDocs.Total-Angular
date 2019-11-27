import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'gd-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less']
})

export class SidePanelComponent {
  @Input() title: string;
  @Input() icon: string;
  @Output() hideSidePanel = new EventEmitter<boolean>();

  onlyTitle = false;

  constructor() {
  }

  openSidePanel() {
    this.hideSidePanel.emit(true);
  }

  toggleTitleMode(){
    this.onlyTitle = !this.onlyTitle;
  }
}
