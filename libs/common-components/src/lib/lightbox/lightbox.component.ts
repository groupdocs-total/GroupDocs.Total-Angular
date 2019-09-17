import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WindowService} from "../window.service";
import {Utils} from "../file.service";
import * as jquery from 'jquery';

const $ = jquery;

@Component({
  selector: 'gd-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.less']
})
export class LightboxComponent implements OnInit {
  @Output() opening = new EventEmitter<boolean>();
  @Input() title: string;
  isMobile: boolean;

  constructor(private _windowService: WindowService) {
    this.isMobile = _windowService.isMobile();
    _windowService.onResize.subscribe((w) => {
      this.isMobile = _windowService.isMobile();
    });
  }

  ngOnInit() {
  }

  close($event) {
    const position = Utils.getMousePosition($event);
    const element = document.elementFromPoint(position.x, position.y);
    if (element && $(element).hasClass('fade')) {
      this.opening.emit(false);
    }
  }
}
