import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OnCloseService} from "../on-close.service";

export interface Option {
  name: string;
  value: any;
}

@Component({
  selector: 'gd-file-format-select',
  templateUrl: './file-format-select.component.html',
  styleUrls: ['./file-format-select.component.less']
})
export class FileFormatSelectComponent {

  @Input() options: Option[];
  @Input() disabled = false;
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

  onClickOutside(event : Event){
    if(event && event['value'] === true) {
      this.close();
    }
  }

  toggle($event) {
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
