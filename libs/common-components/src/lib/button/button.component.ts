import {Component, Input} from '@angular/core';

@Component({
  selector: 'gd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  @Input() iconOnly = true;
  @Input() intent = 'default';
  @Input() disabled = false;
  @Input() icon: string;
  @Input() iconClass: string;
  @Input() tooltip: string;
  @Input() className: string;
  @Input() toggle = false;

  showToolTip = false;

  constructor() {
  }

  iconButtonClass() {
    return this.iconOnly ? 'icon-button' : '';
  }

  onHovering() {
    if (!this.disabled) {
      this.className += ' active';
    }
  }

  onUnhovering() {
    if (!this.disabled) {
      this.className = this.className.replace(' active', '');
    }
  }
}
