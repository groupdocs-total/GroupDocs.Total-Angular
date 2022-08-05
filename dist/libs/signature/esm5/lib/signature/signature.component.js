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
     * @param {?=} value
     * @return {?}
     */
    Signature.prototype.saveText = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ""; }
        if (value) {
            this.data.props.text = value;
            this.subject.next(value);
        }
        else {
            this.data.props.text = $("#text").val();
            this.subject.next($("#text").val());
            this.hideMenu(null);
        }
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
        if (!this.isText()) {
            return MenuType.FOR_SIGNATURE;
        }
        else {
            return MenuType.FOR_TEXT_SIGNATURE;
        }
    };
    Signature.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature-component',
                    template: "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\n     [style.width.px]=\"data.width ? data.width : undefined\"\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-signature-wrapper\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeItem)=\"remove()\" (saveItemEmitter)=\"saveText()\" \n                     (copySign)=\"onCopySign()\" [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"\n                     [menuType]=\"getMenuType()\"></gd-context-menu>\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\n              id=\"text\" #text\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\n              [style.color]=\"data.props?.fontColor\"\n              [style.font-family]=\"data?.props.font\"\n              [style.font-size.px]=\"data?.props.fontSize\"\n              [style.width.px]=\"data.width ? data.width : undefined\"\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\n  </div>\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUViLFVBQVUsRUFDVixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLFdBQVcsRUFDWixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFdEMsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFvQkUsbUJBQW9CLGlCQUFtQyxFQUNuQyx1QkFBK0MsRUFDL0MscUJBQTJDLEVBQzNDLHVCQUErQyxFQUMvQyx3QkFBaUQsRUFDakQsWUFBeUI7UUFMN0MsaUJBcUJDO1FBckJtQixzQkFBaUIsR0FB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QztTQUNwRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELCtCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbEIsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDO1NBQy9CO2FBQU07WUFDTCxPQUFPLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQTdRRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsd3ZGQUF5Qzs7aUJBRTFDOzs7O2dCQWZPLGdCQUFnQjtnQkFDaEIsc0JBQXNCO2dCQUl0QixvQkFBb0I7Z0JBSHBCLHNCQUFzQjtnQkFFdEIsdUJBQXVCO2dCQUxNLFdBQVc7OztxQkFrQjdDLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQW1RUixnQkFBQztDQUFBLEFBOVFELElBOFFDO1NBelFZLFNBQVM7OztJQUNwQix1QkFBb0I7O0lBQ3BCLHlCQUE4Qjs7SUFDOUIsNkJBQTRCOztJQUM1Qix5QkFBc0I7O0lBQ3RCLDhCQUEyQjs7SUFDM0IsK0JBQTRCOztJQUM1QiwyQkFBYzs7SUFDZCwyQkFBYzs7SUFDZCwyQkFBZTs7SUFDZiwrQkFBbUI7Ozs7O0lBQ25CLGdDQUE4Qzs7Ozs7SUFFOUMsNEJBQWlEOzs7OztJQUVyQyxzQ0FBMkM7Ozs7O0lBQzNDLDRDQUF1RDs7Ozs7SUFDdkQsMENBQW1EOzs7OztJQUNuRCw0Q0FBdUQ7Ozs7O0lBQ3ZELDZDQUF5RDs7Ozs7SUFDekQsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUG9zaXRpb24sXG4gIEFkZGVkU2lnbmF0dXJlLFxuICBTaWduYXR1cmVUeXBlLFxuICBTaWduYXR1cmVQcm9wcyxcbiAgUmVtb3ZlU2lnbixcbiAgRHJhZ2dhYmxlU2lnbmF0dXJlLFxuICBDb3B5U2lnbixcbiAgQ29weUNoYW5nZXNcbn0gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7Rm9ybWF0dGluZywgVXRpbHMsIE1lbnVUeXBlLCBab29tU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtBY3RpdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvcHlTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vY29weS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRhdGE6IEFkZGVkU2lnbmF0dXJlO1xuICBASW5wdXQoKSBwb3NpdGlvbjogUG9zaXRpb247XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgcGFnZVdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZ2VIZWlnaHQ6IG51bWJlcjtcbiAgYWN0aXZlID0gdHJ1ZTtcbiAgdW5sb2NrID0gdHJ1ZTtcbiAgY29waWVkID0gZmFsc2U7XG4gIGJhc2VDb3BpZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuXG4gIHByaXZhdGUgc3ViamVjdDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVTaWduYXR1cmVTZXJ2aWNlOiBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb3B5U2lnbmF0dXJlU2VydmljZTogQ29weVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2U6IEFjdGl2ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlOiBTaWduYXR1cmVzSG9sZGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG5cbiAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJqZWN0LnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKVxuICAgICkuc3Vic2NyaWJlKHRleHQgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNlbmRTYXZlVGV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHRoaXMuZGF0YS5kYXRhO1xuICB9XG5cbiAgZHJhZ092ZXIoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBkcmFnU3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmICgkZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnZm9vJyk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ2dpbmcoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgaWYgKHBvc2l0aW9uLnggJiYgcG9zaXRpb24ueSAmJiB0aGlzLmlzT25QYWdlKHBvc2l0aW9uKSkge1xuICAgICAgY29uc3QgbGVmdCA9IHBvc2l0aW9uLnggLSB0aGlzLm9sZFBvc2l0aW9uLng7XG4gICAgICBjb25zdCB0b3AgPSBwb3NpdGlvbi55IC0gdGhpcy5vbGRQb3NpdGlvbi55O1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9IGxlZnQ7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSB0b3A7XG4gICAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgICAgdGhpcy5vbGRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGlzT25QYWdlKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIHJldHVybiBjdXJyZW50UGFnZSAmJiAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKSAmJlxuICAgICAgKCQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSB8fFxuICAgICAgICAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikpO1xuICB9XG5cbiAgaXNUZXh0KCkge1xuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlRFWFQuaWQgPT09IHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldEZvcm1hdHRpbmcoKSB7XG4gICAgY29uc3QgZiA9IHRoaXMuZGF0YS5wcm9wcztcbiAgICBjb25zdCBmb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG4gICAgaWYgKGYpIHtcbiAgICAgIGZvcm1hdHRpbmcuZm9udFNpemUgPSBmLmZvbnRTaXplO1xuICAgICAgZm9ybWF0dGluZy5mb250ID0gZi5mb250O1xuICAgICAgZm9ybWF0dGluZy5jb2xvciA9IGYuZm9udENvbG9yO1xuICAgICAgZm9ybWF0dGluZy5ib2xkID0gZi5ib2xkO1xuICAgICAgZm9ybWF0dGluZy51bmRlcmxpbmUgPSBmLnVuZGVybGluZTtcbiAgICAgIGZvcm1hdHRpbmcuaXRhbGljID0gZi5pdGFsaWM7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0aW5nO1xuICB9XG5cbiAgc2F2ZVRleHRTaWduYXR1cmUoJGV2ZW50OiBGb3JtYXR0aW5nKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5wcm9wcykge1xuICAgICAgdGhpcy5maWxsRm9ybWF0dGluZygkZXZlbnQpO1xuICAgICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNlbmRTYXZlVGV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsbEZvcm1hdHRpbmcoZm9ybWF0dGluZzogRm9ybWF0dGluZykge1xuICAgIHRoaXMuZGF0YS5wcm9wcy5mb250U2l6ZSA9IGZvcm1hdHRpbmcuZm9udFNpemU7XG4gICAgdGhpcy5kYXRhLnByb3BzLmZvbnQgPSBmb3JtYXR0aW5nLmZvbnQ7XG4gICAgdGhpcy5kYXRhLnByb3BzLmJvbGQgPSBmb3JtYXR0aW5nLmJvbGQ7XG4gICAgdGhpcy5kYXRhLnByb3BzLml0YWxpYyA9IGZvcm1hdHRpbmcuaXRhbGljO1xuICAgIHRoaXMuZGF0YS5wcm9wcy51bmRlcmxpbmUgPSBmb3JtYXR0aW5nLnVuZGVybGluZTtcbiAgICB0aGlzLmRhdGEucHJvcHMuZm9udENvbG9yID0gZm9ybWF0dGluZy5jb2xvcjtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBkZWwgPSBuZXcgUmVtb3ZlU2lnbigpO1xuICAgIGRlbC5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XG4gICAgZGVsLmlkID0gdGhpcy5pZDtcbiAgICBkZWwudHlwZSA9IHRoaXMudHlwZTtcbiAgICB0aGlzLl9yZW1vdmVTaWduYXR1cmVTZXJ2aWNlLnJlbW92ZShkZWwpO1xuICB9XG5cbiAgYWN0aXZhdGlvbigpIHtcbiAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmNoYW5nZUFjdGl2ZSh0aGlzLmlkKTtcbiAgfVxuXG4gIGlzRGlnaXRhbCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQ7XG4gIH1cblxuICB3aWR0aCgkZXZlbnQpIHtcbiAgICB0aGlzLmRhdGEud2lkdGggKz0gJGV2ZW50O1xuICAgIGlmICghdGhpcy51bmxvY2spIHtcbiAgICAgIHRoaXMuZGF0YS5oZWlnaHQgKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgaGVpZ2h0KCRldmVudCkge1xuICAgIHRoaXMuZGF0YS5oZWlnaHQgKz0gJGV2ZW50O1xuICAgIGlmICghdGhpcy51bmxvY2spIHtcbiAgICAgIHRoaXMuZGF0YS53aWR0aCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICBsZWZ0KCRldmVudCkge1xuICAgIGlmICh0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIHRvcCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy51bmxvY2spIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIG5vdGlmeUNoYW5nZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlcyA9IG5ldyBDb3B5Q2hhbmdlcygpO1xuICAgIGNoYW5nZXMuZ3VpZCA9IHRoaXMuZGF0YS5ndWlkO1xuICAgIGNoYW5nZXMuaWQgPSB0aGlzLmlkO1xuICAgIGNoYW5nZXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNoYW5nZXMud2lkdGggPSB0aGlzLmRhdGEud2lkdGg7XG4gICAgY2hhbmdlcy5oZWlnaHQgPSB0aGlzLmRhdGEuaGVpZ2h0O1xuICAgIGNoYW5nZXMucHJvcHMgPSB0aGlzLmRhdGEucHJvcHM7XG4gICAgdGhpcy5fY29weVNpZ25hdHVyZVNlcnZpY2Uubm90aWZ5Q2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIGRyb3AoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBpc0luaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS53aWR0aCA9PT0gMCAmJiB0aGlzLmRhdGEuaGVpZ2h0ID09PSAwO1xuICB9XG5cbiAgb25Db3B5U2lnbigpIHtcbiAgICBjb25zdCBjb3B5ID0gbmV3IENvcHlTaWduKCk7XG4gICAgY29weS5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XG4gICAgY29weS5pZCA9IHRoaXMuaWQ7XG4gICAgY29weS50eXBlID0gdGhpcy50eXBlO1xuICAgIHRoaXMuX2NvcHlTaWduYXR1cmVTZXJ2aWNlLmNvcHkoY29weSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5URVhULmlkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjdGV4dFwiKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wICsgdGhpcy5kYXRhLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBhZ2VIZWlnaHQgLSB0aGlzLmRhdGEuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgdGhpcy5kYXRhLndpZHRoID4gdGhpcy5wYWdlV2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IHRoaXMucGFnZVdpZHRoIC0gdGhpcy5kYXRhLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVUZXh0KHZhbHVlOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmRhdGEucHJvcHMudGV4dCA9IHZhbHVlO1xuICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEucHJvcHMudGV4dCA9ICQoXCIjdGV4dFwiKS52YWwoKTtcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KCQoXCIjdGV4dFwiKS52YWwoKSk7XG4gICAgICB0aGlzLmhpZGVNZW51KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VuZFNhdmVUZXh0KCkge1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2Uuc2F2ZVRleHRTaWduYXR1cmUodGhpcy5kYXRhKS5zdWJzY3JpYmUoKHA6IFNpZ25hdHVyZVByb3BzKSA9PiB7XG4gICAgICBpZiAoRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVAgPT09IHRoaXMuZGF0YS5ndWlkKSB7XG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmNoYW5nZVRlbXAocC5pbWFnZUd1aWQsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmRhdGEuZ3VpZCA9IHAuaW1hZ2VHdWlkO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhLnByb3BzID0gcDtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVNZW51KCRldmVudCkge1xuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xuICB9XG5cbiAgZ2V0TWVudVNoaWZ0KCkge1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5URVhULmlkID8gNDI2IDogMTQ4O1xuICAgIGxldCBzaGlmdCA9IHRoaXMuZGF0YS53aWR0aCA+IG1lbnVXaWR0aCA/IDAgOiAodGhpcy5kYXRhLndpZHRoIC0gbWVudVdpZHRoKSAqIDAuNTtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0IC0gKG1lbnVXaWR0aCAtIHRoaXMuZGF0YS53aWR0aCkgLyAyIDwgMCkge1xuICAgICAgc2hpZnQgLT0gKHRoaXMucG9zaXRpb24ubGVmdCAtIChtZW51V2lkdGggLSB0aGlzLmRhdGEud2lkdGgpIC8gMik7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgKyAobWVudVdpZHRoICsgdGhpcy5kYXRhLndpZHRoKSAvIDIgPiB0aGlzLnBhZ2VXaWR0aCkge1xuICAgICAgc2hpZnQgLT0gKHRoaXMucG9zaXRpb24ubGVmdCArIChtZW51V2lkdGggKyB0aGlzLmRhdGEud2lkdGgpIC8gMiAtIHRoaXMucGFnZVdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaWZ0O1xuICB9XG5cbiAgZ2V0TWVudVR5cGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVGV4dCgpKSB7XG4gICAgICByZXR1cm4gTWVudVR5cGUuRk9SX1NJR05BVFVSRTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1lbnVUeXBlLkZPUl9URVhUX1NJR05BVFVSRTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==