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
            this.list = list;
            this.toggleList(this.list);
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
     * @return {?}
     */
    toggleList(list) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList');
                break;
            case 'ordered':
                document.execCommand('insertOrderedList');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0dGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQUNoQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUtyRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFhOUIsWUFBb0Isa0JBQXFDLEVBQ3JDLHNCQUE2QyxFQUM3QyxpQkFBbUM7UUFGbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFiL0MsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSWxCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHbEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUtuQixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQSxLQUFLLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7OztJQUV3QixPQUFPO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1B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d0NBQTBCOzs7OztJQUMxQixvQ0FBc0I7Ozs7O0lBQ3RCLHNDQUF3Qjs7Ozs7SUFDeEIsbUNBQXFCOzs7OztJQUNyQix3Q0FBMEI7Ozs7O0lBQzFCLG9DQUFzQjs7Ozs7SUFDdEIsbUNBQXFCOzs7OztJQUNyQixtQ0FBcUI7Ozs7O0lBRVQsaURBQTZDOzs7OztJQUM3QyxxREFBcUQ7Ozs7O0lBQ3JELGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9mb3JtYXR0aW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFja0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9iYWNrLWZvcm1hdHRpbmcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0ganF1ZXJ5O1xuaW1wb3J0IHtTZWxlY3Rpb25TZXJ2aWNlfSBmcm9tICcuL3NlbGVjdGlvbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkRm9ybWF0dGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgYm9sZCA9IGZhbHNlO1xuICBwcml2YXRlIGl0YWxpYyA9IGZhbHNlO1xuICBwcml2YXRlIHVuZGVybGluZSA9IGZhbHNlO1xuICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgYmdDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGZvbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzdHJpa2VvdXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBhbGlnbjogc3RyaW5nO1xuICBwcml2YXRlIGxpc3Q6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0lFID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSkge1xuICAgIHRoaXMuaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcpIG1vdXNldXAoKSB7XG5cbiAgICB0aGlzLmJvbGQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImJvbGRcIik7XG4gICAgdGhpcy5zdHJpa2VvdXQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcInN0cmlrZVRocm91Z2hcIik7XG4gICAgdGhpcy5pdGFsaWMgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcIml0YWxpY1wiKTtcbiAgICB0aGlzLmJnQ29sb3IgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShcImJhY2tDb2xvclwiKTtcbiAgICB0aGlzLnVuZGVybGluZSA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwidW5kZXJsaW5lXCIpO1xuICAgIHRoaXMuYWxpZ24gPSB0aGlzLmNoZWNrSnVzdGlmeSgpO1xuICAgIHRoaXMubGlzdCA9IHRoaXMuY2hlY2tMaXN0KCk7XG5cbiAgICAvL2ZpeCByZXF1aXJlZCBieSBGaXJlRm94IHRvIGdldCBjb3JyZWN0IGJhY2tncm91bmQgY29sb3JcbiAgICBpZiAodGhpcy5iZ0NvbG9yID09PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgIHRoaXMuYmdDb2xvciA9ICQod2luZG93LmdldFNlbGVjdGlvbigpLmZvY3VzTm9kZS5wYXJlbnROb2RlKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKS50b1N0cmluZygpO1xuICAgIH1cbiAgICB0aGlzLmZvbnQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShcIkZvbnROYW1lXCIpLnJlcGxhY2UoL1wiL2csICcnKTtcbiAgICBpZih0aGlzLmZvbnQuc3BsaXQoXCIsXCIpLmxlbmd0aCA+IDEpe1xuICAgICAgdGhpcy5mb250ID0gdGhpcy5mb250LnNwbGl0KFwiLFwiKVswXTtcbiAgICB9XG4gICAgdGhpcy5jb2xvciA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKFwiZm9yZUNvbG9yXCIpO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCb2xkKHRoaXMuYm9sZCk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdFVuZGVybGluZSh0aGlzLnVuZGVybGluZSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEl0YWxpYyh0aGlzLml0YWxpYyk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdENvbG9yKHRoaXMuY29sb3IpO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCZ0NvbG9yKHRoaXMuYmdDb2xvcik7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnRTaXplKHRoaXMucmVwb3J0Rm9udFNpemUoKSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnQodGhpcy5mb250KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0U3RyaWtlb3V0KHRoaXMuc3RyaWtlb3V0KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QWxpZ24odGhpcy5hbGlnbik7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdExpc3QodGhpcy5saXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tKdXN0aWZ5KCkge1xuICAgIGxldCBhbGlnbiA9IFwiXCI7XG4gICAgYWxpZ24gPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImp1c3RpZnlDZW50ZXJcIikgPyBcImNlbnRlclwiIDogYWxpZ247XG4gICAgYWxpZ24gPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImp1c3RpZnlGdWxsXCIpID8gXCJmdWxsXCIgOiBhbGlnbjtcbiAgICBhbGlnbiA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwianVzdGlmeUxlZnRcIikgPyBcImxlZnRcIiA6IGFsaWduO1xuICAgIGFsaWduID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5UmlnaHRcIikgPyBcInJpZ2h0XCIgOiBhbGlnbjtcbiAgICByZXR1cm4gYWxpZ247XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGlzdCgpIHtcbiAgICBsZXQgbGlzdCA9IFwiXCI7XG4gICAgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwiaW5zZXJ0VW5vcmRlcmVkTGlzdFwiKSA/IFwidW5vcmRlcmVkXCIgOiBsaXN0O1xuICAgIGxpc3QgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImluc2VydE9yZGVyZWRMaXN0XCIpID8gXCJvcmRlcmVkXCIgOiBsaXN0O1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgcmVwb3J0Rm9udFNpemUoKTogbnVtYmVyIHtcbiAgICBsZXQgY29udGFpbmVyRWwsIHNlbDtcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgaWYgKHNlbC5yYW5nZUNvdW50KSB7XG4gICAgICAgIGNvbnRhaW5lckVsID0gc2VsLmdldFJhbmdlQXQoMCkuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGFuIGVsZW1lbnQgcmF0aGVyIHRoYW4gYSB0ZXh0IG5vZGVcbiAgICAgICAgaWYgKGNvbnRhaW5lckVsLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgY29udGFpbmVyRWwgPSBjb250YWluZXJFbC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpICYmIHNlbC50eXBlICE9PSBcIkNvbnRyb2xcIikge1xuICAgICAgY29udGFpbmVyRWwgPSBzZWwuY3JlYXRlUmFuZ2UoKS5wYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lckVsKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRDb21wdXRlZFN0eWxlUHJvcGVydHkoY29udGFpbmVyRWwsIFwiZm9udFNpemVcIikucmVwbGFjZShcInB4XCIsIFwiXCIpLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29tcHV0ZWRTdHlsZVByb3BlcnR5KGVsLCBwcm9wTmFtZSkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVtwcm9wTmFtZV07XG4gICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHtcbiAgICAgIHJldHVybiBlbC5jdXJyZW50U3R5bGVbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnVuZG8uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlVW5kbygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnJlZG8uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlUmVkbygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmJvbGQgPSBib2xkO1xuICAgICAgdGhpcy50b2dnbGVCb2xkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0VW5kZXJsaW5lQ2hhbmdlLnN1YnNjcmliZSgodW5kZXJsaW5lOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICAgIHRoaXMudG9nZ2xlVW5kZXJsaW5lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLml0YWxpYyA9IGl0YWxpYztcbiAgICAgIHRoaXMudG9nZ2xlSXRhbGljKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Q29sb3JDaGFuZ2Uuc3Vic2NyaWJlKCgoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5zZXRDb2xvcihjb2xvcik7XG4gICAgfSkpO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKCgoYmdjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmJnQ29sb3IgPSBiZ2NvbG9yO1xuICAgICAgdGhpcy5zZXRCZ0NvbG9yKGJnY29sb3IpO1xuICAgIH0pKTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250U2l6ZUNoYW5nZS5zdWJzY3JpYmUoKChmb250U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnNldEZvbnRTaXplKGZvbnRTaXplKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoKGZvbnQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb250ID0gZm9udDtcbiAgICAgIHRoaXMuc2V0Rm9udChmb250KTtcbiAgICB9KSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0U3RyaWtlb3V0Q2hhbmdlLnN1YnNjcmliZSgoc3RyaWtlb3V0OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcbiAgICAgIHRoaXMudG9nZ2xlU3RyaWtlb3V0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QWxpZ25DaGFuZ2Uuc3Vic2NyaWJlKChhbGlnbjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFsaWduID0gYWxpZ247XG4gICAgICB0aGlzLnRvZ2dsZUFsaWduKHRoaXMuYWxpZ24pO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLnRvZ2dsZUxpc3QodGhpcy5saXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlQm9sZCgpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImJvbGRcIik7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVVuZGVybGluZSgpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInVuZGVybGluZVwiKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlSXRhbGljKCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRCZ0NvbG9yKGJnQ29sb3I6IHN0cmluZykge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYmFja0NvbG9yXCIsIGZhbHNlLCBiZ0NvbG9yKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZm9yZUNvbG9yXCIsIGZhbHNlLCBjb2xvcik7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHNldEZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSkge1xuICAgICAgbGV0IHNwYW5TdHJpbmcgPSBcIjxzcGFuIHN0eWxlPSdmb250LXNpemU6IFwiICsgZm9udFNpemUgKyBcInB4OyBjb2xvcjogXCIgKyB0aGlzLmNvbG9yICsgXCI7IGJhY2tncm91bmQtY29sb3I6IFwiICsgdGhpcy5iZ0NvbG9yICsgXCI7IGZvbnQtZmFtaWx5OiBcIiArIHRoaXMuZm9udCArIFwiJz5cIiArXG4gICAgICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpICsgXCI8L3NwYW4+XCI7XG4gICAgICBpZiAodGhpcy5ib2xkKSB7XG4gICAgICAgIHNwYW5TdHJpbmcgPSBcIjxiPlwiICsgc3BhblN0cmluZyArIFwiPC9iPlwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXRhbGljKSB7XG4gICAgICAgIHNwYW5TdHJpbmcgPSBcIjxpPlwiICsgc3BhblN0cmluZyArIFwiPC9pPlwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudW5kZXJsaW5lKSB7XG4gICAgICAgIHNwYW5TdHJpbmcgPSBcIjx1PlwiICsgc3BhblN0cmluZyArIFwiPC91PlwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RyaWtlb3V0KSB7XG4gICAgICAgIHNwYW5TdHJpbmcgPSBcIjxzdHJpa2U+XCIgKyBzcGFuU3RyaW5nICsgXCI8L3N0cmlrZT5cIjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIHNwYW5TdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvbnRzaXplXCIsIGZhbHNlLCBcIjdcIik7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVVbmRvKCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kb1wiKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUmVkbygpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInJlZG9cIik7XG4gIH1cblxuICBwcml2YXRlIHNldEZvbnQoZm9udDogc3RyaW5nKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb250TmFtZVwiLCBmYWxzZSwgZm9udCk7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVN0cmlrZW91dCgpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUFsaWduKGFsaWduOiBzdHJpbmcpIHtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMudG9nZ2xlQWxpZ25JRShhbGlnbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3R5bGVXaXRoQ1NTXCIsIGZhbHNlLCAndHJ1ZScpO1xuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5Q2VudGVyJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5RnVsbCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeUxlZnQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5UmlnaHQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVBbGlnbklFKGFsaWduOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKVxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLmZvY3VzTm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYoYWxpZ24gPT09IFwiZnVsbFwiKXtcbiAgICAgIGFsaWduID0gXCJqdXN0aWZ5XCI7XG4gICAgfVxuICAgICQoc2VsZWN0aW9uKS5jc3MoXCJ0ZXh0LWFsaWduXCIsIGFsaWduKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVMaXN0KGxpc3Q6IHN0cmluZykge1xuICAgIHN3aXRjaCAobGlzdCkge1xuICAgICAgY2FzZSAndW5vcmRlcmVkJzpcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvcmRlcmVkJzpcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxufVxuIl19