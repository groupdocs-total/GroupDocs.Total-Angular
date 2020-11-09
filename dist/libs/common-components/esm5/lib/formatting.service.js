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
    /**
     * @return {?}
     */
    Formatting.default = /**
     * @return {?}
     */
    function () {
        return new Formatting(10, '#000000', '#FFFFFF', false, false, false, 'Arial', false, "", "");
    };
    return Formatting;
}());
export { Formatting };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdHRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUNFLG9CQUFZLFFBQWdCLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxJQUFhLEVBQUUsTUFBZSxFQUFFLFNBQWtCLEVBQUUsSUFBWSxFQUFFLFNBQWtCLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDN0ssSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQWFhLGtCQUFPOzs7SUFBckI7UUFDRSxPQUFPLElBQUksVUFBVSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7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QUM1RiwrQ0FBNkQ7Ozs7O0lBQzdELG1EQUFzRzs7Ozs7SUFDdEcsMENBQXdEOzs7OztJQUN4RCxrQ0FBZ0Y7Ozs7O0lBQ2hGLDBDQUF3RDs7Ozs7SUFDeEQsa0NBQWdGOzs7OztJQUNoRiw0Q0FBMEQ7Ozs7O0lBQzFELGdEQUFnRzs7Ozs7SUFDaEcsMkNBQXdEOzs7OztJQUN4RCwrQ0FBNkY7Ozs7O0lBQzdGLDZDQUEwRDs7Ozs7SUFDMUQsaURBQWlHOzs7OztJQUNqRyw4Q0FBMkQ7Ozs7O0lBQzNELGtEQUFtRzs7Ozs7SUFDbkcsMENBQXVEOzs7OztJQUN2RCw4Q0FBMkY7Ozs7O0lBQzNGLCtDQUE2RDs7Ozs7SUFDN0QsbURBQXNHOzs7OztJQUN0RywyQ0FBd0Q7Ozs7O0lBQ3hELCtDQUE2Rjs7Ozs7SUFDN0YsMENBQXVEOzs7OztJQUN2RCw4Q0FBMkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZyB7XHJcbiAgY29uc3RydWN0b3IoZm9udFNpemU6IG51bWJlciwgY29sb3I6IHN0cmluZywgYmdDb2xvcjogc3RyaW5nLCBib2xkOiBib29sZWFuLCBpdGFsaWM6IGJvb2xlYW4sIHVuZGVybGluZTogYm9vbGVhbiwgZm9udDogc3RyaW5nLCBzdHJpa2VvdXQ6IGJvb2xlYW4sIGFsaWduOiBzdHJpbmcsIGxpc3Q6IHN0cmluZykge1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5iZ0NvbG9yID0gYmdDb2xvcjtcclxuICAgIHRoaXMuYm9sZCA9IGJvbGQ7XHJcbiAgICB0aGlzLml0YWxpYyA9IGl0YWxpYztcclxuICAgIHRoaXMudW5kZXJsaW5lID0gdW5kZXJsaW5lO1xyXG4gICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgIHRoaXMuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xyXG4gICAgdGhpcy5hbGlnbiA9IGFsaWduO1xyXG4gICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICB9XHJcblxyXG4gIGJvbGQ6IGJvb2xlYW47XHJcbiAgaXRhbGljOiBib29sZWFuO1xyXG4gIHVuZGVybGluZTogYm9vbGVhbjtcclxuICBmb250U2l6ZTogbnVtYmVyO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgYmdDb2xvcjogc3RyaW5nO1xyXG4gIGZvbnQ6IHN0cmluZztcclxuICBzdHJpa2VvdXQ6IGJvb2xlYW47XHJcbiAgYWxpZ246IHN0cmluZztcclxuICBsaXN0OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdCgpOiBGb3JtYXR0aW5nIHtcclxuICAgIHJldHVybiBuZXcgRm9ybWF0dGluZygxMCwgJyMwMDAwMDAnLCAnI0ZGRkZGRicsIGZhbHNlLCBmYWxzZSwgZmFsc2UsICdBcmlhbCcsIGZhbHNlLCBcIlwiLCBcIlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXR0aW5nU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJCb2xkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRCb2xkQ2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJCb2xkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX29ic2VydmVyVW5kZXJsaW5lOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRVbmRlcmxpbmVDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlclVuZGVybGluZS5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlclVuZG86IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3VuZG86IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlclVuZG8uYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJSZWRvOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9yZWRvOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJSZWRvLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX29ic2VydmVySXRhbGljOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRJdGFsaWNDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlckl0YWxpYy5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlckNvbG9yOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdENvbG9yQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckNvbG9yLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX29ic2VydmVyQmdDb2xvcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRCZ0NvbG9yQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckJnQ29sb3IuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJGb250U2l6ZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRGb250U2l6ZUNoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXJGb250U2l6ZS5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlckZvbnQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0Rm9udENoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJGb250LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX29ic2VydmVyU3RyaWtlb3V0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRTdHJpa2VvdXRDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlclN0cmlrZW91dC5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9vYnNlcnZlckFsaWduOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdEFsaWduQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckFsaWduLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX29ic2VydmVyTGlzdDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRMaXN0Q2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckxpc3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdEJvbGRDaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0Qm9sZENoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRVbmRlcmxpbmVDaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0VW5kZXJsaW5lQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdENvbG9yQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdENvbG9yQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdEJnQ29sb3JDaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0QmdDb2xvckNoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRGb250U2l6ZUNoYW5nZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtYXRGb250U2l6ZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRGb250Q2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEZvbnRDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgdW5kbygpIHtcclxuICAgIHJldHVybiB0aGlzLl91bmRvO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZG8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVkbztcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRJdGFsaWNDaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRhbGljQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdFN0cmlrZW91dENoYW5nZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtYXRTdHJpa2VvdXRDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0QWxpZ25DaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0QWxpZ25DaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0TGlzdENoYW5nZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtYXRMaXN0Q2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZUZvbnRTaXplT3B0aW9uKHZhbDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWwsIG5hbWU6IHZhbCArICdweCcsIHNlcGFyYXRvcjogZmFsc2V9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Rm9udFNpemVPcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgRm9ybWF0dGluZ1NlcnZpY2UuY3JlYXRlRm9udFNpemVPcHRpb24oOCksXHJcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDEwKSxcclxuICAgICAgRm9ybWF0dGluZ1NlcnZpY2UuY3JlYXRlRm9udFNpemVPcHRpb24oMTIpLFxyXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigxNCksXHJcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDE2KSxcclxuICAgICAgRm9ybWF0dGluZ1NlcnZpY2UuY3JlYXRlRm9udFNpemVPcHRpb24oMTgpLFxyXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbigyMCksXHJcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDIyKSxcclxuICAgICAgRm9ybWF0dGluZ1NlcnZpY2UuY3JlYXRlRm9udFNpemVPcHRpb24oMjQpLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVGb250T3B0aW9uKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWwsIG5hbWU6IHZhbCwgc2VwYXJhdG9yOiBmYWxzZX1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRGb250T3B0aW9ucygpIHtcclxuICAgIGNvbnN0IGZvbnRzID0gW1wiQXJpYWxcIiwgXCJDYWxpYnJpXCIsIFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJDb21pYyBTYW5zXCIsIFwiQ29uc29sYXNcIiwgXCJDb3VyaWVyXCIsIFwiRGVqYXZ1IFNhbnNcIiwgXCJEZWphdnUgU2VyaWZcIiwgXCJHZW9yZ2lhXCIsIFwiR2lsbCBTYW5zXCIsIFwiSGVsdmV0aWNhXCIsIFwiSW1wYWN0XCIsIFwiTHVjaWRhIFNhbnNcIixcclxuICAgICAgXCJNeXJpYWQgUHJvXCIsIFwiT3BlbiBTYW5zXCIsIFwiUGFsYXRpbm9cIiwgXCJUYWhvbWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJUcmVidWNoZXRcIl07XHJcbiAgICBjb25zdCBmb250T3B0aW9ucyA9IFtdO1xyXG4gICAgZm9udHMuZm9yRWFjaChmb250ID0+IHtcclxuICAgICAgZm9udE9wdGlvbnMucHVzaCh0aGlzLmNyZWF0ZUZvbnRPcHRpb24oZm9udCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZm9udE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGb3JtYXRGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJGb250U2l6ZS5uZXh0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGb3JtYXRCb2xkKGJvbGQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29ic2VydmVyQm9sZC5uZXh0KGJvbGQpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRm9ybWF0VW5kZXJsaW5lKHVuZGVybGluZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJVbmRlcmxpbmUubmV4dCh1bmRlcmxpbmUpO1xyXG4gIH1cclxuXHJcbiAgVW5kbygpIHtcclxuICAgIHRoaXMuX29ic2VydmVyVW5kby5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBSZWRvKCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJSZWRvLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUZvcm1hdEl0YWxpYyhpdGFsaWM6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29ic2VydmVySXRhbGljLm5leHQoaXRhbGljKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUZvcm1hdENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX29ic2VydmVyQ29sb3IubmV4dChjb2xvcik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGb3JtYXRCZ0NvbG9yKGJnY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJCZ0NvbG9yLm5leHQoYmdjb2xvcik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGb3JtYXRGb250KGZvbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXJGb250Lm5leHQoZm9udCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGb3JtYXRTdHJpa2VvdXQoc3RyaWtlb3V0OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlclN0cmlrZW91dC5uZXh0KHN0cmlrZW91dCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGb3JtYXRBbGlnbihhbGlnbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlckFsaWduLm5leHQoYWxpZ24pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRm9ybWF0TGlzdChsaXN0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX29ic2VydmVyTGlzdC5uZXh0KGxpc3QpO1xyXG4gIH1cclxufVxyXG4iXX0=