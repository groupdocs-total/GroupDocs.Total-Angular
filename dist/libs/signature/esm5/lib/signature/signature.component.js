/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Position, AddedSignature, SignatureType, RemoveSign, DraggableSignature, CopySign, CopyChanges } from "../signature-models";
import { Formatting, Utils } from "@groupdocs.examples.angular/common-components";
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
    function Signature(_signatureService, _removeSignatureService, _copySignatureService, _activeSignatureService, _signaturesHolderService) {
        var _this = this;
        this._signatureService = _signatureService;
        this._removeSignatureService = _removeSignatureService;
        this._copySignatureService = _copySignatureService;
        this._activeSignatureService = _activeSignatureService;
        this._signaturesHolderService = _signaturesHolderService;
        this.active = true;
        this.unlock = true;
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
        var menuWidth = this.type === SignatureType.TEXT.id ? 616 : 228;
        return this.data.width > menuWidth ? 0 : (this.data.width - menuWidth) * 0.5;
    };
    Signature.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature-component',
                    template: "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\n     [style.width.px]=\"data.width ? data.width : undefined\"\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-signature-wrapper\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeSign)=\"remove()\" (copySign)=\"onCopySign()\"\n                     [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"></gd-context-menu>\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\n              [style.color]=\"data.props?.fontColor\"\n              [style.font-family]=\"data?.props.font\"\n              [style.font-size.px]=\"data?.props.fontSize\"\n              [style.width.px]=\"data.width ? data.width : undefined\"\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\n  </div>\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\n</div>\n",
                    styles: [".gd-signature{position:absolute!important}.gd-signature .gd-signature-wrapper{height:inherit;outline:#679ffa solid 1px}.gd-signature-image{width:100%!important;height:inherit}.gd-text{width:inherit;height:inherit;border:none;resize:none;outline:0}.gd-digital-marker{background-color:#3787f5;height:16px;width:100%;text-align:left;display:flex;position:absolute;bottom:0}.gd-digital-marker .icon{color:#fff;font-size:10px;margin:0 5px 0 3px}.gd-digital-marker div{flex-grow:1;font-size:8px;color:#fff;margin-top:1px}"]
                }] }
    ];
    /** @nocollapse */
    Signature.ctorParameters = function () { return [
        { type: SignatureService },
        { type: RemoveSignatureService },
        { type: CopySignatureService },
        { type: ActiveSignatureService },
        { type: SignaturesHolderService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsUUFBUSxFQUNSLGNBQWMsRUFDZCxhQUFhLEVBRWIsVUFBVSxFQUNWLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsV0FBVyxFQUNaLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFdEMsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFrQkUsbUJBQW9CLGlCQUFtQyxFQUNuQyx1QkFBK0MsRUFDL0MscUJBQTJDLEVBQzNDLHVCQUErQyxFQUMvQyx3QkFBaUQ7UUFKckUsaUJBbUJDO1FBbkJtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLDRCQUF1QixHQUF2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TCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7SUFvT1IsZ0JBQUM7Q0FBQSxBQS9PRCxJQStPQztTQTFPWSxTQUFTOzs7SUFDcEIsdUJBQW9COztJQUNwQix5QkFBOEI7O0lBQzlCLDZCQUE0Qjs7SUFDNUIseUJBQXNCOztJQUN0Qiw4QkFBMkI7O0lBQzNCLCtCQUE0Qjs7SUFDNUIsMkJBQWM7O0lBQ2QsMkJBQWM7Ozs7O0lBQ2QsZ0NBQThDOzs7OztJQUU5Qyw0QkFBaUQ7Ozs7O0lBRXJDLHNDQUEyQzs7Ozs7SUFDM0MsNENBQXVEOzs7OztJQUN2RCwwQ0FBbUQ7Ozs7O0lBQ25ELDRDQUF1RDs7Ozs7SUFDdkQsNkNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUG9zaXRpb24sXG4gIEFkZGVkU2lnbmF0dXJlLFxuICBTaWduYXR1cmVUeXBlLFxuICBTaWduYXR1cmVQcm9wcyxcbiAgUmVtb3ZlU2lnbixcbiAgRHJhZ2dhYmxlU2lnbmF0dXJlLFxuICBDb3B5U2lnbixcbiAgQ29weUNoYW5nZXNcbn0gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7Rm9ybWF0dGluZywgVXRpbHN9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7QWN0aXZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL2FjdGl2ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge1NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZVwiO1xuaW1wb3J0IHtDb3B5U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2lnbmF0dXJlLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBpZDogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhOiBBZGRlZFNpZ25hdHVyZTtcbiAgQElucHV0KCkgcG9zaXRpb246IFBvc2l0aW9uO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlSGVpZ2h0OiBudW1iZXI7XG4gIGFjdGl2ZSA9IHRydWU7XG4gIHVubG9jayA9IHRydWU7XG4gIHByaXZhdGUgb2xkUG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcblxuICBwcml2YXRlIHN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlU2lnbmF0dXJlU2VydmljZTogUmVtb3ZlU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29weVNpZ25hdHVyZVNlcnZpY2U6IENvcHlTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlOiBBY3RpdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVzSG9sZGVyU2VydmljZTogU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UpIHtcblxuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YmplY3QucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgzMDApXG4gICAgKS5zdWJzY3JpYmUodGV4dCA9PiB7XG4gICAgICB0aGlzLnNlbmRTYXZlVGV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyB0aGlzLmRhdGEuZGF0YTtcbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAoJGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmIChwb3NpdGlvbi54ICYmIHBvc2l0aW9uLnkgJiYgdGhpcy5pc09uUGFnZShwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtIHRoaXMub2xkUG9zaXRpb24ueTtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSBsZWZ0O1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMub2xkUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBpc09uUGFnZShwb3NpdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICByZXR1cm4gY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiZcbiAgICAgICgkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikgfHxcbiAgICAgICAgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpKTtcbiAgfVxuXG4gIGlzVGV4dCgpIHtcbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5URVhULmlkID09PSB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRGb3JtYXR0aW5nKCkge1xuICAgIGNvbnN0IGYgPSB0aGlzLmRhdGEucHJvcHM7XG4gICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgIGlmIChmKSB7XG4gICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZi5mb250U2l6ZTtcbiAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGYuZm9udDtcbiAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBmLmZvbnRDb2xvcjtcbiAgICAgIGZvcm1hdHRpbmcuYm9sZCA9IGYuYm9sZDtcbiAgICAgIGZvcm1hdHRpbmcudW5kZXJsaW5lID0gZi51bmRlcmxpbmU7XG4gICAgICBmb3JtYXR0aW5nLml0YWxpYyA9IGYuaXRhbGljO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGluZztcbiAgfVxuXG4gIHNhdmVUZXh0U2lnbmF0dXJlKCRldmVudDogRm9ybWF0dGluZykge1xuICAgIGlmICh0aGlzLmRhdGEucHJvcHMpIHtcbiAgICAgIHRoaXMuZmlsbEZvcm1hdHRpbmcoJGV2ZW50KTtcbiAgICAgIHRoaXMuc2VuZFNhdmVUZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWxsRm9ybWF0dGluZyhmb3JtYXR0aW5nOiBGb3JtYXR0aW5nKSB7XG4gICAgdGhpcy5kYXRhLnByb3BzLmZvbnRTaXplID0gZm9ybWF0dGluZy5mb250U2l6ZTtcbiAgICB0aGlzLmRhdGEucHJvcHMuZm9udCA9IGZvcm1hdHRpbmcuZm9udDtcbiAgICB0aGlzLmRhdGEucHJvcHMuYm9sZCA9IGZvcm1hdHRpbmcuYm9sZDtcbiAgICB0aGlzLmRhdGEucHJvcHMuaXRhbGljID0gZm9ybWF0dGluZy5pdGFsaWM7XG4gICAgdGhpcy5kYXRhLnByb3BzLnVuZGVybGluZSA9IGZvcm1hdHRpbmcudW5kZXJsaW5lO1xuICAgIHRoaXMuZGF0YS5wcm9wcy5mb250Q29sb3IgPSBmb3JtYXR0aW5nLmNvbG9yO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGRlbCA9IG5ldyBSZW1vdmVTaWduKCk7XG4gICAgZGVsLmd1aWQgPSB0aGlzLmRhdGEuZ3VpZDtcbiAgICBkZWwuaWQgPSB0aGlzLmlkO1xuICAgIGRlbC50eXBlID0gdGhpcy50eXBlO1xuICAgIHRoaXMuX3JlbW92ZVNpZ25hdHVyZVNlcnZpY2UucmVtb3ZlKGRlbCk7XG4gIH1cblxuICBhY3RpdmF0aW9uKCkge1xuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuaWQpO1xuICB9XG5cbiAgaXNEaWdpdGFsKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZDtcbiAgfVxuXG4gIHdpZHRoKCRldmVudCkge1xuICAgIHRoaXMuZGF0YS53aWR0aCArPSAkZXZlbnQ7XG4gICAgaWYgKCF0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5kYXRhLmhlaWdodCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICBoZWlnaHQoJGV2ZW50KSB7XG4gICAgdGhpcy5kYXRhLmhlaWdodCArPSAkZXZlbnQ7XG4gICAgaWYgKCF0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5kYXRhLndpZHRoICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIGxlZnQoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgdG9wKCRldmVudCkge1xuICAgIGlmICh0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgbm90aWZ5Q2hhbmdlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VzID0gbmV3IENvcHlDaGFuZ2VzKCk7XG4gICAgY2hhbmdlcy5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XG4gICAgY2hhbmdlcy5pZCA9IHRoaXMuaWQ7XG4gICAgY2hhbmdlcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgY2hhbmdlcy53aWR0aCA9IHRoaXMuZGF0YS53aWR0aDtcbiAgICBjaGFuZ2VzLmhlaWdodCA9IHRoaXMuZGF0YS5oZWlnaHQ7XG4gICAgdGhpcy5fY29weVNpZ25hdHVyZVNlcnZpY2Uubm90aWZ5Q2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIGRyb3AoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBpc0luaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS53aWR0aCA9PT0gMCAmJiB0aGlzLmRhdGEuaGVpZ2h0ID09PSAwO1xuICB9XG5cbiAgb25Db3B5U2lnbigpIHtcbiAgICBjb25zdCBjb3B5ID0gbmV3IENvcHlTaWduKCk7XG4gICAgY29weS5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XG4gICAgY29weS5pZCA9IHRoaXMuaWQ7XG4gICAgY29weS50eXBlID0gdGhpcy50eXBlO1xuICAgIHRoaXMuX2NvcHlTaWduYXR1cmVTZXJ2aWNlLmNvcHkoY29weSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5URVhULmlkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjdGV4dFwiKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wICsgdGhpcy5kYXRhLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBhZ2VIZWlnaHQgLSB0aGlzLmRhdGEuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgdGhpcy5kYXRhLndpZHRoID4gdGhpcy5wYWdlV2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IHRoaXMucGFnZVdpZHRoIC0gdGhpcy5kYXRhLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGEucHJvcHMudGV4dCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VuZFNhdmVUZXh0KCkge1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2Uuc2F2ZVRleHRTaWduYXR1cmUodGhpcy5kYXRhKS5zdWJzY3JpYmUoKHA6IFNpZ25hdHVyZVByb3BzKSA9PiB7XG4gICAgICBpZiAoRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVAgPT09IHRoaXMuZGF0YS5ndWlkKSB7XG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmNoYW5nZVRlbXAocC5pbWFnZUd1aWQsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmRhdGEuZ3VpZCA9IHAuaW1hZ2VHdWlkO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhLnByb3BzID0gcDtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVNZW51KCRldmVudCkge1xuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xuICB9XG5cbiAgZ2V0TWVudVNoaWZ0KCkge1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5URVhULmlkID8gNjE2IDogMjI4O1xuICAgIHJldHVybiB0aGlzLmRhdGEud2lkdGggPiBtZW51V2lkdGggPyAwIDogKHRoaXMuZGF0YS53aWR0aCAtIG1lbnVXaWR0aCkgKiAwLjU7XG4gIH1cbn1cbiJdfQ==