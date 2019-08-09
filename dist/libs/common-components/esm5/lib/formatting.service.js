/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
var Formatting = /** @class */ (function () {
    function Formatting(fontSize, color, bgColor, bold, italic, underline, font, strikeout, align, list) {
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
    Formatting.DEFAULT = new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
    return Formatting;
}());
export { Formatting };
if (false) {
    /** @type {?} */
    Formatting.DEFAULT;
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
var FormattingService = /** @class */ (function () {
    function FormattingService() {
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
    Object.defineProperty(FormattingService.prototype, "formatBoldChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatBoldChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatUnderlineChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatUnderlineChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatColorChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatColorChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatBgColorChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatBgColorChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatFontSizeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatFontSizeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatFontChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatFontChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "undo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._undo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "redo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._redo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatItalicChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatItalicChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatStrikeoutChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatStrikeoutChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatAlignChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatAlignChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatListChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatListChange;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val
     * @return {?}
     */
    FormattingService.createFontSizeOption = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return { value: val, name: val + 'px', separator: false };
    };
    /**
     * @return {?}
     */
    FormattingService.getFontSizeOptions = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    FormattingService.createFontOption = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return { value: val, name: val, separator: false };
    };
    /**
     * @return {?}
     */
    FormattingService.getFontOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fonts = ["Arial", "Calibri", "Century Gothic", "Comic Sans", "Consolas", "Courier", "Dejavu Sans", "Dejavu Serif", "Georgia", "Gill Sans", "Helvetica", "Impact", "Lucida Sans",
            "Myriad Pro", "Open Sans", "Palatino", "Tahoma", "Times New Roman", "Trebuchet"];
        /** @type {?} */
        var fontOptions = [];
        fonts.forEach((/**
         * @param {?} font
         * @return {?}
         */
        function (font) {
            fontOptions.push(_this.createFontOption(font));
        }));
        return fontOptions;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormattingService.prototype.changeFormatFontSize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._observerFontSize.next($event);
    };
    /**
     * @param {?} bold
     * @return {?}
     */
    FormattingService.prototype.changeFormatBold = /**
     * @param {?} bold
     * @return {?}
     */
    function (bold) {
        this._observerBold.next(bold);
    };
    /**
     * @param {?} underline
     * @return {?}
     */
    FormattingService.prototype.changeFormatUnderline = /**
     * @param {?} underline
     * @return {?}
     */
    function (underline) {
        this._observerUnderline.next(underline);
    };
    /**
     * @return {?}
     */
    FormattingService.prototype.Undo = /**
     * @return {?}
     */
    function () {
        this._observerUndo.next();
    };
    /**
     * @return {?}
     */
    FormattingService.prototype.Redo = /**
     * @return {?}
     */
    function () {
        this._observerRedo.next();
    };
    /**
     * @param {?} italic
     * @return {?}
     */
    FormattingService.prototype.changeFormatItalic = /**
     * @param {?} italic
     * @return {?}
     */
    function (italic) {
        this._observerItalic.next(italic);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    FormattingService.prototype.changeFormatColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this._observerColor.next(color);
    };
    /**
     * @param {?} bgcolor
     * @return {?}
     */
    FormattingService.prototype.changeFormatBgColor = /**
     * @param {?} bgcolor
     * @return {?}
     */
    function (bgcolor) {
        this._observerBgColor.next(bgcolor);
    };
    /**
     * @param {?} font
     * @return {?}
     */
    FormattingService.prototype.changeFormatFont = /**
     * @param {?} font
     * @return {?}
     */
    function (font) {
        this._observerFont.next(font);
    };
    /**
     * @param {?} strikeout
     * @return {?}
     */
    FormattingService.prototype.changeFormatStrikeout = /**
     * @param {?} strikeout
     * @return {?}
     */
    function (strikeout) {
        this._observerStrikeout.next(strikeout);
    };
    /**
     * @param {?} align
     * @return {?}
     */
    FormattingService.prototype.changeFormatAlign = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        this._observerAlign.next(align);
    };
    /**
     * @param {?} list
     * @return {?}
     */
    FormattingService.prototype.changeFormatList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this._observerList.next(list);
    };
    return FormattingService;
}());
export { FormattingService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdHRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUdFLG9CQUFZLFFBQWdCLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxJQUFhLEVBQUUsTUFBZSxFQUFFLFNBQWtCLEVBQUUsSUFBWSxFQUFFLFNBQWtCLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDN0ssSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQWJNLGtCQUFPLEdBQWUsSUFBSSxVQUFVLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUF5QnJILGlCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksVUFBVTs7O0lBQ3JCLG1CQUFtSDs7SUFl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K0NBQTZEOzs7OztJQUM3RCxtREFBc0c7Ozs7O0lBQ3RHLDBDQUF3RDs7Ozs7SUFDeEQsa0NBQWdGOzs7OztJQUNoRiwwQ0FBd0Q7Ozs7O0lBQ3hELGtDQUFnRjs7Ozs7SUFDaEYsNENBQTBEOzs7OztJQUMxRCxnREFBZ0c7Ozs7O0lBQ2hHLDJDQUF3RDs7Ozs7SUFDeEQsK0NBQTZGOzs7OztJQUM3Riw2Q0FBMEQ7Ozs7O0lBQzFELGlEQUFpRzs7Ozs7SUFDakcsOENBQTJEOzs7OztJQUMzRCxrREFBbUc7Ozs7O0lBQ25HLDBDQUF1RDs7Ozs7SUFDdkQsOENBQTJGOzs7OztJQUMzRiwrQ0FBNkQ7Ozs7O0lBQzdELG1EQUFzRzs7Ozs7SUFDdEcsMkNBQXdEOzs7OztJQUN4RCwrQ0FBNkY7Ozs7O0lBQzdGLDBDQUF1RDs7Ozs7SUFDdkQsOENBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZyB7XG4gIHN0YXRpYyBERUZBVUxUOiBGb3JtYXR0aW5nID0gbmV3IEZvcm1hdHRpbmcoMTAsICcjMDAwMDAwJywgJyNGRkZGRkYnLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAnQXJpYWwnLCBmYWxzZSwgXCJcIiwgXCJcIik7XG5cbiAgY29uc3RydWN0b3IoZm9udFNpemU6IG51bWJlciwgY29sb3I6IHN0cmluZywgYmdDb2xvcjogc3RyaW5nLCBib2xkOiBib29sZWFuLCBpdGFsaWM6IGJvb2xlYW4sIHVuZGVybGluZTogYm9vbGVhbiwgZm9udDogc3RyaW5nLCBzdHJpa2VvdXQ6IGJvb2xlYW4sIGFsaWduOiBzdHJpbmcsIGxpc3Q6IHN0cmluZykge1xuICAgIHRoaXMuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5iZ0NvbG9yID0gYmdDb2xvcjtcbiAgICB0aGlzLmJvbGQgPSBib2xkO1xuICAgIHRoaXMuaXRhbGljID0gaXRhbGljO1xuICAgIHRoaXMudW5kZXJsaW5lID0gdW5kZXJsaW5lO1xuICAgIHRoaXMuZm9udCA9IGZvbnQ7XG4gICAgdGhpcy5zdHJpa2VvdXQgPSBzdHJpa2VvdXQ7XG4gICAgdGhpcy5hbGlnbiA9IGFsaWduO1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cblxuICBib2xkOiBib29sZWFuO1xuICBpdGFsaWM6IGJvb2xlYW47XG4gIHVuZGVybGluZTogYm9vbGVhbjtcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgYmdDb2xvcjogc3RyaW5nO1xuICBmb250OiBzdHJpbmc7XG4gIHN0cmlrZW91dDogYm9vbGVhbjtcbiAgYWxpZ246IHN0cmluZztcbiAgbGlzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9vYnNlcnZlckJvbGQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRCb2xkQ2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJCb2xkLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlclVuZGVybGluZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdFVuZGVybGluZUNoYW5nZTogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyVW5kZXJsaW5lLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlclVuZG86IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF91bmRvOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJVbmRvLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlclJlZG86IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZWRvOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJSZWRvLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlckl0YWxpYzogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdEl0YWxpY0NoYW5nZTogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVySXRhbGljLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlckNvbG9yOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRDb2xvckNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJDb2xvci5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJCZ0NvbG9yOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRCZ0NvbG9yQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckJnQ29sb3IuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyRm9udFNpemU6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdEZvbnRTaXplQ2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLl9vYnNlcnZlckZvbnRTaXplLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlckZvbnQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdEZvbnRDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyRm9udC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJTdHJpa2VvdXQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRTdHJpa2VvdXRDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlclN0cmlrZW91dC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJBbGlnbjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0QWxpZ25DaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyQWxpZ24uYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyTGlzdDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0TGlzdENoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJMaXN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IGZvcm1hdEJvbGRDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEJvbGRDaGFuZ2U7XG4gIH1cblxuICBnZXQgZm9ybWF0VW5kZXJsaW5lQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRVbmRlcmxpbmVDaGFuZ2U7XG4gIH1cblxuICBnZXQgZm9ybWF0Q29sb3JDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdENvbG9yQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdEJnQ29sb3JDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEJnQ29sb3JDaGFuZ2U7XG4gIH1cblxuICBnZXQgZm9ybWF0Rm9udFNpemVDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEZvbnRTaXplQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdEZvbnRDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEZvbnRDaGFuZ2U7XG4gIH1cblxuICBnZXQgdW5kbygpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5kbztcbiAgfVxuXG4gIGdldCByZWRvKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRvO1xuICB9XG5cbiAgZ2V0IGZvcm1hdEl0YWxpY0NoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRhbGljQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdFN0cmlrZW91dENoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0U3RyaWtlb3V0Q2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdEFsaWduQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRBbGlnbkNoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRMaXN0Q2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRMaXN0Q2hhbmdlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZvbnRTaXplT3B0aW9uKHZhbDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsLCBuYW1lOiB2YWwgKyAncHgnLCBzZXBhcmF0b3I6IGZhbHNlfVxuICB9XG5cbiAgc3RhdGljIGdldEZvbnRTaXplT3B0aW9ucygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgRm9ybWF0dGluZ1NlcnZpY2UuY3JlYXRlRm9udFNpemVPcHRpb24oOCksXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigxMCksXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigxMiksXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigxNCksXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigxNiksXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigxOCksXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigyMCksXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigyMiksXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigyNCksXG4gICAgXTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGb250T3B0aW9uKHZhbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsLCBuYW1lOiB2YWwsIHNlcGFyYXRvcjogZmFsc2V9XG4gIH1cblxuICBzdGF0aWMgZ2V0Rm9udE9wdGlvbnMoKSB7XG4gICAgY29uc3QgZm9udHMgPSBbXCJBcmlhbFwiLCBcIkNhbGlicmlcIiwgXCJDZW50dXJ5IEdvdGhpY1wiLCBcIkNvbWljIFNhbnNcIiwgXCJDb25zb2xhc1wiLCBcIkNvdXJpZXJcIiwgXCJEZWphdnUgU2Fuc1wiLCBcIkRlamF2dSBTZXJpZlwiLCBcIkdlb3JnaWFcIiwgXCJHaWxsIFNhbnNcIiwgXCJIZWx2ZXRpY2FcIiwgXCJJbXBhY3RcIiwgXCJMdWNpZGEgU2Fuc1wiLFxuICAgICAgXCJNeXJpYWQgUHJvXCIsIFwiT3BlbiBTYW5zXCIsIFwiUGFsYXRpbm9cIiwgXCJUYWhvbWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJUcmVidWNoZXRcIl07XG4gICAgY29uc3QgZm9udE9wdGlvbnMgPSBbXTtcbiAgICBmb250cy5mb3JFYWNoKGZvbnQ9PiB7XG4gICAgICBmb250T3B0aW9ucy5wdXNoKHRoaXMuY3JlYXRlRm9udE9wdGlvbihmb250KSk7XG4gICAgfSlcblxuICAgIHJldHVybiBmb250T3B0aW9ucztcbiAgfVxuXG4gIGNoYW5nZUZvcm1hdEZvbnRTaXplKCRldmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJGb250U2l6ZS5uZXh0KCRldmVudCk7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRCb2xkKGJvbGQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vYnNlcnZlckJvbGQubmV4dChib2xkKTtcbiAgfVxuXG4gIGNoYW5nZUZvcm1hdFVuZGVybGluZSh1bmRlcmxpbmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vYnNlcnZlclVuZGVybGluZS5uZXh0KHVuZGVybGluZSk7XG4gIH1cblxuICBVbmRvKCkge1xuICAgIHRoaXMuX29ic2VydmVyVW5kby5uZXh0KCk7XG4gIH1cblxuICBSZWRvKCkge1xuICAgIHRoaXMuX29ic2VydmVyUmVkby5uZXh0KCk7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRJdGFsaWMoaXRhbGljOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJJdGFsaWMubmV4dChpdGFsaWMpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyQ29sb3IubmV4dChjb2xvcik7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRCZ0NvbG9yKGJnY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyQmdDb2xvci5uZXh0KGJnY29sb3IpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0Rm9udChmb250OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYnNlcnZlckZvbnQubmV4dChmb250KTtcbiAgfVxuXG4gIGNoYW5nZUZvcm1hdFN0cmlrZW91dChzdHJpa2VvdXQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vYnNlcnZlclN0cmlrZW91dC5uZXh0KHN0cmlrZW91dCk7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRBbGlnbihhbGlnbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJBbGlnbi5uZXh0KGFsaWduKTtcbiAgfVxuXG4gIGNoYW5nZUZvcm1hdExpc3QobGlzdDogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJMaXN0Lm5leHQobGlzdCk7XG4gIH1cbn1cbiJdfQ==