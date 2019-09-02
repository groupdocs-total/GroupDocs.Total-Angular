import {Component, Input} from '@angular/core';
import {OnCloseService} from "../on-close.service";
import {SelectComponent} from "../select/select.component";

@Component({
  selector: 'gd-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.less']
})
export class ButtonSelectComponent extends SelectComponent {
  @Input() icon: string;
  @Input() tooltip: string;
  showToolTip = false;

  constructor(_onCloseService: OnCloseService) {
    super(_onCloseService);
  }
}
