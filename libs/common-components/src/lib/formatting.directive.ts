import {Directive, HostListener, OnInit} from '@angular/core';
import {FormattingService} from "./formatting.service";
import {BackFormattingService} from "./back-formatting.service";
import * as $ from 'jquery';
import { SelectionService } from './selection.service';

@Directive({
  selector: '[gdFormatting]'
})
export class FormattingDirective implements OnInit {
  constructor(private _formattingService: FormattingService,
              private _backFormattingService: BackFormattingService,
              private _selectionService: SelectionService) {
  }

  @HostListener('mouseup') mousedown() {
    this._backFormattingService.changeFormatBold(document.queryCommandState("bold"));
    this._backFormattingService.changeFormatColor(document.queryCommandValue("foreColor"));
    this._backFormattingService.changeFormatBgColor(document.queryCommandValue("backColor"));
    this._backFormattingService.changeFormatFontSize(this.reportColourAndFontSize());
  }

  reportColourAndFontSize(): number {
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
    this._formattingService.undo.subscribe(() => {
      this.toggleUndo();
    });
    this._formattingService.redo.subscribe(() => {
      this.toggleRedo();
    });
    this._formattingService.formatBoldChange.subscribe((bold: boolean) => {
      this.toggleBold();
    });
    this._formattingService.formatColorChange.subscribe(((color: string) => {
      this.setColor(color);
    }));
    this._formattingService.formatBgColorChange.subscribe(((bgcolor: string) => {
      this.setBgColor(bgcolor);
    }));
    this._formattingService.formatFontSizeChange.subscribe(((fontSize: number) => {
      this.setFontSize(fontSize);
    }));
  }

  private toggleBold() {
    document.execCommand("bold");
    this._selectionService.refreshSelection()
  }

  private setBgColor(bgColor: string) {
    document.execCommand("backColor", false, bgColor);
    this._selectionService.refreshSelection()
  }

  private setColor(color: string) {
    document.execCommand("foreColor", false, color)
    this._selectionService.refreshSelection()
  }

  private setFontSize(fontSize: number) {
    if(document.getSelection().toString()) {
      var spanString = $('<span/>', {
        'text': document.getSelection()
      }).css('font-size', fontSize + "px").prop('outerHTML');

      document.execCommand('insertHTML', false, spanString);
    } else {
      document.execCommand("fontsize", false, "7");
    }
    this._selectionService.refreshSelection()
  }

  private toggleUndo() {
    document.execCommand("undo");
  }

  private toggleRedo() {
    document.execCommand("redo");
  }
}
