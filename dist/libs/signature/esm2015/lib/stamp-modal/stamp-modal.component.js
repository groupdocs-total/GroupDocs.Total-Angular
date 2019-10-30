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
        if (componentRef) {
            /** @type {?} */
            const props = ((/** @type {?} */ (componentRef.instance))).props;
            props.text = value;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            this.showText = false;
            this._activeCanvasService.changeActive(props.id);
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
        return this.isMobile ? this._windowService.getHeight() : 501;
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
            this._activeCanvasService.changeActive(props.id);
        }
    }
}
StampModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-stamp-modal',
                template: "<gd-modal [id]=\"'gd-draw-stamp-signature'\" [title]=\"'Compose stamp'\" (visible)=\"onCloseOpen($event)\">\n  <div class=\"stamp-body\">\n    <div class=\"stamp-header\">\n      <div class=\"header-buttons\">\n        <gd-button [icon]=\"'circle'\" (click)=\"addCanvas()\" [iconRegular]=\"true\">\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\n        </gd-button>\n        <gd-button [icon]=\"'font'\" (click)=\"toggleText()\">\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\n        </gd-button>\n      </div>\n      <div class=\"stamp-export\" (click)=\"saveSign()\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-stamp\" [style.width.px]=\"getWidth()\" [style.height.px]=\"getHeight()\">\n      <div gdHostDynamic [ident]=\"999999\"></div>\n      <div class=\"gd-text-menu-context\">\n        <gd-text-menu *ngIf=\"showText\" [blur]=\"true\" [color]=\"textProps.color\" [bold]=\"textProps.bold\"\n                      [font]=\"textProps.font\" [fontSize]=\"textProps.fontSize\" [italic]=\"textProps.italic\"\n                      [underline]=\"textProps.underline\" (outBold)=\"toggleBold($event)\"\n                      (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                      (outColor)=\"selectTextColor($event)\" (outFont)=\"selectFont($event)\"\n                      (outFontSize)=\"selectFontSize($event)\" [decoration]=\"false\">\n          <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" [iconSize]=\"'sm'\" (click)=\"deleteText()\"></gd-button>\n        </gd-text-menu>\n      </div>\n      <input *ngIf=\"showText\" placeholder=\"Type your text\" id=\"text-input\"\n             #text (keyup.enter)=\"addText(text.value)\"\n             [style.text-decoration]=\"textProps?.underline ? 'underline' : 'unset'\"\n             [style.font-style]=\"textProps?.italic ? 'italic' : 'unset'\"\n             [style.font-weight]=\"textProps?.bold ? 'bold' : 'unset'\"\n             [style.color]=\"textProps?.color\"\n             [style.font-family]=\"textProps.font\"\n             [style.font-size.px]=\"textProps.fontSize\"\n             [value]=\"textString\" type=\"text\">\n    </div>\n  </div>\n</gd-modal>\n",
                styles: [".stamp-body{width:1036px;height:561px}.stamp-body .csg-text-input{padding:5px;background-color:#e6e6e6;position:absolute;top:120px;left:0;width:calc(100% - 10px);flex-direction:row;display:flex;z-index:99999}.stamp-body .csg-text-input::after{content:\" \";width:0;height:0;border-style:solid;border-width:0 4px 5px;border-color:transparent transparent #e6e6e6;position:absolute;top:-5px;right:110px}.stamp-body .csg-text-input input{height:20px;width:100%;padding:0;margin:0 10px 0 0}.stamp-body .csg-insert-text{width:27px;height:27px;background-color:#3787f5;margin:0}.stamp-body .csg-insert-text .icon{padding:5px;color:#fff}.stamp-header{height:60px;width:100%;display:flex;justify-content:space-between;align-items:center}.header-buttons{display:flex}.header-buttons .plus{font-size:8px;position:absolute;height:5px;width:5px;right:10px;bottom:10px}.stamp-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:flex;justify-content:space-between;color:#fff;align-items:center;cursor:pointer}.stamp-export .icon{display:flex;text-align:center;justify-content:center;flex:0 0 27px}.stamp-export .save-button{font-size:10px;display:flex;text-align:center;justify-content:center;flex:0 0 45px}.gd-draw-stamp{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;display:flex;justify-content:center;align-items:center}.gd-draw-stamp input{z-index:1000;width:100px;height:30px;outline:#679ffa solid 2px}::ng-deep .gd-text-menu-context{height:37px;top:180px;padding:0;background-color:#fff;cursor:default;position:absolute;z-index:99999}::ng-deep .select{color:#3e4e5a!important}::ng-deep gd-drop-down{z-index:999999!important}@media (max-width:1037px){.stamp-body{width:inherit;height:inherit}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zdGFtcC1tb2RhbC9zdGFtcC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQStDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNEJBQTRCLENBQUE7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUE7QUFDdkQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUNMLDBCQUEwQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQ3BELG9CQUFvQixFQUFFLFlBQVksRUFDbEMsYUFBYSxFQUNkLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BQzNCLENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7SUFZOUIsWUFBb0IsMkJBQXVELEVBQ3ZELG9CQUF5QyxFQUN6QyxjQUE2QixFQUM3QixhQUFrQyxFQUNsQyxpQkFBbUMsRUFDbkMscUJBQW1ELEVBQ25ELGFBQTJCO1FBTjNCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNEI7UUFDdkQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qixr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SSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7WUF0T0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGsxRUFBMkM7O2FBRTVDOzs7O1lBWEMsMEJBQTBCO1lBTnBCLG1CQUFtQjtZQVF6QixhQUFhO1lBTFAsbUJBQW1CO1lBRm5CLGdCQUFnQjtZQUNoQiw0QkFBNEI7WUFLWixZQUFZOzs7K0JBZ0JqQyxTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOzs7O0lBSi9DLDJDQUFvRDs7SUFDcEQseUNBQWdCOztJQUNoQix1Q0FBaUI7O0lBRWpCLCtDQUF3Rjs7Ozs7SUFFeEYsdUNBQTBCOzs7OztJQUMxQiw0Q0FBMkI7Ozs7O0lBQzNCLHVDQUF5Qjs7SUFDekIsd0NBQWlDOzs7OztJQUVyQiwwREFBK0Q7Ozs7O0lBQy9ELG1EQUFpRDs7Ozs7SUFDakQsNkNBQXFDOzs7OztJQUNyQyw0Q0FBMEM7Ozs7O0lBQzFDLGdEQUEyQzs7Ozs7SUFDM0Msb0RBQTJEOzs7OztJQUMzRCw0Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lnbmF0dXJlVHlwZSwgU3RhbXBDYW52YXNQcm9wc30gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7QWN0aXZlQ2FudmFzU2VydmljZX0gZnJvbSAnLi8uLi9hY3RpdmUtY2FudmFzLnNlcnZpY2UnXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gJy4vLi4vc2lnbmF0dXJlLnNlcnZpY2UnXG5pbXBvcnQge1NpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuLy4uL3NpZ25hdHVyZS10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtTdGFtcENhbnZhc0NvbXBvbmVudH0gZnJvbSBcIi4uL3N0YW1wLWNhbnZhcy9zdGFtcC1jYW52YXMuY29tcG9uZW50XCI7XG5pbXBvcnQge1xuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSwgQ29tbW9uTW9kYWxzLCBGb3JtYXR0aW5nLFxuICBIb3N0RHluYW1pY0RpcmVjdGl2ZSwgTW9kYWxTZXJ2aWNlLFxuICBXaW5kb3dTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zdGFtcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFtcC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0YW1wLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhbXBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhbXBDaXJjbGVzID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICB0ZXh0U3RyaW5nID0gJyc7XG4gIHNob3dUZXh0ID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChIb3N0RHluYW1pY0RpcmVjdGl2ZSwge3N0YXRpYzogdHJ1ZX0pIGR5bmFtaWNEaXJlY3RpdmU6IEhvc3REeW5hbWljRGlyZWN0aXZlO1xuXG4gIHByaXZhdGUgaXNNb2JpbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgc2l6ZU1hZ25pZmllciA9IDQwO1xuICBwcml2YXRlIGFjdGl2ZUlkOiBudW1iZXI7XG4gIHRleHRQcm9wcyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aXZlQ2FudmFzU2VydmljZTogQWN0aXZlQ2FudmFzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlQ2FudmFzOiBSZW1vdmVDYW52YXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF90YWJBY3RpdmF0aW9uU2VydmljZTogU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHtcblxuICAgIHRoaXMuX3JlbW92ZUNhbnZhcy5yZW1vdmVDYW52YXMuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoaWQpO1xuICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc3RhbXBDaXJjbGVzLmRlbGV0ZShpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNhdmVTaWduKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCh0aGlzLnN0YW1wQ2lyY2xlcy5zaXplKTtcbiAgICBjb25zdCBjYW52YXNDb21wb25lbnQgPSA8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIGNvbnN0IGxhc3RQcm9wcyA9IGNhbnZhc0NvbXBvbmVudC5wcm9wcztcbiAgICBjb25zdCBjdHggPSBjYW52YXNDb21wb25lbnQuY3R4O1xuICAgIGNvbnN0IHByb3BzID0gW107XG4gICAgcHJvcHMucHVzaChsYXN0UHJvcHMpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YW1wQ2lyY2xlcy5zaXplIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgY29uc3QgY29tcCA9IDxTdGFtcENhbnZhc0NvbXBvbmVudD50aGlzLnN0YW1wQ2lyY2xlcy5nZXQoaSkuaW5zdGFuY2U7XG4gICAgICBjb25zdCBjYW52YXMgPSBjb21wLmNhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgbGV0IG9mZnNldCA9IGxhc3RQcm9wcy53aWR0aCAtIGNvbXAucHJvcHMud2lkdGg7XG4gICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCAvIDI7XG4gICAgICB9XG4gICAgICBjdHguZHJhd0ltYWdlKGNhbnZhcywgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgcHJvcHMucHVzaChjb21wLnByb3BzKTtcbiAgICB9XG4gICAgcHJvcHMucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGltZyA9IGNhbnZhc0NvbXBvbmVudC5jYW52YXMubmF0aXZlRWxlbWVudC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5zYXZlU3RhbXAoaW1nLCBwcm9wcykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3RhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLlNUQU1QLmlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuRHJhd1N0YW1wU2lnbmF0dXJlKTtcbiAgfVxuXG4gIG9uQ2xvc2VPcGVuKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMudGV4dFN0cmluZyA9ICcnO1xuICAgICAgY29uc3QgcHJvcHMgPSBuZXcgU3RhbXBDYW52YXNQcm9wcygpLmluaXQodGhpcy5pc01vYmlsZSk7XG4gICAgICBwcm9wcy5pZCA9IHRoaXMuc3RhbXBDaXJjbGVzLnNpemUgKyAxO1xuICAgICAgdGhpcy5hZGRDaXJjbGUocHJvcHMsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgZm9yIChjb25zdCBjb21wIG9mIHRoaXMuc3RhbXBDaXJjbGVzLnZhbHVlcygpKSB7XG4gICAgICBjb21wLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5zdGFtcENpcmNsZXMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDaXJjbGUocHJvcHM6IFN0YW1wQ2FudmFzUHJvcHMsIHRoZUZpcnN0OiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZHluYW1pY0RpcmVjdGl2ZSkge1xuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgY29uc3Qgc3RhbXBDaXJjbGUgPSB0aGlzLl9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZS5hZGREeW5hbWljQ29tcG9uZW50KHZpZXdDb250YWluZXJSZWYsIFN0YW1wQ2FudmFzQ29tcG9uZW50KTtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLmlkID0gcHJvcHMuaWQ7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PnN0YW1wQ2lyY2xlLmluc3RhbmNlKS50aGVGaXJzdCA9IHRoZUZpcnN0O1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5zdGFtcENpcmNsZS5pbnN0YW5jZSkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLnByb3BzID0gcHJvcHM7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PnN0YW1wQ2lyY2xlLmluc3RhbmNlKS53aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICB0aGlzLnN0YW1wQ2lyY2xlcy5zZXQocHJvcHMuaWQsIHN0YW1wQ2lyY2xlKTtcbiAgICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuY2hhbmdlQWN0aXZlKHByb3BzLmlkKTtcbiAgICB9XG4gIH1cblxuICBhZGRDYW52YXMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSBuZXcgU3RhbXBDYW52YXNQcm9wcygpO1xuICAgIHByb3BzLmluaXQodGhpcy5pc01vYmlsZSk7XG4gICAgcHJvcHMuaWQgPSB0aGlzLnN0YW1wQ2lyY2xlcy5zaXplICsgMTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQodGhpcy5zdGFtcENpcmNsZXMuc2l6ZSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgbGFzdFByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMud2lkdGggPSBsYXN0UHJvcHMud2lkdGggKyB0aGlzLnNpemVNYWduaWZpZXI7XG4gICAgICBwcm9wcy5oZWlnaHQgPSBsYXN0UHJvcHMuaGVpZ2h0ICsgdGhpcy5zaXplTWFnbmlmaWVyO1xuICAgICAgcHJvcHMuekluZGV4ID0gbGFzdFByb3BzLnpJbmRleCAtIDE7XG4gICAgfVxuICAgIHRoaXMuYWRkQ2lyY2xlKHByb3BzLCBmYWxzZSk7XG4gICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgYWRkVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0U3RyaW5nID0gdmFsdWU7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KDEpO1xuICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMudGV4dCA9IHZhbHVlO1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xuICAgICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUocHJvcHMuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVRleHQoKSB7XG4gICAgdGhpcy5zaG93VGV4dCA9ICF0aGlzLnNob3dUZXh0O1xuICAgIGlmICh0aGlzLnNob3dUZXh0KSB7XG4gICAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmNoYW5nZUFjdGl2ZShudWxsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd1RleHQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIiN0ZXh0LWlucHV0XCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVVbmRlcmxpbmUoJGV2ZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy50ZXh0UHJvcHMudW5kZXJsaW5lID0gJGV2ZW50O1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLnVuZGVybGluZSA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVCb2xkKCRldmVudDogYm9vbGVhbikge1xuICAgIHRoaXMudGV4dFByb3BzLmJvbGQgPSAkZXZlbnQ7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KDEpO1xuICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMuYm9sZCA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoJGV2ZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy50ZXh0UHJvcHMuaXRhbGljID0gJGV2ZW50O1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLml0YWxpYyA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RUZXh0Q29sb3IoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHRQcm9wcy5jb2xvciA9ICRldmVudDtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XG4gICAgICBwcm9wcy50ZXh0Q29sb3IgPSAkZXZlbnQ7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucmVkcmF3Q2FudmFzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Rm9udCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMudGV4dFByb3BzLmZvbnQgPSAkZXZlbnQ7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KDEpO1xuICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMuZm9udCA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xuICAgIHRoaXMudGV4dFByb3BzLmZvbnRTaXplID0gJGV2ZW50O1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLmZvbnRTaXplID0gJGV2ZW50O1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmlzTW9iaWxlID8gdGhpcy5fd2luZG93U2VydmljZS5nZXRXaWR0aCgpIDogMTAzNjtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc01vYmlsZSA/IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0SGVpZ2h0KCkgOiA1MDE7XG4gIH1cblxuICBkZWxldGVUZXh0KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLnRleHQgPSBcIlwiO1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xuICAgICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUocHJvcHMuaWQpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=