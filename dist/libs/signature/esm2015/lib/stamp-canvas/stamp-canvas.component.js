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
        return (this.active && !this.isMobile) ? 37 : this.isMobile ? -30 : 0;
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
                template: "<div [clickOutsideEnabled]=\"active\" [clickOutsideEvents]=\"'mousedown'\"\r\n     (clickOutside)=\"inactive($event)\">\r\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\r\n    <div class=\"gd-context-menu\" *ngIf=\"active\"\r\n         [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + getTranslation() + 'px)'}\">\r\n      <gd-button name=\"button\" class=\"first-element\" [icon]=\"'fill-drip'\" (click)=\"toggleColorPicker($event, true)\">\r\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\r\n      </gd-button>\r\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\r\n                       [className]=\"'palette'\"\r\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\r\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\r\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\r\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\"\r\n                 (click)=\"toggleColorPicker($event, false)\" class=\"color-for-shape\">\r\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\r\n      </gd-button>\r\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\r\n                       [className]=\"'palette'\"\r\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\r\n      <gd-button name=\"button\" class=\"stamp-trash\" [icon]=\"'trash'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\r\n      </gd-button>\r\n    </div>\r\n    <div class=\"csg-bounding-box\" [ngClass]=\"active ? 'active' : ''\" [style.width.px]=\"props.width\"\r\n         [style.height.px]=\"props.height\">\r\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\r\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\r\n                   (release)=\"redrawCanvas()\" *ngIf=\"active\"></gd-resizing>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBTzVGLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFlL0IsWUFBb0Isb0JBQXlDLEVBQ3pDLGFBQWtDLEVBQ2xDLGVBQStCLEVBQy9CLGNBQTZCO1FBSDdCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVJqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQVFsQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3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QXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Qm9yZGVyLCBTdGFtcENhbnZhc1Byb3BzfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xyXG5pbXBvcnQge0FjdGl2ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuLi9hY3RpdmUtY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZW1vdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi4vcmVtb3ZlLWNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T25DbG9zZVNlcnZpY2UsIFdpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2Qtc3RhbXAtY2FudmFzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3RhbXAtY2FudmFzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdGFtcC1jYW52YXMuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhbXBDYW52YXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgdGhlRmlyc3Q6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByb3BzOiBTdGFtcENhbnZhc1Byb3BzO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7c3RhdGljOiB0cnVlfSkgY2FudmFzOiBFbGVtZW50UmVmO1xyXG4gIGNvbG9yUGlja2VyQkcgPSBmYWxzZTtcclxuICBjb2xvclBpY2tlckMgPSBmYWxzZTtcclxuICBib3JkZXJXaWR0aCA9IEJvcmRlci53aWR0aE9wdGlvbnMoKTtcclxuICBpc01vYmlsZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZlQ2FudmFzU2VydmljZTogQWN0aXZlQ2FudmFzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVDYW52YXM6IFJlbW92ZUNhbnZhc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5vbkNsb3NlLnN1YnNjcmliZSgoYykgPT4ge1xyXG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuaWQgPT09IGlkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XHJcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBjdHgoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgIHJldHVybiB0aGlzLl9jdHg7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0aW9uKCkge1xyXG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N0eCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMucmVkcmF3Q2FudmFzKCk7XHJcbiAgfVxyXG5cclxuICByZWRyYXdDYW52YXMoKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hSYWRpdXMoKTtcclxuICAgIHRoaXMuZHJhd0NpcmNsZSgpO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudGV4dCkge1xyXG4gICAgICBpZiAodGhpcy50aGVGaXJzdCkge1xyXG4gICAgICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSB0aGlzLnByb3BzLnRleHRDb2xvcjtcclxuICAgICAgICB0aGlzLl9jdHguZm9udCA9IHRoaXMuZm9udERlY29yYXRpb24oKSArIFwiIFwiICsgdGhpcy5wcm9wcy5mb250U2l6ZSArICdweCAnICsgdGhpcy5wcm9wcy5mb250O1xyXG4gICAgICAgIHRoaXMuX2N0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICB0aGlzLl9jdHguZmlsbFRleHQodGhpcy5wcm9wcy50ZXh0LCB0aGlzLnByb3BzLndpZHRoIC8gMiwgdGhpcy5wcm9wcy5oZWlnaHQgLyAyICsgdGhpcy5wcm9wcy5mb250U2l6ZSAvIDIpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVuZGVybGluZSkge1xyXG4gICAgICAgICAgdGhpcy5tYWtlVGV4dFVuZGVybGluZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYXdUZXh0Q2lyY2xlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9udERlY29yYXRpb24oKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGJvbGQgPSAodGhpcy5wcm9wcy5ib2xkKSA/IFwiYm9sZFwiIDogXCJcIjtcclxuICAgIGNvbnN0IGl0YWxpYyA9ICh0aGlzLnByb3BzLml0YWxpYykgPyBcIml0YWxpY1wiIDogXCJcIjtcclxuICAgIHJldHVybiBib2xkICsgXCIgXCIgKyBpdGFsaWM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VUZXh0VW5kZXJsaW5lKCkge1xyXG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMud2lkdGggLyAyO1xyXG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMjtcclxuICAgIGNvbnN0IHRleHRXaWR0aCA9IHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0aGlzLnByb3BzLnRleHQpLndpZHRoO1xyXG4gICAgY29uc3Qgc3RhcnRZID0geSArIHRoaXMucHJvcHMuZm9udFNpemU7XHJcbiAgICBjb25zdCBlbmRZID0gc3RhcnRZO1xyXG4gICAgbGV0IHVuZGVybGluZUhlaWdodCA9IHRoaXMucHJvcHMuZm9udFNpemUgLyAxNTtcclxuICAgIGlmICh1bmRlcmxpbmVIZWlnaHQgPCAxKSB7XHJcbiAgICAgIHVuZGVybGluZUhlaWdodCA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjb25zdCBzdGFydFggPSB4IC0gKHRleHRXaWR0aCAvIDIpO1xyXG4gICAgY29uc3QgZW5kWCA9IHggKyAodGV4dFdpZHRoIC8gMik7XHJcbiAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnByb3BzLnRleHRDb2xvcjtcclxuICAgIHRoaXMuX2N0eC5saW5lV2lkdGggPSB1bmRlcmxpbmVIZWlnaHQ7XHJcbiAgICB0aGlzLl9jdHgubW92ZVRvKHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgIHRoaXMuX2N0eC5saW5lVG8oZW5kWCwgZW5kWSk7XHJcbiAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdDaXJjbGUoKSB7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSAodGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3IgPT09IFwiXCIpID8gXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIiA6IHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMud2lkdGggLyAyO1xyXG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMjtcclxuICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuX2N0eC5hcmMoeCwgeSwgdGhpcy5wcm9wcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIHRoaXMuX2N0eC5saW5lV2lkdGggPSB0aGlzLnByb3BzLnN0cm9rZVdpZHRoO1xyXG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wcm9wcy5zdHJva2VDb2xvcjtcclxuICAgIHRoaXMuX2N0eC5zdHJva2UoKTtcclxuICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLl9jdHguZmlsbCgpO1xyXG4gICAgdGhpcy5fY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZHJhd1RleHRDaXJjbGUoKSB7XHJcbiAgICBjb25zdCB4ID0gdGhpcy5wcm9wcy53aWR0aCAvIDI7XHJcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xyXG4gICAgdGhpcy5fY3R4LnNhdmUoKTtcclxuICAgIHRoaXMuX2N0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICB0aGlzLl9jdHgucm90YXRlKE1hdGguUEkgLyAyKTtcclxuICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSB0aGlzLnByb3BzLnRleHRDb2xvcjtcclxuICAgIHRoaXMuX2N0eC5mb250ID0gdGhpcy5mb250RGVjb3JhdGlvbigpICsgXCIgXCIgKyB0aGlzLnByb3BzLmZvbnRTaXplICsgJ3B4ICcgKyB0aGlzLnByb3BzLmZvbnQ7XHJcblxyXG4gICAgY29uc3QgbnVtID0gdGhpcy5wcm9wcy50ZXh0RXhwYW5zaW9uICsgKHRoaXMucHJvcHMuZm9udFNpemUgLyAxMDApO1xyXG4gICAgY29uc3QgcmFkID0gdGhpcy5wcm9wcy5yYWRpdXMgLSAodGhpcy5wcm9wcy5mb250U2l6ZSAvIDIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnRleHRSZXBlYXQ7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMudGV4dC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHRoaXMuX2N0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5fY3R4LnJvdGF0ZShqICogbnVtICsgbnVtICogdGhpcy5wcm9wcy50ZXh0Lmxlbmd0aCAqIGkpO1xyXG4gICAgICAgIHRoaXMuX2N0eC5maWxsVGV4dCh0aGlzLnByb3BzLnRleHRbal0sIDAsIC0ocmFkKSk7XHJcbiAgICAgICAgdGhpcy5fY3R4LnJlc3RvcmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fY3R4LnJlc3RvcmUoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlZnJlc2hSYWRpdXMoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdHJva2VXaWR0aCA+IDEpIHtcclxuICAgICAgdGhpcy5wcm9wcy5yYWRpdXMgPSAodGhpcy5wcm9wcy53aWR0aCAvIDIpIC0gKHRoaXMucHJvcHMuc3Ryb2tlV2lkdGggLyAyKSAtIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyA9ICh0aGlzLnByb3BzLndpZHRoIC8gMikgLSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50LCBiZzogYm9vbGVhbikge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoYmcpIHtcclxuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gIXRoaXMuY29sb3JQaWNrZXJCRztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gIXRoaXMuY29sb3JQaWNrZXJDO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q29sb3IoYmc6IGJvb2xlYW4sICRldmVudCkge1xyXG4gICAgaWYgKGJnKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yID0gJGV2ZW50O1xyXG4gICAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuc3Ryb2tlQ29sb3IgPSAkZXZlbnQ7XHJcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Qm9yZGVyV2lkdGgoJGV2ZW50KSB7XHJcbiAgICB0aGlzLnByb3BzLnN0cm9rZVdpZHRoID0gJGV2ZW50LnZhbHVlO1xyXG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhbnZhcygpIHtcclxuICAgIHRoaXMuX3JlbW92ZUNhbnZhcy5yZW1vdmUodGhpcy5pZCk7XHJcbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGVmdCgpIHtcclxuICAgIHJldHVybiAodGhpcy53aWR0aCAtIHRoaXMucHJvcHMud2lkdGgpIC8gMjtcclxuICB9XHJcblxyXG4gIGdldFRvcCgpIHtcclxuICAgIHJldHVybiAodGhpcy5oZWlnaHQgLSAodGhpcy5pc01vYmlsZSA/IDYyIDogMCkgLSB0aGlzLnByb3BzLmhlaWdodCkgLyAyIC0gdGhpcy5jYWxjRGlmZigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjRGlmZigpIHtcclxuICAgIHJldHVybiAodGhpcy5hY3RpdmUgJiYgIXRoaXMuaXNNb2JpbGUpID8gMzcgOiB0aGlzLmlzTW9iaWxlID8gLTMwIDogMDtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgkZXZlbnQpIHtcclxuICAgIHRoaXMucHJvcHMud2lkdGggKz0gJGV2ZW50O1xyXG4gICAgdGhpcy5wcm9wcy5oZWlnaHQgKz0gJGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgY2xvc2VDb2xvclBpY2tlckJHKCRldmVudCkge1xyXG4gICAgdGhpcy5jb2xvclBpY2tlckJHID0gISRldmVudDtcclxuICB9XHJcblxyXG4gIGNsb3NlQ29sb3JQaWNrZXJDKCRldmVudCkge1xyXG4gICAgdGhpcy5jb2xvclBpY2tlckMgPSAhJGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhbnNsYXRpb24oKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hSYWRpdXMoKTtcclxuICAgIGNvbnN0IG1lbnVXaWR0aCA9IDE0OCAqIDAuNTtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnJhZGl1cyA8IG1lbnVXaWR0aCA/IChtZW51V2lkdGggLSB0aGlzLnByb3BzLnJhZGl1cykgOiAodGhpcy5wcm9wcy5yYWRpdXMgLSBtZW51V2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgaW5hY3RpdmUoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==