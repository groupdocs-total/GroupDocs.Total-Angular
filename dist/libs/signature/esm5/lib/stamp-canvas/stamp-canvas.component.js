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
                    template: "<div [clickOutsideEnabled]=\"active\" [clickOutsideEvents]=\"'mousedown'\"\n     (clickOutside)=\"inactive($event)\">\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\n    <div class=\"gd-context-menu\" *ngIf=\"active\"\n         [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + getTranslation() + 'px)'}\">\n      <gd-button name=\"button\" class=\"first-element\" [icon]=\"'fill-drip'\" (click)=\"toggleColorPicker($event, true)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\"\n                 (click)=\"toggleColorPicker($event, false)\" class=\"color-for-shape\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\n      <gd-button name=\"button\" class=\"stamp-trash\" [icon]=\"'trash'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\n      </gd-button>\n    </div>\n    <div class=\"csg-bounding-box\" [ngClass]=\"active ? 'active' : ''\" [style.width.px]=\"props.width\"\n         [style.height.px]=\"props.height\">\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\n                   (release)=\"redrawCanvas()\" *ngIf=\"active\"></gd-resizing>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRTVGO0lBb0JFLDhCQUFvQixvQkFBeUMsRUFDekMsYUFBa0MsRUFDbEMsZUFBK0IsRUFDL0IsY0FBNkI7UUFIakQsaUJBa0JDO1FBbEJtQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFSakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFRbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztR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QUN2QixzQ0FBd0I7O0lBRXhCLG9DQUErQjs7SUFDL0Isc0NBQXdEOztJQUN4RCw2Q0FBc0I7O0lBQ3RCLDRDQUFxQjs7SUFDckIsMkNBQW9DOztJQUNwQyx3Q0FBa0I7Ozs7O0lBRU4sb0RBQWlEOzs7OztJQUNqRCw2Q0FBMEM7Ozs7O0lBQzFDLCtDQUF1Qzs7Ozs7SUFDdkMsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JvcmRlciwgU3RhbXBDYW52YXNQcm9wc30gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7QWN0aXZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4uL2FjdGl2ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi4vcmVtb3ZlLWNhbnZhcy5zZXJ2aWNlXCI7XG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlLCBXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXN0YW1wLWNhbnZhcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFtcC1jYW52YXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGFtcC1jYW52YXMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFtcENhbnZhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRoZUZpcnN0OiBib29sZWFuO1xuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb3BzOiBTdGFtcENhbnZhc1Byb3BzO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcblxuICBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHtzdGF0aWM6IHRydWV9KSBjYW52YXM6IEVsZW1lbnRSZWY7XG4gIGNvbG9yUGlja2VyQkcgPSBmYWxzZTtcbiAgY29sb3JQaWNrZXJDID0gZmFsc2U7XG4gIGJvcmRlcldpZHRoID0gQm9yZGVyLndpZHRoT3B0aW9ucygpO1xuICBpc01vYmlsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmVDYW52YXNTZXJ2aWNlOiBBY3RpdmVDYW52YXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVDYW52YXM6IFJlbW92ZUNhbnZhc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuXG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2Uub25DbG9zZS5zdWJzY3JpYmUoKGMpID0+IHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmlkID09PSBpZDtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY3R4KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIHRoaXMuX2N0eDtcbiAgfVxuXG4gIGFjdGl2YXRpb24oKSB7XG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdHggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIHJlZHJhd0NhbnZhcygpIHtcbiAgICB0aGlzLnJlZnJlc2hSYWRpdXMoKTtcbiAgICB0aGlzLmRyYXdDaXJjbGUoKTtcbiAgICBpZiAodGhpcy5wcm9wcy50ZXh0KSB7XG4gICAgICBpZiAodGhpcy50aGVGaXJzdCkge1xuICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XG4gICAgICAgIHRoaXMuX2N0eC5mb250ID0gdGhpcy5mb250RGVjb3JhdGlvbigpICsgXCIgXCIgKyB0aGlzLnByb3BzLmZvbnRTaXplICsgJ3B4ICcgKyB0aGlzLnByb3BzLmZvbnQ7XG4gICAgICAgIHRoaXMuX2N0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KHRoaXMucHJvcHMudGV4dCwgdGhpcy5wcm9wcy53aWR0aCAvIDIsIHRoaXMucHJvcHMuaGVpZ2h0IC8gMiArIHRoaXMucHJvcHMuZm9udFNpemUgLyAyKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudW5kZXJsaW5lKSB7XG4gICAgICAgICAgdGhpcy5tYWtlVGV4dFVuZGVybGluZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdUZXh0Q2lyY2xlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb250RGVjb3JhdGlvbigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJvbGQgPSAodGhpcy5wcm9wcy5ib2xkKSA/IFwiYm9sZFwiIDogXCJcIjtcbiAgICBjb25zdCBpdGFsaWMgPSAodGhpcy5wcm9wcy5pdGFsaWMpID8gXCJpdGFsaWNcIiA6IFwiXCI7XG4gICAgcmV0dXJuIGJvbGQgKyBcIiBcIiArIGl0YWxpYztcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVRleHRVbmRlcmxpbmUoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmhlaWdodCAvIDI7XG4gICAgY29uc3QgdGV4dFdpZHRoID0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRoaXMucHJvcHMudGV4dCkud2lkdGg7XG4gICAgY29uc3Qgc3RhcnRZID0geSArIHRoaXMucHJvcHMuZm9udFNpemU7XG4gICAgY29uc3QgZW5kWSA9IHN0YXJ0WTtcbiAgICBsZXQgdW5kZXJsaW5lSGVpZ2h0ID0gdGhpcy5wcm9wcy5mb250U2l6ZSAvIDE1O1xuICAgIGlmICh1bmRlcmxpbmVIZWlnaHQgPCAxKSB7XG4gICAgICB1bmRlcmxpbmVIZWlnaHQgPSAxO1xuICAgIH1cbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG4gICAgY29uc3Qgc3RhcnRYID0geCAtICh0ZXh0V2lkdGggLyAyKTtcbiAgICBjb25zdCBlbmRYID0geCArICh0ZXh0V2lkdGggLyAyKTtcbiAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnByb3BzLnRleHRDb2xvcjtcbiAgICB0aGlzLl9jdHgubGluZVdpZHRoID0gdW5kZXJsaW5lSGVpZ2h0O1xuICAgIHRoaXMuX2N0eC5tb3ZlVG8oc3RhcnRYLCBzdGFydFkpO1xuICAgIHRoaXMuX2N0eC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgIHRoaXMuX2N0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0NpcmNsZSgpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSAodGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3IgPT09IFwiXCIpID8gXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIiA6IHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9jdHguYXJjKHgsIHksIHRoaXMucHJvcHMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgdGhpcy5fY3R4LmxpbmVXaWR0aCA9IHRoaXMucHJvcHMuc3Ryb2tlV2lkdGg7XG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wcm9wcy5zdHJva2VDb2xvcjtcbiAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl9jdHguZmlsbCgpO1xuICAgIHRoaXMuX2N0eC5jbG9zZVBhdGgoKTtcbiAgfTtcblxuICBwcml2YXRlIGRyYXdUZXh0Q2lyY2xlKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuX2N0eC5zYXZlKCk7XG4gICAgdGhpcy5fY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICB0aGlzLl9jdHgucm90YXRlKE1hdGguUEkgLyAyKTtcbiAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XG4gICAgdGhpcy5fY3R4LmZvbnQgPSB0aGlzLmZvbnREZWNvcmF0aW9uKCkgKyBcIiBcIiArIHRoaXMucHJvcHMuZm9udFNpemUgKyAncHggJyArIHRoaXMucHJvcHMuZm9udDtcblxuICAgIGNvbnN0IG51bSA9IHRoaXMucHJvcHMudGV4dEV4cGFuc2lvbiArICh0aGlzLnByb3BzLmZvbnRTaXplIC8gMTAwKTtcbiAgICBjb25zdCByYWQgPSB0aGlzLnByb3BzLnJhZGl1cyAtICh0aGlzLnByb3BzLmZvbnRTaXplIC8gMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnRleHRSZXBlYXQ7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BzLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy5fY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5fY3R4LnJvdGF0ZShqICogbnVtICsgbnVtICogdGhpcy5wcm9wcy50ZXh0Lmxlbmd0aCAqIGkpO1xuICAgICAgICB0aGlzLl9jdHguZmlsbFRleHQodGhpcy5wcm9wcy50ZXh0W2pdLCAwLCAtKHJhZCkpO1xuICAgICAgICB0aGlzLl9jdHgucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jdHgucmVzdG9yZSgpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVmcmVzaFJhZGl1cygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zdHJva2VXaWR0aCA+IDEpIHtcbiAgICAgIHRoaXMucHJvcHMucmFkaXVzID0gKHRoaXMucHJvcHMud2lkdGggLyAyKSAtICh0aGlzLnByb3BzLnN0cm9rZVdpZHRoIC8gMikgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyA9ICh0aGlzLnByb3BzLndpZHRoIC8gMikgLSAxO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNvbG9yUGlja2VyKCRldmVudCwgYmc6IGJvb2xlYW4pIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGJnKSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSAhdGhpcy5jb2xvclBpY2tlckJHO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9ICF0aGlzLmNvbG9yUGlja2VyQztcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDb2xvcihiZzogYm9vbGVhbiwgJGV2ZW50KSB7XG4gICAgaWYgKGJnKSB7XG4gICAgICB0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvciA9ICRldmVudDtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnN0cm9rZUNvbG9yID0gJGV2ZW50O1xuICAgICAgdGhpcy5jb2xvclBpY2tlckMgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIHNlbGVjdEJvcmRlcldpZHRoKCRldmVudCkge1xuICAgIHRoaXMucHJvcHMuc3Ryb2tlV2lkdGggPSAkZXZlbnQudmFsdWU7XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIGRlbGV0ZUNhbnZhcygpIHtcbiAgICB0aGlzLl9yZW1vdmVDYW52YXMucmVtb3ZlKHRoaXMuaWQpO1xuICAgIHRoaXMucmVkcmF3Q2FudmFzKCk7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiAodGhpcy53aWR0aCAtIHRoaXMucHJvcHMud2lkdGgpIC8gMjtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gKHRoaXMuaGVpZ2h0IC0gKHRoaXMuaXNNb2JpbGUgPyA2MiA6IDApIC0gdGhpcy5wcm9wcy5oZWlnaHQpIC8gMiAtIHRoaXMuY2FsY0RpZmYoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY0RpZmYoKSB7XG4gICAgcmV0dXJuICh0aGlzLmFjdGl2ZSAmJiAhdGhpcy5pc01vYmlsZSkgPyAzNyA6IDA7XG4gIH1cblxuICByZXNpemUoJGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy53aWR0aCArPSAkZXZlbnQ7XG4gICAgdGhpcy5wcm9wcy5oZWlnaHQgKz0gJGV2ZW50O1xuICB9XG5cbiAgY2xvc2VDb2xvclBpY2tlckJHKCRldmVudCkge1xuICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9ICEkZXZlbnQ7XG4gIH1cblxuICBjbG9zZUNvbG9yUGlja2VyQygkZXZlbnQpIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyQyA9ICEkZXZlbnQ7XG4gIH1cblxuICBnZXRUcmFuc2xhdGlvbigpIHtcbiAgICB0aGlzLnJlZnJlc2hSYWRpdXMoKTtcbiAgICBjb25zdCBtZW51V2lkdGggPSAxNDggKiAwLjU7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmFkaXVzIDwgbWVudVdpZHRoID8gKG1lbnVXaWR0aCAtIHRoaXMucHJvcHMucmFkaXVzKSA6ICh0aGlzLnByb3BzLnJhZGl1cyAtIG1lbnVXaWR0aCk7XG4gIH1cblxuICBpbmFjdGl2ZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUobnVsbCk7XG4gIH1cbn1cbiJdfQ==