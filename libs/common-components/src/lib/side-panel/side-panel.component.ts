import {Component, Input} from '@angular/core';

@Component({
  selector: 'gd-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less']
})

export class SidePanelComponent {
  @Input() title: string;
  @Input() icon: string;
  // TODO: it should be false, now it's true for the simpler testing
  showSidePanel = true;

  constructor() {
  }

  openSidePanel() {
    if (this.showSidePanel) {
      this.showSidePanel = false;
      return;
    }
  }
}
