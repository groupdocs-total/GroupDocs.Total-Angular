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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0dGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUNoQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRDtJQWdCRSw2QkFBb0Isa0JBQXFDLEVBQ3JDLHNCQUE2QyxFQUM3QyxpQkFBbUM7UUFGbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFiL0MsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSWxCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHbEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUtuQixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQSxLQUFLLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7OztJQUV3QixxQ0FBTzs7O0lBQWhDO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7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UyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQVJPLGlCQUFpQjtnQkFDakIscUJBQXFCO2dCQUdyQixnQkFBZ0I7OzswQkF3QnJCLFlBQVksU0FBQyxTQUFTOztJQTRPekIsMEJBQUM7Q0FBQSxBQWxRRCxJQWtRQztTQS9QWSxtQkFBbUI7Ozs7OztJQUU5QixtQ0FBcUI7Ozs7O0lBQ3JCLHFDQUF1Qjs7Ozs7SUFDdkIsd0NBQTBCOzs7OztJQUMxQixvQ0FBc0I7Ozs7O0lBQ3RCLHNDQUF3Qjs7Ozs7SUFDeEIsbUNBQXFCOzs7OztJQUNyQix3Q0FBMEI7Ozs7O0lBQzFCLG9DQUFzQjs7Ozs7SUFDdEIsbUNBQXFCOzs7OztJQUNyQixtQ0FBcUI7Ozs7O0lBRVQsaURBQTZDOzs7OztJQUM3QyxxREFBcUQ7Ozs7O0lBQ3JELGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4vYmFjay1mb3JtYXR0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcbmltcG9ydCB7U2VsZWN0aW9uU2VydmljZX0gZnJvbSAnLi9zZWxlY3Rpb24uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZEZvcm1hdHRpbmddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgYm9sZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXRhbGljID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB1bmRlcmxpbmUgPSBmYWxzZTtcclxuICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBiZ0NvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmb250OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzdHJpa2VvdXQgPSBmYWxzZTtcclxuICBwcml2YXRlIGFsaWduOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsaXN0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBpc0lFID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1hdHRpbmdTZXJ2aWNlOiBGb3JtYXR0aW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3Rpb25TZXJ2aWNlOiBTZWxlY3Rpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnKSBtb3VzZXVwKCkge1xyXG5cclxuICAgIHRoaXMuYm9sZCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwiYm9sZFwiKTtcclxuICAgIHRoaXMuc3RyaWtlb3V0ID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJzdHJpa2VUaHJvdWdoXCIpO1xyXG4gICAgdGhpcy5pdGFsaWMgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcIml0YWxpY1wiKTtcclxuICAgIHRoaXMuYmdDb2xvciA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKFwiYmFja0NvbG9yXCIpO1xyXG4gICAgdGhpcy51bmRlcmxpbmUgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcInVuZGVybGluZVwiKTtcclxuICAgIHRoaXMuYWxpZ24gPSB0aGlzLmNoZWNrSnVzdGlmeSgpO1xyXG4gICAgdGhpcy5saXN0ID0gdGhpcy5jaGVja0xpc3QoKTtcclxuXHJcbiAgICAvL2ZpeCByZXF1aXJlZCBieSBGaXJlRm94IHRvIGdldCBjb3JyZWN0IGJhY2tncm91bmQgY29sb3JcclxuICAgIGlmICh0aGlzLmJnQ29sb3IgPT09IFwidHJhbnNwYXJlbnRcIikge1xyXG4gICAgICB0aGlzLmJnQ29sb3IgPSAkKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5mb2N1c05vZGUucGFyZW50Tm9kZSkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJykudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9udCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKFwiRm9udE5hbWVcIikucmVwbGFjZSgvXCIvZywgJycpO1xyXG4gICAgaWYodGhpcy5mb250LnNwbGl0KFwiLFwiKS5sZW5ndGggPiAxKXtcclxuICAgICAgdGhpcy5mb250ID0gdGhpcy5mb250LnNwbGl0KFwiLFwiKVswXTtcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3IgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShcImZvcmVDb2xvclwiKTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCb2xkKHRoaXMuYm9sZCk7XHJcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0VW5kZXJsaW5lKHRoaXMudW5kZXJsaW5lKTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRJdGFsaWModGhpcy5pdGFsaWMpO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdENvbG9yKHRoaXMuY29sb3IpO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEJnQ29sb3IodGhpcy5iZ0NvbG9yKTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRGb250U2l6ZSh0aGlzLnJlcG9ydEZvbnRTaXplKCkpO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnQodGhpcy5mb250KTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRTdHJpa2VvdXQodGhpcy5zdHJpa2VvdXQpO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEFsaWduKHRoaXMuYWxpZ24pO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdExpc3QodGhpcy5saXN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tKdXN0aWZ5KCkge1xyXG4gICAgbGV0IGFsaWduID0gXCJcIjtcclxuICAgIGFsaWduID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5Q2VudGVyXCIpID8gXCJjZW50ZXJcIiA6IGFsaWduO1xyXG4gICAgYWxpZ24gPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImp1c3RpZnlGdWxsXCIpID8gXCJmdWxsXCIgOiBhbGlnbjtcclxuICAgIGFsaWduID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5TGVmdFwiKSA/IFwibGVmdFwiIDogYWxpZ247XHJcbiAgICBhbGlnbiA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwianVzdGlmeVJpZ2h0XCIpID8gXCJyaWdodFwiIDogYWxpZ247XHJcbiAgICByZXR1cm4gYWxpZ247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrTGlzdCgpIHtcclxuICAgIGxldCBsaXN0ID0gXCJcIjtcclxuICAgIGxpc3QgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImluc2VydFVub3JkZXJlZExpc3RcIikgPyBcInVub3JkZXJlZFwiIDogbGlzdDtcclxuICAgIGxpc3QgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImluc2VydE9yZGVyZWRMaXN0XCIpID8gXCJvcmRlcmVkXCIgOiBsaXN0O1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICByZXBvcnRGb250U2l6ZSgpOiBudW1iZXIge1xyXG4gICAgbGV0IGNvbnRhaW5lckVsLCBzZWw7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIGNvbnRhaW5lckVsID0gc2VsLmdldFJhbmdlQXQoMCkuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYW4gZWxlbWVudCByYXRoZXIgdGhhbiBhIHRleHQgbm9kZVxyXG4gICAgICAgIGlmIChjb250YWluZXJFbC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgY29udGFpbmVyRWwgPSBjb250YWluZXJFbC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpICYmIHNlbC50eXBlICE9PSBcIkNvbnRyb2xcIikge1xyXG4gICAgICBjb250YWluZXJFbCA9IHNlbC5jcmVhdGVSYW5nZSgpLnBhcmVudEVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGFpbmVyRWwpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVByb3BlcnR5KGNvbnRhaW5lckVsLCBcImZvbnRTaXplXCIpLnJlcGxhY2UoXCJweFwiLCBcIlwiKSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcHV0ZWRTdHlsZVByb3BlcnR5KGVsLCBwcm9wTmFtZSkge1xyXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbcHJvcE5hbWVdO1xyXG4gICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHtcclxuICAgICAgcmV0dXJuIGVsLmN1cnJlbnRTdHlsZVtwcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnVuZG8uc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVVbmRvKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnJlZG8uc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVSZWRvKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuYm9sZCA9IGJvbGQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlQm9sZCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRVbmRlcmxpbmVDaGFuZ2Uuc3Vic2NyaWJlKCh1bmRlcmxpbmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy51bmRlcmxpbmUgPSB1bmRlcmxpbmU7XHJcbiAgICAgIHRoaXMudG9nZ2xlVW5kZXJsaW5lKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEl0YWxpY0NoYW5nZS5zdWJzY3JpYmUoKGl0YWxpYzogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLml0YWxpYyA9IGl0YWxpYztcclxuICAgICAgdGhpcy50b2dnbGVJdGFsaWMoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Q29sb3JDaGFuZ2Uuc3Vic2NyaWJlKCgoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgIHRoaXMuc2V0Q29sb3IoY29sb3IpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QmdDb2xvckNoYW5nZS5zdWJzY3JpYmUoKChiZ2NvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5iZ0NvbG9yID0gYmdjb2xvcjtcclxuICAgICAgdGhpcy5zZXRCZ0NvbG9yKGJnY29sb3IpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udFNpemVDaGFuZ2Uuc3Vic2NyaWJlKCgoZm9udFNpemU6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnNldEZvbnRTaXplKGZvbnRTaXplKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoKGZvbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gICAgICB0aGlzLnNldEZvbnQoZm9udCk7XHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRTdHJpa2VvdXRDaGFuZ2Uuc3Vic2NyaWJlKChzdHJpa2VvdXQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5zdHJpa2VvdXQgPSBzdHJpa2VvdXQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlU3RyaWtlb3V0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEFsaWduQ2hhbmdlLnN1YnNjcmliZSgoYWxpZ246IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmFsaWduID0gYWxpZ247XHJcbiAgICAgIHRoaXMudG9nZ2xlQWxpZ24odGhpcy5hbGlnbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcclxuICAgICAgbGV0IHJlbW92ZSA9IHRoaXMubGlzdCA9PT0gbGlzdDtcclxuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgICAgdGhpcy50b2dnbGVMaXN0KHRoaXMubGlzdCwgcmVtb3ZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVCb2xkKCkge1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJib2xkXCIpO1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVVuZGVybGluZSgpIHtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kZXJsaW5lXCIpO1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZUl0YWxpYygpIHtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJnQ29sb3IoYmdDb2xvcjogc3RyaW5nKSB7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImJhY2tDb2xvclwiLCBmYWxzZSwgYmdDb2xvcik7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb3JlQ29sb3JcIiwgZmFsc2UsIGNvbG9yKTtcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRGb250U2l6ZShmb250U2l6ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSkge1xyXG4gICAgICBsZXQgc3BhblN0cmluZyA9IFwiPHNwYW4gc3R5bGU9J2ZvbnQtc2l6ZTogXCIgKyBmb250U2l6ZSArIFwicHg7IGNvbG9yOiBcIiArIHRoaXMuY29sb3IgKyBcIjsgYmFja2dyb3VuZC1jb2xvcjogXCIgKyB0aGlzLmJnQ29sb3IgKyBcIjsgZm9udC1mYW1pbHk6IFwiICsgdGhpcy5mb250ICsgXCInPlwiICtcclxuICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICBpZiAodGhpcy5ib2xkKSB7XHJcbiAgICAgICAgc3BhblN0cmluZyA9IFwiPGI+XCIgKyBzcGFuU3RyaW5nICsgXCI8L2I+XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaXRhbGljKSB7XHJcbiAgICAgICAgc3BhblN0cmluZyA9IFwiPGk+XCIgKyBzcGFuU3RyaW5nICsgXCI8L2k+XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudW5kZXJsaW5lKSB7XHJcbiAgICAgICAgc3BhblN0cmluZyA9IFwiPHU+XCIgKyBzcGFuU3RyaW5nICsgXCI8L3U+XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc3RyaWtlb3V0KSB7XHJcbiAgICAgICAgc3BhblN0cmluZyA9IFwiPHN0cmlrZT5cIiArIHNwYW5TdHJpbmcgKyBcIjwvc3RyaWtlPlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIHNwYW5TdHJpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb250c2l6ZVwiLCBmYWxzZSwgXCI3XCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVVuZG8oKSB7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInVuZG9cIik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVJlZG8oKSB7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInJlZG9cIik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZvbnQoZm9udDogc3RyaW5nKSB7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvbnROYW1lXCIsIGZhbHNlLCBmb250KTtcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVTdHJpa2VvdXQoKSB7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlQWxpZ24oYWxpZ246IHN0cmluZykge1xyXG4gICAgaWYodGhpcy5pc0lFKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlQWxpZ25JRShhbGlnbik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3R5bGVXaXRoQ1NTXCIsIGZhbHNlLCAndHJ1ZScpO1xyXG4gICAgc3dpdGNoIChhbGlnbikge1xyXG4gICAgICBjYXNlICdjZW50ZXInOlxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5Q2VudGVyJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Z1bGwnOlxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5RnVsbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeUxlZnQnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5UmlnaHQnKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVBbGlnbklFKGFsaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVzdG9yZVNlbGVjdGlvbigpXHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNhcHR1cmVTZWxlY3Rpb24oKVxyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLmZvY3VzTm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZihhbGlnbiA9PT0gXCJmdWxsXCIpe1xyXG4gICAgICBhbGlnbiA9IFwianVzdGlmeVwiO1xyXG4gICAgfVxyXG4gICAgJChzZWxlY3Rpb24pLmNzcyhcInRleHQtYWxpZ25cIiwgYWxpZ24pO1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlTGlzdChsaXN0OiBzdHJpbmcsIHJlbW92ZTogYm9vbGVhbikge1xyXG4gICAgc3dpdGNoIChsaXN0KSB7XHJcbiAgICAgIGNhc2UgJ3Vub3JkZXJlZCc6XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnLCByZW1vdmUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdvcmRlcmVkJzpcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnLCByZW1vdmUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==