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
                    template: "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\r\n     (clickOutside)=\"hideMenu($event)\"\r\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\r\n     [excludeBeforeClick]=\"true\"\r\n     [clickOutsideEvents]=\"'mousedown'\"\r\n     [clickOutsideEnabled]=\"active\"\r\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\r\n     [style.width.px]=\"data.width ? data.width : undefined\"\r\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\r\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\r\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\r\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\r\n       class=\"gd-signature-wrapper\">\r\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\r\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeItem)=\"remove()\" (copySign)=\"onCopySign()\"\r\n                     [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"\r\n                     [menuType]=\"getMenuType()\"></gd-context-menu>\r\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\r\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\r\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\r\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\r\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\r\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\r\n              [style.color]=\"data.props?.fontColor\"\r\n              [style.font-family]=\"data?.props.font\"\r\n              [style.font-size.px]=\"data?.props.fontSize\"\r\n              [style.width.px]=\"data.width ? data.width : undefined\"\r\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\r\n  </div>\r\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\r\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\r\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\r\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\r\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\r\n</div>\r\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\r\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\r\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUViLFVBQVUsRUFDVixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLFdBQVcsRUFDWixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFdEMsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFvQkUsbUJBQW9CLGlCQUFtQyxFQUNuQyx1QkFBK0MsRUFDL0MscUJBQTJDLEVBQzNDLHVCQUErQyxFQUMvQyx3QkFBaUQsRUFDakQsWUFBeUI7UUFMN0MsaUJBcUJDO1FBckJtQixzQkFBaUIsR0FB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LEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7SUF5UFIsZ0JBQUM7Q0FBQSxBQXBRRCxJQW9RQztTQS9QWSxTQUFTOzs7SUFDcEIsdUJBQW9COztJQUNwQix5QkFBOEI7O0lBQzlCLDZCQUE0Qjs7SUFDNUIseUJBQXNCOztJQUN0Qiw4QkFBMkI7O0lBQzNCLCtCQUE0Qjs7SUFDNUIsMkJBQWM7O0lBQ2QsMkJBQWM7O0lBQ2QsMkJBQWU7O0lBQ2YsK0JBQW1COzs7OztJQUNuQixnQ0FBOEM7Ozs7O0lBRTlDLDRCQUFpRDs7Ozs7SUFFckMsc0NBQTJDOzs7OztJQUMzQyw0Q0FBdUQ7Ozs7O0lBQ3ZELDBDQUFtRDs7Ozs7SUFDbkQsNENBQXVEOzs7OztJQUN2RCw2Q0FBeUQ7Ozs7O0lBQ3pELGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBQb3NpdGlvbixcclxuICBBZGRlZFNpZ25hdHVyZSxcclxuICBTaWduYXR1cmVUeXBlLFxyXG4gIFNpZ25hdHVyZVByb3BzLFxyXG4gIFJlbW92ZVNpZ24sXHJcbiAgRHJhZ2dhYmxlU2lnbmF0dXJlLFxyXG4gIENvcHlTaWduLFxyXG4gIENvcHlDaGFuZ2VzXHJcbn0gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcclxuaW1wb3J0IHtGb3JtYXR0aW5nLCBVdGlscywgTWVudVR5cGUsIFpvb21TZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0FjdGl2ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9hY3RpdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9jb3B5LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2Qtc2lnbmF0dXJlLWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmF0dXJlLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBkYXRhOiBBZGRlZFNpZ25hdHVyZTtcclxuICBASW5wdXQoKSBwb3NpdGlvbjogUG9zaXRpb247XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhZ2VXaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHBhZ2VIZWlnaHQ6IG51bWJlcjtcclxuICBhY3RpdmUgPSB0cnVlO1xyXG4gIHVubG9jayA9IHRydWU7XHJcbiAgY29waWVkID0gZmFsc2U7XHJcbiAgYmFzZUNvcGllZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgb2xkUG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuXHJcbiAgcHJpdmF0ZSBzdWJqZWN0OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbW92ZVNpZ25hdHVyZVNlcnZpY2U6IFJlbW92ZVNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29weVNpZ25hdHVyZVNlcnZpY2U6IENvcHlTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2U6IEFjdGl2ZVNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlc0hvbGRlclNlcnZpY2U6IFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pZCA9PT0gaWQpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdWJqZWN0LnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSgzMDApXHJcbiAgICApLnN1YnNjcmliZSh0ZXh0ID0+IHtcclxuICAgICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuc2VuZFNhdmVUZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tU2VydmljZS56b29tKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICByZXR1cm4gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgdGhpcy5kYXRhLmRhdGE7XHJcbiAgfVxyXG5cclxuICBkcmFnT3ZlcigkZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBkcmFnU3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgIGlmICgkZXZlbnQuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdnaW5nKCRldmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgIGlmIChwb3NpdGlvbi54ICYmIHBvc2l0aW9uLnkgJiYgdGhpcy5pc09uUGFnZShwb3NpdGlvbikpIHtcclxuICAgICAgY29uc3QgbGVmdCA9IHBvc2l0aW9uLnggLSB0aGlzLm9sZFBvc2l0aW9uLng7XHJcbiAgICAgIGNvbnN0IHRvcCA9IHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnk7XHJcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSBsZWZ0O1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSB0b3A7XHJcbiAgICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMub2xkUG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzT25QYWdlKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICByZXR1cm4gY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiZcclxuICAgICAgKCQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSB8fFxyXG4gICAgICAgICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSk7XHJcbiAgfVxyXG5cclxuICBpc1RleHQoKSB7XHJcbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5URVhULmlkID09PSB0aGlzLnR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXR0aW5nKCkge1xyXG4gICAgY29uc3QgZiA9IHRoaXMuZGF0YS5wcm9wcztcclxuICAgIGNvbnN0IGZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcclxuICAgIGlmIChmKSB7XHJcbiAgICAgIGZvcm1hdHRpbmcuZm9udFNpemUgPSBmLmZvbnRTaXplO1xyXG4gICAgICBmb3JtYXR0aW5nLmZvbnQgPSBmLmZvbnQ7XHJcbiAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBmLmZvbnRDb2xvcjtcclxuICAgICAgZm9ybWF0dGluZy5ib2xkID0gZi5ib2xkO1xyXG4gICAgICBmb3JtYXR0aW5nLnVuZGVybGluZSA9IGYudW5kZXJsaW5lO1xyXG4gICAgICBmb3JtYXR0aW5nLml0YWxpYyA9IGYuaXRhbGljO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdHRpbmc7XHJcbiAgfVxyXG5cclxuICBzYXZlVGV4dFNpZ25hdHVyZSgkZXZlbnQ6IEZvcm1hdHRpbmcpIHtcclxuICAgIGlmICh0aGlzLmRhdGEucHJvcHMpIHtcclxuICAgICAgdGhpcy5maWxsRm9ybWF0dGluZygkZXZlbnQpO1xyXG4gICAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcclxuICAgICAgdGhpcy5zZW5kU2F2ZVRleHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsbEZvcm1hdHRpbmcoZm9ybWF0dGluZzogRm9ybWF0dGluZykge1xyXG4gICAgdGhpcy5kYXRhLnByb3BzLmZvbnRTaXplID0gZm9ybWF0dGluZy5mb250U2l6ZTtcclxuICAgIHRoaXMuZGF0YS5wcm9wcy5mb250ID0gZm9ybWF0dGluZy5mb250O1xyXG4gICAgdGhpcy5kYXRhLnByb3BzLmJvbGQgPSBmb3JtYXR0aW5nLmJvbGQ7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMuaXRhbGljID0gZm9ybWF0dGluZy5pdGFsaWM7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMudW5kZXJsaW5lID0gZm9ybWF0dGluZy51bmRlcmxpbmU7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMuZm9udENvbG9yID0gZm9ybWF0dGluZy5jb2xvcjtcclxuICB9XHJcblxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGNvbnN0IGRlbCA9IG5ldyBSZW1vdmVTaWduKCk7XHJcbiAgICBkZWwuZ3VpZCA9IHRoaXMuZGF0YS5ndWlkO1xyXG4gICAgZGVsLmlkID0gdGhpcy5pZDtcclxuICAgIGRlbC50eXBlID0gdGhpcy50eXBlO1xyXG4gICAgdGhpcy5fcmVtb3ZlU2lnbmF0dXJlU2VydmljZS5yZW1vdmUoZGVsKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRpb24oKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmNoYW5nZUFjdGl2ZSh0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIGlzRGlnaXRhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZDtcclxuICB9XHJcblxyXG4gIHdpZHRoKCRldmVudCkge1xyXG4gICAgdGhpcy5kYXRhLndpZHRoICs9ICRldmVudDtcclxuICAgIGlmICghdGhpcy51bmxvY2spIHtcclxuICAgICAgdGhpcy5kYXRhLmhlaWdodCArPSAkZXZlbnQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBoZWlnaHQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmRhdGEuaGVpZ2h0ICs9ICRldmVudDtcclxuICAgIGlmICghdGhpcy51bmxvY2spIHtcclxuICAgICAgdGhpcy5kYXRhLndpZHRoICs9ICRldmVudDtcclxuICAgIH1cclxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGxlZnQoJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy51bmxvY2spIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9ICRldmVudDtcclxuICAgIH1cclxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHRvcCgkZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLnVubG9jaykge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSAkZXZlbnQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBub3RpZnlDaGFuZ2VzKCkge1xyXG4gICAgY29uc3QgY2hhbmdlcyA9IG5ldyBDb3B5Q2hhbmdlcygpO1xyXG4gICAgY2hhbmdlcy5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XHJcbiAgICBjaGFuZ2VzLmlkID0gdGhpcy5pZDtcclxuICAgIGNoYW5nZXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xyXG4gICAgY2hhbmdlcy53aWR0aCA9IHRoaXMuZGF0YS53aWR0aDtcclxuICAgIGNoYW5nZXMuaGVpZ2h0ID0gdGhpcy5kYXRhLmhlaWdodDtcclxuICAgIGNoYW5nZXMucHJvcHMgPSB0aGlzLmRhdGEucHJvcHM7XHJcbiAgICB0aGlzLl9jb3B5U2lnbmF0dXJlU2VydmljZS5ub3RpZnlDaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgZHJvcCgkZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBpc0luaXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoID09PSAwICYmIHRoaXMuZGF0YS5oZWlnaHQgPT09IDA7XHJcbiAgfVxyXG5cclxuICBvbkNvcHlTaWduKCkge1xyXG4gICAgY29uc3QgY29weSA9IG5ldyBDb3B5U2lnbigpO1xyXG4gICAgY29weS5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XHJcbiAgICBjb3B5LmlkID0gdGhpcy5pZDtcclxuICAgIGNvcHkudHlwZSA9IHRoaXMudHlwZTtcclxuICAgIHRoaXMuX2NvcHlTaWduYXR1cmVTZXJ2aWNlLmNvcHkoY29weSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBTaWduYXR1cmVUeXBlLlRFWFQuaWQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjdGV4dFwiKTtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29ycmVjdFBvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCA8IDApIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCA8IDApIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wICsgdGhpcy5kYXRhLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucGFnZUhlaWdodCAtIHRoaXMuZGF0YS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgdGhpcy5kYXRhLndpZHRoID4gdGhpcy5wYWdlV2lkdGgpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5wYWdlV2lkdGggLSB0aGlzLmRhdGEud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMudGV4dCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zdWJqZWN0Lm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZW5kU2F2ZVRleHQoKSB7XHJcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnNhdmVUZXh0U2lnbmF0dXJlKHRoaXMuZGF0YSkuc3Vic2NyaWJlKChwOiBTaWduYXR1cmVQcm9wcykgPT4ge1xyXG4gICAgICBpZiAoRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVAgPT09IHRoaXMuZGF0YS5ndWlkKSB7XHJcbiAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuY2hhbmdlVGVtcChwLmltYWdlR3VpZCwgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmd1aWQgPSBwLmltYWdlR3VpZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGEucHJvcHMgPSBwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlTWVudSgkZXZlbnQpIHtcclxuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVudVNoaWZ0KCkge1xyXG4gICAgY29uc3QgbWVudVdpZHRoID0gdGhpcy50eXBlID09PSBTaWduYXR1cmVUeXBlLlRFWFQuaWQgPyA0MjYgOiAxNDg7XHJcbiAgICBsZXQgc2hpZnQgPSB0aGlzLmRhdGEud2lkdGggPiBtZW51V2lkdGggPyAwIDogKHRoaXMuZGF0YS53aWR0aCAtIG1lbnVXaWR0aCkgKiAwLjU7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0IC0gKG1lbnVXaWR0aCAtIHRoaXMuZGF0YS53aWR0aCkgLyAyIDwgMCkge1xyXG4gICAgICBzaGlmdCAtPSAodGhpcy5wb3NpdGlvbi5sZWZ0IC0gKG1lbnVXaWR0aCAtIHRoaXMuZGF0YS53aWR0aCkgLyAyKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgKyAobWVudVdpZHRoICsgdGhpcy5kYXRhLndpZHRoKSAvIDIgPiB0aGlzLnBhZ2VXaWR0aCkge1xyXG4gICAgICBzaGlmdCAtPSAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgKG1lbnVXaWR0aCArIHRoaXMuZGF0YS53aWR0aCkgLyAyIC0gdGhpcy5wYWdlV2lkdGgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoaWZ0O1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVudVR5cGUoKSB7XHJcbiAgICByZXR1cm4gTWVudVR5cGUuRk9SX1NJR05BVFVSRTtcclxuICB9XHJcbn1cclxuIl19