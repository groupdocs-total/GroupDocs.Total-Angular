import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OnCloseService} from "../on-close.service";

export interface Option {
  name: string;
  value: any;
  separator: boolean;
}

@Component({
  selector: 'gd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent {

  @Input() options: Option[];
  @Input() disabled = false;
  @Input() showSelected: any;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  isOpen = false;

  constructor(private _onCloseService: OnCloseService) {
    _onCloseService.onClose.subscribe(() => {
      this.close();
    });
  }

  open() {
    if (!this.disabled) {
      this.isOpen = true;
    }
  }

  close() {
    this.isOpen = false;
  }

  toggle($event) {
    $event.preventDefault();
    $event.stopPropagation();
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  select($event, value: any, prefix: string) {
    $event.preventDefault();
    $event.stopPropagation();
    this.showSelected = value + prefix;
    this.selected.emit(value);
    this.close();
  }

}
