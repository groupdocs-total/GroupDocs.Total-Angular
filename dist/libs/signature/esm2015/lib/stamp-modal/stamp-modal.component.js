/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { SignatureType, StampCanvasProps } from "../signature-models";
import { ActiveCanvasService } from './../active-canvas.service';
import { SignatureService } from './../signature.service';
import { SignatureTabActivatorService } from "./../signature-tab-activator.service";
import { RemoveCanvasService } from "../remove-canvas.service";
import { StampCanvasComponent } from "../stamp-canvas/stamp-canvas.component";
import { AddDynamicComponentService, CommonModals, Formatting, HostDynamicDirective, ModalService, WindowService } from "@groupdocs.examples.angular/common-components";
import * as jquery from "jquery";
/** @type {?} */
const $ = jquery;
export class StampModalComponent {
    /**
     * @param {?} _addDynamicComponentService
     * @param {?} _activeCanvasService
     * @param {?} _windowService
     * @param {?} _removeCanvas
     * @param {?} _signatureService
     * @param {?} _tabActivationService
     * @param {?} _modalService
     */
    constructor(_addDynamicComponentService, _activeCanvasService, _windowService, _removeCanvas, _signatureService, _tabActivationService, _modalService) {
        this._addDynamicComponentService = _addDynamicComponentService;
        this._activeCanvasService = _activeCanvasService;
        this._windowService = _windowService;
        this._removeCanvas = _removeCanvas;
        this._signatureService = _signatureService;
        this._tabActivationService = _tabActivationService;
        this._modalService = _modalService;
        this.stampCircles = new Map();
        this.textString = '';
        this.showText = false;
        this.sizeMagnifier = 40;
        this.textProps = Formatting.default();
        this._removeCanvas.removeCanvas.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            /** @type {?} */
            const componentRef = this.stampCircles.get(id);
            componentRef.destroy();
            this.stampCircles.delete(id);
        }));
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isMobile = _windowService.isMobile();
        }));
        this._activeCanvasService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            this.activeId = id;
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
    saveSign() {
        /** @type {?} */
        const componentRef = this.stampCircles.get(this.stampCircles.size);
        /** @type {?} */
        const canvasComponent = (/** @type {?} */ (componentRef.instance));
        /** @type {?} */
        const lastProps = canvasComponent.props;
        /** @type {?} */
        const ctx = canvasComponent.ctx;
        /** @type {?} */
        const props = [];
        props.push(lastProps);
        for (let i = this.stampCircles.size - 1; i > 0; i--) {
            /** @type {?} */
            const comp = (/** @type {?} */ (this.stampCircles.get(i).instance));
            /** @type {?} */
            const canvas = comp.canvas.nativeElement;
            /** @type {?} */
            let offset = lastProps.width - comp.props.width;
            if (offset !== 0) {
                offset = offset / 2;
            }
            ctx.drawImage(canvas, offset, offset);
            props.push(comp.props);
        }
        props.reverse();
        /** @type {?} */
        const img = canvasComponent.canvas.nativeElement.toDataURL("image/png");
        this._signatureService.saveStamp(img, props).subscribe((/**
         * @return {?}
         */
        () => {
            this._tabActivationService.changeActiveTab(SignatureType.STAMP.id);
            this._signatureService.refreshSignatures();
        }));
        this.close();
    }
    /**
     * @private
     * @return {?}
     */
    close() {
        this._modalService.close(CommonModals.DrawStampSignature);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onCloseOpen($event) {
        if ($event) {
            this.textString = '';
            /** @type {?} */
            const props = new StampCanvasProps().init(this.isMobile);
            props.id = this.stampCircles.size + 1;
            this.addCircle(props, true);
        }
        else {
            this.clear();
        }
    }
    /**
     * @return {?}
     */
    clear() {
        for (const comp of this.stampCircles.values()) {
            comp.destroy();
        }
        this.stampCircles = new Map();
        this.showText = false;
    }
    /**
     * @private
     * @param {?} props
     * @param {?} theFirst
     * @return {?}
     */
    addCircle(props, theFirst) {
        if (this.dynamicDirective) {
            /** @type {?} */
            const viewContainerRef = this.dynamicDirective.viewContainerRef;
            /** @type {?} */
            const stampCircle = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, StampCanvasComponent);
            ((/** @type {?} */ (stampCircle.instance))).id = props.id;
            ((/** @type {?} */ (stampCircle.instance))).theFirst = theFirst;
            ((/** @type {?} */ (stampCircle.instance))).active = true;
            ((/** @type {?} */ (stampCircle.instance))).props = props;
            ((/** @type {?} */ (stampCircle.instance))).width = this.getWidth();
            ((/** @type {?} */ (stampCircle.instance))).height = this.getHeight();
            this.stampCircles.set(props.id, stampCircle);
            this._activeCanvasService.changeActive(props.id);
        }
    }
    /**
     * @return {?}
     */
    addCanvas() {
        /** @type {?} */
        const props = new StampCanvasProps();
        props.init(this.isMobile);
        props.id = this.stampCircles.size + 1;
        /** @type {?} */
        const componentRef = this.stampCircles.get(this.stampCircles.size);
        if (componentRef) {
            /** @type {?} */
            const lastProps = ((/** @type {?} */ (componentRef.instance))).props;
            props.width = lastProps.width + this.sizeMagnifier;
            props.height = lastProps.height + this.sizeMagnifier;
            props.zIndex = lastProps.zIndex - 1;
        }
        this.addCircle(props, false);
        this.showText = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clear();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addText(value) {
        this.textString = value;
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (this.textString && componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.text = value;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            this.showText = false;
        }
    }
    /**
     * @return {?}
     */
    toggleText() {
        this.showText = !this.showText;
        if (this.showText) {
            this._activeCanvasService.changeActive(null);
        }
        if (this.showText) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const element = $("#text-input");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleUnderline($event) {
        this.textProps.underline = $event;
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.underline = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleBold($event) {
        this.textProps.bold = $event;
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.bold = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleItalic($event) {
        this.textProps.italic = $event;
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.italic = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectTextColor($event) {
        this.textProps.color = $event;
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.textColor = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFont($event) {
        this.textProps.font = $event;
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.font = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFontSize($event) {
        this.textProps.fontSize = $event;
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.fontSize = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.isMobile ? this._windowService.getWidth() : 1036;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.isMobile ? this._windowService.getHeight() - 180 : 501;
    }
    /**
     * @return {?}
     */
    deleteText() {
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.text = "";
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            this.showText = false;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    leaveText($event) {
        this.showText = false;
    }
    /**
     * @return {?}
     */
    getTextWidth() {
        /** @type {?} */
        const componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            return props.radius * 2;
        }
        return 100;
    }
}
StampModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-stamp-modal',
                template: "<gd-modal [id]=\"'gd-draw-stamp-signature'\" [title]=\"'Compose stamp'\" (visible)=\"onCloseOpen($event)\">\r\n  <div class=\"stamp-body\">\r\n    <div class=\"stamp-header\">\r\n      <div class=\"header-buttons\">\r\n        <gd-button [icon]=\"'circle'\" (click)=\"addCanvas()\" [iconRegular]=\"true\">\r\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\r\n        </gd-button>\r\n        <gd-button [icon]=\"'font'\" (click)=\"toggleText()\">\r\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\r\n        </gd-button>\r\n      </div>\r\n      <div class=\"stamp-export\" (click)=\"saveSign()\">\r\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n        <span class=\"save-button\">Save</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"gd-draw-stamp\" [style.width.px]=\"getWidth()\" [style.height.px]=\"getHeight()\">\r\n      <div gdHostDynamic [ident]=\"999999\"></div>\r\n      <div class=\"gd-draw-stamp-text\" *ngIf=\"showText\" [clickOutsideEnabled]=\"showText\"\r\n           [clickOutsideEvents]=\"'mousedown'\" (clickOutside)=\"text.value ? addText(text.value) : leaveText($event)\">\r\n        <div class=\"gd-text-menu-context\">\r\n          <gd-text-menu [blur]=\"true\" [color]=\"textProps.color\" [bold]=\"textProps.bold\"\r\n                        [font]=\"textProps.font\" [fontSize]=\"textProps.fontSize\" [italic]=\"textProps.italic\"\r\n                        [underline]=\"textProps.underline\" (outBold)=\"toggleBold($event)\"\r\n                        (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\r\n                        (outColor)=\"selectTextColor($event)\" (outFont)=\"selectFont($event)\"\r\n                        (outFontSize)=\"selectFontSize($event)\" [decoration]=\"false\">\r\n            <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" [iconSize]=\"'sm'\"\r\n                       (click)=\"deleteText()\"></gd-button>\r\n          </gd-text-menu>\r\n        </div>\r\n        <input placeholder=\"Type your text\" id=\"text-input\"\r\n               #text (keyup.enter)=\"addText(text.value)\"\r\n               [style.text-decoration]=\"textProps?.underline ? 'underline' : 'unset'\"\r\n               [style.font-style]=\"textProps?.italic ? 'italic' : 'unset'\"\r\n               [style.font-weight]=\"textProps?.bold ? 'bold' : 'unset'\"\r\n               [style.color]=\"textProps?.color\"\r\n               [style.font-family]=\"textProps.font\"\r\n               [style.font-size.px]=\"textProps.fontSize\"\r\n               [value]=\"textString\" type=\"text\"\r\n               [style.width.px]=\"getTextWidth()\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</gd-modal>\r\n",
                styles: [".stamp-body{width:1036px;height:561px}.stamp-body ::ng-deep .button{font-size:unset!important;color:#3e4e5a!important}.stamp-body ::ng-deep .button ::ng-deep .text{padding-left:0!important}.stamp-body .csg-text-input{padding:5px;background-color:#e6e6e6;position:absolute;top:120px;left:0;width:calc(100% - 10px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;z-index:99999}.stamp-body .csg-text-input::after{content:\" \";width:0;height:0;border-style:solid;border-width:0 4px 5px;border-color:transparent transparent #e6e6e6;position:absolute;top:-5px;right:110px}.stamp-body .csg-text-input input{height:20px;width:100%;padding:0;margin:0 10px 0 0}.stamp-body .csg-insert-text{width:27px;height:27px;background-color:#3787f5;margin:0}.stamp-body .csg-insert-text .icon{padding:5px;color:#fff}.stamp-header{height:60px;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.header-buttons{display:-webkit-box;display:flex}.header-buttons .plus{font-size:8px;position:absolute;height:5px;width:5px;right:10px;bottom:10px}.stamp-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;color:#fff;-webkit-box-align:center;align-items:center;cursor:pointer}.stamp-export .icon{display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 27px}.stamp-export .save-button{font-size:10px;display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 40px}.gd-draw-stamp{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-draw-stamp input{height:30px;outline:#679ffa solid 2px}.gd-draw-stamp .gd-draw-stamp-text{z-index:99999}.gd-draw-stamp .gd-text-menu-context{height:37px;top:180px;padding:0;background-color:#fff;cursor:default;position:absolute;box-shadow:rgba(0,0,0,.52) 0 0 5px}.gd-draw-stamp .gd-text-menu-context ::ng-deep .color-for-text{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.gd-draw-stamp .gd-text-menu-context .stamp-trash{-webkit-box-flex:0;flex:0 0 37px;margin-right:8px}.gd-draw-stamp .gd-text-menu-context ::ng-deep .first-component ::ng-deep .dropdown-menu{left:8px}::ng-deep .select{color:#3e4e5a!important}::ng-deep gd-drop-down{z-index:999999!important}@media (max-width:1037px){.stamp-body{width:inherit;height:inherit}.gd-text-menu-context ::ng-deep .gd-text-menu{top:calc(100% - 60px)}}"]
            }] }
];
/** @nocollapse */
StampModalComponent.ctorParameters = () => [
    { type: AddDynamicComponentService },
    { type: ActiveCanvasService },
    { type: WindowService },
    { type: RemoveCanvasService },
    { type: SignatureService },
    { type: SignatureTabActivatorService },
    { type: ModalService }
];
StampModalComponent.propDecorators = {
    dynamicDirective: [{ type: ViewChild, args: [HostDynamicDirective, { static: true },] }]
};
if (false) {
    /** @type {?} */
    StampModalComponent.prototype.stampCircles;
    /** @type {?} */
    StampModalComponent.prototype.textString;
    /** @type {?} */
    StampModalComponent.prototype.showText;
    /** @type {?} */
    StampModalComponent.prototype.dynamicDirective;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype.isMobile;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype.sizeMagnifier;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype.activeId;
    /** @type {?} */
    StampModalComponent.prototype.textProps;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype._addDynamicComponentService;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype._activeCanvasService;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype._removeCanvas;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype._signatureService;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype._tabActivationService;
    /**
     * @type {?}
     * @private
     */
    StampModalComponent.prototype._modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zdGFtcC1tb2RhbC9zdGFtcC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQStDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNEJBQTRCLENBQUE7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUE7QUFDdkQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUNMLDBCQUEwQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQ3BELG9CQUFvQixFQUFFLFlBQVksRUFDbEMsYUFBYSxFQUNkLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BRTNCLENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7SUFZOUIsWUFBb0IsMkJBQXVELEVBQ3ZELG9CQUF5QyxFQUN6QyxjQUE2QixFQUM3QixhQUFrQyxFQUNsQyxpQkFBbUMsRUFDbkMscUJBQW1ELEVBQ25ELGFBQTJCO1FBTjNCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNEI7UUFDdkQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qixr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QUFDO1lBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYTtRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksWUFBWSxFQUFFOztrQkFDVixLQUFLLEdBQUcsQ0FBQyxtQkFBc0IsWUFBWSxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsS0FBSztZQUNqRSxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7WUFsUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLCt0RkFBMkM7O2FBRTVDOzs7O1lBWkMsMEJBQTBCO1lBTnBCLG1CQUFtQjtZQVF6QixhQUFhO1lBTFAsbUJBQW1CO1lBRm5CLGdCQUFnQjtZQUNoQiw0QkFBNEI7WUFLWixZQUFZOzs7K0JBaUJqQyxTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOzs7O0lBSi9DLDJDQUFvRDs7SUFDcEQseUNBQWdCOztJQUNoQix1Q0FBaUI7O0lBRWpCLCtDQUF3Rjs7Ozs7SUFFeEYsdUNBQTBCOzs7OztJQUMxQiw0Q0FBMkI7Ozs7O0lBQzNCLHVDQUF5Qjs7SUFDekIsd0NBQWlDOzs7OztJQUVyQiwwREFBK0Q7Ozs7O0lBQy9ELG1EQUFpRDs7Ozs7SUFDakQsNkNBQXFDOzs7OztJQUNyQyw0Q0FBMEM7Ozs7O0lBQzFDLGdEQUEyQzs7Ozs7SUFDM0Msb0RBQTJEOzs7OztJQUMzRCw0Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTaWduYXR1cmVUeXBlLCBTdGFtcENhbnZhc1Byb3BzfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xyXG5pbXBvcnQge0FjdGl2ZUNhbnZhc1NlcnZpY2V9IGZyb20gJy4vLi4vYWN0aXZlLWNhbnZhcy5zZXJ2aWNlJ1xyXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gJy4vLi4vc2lnbmF0dXJlLnNlcnZpY2UnXHJcbmltcG9ydCB7U2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vLi4vc2lnbmF0dXJlLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1JlbW92ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuLi9yZW1vdmUtY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdGFtcENhbnZhc0NvbXBvbmVudH0gZnJvbSBcIi4uL3N0YW1wLWNhbnZhcy9zdGFtcC1jYW52YXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsIENvbW1vbk1vZGFscywgRm9ybWF0dGluZyxcclxuICBIb3N0RHluYW1pY0RpcmVjdGl2ZSwgTW9kYWxTZXJ2aWNlLFxyXG4gIFdpbmRvd1NlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zdGFtcC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YW1wLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdGFtcC1tb2RhbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGFtcE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHN0YW1wQ2lyY2xlcyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcclxuICB0ZXh0U3RyaW5nID0gJyc7XHJcbiAgc2hvd1RleHQgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZChIb3N0RHluYW1pY0RpcmVjdGl2ZSwge3N0YXRpYzogdHJ1ZX0pIGR5bmFtaWNEaXJlY3RpdmU6IEhvc3REeW5hbWljRGlyZWN0aXZlO1xyXG5cclxuICBwcml2YXRlIGlzTW9iaWxlOiBib29sZWFuO1xyXG4gIHByaXZhdGUgc2l6ZU1hZ25pZmllciA9IDQwO1xyXG4gIHByaXZhdGUgYWN0aXZlSWQ6IG51bWJlcjtcclxuICB0ZXh0UHJvcHMgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2U6IEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FjdGl2ZUNhbnZhc1NlcnZpY2U6IEFjdGl2ZUNhbnZhc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVDYW52YXM6IFJlbW92ZUNhbnZhc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF90YWJBY3RpdmF0aW9uU2VydmljZTogU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuX3JlbW92ZUNhbnZhcy5yZW1vdmVDYW52YXMuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldChpZCk7XHJcbiAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuc3RhbXBDaXJjbGVzLmRlbGV0ZShpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcclxuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgc2F2ZVNpZ24oKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQodGhpcy5zdGFtcENpcmNsZXMuc2l6ZSk7XHJcbiAgICBjb25zdCBjYW52YXNDb21wb25lbnQgPSA8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gICAgY29uc3QgbGFzdFByb3BzID0gY2FudmFzQ29tcG9uZW50LnByb3BzO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzQ29tcG9uZW50LmN0eDtcclxuICAgIGNvbnN0IHByb3BzID0gW107XHJcbiAgICBwcm9wcy5wdXNoKGxhc3RQcm9wcyk7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFtcENpcmNsZXMuc2l6ZSAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY29uc3QgY29tcCA9IDxTdGFtcENhbnZhc0NvbXBvbmVudD50aGlzLnN0YW1wQ2lyY2xlcy5nZXQoaSkuaW5zdGFuY2U7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGNvbXAuY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGxldCBvZmZzZXQgPSBsYXN0UHJvcHMud2lkdGggLSBjb21wLnByb3BzLndpZHRoO1xyXG4gICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IC8gMjtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGNhbnZhcywgb2Zmc2V0LCBvZmZzZXQpO1xyXG4gICAgICBwcm9wcy5wdXNoKGNvbXAucHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcHJvcHMucmV2ZXJzZSgpO1xyXG4gICAgY29uc3QgaW1nID0gY2FudmFzQ29tcG9uZW50LmNhbnZhcy5uYXRpdmVFbGVtZW50LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcclxuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2Uuc2F2ZVN0YW1wKGltZywgcHJvcHMpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3RhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLlNUQU1QLmlkKTtcclxuICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5yZWZyZXNoU2lnbmF0dXJlcygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKENvbW1vbk1vZGFscy5EcmF3U3RhbXBTaWduYXR1cmUpO1xyXG4gIH1cclxuXHJcbiAgb25DbG9zZU9wZW4oJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMudGV4dFN0cmluZyA9ICcnO1xyXG4gICAgICBjb25zdCBwcm9wcyA9IG5ldyBTdGFtcENhbnZhc1Byb3BzKCkuaW5pdCh0aGlzLmlzTW9iaWxlKTtcclxuICAgICAgcHJvcHMuaWQgPSB0aGlzLnN0YW1wQ2lyY2xlcy5zaXplICsgMTtcclxuICAgICAgdGhpcy5hZGRDaXJjbGUocHJvcHMsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNvbXAgb2YgdGhpcy5zdGFtcENpcmNsZXMudmFsdWVzKCkpIHtcclxuICAgICAgY29tcC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YW1wQ2lyY2xlcyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcclxuICAgIHRoaXMuc2hvd1RleHQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQ2lyY2xlKHByb3BzOiBTdGFtcENhbnZhc1Byb3BzLCB0aGVGaXJzdDogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuZHluYW1pY0RpcmVjdGl2ZSkge1xyXG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5keW5hbWljRGlyZWN0aXZlLnZpZXdDb250YWluZXJSZWY7XHJcbiAgICAgIGNvbnN0IHN0YW1wQ2lyY2xlID0gdGhpcy5fYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UuYWRkRHluYW1pY0NvbXBvbmVudCh2aWV3Q29udGFpbmVyUmVmLCBTdGFtcENhbnZhc0NvbXBvbmVudCk7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLmlkID0gcHJvcHMuaWQ7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLnRoZUZpcnN0ID0gdGhlRmlyc3Q7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLndpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xyXG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PnN0YW1wQ2lyY2xlLmluc3RhbmNlKS5oZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xyXG4gICAgICB0aGlzLnN0YW1wQ2lyY2xlcy5zZXQocHJvcHMuaWQsIHN0YW1wQ2lyY2xlKTtcclxuICAgICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUocHJvcHMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQ2FudmFzKCkge1xyXG4gICAgY29uc3QgcHJvcHMgPSBuZXcgU3RhbXBDYW52YXNQcm9wcygpO1xyXG4gICAgcHJvcHMuaW5pdCh0aGlzLmlzTW9iaWxlKTtcclxuICAgIHByb3BzLmlkID0gdGhpcy5zdGFtcENpcmNsZXMuc2l6ZSArIDE7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQodGhpcy5zdGFtcENpcmNsZXMuc2l6ZSk7XHJcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RQcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcclxuICAgICAgcHJvcHMud2lkdGggPSBsYXN0UHJvcHMud2lkdGggKyB0aGlzLnNpemVNYWduaWZpZXI7XHJcbiAgICAgIHByb3BzLmhlaWdodCA9IGxhc3RQcm9wcy5oZWlnaHQgKyB0aGlzLnNpemVNYWduaWZpZXI7XHJcbiAgICAgIHByb3BzLnpJbmRleCA9IGxhc3RQcm9wcy56SW5kZXggLSAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRDaXJjbGUocHJvcHMsIGZhbHNlKTtcclxuICAgIHRoaXMuc2hvd1RleHQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRleHRTdHJpbmcgPSB2YWx1ZTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcclxuICAgIGlmICh0aGlzLnRleHRTdHJpbmcgJiYgY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xyXG4gICAgICBwcm9wcy50ZXh0ID0gdmFsdWU7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcclxuICAgICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVGV4dCgpIHtcclxuICAgIHRoaXMuc2hvd1RleHQgPSAhdGhpcy5zaG93VGV4dDtcclxuICAgIGlmICh0aGlzLnNob3dUZXh0KSB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hvd1RleHQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjdGV4dC1pbnB1dFwiKTtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVVuZGVybGluZSgkZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudGV4dFByb3BzLnVuZGVybGluZSA9ICRldmVudDtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcclxuICAgIGlmIChjb21wb25lbnRSZWYpIHtcclxuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XHJcbiAgICAgIHByb3BzLnVuZGVybGluZSA9ICRldmVudDtcclxuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm9sZCgkZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudGV4dFByb3BzLmJvbGQgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XHJcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xyXG4gICAgICBwcm9wcy5ib2xkID0gJGV2ZW50O1xyXG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucmVkcmF3Q2FudmFzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJdGFsaWMoJGV2ZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnRleHRQcm9wcy5pdGFsaWMgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XHJcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xyXG4gICAgICBwcm9wcy5pdGFsaWMgPSAkZXZlbnQ7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFRleHRDb2xvcigkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50ZXh0UHJvcHMuY29sb3IgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XHJcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xyXG4gICAgICBwcm9wcy50ZXh0Q29sb3IgPSAkZXZlbnQ7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEZvbnQoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGV4dFByb3BzLmZvbnQgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XHJcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xyXG4gICAgICBwcm9wcy5mb250ID0gJGV2ZW50O1xyXG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucmVkcmF3Q2FudmFzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy50ZXh0UHJvcHMuZm9udFNpemUgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XHJcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xyXG4gICAgICBwcm9wcy5mb250U2l6ZSA9ICRldmVudDtcclxuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc01vYmlsZSA/IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0V2lkdGgoKSA6IDEwMzY7XHJcbiAgfVxyXG5cclxuICBnZXRIZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc01vYmlsZSA/IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0SGVpZ2h0KCkgLSAxODAgOiA1MDE7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUZXh0KCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KDEpO1xyXG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xyXG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcclxuICAgICAgcHJvcHMudGV4dCA9IFwiXCI7XHJcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcclxuICAgICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGVhdmVUZXh0KCRldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd1RleHQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldFRleHRXaWR0aCgpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcclxuICAgIGlmIChjb21wb25lbnRSZWYpIHtcclxuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XHJcbiAgICAgIHJldHVybiBwcm9wcy5yYWRpdXMgKiAyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDEwMDtcclxuICB9XHJcbn1cclxuIl19