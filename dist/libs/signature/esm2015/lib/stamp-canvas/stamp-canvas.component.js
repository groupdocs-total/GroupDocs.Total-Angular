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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBTzVGLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFlL0IsWUFBb0Isb0JBQXlDLEVBQ3pDLGFBQWtDLEVBQ2xDLGVBQStCLEVBQy9CLGNBQTZCO1FBSDdCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVJqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQVFsQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3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QXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JvcmRlciwgU3RhbXBDYW52YXNQcm9wc30gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7QWN0aXZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4uL2FjdGl2ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi4vcmVtb3ZlLWNhbnZhcy5zZXJ2aWNlXCI7XG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlLCBXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXN0YW1wLWNhbnZhcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFtcC1jYW52YXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGFtcC1jYW52YXMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFtcENhbnZhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRoZUZpcnN0OiBib29sZWFuO1xuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb3BzOiBTdGFtcENhbnZhc1Byb3BzO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcblxuICBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHtzdGF0aWM6IHRydWV9KSBjYW52YXM6IEVsZW1lbnRSZWY7XG4gIGNvbG9yUGlja2VyQkcgPSBmYWxzZTtcbiAgY29sb3JQaWNrZXJDID0gZmFsc2U7XG4gIGJvcmRlcldpZHRoID0gQm9yZGVyLndpZHRoT3B0aW9ucygpO1xuICBpc01vYmlsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmVDYW52YXNTZXJ2aWNlOiBBY3RpdmVDYW52YXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW1vdmVDYW52YXM6IFJlbW92ZUNhbnZhc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuXG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2Uub25DbG9zZS5zdWJzY3JpYmUoKGMpID0+IHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmlkID09PSBpZDtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY3R4KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIHRoaXMuX2N0eDtcbiAgfVxuXG4gIGFjdGl2YXRpb24oKSB7XG4gICAgdGhpcy5fYWN0aXZlQ2FudmFzU2VydmljZS5jaGFuZ2VBY3RpdmUodGhpcy5pZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdHggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIHJlZHJhd0NhbnZhcygpIHtcbiAgICB0aGlzLnJlZnJlc2hSYWRpdXMoKTtcbiAgICB0aGlzLmRyYXdDaXJjbGUoKTtcbiAgICBpZiAodGhpcy5wcm9wcy50ZXh0KSB7XG4gICAgICBpZiAodGhpcy50aGVGaXJzdCkge1xuICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XG4gICAgICAgIHRoaXMuX2N0eC5mb250ID0gdGhpcy5mb250RGVjb3JhdGlvbigpICsgXCIgXCIgKyB0aGlzLnByb3BzLmZvbnRTaXplICsgJ3B4ICcgKyB0aGlzLnByb3BzLmZvbnQ7XG4gICAgICAgIHRoaXMuX2N0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KHRoaXMucHJvcHMudGV4dCwgdGhpcy5wcm9wcy53aWR0aCAvIDIsIHRoaXMucHJvcHMuaGVpZ2h0IC8gMiArIHRoaXMucHJvcHMuZm9udFNpemUgLyAyKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudW5kZXJsaW5lKSB7XG4gICAgICAgICAgdGhpcy5tYWtlVGV4dFVuZGVybGluZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdUZXh0Q2lyY2xlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb250RGVjb3JhdGlvbigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJvbGQgPSAodGhpcy5wcm9wcy5ib2xkKSA/IFwiYm9sZFwiIDogXCJcIjtcbiAgICBjb25zdCBpdGFsaWMgPSAodGhpcy5wcm9wcy5pdGFsaWMpID8gXCJpdGFsaWNcIiA6IFwiXCI7XG4gICAgcmV0dXJuIGJvbGQgKyBcIiBcIiArIGl0YWxpYztcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVRleHRVbmRlcmxpbmUoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmhlaWdodCAvIDI7XG4gICAgY29uc3QgdGV4dFdpZHRoID0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRoaXMucHJvcHMudGV4dCkud2lkdGg7XG4gICAgY29uc3Qgc3RhcnRZID0geSArIHRoaXMucHJvcHMuZm9udFNpemU7XG4gICAgY29uc3QgZW5kWSA9IHN0YXJ0WTtcbiAgICBsZXQgdW5kZXJsaW5lSGVpZ2h0ID0gdGhpcy5wcm9wcy5mb250U2l6ZSAvIDE1O1xuICAgIGlmICh1bmRlcmxpbmVIZWlnaHQgPCAxKSB7XG4gICAgICB1bmRlcmxpbmVIZWlnaHQgPSAxO1xuICAgIH1cbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG4gICAgY29uc3Qgc3RhcnRYID0geCAtICh0ZXh0V2lkdGggLyAyKTtcbiAgICBjb25zdCBlbmRYID0geCArICh0ZXh0V2lkdGggLyAyKTtcbiAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnByb3BzLnRleHRDb2xvcjtcbiAgICB0aGlzLl9jdHgubGluZVdpZHRoID0gdW5kZXJsaW5lSGVpZ2h0O1xuICAgIHRoaXMuX2N0eC5tb3ZlVG8oc3RhcnRYLCBzdGFydFkpO1xuICAgIHRoaXMuX2N0eC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgIHRoaXMuX2N0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0NpcmNsZSgpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSAodGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3IgPT09IFwiXCIpID8gXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIiA6IHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9jdHguYXJjKHgsIHksIHRoaXMucHJvcHMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgdGhpcy5fY3R4LmxpbmVXaWR0aCA9IHRoaXMucHJvcHMuc3Ryb2tlV2lkdGg7XG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wcm9wcy5zdHJva2VDb2xvcjtcbiAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl9jdHguZmlsbCgpO1xuICAgIHRoaXMuX2N0eC5jbG9zZVBhdGgoKTtcbiAgfTtcblxuICBwcml2YXRlIGRyYXdUZXh0Q2lyY2xlKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuX2N0eC5zYXZlKCk7XG4gICAgdGhpcy5fY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICB0aGlzLl9jdHgucm90YXRlKE1hdGguUEkgLyAyKTtcbiAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XG4gICAgdGhpcy5fY3R4LmZvbnQgPSB0aGlzLmZvbnREZWNvcmF0aW9uKCkgKyBcIiBcIiArIHRoaXMucHJvcHMuZm9udFNpemUgKyAncHggJyArIHRoaXMucHJvcHMuZm9udDtcblxuICAgIGNvbnN0IG51bSA9IHRoaXMucHJvcHMudGV4dEV4cGFuc2lvbiArICh0aGlzLnByb3BzLmZvbnRTaXplIC8gMTAwKTtcbiAgICBjb25zdCByYWQgPSB0aGlzLnByb3BzLnJhZGl1cyAtICh0aGlzLnByb3BzLmZvbnRTaXplIC8gMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnRleHRSZXBlYXQ7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BzLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy5fY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5fY3R4LnJvdGF0ZShqICogbnVtICsgbnVtICogdGhpcy5wcm9wcy50ZXh0Lmxlbmd0aCAqIGkpO1xuICAgICAgICB0aGlzLl9jdHguZmlsbFRleHQodGhpcy5wcm9wcy50ZXh0W2pdLCAwLCAtKHJhZCkpO1xuICAgICAgICB0aGlzLl9jdHgucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jdHgucmVzdG9yZSgpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVmcmVzaFJhZGl1cygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zdHJva2VXaWR0aCA+IDEpIHtcbiAgICAgIHRoaXMucHJvcHMucmFkaXVzID0gKHRoaXMucHJvcHMud2lkdGggLyAyKSAtICh0aGlzLnByb3BzLnN0cm9rZVdpZHRoIC8gMikgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyA9ICh0aGlzLnByb3BzLndpZHRoIC8gMikgLSAxO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNvbG9yUGlja2VyKCRldmVudCwgYmc6IGJvb2xlYW4pIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGJnKSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSAhdGhpcy5jb2xvclBpY2tlckJHO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9ICF0aGlzLmNvbG9yUGlja2VyQztcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDb2xvcihiZzogYm9vbGVhbiwgJGV2ZW50KSB7XG4gICAgaWYgKGJnKSB7XG4gICAgICB0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvciA9ICRldmVudDtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnN0cm9rZUNvbG9yID0gJGV2ZW50O1xuICAgICAgdGhpcy5jb2xvclBpY2tlckMgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIHNlbGVjdEJvcmRlcldpZHRoKCRldmVudCkge1xuICAgIHRoaXMucHJvcHMuc3Ryb2tlV2lkdGggPSAkZXZlbnQudmFsdWU7XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIGRlbGV0ZUNhbnZhcygpIHtcbiAgICB0aGlzLl9yZW1vdmVDYW52YXMucmVtb3ZlKHRoaXMuaWQpO1xuICAgIHRoaXMucmVkcmF3Q2FudmFzKCk7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiAodGhpcy53aWR0aCAtIHRoaXMucHJvcHMud2lkdGgpIC8gMjtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gKHRoaXMuaGVpZ2h0IC0gKHRoaXMuaXNNb2JpbGUgPyA2MiA6IDApIC0gdGhpcy5wcm9wcy5oZWlnaHQpIC8gMiAtIHRoaXMuY2FsY0RpZmYoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY0RpZmYoKSB7XG4gICAgcmV0dXJuICh0aGlzLmFjdGl2ZSAmJiAhdGhpcy5pc01vYmlsZSkgPyAzNyA6IHRoaXMuaXNNb2JpbGUgPyAtMzAgOiAwO1xuICB9XG5cbiAgcmVzaXplKCRldmVudCkge1xuICAgIHRoaXMucHJvcHMud2lkdGggKz0gJGV2ZW50O1xuICAgIHRoaXMucHJvcHMuaGVpZ2h0ICs9ICRldmVudDtcbiAgfVxuXG4gIGNsb3NlQ29sb3JQaWNrZXJCRygkZXZlbnQpIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSAhJGV2ZW50O1xuICB9XG5cbiAgY2xvc2VDb2xvclBpY2tlckMoJGV2ZW50KSB7XG4gICAgdGhpcy5jb2xvclBpY2tlckMgPSAhJGV2ZW50O1xuICB9XG5cbiAgZ2V0VHJhbnNsYXRpb24oKSB7XG4gICAgdGhpcy5yZWZyZXNoUmFkaXVzKCk7XG4gICAgY29uc3QgbWVudVdpZHRoID0gMTQ4ICogMC41O1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJhZGl1cyA8IG1lbnVXaWR0aCA/IChtZW51V2lkdGggLSB0aGlzLnByb3BzLnJhZGl1cykgOiAodGhpcy5wcm9wcy5yYWRpdXMgLSBtZW51V2lkdGgpO1xuICB9XG5cbiAgaW5hY3RpdmUoJGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuY2hhbmdlQWN0aXZlKG51bGwpO1xuICB9XG59XG4iXX0=