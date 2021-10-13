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
            this.props.radius = (this.props.width / 2) - (this.props.strokeWidth / 2) - 1;
        }
        else {
            this.props.radius = (this.props.width / 2) - 1;
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
        return (this.active && !this.isMobile) ? 37 : this.isMobile ? -30 : 0;
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
                    template: "<div [clickOutsideEnabled]=\"active\" [clickOutsideEvents]=\"'mousedown'\"\r\n     (clickOutside)=\"inactive($event)\">\r\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\r\n    <div class=\"gd-context-menu\" *ngIf=\"active\"\r\n         [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + getTranslation() + 'px)'}\">\r\n      <gd-button name=\"button\" class=\"first-element\" [icon]=\"'fill-drip'\" (click)=\"toggleColorPicker($event, true)\">\r\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\r\n      </gd-button>\r\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\r\n                       [className]=\"'palette'\"\r\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\r\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\r\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\r\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\"\r\n                 (click)=\"toggleColorPicker($event, false)\" class=\"color-for-shape\">\r\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\r\n      </gd-button>\r\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\r\n                       [className]=\"'palette'\"\r\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\r\n      <gd-button name=\"button\" class=\"stamp-trash\" [icon]=\"'trash'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\r\n      </gd-button>\r\n    </div>\r\n    <div class=\"csg-bounding-box\" [ngClass]=\"active ? 'active' : ''\" [style.width.px]=\"props.width\"\r\n         [style.height.px]=\"props.height\">\r\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\r\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\r\n                   (release)=\"redrawCanvas()\" *ngIf=\"active\"></gd-resizing>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRTVGO0lBb0JFLDhCQUFvQixvQkFBeUMsRUFDekMsYUFBa0MsRUFDbEMsZUFBK0IsRUFDL0IsY0FBNkI7UUFIakQsaUJBa0JDO1FBbEJtQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFSakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFRbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztR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Q3BCLHdDQUEyQjs7SUFDM0Isc0NBQXlCOztJQUN6QixxQ0FBaUM7O0lBQ2pDLHFDQUF1Qjs7SUFDdkIsc0NBQXdCOztJQUV4QixvQ0FBK0I7O0lBQy9CLHNDQUF3RDs7SUFDeEQsNkNBQXNCOztJQUN0Qiw0Q0FBcUI7O0lBQ3JCLDJDQUFvQzs7SUFDcEMsd0NBQWtCOzs7OztJQUVOLG9EQUFpRDs7Ozs7SUFDakQsNkNBQTBDOzs7OztJQUMxQywrQ0FBdUM7Ozs7O0lBQ3ZDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JvcmRlciwgU3RhbXBDYW52YXNQcm9wc30gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcclxuaW1wb3J0IHtBY3RpdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLWNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVtb3ZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlLCBXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXN0YW1wLWNhbnZhcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YW1wLWNhbnZhcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3RhbXAtY2FudmFzLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YW1wQ2FudmFzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBpZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHRoZUZpcnN0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwcm9wczogU3RhbXBDYW52YXNQcm9wcztcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywge3N0YXRpYzogdHJ1ZX0pIGNhbnZhczogRWxlbWVudFJlZjtcclxuICBjb2xvclBpY2tlckJHID0gZmFsc2U7XHJcbiAgY29sb3JQaWNrZXJDID0gZmFsc2U7XHJcbiAgYm9yZGVyV2lkdGggPSBCb3JkZXIud2lkdGhPcHRpb25zKCk7XHJcbiAgaXNNb2JpbGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2ZUNhbnZhc1NlcnZpY2U6IEFjdGl2ZUNhbnZhc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlQ2FudmFzOiBSZW1vdmVDYW52YXNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2Uub25DbG9zZS5zdWJzY3JpYmUoKGMpID0+IHtcclxuICAgICAgdGhpcy5jb2xvclBpY2tlckMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmlkID09PSBpZDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY3R4KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3R4O1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGlvbigpIHtcclxuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuaWQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdHggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xyXG4gIH1cclxuXHJcbiAgcmVkcmF3Q2FudmFzKCkge1xyXG4gICAgdGhpcy5yZWZyZXNoUmFkaXVzKCk7XHJcbiAgICB0aGlzLmRyYXdDaXJjbGUoKTtcclxuICAgIGlmICh0aGlzLnByb3BzLnRleHQpIHtcclxuICAgICAgaWYgKHRoaXMudGhlRmlyc3QpIHtcclxuICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XHJcbiAgICAgICAgdGhpcy5fY3R4LmZvbnQgPSB0aGlzLmZvbnREZWNvcmF0aW9uKCkgKyBcIiBcIiArIHRoaXMucHJvcHMuZm9udFNpemUgKyAncHggJyArIHRoaXMucHJvcHMuZm9udDtcclxuICAgICAgICB0aGlzLl9jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KHRoaXMucHJvcHMudGV4dCwgdGhpcy5wcm9wcy53aWR0aCAvIDIsIHRoaXMucHJvcHMuaGVpZ2h0IC8gMiArIHRoaXMucHJvcHMuZm9udFNpemUgLyAyKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy51bmRlcmxpbmUpIHtcclxuICAgICAgICAgIHRoaXMubWFrZVRleHRVbmRlcmxpbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dENpcmNsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvbnREZWNvcmF0aW9uKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBib2xkID0gKHRoaXMucHJvcHMuYm9sZCkgPyBcImJvbGRcIiA6IFwiXCI7XHJcbiAgICBjb25zdCBpdGFsaWMgPSAodGhpcy5wcm9wcy5pdGFsaWMpID8gXCJpdGFsaWNcIiA6IFwiXCI7XHJcbiAgICByZXR1cm4gYm9sZCArIFwiIFwiICsgaXRhbGljO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlVGV4dFVuZGVybGluZSgpIHtcclxuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcclxuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmhlaWdodCAvIDI7XHJcbiAgICBjb25zdCB0ZXh0V2lkdGggPSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGhpcy5wcm9wcy50ZXh0KS53aWR0aDtcclxuICAgIGNvbnN0IHN0YXJ0WSA9IHkgKyB0aGlzLnByb3BzLmZvbnRTaXplO1xyXG4gICAgY29uc3QgZW5kWSA9IHN0YXJ0WTtcclxuICAgIGxldCB1bmRlcmxpbmVIZWlnaHQgPSB0aGlzLnByb3BzLmZvbnRTaXplIC8gMTU7XHJcbiAgICBpZiAodW5kZXJsaW5lSGVpZ2h0IDwgMSkge1xyXG4gICAgICB1bmRlcmxpbmVIZWlnaHQgPSAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY29uc3Qgc3RhcnRYID0geCAtICh0ZXh0V2lkdGggLyAyKTtcclxuICAgIGNvbnN0IGVuZFggPSB4ICsgKHRleHRXaWR0aCAvIDIpO1xyXG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XHJcbiAgICB0aGlzLl9jdHgubGluZVdpZHRoID0gdW5kZXJsaW5lSGVpZ2h0O1xyXG4gICAgdGhpcy5fY3R4Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XHJcbiAgICB0aGlzLl9jdHgubGluZVRvKGVuZFgsIGVuZFkpO1xyXG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgdGhpcy5fY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3Q2lyY2xlKCkge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gKHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yID09PSBcIlwiKSA/IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIgOiB0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcclxuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmhlaWdodCAvIDI7XHJcbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLl9jdHguYXJjKHgsIHksIHRoaXMucHJvcHMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICB0aGlzLl9jdHgubGluZVdpZHRoID0gdGhpcy5wcm9wcy5zdHJva2VXaWR0aDtcclxuICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9IHRoaXMucHJvcHMuc3Ryb2tlQ29sb3I7XHJcbiAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XHJcbiAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5fY3R4LmZpbGwoKTtcclxuICAgIHRoaXMuX2N0eC5jbG9zZVBhdGgoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGRyYXdUZXh0Q2lyY2xlKCkge1xyXG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMud2lkdGggLyAyO1xyXG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMjtcclxuICAgIHRoaXMuX2N0eC5zYXZlKCk7XHJcbiAgICB0aGlzLl9jdHgudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgdGhpcy5fY3R4LnJvdGF0ZShNYXRoLlBJIC8gMik7XHJcbiAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XHJcbiAgICB0aGlzLl9jdHguZm9udCA9IHRoaXMuZm9udERlY29yYXRpb24oKSArIFwiIFwiICsgdGhpcy5wcm9wcy5mb250U2l6ZSArICdweCAnICsgdGhpcy5wcm9wcy5mb250O1xyXG5cclxuICAgIGNvbnN0IG51bSA9IHRoaXMucHJvcHMudGV4dEV4cGFuc2lvbiArICh0aGlzLnByb3BzLmZvbnRTaXplIC8gMTAwKTtcclxuICAgIGNvbnN0IHJhZCA9IHRoaXMucHJvcHMucmFkaXVzIC0gKHRoaXMucHJvcHMuZm9udFNpemUgLyAyKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy50ZXh0UmVwZWF0OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BzLnRleHQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB0aGlzLl9jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuX2N0eC5yb3RhdGUoaiAqIG51bSArIG51bSAqIHRoaXMucHJvcHMudGV4dC5sZW5ndGggKiBpKTtcclxuICAgICAgICB0aGlzLl9jdHguZmlsbFRleHQodGhpcy5wcm9wcy50ZXh0W2pdLCAwLCAtKHJhZCkpO1xyXG4gICAgICAgIHRoaXMuX2N0eC5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX2N0eC5yZXN0b3JlKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZWZyZXNoUmFkaXVzKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3Ryb2tlV2lkdGggPiAxKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucmFkaXVzID0gKHRoaXMucHJvcHMud2lkdGggLyAyKSAtICh0aGlzLnByb3BzLnN0cm9rZVdpZHRoIC8gMikgLSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5yYWRpdXMgPSAodGhpcy5wcm9wcy53aWR0aCAvIDIpIC0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvbG9yUGlja2VyKCRldmVudCwgYmc6IGJvb2xlYW4pIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKGJnKSB7XHJcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9ICF0aGlzLmNvbG9yUGlja2VyQkc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9ICF0aGlzLmNvbG9yUGlja2VyQztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9yKGJnOiBib29sZWFuLCAkZXZlbnQpIHtcclxuICAgIGlmIChiZykge1xyXG4gICAgICB0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvciA9ICRldmVudDtcclxuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLnN0cm9rZUNvbG9yID0gJGV2ZW50O1xyXG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEJvcmRlcldpZHRoKCRldmVudCkge1xyXG4gICAgdGhpcy5wcm9wcy5zdHJva2VXaWR0aCA9ICRldmVudC52YWx1ZTtcclxuICAgIHRoaXMucmVkcmF3Q2FudmFzKCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDYW52YXMoKSB7XHJcbiAgICB0aGlzLl9yZW1vdmVDYW52YXMucmVtb3ZlKHRoaXMuaWQpO1xyXG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIGdldExlZnQoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMud2lkdGggLSB0aGlzLnByb3BzLndpZHRoKSAvIDI7XHJcbiAgfVxyXG5cclxuICBnZXRUb3AoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuaGVpZ2h0IC0gKHRoaXMuaXNNb2JpbGUgPyA2MiA6IDApIC0gdGhpcy5wcm9wcy5oZWlnaHQpIC8gMiAtIHRoaXMuY2FsY0RpZmYoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY0RpZmYoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuYWN0aXZlICYmICF0aGlzLmlzTW9iaWxlKSA/IDM3IDogdGhpcy5pc01vYmlsZSA/IC0zMCA6IDA7XHJcbiAgfVxyXG5cclxuICByZXNpemUoJGV2ZW50KSB7XHJcbiAgICB0aGlzLnByb3BzLndpZHRoICs9ICRldmVudDtcclxuICAgIHRoaXMucHJvcHMuaGVpZ2h0ICs9ICRldmVudDtcclxuICB9XHJcblxyXG4gIGNsb3NlQ29sb3JQaWNrZXJCRygkZXZlbnQpIHtcclxuICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9ICEkZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBjbG9zZUNvbG9yUGlja2VyQygkZXZlbnQpIHtcclxuICAgIHRoaXMuY29sb3JQaWNrZXJDID0gISRldmVudDtcclxuICB9XHJcblxyXG4gIGdldFRyYW5zbGF0aW9uKCkge1xyXG4gICAgdGhpcy5yZWZyZXNoUmFkaXVzKCk7XHJcbiAgICBjb25zdCBtZW51V2lkdGggPSAxNDggKiAwLjU7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yYWRpdXMgPCBtZW51V2lkdGggPyAobWVudVdpZHRoIC0gdGhpcy5wcm9wcy5yYWRpdXMpIDogKHRoaXMucHJvcHMucmFkaXVzIC0gbWVudVdpZHRoKTtcclxuICB9XHJcblxyXG4gIGluYWN0aXZlKCRldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=