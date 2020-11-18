import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'gd-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less']
})

export class SidePanelComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() closable = true;
  @Input() saveable = true;
  @Output() hideSidePanel = new EventEmitter<boolean>();
  @Output() saveInSidePanel = new EventEmitter<boolean>();

  onlyTitle = false;

  constructor() {
  }

  closeSidePanel() {
    this.hideSidePanel.emit(true);
  }

  saveBySidePanel() {
    this.saveInSidePanel.emit(true);
  }

  toggleTitleMode(){
    if (this.closable && !this.saveable) {
      this.onlyTitle = !this.onlyTitle;
    }
  }
}
