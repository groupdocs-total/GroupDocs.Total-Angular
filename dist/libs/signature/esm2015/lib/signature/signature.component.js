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
     * @param {?=} value
     * @return {?}
     */
    saveText(value = "") {
        if (value) {
            this.data.props.text = value;
            this.subject.next(value);
        }
        else {
            this.data.props.text = $("#text").val();
            this.subject.next($("#text").val());
            this.hideMenu(null);
        }
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
        if (!this.isText()) {
            return MenuType.FOR_SIGNATURE;
        }
        else {
            return MenuType.FOR_TEXT_SIGNATURE;
        }
    }
}
Signature.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature-component',
                template: "<div class=\"gd-signature\" *ngIf=\"!isDigital()\"\n     (clickOutside)=\"hideMenu($event)\"\n     [exclude]=\"'gd-context-menu,.ui-resizable-handle'\"\n     [excludeBeforeClick]=\"true\"\n     [clickOutsideEvents]=\"'mousedown'\"\n     [clickOutsideEnabled]=\"active\"\n     [style.left.px]=\"position.left\" [style.top.px]=\"position.top\"\n     [style.width.px]=\"data.width ? data.width : undefined\"\n     [style.height.px]=\"data.height ? data.height : undefined\" (click)=\"activation()\">\n  <div [draggable]=\"true\" (dragover)=\"dragOver($event)\" (dragstart)=\"dragStart($event)\"\n       (drag)=\"dragging($event)\" (dragend)=\"dragging($event)\" (drop)=\"drop($event)\"\n       (panstart)=\"dragStart($event)\" (panmove)=\"dragging($event)\"\n       class=\"gd-signature-wrapper\">\n    <gd-context-menu *ngIf=\"active\" [topPosition]=\"position.top\" [textMenu]=\"isText()\" [formatting]=\"getFormatting()\"\n                     (changeFormatting)=\"saveTextSignature($event)\" (removeItem)=\"remove()\" (saveItemEmitter)=\"saveText()\" \n                     (copySign)=\"onCopySign()\" [lock]=\"!unlock\" (lockOut)=\"unlock = !$event\" [translation]=\"getMenuShift()\"\n                     [menuType]=\"getMenuType()\"></gd-context-menu>\n    <img class=\"gd-signature-image\" *ngIf=\"!isText()\" [attr.src]=\"getData()\" alt>\n    <textarea class=\"gd-text\" *ngIf=\"isText()\" [value]=\"data.props?.text\"\n              id=\"text\" #text\n              [style.text-decoration]=\"data.props?.underline ? 'underline' : 'unset'\"\n              [style.font-style]=\"data.props?.italic ? 'italic' : 'unset'\"\n              [style.font-weight]=\"data.props?.bold ? 'bold' : 'unset'\"\n              [style.color]=\"data.props?.fontColor\"\n              [style.font-family]=\"data?.props.font\"\n              [style.font-size.px]=\"data?.props.fontSize\"\n              [style.width.px]=\"data.width ? data.width : undefined\"\n              [style.height.px]=\"data.height ? data.height : undefined\"></textarea>\n  </div>\n  <gd-resizing [id]=\"id\" *ngIf=\"active\" [init]=\"isInit()\"\n               (offsetX)=\"width($event)\" (offsetY)=\"height($event)\"\n               (offsetTop)=\"top($event)\" (offsetLeft)=\"left($event)\"\n               [se]=\"true\" [sw]=\"unlock\" [ne]=\"unlock\" [nw]=\"unlock\"\n               [pageHeight]=\"pageHeight\" [pageWidth]=\"pageWidth\"></gd-resizing>\n</div>\n<div class=\"gd-digital-marker\" *ngIf=\"isDigital()\">\n  <fa-icon [icon]=\"['fas','info-circle']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  <div>Digitally signed : {{data.digitalProps.contact ? data.digitalProps.contact : data.digitalProps.reason}}</div>\n  <fa-icon [icon]=\"['fas','times']\" [class]=\"'ng-fa-icon icon'\" (click)=\"remove()\"></fa-icon>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsYUFBYSxFQUViLFVBQVUsRUFDVixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLFdBQVcsRUFDWixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFdEMsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7OztJQWVwQixZQUFvQixpQkFBbUMsRUFDbkMsdUJBQStDLEVBQy9DLHFCQUEyQyxFQUMzQyx1QkFBK0MsRUFDL0Msd0JBQWlELEVBQ2pELFlBQXlCO1FBTHpCLHNC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Qyx3dkZBQXlDOzthQUUxQzs7OztZQWZPLGdCQUFnQjtZQUNoQixzQkFBc0I7WUFJdEIsb0JBQW9CO1lBSHBCLHNCQUFzQjtZQUV0Qix1QkFBdUI7WUFMTSxXQUFXOzs7aUJBa0I3QyxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQUxOLHVCQUFvQjs7SUFDcEIseUJBQThCOztJQUM5Qiw2QkFBNEI7O0lBQzVCLHlCQUFzQjs7SUFDdEIsOEJBQTJCOztJQUMzQiwrQkFBNEI7O0lBQzVCLDJCQUFjOztJQUNkLDJCQUFjOztJQUNkLDJCQUFlOztJQUNmLCtCQUFtQjs7Ozs7SUFDbkIsZ0NBQThDOzs7OztJQUU5Qyw0QkFBaUQ7Ozs7O0lBRXJDLHNDQUEyQzs7Ozs7SUFDM0MsNENBQXVEOzs7OztJQUN2RCwwQ0FBbUQ7Ozs7O0lBQ25ELDRDQUF1RDs7Ozs7SUFDdkQsNkNBQXlEOzs7OztJQUN6RCxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQb3NpdGlvbixcbiAgQWRkZWRTaWduYXR1cmUsXG4gIFNpZ25hdHVyZVR5cGUsXG4gIFNpZ25hdHVyZVByb3BzLFxuICBSZW1vdmVTaWduLFxuICBEcmFnZ2FibGVTaWduYXR1cmUsXG4gIENvcHlTaWduLFxuICBDb3B5Q2hhbmdlc1xufSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtGb3JtYXR0aW5nLCBVdGlscywgTWVudVR5cGUsIFpvb21TZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vcmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9hY3RpdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZXMtaG9sZGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9jb3B5LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge2RlYm91bmNlVGltZX0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXNpZ25hdHVyZS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmF0dXJlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YTogQWRkZWRTaWduYXR1cmU7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgcGFnZUhlaWdodDogbnVtYmVyO1xuICBhY3RpdmUgPSB0cnVlO1xuICB1bmxvY2sgPSB0cnVlO1xuICBjb3BpZWQgPSBmYWxzZTtcbiAgYmFzZUNvcGllZCA9IGZhbHNlO1xuICBwcml2YXRlIG9sZFBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG5cbiAgcHJpdmF0ZSBzdWJqZWN0OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbW92ZVNpZ25hdHVyZVNlcnZpY2U6IFJlbW92ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvcHlTaWduYXR1cmVTZXJ2aWNlOiBDb3B5U2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aXZlU2lnbmF0dXJlU2VydmljZTogQWN0aXZlU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlc0hvbGRlclNlcnZpY2U6IFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UpIHtcblxuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YmplY3QucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgzMDApXG4gICAgKS5zdWJzY3JpYmUodGV4dCA9PiB7XG4gICAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2VuZFNhdmVUZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgdGhpcy5kYXRhLmRhdGE7XG4gIH1cblxuICBkcmFnT3ZlcigkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGRyYWdTdGFydCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub2xkUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgaWYgKCRldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2luZygkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICBpZiAocG9zaXRpb24ueCAmJiBwb3NpdGlvbi55ICYmIHRoaXMuaXNPblBhZ2UocG9zaXRpb24pKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gcG9zaXRpb24ueCAtIHRoaXMub2xkUG9zaXRpb24ueDtcbiAgICAgIGNvbnN0IHRvcCA9IHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnk7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gbGVmdDtcbiAgICAgIHRoaXMucG9zaXRpb24udG9wICs9IHRvcDtcbiAgICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLm9sZFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgaXNPblBhZ2UocG9zaXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgcmV0dXJuIGN1cnJlbnRQYWdlICYmICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpICYmXG4gICAgICAoJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpIHx8XG4gICAgICAgICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSk7XG4gIH1cblxuICBpc1RleHQoKSB7XG4gICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuVEVYVC5pZCA9PT0gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Rm9ybWF0dGluZygpIHtcbiAgICBjb25zdCBmID0gdGhpcy5kYXRhLnByb3BzO1xuICAgIGNvbnN0IGZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcbiAgICBpZiAoZikge1xuICAgICAgZm9ybWF0dGluZy5mb250U2l6ZSA9IGYuZm9udFNpemU7XG4gICAgICBmb3JtYXR0aW5nLmZvbnQgPSBmLmZvbnQ7XG4gICAgICBmb3JtYXR0aW5nLmNvbG9yID0gZi5mb250Q29sb3I7XG4gICAgICBmb3JtYXR0aW5nLmJvbGQgPSBmLmJvbGQ7XG4gICAgICBmb3JtYXR0aW5nLnVuZGVybGluZSA9IGYudW5kZXJsaW5lO1xuICAgICAgZm9ybWF0dGluZy5pdGFsaWMgPSBmLml0YWxpYztcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRpbmc7XG4gIH1cblxuICBzYXZlVGV4dFNpZ25hdHVyZSgkZXZlbnQ6IEZvcm1hdHRpbmcpIHtcbiAgICBpZiAodGhpcy5kYXRhLnByb3BzKSB7XG4gICAgICB0aGlzLmZpbGxGb3JtYXR0aW5nKCRldmVudCk7XG4gICAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2VuZFNhdmVUZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWxsRm9ybWF0dGluZyhmb3JtYXR0aW5nOiBGb3JtYXR0aW5nKSB7XG4gICAgdGhpcy5kYXRhLnByb3BzLmZvbnRTaXplID0gZm9ybWF0dGluZy5mb250U2l6ZTtcbiAgICB0aGlzLmRhdGEucHJvcHMuZm9udCA9IGZvcm1hdHRpbmcuZm9udDtcbiAgICB0aGlzLmRhdGEucHJvcHMuYm9sZCA9IGZvcm1hdHRpbmcuYm9sZDtcbiAgICB0aGlzLmRhdGEucHJvcHMuaXRhbGljID0gZm9ybWF0dGluZy5pdGFsaWM7XG4gICAgdGhpcy5kYXRhLnByb3BzLnVuZGVybGluZSA9IGZvcm1hdHRpbmcudW5kZXJsaW5lO1xuICAgIHRoaXMuZGF0YS5wcm9wcy5mb250Q29sb3IgPSBmb3JtYXR0aW5nLmNvbG9yO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGRlbCA9IG5ldyBSZW1vdmVTaWduKCk7XG4gICAgZGVsLmd1aWQgPSB0aGlzLmRhdGEuZ3VpZDtcbiAgICBkZWwuaWQgPSB0aGlzLmlkO1xuICAgIGRlbC50eXBlID0gdGhpcy50eXBlO1xuICAgIHRoaXMuX3JlbW92ZVNpZ25hdHVyZVNlcnZpY2UucmVtb3ZlKGRlbCk7XG4gIH1cblxuICBhY3RpdmF0aW9uKCkge1xuICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuaWQpO1xuICB9XG5cbiAgaXNEaWdpdGFsKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZDtcbiAgfVxuXG4gIHdpZHRoKCRldmVudCkge1xuICAgIHRoaXMuZGF0YS53aWR0aCArPSAkZXZlbnQ7XG4gICAgaWYgKCF0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5kYXRhLmhlaWdodCArPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2VzKCk7XG4gIH1cblxuICBoZWlnaHQoJGV2ZW50KSB7XG4gICAgdGhpcy5kYXRhLmhlaWdodCArPSAkZXZlbnQ7XG4gICAgaWYgKCF0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5kYXRhLndpZHRoICs9ICRldmVudDtcbiAgICB9XG4gICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZXMoKTtcbiAgfVxuXG4gIGxlZnQoJGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudW5sb2NrKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmxlZnQgKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgdG9wKCRldmVudCkge1xuICAgIGlmICh0aGlzLnVubG9jaykge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgKz0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RQb3NpdGlvbigpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlcygpO1xuICB9XG5cbiAgbm90aWZ5Q2hhbmdlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VzID0gbmV3IENvcHlDaGFuZ2VzKCk7XG4gICAgY2hhbmdlcy5ndWlkID0gdGhpcy5kYXRhLmd1aWQ7XG4gICAgY2hhbmdlcy5pZCA9IHRoaXMuaWQ7XG4gICAgY2hhbmdlcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgY2hhbmdlcy53aWR0aCA9IHRoaXMuZGF0YS53aWR0aDtcbiAgICBjaGFuZ2VzLmhlaWdodCA9IHRoaXMuZGF0YS5oZWlnaHQ7XG4gICAgY2hhbmdlcy5wcm9wcyA9IHRoaXMuZGF0YS5wcm9wcztcbiAgICB0aGlzLl9jb3B5U2lnbmF0dXJlU2VydmljZS5ub3RpZnlDaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgZHJvcCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlzSW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoID09PSAwICYmIHRoaXMuZGF0YS5oZWlnaHQgPT09IDA7XG4gIH1cblxuICBvbkNvcHlTaWduKCkge1xuICAgIGNvbnN0IGNvcHkgPSBuZXcgQ29weVNpZ24oKTtcbiAgICBjb3B5Lmd1aWQgPSB0aGlzLmRhdGEuZ3VpZDtcbiAgICBjb3B5LmlkID0gdGhpcy5pZDtcbiAgICBjb3B5LnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgdGhpcy5fY29weVNpZ25hdHVyZVNlcnZpY2UuY29weShjb3B5KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50eXBlID09PSBTaWduYXR1cmVUeXBlLlRFWFQuaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIiN0ZXh0XCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvcnJlY3RQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5sZWZ0IDwgMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24udG9wIDwgMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AgKyB0aGlzLmRhdGEuaGVpZ2h0ID4gdGhpcy5wYWdlSGVpZ2h0KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucGFnZUhlaWdodCAtIHRoaXMuZGF0YS5oZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgKyB0aGlzLmRhdGEud2lkdGggPiB0aGlzLnBhZ2VXaWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5wYWdlV2lkdGggLSB0aGlzLmRhdGEud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgc2F2ZVRleHQodmFsdWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZGF0YS5wcm9wcy50ZXh0ID0gdmFsdWU7XG4gICAgICB0aGlzLnN1YmplY3QubmV4dCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5wcm9wcy50ZXh0ID0gJChcIiN0ZXh0XCIpLnZhbCgpO1xuICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoJChcIiN0ZXh0XCIpLnZhbCgpKTtcbiAgICAgIHRoaXMuaGlkZU1lbnUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZW5kU2F2ZVRleHQoKSB7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5zYXZlVGV4dFNpZ25hdHVyZSh0aGlzLmRhdGEpLnN1YnNjcmliZSgocDogU2lnbmF0dXJlUHJvcHMpID0+IHtcbiAgICAgIGlmIChEcmFnZ2FibGVTaWduYXR1cmUuVEVNUCA9PT0gdGhpcy5kYXRhLmd1aWQpIHtcbiAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuY2hhbmdlVGVtcChwLmltYWdlR3VpZCwgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuZGF0YS5ndWlkID0gcC5pbWFnZUd1aWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGEucHJvcHMgPSBwO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZU1lbnUoJGV2ZW50KSB7XG4gICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5jaGFuZ2VBY3RpdmUobnVsbCk7XG4gIH1cblxuICBnZXRNZW51U2hpZnQoKSB7XG4gICAgY29uc3QgbWVudVdpZHRoID0gdGhpcy50eXBlID09PSBTaWduYXR1cmVUeXBlLlRFWFQuaWQgPyA0MjYgOiAxNDg7XG4gICAgbGV0IHNoaWZ0ID0gdGhpcy5kYXRhLndpZHRoID4gbWVudVdpZHRoID8gMCA6ICh0aGlzLmRhdGEud2lkdGggLSBtZW51V2lkdGgpICogMC41O1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmxlZnQgLSAobWVudVdpZHRoIC0gdGhpcy5kYXRhLndpZHRoKSAvIDIgPCAwKSB7XG4gICAgICBzaGlmdCAtPSAodGhpcy5wb3NpdGlvbi5sZWZ0IC0gKG1lbnVXaWR0aCAtIHRoaXMuZGF0YS53aWR0aCkgLyAyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24ubGVmdCArIChtZW51V2lkdGggKyB0aGlzLmRhdGEud2lkdGgpIC8gMiA+IHRoaXMucGFnZVdpZHRoKSB7XG4gICAgICBzaGlmdCAtPSAodGhpcy5wb3NpdGlvbi5sZWZ0ICsgKG1lbnVXaWR0aCArIHRoaXMuZGF0YS53aWR0aCkgLyAyIC0gdGhpcy5wYWdlV2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gc2hpZnQ7XG4gIH1cblxuICBnZXRNZW51VHlwZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNUZXh0KCkpIHtcbiAgICAgIHJldHVybiBNZW51VHlwZS5GT1JfU0lHTkFUVVJFO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWVudVR5cGUuRk9SX1RFWFRfU0lHTkFUVVJFO1xuICAgIH1cbiAgfVxufVxuIl19