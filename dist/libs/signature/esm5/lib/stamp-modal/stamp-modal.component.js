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
            _this._signatureService.refreshSignatures();
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
        return this.isMobile ? this._windowService.getHeight() - 180 : 501;
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
                    styles: [".stamp-body{width:1036px;height:561px}.stamp-body ::ng-deep .button{font-size:unset!important;color:#3e4e5a!important}.stamp-body ::ng-deep .button ::ng-deep .text{padding-left:0!important}.stamp-body .csg-text-input{padding:5px;background-color:#e6e6e6;position:absolute;top:120px;left:0;width:calc(100% - 10px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;z-index:99999}.stamp-body .csg-text-input::after{content:\" \";width:0;height:0;border-style:solid;border-width:0 4px 5px;border-color:transparent transparent #e6e6e6;position:absolute;top:-5px;right:110px}.stamp-body .csg-text-input input{height:20px;width:100%;padding:0;margin:0 10px 0 0}.stamp-body .csg-insert-text{width:27px;height:27px;background-color:#3787f5;margin:0}.stamp-body .csg-insert-text .icon{padding:5px;color:#fff}.stamp-header{height:60px;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.header-buttons{display:-webkit-box;display:flex}.header-buttons .plus{font-size:8px;position:absolute;height:5px;width:5px;right:10px;bottom:10px}.stamp-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;color:#fff;-webkit-box-align:center;align-items:center;cursor:pointer}.stamp-export .icon{display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 27px}.stamp-export .save-button{font-size:10px;display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 40px}.gd-draw-stamp{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.gd-draw-stamp input{height:30px;outline:#679ffa solid 2px}.gd-draw-stamp .gd-draw-stamp-text{z-index:99999}.gd-draw-stamp .gd-text-menu-context{height:37px;top:180px;padding:0;background-color:#fff;cursor:default;position:absolute;box-shadow:rgba(0,0,0,.52) 0 0 5px}.gd-draw-stamp .gd-text-menu-context ::ng-deep .color-for-text{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.gd-draw-stamp .gd-text-menu-context .stamp-trash{-webkit-box-flex:0;flex:0 0 37px;margin-right:8px}.gd-draw-stamp .gd-text-menu-context ::ng-deep .first-component ::ng-deep .dropdown-menu{left:8px}::ng-deep .select{color:#3e4e5a!important}::ng-deep gd-drop-down{z-index:999999!important}@media (max-width:1037px){.stamp-body{width:inherit;height:inherit}.gd-text-menu-context ::ng-deep .gd-text-menu{top:calc(100% - 60px)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3NpZ25hdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9zdGFtcC1tb2RhbC9zdGFtcC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUErQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDRCQUE0QixDQUFBO0FBQzlELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFBO0FBQ3ZELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzVFLE9BQU8sRUFDTCwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUNwRCxvQkFBb0IsRUFBRSxZQUFZLEVBQ2xDLGFBQWEsRUFDZCxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUUzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQWlCRSw2QkFBb0IsMkJBQXVELEVBQ3ZELG9CQUF5QyxFQUN6QyxjQUE2QixFQUM3QixhQUFrQyxFQUNsQyxpQkFBbUMsRUFDbkMscUJBQW1ELEVBQ25ELGFBQTJCO1FBTi9DLGlCQXNCQztRQXRCbUIsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE0QjtRQUN2RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQ3pDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGtCQUFhLEdBQWIs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Qix1Q0FBeUI7O0lBQ3pCLHdDQUFpQzs7Ozs7SUFFckIsMERBQStEOzs7OztJQUMvRCxtREFBaUQ7Ozs7O0lBQ2pELDZDQUFxQzs7Ozs7SUFDckMsNENBQTBDOzs7OztJQUMxQyxnREFBMkM7Ozs7O0lBQzNDLG9EQUEyRDs7Ozs7SUFDM0QsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NpZ25hdHVyZVR5cGUsIFN0YW1wQ2FudmFzUHJvcHN9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge0FjdGl2ZUNhbnZhc1NlcnZpY2V9IGZyb20gJy4vLi4vYWN0aXZlLWNhbnZhcy5zZXJ2aWNlJ1xuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tICcuLy4uL3NpZ25hdHVyZS5zZXJ2aWNlJ1xuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi8uLi9zaWduYXR1cmUtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuLi9yZW1vdmUtY2FudmFzLnNlcnZpY2VcIjtcbmltcG9ydCB7U3RhbXBDYW52YXNDb21wb25lbnR9IGZyb20gXCIuLi9zdGFtcC1jYW52YXMvc3RhbXAtY2FudmFzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsIENvbW1vbk1vZGFscywgRm9ybWF0dGluZyxcbiAgSG9zdER5bmFtaWNEaXJlY3RpdmUsIE1vZGFsU2VydmljZSxcbiAgV2luZG93U2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zdGFtcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFtcC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0YW1wLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhbXBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhbXBDaXJjbGVzID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICB0ZXh0U3RyaW5nID0gJyc7XG4gIHNob3dUZXh0ID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChIb3N0RHluYW1pY0RpcmVjdGl2ZSwge3N0YXRpYzogdHJ1ZX0pIGR5bmFtaWNEaXJlY3RpdmU6IEhvc3REeW5hbWljRGlyZWN0aXZlO1xuXG4gIHByaXZhdGUgaXNNb2JpbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgc2l6ZU1hZ25pZmllciA9IDQwO1xuICBwcml2YXRlIGFjdGl2ZUlkOiBudW1iZXI7XG4gIHRleHRQcm9wcyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aXZlQ2FudmFzU2VydmljZTogQWN0aXZlQ2FudmFzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlQ2FudmFzOiBSZW1vdmVDYW52YXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF90YWJBY3RpdmF0aW9uU2VydmljZTogU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHtcblxuICAgIHRoaXMuX3JlbW92ZUNhbnZhcy5yZW1vdmVDYW52YXMuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoaWQpO1xuICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc3RhbXBDaXJjbGVzLmRlbGV0ZShpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNhdmVTaWduKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCh0aGlzLnN0YW1wQ2lyY2xlcy5zaXplKTtcbiAgICBjb25zdCBjYW52YXNDb21wb25lbnQgPSA8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIGNvbnN0IGxhc3RQcm9wcyA9IGNhbnZhc0NvbXBvbmVudC5wcm9wcztcbiAgICBjb25zdCBjdHggPSBjYW52YXNDb21wb25lbnQuY3R4O1xuICAgIGNvbnN0IHByb3BzID0gW107XG4gICAgcHJvcHMucHVzaChsYXN0UHJvcHMpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YW1wQ2lyY2xlcy5zaXplIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgY29uc3QgY29tcCA9IDxTdGFtcENhbnZhc0NvbXBvbmVudD50aGlzLnN0YW1wQ2lyY2xlcy5nZXQoaSkuaW5zdGFuY2U7XG4gICAgICBjb25zdCBjYW52YXMgPSBjb21wLmNhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgbGV0IG9mZnNldCA9IGxhc3RQcm9wcy53aWR0aCAtIGNvbXAucHJvcHMud2lkdGg7XG4gICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCAvIDI7XG4gICAgICB9XG4gICAgICBjdHguZHJhd0ltYWdlKGNhbnZhcywgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgcHJvcHMucHVzaChjb21wLnByb3BzKTtcbiAgICB9XG4gICAgcHJvcHMucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGltZyA9IGNhbnZhc0NvbXBvbmVudC5jYW52YXMubmF0aXZlRWxlbWVudC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5zYXZlU3RhbXAoaW1nLCBwcm9wcykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3RhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLlNUQU1QLmlkKTtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UucmVmcmVzaFNpZ25hdHVyZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuRHJhd1N0YW1wU2lnbmF0dXJlKTtcbiAgfVxuXG4gIG9uQ2xvc2VPcGVuKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMudGV4dFN0cmluZyA9ICcnO1xuICAgICAgY29uc3QgcHJvcHMgPSBuZXcgU3RhbXBDYW52YXNQcm9wcygpLmluaXQodGhpcy5pc01vYmlsZSk7XG4gICAgICBwcm9wcy5pZCA9IHRoaXMuc3RhbXBDaXJjbGVzLnNpemUgKyAxO1xuICAgICAgdGhpcy5hZGRDaXJjbGUocHJvcHMsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgZm9yIChjb25zdCBjb21wIG9mIHRoaXMuc3RhbXBDaXJjbGVzLnZhbHVlcygpKSB7XG4gICAgICBjb21wLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5zdGFtcENpcmNsZXMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDaXJjbGUocHJvcHM6IFN0YW1wQ2FudmFzUHJvcHMsIHRoZUZpcnN0OiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZHluYW1pY0RpcmVjdGl2ZSkge1xuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgY29uc3Qgc3RhbXBDaXJjbGUgPSB0aGlzLl9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZS5hZGREeW5hbWljQ29tcG9uZW50KHZpZXdDb250YWluZXJSZWYsIFN0YW1wQ2FudmFzQ29tcG9uZW50KTtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLmlkID0gcHJvcHMuaWQ7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PnN0YW1wQ2lyY2xlLmluc3RhbmNlKS50aGVGaXJzdCA9IHRoZUZpcnN0O1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5zdGFtcENpcmNsZS5pbnN0YW5jZSkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLnByb3BzID0gcHJvcHM7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PnN0YW1wQ2lyY2xlLmluc3RhbmNlKS53aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+c3RhbXBDaXJjbGUuaW5zdGFuY2UpLmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICB0aGlzLnN0YW1wQ2lyY2xlcy5zZXQocHJvcHMuaWQsIHN0YW1wQ2lyY2xlKTtcbiAgICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuY2hhbmdlQWN0aXZlKHByb3BzLmlkKTtcbiAgICB9XG4gIH1cblxuICBhZGRDYW52YXMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSBuZXcgU3RhbXBDYW52YXNQcm9wcygpO1xuICAgIHByb3BzLmluaXQodGhpcy5pc01vYmlsZSk7XG4gICAgcHJvcHMuaWQgPSB0aGlzLnN0YW1wQ2lyY2xlcy5zaXplICsgMTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQodGhpcy5zdGFtcENpcmNsZXMuc2l6ZSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgbGFzdFByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMud2lkdGggPSBsYXN0UHJvcHMud2lkdGggKyB0aGlzLnNpemVNYWduaWZpZXI7XG4gICAgICBwcm9wcy5oZWlnaHQgPSBsYXN0UHJvcHMuaGVpZ2h0ICsgdGhpcy5zaXplTWFnbmlmaWVyO1xuICAgICAgcHJvcHMuekluZGV4ID0gbGFzdFByb3BzLnpJbmRleCAtIDE7XG4gICAgfVxuICAgIHRoaXMuYWRkQ2lyY2xlKHByb3BzLCBmYWxzZSk7XG4gICAgdGhpcy5zaG93VGV4dCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgYWRkVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0U3RyaW5nID0gdmFsdWU7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KDEpO1xuICAgIGlmICh0aGlzLnRleHRTdHJpbmcgJiYgY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLnRleHQgPSB2YWx1ZTtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICAgIHRoaXMuc2hvd1RleHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVUZXh0KCkge1xuICAgIHRoaXMuc2hvd1RleHQgPSAhdGhpcy5zaG93VGV4dDtcbiAgICBpZiAodGhpcy5zaG93VGV4dCkge1xuICAgICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUobnVsbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dUZXh0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQoXCIjdGV4dC1pbnB1dFwiKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVW5kZXJsaW5lKCRldmVudDogYm9vbGVhbikge1xuICAgIHRoaXMudGV4dFByb3BzLnVuZGVybGluZSA9ICRldmVudDtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XG4gICAgICBwcm9wcy51bmRlcmxpbmUgPSAkZXZlbnQ7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucmVkcmF3Q2FudmFzKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQm9sZCgkZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRleHRQcm9wcy5ib2xkID0gJGV2ZW50O1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLmJvbGQgPSAkZXZlbnQ7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucmVkcmF3Q2FudmFzKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlSXRhbGljKCRldmVudDogYm9vbGVhbikge1xuICAgIHRoaXMudGV4dFByb3BzLml0YWxpYyA9ICRldmVudDtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XG4gICAgICBwcm9wcy5pdGFsaWMgPSAkZXZlbnQ7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucmVkcmF3Q2FudmFzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0VGV4dENvbG9yKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0UHJvcHMuY29sb3IgPSAkZXZlbnQ7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zdGFtcENpcmNsZXMuZ2V0KDEpO1xuICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnByb3BzO1xuICAgICAgcHJvcHMudGV4dENvbG9yID0gJGV2ZW50O1xuICAgICAgKDxTdGFtcENhbnZhc0NvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlZHJhd0NhbnZhcygpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEZvbnQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHRQcm9wcy5mb250ID0gJGV2ZW50O1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc3RhbXBDaXJjbGVzLmdldCgxKTtcbiAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBwcm9wcyA9ICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5wcm9wcztcbiAgICAgIHByb3BzLmZvbnQgPSAkZXZlbnQ7XG4gICAgICAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucmVkcmF3Q2FudmFzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Rm9udFNpemUoJGV2ZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnRleHRQcm9wcy5mb250U2l6ZSA9ICRldmVudDtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XG4gICAgICBwcm9wcy5mb250U2l6ZSA9ICRldmVudDtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc01vYmlsZSA/IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0V2lkdGgoKSA6IDEwMzY7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNNb2JpbGUgPyB0aGlzLl93aW5kb3dTZXJ2aWNlLmdldEhlaWdodCgpIC0gMTgwIDogNTAxO1xuICB9XG5cbiAgZGVsZXRlVGV4dCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XG4gICAgICBwcm9wcy50ZXh0ID0gXCJcIjtcbiAgICAgICg8U3RhbXBDYW52YXNDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5yZWRyYXdDYW52YXMoKTtcbiAgICAgIHRoaXMuc2hvd1RleHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBsZWF2ZVRleHQoJGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuc2hvd1RleHQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFRleHRXaWR0aCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnN0YW1wQ2lyY2xlcy5nZXQoMSk7XG4gICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgcHJvcHMgPSAoPFN0YW1wQ2FudmFzQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkucHJvcHM7XG4gICAgICByZXR1cm4gcHJvcHMucmFkaXVzICogMjtcbiAgICB9XG4gICAgcmV0dXJuIDEwMDtcbiAgfVxufVxuIl19