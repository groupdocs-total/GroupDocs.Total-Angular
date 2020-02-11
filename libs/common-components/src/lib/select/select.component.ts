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
  @Input() showSelected: Option;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Input() isOpen = false;

  constructor(protected _onCloseService: OnCloseService) {
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

  onClickOutside(event : Event){
    this.close();
  }

  toggle($event) {
    // TODO: following lines were uncommented due to needness in signature app
    $event.preventDefault();
    $event.stopPropagation();
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  select($event, value: Option) {
    $event.preventDefault();
    $event.stopPropagation();
    this.selected.emit(value);
    this.close();
  }
}
