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
const $ = jquery;
export class Signature {
    /**
     * @param {?} _signatureService
     * @param {?} _removeSignatureService
     * @param {?} _copySignatureService
     * @param {?} _activeSignatureService
     * @param {?} _signaturesHolderService
     */
    constructor(_signatureService, _removeSignatureService, _copySignatureService, _activeSignatureService, _signaturesHolderService) {
        this._signatureService = _signatureService;
        this._removeSignatureService = _removeSignatureService;
        this._copySignatureService = _copySignatureService;
        this._activeSignatureService = _activeSignatureService;
        this._signaturesHolderService = _signaturesHolderService;
        this.active = true;
        this.unlock = true;
        this.copied = false;
        this.baseCopied = false;
        this.subject = new Subject();
        this._activeSignatureService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            if (this.id === id) {
                this.active = true;
            }
            else {
                this.active = false;
            }
        }));
        this.subject.pipe(debounceTime(300)).subscribe((/**
         * @param {?} text
         * @return {?}
         */
        text => {
            this.notifyChanges();
            this.sendSaveText();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getData() {
        return 'data:image/png;base64,' + this.data.data;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragOver($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragStart($event) {
        $event.preventDefault();
        this.oldPosition = Utils.getMousePosition($event);
        if ($event.dataTransfer) {
            $event.dataTransfer.setData('text', 'foo');
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragging($event) {
        $event.preventDefault();
        /** @type {?} */
        const position = Utils.getMousePosition($event);
        if (position.x && position.y && this.isOnPage(position)) {
            /** @type {?} */
            const left = position.x - this.oldPosition.x;
            /** @type {?} */
            const top = position.y - this.oldPosition.y;
            this.position.left += left;
            this.position.top += top;
            this.correctPosition();
            this.oldPosition = position;
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    isOnPage(position) {
        /** @type {?} */
        const currentPage = document.elementFromPoint(position.x, position.y);
        return currentPage && $(currentPage).parent().parent() &&
            ($(currentPage).parent().parent().parent().hasClass("page") ||
                $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
    }
    /**
     * @return {?}
     */
    isText() {
        return SignatureType.TEXT.id === this.type;
    }
    /**
     * @return {?}
     */
    getFormatting() {
        /** @type {?} */
        const f = this.data.props;
        /** @type {?} */
        const formatting = Formatting.default();
        if (f) {
            formatting.fontSize = f.fontSize;
            formatting.font = f.font;
            formatting.color = f.fontColor;
            formatting.bold = f.bold;
            formatting.underline = f.underline;
            formatting.italic = f.italic;
        }
        return formatting;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveTextSignature($event) {
        if (this.data.props) {
            this.fillFormatting($event);
            this.notifyChanges();
            this.sendSaveText();
        }
    }
    /**
     * @private
     * @param {?} formatting
     * @return {?}
     */
    fillFormatting(formatting) {
        this.data.props.fontSize = formatting.fontSize;
        this.data.props.font = formatting.font;
        this.data.props.bold = formatting.bold;
        this.data.props.italic = formatting.italic;
        this.data.props.underline = formatting.underline;
        this.data.props.fontColor = formatting.color;
    }
    /**
     * @return {?}
     */
    remove() {
        /** @type {?} */
        const del = new RemoveSign();
        del.guid = this.data.guid;
        del.id = this.id;
        del.type = this.type;
        this._removeSignatureService.remove(del);
    }
    /**
     * @return {?}
     */
    activation() {
        this._activeSignatureService.changeActive(this.id);
    }
    /**
     * @return {?}
     */
    isDigital() {
        return this.type === SignatureType.DIGITAL.id;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    width($event) {
        this.data.width += $event;
        if (!this.unlock) {
            this.data.height += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    height($event) {
        this.data.height += $event;
        if (!this.unlock) {
            this.data.width += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    left($event) {
        if (this.unlock) {
            this.position.left += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    top($event) {
        if (this.unlock) {
            this.position.top += $event;
        }
        this.correctPosition();
        this.notifyChanges();
    }
    /**
     * @return {?}
     */
    notifyChanges() {
        /** @type {?} */
        const changes = new CopyChanges();
        changes.guid = this.data.guid;
        changes.id = this.id;
        changes.position = this.position;
        changes.width = this.data.width;
        changes.height = this.data.height;
        changes.props = this.data.props;
        this._copySignatureService.notifyChanges(changes);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    drop($event) {
        $event.stopPropagation();
        $event.preventDefault();
    }
    /**
     * @return {?}
     */
    isInit() {
        return this.data.width === 0 && this.data.height === 0;
    }
    /**
     * @return {?}
     */
    onCopySign() {
        /** @type {?} */
        const copy = new CopySign();
        copy.guid = this.data.guid;
        copy.id = this.id;
        copy.type = this.type;
        this._copySignatureService.copy(copy);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.type === SignatureType.TEXT.id) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const element = $("#text");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
    }
    /**
     * @private
     * @return {?}
     */
    correctPosition() {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    saveText(value) {
        this.data.props.text = value;
        this.subject.next(value);
    }
    /**
     * @private
     * @return {?}
     */
    sendSaveText() {
        this._signatureService.saveTextSignature(this.data).subscribe((/**
         * @param {?} p
         * @return {?}
         */
        (p) => {
            if (DraggableSignature.TEMP === this.data.guid) {
                this._signaturesHolderService.changeTemp(p.imageGuid, this.id);
                this.data.guid = p.imageGuid;
            }
            this.data.props = p;
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideMenu($event) {
        this._activeSignatureService.changeActive(null);
    }
    /**
     * @return {?}
     */
    getMenuShift() {
        /** @type {?} */
        const menuWidth = this.type === SignatureType.TEXT.id ? 426 : 148;
        return this.data.width > menuWidth ? 0 : (this.data.width - menuWidth) * 0.5;
    }
}
Signature.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature-component',
                template: "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\n     [style.width.px]=\"data.width ? data.width : undefined\"\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-signature-wrapper\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeSign)=\"remove()\" (copySign)=\"onCopySign()\"\n                     [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"></gd-context-menu>\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\n              [style.color]=\"data.props?.fontColor\"\n              [style.font-family]=\"data?.props.font\"\n              [style.font-size.px]=\"data?.props.fontSize\"\n              [style.width.px]=\"data.width ? data.width : undefined\"\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\n  </div>\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\n</div>\n",
                styles: [".gd-signature{position:absolute!important}.gd-signature .gd-signature-wrapper{height:inherit;outline:#679ffa solid 1px}.gd-signature-image{width:100%!important;height:inherit}.gd-text{width:inherit;height:inherit;border:none;resize:none;outline:0;margin:0;padding:0}.gd-digital-marker{background-color:#3787f5;height:16px;width:100%;text-align:left;display:flex;position:absolute;bottom:0}.gd-digital-marker .icon{color:#fff;font-size:10px;margin:0 5px 0 3px}.gd-digital-marker div{flex-grow:1;font-size:8px;color:#fff;margin-top:1px}"]
            }] }
];
/** @nocollapse */
Signature.ctorParameters = () => [
    { type: SignatureService },
    { type: RemoveSignatureService },
    { type: CopySignatureService },
    { type: ActiveSignatureService },
    { type: SignaturesHolderService }
];
Signature.propDecorators = {
    id: [{ type: Input }],
    data: [{ type: Input }],
    position: [{ type: Input }],
    type: [{ type: Input }],
    pageWidth: [{ type: Input }],
    pageHeight: [{ type: Input }]
};
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsUUFBUSxFQUNSLGNBQWMsRUFDZCxhQUFhLEVBRWIsVUFBVSxFQUNWLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsV0FBVyxFQUNaLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFdEMsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7O0lBZXBCLFlBQW9CLGlCQUFtQyxFQUNuQyx1QkFBK0MsRUFDL0MscUJBQTJDLEVBQzNDLHVCQUErQyxFQUMvQyx3QkFBaUQ7UUFKakQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyw0QkFB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b0I7O0lBQ3BCLHlCQUE4Qjs7SUFDOUIsNkJBQTRCOztJQUM1Qix5QkFBc0I7O0lBQ3RCLDhCQUEyQjs7SUFDM0IsK0JBQTRCOztJQUM1QiwyQkFBYzs7SUFDZCwyQkFBYzs7SUFDZCwyQkFBZTs7SUFDZiwrQkFBbUI7Ozs7O0lBQ25CLGdDQUE4Qzs7Ozs7SUFFOUMsNEJBQWlEOzs7OztJQUVyQyxzQ0FBMkM7Ozs7O0lBQzNDLDRDQUF1RDs7Ozs7SUFDdkQsMENBQW1EOzs7OztJQUNuRCw0Q0FBdUQ7Ozs7O0lBQ3ZELDZDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBvc2l0aW9uLFxuICBBZGRlZFNpZ25hdHVyZSxcbiAgU2lnbmF0dXJlVHlwZSxcbiAgU2lnbmF0dXJlUHJvcHMsXG4gIFJlbW92ZVNpZ24sXG4gIERyYWdnYWJsZVNpZ25hdHVyZSxcbiAgQ29weVNpZ24sXG4gIENvcHlDaGFuZ2VzXG59IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge0Zvcm1hdHRpbmcsIFV0aWxzfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vcmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9hY3RpdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZXMtaG9sZGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9jb3B5LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge2RlYm91bmNlVGltZX0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXNpZ25hdHVyZS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmF0dXJlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YTogQWRkZWRTaWduYXR1cmU7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgcGFnZUhlaWdodDogbnVtYmVyO1xuICBhY3RpdmUgPSB0cnVlO1xuICB1bmxvY2sgPSB0cnVlO1xuICBjb3BpZWQgPSBmYWxzZTtcbiAgYmFzZUNvcGllZCA9IGZhbHNlO1xuICBwcml2YXRlIG9sZFBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG5cbiAgcHJpdmF0ZSBzdWJqZWN0OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbW92ZVNpZ25hdHVyZVNlcnZpY2U6IFJlbW92ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvcHlTaWduYXR1cmVTZXJ2aWNlOiBDb3B5U2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aXZlU2lnbmF0dXJlU2VydmljZTogQWN0aXZlU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlc0hvbGRlclNlcnZpY2U6IFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJqZWN0LnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKVxuICAgICkuc3Vic2NyaWJlKHRleHQgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNlbmRTYXZlVGV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyB0aGlzLmRhdGEuZGF0YTtcbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbGRQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAoJGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ2ZvbycpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmIChwb3NpdGlvbi54ICYmIHBvc2l0aW9uLnkgJiYgdGhpcy5pc09uUGFnZShwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtIHRoaXMub2xkUG9zaXRpb24ueTtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSBsZWZ0O1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gdG9wO1xuICAgICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMub2xkUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBpc09uUGFnZShwb3NpdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICByZXR1cm4gY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiZcbiAgICAgICgkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikgfHxcbiAgICAgICAgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpKTtcbiAgfVxuXG4gIGlzVGV4dCgpIHtcbiAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5URVhULmlkID09PSB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRGb3JtYXR0aW5nKCkge1xuICAgIGNvbnN0IGYgPSB0aGlzLmRhdGEucHJvcHM7XG4gICAgY29uc3QgZm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgIGlmIChmKSB7XG4gICAgICBmb3JtYXR0aW5nLmZvbnRTaXplID0gZi5mb250U2l6ZTtcbiAgICAgIGZvcm1hdHRpbmcuZm9udCA9IGYuZm9udDtcbiAgICAgIGZvcm1hdHRpbmcuY29sb3IgPSBmLmZvbnRDb2xvcjtcbiAgICAgIGZvcm1hdHRpbmcuYm9sZCA9IGYuYm9sZDtcbiAgICAgIGZvcm1hdHRpbmcudW5kZXJsaW5lID0gZi51bmRlcmxpbmU7XG4gICAgICBmb3JtYXR0aW5nLml0YWxpYyA9IGYuaXRhbGljO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGluZztcbiAgfVxuXG4gIHNhdmVUZXh0U2lnbmF0dXJlKCRldmVudDogRm9ybWF0dGluZykge1xuICAgIGlmICh0aGlzLmRhdGEucHJvcHMpIHtcbiAgICAgIHRoaXMuZmlsbEZvcm1hdHRpbmcoJGV2ZW50KTtcbiAgICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZW5kU2F2ZVRleHQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbGxGb3JtYXR0aW5nKGZvcm1hdHRpbmc6IEZvcm1hdHRpbmcpIHtcbiAgICB0aGlzLmRhdGEucHJvcHMuZm9udFNpemUgPSBmb3JtYXR0aW5nLmZvbnRTaXplO1xuICAgIHRoaXMuZGF0YS5wcm9wcy5mb250ID0gZm9ybWF0dGluZy5mb250O1xuICAgIHRoaXMuZGF0YS5wcm9wcy5ib2xkID0gZm9ybWF0dGluZy5ib2xkO1xuICAgIHRoaXMuZGF0YS5wcm9wcy5pdGFsaWMgPSBmb3JtYXR0aW5nLml0YWxpYztcbiAgICB0aGlzLmRhdGEucHJvcHMudW5kZXJsaW5lID0gZm9ybWF0dGluZy51bmRlcmxpbmU7XG4gICAgdGhpcy5kYXRhLnByb3BzLmZvbnRDb2xvciA9IGZvcm1hdHRpbmcuY29sb3I7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgY29uc3QgZGVsID0gbmV3IFJlbW92ZVNpZ24oKTtcbiAgICBkZWwuZ3VpZCA9IHRoaXMuZGF0YS5ndWlkO1xuICAgIGRlbC5pZCA9IHRoaXMuaWQ7XG4gICAgZGVsLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgdGhpcy5fcmVtb3ZlU2lnbmF0dXJlU2VydmljZS5yZW1vdmUoZGVsKTtcbiAgfVxuXG4gIGFjdGl2YXRpb24oKSB7XG4gICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XG4gIH1cblxuICBpc0RpZ2l0YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkO1xuICB9XG5cbiAgd2lkdGgoJGV2ZW50KSB7XG4gICAgdGhpcy5kYXRhLndpZHRoICs9ICRldmVudDtcbiAgICBpZiAoIXRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLmRhdGEuaGVpZ2h0ICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIGhlaWdodCgkZXZlbnQpIHtcbiAgICB0aGlzLmRhdGEuaGVpZ2h0ICs9ICRldmVudDtcbiAgICBpZiAoIXRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLmRhdGEud2lkdGggKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgbGVmdCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy51bmxvY2spIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICB0b3AoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICBub3RpZnlDaGFuZ2VzKCkge1xuICAgIGNvbnN0IGNoYW5nZXMgPSBuZXcgQ29weUNoYW5nZXMoKTtcbiAgICBjaGFuZ2VzLmd1aWQgPSB0aGlzLmRhdGEuZ3VpZDtcbiAgICBjaGFuZ2VzLmlkID0gdGhpcy5pZDtcbiAgICBjaGFuZ2VzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjaGFuZ2VzLndpZHRoID0gdGhpcy5kYXRhLndpZHRoO1xuICAgIGNoYW5nZXMuaGVpZ2h0ID0gdGhpcy5kYXRhLmhlaWdodDtcbiAgICBjaGFuZ2VzLnByb3BzID0gdGhpcy5kYXRhLnByb3BzO1xuICAgIHRoaXMuX2NvcHlTaWduYXR1cmVTZXJ2aWNlLm5vdGlmeUNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cblxuICBkcm9wKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaXNJbml0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEud2lkdGggPT09IDAgJiYgdGhpcy5kYXRhLmhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIG9uQ29weVNpZ24oKSB7XG4gICAgY29uc3QgY29weSA9IG5ldyBDb3B5U2lnbigpO1xuICAgIGNvcHkuZ3VpZCA9IHRoaXMuZGF0YS5ndWlkO1xuICAgIGNvcHkuaWQgPSB0aGlzLmlkO1xuICAgIGNvcHkudHlwZSA9IHRoaXMudHlwZTtcbiAgICB0aGlzLl9jb3B5U2lnbmF0dXJlU2VydmljZS5jb3B5KGNvcHkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuVEVYVC5pZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiI3RleHRcIik7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AgPCAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCArIHRoaXMuZGF0YS5oZWlnaHQgPiB0aGlzLnBhZ2VIZWlnaHQpIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wYWdlSGVpZ2h0IC0gdGhpcy5kYXRhLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCArIHRoaXMuZGF0YS53aWR0aCA+IHRoaXMucGFnZVdpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnBhZ2VXaWR0aCAtIHRoaXMuZGF0YS53aWR0aDtcbiAgICB9XG4gIH1cblxuICBzYXZlVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhLnByb3BzLnRleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHNlbmRTYXZlVGV4dCgpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnNhdmVUZXh0U2lnbmF0dXJlKHRoaXMuZGF0YSkuc3Vic2NyaWJlKChwOiBTaWduYXR1cmVQcm9wcykgPT4ge1xuICAgICAgaWYgKERyYWdnYWJsZVNpZ25hdHVyZS5URU1QID09PSB0aGlzLmRhdGEuZ3VpZCkge1xuICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5jaGFuZ2VUZW1wKHAuaW1hZ2VHdWlkLCB0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5kYXRhLmd1aWQgPSBwLmltYWdlR3VpZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5wcm9wcyA9IHA7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlTWVudSgkZXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmNoYW5nZUFjdGl2ZShudWxsKTtcbiAgfVxuXG4gIGdldE1lbnVTaGlmdCgpIHtcbiAgICBjb25zdCBtZW51V2lkdGggPSB0aGlzLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuVEVYVC5pZCA/IDQyNiA6IDE0ODtcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoID4gbWVudVdpZHRoID8gMCA6ICh0aGlzLmRhdGEud2lkdGggLSBtZW51V2lkdGgpICogMC41O1xuICB9XG59XG4iXX0=