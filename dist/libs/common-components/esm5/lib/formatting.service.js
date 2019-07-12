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
        return { value: val, name: val + 'px', separator: false, prefix: "px" };
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
        return { value: val, name: val, separator: false, prefix: "" };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdHRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUdFLG9CQUFZLFFBQWdCLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxJQUFhLEVBQUUsTUFBZSxFQUFFLFNBQWtCLEVBQUUsSUFBWSxFQUFFLFNBQWtCLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDN0ssSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQWJNLGtCQUFPLEdBQWUsSUFBSSxVQUFVLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUF5QnJILGlCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksVUFBVTs7O0lBQ3JCLG1CQUFtSDs7SUFl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SUE1SkMsMENBQXdEOzs7OztJQUN4RCw4Q0FBNEY7Ozs7O0lBQzVGLCtDQUE2RDs7Ozs7SUFDN0QsbURBQXNHOzs7OztJQUN0RywwQ0FBd0Q7Ozs7O0lBQ3hELGtDQUFnRjs7Ozs7SUFDaEYsMENBQXdEOzs7OztJQUN4RCxrQ0FBZ0Y7Ozs7O0lBQ2hGLDRDQUEwRDs7Ozs7SUFDMUQsZ0RBQWdHOzs7OztJQUNoRywyQ0FBd0Q7Ozs7O0lBQ3hELCtDQUE2Rjs7Ozs7SUFDN0YsNkNBQTBEOzs7OztJQUMxRCxpREFBaUc7Ozs7O0lBQ2pHLDhDQUEyRDs7Ozs7SUFDM0Qsa0RBQW1HOzs7OztJQUNuRywwQ0FBdUQ7Ozs7O0lBQ3ZELDhDQUEyRjs7Ozs7SUFDM0YsK0NBQTZEOzs7OztJQUM3RCxtREFBc0c7Ozs7O0lBQ3RHLDJDQUF3RDs7Ozs7SUFDeEQsK0NBQTZGOzs7OztJQUM3RiwwQ0FBdUQ7Ozs7O0lBQ3ZELDhDQUEyRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmcge1xuICBzdGF0aWMgREVGQVVMVDogRm9ybWF0dGluZyA9IG5ldyBGb3JtYXR0aW5nKDEwLCAnIzAwMDAwMCcsICcjRkZGRkZGJywgZmFsc2UsIGZhbHNlLCBmYWxzZSwgJ0FyaWFsJywgZmFsc2UsIFwiXCIsIFwiXCIpO1xuXG4gIGNvbnN0cnVjdG9yKGZvbnRTaXplOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJnQ29sb3I6IHN0cmluZywgYm9sZDogYm9vbGVhbiwgaXRhbGljOiBib29sZWFuLCB1bmRlcmxpbmU6IGJvb2xlYW4sIGZvbnQ6IHN0cmluZywgc3RyaWtlb3V0OiBib29sZWFuLCBhbGlnbjogc3RyaW5nLCBsaXN0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuYmdDb2xvciA9IGJnQ29sb3I7XG4gICAgdGhpcy5ib2xkID0gYm9sZDtcbiAgICB0aGlzLml0YWxpYyA9IGl0YWxpYztcbiAgICB0aGlzLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgIHRoaXMuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xuICAgIHRoaXMuYWxpZ24gPSBhbGlnbjtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG5cbiAgYm9sZDogYm9vbGVhbjtcbiAgaXRhbGljOiBib29sZWFuO1xuICB1bmRlcmxpbmU6IGJvb2xlYW47XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGJnQ29sb3I6IHN0cmluZztcbiAgZm9udDogc3RyaW5nO1xuICBzdHJpa2VvdXQ6IGJvb2xlYW47XG4gIGFsaWduOiBzdHJpbmc7XG4gIGxpc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJCb2xkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0Qm9sZENoYW5nZTogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyQm9sZC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJVbmRlcmxpbmU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRVbmRlcmxpbmVDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlclVuZGVybGluZS5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJVbmRvOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfdW5kbzogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyVW5kby5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJSZWRvOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVkbzogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyUmVkby5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJJdGFsaWM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRJdGFsaWNDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlckl0YWxpYy5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJDb2xvcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0Q29sb3JDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyQ29sb3IuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyQmdDb2xvcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0QmdDb2xvckNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJCZ0NvbG9yLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlckZvbnRTaXplOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRGb250U2l6ZUNoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXJGb250U2l6ZS5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJGb250OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRGb250Q2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckZvbnQuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyU3RyaWtlb3V0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0U3RyaWtlb3V0Q2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJTdHJpa2VvdXQuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyQWxpZ246IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdEFsaWduQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckFsaWduLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlckxpc3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdExpc3RDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyTGlzdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCBmb3JtYXRCb2xkQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRCb2xkQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdFVuZGVybGluZUNoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0VW5kZXJsaW5lQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdENvbG9yQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRDb2xvckNoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRCZ0NvbG9yQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRCZ0NvbG9yQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdEZvbnRTaXplQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRGb250U2l6ZUNoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRGb250Q2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRGb250Q2hhbmdlO1xuICB9XG5cbiAgZ2V0IHVuZG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuZG87XG4gIH1cblxuICBnZXQgcmVkbygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkbztcbiAgfVxuXG4gIGdldCBmb3JtYXRJdGFsaWNDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEl0YWxpY0NoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRTdHJpa2VvdXRDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdFN0cmlrZW91dENoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRBbGlnbkNoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0QWxpZ25DaGFuZ2U7XG4gIH1cblxuICBnZXQgZm9ybWF0TGlzdENoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0TGlzdENoYW5nZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGb250U2l6ZU9wdGlvbih2YWw6IG51bWJlcikge1xuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogdmFsICsgJ3B4Jywgc2VwYXJhdG9yOiBmYWxzZSwgcHJlZml4OiBcInB4XCJ9XG4gIH1cblxuICBzdGF0aWMgZ2V0Rm9udFNpemVPcHRpb25zKCkge1xuICAgIHJldHVybiBbXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbig4KSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDEwKSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDEyKSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDE0KSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDE2KSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDE4KSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDIwKSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDIyKSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDI0KSxcbiAgICBdO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZvbnRPcHRpb24odmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWwsIG5hbWU6IHZhbCwgc2VwYXJhdG9yOiBmYWxzZSwgcHJlZml4OiBcIlwifVxuICB9XG5cbiAgc3RhdGljIGdldEZvbnRPcHRpb25zKCkge1xuICAgIGNvbnN0IGZvbnRzID0gW1wiQXJpYWxcIiwgXCJDYWxpYnJpXCIsIFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJDb21pYyBTYW5zXCIsIFwiQ29uc29sYXNcIiwgXCJDb3VyaWVyXCIsIFwiRGVqYXZ1IFNhbnNcIiwgXCJEZWphdnUgU2VyaWZcIiwgXCJHZW9yZ2lhXCIsIFwiR2lsbCBTYW5zXCIsIFwiSGVsdmV0aWNhXCIsIFwiSW1wYWN0XCIsIFwiTHVjaWRhIFNhbnNcIixcbiAgICAgIFwiTXlyaWFkIFByb1wiLCBcIk9wZW4gU2Fuc1wiLCBcIlBhbGF0aW5vXCIsIFwiVGFob21hXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiVHJlYnVjaGV0XCJdO1xuICAgIGNvbnN0IGZvbnRPcHRpb25zID0gW107XG4gICAgZm9udHMuZm9yRWFjaChmb250PT4ge1xuICAgICAgZm9udE9wdGlvbnMucHVzaCh0aGlzLmNyZWF0ZUZvbnRPcHRpb24oZm9udCkpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZm9udE9wdGlvbnM7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xuICAgIHRoaXMuX29ic2VydmVyRm9udFNpemUubmV4dCgkZXZlbnQpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0Qm9sZChib2xkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJCb2xkLm5leHQoYm9sZCk7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRVbmRlcmxpbmUodW5kZXJsaW5lOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJVbmRlcmxpbmUubmV4dCh1bmRlcmxpbmUpO1xuICB9XG5cbiAgVW5kbygpIHtcbiAgICB0aGlzLl9vYnNlcnZlclVuZG8ubmV4dCgpO1xuICB9XG5cbiAgUmVkbygpIHtcbiAgICB0aGlzLl9vYnNlcnZlclJlZG8ubmV4dCgpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0SXRhbGljKGl0YWxpYzogYm9vbGVhbikge1xuICAgIHRoaXMuX29ic2VydmVySXRhbGljLm5leHQoaXRhbGljKTtcbiAgfVxuXG4gIGNoYW5nZUZvcm1hdENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYnNlcnZlckNvbG9yLm5leHQoY29sb3IpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0QmdDb2xvcihiZ2NvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYnNlcnZlckJnQ29sb3IubmV4dChiZ2NvbG9yKTtcbiAgfVxuXG4gIGNoYW5nZUZvcm1hdEZvbnQoZm9udDogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJGb250Lm5leHQoZm9udCk7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRTdHJpa2VvdXQoc3RyaWtlb3V0OiBib29sZWFuKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJTdHJpa2VvdXQubmV4dChzdHJpa2VvdXQpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0QWxpZ24oYWxpZ246IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyQWxpZ24ubmV4dChhbGlnbik7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRMaXN0KGxpc3Q6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyTGlzdC5uZXh0KGxpc3QpO1xuICB9XG59XG4iXX0=