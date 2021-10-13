/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { FormattingService } from "./formatting.service";
import { BackFormattingService } from "./back-formatting.service";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
import { SelectionService } from './selection.service';
var FormattingDirective = /** @class */ (function () {
    function FormattingDirective(_formattingService, _backFormattingService, _selectionService) {
        this._formattingService = _formattingService;
        this._backFormattingService = _backFormattingService;
        this._selectionService = _selectionService;
        this.bold = false;
        this.italic = false;
        this.underline = false;
        this.strikeout = false;
        this.isIE = false;
        this.isIE = /*@cc_on!@*/ false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @return {?}
     */
    FormattingDirective.prototype.mouseup = /**
     * @return {?}
     */
    function () {
        this.bold = document.queryCommandState("bold");
        this.strikeout = document.queryCommandState("strikeThrough");
        this.italic = document.queryCommandState("italic");
        this.bgColor = document.queryCommandValue("backColor");
        this.underline = document.queryCommandState("underline");
        this.align = this.checkJustify();
        this.list = this.checkList();
        //fix required by FireFox to get correct background color
        if (this.bgColor === "transparent") {
            this.bgColor = $(window.getSelection().focusNode.parentNode).css('background-color').toString();
        }
        this.font = document.queryCommandValue("FontName").replace(/"/g, '');
        if (this.font.split(",").length > 1) {
            this.font = this.font.split(",")[0];
        }
        this.color = document.queryCommandValue("foreColor");
        this._backFormattingService.changeFormatBold(this.bold);
        this._backFormattingService.changeFormatUnderline(this.underline);
        this._backFormattingService.changeFormatItalic(this.italic);
        this._backFormattingService.changeFormatColor(this.color);
        this._backFormattingService.changeFormatBgColor(this.bgColor);
        this._backFormattingService.changeFormatFontSize(this.reportFontSize());
        this._backFormattingService.changeFormatFont(this.font);
        this._backFormattingService.changeFormatStrikeout(this.strikeout);
        this._backFormattingService.changeFormatAlign(this.align);
        this._backFormattingService.changeFormatList(this.list);
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.checkJustify = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var align = "";
        align = document.queryCommandState("justifyCenter") ? "center" : align;
        align = document.queryCommandState("justifyFull") ? "full" : align;
        align = document.queryCommandState("justifyLeft") ? "left" : align;
        align = document.queryCommandState("justifyRight") ? "right" : align;
        return align;
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.checkList = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = "";
        list = document.queryCommandState("insertUnorderedList") ? "unordered" : list;
        list = document.queryCommandState("insertOrderedList") ? "ordered" : list;
        return list;
    };
    /**
     * @return {?}
     */
    FormattingDirective.prototype.reportFontSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerEl;
        /** @type {?} */
        var sel;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                containerEl = sel.getRangeAt(0).commonAncestorContainer;
                // Make sure we have an element rather than a text node
                if (containerEl.nodeType === 3) {
                    containerEl = containerEl.parentNode;
                }
            }
        }
        else if ((sel = document.getSelection()) && sel.type !== "Control") {
            containerEl = sel.createRange().parentElement();
        }
        if (containerEl) {
            return parseInt(this.getComputedStyleProperty(containerEl, "fontSize").replace("px", ""), 10);
        }
    };
    /**
     * @param {?} el
     * @param {?} propName
     * @return {?}
     */
    FormattingDirective.prototype.getComputedStyleProperty = /**
     * @param {?} el
     * @param {?} propName
     * @return {?}
     */
    function (el, propName) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[propName];
        }
        else if (el.currentStyle) {
            return el.currentStyle[propName];
        }
    };
    /**
     * @return {?}
     */
    FormattingDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._formattingService.undo.subscribe((/**
         * @return {?}
         */
        function () {
            _this.toggleUndo();
        }));
        this._formattingService.redo.subscribe((/**
         * @return {?}
         */
        function () {
            _this.toggleRedo();
        }));
        this._formattingService.formatBoldChange.subscribe((/**
         * @param {?} bold
         * @return {?}
         */
        function (bold) {
            _this.bold = bold;
            _this.toggleBold();
        }));
        this._formattingService.formatUnderlineChange.subscribe((/**
         * @param {?} underline
         * @return {?}
         */
        function (underline) {
            _this.underline = underline;
            _this.toggleUnderline();
        }));
        this._formattingService.formatItalicChange.subscribe((/**
         * @param {?} italic
         * @return {?}
         */
        function (italic) {
            _this.italic = italic;
            _this.toggleItalic();
        }));
        this._formattingService.formatColorChange.subscribe(((/**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            _this.color = color;
            _this.setColor(color);
        })));
        this._formattingService.formatBgColorChange.subscribe(((/**
         * @param {?} bgcolor
         * @return {?}
         */
        function (bgcolor) {
            _this.bgColor = bgcolor;
            _this.setBgColor(bgcolor);
        })));
        this._formattingService.formatFontSizeChange.subscribe(((/**
         * @param {?} fontSize
         * @return {?}
         */
        function (fontSize) {
            _this.setFontSize(fontSize);
        })));
        this._formattingService.formatFontChange.subscribe(((/**
         * @param {?} font
         * @return {?}
         */
        function (font) {
            _this.font = font;
            _this.setFont(font);
        })));
        this._formattingService.formatStrikeoutChange.subscribe((/**
         * @param {?} strikeout
         * @return {?}
         */
        function (strikeout) {
            _this.strikeout = strikeout;
            _this.toggleStrikeout();
        }));
        this._formattingService.formatAlignChange.subscribe((/**
         * @param {?} align
         * @return {?}
         */
        function (align) {
            _this.align = align;
            _this.toggleAlign(_this.align);
        }));
        this._formattingService.formatListChange.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            /** @type {?} */
            var remove = _this.list === list;
            _this.list = list;
            _this.toggleList(_this.list, remove);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleBold = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("bold");
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleUnderline = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("underline");
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleItalic = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("italic");
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} bgColor
     * @return {?}
     */
    FormattingDirective.prototype.setBgColor = /**
     * @private
     * @param {?} bgColor
     * @return {?}
     */
    function (bgColor) {
        document.execCommand("backColor", false, bgColor);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    FormattingDirective.prototype.setColor = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        document.execCommand("foreColor", false, color);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} fontSize
     * @return {?}
     */
    FormattingDirective.prototype.setFontSize = /**
     * @private
     * @param {?} fontSize
     * @return {?}
     */
    function (fontSize) {
        if (document.getSelection().toString()) {
            /** @type {?} */
            var spanString = "<span style='font-size: " + fontSize + "px; color: " + this.color + "; background-color: " + this.bgColor + "; font-family: " + this.font + "'>" +
                document.getSelection() + "</span>";
            if (this.bold) {
                spanString = "<b>" + spanString + "</b>";
            }
            if (this.italic) {
                spanString = "<i>" + spanString + "</i>";
            }
            if (this.underline) {
                spanString = "<u>" + spanString + "</u>";
            }
            if (this.strikeout) {
                spanString = "<strike>" + spanString + "</strike>";
            }
            document.execCommand('insertHTML', false, spanString);
        }
        else {
            document.execCommand("fontsize", false, "7");
        }
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleUndo = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("undo");
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleRedo = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("redo");
    };
    /**
     * @private
     * @param {?} font
     * @return {?}
     */
    FormattingDirective.prototype.setFont = /**
     * @private
     * @param {?} font
     * @return {?}
     */
    function (font) {
        document.execCommand("fontName", false, font);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @return {?}
     */
    FormattingDirective.prototype.toggleStrikeout = /**
     * @private
     * @return {?}
     */
    function () {
        document.execCommand("strikeThrough");
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    FormattingDirective.prototype.toggleAlign = /**
     * @private
     * @param {?} align
     * @return {?}
     */
    function (align) {
        if (this.isIE) {
            this.toggleAlignIE(align);
            return;
        }
        document.execCommand("styleWithCSS", false, 'true');
        switch (align) {
            case 'center':
                document.execCommand('justifyCenter');
                break;
            case 'full':
                document.execCommand('justifyFull');
                break;
            case 'left':
                document.execCommand('justifyLeft');
                break;
            case 'right':
                document.execCommand('justifyRight');
                break;
        }
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    FormattingDirective.prototype.toggleAlignIE = /**
     * @private
     * @param {?} align
     * @return {?}
     */
    function (align) {
        this._selectionService.restoreSelection();
        this._selectionService.captureSelection();
        /** @type {?} */
        var selection = window.getSelection().focusNode.parentNode.parentNode;
        if (align === "full") {
            align = "justify";
        }
        $(selection).css("text-align", align);
        this._selectionService.refreshSelection();
    };
    /**
     * @private
     * @param {?} list
     * @param {?} remove
     * @return {?}
     */
    FormattingDirective.prototype.toggleList = /**
     * @private
     * @param {?} list
     * @param {?} remove
     * @return {?}
     */
    function (list, remove) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList', remove);
                break;
            case 'ordered':
                document.execCommand('insertOrderedList', remove);
                break;
        }
        this._selectionService.refreshSelection();
    };
    FormattingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdFormatting]'
                },] }
    ];
    /** @nocollapse */
    FormattingDirective.ctorParameters = function () { return [
        { type: FormattingService },
        { type: BackFormattingService },
        { type: SelectionService }
    ]; };
    FormattingDirective.propDecorators = {
        mouseup: [{ type: HostListener, args: ['mouseup',] }]
    };
    return FormattingDirective;
}());
export { FormattingDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.bold;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.italic;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.underline;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.color;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.bgColor;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.font;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.strikeout;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.align;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.list;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype.isIE;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype._formattingService;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype._backFormattingService;
    /**
     * @type {?}
     * @private
     */
    FormattingDirective.prototype._selectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0dGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUNoQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRDtJQWdCRSw2QkFBb0Isa0JBQXFDLEVBQ3JDLHNCQUE2QyxFQUM3QyxpQkFBbUM7UUFGbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFiL0MsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSWxCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHbEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUtuQixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQSxLQUFLLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7OztJQUV3QixxQ0FBTzs7O0lBQWhDO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7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UyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQVJPLGlCQUFpQjtnQkFDakIscUJBQXFCO2dCQUdyQixnQkFBZ0I7OzswQkF3QnJCLFlBQVksU0FBQyxTQUFTOztJQTRPekIsMEJBQUM7Q0FBQSxBQWxRRCxJQWtRQztTQS9QWSxtQkFBbUI7Ozs7OztJQUU5QixtQ0FBcUI7Ozs7O0lBQ3JCLHFDQUF1Qjs7Ozs7SUFDdkIsd0NBQTBCOzs7OztJQUMxQixvQ0FBc0I7Ozs7O0lBQ3RCLHNDQUF3Qjs7Ozs7SUFDeEIsbUNBQXFCOzs7OztJQUNyQix3Q0FBMEI7Ozs7O0lBQzFCLG9DQUFzQjs7Ozs7SUFDdEIsbUNBQXFCOzs7OztJQUNyQixtQ0FBcUI7Ozs7O0lBRVQsaURBQTZDOzs7OztJQUM3QyxxREFBcUQ7Ozs7O0lBQ3JELGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9mb3JtYXR0aW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFja0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9iYWNrLWZvcm1hdHRpbmcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0ganF1ZXJ5O1xuaW1wb3J0IHtTZWxlY3Rpb25TZXJ2aWNlfSBmcm9tICcuL3NlbGVjdGlvbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkRm9ybWF0dGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgYm9sZCA9IGZhbHNlO1xuICBwcml2YXRlIGl0YWxpYyA9IGZhbHNlO1xuICBwcml2YXRlIHVuZGVybGluZSA9IGZhbHNlO1xuICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgYmdDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGZvbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzdHJpa2VvdXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBhbGlnbjogc3RyaW5nO1xuICBwcml2YXRlIGxpc3Q6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0lFID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSkge1xuICAgIHRoaXMuaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcpIG1vdXNldXAoKSB7XG5cbiAgICB0aGlzLmJvbGQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImJvbGRcIik7XG4gICAgdGhpcy5zdHJpa2VvdXQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcInN0cmlrZVRocm91Z2hcIik7XG4gICAgdGhpcy5pdGFsaWMgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcIml0YWxpY1wiKTtcbiAgICB0aGlzLmJnQ29sb3IgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShcImJhY2tDb2xvclwiKTtcbiAgICB0aGlzLnVuZGVybGluZSA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwidW5kZXJsaW5lXCIpO1xuICAgIHRoaXMuYWxpZ24gPSB0aGlzLmNoZWNrSnVzdGlmeSgpO1xuICAgIHRoaXMubGlzdCA9IHRoaXMuY2hlY2tMaXN0KCk7XG5cbiAgICAvL2ZpeCByZXF1aXJlZCBieSBGaXJlRm94IHRvIGdldCBjb3JyZWN0IGJhY2tncm91bmQgY29sb3JcbiAgICBpZiAodGhpcy5iZ0NvbG9yID09PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgIHRoaXMuYmdDb2xvciA9ICQod2luZG93LmdldFNlbGVjdGlvbigpLmZvY3VzTm9kZS5wYXJlbnROb2RlKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKS50b1N0cmluZygpO1xuICAgIH1cbiAgICB0aGlzLmZvbnQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShcIkZvbnROYW1lXCIpLnJlcGxhY2UoL1wiL2csICcnKTtcbiAgICBpZih0aGlzLmZvbnQuc3BsaXQoXCIsXCIpLmxlbmd0aCA+IDEpe1xuICAgICAgdGhpcy5mb250ID0gdGhpcy5mb250LnNwbGl0KFwiLFwiKVswXTtcbiAgICB9XG4gICAgdGhpcy5jb2xvciA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKFwiZm9yZUNvbG9yXCIpO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCb2xkKHRoaXMuYm9sZCk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdFVuZGVybGluZSh0aGlzLnVuZGVybGluZSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEl0YWxpYyh0aGlzLml0YWxpYyk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdENvbG9yKHRoaXMuY29sb3IpO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCZ0NvbG9yKHRoaXMuYmdDb2xvcik7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnRTaXplKHRoaXMucmVwb3J0Rm9udFNpemUoKSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnQodGhpcy5mb250KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0U3RyaWtlb3V0KHRoaXMuc3RyaWtlb3V0KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QWxpZ24odGhpcy5hbGlnbik7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdExpc3QodGhpcy5saXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tKdXN0aWZ5KCkge1xuICAgIGxldCBhbGlnbiA9IFwiXCI7XG4gICAgYWxpZ24gPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImp1c3RpZnlDZW50ZXJcIikgPyBcImNlbnRlclwiIDogYWxpZ247XG4gICAgYWxpZ24gPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImp1c3RpZnlGdWxsXCIpID8gXCJmdWxsXCIgOiBhbGlnbjtcbiAgICBhbGlnbiA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwianVzdGlmeUxlZnRcIikgPyBcImxlZnRcIiA6IGFsaWduO1xuICAgIGFsaWduID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5UmlnaHRcIikgPyBcInJpZ2h0XCIgOiBhbGlnbjtcbiAgICByZXR1cm4gYWxpZ247XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGlzdCgpIHtcbiAgICBsZXQgbGlzdCA9IFwiXCI7XG4gICAgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwiaW5zZXJ0VW5vcmRlcmVkTGlzdFwiKSA/IFwidW5vcmRlcmVkXCIgOiBsaXN0O1xuICAgIGxpc3QgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImluc2VydE9yZGVyZWRMaXN0XCIpID8gXCJvcmRlcmVkXCIgOiBsaXN0O1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgcmVwb3J0Rm9udFNpemUoKTogbnVtYmVyIHtcbiAgICBsZXQgY29udGFpbmVyRWwsIHNlbDtcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgaWYgKHNlbC5yYW5nZUNvdW50KSB7XG4gICAgICAgIGNvbnRhaW5lckVsID0gc2VsLmdldFJhbmdlQXQoMCkuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGFuIGVsZW1lbnQgcmF0aGVyIHRoYW4gYSB0ZXh0IG5vZGVcbiAgICAgICAgaWYgKGNvbnRhaW5lckVsLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgY29udGFpbmVyRWwgPSBjb250YWluZXJFbC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpICYmIHNlbC50eXBlICE9PSBcIkNvbnRyb2xcIikge1xuICAgICAgY29udGFpbmVyRWwgPSBzZWwuY3JlYXRlUmFuZ2UoKS5wYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lckVsKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRDb21wdXRlZFN0eWxlUHJvcGVydHkoY29udGFpbmVyRWwsIFwiZm9udFNpemVcIikucmVwbGFjZShcInB4XCIsIFwiXCIpLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29tcHV0ZWRTdHlsZVByb3BlcnR5KGVsLCBwcm9wTmFtZSkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVtwcm9wTmFtZV07XG4gICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHtcbiAgICAgIHJldHVybiBlbC5jdXJyZW50U3R5bGVbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnVuZG8uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlVW5kbygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnJlZG8uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlUmVkbygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmJvbGQgPSBib2xkO1xuICAgICAgdGhpcy50b2dnbGVCb2xkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0VW5kZXJsaW5lQ2hhbmdlLnN1YnNjcmliZSgodW5kZXJsaW5lOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICAgIHRoaXMudG9nZ2xlVW5kZXJsaW5lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLml0YWxpYyA9IGl0YWxpYztcbiAgICAgIHRoaXMudG9nZ2xlSXRhbGljKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Q29sb3JDaGFuZ2Uuc3Vic2NyaWJlKCgoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5zZXRDb2xvcihjb2xvcik7XG4gICAgfSkpO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKCgoYmdjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmJnQ29sb3IgPSBiZ2NvbG9yO1xuICAgICAgdGhpcy5zZXRCZ0NvbG9yKGJnY29sb3IpO1xuICAgIH0pKTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250U2l6ZUNoYW5nZS5zdWJzY3JpYmUoKChmb250U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnNldEZvbnRTaXplKGZvbnRTaXplKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoKGZvbnQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb250ID0gZm9udDtcbiAgICAgIHRoaXMuc2V0Rm9udChmb250KTtcbiAgICB9KSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0U3RyaWtlb3V0Q2hhbmdlLnN1YnNjcmliZSgoc3RyaWtlb3V0OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcbiAgICAgIHRoaXMudG9nZ2xlU3RyaWtlb3V0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QWxpZ25DaGFuZ2Uuc3Vic2NyaWJlKChhbGlnbjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFsaWduID0gYWxpZ247XG4gICAgICB0aGlzLnRvZ2dsZUFsaWduKHRoaXMuYWxpZ24pO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMubGlzdCA9PT0gbGlzdDtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLnRvZ2dsZUxpc3QodGhpcy5saXN0LCByZW1vdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVCb2xkKCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYm9sZFwiKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlVW5kZXJsaW5lKCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kZXJsaW5lXCIpO1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVJdGFsaWMoKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpdGFsaWNcIik7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHNldEJnQ29sb3IoYmdDb2xvcjogc3RyaW5nKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJiYWNrQ29sb3JcIiwgZmFsc2UsIGJnQ29sb3IpO1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb3JlQ29sb3JcIiwgZmFsc2UsIGNvbG9yKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Rm9udFNpemUoZm9udFNpemU6IG51bWJlcikge1xuICAgIGlmIChkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKSB7XG4gICAgICBsZXQgc3BhblN0cmluZyA9IFwiPHNwYW4gc3R5bGU9J2ZvbnQtc2l6ZTogXCIgKyBmb250U2l6ZSArIFwicHg7IGNvbG9yOiBcIiArIHRoaXMuY29sb3IgKyBcIjsgYmFja2dyb3VuZC1jb2xvcjogXCIgKyB0aGlzLmJnQ29sb3IgKyBcIjsgZm9udC1mYW1pbHk6IFwiICsgdGhpcy5mb250ICsgXCInPlwiICtcbiAgICAgICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkgKyBcIjwvc3Bhbj5cIjtcbiAgICAgIGlmICh0aGlzLmJvbGQpIHtcbiAgICAgICAgc3BhblN0cmluZyA9IFwiPGI+XCIgKyBzcGFuU3RyaW5nICsgXCI8L2I+XCI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pdGFsaWMpIHtcbiAgICAgICAgc3BhblN0cmluZyA9IFwiPGk+XCIgKyBzcGFuU3RyaW5nICsgXCI8L2k+XCI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy51bmRlcmxpbmUpIHtcbiAgICAgICAgc3BhblN0cmluZyA9IFwiPHU+XCIgKyBzcGFuU3RyaW5nICsgXCI8L3U+XCI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdHJpa2VvdXQpIHtcbiAgICAgICAgc3BhblN0cmluZyA9IFwiPHN0cmlrZT5cIiArIHNwYW5TdHJpbmcgKyBcIjwvc3RyaWtlPlwiO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgc3BhblN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZm9udHNpemVcIiwgZmFsc2UsIFwiN1wiKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVVuZG8oKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRvXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVSZWRvKCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwicmVkb1wiKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Rm9udChmb250OiBzdHJpbmcpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvbnROYW1lXCIsIGZhbHNlLCBmb250KTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlU3RyaWtlb3V0KCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3RyaWtlVGhyb3VnaFwiKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlQWxpZ24oYWxpZ246IHN0cmluZykge1xuICAgIGlmKHRoaXMuaXNJRSkge1xuICAgICAgdGhpcy50b2dnbGVBbGlnbklFKGFsaWduKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdHlsZVdpdGhDU1NcIiwgZmFsc2UsICd0cnVlJyk7XG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlDZW50ZXInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlGdWxsJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5TGVmdCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlSaWdodCcpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUFsaWduSUUoYWxpZ246IHN0cmluZykge1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jYXB0dXJlU2VsZWN0aW9uKClcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZm9jdXNOb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBpZihhbGlnbiA9PT0gXCJmdWxsXCIpe1xuICAgICAgYWxpZ24gPSBcImp1c3RpZnlcIjtcbiAgICB9XG4gICAgJChzZWxlY3Rpb24pLmNzcyhcInRleHQtYWxpZ25cIiwgYWxpZ24pO1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpXG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUxpc3QobGlzdDogc3RyaW5nLCByZW1vdmU6IGJvb2xlYW4pIHtcbiAgICBzd2l0Y2ggKGxpc3QpIHtcbiAgICAgIGNhc2UgJ3Vub3JkZXJlZCc6XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JywgcmVtb3ZlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvcmRlcmVkJzpcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JywgcmVtb3ZlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG59XG4iXX0=