import {Observable, Subject} from "rxjs";
export class Formatting {
  private static DEFAULT: Formatting = new Formatting(10, '#000000', '#FFFFFF', false);

  static getDefault() {
    return Formatting.copy(Formatting.DEFAULT);
  }

  static copy(formatting: Formatting) {
    return new Formatting(formatting.fontSize, formatting.color, formatting.bgColor, formatting.bold);
  }

  constructor(fontSize: number, color: string, bgColor: string, bold: boolean) {
    this.fontSize = fontSize;
    this.color = color;
    this.bgColor = bgColor;
    this.bold = bold;
  }

  bold: boolean;
  fontSize: number;
  color: string;
  bgColor: string;
}

export class FormattingService {
  private _observer: Subject<Formatting> = new Subject();
  private readonly _formattingChange: Observable<Formatting> = this._observer.asObservable();

  constructor() {
  }

  get formattingChange() {
    return this._formattingChange;
  }

  changeFormatting(formatting: Formatting) {
    this._observer.next(formatting);
  }

  static createFontSizeOption(val: number) {
    return {value: val, name: val + 'px', separator: false}
  }

  static getFontSizeOptions() {
    return [this.createFontSizeOption(8),
      this.createFontSizeOption(10),
      this.createFontSizeOption(12),
      this.createFontSizeOption(14),
      this.createFontSizeOption(16),
      this.createFontSizeOption(18),
      this.createFontSizeOption(20),
      this.createFontSizeOption(22),
      this.createFontSizeOption(24),
    ];
  }
}
