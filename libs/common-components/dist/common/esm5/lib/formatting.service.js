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
        get: function () {
            return this._formatBoldChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatUnderlineChange", {
        get: function () {
            return this._formatUnderlineChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatColorChange", {
        get: function () {
            return this._formatColorChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatBgColorChange", {
        get: function () {
            return this._formatBgColorChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatFontSizeChange", {
        get: function () {
            return this._formatFontSizeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatFontChange", {
        get: function () {
            return this._formatFontChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "undo", {
        get: function () {
            return this._undo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "redo", {
        get: function () {
            return this._redo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatItalicChange", {
        get: function () {
            return this._formatItalicChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatStrikeoutChange", {
        get: function () {
            return this._formatStrikeoutChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatAlignChange", {
        get: function () {
            return this._formatAlignChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattingService.prototype, "formatListChange", {
        get: function () {
            return this._formatListChange;
        },
        enumerable: true,
        configurable: true
    });
    FormattingService.createFontSizeOption = function (val) {
        return { value: val, name: val + 'px', separator: false, prefix: "px" };
    };
    FormattingService.getFontSizeOptions = function () {
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
    FormattingService.createFontOption = function (val) {
        return { value: val, name: val, separator: false, prefix: "" };
    };
    FormattingService.getFontOptions = function () {
        var _this = this;
        var fonts = ["Arial", "Calibri", "Century Gothic", "Comic Sans", "Consolas", "Courier", "Dejavu Sans", "Dejavu Serif", "Georgia", "Gill Sans", "Helvetica", "Impact", "Lucida Sans",
            "Myriad Pro", "Open Sans", "Palatino", "Tahoma", "Times New Roman", "Trebuchet"];
        var fontOptions = [];
        fonts.forEach(function (font) {
            fontOptions.push(_this.createFontOption(font));
        });
        return fontOptions;
    };
    FormattingService.prototype.changeFormatFontSize = function ($event) {
        this._observerFontSize.next($event);
    };
    FormattingService.prototype.changeFormatBold = function (bold) {
        this._observerBold.next(bold);
    };
    FormattingService.prototype.changeFormatUnderline = function (underline) {
        this._observerUnderline.next(underline);
    };
    FormattingService.prototype.Undo = function () {
        this._observerUndo.next();
    };
    FormattingService.prototype.Redo = function () {
        this._observerRedo.next();
    };
    FormattingService.prototype.changeFormatItalic = function (italic) {
        this._observerItalic.next(italic);
    };
    FormattingService.prototype.changeFormatColor = function (color) {
        this._observerColor.next(color);
    };
    FormattingService.prototype.changeFormatBgColor = function (bgcolor) {
        this._observerBgColor.next(bgcolor);
    };
    FormattingService.prototype.changeFormatFont = function (font) {
        this._observerFont.next(font);
    };
    FormattingService.prototype.changeFormatStrikeout = function (strikeout) {
        this._observerStrikeout.next(strikeout);
    };
    FormattingService.prototype.changeFormatAlign = function (align) {
        this._observerAlign.next(align);
    };
    FormattingService.prototype.changeFormatList = function (list) {
        this._observerList.next(list);
    };
    return FormattingService;
}());
export { FormattingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdHRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDO0lBR0Usb0JBQVksUUFBZ0IsRUFBRSxLQUFhLEVBQUUsT0FBZSxFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsU0FBa0IsRUFBRSxJQUFZLEVBQUUsU0FBa0IsRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUM3SyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBYk0sa0JBQU8sR0FBZSxJQUFJLFVBQVUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQXlCckgsaUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSxVQUFVO0FBNEJ2QjtJQTBCRTtRQXpCUSxrQkFB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SUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsS0FBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0NBQW1CLEdBQW5CLFVBQW9CLE9BQWU7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGlEQUFxQixHQUFyQixVQUFzQixTQUFrQjtRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsS0FBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTdKRCxJQTZKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmcge1xuICBzdGF0aWMgREVGQVVMVDogRm9ybWF0dGluZyA9IG5ldyBGb3JtYXR0aW5nKDEwLCAnIzAwMDAwMCcsICcjRkZGRkZGJywgZmFsc2UsIGZhbHNlLCBmYWxzZSwgJ0FyaWFsJywgZmFsc2UsIFwiXCIsIFwiXCIpO1xuXG4gIGNvbnN0cnVjdG9yKGZvbnRTaXplOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGJnQ29sb3I6IHN0cmluZywgYm9sZDogYm9vbGVhbiwgaXRhbGljOiBib29sZWFuLCB1bmRlcmxpbmU6IGJvb2xlYW4sIGZvbnQ6IHN0cmluZywgc3RyaWtlb3V0OiBib29sZWFuLCBhbGlnbjogc3RyaW5nLCBsaXN0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuYmdDb2xvciA9IGJnQ29sb3I7XG4gICAgdGhpcy5ib2xkID0gYm9sZDtcbiAgICB0aGlzLml0YWxpYyA9IGl0YWxpYztcbiAgICB0aGlzLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgIHRoaXMuc3RyaWtlb3V0ID0gc3RyaWtlb3V0O1xuICAgIHRoaXMuYWxpZ24gPSBhbGlnbjtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG5cbiAgYm9sZDogYm9vbGVhbjtcbiAgaXRhbGljOiBib29sZWFuO1xuICB1bmRlcmxpbmU6IGJvb2xlYW47XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGJnQ29sb3I6IHN0cmluZztcbiAgZm9udDogc3RyaW5nO1xuICBzdHJpa2VvdXQ6IGJvb2xlYW47XG4gIGFsaWduOiBzdHJpbmc7XG4gIGxpc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJCb2xkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0Qm9sZENoYW5nZTogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyQm9sZC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJVbmRlcmxpbmU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRVbmRlcmxpbmVDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlclVuZGVybGluZS5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJVbmRvOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfdW5kbzogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyVW5kby5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJSZWRvOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVkbzogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyUmVkby5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJJdGFsaWM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRJdGFsaWNDaGFuZ2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9vYnNlcnZlckl0YWxpYy5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJDb2xvcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0Q29sb3JDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyQ29sb3IuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyQmdDb2xvcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0QmdDb2xvckNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fb2JzZXJ2ZXJCZ0NvbG9yLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlckZvbnRTaXplOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRGb250U2l6ZUNoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXJGb250U2l6ZS5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJGb250OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRGb250Q2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckZvbnQuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyU3RyaWtlb3V0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0U3RyaWtlb3V0Q2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXJTdHJpa2VvdXQuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX29ic2VydmVyQWxpZ246IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdEFsaWduQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlckFsaWduLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9vYnNlcnZlckxpc3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdExpc3RDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyTGlzdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCBmb3JtYXRCb2xkQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRCb2xkQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdFVuZGVybGluZUNoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0VW5kZXJsaW5lQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdENvbG9yQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRDb2xvckNoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRCZ0NvbG9yQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRCZ0NvbG9yQ2hhbmdlO1xuICB9XG5cbiAgZ2V0IGZvcm1hdEZvbnRTaXplQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRGb250U2l6ZUNoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRGb250Q2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRGb250Q2hhbmdlO1xuICB9XG5cbiAgZ2V0IHVuZG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuZG87XG4gIH1cblxuICBnZXQgcmVkbygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkbztcbiAgfVxuXG4gIGdldCBmb3JtYXRJdGFsaWNDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEl0YWxpY0NoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRTdHJpa2VvdXRDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdFN0cmlrZW91dENoYW5nZTtcbiAgfVxuXG4gIGdldCBmb3JtYXRBbGlnbkNoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0QWxpZ25DaGFuZ2U7XG4gIH1cblxuICBnZXQgZm9ybWF0TGlzdENoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0TGlzdENoYW5nZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGb250U2l6ZU9wdGlvbih2YWw6IG51bWJlcikge1xuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogdmFsICsgJ3B4Jywgc2VwYXJhdG9yOiBmYWxzZSwgcHJlZml4OiBcInB4XCJ9XG4gIH1cblxuICBzdGF0aWMgZ2V0Rm9udFNpemVPcHRpb25zKCkge1xuICAgIHJldHVybiBbXG4gICAgICBGb3JtYXR0aW5nU2VydmljZS5jcmVhdGVGb250U2l6ZU9wdGlvbig4KSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDEwKSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDEyKSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDE0KSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDE2KSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDE4KSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDIwKSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDIyKSxcbiAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLmNyZWF0ZUZvbnRTaXplT3B0aW9uKDI0KSxcbiAgICBdO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZvbnRPcHRpb24odmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWwsIG5hbWU6IHZhbCwgc2VwYXJhdG9yOiBmYWxzZSwgcHJlZml4OiBcIlwifVxuICB9XG5cbiAgc3RhdGljIGdldEZvbnRPcHRpb25zKCkge1xuICAgIGNvbnN0IGZvbnRzID0gW1wiQXJpYWxcIiwgXCJDYWxpYnJpXCIsIFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJDb21pYyBTYW5zXCIsIFwiQ29uc29sYXNcIiwgXCJDb3VyaWVyXCIsIFwiRGVqYXZ1IFNhbnNcIiwgXCJEZWphdnUgU2VyaWZcIiwgXCJHZW9yZ2lhXCIsIFwiR2lsbCBTYW5zXCIsIFwiSGVsdmV0aWNhXCIsIFwiSW1wYWN0XCIsIFwiTHVjaWRhIFNhbnNcIixcbiAgICAgIFwiTXlyaWFkIFByb1wiLCBcIk9wZW4gU2Fuc1wiLCBcIlBhbGF0aW5vXCIsIFwiVGFob21hXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiVHJlYnVjaGV0XCJdO1xuICAgIGNvbnN0IGZvbnRPcHRpb25zID0gW107XG4gICAgZm9udHMuZm9yRWFjaChmb250PT4ge1xuICAgICAgZm9udE9wdGlvbnMucHVzaCh0aGlzLmNyZWF0ZUZvbnRPcHRpb24oZm9udCkpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZm9udE9wdGlvbnM7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xuICAgIHRoaXMuX29ic2VydmVyRm9udFNpemUubmV4dCgkZXZlbnQpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0Qm9sZChib2xkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJCb2xkLm5leHQoYm9sZCk7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRVbmRlcmxpbmUodW5kZXJsaW5lOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJVbmRlcmxpbmUubmV4dCh1bmRlcmxpbmUpO1xuICB9XG5cbiAgVW5kbygpIHtcbiAgICB0aGlzLl9vYnNlcnZlclVuZG8ubmV4dCgpO1xuICB9XG5cbiAgUmVkbygpIHtcbiAgICB0aGlzLl9vYnNlcnZlclJlZG8ubmV4dCgpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0SXRhbGljKGl0YWxpYzogYm9vbGVhbikge1xuICAgIHRoaXMuX29ic2VydmVySXRhbGljLm5leHQoaXRhbGljKTtcbiAgfVxuXG4gIGNoYW5nZUZvcm1hdENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYnNlcnZlckNvbG9yLm5leHQoY29sb3IpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0QmdDb2xvcihiZ2NvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYnNlcnZlckJnQ29sb3IubmV4dChiZ2NvbG9yKTtcbiAgfVxuXG4gIGNoYW5nZUZvcm1hdEZvbnQoZm9udDogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJGb250Lm5leHQoZm9udCk7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRTdHJpa2VvdXQoc3RyaWtlb3V0OiBib29sZWFuKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJTdHJpa2VvdXQubmV4dChzdHJpa2VvdXQpO1xuICB9XG5cbiAgY2hhbmdlRm9ybWF0QWxpZ24oYWxpZ246IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyQWxpZ24ubmV4dChhbGlnbik7XG4gIH1cblxuICBjaGFuZ2VGb3JtYXRMaXN0KGxpc3Q6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyTGlzdC5uZXh0KGxpc3QpO1xuICB9XG59XG4iXX0=