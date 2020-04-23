/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Border, StampCanvasProps } from "../signature-models";
import { ActiveCanvasService } from "../active-canvas.service";
import { RemoveCanvasService } from "../remove-canvas.service";
import { OnCloseService, WindowService } from "@groupdocs.examples.angular/common-components";
export class StampCanvasComponent {
    /**
     * @param {?} _activeCanvasService
     * @param {?} _removeCanvas
     * @param {?} _onCloseService
     * @param {?} _windowService
     */
    constructor(_activeCanvasService, _removeCanvas, _onCloseService, _windowService) {
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
        (c) => {
            this.colorPickerC = false;
            this.colorPickerBG = false;
        }));
        this._activeCanvasService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            this.active = this.id === id;
        }));
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isMobile = _windowService.isMobile();
        }));
    }
    /**
     * @return {?}
     */
    get ctx() {
        return this._ctx;
    }
    /**
     * @return {?}
     */
    activation() {
        this._activeCanvasService.changeActive(this.id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._ctx = this.canvas.nativeElement.getContext('2d');
        this.redrawCanvas();
    }
    /**
     * @return {?}
     */
    redrawCanvas() {
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
    }
    /**
     * @private
     * @return {?}
     */
    fontDecoration() {
        /** @type {?} */
        const bold = (this.props.bold) ? "bold" : "";
        /** @type {?} */
        const italic = (this.props.italic) ? "italic" : "";
        return bold + " " + italic;
    }
    /**
     * @private
     * @return {?}
     */
    makeTextUnderline() {
        /** @type {?} */
        const x = this.props.width / 2;
        /** @type {?} */
        const y = this.props.height / 2;
        /** @type {?} */
        const textWidth = this._ctx.measureText(this.props.text).width;
        /** @type {?} */
        const startY = y + this.props.fontSize;
        /** @type {?} */
        const endY = startY;
        /** @type {?} */
        let underlineHeight = this.props.fontSize / 15;
        if (underlineHeight < 1) {
            underlineHeight = 1;
        }
        this._ctx.beginPath();
        /** @type {?} */
        const startX = x - (textWidth / 2);
        /** @type {?} */
        const endX = x + (textWidth / 2);
        this._ctx.strokeStyle = this.props.textColor;
        this._ctx.lineWidth = underlineHeight;
        this._ctx.moveTo(startX, startY);
        this._ctx.lineTo(endX, endY);
        this._ctx.strokeStyle = 'blue';
        this._ctx.stroke();
    }
    /**
     * @private
     * @return {?}
     */
    drawCircle() {
        /** @type {?} */
        const backgroundColor = (this.props.backgroundColor === "") ? "rgb(255, 255, 255)" : this.props.backgroundColor;
        /** @type {?} */
        const x = this.props.width / 2;
        /** @type {?} */
        const y = this.props.height / 2;
        this._ctx.beginPath();
        this._ctx.arc(x, y, this.props.radius, 0, 2 * Math.PI);
        this._ctx.lineWidth = this.props.strokeWidth;
        this._ctx.strokeStyle = this.props.strokeColor;
        this._ctx.stroke();
        this._ctx.fillStyle = backgroundColor;
        this._ctx.fill();
        this._ctx.closePath();
    }
    ;
    /**
     * @private
     * @return {?}
     */
    drawTextCircle() {
        /** @type {?} */
        const x = this.props.width / 2;
        /** @type {?} */
        const y = this.props.height / 2;
        this._ctx.save();
        this._ctx.translate(x, y);
        this._ctx.rotate(Math.PI / 2);
        this._ctx.fillStyle = this.props.textColor;
        this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;
        /** @type {?} */
        const num = this.props.textExpansion + (this.props.fontSize / 100);
        /** @type {?} */
        const rad = this.props.radius - (this.props.fontSize / 2);
        for (let i = 0; i < this.props.textRepeat; i++) {
            for (let j = 0; j < this.props.text.length; j++) {
                this._ctx.save();
                this._ctx.rotate(j * num + num * this.props.text.length * i);
                this._ctx.fillText(this.props.text[j], 0, -(rad));
                this._ctx.restore();
            }
        }
        this._ctx.restore();
    }
    ;
    /**
     * @private
     * @return {?}
     */
    refreshRadius() {
        if (this.props.strokeWidth > 1) {
            this.props.radius = (this.props.width / 2) - (this.props.strokeWidth / 2) - 1;
        }
        else {
            this.props.radius = (this.props.width / 2) - 1;
        }
    }
    /**
     * @param {?} $event
     * @param {?} bg
     * @return {?}
     */
    toggleColorPicker($event, bg) {
        $event.preventDefault();
        $event.stopPropagation();
        if (bg) {
            this.colorPickerBG = !this.colorPickerBG;
        }
        else {
            this.colorPickerC = !this.colorPickerC;
        }
    }
    /**
     * @param {?} bg
     * @param {?} $event
     * @return {?}
     */
    selectColor(bg, $event) {
        if (bg) {
            this.props.backgroundColor = $event;
            this.colorPickerBG = false;
        }
        else {
            this.props.strokeColor = $event;
            this.colorPickerC = false;
        }
        this.redrawCanvas();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectBorderWidth($event) {
        this.props.strokeWidth = $event.value;
        this.redrawCanvas();
    }
    /**
     * @return {?}
     */
    deleteCanvas() {
        this._removeCanvas.remove(this.id);
        this.redrawCanvas();
    }
    /**
     * @return {?}
     */
    getLeft() {
        return (this.width - this.props.width) / 2;
    }
    /**
     * @return {?}
     */
    getTop() {
        return (this.height - (this.isMobile ? 62 : 0) - this.props.height) / 2 - this.calcDiff();
    }
    /**
     * @private
     * @return {?}
     */
    calcDiff() {
        return (this.active && !this.isMobile) ? 37 : 0;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    resize($event) {
        this.props.width += $event;
        this.props.height += $event;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closeColorPickerBG($event) {
        this.colorPickerBG = !$event;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closeColorPickerC($event) {
        this.colorPickerC = !$event;
    }
    /**
     * @return {?}
     */
    getTranslation() {
        this.refreshRadius();
        /** @type {?} */
        const menuWidth = 148 * 0.5;
        return this.props.radius < menuWidth ? (menuWidth - this.props.radius) : (this.props.radius - menuWidth);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    inactive($event) {
        this._activeCanvasService.changeActive(null);
    }
}
StampCanvasComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-stamp-canvas',
                template: "<div [clickOutsideEnabled]=\"active\" [clickOutsideEvents]=\"'mousedown'\"\n     (clickOutside)=\"inactive($event)\">\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\n    <div class=\"gd-context-menu\" *ngIf=\"active\"\n         [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + getTranslation() + 'px)'}\">\n      <gd-button name=\"button\" class=\"first-element\" [icon]=\"'fill-drip'\" (click)=\"toggleColorPicker($event, true)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\"\n                 (click)=\"toggleColorPicker($event, false)\" class=\"color-for-shape\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\n      <gd-button name=\"button\" class=\"stamp-trash\" [icon]=\"'trash'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\n      </gd-button>\n    </div>\n    <div class=\"csg-bounding-box\" [ngClass]=\"active ? 'active' : ''\" [style.width.px]=\"props.width\"\n         [style.height.px]=\"props.height\">\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\n                   (release)=\"redrawCanvas()\" *ngIf=\"active\"></gd-resizing>\n    </div>\n  </div>\n</div>\n",
                styles: [".gd-context-menu{display:-webkit-box;display:flex;height:37px;top:-40px;padding:0;background-color:#fff;cursor:default;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;box-shadow:rgba(0,0,0,.52) 0 0 5px}.gd-context-menu .icon{font-size:14px;cursor:pointer;color:#3e4e5a!important}.gd-context-menu ::ng-deep .dropdown-menu{top:-120px!important;height:120px;overflow-y:auto}.gd-context-menu ::ng-deep .icon-button{margin:0!important}.gd-stamp-box{position:absolute}.palette{position:absolute;top:-190px}.csg-preview{width:100%;height:100%}.csg-bounding-box{position:absolute;background-color:unset!important}.csg-bounding-box.active{border:1px solid #679ffa}.csg-border-width{width:37px!important;height:37px!important;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .select{min-width:unset!important}::ng-deep .selected-value{font-size:12px!important}@media (max-width:1037px){.gd-context-menu{position:fixed;bottom:0;left:0;top:unset;right:0;width:100%;height:60px;-webkit-box-align:center;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070}.gd-context-menu .color-for-shape{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.gd-context-menu .stamp-trash{-webkit-box-flex:0;flex:0 0 37px;margin-right:8px}.gd-context-menu ::ng-deep .button{margin:3px!important}.gd-context-menu ::ng-deep .select{margin:3px!important}.gd-context-menu .first-element{margin-left:8px}.csg-border-width .select{width:21px}}"]
            }] }
];
/** @nocollapse */
StampCanvasComponent.ctorParameters = () => [
    { type: ActiveCanvasService },
    { type: RemoveCanvasService },
    { type: OnCloseService },
    { type: WindowService }
];
StampCanvasComponent.propDecorators = {
    id: [{ type: Input }],
    theFirst: [{ type: Input }],
    active: [{ type: Input }],
    props: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    canvas: [{ type: ViewChild, args: ['canvas', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBTzVGLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFlL0IsWUFBb0Isb0JBQXlDLEVBQ3pDLGFBQWtDLEVBQ2xDLGVBQStCLEVBQy9CLGNBQTZCO1FBSDdCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVJqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQVFsQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBVSxFQUFFLEVBQUU7WUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO29CQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDMUI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sY0FBYzs7Y0FDZCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2NBQ3RDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNsRCxPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8saUJBQWlCOztjQUNqQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQzs7Y0FDeEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7O2NBQ3pCLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUs7O2NBQ3hELE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFROztjQUNoQyxJQUFJLEdBQUcsTUFBTTs7WUFDZixlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRTtRQUM5QyxJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQUU7WUFDdkIsZUFBZSxHQUFHLENBQUMsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7O2NBQ2hCLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztjQUM1QixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLFVBQVU7O2NBQ1YsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWU7O2NBQ3pHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDOztjQUN4QixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDOzs7OztJQUVNLGNBQWM7O2NBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7O2NBQ3hCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O2NBRXZGLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQzs7Y0FDNUQsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNyQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFTSxhQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0U7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQVc7UUFDbkMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLEVBQUUsRUFBRTtZQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxFQUFXLEVBQUUsTUFBTTtRQUM3QixJQUFJLEVBQUUsRUFBRTtZQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBTTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUYsQ0FBQzs7Ozs7SUFFTyxRQUFRO1FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQU07UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBTTtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBTTtRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOztjQUNmLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztJQUMzRyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFhO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBak5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixpdEVBQTRDOzthQUU3Qzs7OztZQVJPLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsY0FBYztZQUFFLGFBQWE7OztpQkFRbEMsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBR0wsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7Ozs7SUFSbkMsa0NBQW9COztJQUNwQix3Q0FBMkI7O0lBQzNCLHNDQUF5Qjs7SUFDekIscUNBQWlDOztJQUNqQyxxQ0FBdUI7O0lBQ3ZCLHNDQUF3Qjs7SUFFeEIsb0NBQStCOztJQUMvQixzQ0FBd0Q7O0lBQ3hELDZDQUFzQjs7SUFDdEIsNENBQXFCOztJQUNyQiwyQ0FBb0M7O0lBQ3BDLHdDQUFrQjs7Ozs7SUFFTixvREFBaUQ7Ozs7O0lBQ2pELDZDQUEwQzs7Ozs7SUFDMUMsK0NBQXVDOzs7OztJQUN2Qyw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Qm9yZGVyLCBTdGFtcENhbnZhc1Byb3BzfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtBY3RpdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLWNhbnZhcy5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuLi9yZW1vdmUtY2FudmFzLnNlcnZpY2VcIjtcbmltcG9ydCB7T25DbG9zZVNlcnZpY2UsIFdpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc3RhbXAtY2FudmFzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YW1wLWNhbnZhcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0YW1wLWNhbnZhcy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YW1wQ2FudmFzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcbiAgQElucHV0KCkgdGhlRmlyc3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvcHM6IFN0YW1wQ2FudmFzUHJvcHM7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuXG4gIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywge3N0YXRpYzogdHJ1ZX0pIGNhbnZhczogRWxlbWVudFJlZjtcbiAgY29sb3JQaWNrZXJCRyA9IGZhbHNlO1xuICBjb2xvclBpY2tlckMgPSBmYWxzZTtcbiAgYm9yZGVyV2lkdGggPSBCb3JkZXIud2lkdGhPcHRpb25zKCk7XG4gIGlzTW9iaWxlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2ZUNhbnZhc1NlcnZpY2U6IEFjdGl2ZUNhbnZhc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbW92ZUNhbnZhczogUmVtb3ZlQ2FudmFzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5vbkNsb3NlLnN1YnNjcmliZSgoYykgPT4ge1xuICAgICAgdGhpcy5jb2xvclBpY2tlckMgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChpZDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjdHgoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcbiAgICByZXR1cm4gdGhpcy5fY3R4O1xuICB9XG5cbiAgYWN0aXZhdGlvbigpIHtcbiAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmNoYW5nZUFjdGl2ZSh0aGlzLmlkKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2N0eCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xuICB9XG5cbiAgcmVkcmF3Q2FudmFzKCkge1xuICAgIHRoaXMucmVmcmVzaFJhZGl1cygpO1xuICAgIHRoaXMuZHJhd0NpcmNsZSgpO1xuICAgIGlmICh0aGlzLnByb3BzLnRleHQpIHtcbiAgICAgIGlmICh0aGlzLnRoZUZpcnN0KSB7XG4gICAgICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSB0aGlzLnByb3BzLnRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5fY3R4LmZvbnQgPSB0aGlzLmZvbnREZWNvcmF0aW9uKCkgKyBcIiBcIiArIHRoaXMucHJvcHMuZm9udFNpemUgKyAncHggJyArIHRoaXMucHJvcHMuZm9udDtcbiAgICAgICAgdGhpcy5fY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICB0aGlzLl9jdHguZmlsbFRleHQodGhpcy5wcm9wcy50ZXh0LCB0aGlzLnByb3BzLndpZHRoIC8gMiwgdGhpcy5wcm9wcy5oZWlnaHQgLyAyICsgdGhpcy5wcm9wcy5mb250U2l6ZSAvIDIpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy51bmRlcmxpbmUpIHtcbiAgICAgICAgICB0aGlzLm1ha2VUZXh0VW5kZXJsaW5lKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhd1RleHRDaXJjbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvbnREZWNvcmF0aW9uKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYm9sZCA9ICh0aGlzLnByb3BzLmJvbGQpID8gXCJib2xkXCIgOiBcIlwiO1xuICAgIGNvbnN0IGl0YWxpYyA9ICh0aGlzLnByb3BzLml0YWxpYykgPyBcIml0YWxpY1wiIDogXCJcIjtcbiAgICByZXR1cm4gYm9sZCArIFwiIFwiICsgaXRhbGljO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlVGV4dFVuZGVybGluZSgpIHtcbiAgICBjb25zdCB4ID0gdGhpcy5wcm9wcy53aWR0aCAvIDI7XG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMjtcbiAgICBjb25zdCB0ZXh0V2lkdGggPSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGhpcy5wcm9wcy50ZXh0KS53aWR0aDtcbiAgICBjb25zdCBzdGFydFkgPSB5ICsgdGhpcy5wcm9wcy5mb250U2l6ZTtcbiAgICBjb25zdCBlbmRZID0gc3RhcnRZO1xuICAgIGxldCB1bmRlcmxpbmVIZWlnaHQgPSB0aGlzLnByb3BzLmZvbnRTaXplIC8gMTU7XG4gICAgaWYgKHVuZGVybGluZUhlaWdodCA8IDEpIHtcbiAgICAgIHVuZGVybGluZUhlaWdodCA9IDE7XG4gICAgfVxuICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBzdGFydFggPSB4IC0gKHRleHRXaWR0aCAvIDIpO1xuICAgIGNvbnN0IGVuZFggPSB4ICsgKHRleHRXaWR0aCAvIDIpO1xuICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9IHRoaXMucHJvcHMudGV4dENvbG9yO1xuICAgIHRoaXMuX2N0eC5saW5lV2lkdGggPSB1bmRlcmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5fY3R4Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XG4gICAgdGhpcy5fY3R4LmxpbmVUbyhlbmRYLCBlbmRZKTtcbiAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgdGhpcy5fY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3Q2lyY2xlKCkge1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9ICh0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvciA9PT0gXCJcIikgPyBcInJnYigyNTUsIDI1NSwgMjU1KVwiIDogdGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmhlaWdodCAvIDI7XG4gICAgdGhpcy5fY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuX2N0eC5hcmMoeCwgeSwgdGhpcy5wcm9wcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICB0aGlzLl9jdHgubGluZVdpZHRoID0gdGhpcy5wcm9wcy5zdHJva2VXaWR0aDtcbiAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnByb3BzLnN0cm9rZUNvbG9yO1xuICAgIHRoaXMuX2N0eC5zdHJva2UoKTtcbiAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuICAgIHRoaXMuX2N0eC5maWxsKCk7XG4gICAgdGhpcy5fY3R4LmNsb3NlUGF0aCgpO1xuICB9O1xuXG4gIHByaXZhdGUgZHJhd1RleHRDaXJjbGUoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmhlaWdodCAvIDI7XG4gICAgdGhpcy5fY3R4LnNhdmUoKTtcbiAgICB0aGlzLl9jdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgIHRoaXMuX2N0eC5yb3RhdGUoTWF0aC5QSSAvIDIpO1xuICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSB0aGlzLnByb3BzLnRleHRDb2xvcjtcbiAgICB0aGlzLl9jdHguZm9udCA9IHRoaXMuZm9udERlY29yYXRpb24oKSArIFwiIFwiICsgdGhpcy5wcm9wcy5mb250U2l6ZSArICdweCAnICsgdGhpcy5wcm9wcy5mb250O1xuXG4gICAgY29uc3QgbnVtID0gdGhpcy5wcm9wcy50ZXh0RXhwYW5zaW9uICsgKHRoaXMucHJvcHMuZm9udFNpemUgLyAxMDApO1xuICAgIGNvbnN0IHJhZCA9IHRoaXMucHJvcHMucmFkaXVzIC0gKHRoaXMucHJvcHMuZm9udFNpemUgLyAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMudGV4dFJlcGVhdDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMudGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLl9jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLl9jdHgucm90YXRlKGogKiBudW0gKyBudW0gKiB0aGlzLnByb3BzLnRleHQubGVuZ3RoICogaSk7XG4gICAgICAgIHRoaXMuX2N0eC5maWxsVGV4dCh0aGlzLnByb3BzLnRleHRbal0sIDAsIC0ocmFkKSk7XG4gICAgICAgIHRoaXMuX2N0eC5yZXN0b3JlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2N0eC5yZXN0b3JlKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWZyZXNoUmFkaXVzKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnN0cm9rZVdpZHRoID4gMSkge1xuICAgICAgdGhpcy5wcm9wcy5yYWRpdXMgPSAodGhpcy5wcm9wcy53aWR0aCAvIDIpIC0gKHRoaXMucHJvcHMuc3Ryb2tlV2lkdGggLyAyKSAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucmFkaXVzID0gKHRoaXMucHJvcHMud2lkdGggLyAyKSAtIDE7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50LCBiZzogYm9vbGVhbikge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoYmcpIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9ICF0aGlzLmNvbG9yUGlja2VyQkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gIXRoaXMuY29sb3JQaWNrZXJDO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdENvbG9yKGJnOiBib29sZWFuLCAkZXZlbnQpIHtcbiAgICBpZiAoYmcpIHtcbiAgICAgIHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yID0gJGV2ZW50O1xuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuc3Ryb2tlQ29sb3IgPSAkZXZlbnQ7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xuICB9XG5cbiAgc2VsZWN0Qm9yZGVyV2lkdGgoJGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5zdHJva2VXaWR0aCA9ICRldmVudC52YWx1ZTtcbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xuICB9XG5cbiAgZGVsZXRlQ2FudmFzKCkge1xuICAgIHRoaXMuX3JlbW92ZUNhbnZhcy5yZW1vdmUodGhpcy5pZCk7XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuICh0aGlzLndpZHRoIC0gdGhpcy5wcm9wcy53aWR0aCkgLyAyO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiAodGhpcy5oZWlnaHQgLSAodGhpcy5pc01vYmlsZSA/IDYyIDogMCkgLSB0aGlzLnByb3BzLmhlaWdodCkgLyAyIC0gdGhpcy5jYWxjRGlmZigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjRGlmZigpIHtcbiAgICByZXR1cm4gKHRoaXMuYWN0aXZlICYmICF0aGlzLmlzTW9iaWxlKSA/IDM3IDogMDtcbiAgfVxuXG4gIHJlc2l6ZSgkZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLndpZHRoICs9ICRldmVudDtcbiAgICB0aGlzLnByb3BzLmhlaWdodCArPSAkZXZlbnQ7XG4gIH1cblxuICBjbG9zZUNvbG9yUGlja2VyQkcoJGV2ZW50KSB7XG4gICAgdGhpcy5jb2xvclBpY2tlckJHID0gISRldmVudDtcbiAgfVxuXG4gIGNsb3NlQ29sb3JQaWNrZXJDKCRldmVudCkge1xuICAgIHRoaXMuY29sb3JQaWNrZXJDID0gISRldmVudDtcbiAgfVxuXG4gIGdldFRyYW5zbGF0aW9uKCkge1xuICAgIHRoaXMucmVmcmVzaFJhZGl1cygpO1xuICAgIGNvbnN0IG1lbnVXaWR0aCA9IDE0OCAqIDAuNTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yYWRpdXMgPCBtZW51V2lkdGggPyAobWVudVdpZHRoIC0gdGhpcy5wcm9wcy5yYWRpdXMpIDogKHRoaXMucHJvcHMucmFkaXVzIC0gbWVudVdpZHRoKTtcbiAgfVxuXG4gIGluYWN0aXZlKCRldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmNoYW5nZUFjdGl2ZShudWxsKTtcbiAgfVxufVxuIl19