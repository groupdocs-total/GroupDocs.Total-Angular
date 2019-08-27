import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WindowService} from "../window.service";

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

  close() {
    this.opening.emit(false);
  }
}
