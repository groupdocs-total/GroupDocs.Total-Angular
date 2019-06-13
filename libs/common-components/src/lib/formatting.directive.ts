import {Directive, HostListener, OnInit} from '@angular/core';
import {FormattingService} from "./formatting.service";
import {BackFormattingService} from "./back-formatting.service";

@Directive({
  selector: '[gdFormatting]'
})
export class FormattingDirective implements OnInit {
  constructor(private _formattingService: FormattingService,
              private _backFormattingService: BackFormattingService) {
  }

  @HostListener('mouseup') mousedown() {
    let bold = document.queryCommandValue("bold");
    this._backFormattingService.changeFormatBold(bold  && bold.endsWith('true'));
    this._backFormattingService.changeFormatColor(document.queryCommandValue("foreColor"));
    this._backFormattingService.changeFormatBgColor(document.queryCommandValue("backColor"));
  }

  ngOnInit(): void {
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
  }

  private setBgColor(bgColor: string) {
    document.execCommand("backColor", false, bgColor);
  }

  private setColor(color: string) {
    document.execCommand("foreColor", false, color)
  }

  private setFontSize(fontSize: number) {
    document.execCommand('fontSize', false, fontSize.toString());
  }
}
