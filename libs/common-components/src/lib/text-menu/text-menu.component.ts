import {Component, EventEmitter, Input, OnInit, Output, ElementRef, Renderer2} from '@angular/core';
import * as jquery from 'jquery';
import {FormattingService} from "../formatting.service";
import {OnCloseService} from "../on-close.service";
import {Option} from "../select/select.component";
import { ZoomService } from '../zoom.service';
import { WindowService } from '../window.service';

const $ = jquery;

@Component({
  selector: 'gd-text-menu',
  templateUrl: './text-menu.component.html',
  styleUrls: ['./text-menu.component.less']
})
export class TextMenuComponent implements OnInit {
  @Input() blur: boolean;
  @Input() fontSize: number;
  @Input() font: string;
  @Input() bold: boolean;
  @Input() italic: boolean;
  @Input() underline: boolean;
  @Input() color: string;
  @Input() decoration = true;
  @Input() showTooltips = true;

  @Output() outFontSize = new EventEmitter<number>();
  @Output() outFont = new EventEmitter<string>();
  @Output() outBold = new EventEmitter<boolean>();
  @Output() outItalic = new EventEmitter<boolean>();
  @Output() outUnderline = new EventEmitter<boolean>();
  @Output() outColor = new EventEmitter<string>();

  fontSizeOptions = FormattingService.getFontSizeOptions();
  fontOptions = FormattingService.getFontOptions();
  colorPickerShow = false;

  isMobile: boolean;

  constructor(private _onCloseService: OnCloseService,
              private _zoomService: ZoomService,
              private _windowService: WindowService,
              protected _elementRef: ElementRef<HTMLElement>,
              private renderer: Renderer2) {
    
     _onCloseService.onClose.subscribe(() => {
      this.colorPickerShow = false;
    });

    this.isMobile = _windowService.isMobile();
    _windowService.onResize.subscribe((w) => {
      this.isMobile = _windowService.isMobile();
    });

    _zoomService.zoomChange.subscribe((val: number) => {
      if (this.isMobile)
      {
        this.changePosition(val);
      }
    });
  }

  ngOnInit() {
  }

  changePosition(val: number) {
    const top = (window.innerHeight - 24 - this._elementRef.nativeElement.parentElement.getBoundingClientRect().top - this._elementRef.nativeElement.parentElement.getBoundingClientRect().height);
    const left = this._elementRef.nativeElement.parentElement.getBoundingClientRect().left;
    this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'width', window.innerWidth + 'px');
    this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'top', top + 'px');
    this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'left', -left + 'px');
  }

  selectFontSize($event: Option) {
    $(".gd-wrapper").off("keyup");
    this.outFontSize.emit($event.value);
    $(".gd-wrapper").on("keyup", () => {
      const fontElements = document.getElementsByTagName("font");
      for (let i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].getAttribute('size') === "7") {
          fontElements[i].removeAttribute("size");
          fontElements[i].style.fontSize = $event + "px";
        }
      }
    });
  }

  selectFont($event: Option) {
    event.preventDefault();
    event.stopPropagation();
    this.outFont.emit($event.value);
  }

  toggleColorPicker($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.colorPickerShow = !this.colorPickerShow;
  }

  selectColor($event: string) {
    this.colorPickerShow = false;
    this.outColor.emit($event);
  }

  toggleBold(event) {
    event.preventDefault();
    event.stopPropagation();
    this.outBold.emit(!this.bold);
  }

  toggleItalic(event) {
    event.preventDefault();
    event.stopPropagation();
    this.outItalic.emit(!this.italic);
  }

  toggleUnderline(event) {
    event.preventDefault();
    event.stopPropagation();
    this.outUnderline.emit(!this.underline);
  }

  closePicker($event) {
    this.colorPickerShow = !$event;
  }
}
