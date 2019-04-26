import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  @Input() disabled: boolean = false;
  @Input() showSelected: any;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  isOpen: boolean = false;

  constructor() {
  }

  open() {
    if (!this.disabled) {
      this.isOpen = true;
    }
  }

  close() {
    this.isOpen = false;
  }

  toggle() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  select(value: any) {
    this.selected.emit(value);
    this.close();
  }

}
