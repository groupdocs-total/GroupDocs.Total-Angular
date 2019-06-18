import {Directive, HostListener, OnInit} from '@angular/core';
import {FormattingService} from "./formatting.service";
import {BackFormattingService} from "./back-formatting.service";
import * as $ from 'jquery';

@Directive({
  selector: '[gdFormatting]'
})
export class FormattingDirective implements OnInit {

  private bold: boolean = false;
  private italic: boolean = false;
  private color: string;
  private bgColor: string;


  constructor(private _formattingService: FormattingService,
              private _backFormattingService: BackFormattingService) {
  }

  @HostListener('mouseup') mousedown() {
    let bold = document.queryCommandValue("bold");
    let italic = document.queryCommandValue("italic");
    this.bold = bold  && bold.endsWith('true');
    this.italic = italic  && italic.endsWith('true');
    this.bgColor = document.queryCommandValue("backColor");
    this.color = document.queryCommandValue("foreColor");
    this._backFormattingService.changeFormatBold(this.bold);
    this._backFormattingService.changeFormatItalic(this.italic);
    this._backFormattingService.changeFormatColor(this.color);
    this._backFormattingService.changeFormatBgColor(this.bgColor);
    this._backFormattingService.changeFormatFontSize(this.reportFontSize());
  }

  reportFontSize(): number {
    var containerEl, sel;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        containerEl = sel.getRangeAt(0).commonAncestorContainer;
        // Make sure we have an element rather than a text node
        if (containerEl.nodeType == 3) {
          containerEl = containerEl.parentNode;
        }
      }
    } else if ( (sel = document.getSelection()) && sel.type != "Control") {
      containerEl = sel.createRange().parentElement();
    }

    if (containerEl) {
      return parseInt(this.getComputedStyleProperty(containerEl, "fontSize").replace("px", ""));
    }
  }

  getComputedStyleProperty(el, propName) {
    if (window.getComputedStyle) {
      return window.getComputedStyle(el, null)[propName];
    } else if (el.currentStyle) {
      return el.currentStyle[propName];
    }
  }

  ngOnInit(): void {
    this._formattingService.formatBoldChange.subscribe((bold: boolean) => {
      this.bold = bold;
      this.toggleBold();
    });
    this._formattingService.formatItalicChange.subscribe((italic: boolean) => {
      this.italic = italic;
      this.toggleItalic();
    });
    this._formattingService.formatColorChange.subscribe(((color: string) => {
      this.color = color;
      this.setColor(color);
    }));
    this._formattingService.formatBgColorChange.subscribe(((bgcolor: string) => {
      this.bgColor = bgcolor;
      this.setBgColor(bgcolor);
    }));
    this._formattingService.formatFontSizeChange.subscribe(((fontSize: number) => {
      this.setFontSize(fontSize);
    }));
  }

  private toggleBold() {
    document.execCommand("bold");
  }

  private setBgColor(bgColor: string) {
    document.execCommand("backColor", false, bgColor);
  }

  private setColor(color: string) {
    document.execCommand("foreColor", false, color)
  }

  private setFontSize(fontSize: number) {
    if(document.getSelection().toString()) {

      // var spanString = $('<span/>', {
      //   'html': window.getSelection().getRangeAt(0).extractContents()
      // }).css('font-size', fontSize + "px").prop('outerHTML');
      // if(this.bold){
      //   spanString = $('<b/>', {
      //     'html': spanString
      //   }).prop('outerHTML');
      // }
      // if(this.italic){
      //   spanString = $('<i/>', {
      //     'html': spanString
      //   }).prop('outerHTML');
      // }


      var spanString = "<span style='font-size: " + fontSize + "px; color: " + this.color + "; background-color: " + this.bgColor + ";'>" + document.getSelection() + "</span>";
      if(this.bold){
        spanString = "<b>" + spanString + "</b>";
      }
      if(this.italic){
        spanString = "<i>" + spanString + "</i>";
      }
      document.execCommand('insertHTML', false, spanString);
    } else {
      document.execCommand("fontsize", false, "7");
    }
  }

  private toggleItalic() {
    document.execCommand("italic");
  }
}
