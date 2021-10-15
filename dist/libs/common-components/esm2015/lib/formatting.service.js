/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class Formatting {
    /**
     * @param {?} fontSize
     * @param {?} color
     * @param {?} bgColor
     * @param {?} bold
     * @param {?} italic
     * @param {?} underline
     * @param {?} font
     * @param {?} strikeout
     * @param {?} align
     * @param {?} list
     */
    constructor(fontSize, color, bgColor, bold, italic, underline, font, strikeout, align, list) {
        this.fontSize = fontSize;
        this.color = color;
        this.bgColor = bgColor;
        this.bold = bold;
        this.italic = italic;
        this.underline = underline;
        this.font = font;
        this.strikeout = strikeout;
        this.align = align;
        this.list = list;
    }
    /**
     * @return {?}
     */
    static default() {
        return new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
    }
}
if (false) {
    /** @type {?} */
    Formatting.prototype.bold;
    /** @type {?} */
    Formatting.prototype.italic;
    /** @type {?} */
    Formatting.prototype.underline;
    /** @type {?} */
    Formatting.prototype.fontSize;
    /** @type {?} */
    Formatting.prototype.color;
    /** @type {?} */
    Formatting.prototype.bgColor;
    /** @type {?} */
    Formatting.prototype.font;
    /** @type {?} */
    Formatting.prototype.strikeout;
    /** @type {?} */
    Formatting.prototype.align;
    /** @type {?} */
    Formatting.prototype.list;
}
export class FormattingService {
    constructor() {
        this._observerBold = new Subject();
        this._formatBoldChange = this._observerBold.asObservable();
        this._observerUnderline = new Subject();
        this._formatUnderlineChange = this._observerUnderline.asObservable();
        this._observerUndo = new Subject();
        this._undo = this._observerUndo.asObservable();
        this._observerRedo = new Subject();
        this._redo = this._observerRedo.asObservable();
        this._observerItalic = new Subject();
        this._formatItalicChange = this._observerItalic.asObservable();
        this._observerColor = new Subject();
        this._formatColorChange = this._observerColor.asObservable();
        this._observerBgColor = new Subject();
        this._formatBgColorChange = this._observerBgColor.asObservable();
        this._observerFontSize = new Subject();
        this._formatFontSizeChange = this._observerFontSize.asObservable();
        this._observerFont = new Subject();
        this._formatFontChange = this._observerFont.asObservable();
        this._observerStrikeout = new Subject();
        this._formatStrikeoutChange = this._observerStrikeout.asObservable();
        this._observerAlign = new Subject();
        this._formatAlignChange = this._observerAlign.asObservable();
        this._observerList = new Subject();
        this._formatListChange = this._observerList.asObservable();
    }
    /**
     * @return {?}
     */
    get formatBoldChange() {
        return this._formatBoldChange;
    }
    /**
     * @return {?}
     */
    get formatUnderlineChange() {
        return this._formatUnderlineChange;
    }
    /**
     * @return {?}
     */
    get formatColorChange() {
        return this._formatColorChange;
    }
    /**
     * @return {?}
     */
    get formatBgColorChange() {
        return this._formatBgColorChange;
    }
    /**
     * @return {?}
     */
    get formatFontSizeChange() {
        return this._formatFontSizeChange;
    }
    /**
     * @return {?}
     */
    get formatFontChange() {
        return this._formatFontChange;
    }
    /**
     * @return {?}
     */
    get undo() {
        return this._undo;
    }
    /**
     * @return {?}
     */
    get redo() {
        return this._redo;
    }
    /**
     * @return {?}
     */
    get formatItalicChange() {
        return this._formatItalicChange;
    }
    /**
     * @return {?}
     */
    get formatStrikeoutChange() {
        return this._formatStrikeoutChange;
    }
    /**
     * @return {?}
     */
    get formatAlignChange() {
        return this._formatAlignChange;
    }
    /**
     * @return {?}
     */
    get formatListChange() {
        return this._formatListChange;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static createFontSizeOption(val) {
        return { value: val, name: val + 'px', separator: false };
    }
    /**
     * @return {?}
     */
    static getFontSizeOptions() {
        return [
            FormattingService.createFontSizeOption(8),
            FormattingService.createFontSizeOption(10),
            FormattingService.createFontSizeOption(12),
            FormattingService.createFontSizeOption(14),
            FormattingService.createFontSizeOption(16),
            FormattingService.createFontSizeOption(18),
            FormattingService.createFontSizeOption(20),
            FormattingService.createFontSizeOption(22),
            FormattingService.createFontSizeOption(24),
        ];
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static createFontOption(val) {
        return { value: val, name: val, separator: false };
    }
    /**
     * @return {?}
     */
    static getFontOptions() {
        /** @type {?} */
        const fonts = ["Arial", "Calibri", "Century Gothic", "Comic Sans", "Consolas", "Courier", "Dejavu Sans", "Dejavu Serif", "Georgia", "Gill Sans", "Helvetica", "Impact", "Lucida Sans",
            "Myriad Pro", "Open Sans", "Palatino", "Tahoma", "Times New Roman", "Trebuchet"];
        /** @type {?} */
        const fontOptions = [];
        fonts.forEach((/**
         * @param {?} font
         * @return {?}
         */
        font => {
            fontOptions.push(this.createFontOption(font));
        }));
        return fontOptions;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    changeFormatFontSize($event) {
        this._observerFontSize.next($event);
    }
    /**
     * @param {?} bold
     * @return {?}
     */
    changeFormatBold(bold) {
        this._observerBold.next(bold);
    }
    /**
     * @param {?} underline
     * @return {?}
     */
    changeFormatUnderline(underline) {
        this._observerUnderline.next(underline);
    }
    /**
     * @return {?}
     */
    Undo() {
        this._observerUndo.next();
    }
    /**
     * @return {?}
     */
    Redo() {
        this._observerRedo.next();
    }
    /**
     * @param {?} italic
     * @return {?}
     */
    changeFormatItalic(italic) {
        this._observerItalic.next(italic);
    }
    /**
     * @param {?} color
     * @return {?}
     */
    changeFormatColor(color) {
        this._observerColor.next(color);
    }
    /**
     * @param {?} bgcolor
     * @return {?}
     */
    changeFormatBgColor(bgcolor) {
        this._observerBgColor.next(bgcolor);
    }
    /**
     * @param {?} font
     * @return {?}
     */
    changeFormatFont(font) {
        this._observerFont.next(font);
    }
    /**
     * @param {?} strikeout
     * @return {?}
     */
    changeFormatStrikeout(strikeout) {
        this._observerStrikeout.next(strikeout);
    }
    /**
     * @param {?} align
     * @return {?}
     */
    changeFormatAlign(align) {
        this._observerAlign.next(align);
    }
    /**
     * @param {?} list
     * @return {?}
     */
    changeFormatList(list) {
        this._observerList.next(list);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerBold;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatBoldChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerUnderline;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatUnderlineChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerUndo;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._undo;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerRedo;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._redo;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerItalic;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatItalicChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerColor;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatColorChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerBgColor;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatBgColorChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerFontSize;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatFontSizeChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerFont;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatFontChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerStrikeout;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatStrikeoutChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerAlign;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatAlignChange;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._observerList;
    /**
     * @type {?}
     * @private
     */
    FormattingService.prototype._formatListChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdHRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QyxNQUFNLE9BQU8sVUFBVTs7Ozs7Ozs7Ozs7OztJQUNyQixZQUFZLFFBQWdCLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxJQUFhLEVBQUUsTUFBZSxFQUFFLFNBQWtCLEVBQUUsSUFBWSxFQUFFLFNBQWtCLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDN0ssSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQWFNLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU8sSUFBSSxVQUFVLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0YsQ0FBQztDQUNG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O0lBQzdELG1EQUFzRzs7Ozs7SUFDdEcsMkNBQXdEOzs7OztJQUN4RCwrQ0FBNkY7Ozs7O0lBQzdGLDBDQUF1RDs7Ozs7SUFDdkQsOENBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmcge1xyXG4gIGNvbnN0cnVjdG9yKGZvbnRTaXplOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJnQ29sb3I6IHN0cmluZywgYm9sZDogYm9vbGVhbiwgaXRhbGljOiBib29sZWFuLCB1bmRlcmxpbmU6IGJvb2xlYW4sIGZvbnQ6IHN0cmluZywgc3RyaWtlb3V0OiBib29sZWFuLCBhbGlnbjogc3RyaW5nLCBsaXN0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuYmdDb2xvciA9IGJnQ29sb3I7XHJcbiAgICB0aGlzLmJvbGQgPSBib2xkO1xyXG4gICAgdGhpcy5pdGFsaWMgPSBpdGFsaWM7XHJcbiAgICB0aGlzLnVuZGVybGluZSA9IHVuZGVybGluZTtcclxuICAgIHRoaXMuZm9udCA9IGZvbnQ7XHJcbiAgICB0aGlzLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcclxuICAgIHRoaXMuYWxpZ24gPSBhbGlnbjtcclxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgfVxyXG5cclxuICBib2xkOiBib29sZWFuO1xyXG4gIGl0YWxpYzogYm9vbGVhbjtcclxuICB1bmRlcmxpbmU6IGJvb2xlYW47XHJcbiAgZm9udFNpemU6IG51bWJlcjtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGJnQ29sb3I6IHN0cmluZztcclxuICBmb250OiBzdHJpbmc7XHJcbiAgc3RyaWtlb3V0OiBib29sZWFuO1xyXG4gIGFsaWduOiBzdHJpbmc7XHJcbiAgbGlzdDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHQoKTogRm9ybWF0dGluZyB7XHJcbiAgICByZXR1cm4gbmV3IEZvcm1hdHRpbmcoMTAsICcjMDAwMDAwJywgJyNGRkZGRkYnLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAnQXJpYWwnLCBmYWxzZSwgXCJcIiwgXCJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyQm9sZDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0Qm9sZENoYW5nZTogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyQm9sZC5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlclVuZGVybGluZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0VW5kZXJsaW5lQ2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJVbmRlcmxpbmUuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJVbmRvOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF91bmRvOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJVbmRvLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX29ic2VydmVyUmVkbzogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVkbzogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyUmVkby5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlckl0YWxpYzogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0SXRhbGljQ2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJJdGFsaWMuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJDb2xvcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRDb2xvckNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJDb2xvci5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlckJnQ29sb3I6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0QmdDb2xvckNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJCZ0NvbG9yLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX29ic2VydmVyRm9udFNpemU6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0Rm9udFNpemVDaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyRm9udFNpemUuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJGb250OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdEZvbnRDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyRm9udC5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlclN0cmlrZW91dDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0U3RyaWtlb3V0Q2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJTdHJpa2VvdXQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJBbGlnbjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRBbGlnbkNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJBbGlnbi5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlckxpc3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0TGlzdENoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJMaXN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRCb2xkQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEJvbGRDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0VW5kZXJsaW5lQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdFVuZGVybGluZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRDb2xvckNoYW5nZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtYXRDb2xvckNoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRCZ0NvbG9yQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEJnQ29sb3JDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0Rm9udFNpemVDaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0Rm9udFNpemVDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0Rm9udENoYW5nZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtYXRGb250Q2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVuZG8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdW5kbztcclxuICB9XHJcblxyXG4gIGdldCByZWRvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlZG87XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0SXRhbGljQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEl0YWxpY0NoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRTdHJpa2VvdXRDaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0U3RyaWtlb3V0Q2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdEFsaWduQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEFsaWduQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdExpc3RDaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0TGlzdENoYW5nZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVGb250U2l6ZU9wdGlvbih2YWw6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsLCBuYW1lOiB2YWwgKyAncHgnLCBzZXBhcmF0b3I6IGZhbHNlfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEZvbnRTaXplT3B0aW9ucygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDgpLFxyXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigxMCksXHJcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDEyKSxcclxuICAgICAgRm9ybWF0dGluZ1NlcnZpY2UuY3JlYXRlRm9udFNpemVPcHRpb24oMTQpLFxyXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigxNiksXHJcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDE4KSxcclxuICAgICAgRm9ybWF0dGluZ1NlcnZpY2UuY3JlYXRlRm9udFNpemVPcHRpb24oMjApLFxyXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigyMiksXHJcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDI0KSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlRm9udE9wdGlvbih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsLCBuYW1lOiB2YWwsIHNlcGFyYXRvcjogZmFsc2V9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Rm9udE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCBmb250cyA9IFtcIkFyaWFsXCIsIFwiQ2FsaWJyaVwiLCBcIkNlbnR1cnkgR290aGljXCIsIFwiQ29taWMgU2Fuc1wiLCBcIkNvbnNvbGFzXCIsIFwiQ291cmllclwiLCBcIkRlamF2dSBTYW5zXCIsIFwiRGVqYXZ1IFNlcmlmXCIsIFwiR2VvcmdpYVwiLCBcIkdpbGwgU2Fuc1wiLCBcIkhlbHZldGljYVwiLCBcIkltcGFjdFwiLCBcIkx1Y2lkYSBTYW5zXCIsXHJcbiAgICAgIFwiTXlyaWFkIFByb1wiLCBcIk9wZW4gU2Fuc1wiLCBcIlBhbGF0aW5vXCIsIFwiVGFob21hXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiVHJlYnVjaGV0XCJdO1xyXG4gICAgY29uc3QgZm9udE9wdGlvbnMgPSBbXTtcclxuICAgIGZvbnRzLmZvckVhY2goZm9udCA9PiB7XHJcbiAgICAgIGZvbnRPcHRpb25zLnB1c2godGhpcy5jcmVhdGVGb250T3B0aW9uKGZvbnQpKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGZvbnRPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRm9ybWF0Rm9udFNpemUoJGV2ZW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX29ic2VydmVyRm9udFNpemUubmV4dCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRm9ybWF0Qm9sZChib2xkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlckJvbGQubmV4dChib2xkKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUZvcm1hdFVuZGVybGluZSh1bmRlcmxpbmU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29ic2VydmVyVW5kZXJsaW5lLm5leHQodW5kZXJsaW5lKTtcclxuICB9XHJcblxyXG4gIFVuZG8oKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlclVuZG8ubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgUmVkbygpIHtcclxuICAgIHRoaXMuX29ic2VydmVyUmVkby5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGb3JtYXRJdGFsaWMoaXRhbGljOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlckl0YWxpYy5uZXh0KGl0YWxpYyk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGb3JtYXRDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlckNvbG9yLm5leHQoY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRm9ybWF0QmdDb2xvcihiZ2NvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX29ic2VydmVyQmdDb2xvci5uZXh0KGJnY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRm9ybWF0Rm9udChmb250OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX29ic2VydmVyRm9udC5uZXh0KGZvbnQpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRm9ybWF0U3RyaWtlb3V0KHN0cmlrZW91dDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJTdHJpa2VvdXQubmV4dChzdHJpa2VvdXQpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRm9ybWF0QWxpZ24oYWxpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJBbGlnbi5uZXh0KGFsaWduKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUZvcm1hdExpc3QobGlzdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlckxpc3QubmV4dChsaXN0KTtcclxuICB9XHJcbn1cclxuIl19