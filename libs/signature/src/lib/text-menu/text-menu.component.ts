import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormattingService, OnCloseService, Option} from "@groupdocs.examples.angular/common-components";
import * as jquery from 'jquery';

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

  @Output() outFontSize = new EventEmitter<number>();
  @Output() outFont = new EventEmitter<string>();
  @Output() outBold = new EventEmitter<boolean>();
  @Output() outItalic = new EventEmitter<boolean>();
  @Output() outUnderline = new EventEmitter<boolean>();
  @Output() outColor = new EventEmitter<string>();

  fontSizeOptions = FormattingService.getFontSizeOptions();
  fontOptions = FormattingService.getFontOptions();
  colorPickerShow = false;


  constructor(private _onCloseService: OnCloseService) {
    _onCloseService.onClose.subscribe(() => {
      this.colorPickerShow = false;
    });
  }

  ngOnInit() {
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

}
