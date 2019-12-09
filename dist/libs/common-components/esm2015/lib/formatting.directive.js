/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { FormattingService } from "./formatting.service";
import { BackFormattingService } from "./back-formatting.service";
import * as jquery from 'jquery';
/** @type {?} */
const $ = jquery;
import { SelectionService } from './selection.service';
export class FormattingDirective {
    /**
     * @param {?} _formattingService
     * @param {?} _backFormattingService
     * @param {?} _selectionService
     */
    constructor(_formattingService, _backFormattingService, _selectionService) {
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
    mouseup() {
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
    }
    /**
     * @private
     * @return {?}
     */
    checkJustify() {
        /** @type {?} */
        let align = "";
        align = document.queryCommandState("justifyCenter") ? "center" : align;
        align = document.queryCommandState("justifyFull") ? "full" : align;
        align = document.queryCommandState("justifyLeft") ? "left" : align;
        align = document.queryCommandState("justifyRight") ? "right" : align;
        return align;
    }
    /**
     * @private
     * @return {?}
     */
    checkList() {
        /** @type {?} */
        let list = "";
        list = document.queryCommandState("insertUnorderedList") ? "unordered" : list;
        list = document.queryCommandState("insertOrderedList") ? "ordered" : list;
        return list;
    }
    /**
     * @return {?}
     */
    reportFontSize() {
        /** @type {?} */
        let containerEl;
        /** @type {?} */
        let sel;
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
    }
    /**
     * @param {?} el
     * @param {?} propName
     * @return {?}
     */
    getComputedStyleProperty(el, propName) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[propName];
        }
        else if (el.currentStyle) {
            return el.currentStyle[propName];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._formattingService.undo.subscribe((/**
         * @return {?}
         */
        () => {
            this.toggleUndo();
        }));
        this._formattingService.redo.subscribe((/**
         * @return {?}
         */
        () => {
            this.toggleRedo();
        }));
        this._formattingService.formatBoldChange.subscribe((/**
         * @param {?} bold
         * @return {?}
         */
        (bold) => {
            this.bold = bold;
            this.toggleBold();
        }));
        this._formattingService.formatUnderlineChange.subscribe((/**
         * @param {?} underline
         * @return {?}
         */
        (underline) => {
            this.underline = underline;
            this.toggleUnderline();
        }));
        this._formattingService.formatItalicChange.subscribe((/**
         * @param {?} italic
         * @return {?}
         */
        (italic) => {
            this.italic = italic;
            this.toggleItalic();
        }));
        this._formattingService.formatColorChange.subscribe(((/**
         * @param {?} color
         * @return {?}
         */
        (color) => {
            this.color = color;
            this.setColor(color);
        })));
        this._formattingService.formatBgColorChange.subscribe(((/**
         * @param {?} bgcolor
         * @return {?}
         */
        (bgcolor) => {
            this.bgColor = bgcolor;
            this.setBgColor(bgcolor);
        })));
        this._formattingService.formatFontSizeChange.subscribe(((/**
         * @param {?} fontSize
         * @return {?}
         */
        (fontSize) => {
            this.setFontSize(fontSize);
        })));
        this._formattingService.formatFontChange.subscribe(((/**
         * @param {?} font
         * @return {?}
         */
        (font) => {
            this.font = font;
            this.setFont(font);
        })));
        this._formattingService.formatStrikeoutChange.subscribe((/**
         * @param {?} strikeout
         * @return {?}
         */
        (strikeout) => {
            this.strikeout = strikeout;
            this.toggleStrikeout();
        }));
        this._formattingService.formatAlignChange.subscribe((/**
         * @param {?} align
         * @return {?}
         */
        (align) => {
            this.align = align;
            this.toggleAlign(this.align);
        }));
        this._formattingService.formatListChange.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        (list) => {
            /** @type {?} */
            const remove = this.list === list;
            this.list = list;
            this.toggleList(this.list, remove);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    toggleBold() {
        document.execCommand("bold");
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @return {?}
     */
    toggleUnderline() {
        document.execCommand("underline");
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @return {?}
     */
    toggleItalic() {
        document.execCommand("italic");
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} bgColor
     * @return {?}
     */
    setBgColor(bgColor) {
        document.execCommand("backColor", false, bgColor);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    setColor(color) {
        document.execCommand("foreColor", false, color);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} fontSize
     * @return {?}
     */
    setFontSize(fontSize) {
        if (document.getSelection().toString()) {
            /** @type {?} */
            let spanString = "<span style='font-size: " + fontSize + "px; color: " + this.color + "; background-color: " + this.bgColor + "; font-family: " + this.font + "'>" +
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
    }
    /**
     * @private
     * @return {?}
     */
    toggleUndo() {
        document.execCommand("undo");
    }
    /**
     * @private
     * @return {?}
     */
    toggleRedo() {
        document.execCommand("redo");
    }
    /**
     * @private
     * @param {?} font
     * @return {?}
     */
    setFont(font) {
        document.execCommand("fontName", false, font);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @return {?}
     */
    toggleStrikeout() {
        document.execCommand("strikeThrough");
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    toggleAlign(align) {
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
    }
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    toggleAlignIE(align) {
        this._selectionService.restoreSelection();
        this._selectionService.captureSelection();
        /** @type {?} */
        const selection = window.getSelection().focusNode.parentNode.parentNode;
        if (align === "full") {
            align = "justify";
        }
        $(selection).css("text-align", align);
        this._selectionService.refreshSelection();
    }
    /**
     * @private
     * @param {?} list
     * @param {?} remove
     * @return {?}
     */
    toggleList(list, remove) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList', remove);
                break;
            case 'ordered':
                document.execCommand('insertOrderedList', remove);
                break;
        }
        this._selectionService.refreshSelection();
    }
}
FormattingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdFormatting]'
            },] }
];
/** @nocollapse */
FormattingDirective.ctorParameters = () => [
    { type: FormattingService },
    { type: BackFormattingService },
    { type: SelectionService }
];
FormattingDirective.propDecorators = {
    mouseup: [{ type: HostListener, args: ['mouseup',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0dGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQUNoQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUtyRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFhOUIsWUFBb0Isa0JBQXFDLEVBQ3JDLHNCQUE2QyxFQUM3QyxpQkFBbUM7UUFGbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFiL0MsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSWxCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHbEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUtuQixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQSxLQUFLLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7OztJQUV3QixPQUFPO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1B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QUdyQixnQkFBZ0I7OztzQkF3QnJCLFlBQVksU0FBQyxTQUFTOzs7Ozs7O0lBakJ2QixtQ0FBcUI7Ozs7O0lBQ3JCLHFDQUF1Qjs7Ozs7SUFDdkIsd0NBQTBCOzs7OztJQUMxQixvQ0FBc0I7Ozs7O0lBQ3RCLHNDQUF3Qjs7Ozs7SUFDeEIsbUNBQXFCOzs7OztJQUNyQix3Q0FBMEI7Ozs7O0lBQzFCLG9DQUFzQjs7Ozs7SUFDdEIsbUNBQXFCOzs7OztJQUNyQixtQ0FBcUI7Ozs7O0lBRVQsaURBQTZDOzs7OztJQUM3QyxxREFBcUQ7Ozs7O0lBQ3JELGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4vYmFjay1mb3JtYXR0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcbmltcG9ydCB7U2VsZWN0aW9uU2VydmljZX0gZnJvbSAnLi9zZWxlY3Rpb24uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZEZvcm1hdHRpbmddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgYm9sZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXRhbGljID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB1bmRlcmxpbmUgPSBmYWxzZTtcclxuICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBiZ0NvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmb250OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzdHJpa2VvdXQgPSBmYWxzZTtcclxuICBwcml2YXRlIGFsaWduOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBsaXN0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBpc0lFID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1hdHRpbmdTZXJ2aWNlOiBGb3JtYXR0aW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3Rpb25TZXJ2aWNlOiBTZWxlY3Rpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnKSBtb3VzZXVwKCkge1xyXG5cclxuICAgIHRoaXMuYm9sZCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwiYm9sZFwiKTtcclxuICAgIHRoaXMuc3RyaWtlb3V0ID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJzdHJpa2VUaHJvdWdoXCIpO1xyXG4gICAgdGhpcy5pdGFsaWMgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcIml0YWxpY1wiKTtcclxuICAgIHRoaXMuYmdDb2xvciA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKFwiYmFja0NvbG9yXCIpO1xyXG4gICAgdGhpcy51bmRlcmxpbmUgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcInVuZGVybGluZVwiKTtcclxuICAgIHRoaXMuYWxpZ24gPSB0aGlzLmNoZWNrSnVzdGlmeSgpO1xyXG4gICAgdGhpcy5saXN0ID0gdGhpcy5jaGVja0xpc3QoKTtcclxuXHJcbiAgICAvL2ZpeCByZXF1aXJlZCBieSBGaXJlRm94IHRvIGdldCBjb3JyZWN0IGJhY2tncm91bmQgY29sb3JcclxuICAgIGlmICh0aGlzLmJnQ29sb3IgPT09IFwidHJhbnNwYXJlbnRcIikge1xyXG4gICAgICB0aGlzLmJnQ29sb3IgPSAkKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5mb2N1c05vZGUucGFyZW50Tm9kZSkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJykudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9udCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKFwiRm9udE5hbWVcIikucmVwbGFjZSgvXCIvZywgJycpO1xyXG4gICAgaWYodGhpcy5mb250LnNwbGl0KFwiLFwiKS5sZW5ndGggPiAxKXtcclxuICAgICAgdGhpcy5mb250ID0gdGhpcy5mb250LnNwbGl0KFwiLFwiKVswXTtcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3IgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShcImZvcmVDb2xvclwiKTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCb2xkKHRoaXMuYm9sZCk7XHJcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0VW5kZXJsaW5lKHRoaXMudW5kZXJsaW5lKTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRJdGFsaWModGhpcy5pdGFsaWMpO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdENvbG9yKHRoaXMuY29sb3IpO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEJnQ29sb3IodGhpcy5iZ0NvbG9yKTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRGb250U2l6ZSh0aGlzLnJlcG9ydEZvbnRTaXplKCkpO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnQodGhpcy5mb250KTtcclxuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRTdHJpa2VvdXQodGhpcy5zdHJpa2VvdXQpO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEFsaWduKHRoaXMuYWxpZ24pO1xyXG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdExpc3QodGhpcy5saXN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tKdXN0aWZ5KCkge1xyXG4gICAgbGV0IGFsaWduID0gXCJcIjtcclxuICAgIGFsaWduID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5Q2VudGVyXCIpID8gXCJjZW50ZXJcIiA6IGFsaWduO1xyXG4gICAgYWxpZ24gPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImp1c3RpZnlGdWxsXCIpID8gXCJmdWxsXCIgOiBhbGlnbjtcclxuICAgIGFsaWduID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5TGVmdFwiKSA/IFwibGVmdFwiIDogYWxpZ247XHJcbiAgICBhbGlnbiA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwianVzdGlmeVJpZ2h0XCIpID8gXCJyaWdodFwiIDogYWxpZ247XHJcbiAgICByZXR1cm4gYWxpZ247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrTGlzdCgpIHtcclxuICAgIGxldCBsaXN0ID0gXCJcIjtcclxuICAgIGxpc3QgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImluc2VydFVub3JkZXJlZExpc3RcIikgPyBcInVub3JkZXJlZFwiIDogbGlzdDtcclxuICAgIGxpc3QgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImluc2VydE9yZGVyZWRMaXN0XCIpID8gXCJvcmRlcmVkXCIgOiBsaXN0O1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICByZXBvcnRGb250U2l6ZSgpOiBudW1iZXIge1xyXG4gICAgbGV0IGNvbnRhaW5lckVsLCBzZWw7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIGNvbnRhaW5lckVsID0gc2VsLmdldFJhbmdlQXQoMCkuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYW4gZWxlbWVudCByYXRoZXIgdGhhbiBhIHRleHQgbm9kZVxyXG4gICAgICAgIGlmIChjb250YWluZXJFbC5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgY29udGFpbmVyRWwgPSBjb250YWluZXJFbC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpICYmIHNlbC50eXBlICE9PSBcIkNvbnRyb2xcIikge1xyXG4gICAgICBjb250YWluZXJFbCA9IHNlbC5jcmVhdGVSYW5nZSgpLnBhcmVudEVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGFpbmVyRWwpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVByb3BlcnR5KGNvbnRhaW5lckVsLCBcImZvbnRTaXplXCIpLnJlcGxhY2UoXCJweFwiLCBcIlwiKSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcHV0ZWRTdHlsZVByb3BlcnR5KGVsLCBwcm9wTmFtZSkge1xyXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbcHJvcE5hbWVdO1xyXG4gICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHtcclxuICAgICAgcmV0dXJuIGVsLmN1cnJlbnRTdHlsZVtwcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnVuZG8uc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVVbmRvKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnJlZG8uc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVSZWRvKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuYm9sZCA9IGJvbGQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlQm9sZCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRVbmRlcmxpbmVDaGFuZ2Uuc3Vic2NyaWJlKCh1bmRlcmxpbmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy51bmRlcmxpbmUgPSB1bmRlcmxpbmU7XHJcbiAgICAgIHRoaXMudG9nZ2xlVW5kZXJsaW5lKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEl0YWxpY0NoYW5nZS5zdWJzY3JpYmUoKGl0YWxpYzogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLml0YWxpYyA9IGl0YWxpYztcclxuICAgICAgdGhpcy50b2dnbGVJdGFsaWMoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Q29sb3JDaGFuZ2Uuc3Vic2NyaWJlKCgoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgIHRoaXMuc2V0Q29sb3IoY29sb3IpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QmdDb2xvckNoYW5nZS5zdWJzY3JpYmUoKChiZ2NvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5iZ0NvbG9yID0gYmdjb2xvcjtcclxuICAgICAgdGhpcy5zZXRCZ0NvbG9yKGJnY29sb3IpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Rm9udFNpemVDaGFuZ2Uuc3Vic2NyaWJlKCgoZm9udFNpemU6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnNldEZvbnRTaXplKGZvbnRTaXplKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoKGZvbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gICAgICB0aGlzLnNldEZvbnQoZm9udCk7XHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRTdHJpa2VvdXRDaGFuZ2Uuc3Vic2NyaWJlKChzdHJpa2VvdXQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5zdHJpa2VvdXQgPSBzdHJpa2VvdXQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlU3RyaWtlb3V0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEFsaWduQ2hhbmdlLnN1YnNjcmliZSgoYWxpZ246IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmFsaWduID0gYWxpZ247XHJcbiAgICAgIHRoaXMudG9nZ2xlQWxpZ24odGhpcy5hbGlnbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgcmVtb3ZlID0gdGhpcy5saXN0ID09PSBsaXN0O1xyXG4gICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgICB0aGlzLnRvZ2dsZUxpc3QodGhpcy5saXN0LCByZW1vdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZUJvbGQoKSB7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImJvbGRcIik7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlVW5kZXJsaW5lKCkge1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlSXRhbGljKCkge1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpdGFsaWNcIik7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QmdDb2xvcihiZ0NvbG9yOiBzdHJpbmcpIHtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYmFja0NvbG9yXCIsIGZhbHNlLCBiZ0NvbG9yKTtcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvcmVDb2xvclwiLCBmYWxzZSwgY29sb3IpO1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKSB7XHJcbiAgICAgIGxldCBzcGFuU3RyaW5nID0gXCI8c3BhbiBzdHlsZT0nZm9udC1zaXplOiBcIiArIGZvbnRTaXplICsgXCJweDsgY29sb3I6IFwiICsgdGhpcy5jb2xvciArIFwiOyBiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIHRoaXMuYmdDb2xvciArIFwiOyBmb250LWZhbWlseTogXCIgKyB0aGlzLmZvbnQgKyBcIic+XCIgK1xyXG4gICAgICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgIGlmICh0aGlzLmJvbGQpIHtcclxuICAgICAgICBzcGFuU3RyaW5nID0gXCI8Yj5cIiArIHNwYW5TdHJpbmcgKyBcIjwvYj5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pdGFsaWMpIHtcclxuICAgICAgICBzcGFuU3RyaW5nID0gXCI8aT5cIiArIHNwYW5TdHJpbmcgKyBcIjwvaT5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy51bmRlcmxpbmUpIHtcclxuICAgICAgICBzcGFuU3RyaW5nID0gXCI8dT5cIiArIHNwYW5TdHJpbmcgKyBcIjwvdT5cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zdHJpa2VvdXQpIHtcclxuICAgICAgICBzcGFuU3RyaW5nID0gXCI8c3RyaWtlPlwiICsgc3BhblN0cmluZyArIFwiPC9zdHJpa2U+XCI7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgc3BhblN0cmluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvbnRzaXplXCIsIGZhbHNlLCBcIjdcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlVW5kbygpIHtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kb1wiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlUmVkbygpIHtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwicmVkb1wiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Rm9udChmb250OiBzdHJpbmcpIHtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZm9udE5hbWVcIiwgZmFsc2UsIGZvbnQpO1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVN0cmlrZW91dCgpIHtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3RyaWtlVGhyb3VnaFwiKTtcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVBbGlnbihhbGlnbjogc3RyaW5nKSB7XHJcbiAgICBpZih0aGlzLmlzSUUpIHtcclxuICAgICAgdGhpcy50b2dnbGVBbGlnbklFKGFsaWduKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdHlsZVdpdGhDU1NcIiwgZmFsc2UsICd0cnVlJyk7XHJcbiAgICBzd2l0Y2ggKGFsaWduKSB7XHJcbiAgICAgIGNhc2UgJ2NlbnRlcic6XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlDZW50ZXInKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZnVsbCc6XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlGdWxsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5TGVmdCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlSaWdodCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZUFsaWduSUUoYWxpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZXN0b3JlU2VsZWN0aW9uKClcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpXHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZm9jdXNOb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmKGFsaWduID09PSBcImZ1bGxcIil7XHJcbiAgICAgIGFsaWduID0gXCJqdXN0aWZ5XCI7XHJcbiAgICB9XHJcbiAgICAkKHNlbGVjdGlvbikuY3NzKFwidGV4dC1hbGlnblwiLCBhbGlnbik7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVMaXN0KGxpc3Q6IHN0cmluZywgcmVtb3ZlOiBib29sZWFuKSB7XHJcbiAgICBzd2l0Y2ggKGxpc3QpIHtcclxuICAgICAgY2FzZSAndW5vcmRlcmVkJzpcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcsIHJlbW92ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ29yZGVyZWQnOlxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcsIHJlbW92ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcclxuICB9XHJcbn1cclxuIl19