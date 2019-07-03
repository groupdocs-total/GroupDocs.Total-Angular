import {Directive, HostListener, OnInit} from '@angular/core';
import {FormattingService} from "./formatting.service";
import {BackFormattingService} from "./back-formatting.service";
import * as $ from 'jquery';
import {SelectionService} from './selection.service';

@Directive({
  selector: '[gdFormatting]'
})
export class FormattingDirective implements OnInit {

  private bold: boolean = false;
  private italic: boolean = false;
  private underline: boolean = false;
  private color: string;
  private bgColor: string;
  private font: string;
  private strikeout: boolean = false;
  private align: string;
  private list: string;

  constructor(private _formattingService: FormattingService,
              private _backFormattingService: BackFormattingService,
              private _selectionService: SelectionService) {
  }

  @HostListener('mouseup') mouseup() {

    this.bold = document.queryCommandState("bold");
    this.strikeout = document.queryCommandState("strikeThrough");
    this.italic = document.queryCommandState("italic");
    this.bgColor = document.queryCommandValue("backColor");
    this.underline = document.queryCommandState("underline");
    this.align = this.checkJustify();
    this.list = this.checkList();

    //fix required by FireFox to get correct background color
    if (this.bgColor == "transparent") {
      this.bgColor = $(window.getSelection().focusNode.parentNode).css('background-color').toString();
    }
    this.font = document.queryCommandValue("FontName").replace(/"/g, '');
    this.color = document.queryCommandValue("foreColor");
    this._backFormattingService.changeFormatBold(this.bold);
    this._backFormattingService.changeFormatUnderline(this.underline);
    this._backFormattingService.changeFormatItalic(this.italic);
    this._backFormattingService.changeFormatColor(this.color);
    this._backFormattingService.changeFormatBgColor(this.bgColor);
    this._backFormattingService.changeFormatFontSize(this.reportFontSize());
    this._backFormattingService.changeFormatFont(this.font);
    this._backFormattingService.changeFormatStrikeout(this.strikeout);
    this._backFormattingService.changeFormatAlign(this.align);
    this._backFormattingService.changeFormatList(this.list);
  }

  private checkJustify() {
    let align: string = "";
    align = document.queryCommandState("justifyCenter") ? "center" : align;
    align = document.queryCommandState("justifyFull") ? "full" : align;
    align = document.queryCommandState("justifyLeft") ? "left" : align;
    align = document.queryCommandState("justifyRight") ? "right" : align;
    return align;
  }

  private checkList() {
    let list: string = "";
    list = document.queryCommandState("insertUnorderedList") ? "unordered" : list;
    list = document.queryCommandState("insertOrderedList") ? "ordered" : list;
    return list;
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
    } else if ((sel = document.getSelection()) && sel.type != "Control") {
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
      this.bold = bold;
      this.toggleBold();
    });
    this._formattingService.formatUnderlineChange.subscribe((underline: boolean) => {
      this.underline = underline;
      this.toggleUnderline();
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

    this._formattingService.formatFontChange.subscribe(((font: string) => {
      this.font = font;
      this.setFont(font);
    }));
    this._formattingService.formatStrikeoutChange.subscribe((strikeout: boolean) => {
      this.strikeout = strikeout;
      this.toggleStrikeout();
    });
    this._formattingService.formatAlignChange.subscribe((align: string) => {
      this.align = align;
      this.toggleAlign(this.align);
    });
    this._formattingService.formatListChange.subscribe((list: string) => {
      this.list = list;
      this.toggleList(this.list);
    });
  }

  private toggleBold() {
    document.execCommand("bold");
    this._selectionService.refreshSelection();
  }

  private toggleUnderline() {
    document.execCommand("underline");
    this._selectionService.refreshSelection();
  }

  private toggleItalic() {
    document.execCommand("italic");
    this._selectionService.refreshSelection();
  }

  private setBgColor(bgColor: string) {
    document.execCommand("backColor", false, bgColor);
    this._selectionService.refreshSelection();
  }

  private setColor(color: string) {
    document.execCommand("foreColor", false, color);
    this._selectionService.refreshSelection();
  }

  private setFontSize(fontSize: number) {
    if (document.getSelection().toString()) {
      var spanString = "<span style='font-size: " + fontSize + "px; color: " + this.color + "; background-color: " + this.bgColor + "; font-family: " + this.font + "'>" +
        document.getSelection() + "</span>";
      if (this.bold) {
        spanString = "<b>" + spanString + "</b>";
      }
      if (this.italic) {
        spanString = "<i>" + spanString + "</i>";
      }
      if (this.underline) {
        spanString = "<u>" + spanString + "</u>";
      }
      if (this.strikeout) {
        spanString = "<strike>" + spanString + "</strike>";
      }
      document.execCommand('insertHTML', false, spanString);
    } else {
      document.execCommand("fontsize", false, "7");
    }
    this._selectionService.refreshSelection();
  }

  private toggleUndo() {
    document.execCommand("undo");
  }

  private toggleRedo() {
    document.execCommand("redo");
  }

  private setFont(font: string) {
    document.execCommand("fontName", false, font);
    this._selectionService.refreshSelection();
  }

  private toggleStrikeout() {
    document.execCommand("strikeThrough");
    this._selectionService.refreshSelection();
  }

  private toggleAlign(align: string) {
    document.execCommand("styleWithCSS", false, 'true');
    switch (align) {
      case 'center':
        document.execCommand('justifyCenter');
        break;
      case 'full':
        document.execCommand('justifyFull');
        break;
      case 'left':
        document.execCommand('justifyLeft');
        break;
      case 'right':
        document.execCommand('justifyRight');
        break;
    }
    this._selectionService.refreshSelection();
  }

  private toggleList(list: string) {
    switch (list) {
      case 'unordered':
        document.execCommand('insertUnorderedList');
        break;
      case 'ordered':
        document.execCommand('insertOrderedList');
        break;
    }
    this._selectionService.refreshSelection();
  }
}
