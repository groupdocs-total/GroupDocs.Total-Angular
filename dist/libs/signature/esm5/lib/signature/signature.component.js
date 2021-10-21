/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Position, AddedSignature, SignatureType, RemoveSign, DraggableSignature, CopySign, CopyChanges } from "../signature-models";
import { Formatting, Utils, MenuType, ZoomService } from "@groupdocs.examples.angular/common-components";
import { SignatureService } from "../signature.service";
import { RemoveSignatureService } from "../remove-signature.service";
import { ActiveSignatureService } from "../active-signature.service";
import * as jquery from 'jquery';
import { SignaturesHolderService } from "../signatures-holder.service";
import { CopySignatureService } from "../copy-signature.service";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
/** @type {?} */
var $ = jquery;
var Signature = /** @class */ (function () {
    function Signature(_signatureService, _removeSignatureService, _copySignatureService, _activeSignatureService, _signaturesHolderService, _zoomService) {
        var _this = this;
        this._signatureService = _signatureService;
        this._removeSignatureService = _removeSignatureService;
        this._copySignatureService = _copySignatureService;
        this._activeSignatureService = _activeSignatureService;
        this._signaturesHolderService = _signaturesHolderService;
        this._zoomService = _zoomService;
        this.active = true;
        this.unlock = true;
        this.copied = false;
        this.baseCopied = false;
        this.subject = new Subject();
        this._activeSignatureService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (_this.id === id) {
                _this.active = true;
            }
            else {
                _this.active = false;
            }
        }));
        this.subject.pipe(debounceTime(300)).subscribe((/**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            _this.notifyChanges();
            _this.sendSaveText();
        }));
    }
    /**
     * @return {?}
     */
    Signature.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    Signature.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._zoomService.changeZoom(this._zoomService.zoom);
    };
    /**
     * @return {?}
     */
    Signature.prototype.getData = /**
     * @return {?}
     */
    function () {
        return 'data:image/png;base64,' + this.data.data;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.dragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.dragStart = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.oldPosition = Utils.getMousePosition($event);
        if ($event.dataTransfer) {
            $event.dataTransfer.setData('text', 'foo');
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.dragging = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var position = Utils.getMousePosition($event);
        if (position.x && position.y && this.isOnPage(position)) {
            /** @type {?} */
            var left = position.x - this.oldPosition.x;
            /** @type {?} */
            var top_1 = position.y - this.oldPosition.y;
            this.position.left += left;
            this.position.top += top_1;
            this.correctPosition();
            this.oldPosition = position;
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    Signature.prototype.isOnPage = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var currentPage = document.elementFromPoint(position.x, position.y);
        return currentPage && $(currentPage).parent().parent() &&
            ($(currentPage).parent().parent().parent().hasClass("page") ||
                $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
    };
    /**
     * @return {?}
     */
    Signature.prototype.isText = /**
     * @return {?}
     */
    function () {
        return SignatureType.TEXT.id === this.type;
    };
    /**
     * @return {?}
     */
    Signature.prototype.getFormatting = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var f = this.data.props;
        /** @type {?} */
        var formatting = Formatting.default();
        if (f) {
            formatting.fontSize = f.fontSize;
            formatting.font = f.font;
            formatting.color = f.fontColor;
            formatting.bold = f.bold;
            formatting.underline = f.underline;
            formatting.italic = f.italic;
        }
        return formatting;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.saveTextSignature = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.data.props) {
            this.fillFormatting($event);
            this.notifyChanges();
            this.sendSaveText();
        }
    };
    /**
     * @private
     * @param {?} formatting
     * @return {?}
     */
    Signature.prototype.fillFormatting = /**
     * @private
     * @param {?} formatting
     * @return {?}
     */
    function (formatting) {
        this.data.props.fontSize = formatting.fontSize;
        this.data.props.font = formatting.font;
        this.data.props.bold = formatting.bold;
        this.data.props.italic = formatting.italic;
        this.data.props.underline = formatting.underline;
        this.data.props.fontColor = formatting.color;
    };
    /**
     * @return {?}
     */
    Signature.prototype.remove = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var del = new RemoveSign();
        del.guid = this.data.guid;
        del.id = this.id;
        del.type = this.type;
        this._removeSignatureService.remove(del);
    };
    /**
     * @return {?}
     */
    Signature.prototype.activation = /**
     * @return {?}
     */
    function () {
        this._activeSignatureService.changeActive(this.id);
    };
    /**
     * @return {?}
     */
    Signature.prototype.isDigital = /**
     * @return {?}
     */
    function () {
        return this.type === SignatureType.DIGITAL.id;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.width = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.data.width += $event;
        if (!this.unlock) {
            this.data.height += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.height = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.data.height += $event;
        if (!this.unlock) {
            this.data.width += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.left = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.unlock) {
            this.position.left += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.top = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.unlock) {
            this.position.top += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    };
    /**
     * @return {?}
     */
    Signature.prototype.notifyChanges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var changes = new CopyChanges();
        changes.guid = this.data.guid;
        changes.id = this.id;
        changes.position = this.position;
        changes.width = this.data.width;
        changes.height = this.data.height;
        changes.props = this.data.props;
        this._copySignatureService.notifyChanges(changes);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.drop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
    };
    /**
     * @return {?}
     */
    Signature.prototype.isInit = /**
     * @return {?}
     */
    function () {
        return this.data.width === 0 && this.data.height === 0;
    };
    /**
     * @return {?}
     */
    Signature.prototype.onCopySign = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var copy = new CopySign();
        copy.guid = this.data.guid;
        copy.id = this.id;
        copy.type = this.type;
        this._copySignatureService.copy(copy);
    };
    /**
     * @return {?}
     */
    Signature.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.type === SignatureType.TEXT.id) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = $("#text");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
    };
    /**
     * @private
     * @return {?}
     */
    Signature.prototype.correctPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.position.left < 0) {
            this.position.left = 0;
        }
        if (this.position.top < 0) {
            this.position.top = 0;
        }
        if (this.position.top + this.data.height > this.pageHeight) {
            this.position.top = this.pageHeight - this.data.height;
        }
        if (this.position.left + this.data.width > this.pageWidth) {
            this.position.left = this.pageWidth - this.data.width;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Signature.prototype.saveText = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.data.props.text = value;
        this.subject.next(value);
    };
    /**
     * @private
     * @return {?}
     */
    Signature.prototype.sendSaveText = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._signatureService.saveTextSignature(this.data).subscribe((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            if (DraggableSignature.TEMP === _this.data.guid) {
                _this._signaturesHolderService.changeTemp(p.imageGuid, _this.id);
                _this.data.guid = p.imageGuid;
            }
            _this.data.props = p;
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Signature.prototype.hideMenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._activeSignatureService.changeActive(null);
    };
    /**
     * @return {?}
     */
    Signature.prototype.getMenuShift = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menuWidth = this.type === SignatureType.TEXT.id ? 426 : 148;
        /** @type {?} */
        var shift = this.data.width > menuWidth ? 0 : (this.data.width - menuWidth) * 0.5;
        if (this.position.left - (menuWidth - this.data.width) / 2 < 0) {
            shift -= (this.position.left - (menuWidth - this.data.width) / 2);
        }
        if (this.position.left + (menuWidth + this.data.width) / 2 > this.pageWidth) {
            shift -= (this.position.left + (menuWidth + this.data.width) / 2 - this.pageWidth);
        }
        return shift;
    };
    /**
     * @return {?}
     */
    Signature.prototype.getMenuType = /**
     * @return {?}
     */
    function () {
        return MenuType.FOR_SIGNATURE;
    };
    Signature.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature-component',
                    template: "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\n     [style.width.px]=\"data.width ? data.width : undefined\"\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-signature-wrapper\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeItem)=\"remove()\" (copySign)=\"onCopySign()\"\n                     [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"\n                     [menuType]=\"getMenuType()\"></gd-context-menu>\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\n              [style.color]=\"data.props?.fontColor\"\n              [style.font-family]=\"data?.props.font\"\n              [style.font-size.px]=\"data?.props.fontSize\"\n              [style.width.px]=\"data.width ? data.width : undefined\"\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\n  </div>\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\n</div>\n",
                    styles: [".gd-signature{position:absolute!important}.gd-signature .gd-signature-wrapper{height:inherit;outline:#679ffa solid 1px}.gd-signature-image{width:100%!important;height:inherit}.gd-text{width:inherit;height:inherit;border:none;resize:none;outline:0;margin:0;padding:0}.gd-digital-marker{background-color:#3787f5;height:16px;width:100%;text-align:left;display:-webkit-box;display:flex;position:absolute;bottom:0}.gd-digital-marker .icon{color:#fff;font-size:10px;margin:0 5px 0 3px}.gd-digital-marker div{-webkit-box-flex:1;flex-grow:1;font-size:8px;color:#fff;margin-top:1px}"]
                }] }
    ];
    /** @nocollapse */
    Signature.ctorParameters = function () { return [
        { type: SignatureService },
        { type: RemoveSignatureService },
        { type: CopySignatureService },
        { type: ActiveSignatureService },
        { type: SignaturesHolderService },
        { type: ZoomService }
    ]; };
    Signature.propDecorators = {
        id: [{ type: Input }],
        data: [{ type: Input }],
        position: [{ type: Input }],
        type: [{ type: Input }],
        pageWidth: [{ type: Input }],
        pageHeight: [{ type: Input }]
    };
    return Signature;
}());
export { Signature };
if (false) {
    /** @type {?} */
    Signature.prototype.id;
    /** @type {?} */
    Signature.prototype.data;
    /** @type {?} */
    Signature.prototype.position;
    /** @type {?} */
    Signature.prototype.type;
    /** @type {?} */
    Signature.prototype.pageWidth;
    /** @type {?} */
    Signature.prototype.pageHeight;
    /** @type {?} */
    Signature.prototype.active;
    /** @type {?} */
    Signature.prototype.unlock;
    /** @type {?} */
    Signature.prototype.copied;
    /** @type {?} */
    Signature.prototype.baseCopied;
    /**
     * @type {?}
     * @private
     */
    Signature.prototype.oldPosition;
    /**
     * @type {?}
     * @private
     */
    Signature.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    Signature.prototype._signatureService;
    /**
     * @type {?}
     * @private
     */
    Signature.prototype._removeSignatureService;
    /**
     * @type {?}
     * @private
     */
    Signature.prototype._copySignatureService;
    /**
     * @type {?}
     * @private
     */
    Signature.prototype._activeSignatureService;
    /**
     * @type {?}
     * @private
     */
    Signature.prototype._signaturesHolderService;
    /**
     * @type {?}
     * @private
     */
    Signature.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUViLFVBQVUsRUFDVixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLFdBQVcsRUFDWixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFdEMsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFvQkUsbUJBQW9CLGlCQUFtQyxFQUNuQyx1QkFBK0MsRUFDL0MscUJBQTJDLEVBQzNDLHVCQUErQyxFQUMvQyx3QkFBaUQsRUFDakQsWUFBeUI7UUFMN0MsaUJBcUJDO1FBckJtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUFDL0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUMzQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO1FBQy9DLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFiN0MsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUdYLFlBQU8sR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVMvQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQVU7WUFDN0QsSUFBSSxLQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNmLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2QsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0QkFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsc0NBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCwyQkFBTzs7O0lBQVA7UUFDRSxPQUFPLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsNEJBQVE7Ozs7SUFBUixVQUFTLE1BQWlCO1FBQ3hCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCw2QkFBUzs7OztJQUFULFVBQVUsTUFBaUI7UUFDekIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7OztJQUVELDRCQUFROzs7O0lBQVIsVUFBUyxNQUFNO1FBQ2IsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUNsQixRQUFRLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztnQkFDakQsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztnQkFDdEMsS0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxLQUFHLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0QkFBUTs7OztJQUFSLFVBQVMsUUFBUTs7WUFDVCxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRSxPQUFPLFdBQVcsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ3BELENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7O0lBRUQsMEJBQU07OztJQUFOO1FBQ0UsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxpQ0FBYTs7O0lBQWI7O1lBQ1EsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSzs7WUFDbkIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUU7UUFDdkMsSUFBSSxDQUFDLEVBQUU7WUFDTCxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDakMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMvQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekIsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUM5QjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQscUNBQWlCOzs7O0lBQWpCLFVBQWtCLE1BQWtCO1FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sa0NBQWM7Ozs7O0lBQXRCLFVBQXVCLFVBQXNCO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCwwQkFBTTs7O0lBQU47O1lBQ1EsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCw4QkFBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsNkJBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQseUJBQUs7Ozs7SUFBTCxVQUFNLE1BQU07UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDBCQUFNOzs7O0lBQU4sVUFBTyxNQUFNO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCx3QkFBSTs7OztJQUFKLFVBQUssTUFBTTtRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCx1QkFBRzs7OztJQUFILFVBQUksTUFBTTtRQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGlDQUFhOzs7SUFBYjs7WUFDUSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7UUFDakMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDckIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCx3QkFBSTs7OztJQUFKLFVBQUssTUFBaUI7UUFDcEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsMEJBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCw4QkFBVTs7O0lBQVY7O1lBQ1EsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxtQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdkMsVUFBVTs7O1lBQUM7O29CQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUMxQixJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDOzs7OztJQUVPLG1DQUFlOzs7O0lBQXZCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDeEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7O0lBRUQsNEJBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLGdDQUFZOzs7O0lBQXBCO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLENBQWlCO1lBQzlFLElBQUksa0JBQWtCLENBQUMsSUFBSSxLQUFLLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUM5QyxLQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO2FBQzlCO1lBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw0QkFBUTs7OztJQUFSLFVBQVMsTUFBTTtRQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELGdDQUFZOzs7SUFBWjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHOztZQUM3RCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRztRQUNqRixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5RCxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzNFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELCtCQUFXOzs7SUFBWDtRQUNFLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDOztnQkFuUUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHV2RkFBeUM7O2lCQUUxQzs7OztnQkFmTyxnQkFBZ0I7Z0JBQ2hCLHNCQUFzQjtnQkFJdEIsb0JBQW9CO2dCQUhwQixzQkFBc0I7Z0JBRXRCLHVCQUF1QjtnQkFMTSxXQUFXOzs7cUJBa0I3QyxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7SUF5UFIsZ0JBQUM7Q0FBQSxBQXBRRCxJQW9RQztTQS9QWSxTQUFTOzs7SUFDcEIsdUJBQW9COztJQUNwQix5QkFBOEI7O0lBQzlCLDZCQUE0Qjs7SUFDNUIseUJBQXNCOztJQUN0Qiw4QkFBMkI7O0lBQzNCLCtCQUE0Qjs7SUFDNUIsMkJBQWM7O0lBQ2QsMkJBQWM7O0lBQ2QsMkJBQWU7O0lBQ2YsK0JBQW1COzs7OztJQUNuQixnQ0FBOEM7Ozs7O0lBRTlDLDRCQUFpRDs7Ozs7SUFFckMsc0NBQTJDOzs7OztJQUMzQyw0Q0FBdUQ7Ozs7O0lBQ3ZELDBDQUFtRDs7Ozs7SUFDbkQsNENBQXVEOzs7OztJQUN2RCw2Q0FBeUQ7Ozs7O0lBQ3pELGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBvc2l0aW9uLFxuICBBZGRlZFNpZ25hdHVyZSxcbiAgU2lnbmF0dXJlVHlwZSxcbiAgU2lnbmF0dXJlUHJvcHMsXG4gIFJlbW92ZVNpZ24sXG4gIERyYWdnYWJsZVNpZ25hdHVyZSxcbiAgQ29weVNpZ24sXG4gIENvcHlDaGFuZ2VzXG59IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge0Zvcm1hdHRpbmcsIFV0aWxzLCBNZW51VHlwZSwgWm9vbVNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7QWN0aXZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL2FjdGl2ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge1NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZVwiO1xuaW1wb3J0IHtDb3B5U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2lnbmF0dXJlLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBASW5wdXQoKSBpZDogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhOiBBZGRlZFNpZ25hdHVyZTtcbiAgQElucHV0KCkgcG9zaXRpb246IFBvc2l0aW9uO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlSGVpZ2h0OiBudW1iZXI7XG4gIGFjdGl2ZSA9IHRydWU7XG4gIHVubG9jayA9IHRydWU7XG4gIGNvcGllZCA9IGZhbHNlO1xuICBiYXNlQ29waWVkID0gZmFsc2U7XG4gIHByaXZhdGUgb2xkUG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcblxuICBwcml2YXRlIHN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlU2lnbmF0dXJlU2VydmljZTogUmVtb3ZlU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29weVNpZ25hdHVyZVNlcnZpY2U6IENvcHlTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlOiBBY3RpdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVzSG9sZGVyU2VydmljZTogU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xuXG4gICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc3ViamVjdC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDMwMClcbiAgICApLnN1YnNjcmliZSh0ZXh0ID0+IHtcbiAgICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZW5kU2F2ZVRleHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20odGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyB0aGlzLmRhdGEuZGF0YTtcbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAoJGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmIChwb3NpdGlvbi54ICYmIHBvc2l0aW9uLnkgJiYgdGhpcy5pc09uUGFnZShwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtIHRoaXMub2xkUG9zaXRpb24ueTtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSBsZWZ0O1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMub2xkUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBpc09uUGFnZShwb3NpdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICByZXR1cm4gY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiZcbiAgICAgICgkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikgfHxcbiAgICAgICAgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpKTtcbiAgfVxuXG4gIGlzVGV4dCgpIHtcbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5URVhULmlkID09PSB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRGb3JtYXR0aW5nKCkge1xuICAgIGNvbnN0IGYgPSB0aGlzLmRhdGEucHJvcHM7XG4gICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgIGlmIChmKSB7XG4gICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZi5mb250U2l6ZTtcbiAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGYuZm9udDtcbiAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBmLmZvbnRDb2xvcjtcbiAgICAgIGZvcm1hdHRpbmcuYm9sZCA9IGYuYm9sZDtcbiAgICAgIGZvcm1hdHRpbmcudW5kZXJsaW5lID0gZi51bmRlcmxpbmU7XG4gICAgICBmb3JtYXR0aW5nLml0YWxpYyA9IGYuaXRhbGljO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGluZztcbiAgfVxuXG4gIHNhdmVUZXh0U2lnbmF0dXJlKCRldmVudDogRm9ybWF0dGluZykge1xuICAgIGlmICh0aGlzLmRhdGEucHJvcHMpIHtcbiAgICAgIHRoaXMuZmlsbEZvcm1hdHRpbmcoJGV2ZW50KTtcbiAgICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZW5kU2F2ZVRleHQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbGxGb3JtYXR0aW5nKGZvcm1hdHRpbmc6IEZvcm1hdHRpbmcpIHtcbiAgICB0aGlzLmRhdGEucHJvcHMuZm9udFNpemUgPSBmb3JtYXR0aW5nLmZvbnRTaXplO1xuICAgIHRoaXMuZGF0YS5wcm9wcy5mb250ID0gZm9ybWF0dGluZy5mb250O1xuICAgIHRoaXMuZGF0YS5wcm9wcy5ib2xkID0gZm9ybWF0dGluZy5ib2xkO1xuICAgIHRoaXMuZGF0YS5wcm9wcy5pdGFsaWMgPSBmb3JtYXR0aW5nLml0YWxpYztcbiAgICB0aGlzLmRhdGEucHJvcHMudW5kZXJsaW5lID0gZm9ybWF0dGluZy51bmRlcmxpbmU7XG4gICAgdGhpcy5kYXRhLnByb3BzLmZvbnRDb2xvciA9IGZvcm1hdHRpbmcuY29sb3I7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgY29uc3QgZGVsID0gbmV3IFJlbW92ZVNpZ24oKTtcbiAgICBkZWwuZ3VpZCA9IHRoaXMuZGF0YS5ndWlkO1xuICAgIGRlbC5pZCA9IHRoaXMuaWQ7XG4gICAgZGVsLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgdGhpcy5fcmVtb3ZlU2lnbmF0dXJlU2VydmljZS5yZW1vdmUoZGVsKTtcbiAgfVxuXG4gIGFjdGl2YXRpb24oKSB7XG4gICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XG4gIH1cblxuICBpc0RpZ2l0YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkO1xuICB9XG5cbiAgd2lkdGgoJGV2ZW50KSB7XG4gICAgdGhpcy5kYXRhLndpZHRoICs9ICRldmVudDtcbiAgICBpZiAoIXRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLmRhdGEuaGVpZ2h0ICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIGhlaWdodCgkZXZlbnQpIHtcbiAgICB0aGlzLmRhdGEuaGVpZ2h0ICs9ICRldmVudDtcbiAgICBpZiAoIXRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLmRhdGEud2lkdGggKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgbGVmdCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy51bmxvY2spIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICB0b3AoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICBub3RpZnlDaGFuZ2VzKCkge1xuICAgIGNvbnN0IGNoYW5nZXMgPSBuZXcgQ29weUNoYW5nZXMoKTtcbiAgICBjaGFuZ2VzLmd1aWQgPSB0aGlzLmRhdGEuZ3VpZDtcbiAgICBjaGFuZ2VzLmlkID0gdGhpcy5pZDtcbiAgICBjaGFuZ2VzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjaGFuZ2VzLndpZHRoID0gdGhpcy5kYXRhLndpZHRoO1xuICAgIGNoYW5nZXMuaGVpZ2h0ID0gdGhpcy5kYXRhLmhlaWdodDtcbiAgICBjaGFuZ2VzLnByb3BzID0gdGhpcy5kYXRhLnByb3BzO1xuICAgIHRoaXMuX2NvcHlTaWduYXR1cmVTZXJ2aWNlLm5vdGlmeUNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cblxuICBkcm9wKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaXNJbml0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEud2lkdGggPT09IDAgJiYgdGhpcy5kYXRhLmhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIG9uQ29weVNpZ24oKSB7XG4gICAgY29uc3QgY29weSA9IG5ldyBDb3B5U2lnbigpO1xuICAgIGNvcHkuZ3VpZCA9IHRoaXMuZGF0YS5ndWlkO1xuICAgIGNvcHkuaWQgPSB0aGlzLmlkO1xuICAgIGNvcHkudHlwZSA9IHRoaXMudHlwZTtcbiAgICB0aGlzLl9jb3B5U2lnbmF0dXJlU2VydmljZS5jb3B5KGNvcHkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuVEVYVC5pZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiI3RleHRcIik7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCArIHRoaXMuZGF0YS5oZWlnaHQgPiB0aGlzLnBhZ2VIZWlnaHQpIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wYWdlSGVpZ2h0IC0gdGhpcy5kYXRhLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCArIHRoaXMuZGF0YS53aWR0aCA+IHRoaXMucGFnZVdpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnBhZ2VXaWR0aCAtIHRoaXMuZGF0YS53aWR0aDtcbiAgICB9XG4gIH1cblxuICBzYXZlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhLnByb3BzLnRleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHNlbmRTYXZlVGV4dCgpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnNhdmVUZXh0U2lnbmF0dXJlKHRoaXMuZGF0YSkuc3Vic2NyaWJlKChwOiBTaWduYXR1cmVQcm9wcykgPT4ge1xuICAgICAgaWYgKERyYWdnYWJsZVNpZ25hdHVyZS5URU1QID09PSB0aGlzLmRhdGEuZ3VpZCkge1xuICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5jaGFuZ2VUZW1wKHAuaW1hZ2VHdWlkLCB0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5kYXRhLmd1aWQgPSBwLmltYWdlR3VpZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5wcm9wcyA9IHA7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlTWVudSgkZXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmNoYW5nZUFjdGl2ZShudWxsKTtcbiAgfVxuXG4gIGdldE1lbnVTaGlmdCgpIHtcbiAgICBjb25zdCBtZW51V2lkdGggPSB0aGlzLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuVEVYVC5pZCA/IDQyNiA6IDE0ODtcbiAgICBsZXQgc2hpZnQgPSB0aGlzLmRhdGEud2lkdGggPiBtZW51V2lkdGggPyAwIDogKHRoaXMuZGF0YS53aWR0aCAtIG1lbnVXaWR0aCkgKiAwLjU7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCAtIChtZW51V2lkdGggLSB0aGlzLmRhdGEud2lkdGgpIC8gMiA8IDApIHtcbiAgICAgIHNoaWZ0IC09ICh0aGlzLnBvc2l0aW9uLmxlZnQgLSAobWVudVdpZHRoIC0gdGhpcy5kYXRhLndpZHRoKSAvIDIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgKG1lbnVXaWR0aCArIHRoaXMuZGF0YS53aWR0aCkgLyAyID4gdGhpcy5wYWdlV2lkdGgpIHtcbiAgICAgIHNoaWZ0IC09ICh0aGlzLnBvc2l0aW9uLmxlZnQgKyAobWVudVdpZHRoICsgdGhpcy5kYXRhLndpZHRoKSAvIDIgLSB0aGlzLnBhZ2VXaWR0aCk7XG4gICAgfVxuICAgIHJldHVybiBzaGlmdDtcbiAgfVxuXG4gIGdldE1lbnVUeXBlKCkge1xuICAgIHJldHVybiBNZW51VHlwZS5GT1JfU0lHTkFUVVJFO1xuICB9XG59XG4iXX0=