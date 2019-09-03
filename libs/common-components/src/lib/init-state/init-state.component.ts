import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'gd-init-state',
  templateUrl: './init-state.component.html',
  styleUrls: ['./init-state.component.less']
})
export class InitStateComponent implements OnInit {
  @Input() icon: string;
  @Input() text: string;
  @Output() fileDropped = new EventEmitter<boolean>();
  showUploadFile = false;

  constructor() {
  }

  ngOnInit() {
  }

  dropped($event) {
    if ($event) {
      this.fileDropped.emit($event);
      this.showUploadFile = false;
    }
  }
}
