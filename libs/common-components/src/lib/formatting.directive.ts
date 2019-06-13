import {Directive, HostListener, OnInit} from '@angular/core';
import {Formatting, FormattingService} from "./formatting.service";

@Directive({
  selector: '[gdFormatting]'
})
export class FormattingDirective implements OnInit {
  private formatting: Formatting = Formatting.getDefault();

  constructor(private _formattingService: FormattingService) {
  }

  @HostListener('mousedown') mousedown() {
    this.formatting.bold = document.queryCommandState("bold");
    this._formattingService.changeFormatting(this.formatting);
  }

  ngOnInit(): void {
    this._formattingService.formattingChange.subscribe((formatting: Formatting) => {
      this.format(formatting);
    });
  }

  private format(formatting: Formatting) {
    if (this.formatting.bold != formatting.bold) {
      document.execCommand("bold");
    }
    if (this.formatting.color != formatting.color) {
      document.execCommand("foreColor", false, formatting.color)
    }
    if (this.formatting.bgColor != formatting.bgColor) {
      document.execCommand("backColor", false, formatting.bgColor)
    }
    this.formatting = Formatting.copy(formatting);
  }
}
