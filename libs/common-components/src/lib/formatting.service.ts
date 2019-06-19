import {Observable, Subject} from "rxjs";

export class Formatting {
  static DEFAULT: Formatting = new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false);

  constructor(fontSize: number, color: string, bgColor: string, bold: boolean, italic: boolean, underline: boolean, font: string, strikeout: boolean) {
    this.fontSize = fontSize;
    this.color = color;
    this.bgColor = bgColor;
    this.bold = bold;
    this.italic = italic;
    this.underline = underline;
    this.font = font;
    this.strikeout = strikeout;
  }

  bold: boolean;
  italic: boolean;
  underline: boolean;
  fontSize: number;
  color: string;
  bgColor: string;
  font: string;
  strikeout: boolean;
}

export class FormattingService {
  private _observerBold: Subject<boolean> = new Subject();
  private readonly _formatBoldChange: Observable<boolean> = this._observerBold.asObservable();
  private _observerUnderline: Subject<boolean> = new Subject();
  private readonly _formatUnderlineChange: Observable<boolean> = this._observerUnderline.asObservable();
  private _observerUndo: Subject<boolean> = new Subject();
  private readonly _undo: Observable<boolean> = this._observerUndo.asObservable();
  private _observerRedo: Subject<boolean> = new Subject();
  private readonly _redo: Observable<boolean> = this._observerRedo.asObservable();
  private _observerItalic: Subject<boolean> = new Subject();
  private readonly _formatItalicChange: Observable<boolean> = this._observerItalic.asObservable();
  private _observerColor: Subject<string> = new Subject();
  private readonly _formatColorChange: Observable<string> = this._observerColor.asObservable();
  private _observerBgColor: Subject<string> = new Subject();
  private readonly _formatBgColorChange: Observable<string> = this._observerBgColor.asObservable();
  private _observerFontSize: Subject<number> = new Subject();
  private readonly _formatFontSizeChange: Observable<number> = this._observerFontSize.asObservable();
  private _observerFont: Subject<string> = new Subject();
  private readonly _formatFontChange: Observable<string> = this._observerFont.asObservable();
  private _observerStrikeout: Subject<boolean> = new Subject();
  private readonly _formatStrikeoutChange: Observable<boolean> = this._observerStrikeout.asObservable();

  constructor() {
  }

  get formatBoldChange() {
    return this._formatBoldChange;
  }

  get formatUnderlineChange() {
    return this._formatUnderlineChange;
  }

  get formatColorChange() {
    return this._formatColorChange;
  }

  get formatBgColorChange() {
    return this._formatBgColorChange;
  }

  get formatFontSizeChange() {
    return this._formatFontSizeChange;
  }

  get formatFontChange() {
    return this._formatFontChange;
  }

  get undo() {
    return this._undo;
  }

  get redo() {
    return this._redo;
  }

  get formatItalicChange() {
    return this._formatItalicChange;
  }

  get formatStrikeoutChange() {
    return this._formatStrikeoutChange;
  }

  changeFormatBold(bold: boolean) {
    this._observerBold.next(bold);
  }

  changeFormatUnderline(underline: boolean) {
    this._observerUnderline.next(underline);
  }

  Undo() {
    this._observerUndo.next();
  }

  Redo() {
    this._observerRedo.next();
  }

  changeFormatItalic(italic: boolean) {
    this._observerItalic.next(italic);
  }

  changeFormatColor(color: string) {
    this._observerColor.next(color);
  }

  changeFormatBgColor(bgcolor: string) {
    this._observerBgColor.next(bgcolor);
  }

  changeFormatFont(font: string) {
    this._observerFont.next(font);
  }

  static createFontSizeOption(val: number) {
    return {value: val, name: val + 'px', separator: false, prefix: "px"}
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

  changeFormatFontSize($event: number) {
    this._observerFontSize.next($event);
  }

  static createFontOption(val: string) {
    return {value: val, name: val, separator: false, prefix: ""}
  }

  static getFontOptions() {
    var fonts = ["Arial", "Calibri", "Century Gothic", "Comic Sans", "Consolas", "Courier", "Dejavu Sans", "Dejavu Serif", "Georgia", "Gill Sans", "Helvetica", "Impact", "Lucida Sans",
      "Myriad Pro", "Open Sans", "Palatino", "Tahoma", "Times New Roman", "Trebuchet"];
    var fontOptions = [];
    fonts.forEach(font=> {
      fontOptions.push(this.createFontOption(font));
    })

    return fontOptions;
  }

  changeFormatStrikeout(strikeout: boolean) {
    this._observerStrikeout.next(strikeout);
  }
}
