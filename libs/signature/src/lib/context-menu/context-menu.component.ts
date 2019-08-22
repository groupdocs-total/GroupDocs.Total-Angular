import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Formatting, FormattingService, OnCloseService, Option} from "@groupdocs.examples.angular/common-components";
import * as jquery from 'jquery';

const $ = jquery;

@Component({
  selector: 'gd-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.less']
})
export class ContextMenuComponent implements OnInit {
  @Input() formatting: Formatting = Formatting.DEFAULT;
  @Input() textMenu: boolean;
  @Input() topPosition: number;
  @Output() changeFormatting = new EventEmitter<Formatting>();
  @Output() removeSign = new EventEmitter<boolean>();

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

  saveChanges() {
    this.changeFormatting.emit(this.formatting);
  }

  selectFontSize($event: Option) {
    $(".gd-wrapper").off("keyup");
    this.formatting.fontSize = $event.value;
    this.saveChanges();
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
    this.formatting.font = $event.value;
    this.saveChanges();
  }

  toggleColorPicker() {
    this.colorPickerShow = !this.colorPickerShow;
  }

  selectColor($event: string) {
    this.colorPickerShow = false;
    this.formatting.color = $event;
    this.saveChanges();
  }

  toggleBold(event) {
    event.preventDefault();
    event.stopPropagation();
    this.formatting.bold = !this.formatting.bold;
    this.saveChanges();
  }

  toggleItalic(event) {
    event.preventDefault();
    event.stopPropagation();
    this.formatting.italic = !this.formatting.italic;
    this.saveChanges();
  }

  toggleUnderline(event) {
    event.preventDefault();
    event.stopPropagation();
    this.formatting.underline = !this.formatting.underline;
    this.saveChanges();
  }

  deleteSign() {
    this.removeSign.emit(true);
  }
}
