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
const $ = jquery;
export class Signature {
    /**
     * @param {?} _signatureService
     * @param {?} _removeSignatureService
     * @param {?} _copySignatureService
     * @param {?} _activeSignatureService
     * @param {?} _signaturesHolderService
     * @param {?} _zoomService
     */
    constructor(_signatureService, _removeSignatureService, _copySignatureService, _activeSignatureService, _signaturesHolderService, _zoomService) {
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
    ngAfterViewChecked() {
        this._zoomService.changeZoom(this._zoomService.zoom);
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
    { type: SignaturesHolderService },
    { type: ZoomService }
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
    /**
     * @type {?}
     * @private
     */
    Signature.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUViLFVBQVUsRUFDVixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLFdBQVcsRUFDWixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFdEMsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7OztJQWVwQixZQUFvQixpQkFBbUMsRUFDbkMsdUJBQStDLEVBQy9DLHFCQUEyQyxFQUMzQyx1QkFBK0MsRUFDL0Msd0JBQWlELEVBQ2pELFlBQXlCO1FBTHpCLHNC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QUVyQyxzQ0FBMkM7Ozs7O0lBQzNDLDRDQUF1RDs7Ozs7SUFDdkQsMENBQW1EOzs7OztJQUNuRCw0Q0FBdUQ7Ozs7O0lBQ3ZELDZDQUF5RDs7Ozs7SUFDekQsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUG9zaXRpb24sXG4gIEFkZGVkU2lnbmF0dXJlLFxuICBTaWduYXR1cmVUeXBlLFxuICBTaWduYXR1cmVQcm9wcyxcbiAgUmVtb3ZlU2lnbixcbiAgRHJhZ2dhYmxlU2lnbmF0dXJlLFxuICBDb3B5U2lnbixcbiAgQ29weUNoYW5nZXNcbn0gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7Rm9ybWF0dGluZywgVXRpbHMsIE1lbnVUeXBlLCBab29tU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtBY3RpdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvcHlTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vY29weS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRhdGE6IEFkZGVkU2lnbmF0dXJlO1xuICBASW5wdXQoKSBwb3NpdGlvbjogUG9zaXRpb247XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgcGFnZVdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZ2VIZWlnaHQ6IG51bWJlcjtcbiAgYWN0aXZlID0gdHJ1ZTtcbiAgdW5sb2NrID0gdHJ1ZTtcbiAgY29waWVkID0gZmFsc2U7XG4gIGJhc2VDb3BpZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuXG4gIHByaXZhdGUgc3ViamVjdDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVTaWduYXR1cmVTZXJ2aWNlOiBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jb3B5U2lnbmF0dXJlU2VydmljZTogQ29weVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2U6IEFjdGl2ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlOiBTaWduYXR1cmVzSG9sZGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG5cbiAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJqZWN0LnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKVxuICAgICkuc3Vic2NyaWJlKHRleHQgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNlbmRTYXZlVGV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHRoaXMuZGF0YS5kYXRhO1xuICB9XG5cbiAgZHJhZ092ZXIoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBkcmFnU3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIGlmICgkZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnZm9vJyk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ2dpbmcoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgaWYgKHBvc2l0aW9uLnggJiYgcG9zaXRpb24ueSAmJiB0aGlzLmlzT25QYWdlKHBvc2l0aW9uKSkge1xuICAgICAgY29uc3QgbGVmdCA9IHBvc2l0aW9uLnggLSB0aGlzLm9sZFBvc2l0aW9uLng7XG4gICAgICBjb25zdCB0b3AgPSBwb3NpdGlvbi55IC0gdGhpcy5vbGRQb3NpdGlvbi55O1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9IGxlZnQ7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCArPSB0b3A7XG4gICAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgICAgdGhpcy5vbGRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGlzT25QYWdlKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIHJldHVybiBjdXJyZW50UGFnZSAmJiAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKSAmJlxuICAgICAgKCQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSB8fFxuICAgICAgICAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikpO1xuICB9XG5cbiAgaXNUZXh0KCkge1xuICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlRFWFQuaWQgPT09IHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldEZvcm1hdHRpbmcoKSB7XG4gICAgY29uc3QgZiA9IHRoaXMuZGF0YS5wcm9wcztcbiAgICBjb25zdCBmb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG4gICAgaWYgKGYpIHtcbiAgICAgIGZvcm1hdHRpbmcuZm9udFNpemUgPSBmLmZvbnRTaXplO1xuICAgICAgZm9ybWF0dGluZy5mb250ID0gZi5mb250O1xuICAgICAgZm9ybWF0dGluZy5jb2xvciA9IGYuZm9udENvbG9yO1xuICAgICAgZm9ybWF0dGluZy5ib2xkID0gZi5ib2xkO1xuICAgICAgZm9ybWF0dGluZy51bmRlcmxpbmUgPSBmLnVuZGVybGluZTtcbiAgICAgIGZvcm1hdHRpbmcuaXRhbGljID0gZi5pdGFsaWM7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0aW5nO1xuICB9XG5cbiAgc2F2ZVRleHRTaWduYXR1cmUoJGV2ZW50OiBGb3JtYXR0aW5nKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5wcm9wcykge1xuICAgICAgdGhpcy5maWxsRm9ybWF0dGluZygkZXZlbnQpO1xuICAgICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNlbmRTYXZlVGV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsbEZvcm1hdHRpbmcoZm9ybWF0dGluZzogRm9ybWF0dGluZykge1xuICAgIHRoaXMuZGF0YS5wcm9wcy5mb250U2l6ZSA9IGZvcm1hdHRpbmcuZm9udFNpemU7XG4gICAgdGhpcy5kYXRhLnByb3BzLmZvbnQgPSBmb3JtYXR0aW5nLmZvbnQ7XG4gICAgdGhpcy5kYXRhLnByb3BzLmJvbGQgPSBmb3JtYXR0aW5nLmJvbGQ7XG4gICAgdGhpcy5kYXRhLnByb3BzLml0YWxpYyA9IGZvcm1hdHRpbmcuaXRhbGljO1xuICAgIHRoaXMuZGF0YS5wcm9wcy51bmRlcmxpbmUgPSBmb3JtYXR0aW5nLnVuZGVybGluZTtcbiAgICB0aGlzLmRhdGEucHJvcHMuZm9udENvbG9yID0gZm9ybWF0dGluZy5jb2xvcjtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBkZWwgPSBuZXcgUmVtb3ZlU2lnbigpO1xuICAgIGRlbC5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XG4gICAgZGVsLmlkID0gdGhpcy5pZDtcbiAgICBkZWwudHlwZSA9IHRoaXMudHlwZTtcbiAgICB0aGlzLl9yZW1vdmVTaWduYXR1cmVTZXJ2aWNlLnJlbW92ZShkZWwpO1xuICB9XG5cbiAgYWN0aXZhdGlvbigpIHtcbiAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmNoYW5nZUFjdGl2ZSh0aGlzLmlkKTtcbiAgfVxuXG4gIGlzRGlnaXRhbCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQ7XG4gIH1cblxuICB3aWR0aCgkZXZlbnQpIHtcbiAgICB0aGlzLmRhdGEud2lkdGggKz0gJGV2ZW50O1xuICAgIGlmICghdGhpcy51bmxvY2spIHtcbiAgICAgIHRoaXMuZGF0YS5oZWlnaHQgKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgaGVpZ2h0KCRldmVudCkge1xuICAgIHRoaXMuZGF0YS5oZWlnaHQgKz0gJGV2ZW50O1xuICAgIGlmICghdGhpcy51bmxvY2spIHtcbiAgICAgIHRoaXMuZGF0YS53aWR0aCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICBsZWZ0KCRldmVudCkge1xuICAgIGlmICh0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIHRvcCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy51bmxvY2spIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIG5vdGlmeUNoYW5nZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlcyA9IG5ldyBDb3B5Q2hhbmdlcygpO1xuICAgIGNoYW5nZXMuZ3VpZCA9IHRoaXMuZGF0YS5ndWlkO1xuICAgIGNoYW5nZXMuaWQgPSB0aGlzLmlkO1xuICAgIGNoYW5nZXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNoYW5nZXMud2lkdGggPSB0aGlzLmRhdGEud2lkdGg7XG4gICAgY2hhbmdlcy5oZWlnaHQgPSB0aGlzLmRhdGEuaGVpZ2h0O1xuICAgIGNoYW5nZXMucHJvcHMgPSB0aGlzLmRhdGEucHJvcHM7XG4gICAgdGhpcy5fY29weVNpZ25hdHVyZVNlcnZpY2Uubm90aWZ5Q2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIGRyb3AoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBpc0luaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS53aWR0aCA9PT0gMCAmJiB0aGlzLmRhdGEuaGVpZ2h0ID09PSAwO1xuICB9XG5cbiAgb25Db3B5U2lnbigpIHtcbiAgICBjb25zdCBjb3B5ID0gbmV3IENvcHlTaWduKCk7XG4gICAgY29weS5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XG4gICAgY29weS5pZCA9IHRoaXMuaWQ7XG4gICAgY29weS50eXBlID0gdGhpcy50eXBlO1xuICAgIHRoaXMuX2NvcHlTaWduYXR1cmVTZXJ2aWNlLmNvcHkoY29weSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5URVhULmlkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjdGV4dFwiKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcCA8IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wICsgdGhpcy5kYXRhLmhlaWdodCA+IHRoaXMucGFnZUhlaWdodCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBhZ2VIZWlnaHQgLSB0aGlzLmRhdGEuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgdGhpcy5kYXRhLndpZHRoID4gdGhpcy5wYWdlV2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubGVmdCA9IHRoaXMucGFnZVdpZHRoIC0gdGhpcy5kYXRhLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGEucHJvcHMudGV4dCA9IHZhbHVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VuZFNhdmVUZXh0KCkge1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2Uuc2F2ZVRleHRTaWduYXR1cmUodGhpcy5kYXRhKS5zdWJzY3JpYmUoKHA6IFNpZ25hdHVyZVByb3BzKSA9PiB7XG4gICAgICBpZiAoRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVAgPT09IHRoaXMuZGF0YS5ndWlkKSB7XG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmNoYW5nZVRlbXAocC5pbWFnZUd1aWQsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmRhdGEuZ3VpZCA9IHAuaW1hZ2VHdWlkO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhLnByb3BzID0gcDtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVNZW51KCRldmVudCkge1xuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xuICB9XG5cbiAgZ2V0TWVudVNoaWZ0KCkge1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IHRoaXMudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5URVhULmlkID8gNDI2IDogMTQ4O1xuICAgIGxldCBzaGlmdCA9IHRoaXMuZGF0YS53aWR0aCA+IG1lbnVXaWR0aCA/IDAgOiAodGhpcy5kYXRhLndpZHRoIC0gbWVudVdpZHRoKSAqIDAuNTtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0IC0gKG1lbnVXaWR0aCAtIHRoaXMuZGF0YS53aWR0aCkgLyAyIDwgMCkge1xuICAgICAgc2hpZnQgLT0gKHRoaXMucG9zaXRpb24ubGVmdCAtIChtZW51V2lkdGggLSB0aGlzLmRhdGEud2lkdGgpIC8gMik7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgKyAobWVudVdpZHRoICsgdGhpcy5kYXRhLndpZHRoKSAvIDIgPiB0aGlzLnBhZ2VXaWR0aCkge1xuICAgICAgc2hpZnQgLT0gKHRoaXMucG9zaXRpb24ubGVmdCArIChtZW51V2lkdGggKyB0aGlzLmRhdGEud2lkdGgpIC8gMiAtIHRoaXMucGFnZVdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaWZ0O1xuICB9XG5cbiAgZ2V0TWVudVR5cGUoKSB7XG4gICAgcmV0dXJuIE1lbnVUeXBlLkZPUl9TSUdOQVRVUkU7XG4gIH1cbn1cbiJdfQ==