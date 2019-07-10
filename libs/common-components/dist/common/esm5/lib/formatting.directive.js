import * as tslib_1 from "tslib";
import { Directive, HostListener } from '@angular/core';
import { FormattingService } from "./formatting.service";
import { BackFormattingService } from "./back-formatting.service";
import * as jquery from 'jquery';
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
    FormattingDirective.prototype.mouseup = function () {
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
    FormattingDirective.prototype.checkJustify = function () {
        var align = "";
        align = document.queryCommandState("justifyCenter") ? "center" : align;
        align = document.queryCommandState("justifyFull") ? "full" : align;
        align = document.queryCommandState("justifyLeft") ? "left" : align;
        align = document.queryCommandState("justifyRight") ? "right" : align;
        return align;
    };
    FormattingDirective.prototype.checkList = function () {
        var list = "";
        list = document.queryCommandState("insertUnorderedList") ? "unordered" : list;
        list = document.queryCommandState("insertOrderedList") ? "ordered" : list;
        return list;
    };
    FormattingDirective.prototype.reportFontSize = function () {
        var containerEl, sel;
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
    FormattingDirective.prototype.getComputedStyleProperty = function (el, propName) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[propName];
        }
        else if (el.currentStyle) {
            return el.currentStyle[propName];
        }
    };
    FormattingDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._formattingService.undo.subscribe(function () {
            _this.toggleUndo();
        });
        this._formattingService.redo.subscribe(function () {
            _this.toggleRedo();
        });
        this._formattingService.formatBoldChange.subscribe(function (bold) {
            _this.bold = bold;
            _this.toggleBold();
        });
        this._formattingService.formatUnderlineChange.subscribe(function (underline) {
            _this.underline = underline;
            _this.toggleUnderline();
        });
        this._formattingService.formatItalicChange.subscribe(function (italic) {
            _this.italic = italic;
            _this.toggleItalic();
        });
        this._formattingService.formatColorChange.subscribe((function (color) {
            _this.color = color;
            _this.setColor(color);
        }));
        this._formattingService.formatBgColorChange.subscribe((function (bgcolor) {
            _this.bgColor = bgcolor;
            _this.setBgColor(bgcolor);
        }));
        this._formattingService.formatFontSizeChange.subscribe((function (fontSize) {
            _this.setFontSize(fontSize);
        }));
        this._formattingService.formatFontChange.subscribe((function (font) {
            _this.font = font;
            _this.setFont(font);
        }));
        this._formattingService.formatStrikeoutChange.subscribe(function (strikeout) {
            _this.strikeout = strikeout;
            _this.toggleStrikeout();
        });
        this._formattingService.formatAlignChange.subscribe(function (align) {
            _this.align = align;
            _this.toggleAlign(_this.align);
        });
        this._formattingService.formatListChange.subscribe(function (list) {
            _this.list = list;
            _this.toggleList(_this.list);
        });
    };
    FormattingDirective.prototype.toggleBold = function () {
        document.execCommand("bold");
        this._selectionService.refreshSelection();
    };
    FormattingDirective.prototype.toggleUnderline = function () {
        document.execCommand("underline");
        this._selectionService.refreshSelection();
    };
    FormattingDirective.prototype.toggleItalic = function () {
        document.execCommand("italic");
        this._selectionService.refreshSelection();
    };
    FormattingDirective.prototype.setBgColor = function (bgColor) {
        document.execCommand("backColor", false, bgColor);
        this._selectionService.refreshSelection();
    };
    FormattingDirective.prototype.setColor = function (color) {
        document.execCommand("foreColor", false, color);
        this._selectionService.refreshSelection();
    };
    FormattingDirective.prototype.setFontSize = function (fontSize) {
        if (document.getSelection().toString()) {
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
    FormattingDirective.prototype.toggleUndo = function () {
        document.execCommand("undo");
    };
    FormattingDirective.prototype.toggleRedo = function () {
        document.execCommand("redo");
    };
    FormattingDirective.prototype.setFont = function (font) {
        document.execCommand("fontName", false, font);
        this._selectionService.refreshSelection();
    };
    FormattingDirective.prototype.toggleStrikeout = function () {
        document.execCommand("strikeThrough");
        this._selectionService.refreshSelection();
    };
    FormattingDirective.prototype.toggleAlign = function (align) {
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
    FormattingDirective.prototype.toggleAlignIE = function (align) {
        this._selectionService.restoreSelection();
        this._selectionService.captureSelection();
        var selection = window.getSelection().focusNode.parentNode.parentNode;
        if (align === "full") {
            align = "justify";
        }
        $(selection).css("text-align", align);
        this._selectionService.refreshSelection();
    };
    FormattingDirective.prototype.toggleList = function (list) {
        switch (list) {
            case 'unordered':
                document.execCommand('insertUnorderedList');
                break;
            case 'ordered':
                document.execCommand('insertOrderedList');
                break;
        }
        this._selectionService.refreshSelection();
    };
    tslib_1.__decorate([
        HostListener('mouseup'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], FormattingDirective.prototype, "mouseup", null);
    FormattingDirective = tslib_1.__decorate([
        Directive({
            selector: '[gdFormatting]'
        }),
        tslib_1.__metadata("design:paramtypes", [FormattingService,
            BackFormattingService,
            SelectionService])
    ], FormattingDirective);
    return FormattingDirective;
}());
export { FormattingDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0dGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNqQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUtyRDtJQWFFLDZCQUFvQixrQkFBcUMsRUFDckMsc0JBQTZDLEVBQzdDLGlCQUFtQztRQUZuQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFDN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQWIvQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdsQixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBS25CLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFBLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRXdCLHFDQUFPLEdBQVA7UUFFdkIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7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ImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9mb3JtYXR0aW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFja0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9iYWNrLWZvcm1hdHRpbmcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5jb25zdCAkID0ganF1ZXJ5O1xuaW1wb3J0IHtTZWxlY3Rpb25TZXJ2aWNlfSBmcm9tICcuL3NlbGVjdGlvbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkRm9ybWF0dGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgYm9sZCA9IGZhbHNlO1xuICBwcml2YXRlIGl0YWxpYyA9IGZhbHNlO1xuICBwcml2YXRlIHVuZGVybGluZSA9IGZhbHNlO1xuICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgYmdDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGZvbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzdHJpa2VvdXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBhbGlnbjogc3RyaW5nO1xuICBwcml2YXRlIGxpc3Q6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0lFID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9iYWNrRm9ybWF0dGluZ1NlcnZpY2U6IEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSkge1xuICAgIHRoaXMuaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcpIG1vdXNldXAoKSB7XG5cbiAgICB0aGlzLmJvbGQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImJvbGRcIik7XG4gICAgdGhpcy5zdHJpa2VvdXQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcInN0cmlrZVRocm91Z2hcIik7XG4gICAgdGhpcy5pdGFsaWMgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcIml0YWxpY1wiKTtcbiAgICB0aGlzLmJnQ29sb3IgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShcImJhY2tDb2xvclwiKTtcbiAgICB0aGlzLnVuZGVybGluZSA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwidW5kZXJsaW5lXCIpO1xuICAgIHRoaXMuYWxpZ24gPSB0aGlzLmNoZWNrSnVzdGlmeSgpO1xuICAgIHRoaXMubGlzdCA9IHRoaXMuY2hlY2tMaXN0KCk7XG5cbiAgICAvL2ZpeCByZXF1aXJlZCBieSBGaXJlRm94IHRvIGdldCBjb3JyZWN0IGJhY2tncm91bmQgY29sb3JcbiAgICBpZiAodGhpcy5iZ0NvbG9yID09PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgIHRoaXMuYmdDb2xvciA9ICQod2luZG93LmdldFNlbGVjdGlvbigpLmZvY3VzTm9kZS5wYXJlbnROb2RlKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKS50b1N0cmluZygpO1xuICAgIH1cbiAgICB0aGlzLmZvbnQgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShcIkZvbnROYW1lXCIpLnJlcGxhY2UoL1wiL2csICcnKTtcbiAgICBpZih0aGlzLmZvbnQuc3BsaXQoXCIsXCIpLmxlbmd0aCA+IDEpe1xuICAgICAgdGhpcy5mb250ID0gdGhpcy5mb250LnNwbGl0KFwiLFwiKVswXTtcbiAgICB9XG4gICAgdGhpcy5jb2xvciA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKFwiZm9yZUNvbG9yXCIpO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCb2xkKHRoaXMuYm9sZCk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdFVuZGVybGluZSh0aGlzLnVuZGVybGluZSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEl0YWxpYyh0aGlzLml0YWxpYyk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdENvbG9yKHRoaXMuY29sb3IpO1xuICAgIHRoaXMuX2JhY2tGb3JtYXR0aW5nU2VydmljZS5jaGFuZ2VGb3JtYXRCZ0NvbG9yKHRoaXMuYmdDb2xvcik7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnRTaXplKHRoaXMucmVwb3J0Rm9udFNpemUoKSk7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdEZvbnQodGhpcy5mb250KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0U3RyaWtlb3V0KHRoaXMuc3RyaWtlb3V0KTtcbiAgICB0aGlzLl9iYWNrRm9ybWF0dGluZ1NlcnZpY2UuY2hhbmdlRm9ybWF0QWxpZ24odGhpcy5hbGlnbik7XG4gICAgdGhpcy5fYmFja0Zvcm1hdHRpbmdTZXJ2aWNlLmNoYW5nZUZvcm1hdExpc3QodGhpcy5saXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tKdXN0aWZ5KCkge1xuICAgIGxldCBhbGlnbiA9IFwiXCI7XG4gICAgYWxpZ24gPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImp1c3RpZnlDZW50ZXJcIikgPyBcImNlbnRlclwiIDogYWxpZ247XG4gICAgYWxpZ24gPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImp1c3RpZnlGdWxsXCIpID8gXCJmdWxsXCIgOiBhbGlnbjtcbiAgICBhbGlnbiA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwianVzdGlmeUxlZnRcIikgPyBcImxlZnRcIiA6IGFsaWduO1xuICAgIGFsaWduID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5UmlnaHRcIikgPyBcInJpZ2h0XCIgOiBhbGlnbjtcbiAgICByZXR1cm4gYWxpZ247XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGlzdCgpIHtcbiAgICBsZXQgbGlzdCA9IFwiXCI7XG4gICAgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKFwiaW5zZXJ0VW5vcmRlcmVkTGlzdFwiKSA/IFwidW5vcmRlcmVkXCIgOiBsaXN0O1xuICAgIGxpc3QgPSBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShcImluc2VydE9yZGVyZWRMaXN0XCIpID8gXCJvcmRlcmVkXCIgOiBsaXN0O1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgcmVwb3J0Rm9udFNpemUoKTogbnVtYmVyIHtcbiAgICBsZXQgY29udGFpbmVyRWwsIHNlbDtcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgaWYgKHNlbC5yYW5nZUNvdW50KSB7XG4gICAgICAgIGNvbnRhaW5lckVsID0gc2VsLmdldFJhbmdlQXQoMCkuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGFuIGVsZW1lbnQgcmF0aGVyIHRoYW4gYSB0ZXh0IG5vZGVcbiAgICAgICAgaWYgKGNvbnRhaW5lckVsLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgY29udGFpbmVyRWwgPSBjb250YWluZXJFbC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpICYmIHNlbC50eXBlICE9PSBcIkNvbnRyb2xcIikge1xuICAgICAgY29udGFpbmVyRWwgPSBzZWwuY3JlYXRlUmFuZ2UoKS5wYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lckVsKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRDb21wdXRlZFN0eWxlUHJvcGVydHkoY29udGFpbmVyRWwsIFwiZm9udFNpemVcIikucmVwbGFjZShcInB4XCIsIFwiXCIpLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29tcHV0ZWRTdHlsZVByb3BlcnR5KGVsLCBwcm9wTmFtZSkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVtwcm9wTmFtZV07XG4gICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHtcbiAgICAgIHJldHVybiBlbC5jdXJyZW50U3R5bGVbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnVuZG8uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlVW5kbygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLnJlZG8uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlUmVkbygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJvbGRDaGFuZ2Uuc3Vic2NyaWJlKChib2xkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmJvbGQgPSBib2xkO1xuICAgICAgdGhpcy50b2dnbGVCb2xkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0VW5kZXJsaW5lQ2hhbmdlLnN1YnNjcmliZSgodW5kZXJsaW5lOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnVuZGVybGluZSA9IHVuZGVybGluZTtcbiAgICAgIHRoaXMudG9nZ2xlVW5kZXJsaW5lKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0SXRhbGljQ2hhbmdlLnN1YnNjcmliZSgoaXRhbGljOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLml0YWxpYyA9IGl0YWxpYztcbiAgICAgIHRoaXMudG9nZ2xlSXRhbGljKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0Q29sb3JDaGFuZ2Uuc3Vic2NyaWJlKCgoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5zZXRDb2xvcihjb2xvcik7XG4gICAgfSkpO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdEJnQ29sb3JDaGFuZ2Uuc3Vic2NyaWJlKCgoYmdjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmJnQ29sb3IgPSBiZ2NvbG9yO1xuICAgICAgdGhpcy5zZXRCZ0NvbG9yKGJnY29sb3IpO1xuICAgIH0pKTtcbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250U2l6ZUNoYW5nZS5zdWJzY3JpYmUoKChmb250U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnNldEZvbnRTaXplKGZvbnRTaXplKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLl9mb3JtYXR0aW5nU2VydmljZS5mb3JtYXRGb250Q2hhbmdlLnN1YnNjcmliZSgoKGZvbnQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5mb250ID0gZm9udDtcbiAgICAgIHRoaXMuc2V0Rm9udChmb250KTtcbiAgICB9KSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0U3RyaWtlb3V0Q2hhbmdlLnN1YnNjcmliZSgoc3RyaWtlb3V0OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnN0cmlrZW91dCA9IHN0cmlrZW91dDtcbiAgICAgIHRoaXMudG9nZ2xlU3RyaWtlb3V0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZm9ybWF0dGluZ1NlcnZpY2UuZm9ybWF0QWxpZ25DaGFuZ2Uuc3Vic2NyaWJlKChhbGlnbjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmFsaWduID0gYWxpZ247XG4gICAgICB0aGlzLnRvZ2dsZUFsaWduKHRoaXMuYWxpZ24pO1xuICAgIH0pO1xuICAgIHRoaXMuX2Zvcm1hdHRpbmdTZXJ2aWNlLmZvcm1hdExpc3RDaGFuZ2Uuc3Vic2NyaWJlKChsaXN0OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLnRvZ2dsZUxpc3QodGhpcy5saXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlQm9sZCgpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImJvbGRcIik7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVVuZGVybGluZSgpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInVuZGVybGluZVwiKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlSXRhbGljKCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRCZ0NvbG9yKGJnQ29sb3I6IHN0cmluZykge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYmFja0NvbG9yXCIsIGZhbHNlLCBiZ0NvbG9yKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZm9yZUNvbG9yXCIsIGZhbHNlLCBjb2xvcik7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHNldEZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSkge1xuICAgICAgbGV0IHNwYW5TdHJpbmcgPSBcIjxzcGFuIHN0eWxlPSdmb250LXNpemU6IFwiICsgZm9udFNpemUgKyBcInB4OyBjb2xvcjogXCIgKyB0aGlzLmNvbG9yICsgXCI7IGJhY2tncm91bmQtY29sb3I6IFwiICsgdGhpcy5iZ0NvbG9yICsgXCI7IGZvbnQtZmFtaWx5OiBcIiArIHRoaXMuZm9udCArIFwiJz5cIiArXG4gICAgICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpICsgXCI8L3NwYW4+XCI7XG4gICAgICBpZiAodGhpcy5ib2xkKSB7XG4gICAgICAgIHNwYW5TdHJpbmcgPSBcIjxiPlwiICsgc3BhblN0cmluZyArIFwiPC9iPlwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXRhbGljKSB7XG4gICAgICAgIHNwYW5TdHJpbmcgPSBcIjxpPlwiICsgc3BhblN0cmluZyArIFwiPC9pPlwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudW5kZXJsaW5lKSB7XG4gICAgICAgIHNwYW5TdHJpbmcgPSBcIjx1PlwiICsgc3BhblN0cmluZyArIFwiPC91PlwiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RyaWtlb3V0KSB7XG4gICAgICAgIHNwYW5TdHJpbmcgPSBcIjxzdHJpa2U+XCIgKyBzcGFuU3RyaW5nICsgXCI8L3N0cmlrZT5cIjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIHNwYW5TdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvbnRzaXplXCIsIGZhbHNlLCBcIjdcIik7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVVbmRvKCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kb1wiKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUmVkbygpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInJlZG9cIik7XG4gIH1cblxuICBwcml2YXRlIHNldEZvbnQoZm9udDogc3RyaW5nKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb250TmFtZVwiLCBmYWxzZSwgZm9udCk7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVN0cmlrZW91dCgpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZVRocm91Z2hcIik7XG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5yZWZyZXNoU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUFsaWduKGFsaWduOiBzdHJpbmcpIHtcbiAgICBpZih0aGlzLmlzSUUpIHtcbiAgICAgIHRoaXMudG9nZ2xlQWxpZ25JRShhbGlnbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3R5bGVXaXRoQ1NTXCIsIGZhbHNlLCAndHJ1ZScpO1xuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5Q2VudGVyJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5RnVsbCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeUxlZnQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5UmlnaHQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UucmVmcmVzaFNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVBbGlnbklFKGFsaWduOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlc3RvcmVTZWxlY3Rpb24oKVxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2FwdHVyZVNlbGVjdGlvbigpXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLmZvY3VzTm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYoYWxpZ24gPT09IFwiZnVsbFwiKXtcbiAgICAgIGFsaWduID0gXCJqdXN0aWZ5XCI7XG4gICAgfVxuICAgICQoc2VsZWN0aW9uKS5jc3MoXCJ0ZXh0LWFsaWduXCIsIGFsaWduKTtcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVMaXN0KGxpc3Q6IHN0cmluZykge1xuICAgIHN3aXRjaCAobGlzdCkge1xuICAgICAgY2FzZSAndW5vcmRlcmVkJzpcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvcmRlcmVkJzpcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnJlZnJlc2hTZWxlY3Rpb24oKTtcbiAgfVxufVxuIl19