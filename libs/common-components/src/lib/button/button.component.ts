import {Component, Input} from '@angular/core';
import {WindowService} from "../window.service";

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
  @Input() iconSize: string;
  @Input() iconRegular = false;
  @Input() elementPosition = 0;

  showToolTip = false;
  private isDesktop: boolean;

  constructor(windowService: WindowService) {
    this.isDesktop = windowService.isDesktop();
    windowService.onResize.subscribe((w) => {
      this.isDesktop = windowService.isDesktop();
    });
  }

  iconButtonClass() {
    return this.iconOnly ? 'icon-button' : '';
  }

  onHovering() {
    if (this.isDesktop && !this.disabled) {
      this.className += ' active';
    }
  }

  onUnhovering() {
    if (this.isDesktop && !this.disabled) {
      this.className = this.cleanAll(this.className, ' active');
    }
  }

  private cleanAll(str: string, val: string) {
    while (str && str.indexOf(val) !== -1) {
      str = str.replace(val, '');
    }
    return str;
  }
}
