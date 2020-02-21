/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Position, AddedSignature, SignatureType, RemoveSign, DraggableSignature, CopySign, CopyChanges } from "../signature-models";
import { Formatting, Utils, MenuType } from "@groupdocs.examples.angular/common-components";
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
        /** @type {?} */
        let shift = this.data.width > menuWidth ? 0 : (this.data.width - menuWidth) * 0.5;
        if (this.position.left - (menuWidth - this.data.width) / 2 < 0) {
            shift -= (this.position.left - (menuWidth - this.data.width) / 2);
        }
        if (this.position.left + (menuWidth + this.data.width) / 2 > this.pageWidth) {
            shift -= (this.position.left + (menuWidth + this.data.width) / 2 - this.pageWidth);
        }
        return shift;
    }
    /**
     * @return {?}
     */
    getMenuType() {
        return MenuType.FOR_SIGNATURE;
    }
}
Signature.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature-component',
                template: "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\n     [style.width.px]=\"data.width ? data.width : undefined\"\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-signature-wrapper\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeItem)=\"remove()\" (copySign)=\"onCopySign()\"\n                     [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"\n                     [menuType]=\"getMenuType()\"></gd-context-menu>\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\n              id=\"text\" #text (keyup)=\"saveText(text.value)\"\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\n              [style.color]=\"data.props?.fontColor\"\n              [style.font-family]=\"data?.props.font\"\n              [style.font-size.px]=\"data?.props.fontSize\"\n              [style.width.px]=\"data.width ? data.width : undefined\"\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\n  </div>\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\n</div>\n",
                styles: [".gd-signature{position:absolute!important}.gd-signature .gd-signature-wrapper{height:inherit;outline:#679ffa solid 1px}.gd-signature-image{width:100%!important;height:inherit}.gd-text{width:inherit;height:inherit;border:none;resize:none;outline:0;margin:0;padding:0}.gd-digital-marker{background-color:#3787f5;height:16px;width:100%;text-align:left;display:-webkit-box;display:flex;position:absolute;bottom:0}.gd-digital-marker .icon{color:#fff;font-size:10px;margin:0 5px 0 3px}.gd-digital-marker div{-webkit-box-flex:1;flex-grow:1;font-size:8px;color:#fff;margin-top:1px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsUUFBUSxFQUNSLGNBQWMsRUFDZCxhQUFhLEVBRWIsVUFBVSxFQUNWLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsV0FBVyxFQUNaLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDMUYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O01BRXRDLENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyxTQUFTOzs7Ozs7OztJQWVwQixZQUFvQixpQkFBbUMsRUFDbkMsdUJBQStDLEVBQy9DLHFCQUEyQyxFQUMzQyx1QkFBK0MsRUFDL0Msd0JBQWlEO1FBSmpELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7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LENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzNFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQzs7O1lBOVBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx1dkZBQXlDOzthQUUxQzs7OztZQWZPLGdCQUFnQjtZQUNoQixzQkFBc0I7WUFJdEIsb0JBQW9CO1lBSHBCLHNCQUFzQjtZQUV0Qix1QkFBdUI7OztpQkFhNUIsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7Ozs7SUFMTix1QkFBb0I7O0lBQ3BCLHlCQUE4Qjs7SUFDOUIsNkJBQTRCOztJQUM1Qix5QkFBc0I7O0lBQ3RCLDhCQUEyQjs7SUFDM0IsK0JBQTRCOztJQUM1QiwyQkFBYzs7SUFDZCwyQkFBYzs7SUFDZCwyQkFBZTs7SUFDZiwrQkFBbUI7Ozs7O0lBQ25CLGdDQUE4Qzs7Ozs7SUFFOUMsNEJBQWlEOzs7OztJQUVyQyxzQ0FBMkM7Ozs7O0lBQzNDLDRDQUF1RDs7Ozs7SUFDdkQsMENBQW1EOzs7OztJQUNuRCw0Q0FBdUQ7Ozs7O0lBQ3ZELDZDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBvc2l0aW9uLFxuICBBZGRlZFNpZ25hdHVyZSxcbiAgU2lnbmF0dXJlVHlwZSxcbiAgU2lnbmF0dXJlUHJvcHMsXG4gIFJlbW92ZVNpZ24sXG4gIERyYWdnYWJsZVNpZ25hdHVyZSxcbiAgQ29weVNpZ24sXG4gIENvcHlDaGFuZ2VzXG59IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge0Zvcm1hdHRpbmcsIFV0aWxzLCBNZW51VHlwZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtBY3RpdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvcHlTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vY29weS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRhdGE6IEFkZGVkU2lnbmF0dXJlO1xuICBASW5wdXQoKSBwb3NpdGlvbjogUG9zaXRpb247XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgcGFnZVdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZ2VIZWlnaHQ6IG51bWJlcjtcbiAgYWN0aXZlID0gdHJ1ZTtcbiAgdW5sb2NrID0gdHJ1ZTtcbiAgY29waWVkID0gZmFsc2U7XG4gIGJhc2VDb3BpZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuXG4gIHByaXZhdGUgc3ViamVjdDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVTaWduYXR1cmVTZXJ2aWNlOiBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb3B5U2lnbmF0dXJlU2VydmljZTogQ29weVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2U6IEFjdGl2ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlOiBTaWduYXR1cmVzSG9sZGVyU2VydmljZSkge1xuXG4gICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc3ViamVjdC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDMwMClcbiAgICApLnN1YnNjcmliZSh0ZXh0ID0+IHtcbiAgICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZW5kU2F2ZVRleHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgdGhpcy5kYXRhLmRhdGE7XG4gIH1cblxuICBkcmFnT3ZlcigkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGRyYWdTdGFydCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub2xkUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgaWYgKCRldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2luZygkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAocG9zaXRpb24ueCAmJiBwb3NpdGlvbi55ICYmIHRoaXMuaXNPblBhZ2UocG9zaXRpb24pKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gcG9zaXRpb24ueCAtIHRoaXMub2xkUG9zaXRpb24ueDtcbiAgICAgIGNvbnN0IHRvcCA9IHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnk7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wICs9IHRvcDtcbiAgICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLm9sZFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgaXNPblBhZ2UocG9zaXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgcmV0dXJuIGN1cnJlbnRQYWdlICYmICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpICYmXG4gICAgICAoJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpIHx8XG4gICAgICAgICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSk7XG4gIH1cblxuICBpc1RleHQoKSB7XG4gICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuVEVYVC5pZCA9PT0gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Rm9ybWF0dGluZygpIHtcbiAgICBjb25zdCBmID0gdGhpcy5kYXRhLnByb3BzO1xuICAgIGNvbnN0IGZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcbiAgICBpZiAoZikge1xuICAgICAgZm9ybWF0dGluZy5mb250U2l6ZSA9IGYuZm9udFNpemU7XG4gICAgICBmb3JtYXR0aW5nLmZvbnQgPSBmLmZvbnQ7XG4gICAgICBmb3JtYXR0aW5nLmNvbG9yID0gZi5mb250Q29sb3I7XG4gICAgICBmb3JtYXR0aW5nLmJvbGQgPSBmLmJvbGQ7XG4gICAgICBmb3JtYXR0aW5nLnVuZGVybGluZSA9IGYudW5kZXJsaW5lO1xuICAgICAgZm9ybWF0dGluZy5pdGFsaWMgPSBmLml0YWxpYztcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRpbmc7XG4gIH1cblxuICBzYXZlVGV4dFNpZ25hdHVyZSgkZXZlbnQ6IEZvcm1hdHRpbmcpIHtcbiAgICBpZiAodGhpcy5kYXRhLnByb3BzKSB7XG4gICAgICB0aGlzLmZpbGxGb3JtYXR0aW5nKCRldmVudCk7XG4gICAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2VuZFNhdmVUZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWxsRm9ybWF0dGluZyhmb3JtYXR0aW5nOiBGb3JtYXR0aW5nKSB7XG4gICAgdGhpcy5kYXRhLnByb3BzLmZvbnRTaXplID0gZm9ybWF0dGluZy5mb250U2l6ZTtcbiAgICB0aGlzLmRhdGEucHJvcHMuZm9udCA9IGZvcm1hdHRpbmcuZm9udDtcbiAgICB0aGlzLmRhdGEucHJvcHMuYm9sZCA9IGZvcm1hdHRpbmcuYm9sZDtcbiAgICB0aGlzLmRhdGEucHJvcHMuaXRhbGljID0gZm9ybWF0dGluZy5pdGFsaWM7XG4gICAgdGhpcy5kYXRhLnByb3BzLnVuZGVybGluZSA9IGZvcm1hdHRpbmcudW5kZXJsaW5lO1xuICAgIHRoaXMuZGF0YS5wcm9wcy5mb250Q29sb3IgPSBmb3JtYXR0aW5nLmNvbG9yO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGRlbCA9IG5ldyBSZW1vdmVTaWduKCk7XG4gICAgZGVsLmd1aWQgPSB0aGlzLmRhdGEuZ3VpZDtcbiAgICBkZWwuaWQgPSB0aGlzLmlkO1xuICAgIGRlbC50eXBlID0gdGhpcy50eXBlO1xuICAgIHRoaXMuX3JlbW92ZVNpZ25hdHVyZVNlcnZpY2UucmVtb3ZlKGRlbCk7XG4gIH1cblxuICBhY3RpdmF0aW9uKCkge1xuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuaWQpO1xuICB9XG5cbiAgaXNEaWdpdGFsKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZDtcbiAgfVxuXG4gIHdpZHRoKCRldmVudCkge1xuICAgIHRoaXMuZGF0YS53aWR0aCArPSAkZXZlbnQ7XG4gICAgaWYgKCF0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5kYXRhLmhlaWdodCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICBoZWlnaHQoJGV2ZW50KSB7XG4gICAgdGhpcy5kYXRhLmhlaWdodCArPSAkZXZlbnQ7XG4gICAgaWYgKCF0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5kYXRhLndpZHRoICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIGxlZnQoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgdG9wKCRldmVudCkge1xuICAgIGlmICh0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgbm90aWZ5Q2hhbmdlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VzID0gbmV3IENvcHlDaGFuZ2VzKCk7XG4gICAgY2hhbmdlcy5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XG4gICAgY2hhbmdlcy5pZCA9IHRoaXMuaWQ7XG4gICAgY2hhbmdlcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgY2hhbmdlcy53aWR0aCA9IHRoaXMuZGF0YS53aWR0aDtcbiAgICBjaGFuZ2VzLmhlaWdodCA9IHRoaXMuZGF0YS5oZWlnaHQ7XG4gICAgY2hhbmdlcy5wcm9wcyA9IHRoaXMuZGF0YS5wcm9wcztcbiAgICB0aGlzLl9jb3B5U2lnbmF0dXJlU2VydmljZS5ub3RpZnlDaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgZHJvcCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlzSW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoID09PSAwICYmIHRoaXMuZGF0YS5oZWlnaHQgPT09IDA7XG4gIH1cblxuICBvbkNvcHlTaWduKCkge1xuICAgIGNvbnN0IGNvcHkgPSBuZXcgQ29weVNpZ24oKTtcbiAgICBjb3B5Lmd1aWQgPSB0aGlzLmRhdGEuZ3VpZDtcbiAgICBjb3B5LmlkID0gdGhpcy5pZDtcbiAgICBjb3B5LnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgdGhpcy5fY29weVNpZ25hdHVyZVNlcnZpY2UuY29weShjb3B5KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50eXBlID09PSBTaWduYXR1cmVUeXBlLlRFWFQuaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIiN0ZXh0XCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvcnJlY3RQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0IDwgMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wIDwgMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AgKyB0aGlzLmRhdGEuaGVpZ2h0ID4gdGhpcy5wYWdlSGVpZ2h0KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucGFnZUhlaWdodCAtIHRoaXMuZGF0YS5oZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgKyB0aGlzLmRhdGEud2lkdGggPiB0aGlzLnBhZ2VXaWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5wYWdlV2lkdGggLSB0aGlzLmRhdGEud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgc2F2ZVRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YS5wcm9wcy50ZXh0ID0gdmFsdWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZW5kU2F2ZVRleHQoKSB7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5zYXZlVGV4dFNpZ25hdHVyZSh0aGlzLmRhdGEpLnN1YnNjcmliZSgocDogU2lnbmF0dXJlUHJvcHMpID0+IHtcbiAgICAgIGlmIChEcmFnZ2FibGVTaWduYXR1cmUuVEVNUCA9PT0gdGhpcy5kYXRhLmd1aWQpIHtcbiAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuY2hhbmdlVGVtcChwLmltYWdlR3VpZCwgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuZGF0YS5ndWlkID0gcC5pbWFnZUd1aWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGEucHJvcHMgPSBwO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZU1lbnUoJGV2ZW50KSB7XG4gICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5jaGFuZ2VBY3RpdmUobnVsbCk7XG4gIH1cblxuICBnZXRNZW51U2hpZnQoKSB7XG4gICAgY29uc3QgbWVudVdpZHRoID0gdGhpcy50eXBlID09PSBTaWduYXR1cmVUeXBlLlRFWFQuaWQgPyA0MjYgOiAxNDg7XG4gICAgbGV0IHNoaWZ0ID0gdGhpcy5kYXRhLndpZHRoID4gbWVudVdpZHRoID8gMCA6ICh0aGlzLmRhdGEud2lkdGggLSBtZW51V2lkdGgpICogMC41O1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgLSAobWVudVdpZHRoIC0gdGhpcy5kYXRhLndpZHRoKSAvIDIgPCAwKSB7XG4gICAgICBzaGlmdCAtPSAodGhpcy5wb3NpdGlvbi5sZWZ0IC0gKG1lbnVXaWR0aCAtIHRoaXMuZGF0YS53aWR0aCkgLyAyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCArIChtZW51V2lkdGggKyB0aGlzLmRhdGEud2lkdGgpIC8gMiA+IHRoaXMucGFnZVdpZHRoKSB7XG4gICAgICBzaGlmdCAtPSAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgKG1lbnVXaWR0aCArIHRoaXMuZGF0YS53aWR0aCkgLyAyIC0gdGhpcy5wYWdlV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gc2hpZnQ7XG4gIH1cblxuICBnZXRNZW51VHlwZSgpIHtcbiAgICByZXR1cm4gTWVudVR5cGUuRk9SX1NJR05BVFVSRTtcbiAgfVxufVxuIl19