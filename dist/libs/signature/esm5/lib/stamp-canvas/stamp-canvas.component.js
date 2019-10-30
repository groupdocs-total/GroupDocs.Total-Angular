/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Border, StampCanvasProps } from "../signature-models";
import { ActiveCanvasService } from "../active-canvas.service";
import { RemoveCanvasService } from "../remove-canvas.service";
import { OnCloseService } from "@groupdocs.examples.angular/common-components";
var StampCanvasComponent = /** @class */ (function () {
    function StampCanvasComponent(_activeCanvasService, _removeCanvas, _onCloseService) {
        var _this = this;
        this._activeCanvasService = _activeCanvasService;
        this._removeCanvas = _removeCanvas;
        this._onCloseService = _onCloseService;
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
            if (_this.id === id) {
                _this.active = true;
            }
            else {
                _this.active = false;
            }
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
        return ((this.height - this.props.height) / 2 - (this.active ? 34 : 0));
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
    StampCanvasComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-stamp-canvas',
                    template: "<div>\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\n    <div class=\"gd-context-menu\" *ngIf=\"active\">\n      <gd-button name=\"button\" [icon]=\"'fill-drip'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker($event, true)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\" [tooltip]=\"'Color'\"\n                 (click)=\"toggleColorPicker($event, false)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\n      <gd-button name=\"button\" [icon]=\"'trash'\" [tooltip]=\"'Delete'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\n      </gd-button>\n    </div>\n    <div class=\"csg-bounding-box\" [style.width.px]=\"props.width\" [style.height.px]=\"props.height\">\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\n                   (release)=\"redrawCanvas()\"></gd-resizing>\n    </div>\n  </div>\n</div>\n",
                    styles: [".gd-context-menu{display:flex;height:37px;top:-40px;padding:0;background-color:#fff;cursor:default;flex-direction:row}.gd-context-menu .icon{font-size:14px;cursor:pointer;color:#3e4e5a!important}.gd-context-menu ::ng-deep .dropdown-menu{top:-120px!important;height:120px;overflow-y:auto}.gd-context-menu ::ng-deep .icon-button{margin:0!important}.gd-stamp-box{position:absolute}.palette{position:absolute;top:-190px}.csg-preview{width:100%;height:100%}.csg-bounding-box{border:1px solid #679ffa;position:absolute}.csg-border-width{width:37px!important;height:37px!important;display:flex;justify-content:center;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .select{min-width:unset!important}::ng-deep .selected-value{font-size:12px!important}@media (max-width:1037px){.gd-context-menu{top:-37px;margin:auto}.csg-border-width{width:18px!important;height:16px!important;margin-left:8px}.csg-border-width .select{width:21px}}"]
                }] }
    ];
    /** @nocollapse */
    StampCanvasComponent.ctorParameters = function () { return [
        { type: ActiveCanvasService },
        { type: RemoveCanvasService },
        { type: OnCloseService }
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
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFN0U7SUFtQkUsOEJBQW9CLG9CQUF5QyxFQUN6QyxhQUFrQyxFQUNsQyxlQUErQjtRQUZuRCxpQkFnQkM7UUFoQm1CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQU5uRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU1sQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMs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TCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUdMLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztJQW1MckMsMkJBQUM7Q0FBQSxBQWpNRCxJQWlNQztTQTVMWSxvQkFBb0I7OztJQUMvQixrQ0FBb0I7O0lBQ3BCLHdDQUEyQjs7SUFDM0Isc0NBQXlCOztJQUN6QixxQ0FBaUM7O0lBQ2pDLHFDQUF1Qjs7SUFDdkIsc0NBQXdCOztJQUV4QixvQ0FBK0I7O0lBQy9CLHNDQUF3RDs7SUFDeEQsNkNBQXNCOztJQUN0Qiw0Q0FBcUI7O0lBQ3JCLDJDQUFvQzs7Ozs7SUFFeEIsb0RBQWlEOzs7OztJQUNqRCw2Q0FBMEM7Ozs7O0lBQzFDLCtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCb3JkZXIsIFN0YW1wQ2FudmFzUHJvcHN9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge0FjdGl2ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuLi9hY3RpdmUtY2FudmFzLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4uL3JlbW92ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtPbkNsb3NlU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zdGFtcC1jYW52YXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhbXAtY2FudmFzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhbXAtY2FudmFzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhbXBDYW52YXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBpZDogbnVtYmVyO1xuICBASW5wdXQoKSB0aGVGaXJzdDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBwcm9wczogU3RhbXBDYW52YXNQcm9wcztcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XG5cbiAgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7c3RhdGljOiB0cnVlfSkgY2FudmFzOiBFbGVtZW50UmVmO1xuICBjb2xvclBpY2tlckJHID0gZmFsc2U7XG4gIGNvbG9yUGlja2VyQyA9IGZhbHNlO1xuICBib3JkZXJXaWR0aCA9IEJvcmRlci53aWR0aE9wdGlvbnMoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmVDYW52YXNTZXJ2aWNlOiBBY3RpdmVDYW52YXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVDYW52YXM6IFJlbW92ZUNhbnZhc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSkge1xuXG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2Uub25DbG9zZS5zdWJzY3JpYmUoKGMpID0+IHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY3R4KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIHRoaXMuX2N0eDtcbiAgfVxuXG4gIGFjdGl2YXRpb24oKSB7XG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdHggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIHJlZHJhd0NhbnZhcygpIHtcbiAgICB0aGlzLnJlZnJlc2hSYWRpdXMoKTtcbiAgICB0aGlzLmRyYXdDaXJjbGUoKTtcbiAgICBpZiAodGhpcy5wcm9wcy50ZXh0KSB7XG4gICAgICBpZiAodGhpcy50aGVGaXJzdCkge1xuICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XG4gICAgICAgIHRoaXMuX2N0eC5mb250ID0gdGhpcy5mb250RGVjb3JhdGlvbigpICsgXCIgXCIgKyB0aGlzLnByb3BzLmZvbnRTaXplICsgJ3B4ICcgKyB0aGlzLnByb3BzLmZvbnQ7XG4gICAgICAgIHRoaXMuX2N0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KHRoaXMucHJvcHMudGV4dCwgdGhpcy5wcm9wcy53aWR0aCAvIDIsIHRoaXMucHJvcHMuaGVpZ2h0IC8gMiArIHRoaXMucHJvcHMuZm9udFNpemUgLyAyKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudW5kZXJsaW5lKSB7XG4gICAgICAgICAgdGhpcy5tYWtlVGV4dFVuZGVybGluZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdUZXh0Q2lyY2xlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb250RGVjb3JhdGlvbigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJvbGQgPSAodGhpcy5wcm9wcy5ib2xkKSA/IFwiYm9sZFwiIDogXCJcIjtcbiAgICBjb25zdCBpdGFsaWMgPSAodGhpcy5wcm9wcy5pdGFsaWMpID8gXCJpdGFsaWNcIiA6IFwiXCI7XG4gICAgcmV0dXJuIGJvbGQgKyBcIiBcIiArIGl0YWxpYztcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVRleHRVbmRlcmxpbmUoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmhlaWdodCAvIDI7XG4gICAgY29uc3QgdGV4dFdpZHRoID0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRoaXMucHJvcHMudGV4dCkud2lkdGg7XG4gICAgY29uc3Qgc3RhcnRZID0geSArIHRoaXMucHJvcHMuZm9udFNpemU7XG4gICAgY29uc3QgZW5kWSA9IHN0YXJ0WTtcbiAgICBsZXQgdW5kZXJsaW5lSGVpZ2h0ID0gdGhpcy5wcm9wcy5mb250U2l6ZSAvIDE1O1xuICAgIGlmICh1bmRlcmxpbmVIZWlnaHQgPCAxKSB7XG4gICAgICB1bmRlcmxpbmVIZWlnaHQgPSAxO1xuICAgIH1cbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG4gICAgY29uc3Qgc3RhcnRYID0geCAtICh0ZXh0V2lkdGggLyAyKTtcbiAgICBjb25zdCBlbmRYID0geCArICh0ZXh0V2lkdGggLyAyKTtcbiAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnByb3BzLnRleHRDb2xvcjtcbiAgICB0aGlzLl9jdHgubGluZVdpZHRoID0gdW5kZXJsaW5lSGVpZ2h0O1xuICAgIHRoaXMuX2N0eC5tb3ZlVG8oc3RhcnRYLCBzdGFydFkpO1xuICAgIHRoaXMuX2N0eC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgIHRoaXMuX2N0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0NpcmNsZSgpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSAodGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3IgPT09IFwiXCIpID8gXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIiA6IHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9jdHguYXJjKHgsIHksIHRoaXMucHJvcHMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgdGhpcy5fY3R4LmxpbmVXaWR0aCA9IHRoaXMucHJvcHMuc3Ryb2tlV2lkdGg7XG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wcm9wcy5zdHJva2VDb2xvcjtcbiAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl9jdHguZmlsbCgpO1xuICAgIHRoaXMuX2N0eC5jbG9zZVBhdGgoKTtcbiAgfTtcblxuICBwcml2YXRlIGRyYXdUZXh0Q2lyY2xlKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuX2N0eC5zYXZlKCk7XG4gICAgdGhpcy5fY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICB0aGlzLl9jdHgucm90YXRlKE1hdGguUEkgLyAyKTtcbiAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XG4gICAgdGhpcy5fY3R4LmZvbnQgPSB0aGlzLmZvbnREZWNvcmF0aW9uKCkgKyBcIiBcIiArIHRoaXMucHJvcHMuZm9udFNpemUgKyAncHggJyArIHRoaXMucHJvcHMuZm9udDtcblxuICAgIGNvbnN0IG51bSA9IHRoaXMucHJvcHMudGV4dEV4cGFuc2lvbiArICh0aGlzLnByb3BzLmZvbnRTaXplIC8gMTAwKTtcbiAgICBjb25zdCByYWQgPSB0aGlzLnByb3BzLnJhZGl1cyAtICh0aGlzLnByb3BzLmZvbnRTaXplIC8gMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnRleHRSZXBlYXQ7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BzLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy5fY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5fY3R4LnJvdGF0ZShqICogbnVtICsgbnVtICogdGhpcy5wcm9wcy50ZXh0Lmxlbmd0aCAqIGkpO1xuICAgICAgICB0aGlzLl9jdHguZmlsbFRleHQodGhpcy5wcm9wcy50ZXh0W2pdLCAwLCAtKHJhZCkpO1xuICAgICAgICB0aGlzLl9jdHgucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jdHgucmVzdG9yZSgpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVmcmVzaFJhZGl1cygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zdHJva2VXaWR0aCA+IDEpIHtcbiAgICAgIHRoaXMucHJvcHMucmFkaXVzID0gKHRoaXMucHJvcHMud2lkdGggLyAyKSAtICh0aGlzLnByb3BzLnN0cm9rZVdpZHRoIC8gMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucmFkaXVzID0gKHRoaXMucHJvcHMud2lkdGggLyAyKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDb2xvclBpY2tlcigkZXZlbnQsIGJnOiBib29sZWFuKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChiZykge1xuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gIXRoaXMuY29sb3JQaWNrZXJCRztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvclBpY2tlckMgPSAhdGhpcy5jb2xvclBpY2tlckM7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q29sb3IoYmc6IGJvb2xlYW4sICRldmVudCkge1xuICAgIGlmIChiZykge1xuICAgICAgdGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3IgPSAkZXZlbnQ7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5zdHJva2VDb2xvciA9ICRldmVudDtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucmVkcmF3Q2FudmFzKCk7XG4gIH1cblxuICBzZWxlY3RCb3JkZXJXaWR0aCgkZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLnN0cm9rZVdpZHRoID0gJGV2ZW50LnZhbHVlO1xuICAgIHRoaXMucmVkcmF3Q2FudmFzKCk7XG4gIH1cblxuICBkZWxldGVDYW52YXMoKSB7XG4gICAgdGhpcy5fcmVtb3ZlQ2FudmFzLnJlbW92ZSh0aGlzLmlkKTtcbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gKHRoaXMud2lkdGggLSB0aGlzLnByb3BzLndpZHRoKSAvIDI7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuICgodGhpcy5oZWlnaHQgLSB0aGlzLnByb3BzLmhlaWdodCkgLyAyIC0gKHRoaXMuYWN0aXZlID8gMzQgOiAwKSk7XG4gIH1cblxuICByZXNpemUoJGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy53aWR0aCArPSAkZXZlbnQ7XG4gICAgdGhpcy5wcm9wcy5oZWlnaHQgKz0gJGV2ZW50O1xuICB9XG5cbiAgY2xvc2VDb2xvclBpY2tlckJHKCRldmVudCkge1xuICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9ICEkZXZlbnQ7XG4gIH1cblxuICBjbG9zZUNvbG9yUGlja2VyQygkZXZlbnQpIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyQyA9ICEkZXZlbnQ7XG4gIH1cbn1cbiJdfQ==