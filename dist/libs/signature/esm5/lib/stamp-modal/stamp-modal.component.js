/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var $ = jquery;
var StampModalComponent = /** @class */ (function () {
    function StampModalComponent(_addDynamicComponentService, _activeCanvasService, _windowService, _removeCanvas, _signatureService, _tabActivationService, _modalService) {
        var _this = this;
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
        function (id) {
            /** @type {?} */
            var componentRef = _this.stampCircles.get(id);
            componentRef.destroy();
            _this.stampCircles.delete(id);
        }));
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isMobile = _windowService.isMobile();
        }));
        this._activeCanvasService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.activeId = id;
        }));
    }
    /**
     * @return {?}
     */
    StampModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.saveSign = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentRef = this.stampCircles.get(this.stampCircles.size);
        /** @type {?} */
        var canvasComponent = (/** @type {?} */ (componentRef.instance));
        /** @type {?} */
        var lastProps = canvasComponent.props;
        /** @type {?} */
        var ctx = canvasComponent.ctx;
        /** @type {?} */
        var props = [];
        props.push(lastProps);
        for (var i = this.stampCircles.size - 1; i > 0; i--) {
            /** @type {?} */
            var comp = (/** @type {?} */ (this.stampCircles.get(i).instance));
            /** @type {?} */
            var canvas = comp.canvas.nativeElement;
            /** @type {?} */
            var offset = lastProps.width - comp.props.width;
            if (offset !== 0) {
                offset = offset / 2;
            }
            ctx.drawImage(canvas, offset, offset);
            props.push(comp.props);
        }
        props.reverse();
        /** @type {?} */
        var img = canvasComponent.canvas.nativeElement.toDataURL("image/png");
        this._signatureService.saveStamp(img, props).subscribe((/**
         * @return {?}
         */
        function () {
            _this._tabActivationService.changeActiveTab(SignatureType.STAMP.id);
        }));
        this.close();
    };
    /**
     * @private
     * @return {?}
     */
    StampModalComponent.prototype.close = /**
     * @private
     * @return {?}
     */
    function () {
        this._modalService.close(CommonModals.DrawStampSignature);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampModalComponent.prototype.onCloseOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.textString = '';
            /** @type {?} */
            var props = new StampCanvasProps().init(this.isMobile);
            props.id = this.stampCircles.size + 1;
            this.addCircle(props, true);
        }
        else {
            this.clear();
        }
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.stampCircles.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var comp = _c.value;
                comp.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.stampCircles = new Map();
        this.showText = false;
    };
    /**
     * @private
     * @param {?} props
     * @param {?} theFirst
     * @return {?}
     */
    StampModalComponent.prototype.addCircle = /**
     * @private
     * @param {?} props
     * @param {?} theFirst
     * @return {?}
     */
    function (props, theFirst) {
        if (this.dynamicDirective) {
            /** @type {?} */
            var viewContainerRef = this.dynamicDirective.viewContainerRef;
            /** @type {?} */
            var stampCircle = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, StampCanvasComponent);
            ((/** @type {?} */ (stampCircle.instance))).id = props.id;
            ((/** @type {?} */ (stampCircle.instance))).theFirst = theFirst;
            ((/** @type {?} */ (stampCircle.instance))).active = true;
            ((/** @type {?} */ (stampCircle.instance))).props = props;
            ((/** @type {?} */ (stampCircle.instance))).width = this.getWidth();
            ((/** @type {?} */ (stampCircle.instance))).height = this.getHeight();
            this.stampCircles.set(props.id, stampCircle);
            this._activeCanvasService.changeActive(props.id);
        }
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.addCanvas = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var props = new StampCanvasProps();
        props.init(this.isMobile);
        props.id = this.stampCircles.size + 1;
        /** @type {?} */
        var componentRef = this.stampCircles.get(this.stampCircles.size);
        if (componentRef) {
            /** @type {?} */
            var lastProps = ((/** @type {?} */ (componentRef.instance))).props;
            props.width = lastProps.width + this.sizeMagnifier;
            props.height = lastProps.height + this.sizeMagnifier;
            props.zIndex = lastProps.zIndex - 1;
        }
        this.addCircle(props, false);
        this.showText = false;
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clear();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StampModalComponent.prototype.addText = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.textString = value;
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (this.textString && componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            props.text = value;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            this.showText = false;
        }
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.toggleText = /**
     * @return {?}
     */
    function () {
        this.showText = !this.showText;
        if (this.showText) {
            this._activeCanvasService.changeActive(null);
        }
        if (this.showText) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = $("#text-input");
                if (element) {
                    element.focus();
                }
            }), 100);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampModalComponent.prototype.toggleUnderline = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.textProps.underline = $event;
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            props.underline = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampModalComponent.prototype.toggleBold = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.textProps.bold = $event;
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            props.bold = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampModalComponent.prototype.toggleItalic = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.textProps.italic = $event;
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            props.italic = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampModalComponent.prototype.selectTextColor = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.textProps.color = $event;
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            props.textColor = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampModalComponent.prototype.selectFont = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.textProps.font = $event;
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            props.font = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampModalComponent.prototype.selectFontSize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.textProps.fontSize = $event;
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            props.fontSize = $event;
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
        }
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.isMobile ? this._windowService.getWidth() : 1036;
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.isMobile ? this._windowService.getHeight() : 501;
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.deleteText = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            props.text = "";
            ((/** @type {?} */ (componentRef.instance))).redrawCanvas();
            this.showText = false;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampModalComponent.prototype.leaveText = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.showText = false;
    };
    /**
     * @return {?}
     */
    StampModalComponent.prototype.getTextWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentRef = this.stampCircles.get(1);
        if (componentRef) {
            /** @type {?} */
            var props = ((/** @type {?} */ (componentRef.instance))).props;
            return props.radius * 2;
        }
        return 100;
    };
    StampModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-stamp-modal',
                    template: "<gd-modal [id]=\"'gd-draw-stamp-signature'\" [title]=\"'Compose stamp'\" (visible)=\"onCloseOpen($event)\">\n  <div class=\"stamp-body\">\n    <div class=\"stamp-header\">\n      <div class=\"header-buttons\">\n        <gd-button [icon]=\"'circle'\" (click)=\"addCanvas()\" [iconRegular]=\"true\">\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\n        </gd-button>\n        <gd-button [icon]=\"'font'\" (click)=\"toggleText()\">\n          <fa-icon class=\"plus\" [icon]=\"['fas','plus']\"></fa-icon>\n        </gd-button>\n      </div>\n      <div class=\"stamp-export\" (click)=\"saveSign()\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-stamp\" [style.width.px]=\"getWidth()\" [style.height.px]=\"getHeight()\">\n      <div gdHostDynamic [ident]=\"999999\"></div>\n      <div class=\"gd-draw-stamp-text\" *ngIf=\"showText\" [clickOutsideEnabled]=\"showText\"\n           [clickOutsideEvents]=\"'mousedown'\" (clickOutside)=\"text.value ? addText(text.value) : leaveText($event)\">\n        <div class=\"gd-text-menu-context\">\n          <gd-text-menu [blur]=\"true\" [color]=\"textProps.color\" [bold]=\"textProps.bold\"\n                        [font]=\"textProps.font\" [fontSize]=\"textProps.fontSize\" [italic]=\"textProps.italic\"\n                        [underline]=\"textProps.underline\" (outBold)=\"toggleBold($event)\"\n                        (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                        (outColor)=\"selectTextColor($event)\" (outFont)=\"selectFont($event)\"\n                        (outFontSize)=\"selectFontSize($event)\" [decoration]=\"false\">\n            <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" [iconSize]=\"'sm'\"\n                       (click)=\"deleteText()\"></gd-button>\n          </gd-text-menu>\n        </div>\n        <input placeholder=\"Type your text\" id=\"text-input\"\n               #text (keyup.enter)=\"addText(text.value)\"\n               [style.text-decoration]=\"textProps?.underline ? 'underline' : 'unset'\"\n               [style.font-style]=\"textProps?.italic ? 'italic' : 'unset'\"\n               [style.font-weight]=\"textProps?.bold ? 'bold' : 'unset'\"\n               [style.color]=\"textProps?.color\"\n               [style.font-family]=\"textProps.font\"\n               [style.font-size.px]=\"textProps.fontSize\"\n               [value]=\"textString\" type=\"text\"\n               [style.width.px]=\"getTextWidth()\">\n      </div>\n    </div>\n  </div>\n</gd-modal>\n",
                    styles: [".stamp-body{width:1036px;height:561px}.stamp-body ::ng-deep .button{font-size:unset!important;color:#3e4e5a!important}.stamp-body ::ng-deep .button ::ng-deep .text{padding-left:0!important}.stamp-body .csg-text-input{padding:5px;background-color:#e6e6e6;position:absolute;top:120px;left:0;width:calc(100% - 10px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;z-index:99999}.stamp-body .csg-text-input::after{content:\" \";width:0;height:0;border-style:solid;border-width:0 4px 5px;border-color:transparent transparent #e6e6e6;position:absolute;top:-5px;right:110px}.stamp-body .csg-text-input input{height:20px;width:100%;padding:0;margin:0 10px 0 0}.stamp-body .csg-insert-text{width:27px;height:27px;background-color:#3787f5;margin:0}.stamp-body .csg-insert-text .icon{padding:5px;color:#fff}.stamp-header{height:60px;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.header-buttons{display:-webkit-box;display:flex}.header-buttons .plus{font-size:8px;position:absolute;height:5px;width:5px;right:10px;bottom:10px}.stamp-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;color:#fff;-webkit-box-align:center;align-items:center;cursor:pointer}.stamp-export .icon{display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 27px}.stamp-export .save-button{font-size:10px;display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 40px}.gd-draw-stamp{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-draw-stamp input{height:30px;outline:#679ffa solid 2px}.gd-draw-stamp .gd-draw-stamp-text{z-index:99999}.gd-draw-stamp .gd-text-menu-context{height:37px;top:180px;padding:0;background-color:#fff;cursor:default;position:absolute;box-shadow:rgba(0,0,0,.52) 0 0 5px}.gd-draw-stamp .gd-text-menu-context ::ng-deep .color-for-text{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.gd-draw-stamp .gd-text-menu-context .stamp-trash{-webkit-box-flex:0;flex:0 0 37px;margin-right:8px}.gd-draw-stamp .gd-text-menu-context ::ng-deep .first-component ::ng-deep .dropdown-menu{left:8px}::ng-deep .select{color:#3e4e5a!important}::ng-deep gd-drop-down{z-index:999999!important}@media (max-width:1037px){.stamp-body{width:inherit;height:inherit}}"]
                }] }
    ];
    /** @nocollapse */
    StampModalComponent.ctorParameters = function () { return [
        { type: AddDynamicComponentService },
        { type: ActiveCanvasService },
        { type: WindowService },
        { type: RemoveCanvasService },
        { type: SignatureService },
        { type: SignatureTabActivatorService },
        { type: ModalService }
    ]; };
    StampModalComponent.propDecorators = {
        dynamicDirective: [{ type: ViewChild, args: [HostDynamicDirective, { static: true },] }]
    };
    return StampModalComponent;
}());
export { StampModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zdGFtcC1tb2RhbC9zdGFtcC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUErQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDRCQUE0QixDQUFBO0FBQzlELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFBO0FBQ3ZELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzVFLE9BQU8sRUFDTCwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUNwRCxvQkFBb0IsRUFBRSxZQUFZLEVBQ2xDLGFBQWEsRUFDZCxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUUzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQWlCRSw2QkFBb0IsMkJBQXVELEVBQ3ZELG9CQUF5QyxFQUN6QyxjQUE2QixFQUM3QixhQUFrQyxFQUNsQyxpQkFBbUMsRUFDbkMscUJBQW1ELEVBQ25ELGFBQTJCO1FBTi9DLGlCQXNCQztRQXRCbUIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE0QjtRQUN2RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQ3pDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGtCQUFhLEdBQWIs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RDs7Ozs7SUFDakQsNkNBQXFDOzs7OztJQUNyQyw0Q0FBMEM7Ozs7O0lBQzFDLGdEQUEyQzs7Ozs7SUFDM0Msb0RBQTJEOzs7OztJQUMzRCw0Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lnbmF0dXJlVHlwZSwgU3RhbXBDYW52YXNQcm9wc30gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7QWN0aXZlQ2FudmFzU2VydmljZX0gZnJvbSAnLi8uLi9hY3RpdmUtY2FudmFzLnNlcnZpY2UnXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gJy4vLi4vc2lnbmF0dXJlLnNlcnZpY2UnXG5pbXBvcnQge1NpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuLy4uL3NpZ25hdHVyZS10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtTdGFtcENhbnZhc0NvbXBvbmVudH0gZnJvbSBcIi4uL3N0YW1wLWNhbnZhcy9zdGFtcC1jYW52YXMuY29tcG9uZW50XCI7XG5pbXBvcnQge1xuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSwgQ29tbW9uTW9kYWxzLCBGb3JtYXR0aW5nLFxuICBIb3N0RHluYW1pY0RpcmVjdGl2ZSwgTW9kYWxTZXJ2aWNlLFxuICBXaW5kb3dTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXN0YW1wLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YW1wLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhbXAtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFtcE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGFtcENpcmNsZXMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gIHRleHRTdHJpbmcgPSAnJztcbiAgc2hvd1RleHQgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKEhvc3REeW5hbWljRGlyZWN0aXZlLCB7c3RhdGljOiB0cnVlfSkgZHluYW1pY0RpcmVjdGl2ZTogSG9zdER5bmFtaWNEaXJlY3RpdmU7XG5cbiAgcHJpdmF0ZSBpc01vYmlsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBzaXplTWFnbmlmaWVyID0gNDA7XG4gIHByaXZhdGUgYWN0aXZlSWQ6IG51bWJlcjtcbiAgdGV4dFByb3BzID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2U6IEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hY3RpdmVDYW52YXNTZXJ2aWNlOiBBY3RpdmVDYW52YXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVDYW52YXM6IFJlbW92ZUNhbnZhc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRpb25TZXJ2aWNlOiBTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xuXG4gICAgdGhpcy5fcmVtb3ZlQ2FudmFzLnJlbW92ZUNhbnZhcy5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldChpZCk7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5zdGFtcENpcmNsZXMuZGVsZXRlKGlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlSWQgPSBpZDtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2F2ZVNpZ24oKSB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KHRoaXMuc3RhbXBDaXJjbGVzLnNpemUpO1xuICAgIGNvbnN0IGNhbnZhc0NvbXBvbmVudCA9IDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgY29uc3QgbGFzdFByb3BzID0gY2FudmFzQ29tcG9uZW50LnByb3BzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0NvbXBvbmVudC5jdHg7XG4gICAgY29uc3QgcHJvcHMgPSBbXTtcbiAgICBwcm9wcy5wdXNoKGxhc3RQcm9wcyk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhbXBDaXJjbGVzLnNpemUgLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICBjb25zdCBjb21wID0gPFN0YW1wQ2FudmFzQ29tcG9uZW50PnRoaXMuc3RhbXBDaXJjbGVzLmdldChpKS5pbnN0YW5jZTtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGNvbXAuY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBsZXQgb2Zmc2V0ID0gbGFzdFByb3BzLndpZHRoIC0gY29tcC5wcm9wcy53aWR0aDtcbiAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IC8gMjtcbiAgICAgIH1cbiAgICAgIGN0eC5kcmF3SW1hZ2UoY2FudmFzLCBvZmZzZXQsIG9mZnNldCk7XG4gICAgICBwcm9wcy5wdXNoKGNvbXAucHJvcHMpO1xuICAgIH1cbiAgICBwcm9wcy5yZXZlcnNlKCk7XG4gICAgY29uc3QgaW1nID0gY2FudmFzQ29tcG9uZW50LmNhbnZhcy5uYXRpdmVFbGVtZW50LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnNhdmVTdGFtcChpbWcsIHByb3BzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKFNpZ25hdHVyZVR5cGUuU1RBTVAuaWQpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2UoKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKENvbW1vbk1vZGFscy5EcmF3U3RhbXBTaWduYXR1cmUpO1xuICB9XG5cbiAgb25DbG9zZU9wZW4oJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy50ZXh0U3RyaW5nID0gJyc7XG4gICAgICBjb25zdCBwcm9wcyA9IG5ldyBTdGFtcENhbnZhc1Byb3BzKCkuaW5pdCh0aGlzLmlzTW9iaWxlKTtcbiAgICAgIHByb3BzLmlkID0gdGhpcy5zdGFtcENpcmNsZXMuc2l6ZSArIDE7XG4gICAgICB0aGlzLmFkZENpcmNsZShwcm9wcywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBmb3IgKGNvbnN0IGNvbXAgb2YgdGhpcy5zdGFtcENpcmNsZXMudmFsdWVzKCkpIHtcbiAgICAgIGNvbXAuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnN0YW1wQ2lyY2xlcyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcbiAgICB0aGlzLnNob3dUZXh0ID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGFkZENpcmNsZShwcm9wczogU3RhbXBDYW52YXNQcm9wcywgdGhlRmlyc3Q6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5keW5hbWljRGlyZWN0aXZlKSB7XG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5keW5hbWljRGlyZWN0aXZlLnZpZXdDb250YWluZXJSZWY7XG4gICAgICBjb25zdCBzdGFtcENpcmNsZSA9IHRoaXMuX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgU3RhbXBDYW52YXNDb21wb25lbnQpO1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5zdGFtcENpcmNsZS5pbnN0YW5jZSkuaWQgPSBwcm9wcy5pZDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLnRoZUZpcnN0ID0gdGhlRmlyc3Q7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PnN0YW1wQ2lyY2xlLmluc3RhbmNlKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5zdGFtcENpcmNsZS5pbnN0YW5jZSkucHJvcHMgPSBwcm9wcztcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLndpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5zdGFtcENpcmNsZS5pbnN0YW5jZSkuaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICAgIHRoaXMuc3RhbXBDaXJjbGVzLnNldChwcm9wcy5pZCwgc3RhbXBDaXJjbGUpO1xuICAgICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUocHJvcHMuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENhbnZhcygpIHtcbiAgICBjb25zdCBwcm9wcyA9IG5ldyBTdGFtcENhbnZhc1Byb3BzKCk7XG4gICAgcHJvcHMuaW5pdCh0aGlzLmlzTW9iaWxlKTtcbiAgICBwcm9wcy5pZCA9IHRoaXMuc3RhbXBDaXJjbGVzLnNpemUgKyAxO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCh0aGlzLnN0YW1wQ2lyY2xlcy5zaXplKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBsYXN0UHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XG4gICAgICBwcm9wcy53aWR0aCA9IGxhc3RQcm9wcy53aWR0aCArIHRoaXMuc2l6ZU1hZ25pZmllcjtcbiAgICAgIHByb3BzLmhlaWdodCA9IGxhc3RQcm9wcy5oZWlnaHQgKyB0aGlzLnNpemVNYWduaWZpZXI7XG4gICAgICBwcm9wcy56SW5kZXggPSBsYXN0UHJvcHMuekluZGV4IC0gMTtcbiAgICB9XG4gICAgdGhpcy5hZGRDaXJjbGUocHJvcHMsIGZhbHNlKTtcbiAgICB0aGlzLnNob3dUZXh0ID0gZmFsc2U7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cblxuICBhZGRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHRTdHJpbmcgPSB2YWx1ZTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XG4gICAgaWYgKHRoaXMudGV4dFN0cmluZyAmJiBjb21wb25lbnRSZWYpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMudGV4dCA9IHZhbHVlO1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xuICAgICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVRleHQoKSB7XG4gICAgdGhpcy5zaG93VGV4dCA9ICF0aGlzLnNob3dUZXh0O1xuICAgIGlmICh0aGlzLnNob3dUZXh0KSB7XG4gICAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmNoYW5nZUFjdGl2ZShudWxsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd1RleHQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIiN0ZXh0LWlucHV0XCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVVbmRlcmxpbmUoJGV2ZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy50ZXh0UHJvcHMudW5kZXJsaW5lID0gJGV2ZW50O1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLnVuZGVybGluZSA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVCb2xkKCRldmVudDogYm9vbGVhbikge1xuICAgIHRoaXMudGV4dFByb3BzLmJvbGQgPSAkZXZlbnQ7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KDEpO1xuICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMuYm9sZCA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoJGV2ZW50OiBib29sZWFuKSB7XG4gICAgdGhpcy50ZXh0UHJvcHMuaXRhbGljID0gJGV2ZW50O1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLml0YWxpYyA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RUZXh0Q29sb3IoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHRQcm9wcy5jb2xvciA9ICRldmVudDtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XG4gICAgICBwcm9wcy50ZXh0Q29sb3IgPSAkZXZlbnQ7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucmVkcmF3Q2FudmFzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Rm9udCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMudGV4dFByb3BzLmZvbnQgPSAkZXZlbnQ7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KDEpO1xuICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMuZm9udCA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xuICAgIHRoaXMudGV4dFByb3BzLmZvbnRTaXplID0gJGV2ZW50O1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLmZvbnRTaXplID0gJGV2ZW50O1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmlzTW9iaWxlID8gdGhpcy5fd2luZG93U2VydmljZS5nZXRXaWR0aCgpIDogMTAzNjtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc01vYmlsZSA/IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0SGVpZ2h0KCkgOiA1MDE7XG4gIH1cblxuICBkZWxldGVUZXh0KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLnRleHQgPSBcIlwiO1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xuICAgICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGxlYXZlVGV4dCgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0VGV4dFdpZHRoKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHJldHVybiBwcm9wcy5yYWRpdXMgKiAyO1xuICAgIH1cbiAgICByZXR1cm4gMTAwO1xuICB9XG59XG4iXX0=