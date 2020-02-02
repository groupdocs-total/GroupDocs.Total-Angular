/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Border, StampCanvasProps } from "../signature-models";
import { ActiveCanvasService } from "../active-canvas.service";
import { RemoveCanvasService } from "../remove-canvas.service";
import { OnCloseService, WindowService } from "@groupdocs.examples.angular/common-components";
var StampCanvasComponent = /** @class */ (function () {
    function StampCanvasComponent(_activeCanvasService, _removeCanvas, _onCloseService, _windowService) {
        var _this = this;
        this._activeCanvasService = _activeCanvasService;
        this._removeCanvas = _removeCanvas;
        this._onCloseService = _onCloseService;
        this._windowService = _windowService;
        this.colorPickerBG = false;
        this.colorPickerC = false;
        this.borderWidth = Border.widthOptions();
        this._onCloseService.onClose.subscribe((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            _this.colorPickerC = false;
            _this.colorPickerBG = false;
        }));
        this._activeCanvasService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.active = _this.id === id;
        }));
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isMobile = _windowService.isMobile();
        }));
    }
    Object.defineProperty(StampCanvasComponent.prototype, "ctx", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ctx;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StampCanvasComponent.prototype.activation = /**
     * @return {?}
     */
    function () {
        this._activeCanvasService.changeActive(this.id);
    };
    /**
     * @return {?}
     */
    StampCanvasComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    StampCanvasComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._ctx = this.canvas.nativeElement.getContext('2d');
        this.redrawCanvas();
    };
    /**
     * @return {?}
     */
    StampCanvasComponent.prototype.redrawCanvas = /**
     * @return {?}
     */
    function () {
        this.refreshRadius();
        this.drawCircle();
        if (this.props.text) {
            if (this.theFirst) {
                this._ctx.fillStyle = this.props.textColor;
                this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;
                this._ctx.textAlign = 'center';
                this._ctx.fillText(this.props.text, this.props.width / 2, this.props.height / 2 + this.props.fontSize / 2);
                if (this.props.underline) {
                    this.makeTextUnderline();
                }
            }
            else {
                this.drawTextCircle();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    StampCanvasComponent.prototype.fontDecoration = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var bold = (this.props.bold) ? "bold" : "";
        /** @type {?} */
        var italic = (this.props.italic) ? "italic" : "";
        return bold + " " + italic;
    };
    /**
     * @private
     * @return {?}
     */
    StampCanvasComponent.prototype.makeTextUnderline = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = this.props.width / 2;
        /** @type {?} */
        var y = this.props.height / 2;
        /** @type {?} */
        var textWidth = this._ctx.measureText(this.props.text).width;
        /** @type {?} */
        var startY = y + this.props.fontSize;
        /** @type {?} */
        var endY = startY;
        /** @type {?} */
        var underlineHeight = this.props.fontSize / 15;
        if (underlineHeight < 1) {
            underlineHeight = 1;
        }
        this._ctx.beginPath();
        /** @type {?} */
        var startX = x - (textWidth / 2);
        /** @type {?} */
        var endX = x + (textWidth / 2);
        this._ctx.strokeStyle = this.props.textColor;
        this._ctx.lineWidth = underlineHeight;
        this._ctx.moveTo(startX, startY);
        this._ctx.lineTo(endX, endY);
        this._ctx.strokeStyle = 'blue';
        this._ctx.stroke();
    };
    /**
     * @private
     * @return {?}
     */
    StampCanvasComponent.prototype.drawCircle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var backgroundColor = (this.props.backgroundColor === "") ? "rgb(255, 255, 255)" : this.props.backgroundColor;
        /** @type {?} */
        var x = this.props.width / 2;
        /** @type {?} */
        var y = this.props.height / 2;
        this._ctx.beginPath();
        this._ctx.arc(x, y, this.props.radius, 0, 2 * Math.PI);
        this._ctx.lineWidth = this.props.strokeWidth;
        this._ctx.strokeStyle = this.props.strokeColor;
        this._ctx.stroke();
        this._ctx.fillStyle = backgroundColor;
        this._ctx.fill();
        this._ctx.closePath();
    };
    ;
    /**
     * @private
     * @return {?}
     */
    StampCanvasComponent.prototype.drawTextCircle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = this.props.width / 2;
        /** @type {?} */
        var y = this.props.height / 2;
        this._ctx.save();
        this._ctx.translate(x, y);
        this._ctx.rotate(Math.PI / 2);
        this._ctx.fillStyle = this.props.textColor;
        this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;
        /** @type {?} */
        var num = this.props.textExpansion + (this.props.fontSize / 100);
        /** @type {?} */
        var rad = this.props.radius - (this.props.fontSize / 2);
        for (var i = 0; i < this.props.textRepeat; i++) {
            for (var j = 0; j < this.props.text.length; j++) {
                this._ctx.save();
                this._ctx.rotate(j * num + num * this.props.text.length * i);
                this._ctx.fillText(this.props.text[j], 0, -(rad));
                this._ctx.restore();
            }
        }
        this._ctx.restore();
    };
    ;
    /**
     * @private
     * @return {?}
     */
    StampCanvasComponent.prototype.refreshRadius = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.props.strokeWidth > 1) {
            this.props.radius = (this.props.width / 2) - (this.props.strokeWidth / 2);
        }
        else {
            this.props.radius = (this.props.width / 2);
        }
    };
    /**
     * @param {?} $event
     * @param {?} bg
     * @return {?}
     */
    StampCanvasComponent.prototype.toggleColorPicker = /**
     * @param {?} $event
     * @param {?} bg
     * @return {?}
     */
    function ($event, bg) {
        $event.preventDefault();
        $event.stopPropagation();
        if (bg) {
            this.colorPickerBG = !this.colorPickerBG;
        }
        else {
            this.colorPickerC = !this.colorPickerC;
        }
    };
    /**
     * @param {?} bg
     * @param {?} $event
     * @return {?}
     */
    StampCanvasComponent.prototype.selectColor = /**
     * @param {?} bg
     * @param {?} $event
     * @return {?}
     */
    function (bg, $event) {
        if (bg) {
            this.props.backgroundColor = $event;
            this.colorPickerBG = false;
        }
        else {
            this.props.strokeColor = $event;
            this.colorPickerC = false;
        }
        this.redrawCanvas();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampCanvasComponent.prototype.selectBorderWidth = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.props.strokeWidth = $event.value;
        this.redrawCanvas();
    };
    /**
     * @return {?}
     */
    StampCanvasComponent.prototype.deleteCanvas = /**
     * @return {?}
     */
    function () {
        this._removeCanvas.remove(this.id);
        this.redrawCanvas();
    };
    /**
     * @return {?}
     */
    StampCanvasComponent.prototype.getLeft = /**
     * @return {?}
     */
    function () {
        return (this.width - this.props.width) / 2;
    };
    /**
     * @return {?}
     */
    StampCanvasComponent.prototype.getTop = /**
     * @return {?}
     */
    function () {
        return (this.height - (this.isMobile ? 62 : 0) - this.props.height) / 2 - this.calcDiff();
    };
    /**
     * @private
     * @return {?}
     */
    StampCanvasComponent.prototype.calcDiff = /**
     * @private
     * @return {?}
     */
    function () {
        return (this.active && !this.isMobile) ? 37 : 0;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampCanvasComponent.prototype.resize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.props.width += $event;
        this.props.height += $event;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampCanvasComponent.prototype.closeColorPickerBG = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.colorPickerBG = !$event;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampCanvasComponent.prototype.closeColorPickerC = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.colorPickerC = !$event;
    };
    /**
     * @return {?}
     */
    StampCanvasComponent.prototype.getTranslation = /**
     * @return {?}
     */
    function () {
        this.refreshRadius();
        /** @type {?} */
        var menuWidth = 148 * 0.5;
        return this.props.radius < menuWidth ? (menuWidth - this.props.radius) : (this.props.radius - menuWidth);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StampCanvasComponent.prototype.inactive = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._activeCanvasService.changeActive(null);
    };
    StampCanvasComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-stamp-canvas',
                    template: "<div [clickOutsideEnabled]=\"active\" [clickOutsideEvents]=\"'mousedown'\"\n     (clickOutside)=\"inactive($event)\">\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\n    <div class=\"gd-context-menu\" *ngIf=\"active\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + getTranslation() + 'px)'}\">\n      <gd-button name=\"button\" class=\"first-element\" [icon]=\"'fill-drip'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker($event, true)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\" [tooltip]=\"'Color'\"\n                 (click)=\"toggleColorPicker($event, false)\" class=\"color-for-shape\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\n      <gd-button name=\"button\" class=\"stamp-trash\" [icon]=\"'trash'\" [tooltip]=\"'Delete'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\n      </gd-button>\n    </div>\n    <div class=\"csg-bounding-box\" [ngClass]=\"active ? 'active' : ''\" [style.width.px]=\"props.width\"\n         [style.height.px]=\"props.height\">\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\n                   (release)=\"redrawCanvas()\" *ngIf=\"active\"></gd-resizing>\n    </div>\n  </div>\n</div>\n",
                    styles: [".gd-context-menu{display:-webkit-box;display:flex;height:37px;top:-40px;padding:0;background-color:#fff;cursor:default;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;box-shadow:rgba(0,0,0,.52) 0 0 5px}.gd-context-menu .icon{font-size:14px;cursor:pointer;color:#3e4e5a!important}.gd-context-menu ::ng-deep .dropdown-menu{top:-120px!important;height:120px;overflow-y:auto}.gd-context-menu ::ng-deep .icon-button{margin:0!important}.gd-stamp-box{position:absolute}.palette{position:absolute;top:-190px}.csg-preview{width:100%;height:100%}.csg-bounding-box{position:absolute;background-color:unset!important}.csg-bounding-box.active{border:1px solid #679ffa}.csg-border-width{width:37px!important;height:37px!important;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .select{min-width:unset!important}::ng-deep .selected-value{font-size:12px!important}@media (max-width:1037px){.gd-context-menu{position:fixed;bottom:0;left:0;top:unset;right:0;width:100%;height:60px;-webkit-box-align:center;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070}.gd-context-menu .color-for-shape{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.gd-context-menu .stamp-trash{-webkit-box-flex:0;flex:0 0 37px;margin-right:8px}.gd-context-menu ::ng-deep .button{margin:3px!important}.gd-context-menu ::ng-deep .select{margin:3px!important}.gd-context-menu .first-element{margin-left:8px}.csg-border-width .select{width:21px}}"]
                }] }
    ];
    /** @nocollapse */
    StampCanvasComponent.ctorParameters = function () { return [
        { type: ActiveCanvasService },
        { type: RemoveCanvasService },
        { type: OnCloseService },
        { type: WindowService }
    ]; };
    StampCanvasComponent.propDecorators = {
        id: [{ type: Input }],
        theFirst: [{ type: Input }],
        active: [{ type: Input }],
        props: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        canvas: [{ type: ViewChild, args: ['canvas', { static: true },] }]
    };
    return StampCanvasComponent;
}());
export { StampCanvasComponent };
if (false) {
    /** @type {?} */
    StampCanvasComponent.prototype.id;
    /** @type {?} */
    StampCanvasComponent.prototype.theFirst;
    /** @type {?} */
    StampCanvasComponent.prototype.active;
    /** @type {?} */
    StampCanvasComponent.prototype.props;
    /** @type {?} */
    StampCanvasComponent.prototype.width;
    /** @type {?} */
    StampCanvasComponent.prototype.height;
    /** @type {?} */
    StampCanvasComponent.prototype._ctx;
    /** @type {?} */
    StampCanvasComponent.prototype.canvas;
    /** @type {?} */
    StampCanvasComponent.prototype.colorPickerBG;
    /** @type {?} */
    StampCanvasComponent.prototype.colorPickerC;
    /** @type {?} */
    StampCanvasComponent.prototype.borderWidth;
    /** @type {?} */
    StampCanvasComponent.prototype.isMobile;
    /**
     * @type {?}
     * @private
     */
    StampCanvasComponent.prototype._activeCanvasService;
    /**
     * @type {?}
     * @private
     */
    StampCanvasComponent.prototype._removeCanvas;
    /**
     * @type {?}
     * @private
     */
    StampCanvasComponent.prototype._onCloseService;
    /**
     * @type {?}
     * @private
     */
    StampCanvasComponent.prototype._windowService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRTVGO0lBb0JFLDhCQUFvQixvQkFBeUMsRUFDekMsYUFBa0MsRUFDbEMsZUFBK0IsRUFDL0IsY0FBNkI7UUFIakQsaUJBa0JDO1FBbEJtQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFSakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFRbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztR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Q0FBK0I7O0lBQy9CLHNDQUF3RDs7SUFDeEQsNkNBQXNCOztJQUN0Qiw0Q0FBcUI7O0lBQ3JCLDJDQUFvQzs7SUFDcEMsd0NBQWtCOzs7OztJQUVOLG9EQUFpRDs7Ozs7SUFDakQsNkNBQTBDOzs7OztJQUMxQywrQ0FBdUM7Ozs7O0lBQ3ZDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCb3JkZXIsIFN0YW1wQ2FudmFzUHJvcHN9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge0FjdGl2ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuLi9hY3RpdmUtY2FudmFzLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtPbkNsb3NlU2VydmljZSwgV2luZG93U2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zdGFtcC1jYW52YXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhbXAtY2FudmFzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhbXAtY2FudmFzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhbXBDYW52YXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBpZDogbnVtYmVyO1xuICBASW5wdXQoKSB0aGVGaXJzdDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBwcm9wczogU3RhbXBDYW52YXNQcm9wcztcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XG5cbiAgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7c3RhdGljOiB0cnVlfSkgY2FudmFzOiBFbGVtZW50UmVmO1xuICBjb2xvclBpY2tlckJHID0gZmFsc2U7XG4gIGNvbG9yUGlja2VyQyA9IGZhbHNlO1xuICBib3JkZXJXaWR0aCA9IEJvcmRlci53aWR0aE9wdGlvbnMoKTtcbiAgaXNNb2JpbGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZlQ2FudmFzU2VydmljZTogQWN0aXZlQ2FudmFzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlQ2FudmFzOiBSZW1vdmVDYW52YXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcblxuICAgIHRoaXMuX29uQ2xvc2VTZXJ2aWNlLm9uQ2xvc2Uuc3Vic2NyaWJlKChjKSA9PiB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5pZCA9PT0gaWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGN0eCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgIHJldHVybiB0aGlzLl9jdHg7XG4gIH1cblxuICBhY3RpdmF0aW9uKCkge1xuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuaWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY3R4ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMucmVkcmF3Q2FudmFzKCk7XG4gIH1cblxuICByZWRyYXdDYW52YXMoKSB7XG4gICAgdGhpcy5yZWZyZXNoUmFkaXVzKCk7XG4gICAgdGhpcy5kcmF3Q2lyY2xlKCk7XG4gICAgaWYgKHRoaXMucHJvcHMudGV4dCkge1xuICAgICAgaWYgKHRoaXMudGhlRmlyc3QpIHtcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvcHMudGV4dENvbG9yO1xuICAgICAgICB0aGlzLl9jdHguZm9udCA9IHRoaXMuZm9udERlY29yYXRpb24oKSArIFwiIFwiICsgdGhpcy5wcm9wcy5mb250U2l6ZSArICdweCAnICsgdGhpcy5wcm9wcy5mb250O1xuICAgICAgICB0aGlzLl9jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMuX2N0eC5maWxsVGV4dCh0aGlzLnByb3BzLnRleHQsIHRoaXMucHJvcHMud2lkdGggLyAyLCB0aGlzLnByb3BzLmhlaWdodCAvIDIgKyB0aGlzLnByb3BzLmZvbnRTaXplIC8gMik7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVuZGVybGluZSkge1xuICAgICAgICAgIHRoaXMubWFrZVRleHRVbmRlcmxpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3VGV4dENpcmNsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9udERlY29yYXRpb24oKTogc3RyaW5nIHtcbiAgICBjb25zdCBib2xkID0gKHRoaXMucHJvcHMuYm9sZCkgPyBcImJvbGRcIiA6IFwiXCI7XG4gICAgY29uc3QgaXRhbGljID0gKHRoaXMucHJvcHMuaXRhbGljKSA/IFwiaXRhbGljXCIgOiBcIlwiO1xuICAgIHJldHVybiBib2xkICsgXCIgXCIgKyBpdGFsaWM7XG4gIH1cblxuICBwcml2YXRlIG1ha2VUZXh0VW5kZXJsaW5lKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xuICAgIGNvbnN0IHRleHRXaWR0aCA9IHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0aGlzLnByb3BzLnRleHQpLndpZHRoO1xuICAgIGNvbnN0IHN0YXJ0WSA9IHkgKyB0aGlzLnByb3BzLmZvbnRTaXplO1xuICAgIGNvbnN0IGVuZFkgPSBzdGFydFk7XG4gICAgbGV0IHVuZGVybGluZUhlaWdodCA9IHRoaXMucHJvcHMuZm9udFNpemUgLyAxNTtcbiAgICBpZiAodW5kZXJsaW5lSGVpZ2h0IDwgMSkge1xuICAgICAgdW5kZXJsaW5lSGVpZ2h0ID0gMTtcbiAgICB9XG4gICAgdGhpcy5fY3R4LmJlZ2luUGF0aCgpO1xuICAgIGNvbnN0IHN0YXJ0WCA9IHggLSAodGV4dFdpZHRoIC8gMik7XG4gICAgY29uc3QgZW5kWCA9IHggKyAodGV4dFdpZHRoIC8gMik7XG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XG4gICAgdGhpcy5fY3R4LmxpbmVXaWR0aCA9IHVuZGVybGluZUhlaWdodDtcbiAgICB0aGlzLl9jdHgubW92ZVRvKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICB0aGlzLl9jdHgubGluZVRvKGVuZFgsIGVuZFkpO1xuICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdDaXJjbGUoKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gKHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yID09PSBcIlwiKSA/IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIgOiB0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvcjtcbiAgICBjb25zdCB4ID0gdGhpcy5wcm9wcy53aWR0aCAvIDI7XG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fY3R4LmFyYyh4LCB5LCB0aGlzLnByb3BzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIHRoaXMuX2N0eC5saW5lV2lkdGggPSB0aGlzLnByb3BzLnN0cm9rZVdpZHRoO1xuICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9IHRoaXMucHJvcHMuc3Ryb2tlQ29sb3I7XG4gICAgdGhpcy5fY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5fY3R4LmZpbGwoKTtcbiAgICB0aGlzLl9jdHguY2xvc2VQYXRoKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBkcmF3VGV4dENpcmNsZSgpIHtcbiAgICBjb25zdCB4ID0gdGhpcy5wcm9wcy53aWR0aCAvIDI7XG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLl9jdHguc2F2ZSgpO1xuICAgIHRoaXMuX2N0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgdGhpcy5fY3R4LnJvdGF0ZShNYXRoLlBJIC8gMik7XG4gICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvcHMudGV4dENvbG9yO1xuICAgIHRoaXMuX2N0eC5mb250ID0gdGhpcy5mb250RGVjb3JhdGlvbigpICsgXCIgXCIgKyB0aGlzLnByb3BzLmZvbnRTaXplICsgJ3B4ICcgKyB0aGlzLnByb3BzLmZvbnQ7XG5cbiAgICBjb25zdCBudW0gPSB0aGlzLnByb3BzLnRleHRFeHBhbnNpb24gKyAodGhpcy5wcm9wcy5mb250U2l6ZSAvIDEwMCk7XG4gICAgY29uc3QgcmFkID0gdGhpcy5wcm9wcy5yYWRpdXMgLSAodGhpcy5wcm9wcy5mb250U2l6ZSAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy50ZXh0UmVwZWF0OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMuX2N0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuX2N0eC5yb3RhdGUoaiAqIG51bSArIG51bSAqIHRoaXMucHJvcHMudGV4dC5sZW5ndGggKiBpKTtcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KHRoaXMucHJvcHMudGV4dFtqXSwgMCwgLShyYWQpKTtcbiAgICAgICAgdGhpcy5fY3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBwcml2YXRlIHJlZnJlc2hSYWRpdXMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc3Ryb2tlV2lkdGggPiAxKSB7XG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyA9ICh0aGlzLnByb3BzLndpZHRoIC8gMikgLSAodGhpcy5wcm9wcy5zdHJva2VXaWR0aCAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyA9ICh0aGlzLnByb3BzLndpZHRoIC8gMik7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50LCBiZzogYm9vbGVhbikge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoYmcpIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9ICF0aGlzLmNvbG9yUGlja2VyQkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gIXRoaXMuY29sb3JQaWNrZXJDO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdENvbG9yKGJnOiBib29sZWFuLCAkZXZlbnQpIHtcbiAgICBpZiAoYmcpIHtcbiAgICAgIHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yID0gJGV2ZW50O1xuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuc3Ryb2tlQ29sb3IgPSAkZXZlbnQ7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xuICB9XG5cbiAgc2VsZWN0Qm9yZGVyV2lkdGgoJGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5zdHJva2VXaWR0aCA9ICRldmVudC52YWx1ZTtcbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xuICB9XG5cbiAgZGVsZXRlQ2FudmFzKCkge1xuICAgIHRoaXMuX3JlbW92ZUNhbnZhcy5yZW1vdmUodGhpcy5pZCk7XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuICh0aGlzLndpZHRoIC0gdGhpcy5wcm9wcy53aWR0aCkgLyAyO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiAodGhpcy5oZWlnaHQgLSAodGhpcy5pc01vYmlsZSA/IDYyIDogMCkgLSB0aGlzLnByb3BzLmhlaWdodCkgLyAyIC0gdGhpcy5jYWxjRGlmZigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjRGlmZigpIHtcbiAgICByZXR1cm4gKHRoaXMuYWN0aXZlICYmICF0aGlzLmlzTW9iaWxlKSA/IDM3IDogMDtcbiAgfVxuXG4gIHJlc2l6ZSgkZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLndpZHRoICs9ICRldmVudDtcbiAgICB0aGlzLnByb3BzLmhlaWdodCArPSAkZXZlbnQ7XG4gIH1cblxuICBjbG9zZUNvbG9yUGlja2VyQkcoJGV2ZW50KSB7XG4gICAgdGhpcy5jb2xvclBpY2tlckJHID0gISRldmVudDtcbiAgfVxuXG4gIGNsb3NlQ29sb3JQaWNrZXJDKCRldmVudCkge1xuICAgIHRoaXMuY29sb3JQaWNrZXJDID0gISRldmVudDtcbiAgfVxuXG4gIGdldFRyYW5zbGF0aW9uKCkge1xuICAgIHRoaXMucmVmcmVzaFJhZGl1cygpO1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IDE0OCAqIDAuNTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yYWRpdXMgPCBtZW51V2lkdGggPyAobWVudVdpZHRoIC0gdGhpcy5wcm9wcy5yYWRpdXMpIDogKHRoaXMucHJvcHMucmFkaXVzIC0gbWVudVdpZHRoKTtcbiAgfVxuXG4gIGluYWN0aXZlKCRldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmNoYW5nZUFjdGl2ZShudWxsKTtcbiAgfVxufVxuIl19