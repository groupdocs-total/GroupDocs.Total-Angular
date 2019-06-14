import {Component, Input} from '@angular/core';

@Component({
  selector: 'gd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {

  @Input() disabled: boolean = false;
  @Input() icon:string;
  @Input() tooltip:string;
  @Input() className: string;
  showToolTip:boolean = false;

  constructor() { }

  onHovering() {
    this.showToolTip = true;
  }

  onUnhovering() {
    this.showToolTip = false;
  }
}
