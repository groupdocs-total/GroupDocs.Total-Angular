import {Directive, OnInit} from '@angular/core';
import {Formatting, FormattingService} from "./formatting.service";

@Directive({
  selector: '[gdFormatting]'
})
export class FormattingDirective implements OnInit {
  private formatting: Formatting = Formatting.DEFAULT;

  constructor(private _formattingService: FormattingService) {
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
