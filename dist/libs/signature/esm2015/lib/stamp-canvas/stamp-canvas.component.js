/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Border, StampCanvasProps } from "../signature-models";
import { ActiveCanvasService } from "../active-canvas.service";
import { RemoveCanvasService } from "../remove-canvas.service";
import { OnCloseService } from "@groupdocs.examples.angular/common-components";
export class StampCanvasComponent {
    /**
     * @param {?} _activeCanvasService
     * @param {?} _removeCanvas
     * @param {?} _onCloseService
     */
    constructor(_activeCanvasService, _removeCanvas, _onCloseService) {
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
        (c) => {
            this.colorPickerC = false;
            this.colorPickerBG = false;
        }));
        this._activeCanvasService.activeChange.subscribe((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            if (this.id === id) {
                this.active = true;
            }
            else {
                this.active = false;
            }
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
            this.props.radius = (this.props.width / 2) - (this.props.strokeWidth / 2);
        }
        else {
            this.props.radius = (this.props.width / 2);
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
        return ((this.height - this.props.height) / 2 - (this.active ? 34 : 0));
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
}
StampCanvasComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-stamp-canvas',
                template: "<div>\n  <div class=\"gd-stamp-box\" [style.left.px]=\"getLeft()\" [style.top.px]=\"getTop()\" [style.z-index]=\"props.zIndex\">\n    <div class=\"gd-context-menu\" *ngIf=\"active\">\n      <gd-button name=\"button\" [icon]=\"'fill-drip'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker($event, true)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.backgroundColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerBG\" (closeOutside)=\"closeColorPickerBG($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(true, $event)\"></gd-color-picker>\n      <gd-select class=\"csg-border-width\" [options]=\"borderWidth\" (selected)=\"selectBorderWidth($event)\"\n                 [showSelected]=\"{name: props.strokeWidth + 'px', value: props.strokeWidth}\"></gd-select>\n      <gd-button name=\"button\" [icon]=\"'square'\" [iconRegular]=\"true\" [tooltip]=\"'Color'\"\n                 (click)=\"toggleColorPicker($event, false)\">\n        <div class=\"bg-color-pic\" [style.background-color]=\"props.strokeColor\"></div>\n      </gd-button>\n      <gd-color-picker [isOpen]=\"colorPickerC\" (closeOutside)=\"closeColorPickerC($event)\"\n                       [className]=\"'palette'\"\n                       (selectedColor)=\"selectColor(false, $event)\"></gd-color-picker>\n      <gd-button name=\"button\" [icon]=\"'trash'\" [tooltip]=\"'Delete'\" [iconSize]=\"'sm'\" (click)=\"deleteCanvas()\">\n      </gd-button>\n    </div>\n    <div class=\"csg-bounding-box\" [style.width.px]=\"props.width\" [style.height.px]=\"props.height\">\n      <canvas #canvas (click)=\"activation()\" class=\"csg-preview\" [width]=\"props.width\" [height]=\"props.height\"></canvas>\n      <gd-resizing [init]=\"false\" [id]=\"999\" (offsetX)=\"resize($event)\" [se]=\"true\"\n                   (release)=\"redrawCanvas()\"></gd-resizing>\n    </div>\n  </div>\n</div>\n",
                styles: [".gd-context-menu{display:flex;height:37px;top:-40px;padding:0;background-color:#fff;cursor:default;flex-direction:row}.gd-context-menu .icon{font-size:14px;cursor:pointer;color:#3e4e5a!important}.gd-context-menu ::ng-deep .dropdown-menu{top:-120px!important;height:120px;overflow-y:auto}.gd-context-menu ::ng-deep .icon-button{margin:0!important}.gd-stamp-box{position:absolute}.palette{position:absolute;top:-190px}.csg-preview{width:100%;height:100%}.csg-bounding-box{border:1px solid #679ffa;position:absolute}.csg-border-width{width:37px!important;height:37px!important;display:flex;justify-content:center;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .select{min-width:unset!important}::ng-deep .selected-value{font-size:12px!important}@media (max-width:1037px){.gd-context-menu{top:-37px;margin:auto}.csg-border-width{width:18px!important;height:16px!important;margin-left:8px}.csg-border-width .select{width:21px}}"]
            }] }
];
/** @nocollapse */
StampCanvasComponent.ctorParameters = () => [
    { type: ActiveCanvasService },
    { type: RemoveCanvasService },
    { type: OnCloseService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbXAtY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFPN0UsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBYy9CLFlBQW9CLG9CQUF5QyxFQUN6QyxhQUFrQyxFQUNsQyxlQUErQjtRQUYvQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFObkQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFNbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxD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QyxxQ0FBdUI7O0lBQ3ZCLHNDQUF3Qjs7SUFFeEIsb0NBQStCOztJQUMvQixzQ0FBd0Q7O0lBQ3hELDZDQUFzQjs7SUFDdEIsNENBQXFCOztJQUNyQiwyQ0FBb0M7Ozs7O0lBRXhCLG9EQUFpRDs7Ozs7SUFDakQsNkNBQTBDOzs7OztJQUMxQywrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Qm9yZGVyLCBTdGFtcENhbnZhc1Byb3BzfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtBY3RpdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi4vYWN0aXZlLWNhbnZhcy5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuLi9yZW1vdmUtY2FudmFzLnNlcnZpY2VcIjtcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc3RhbXAtY2FudmFzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YW1wLWNhbnZhcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0YW1wLWNhbnZhcy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YW1wQ2FudmFzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcbiAgQElucHV0KCkgdGhlRmlyc3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvcHM6IFN0YW1wQ2FudmFzUHJvcHM7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuXG4gIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywge3N0YXRpYzogdHJ1ZX0pIGNhbnZhczogRWxlbWVudFJlZjtcbiAgY29sb3JQaWNrZXJCRyA9IGZhbHNlO1xuICBjb2xvclBpY2tlckMgPSBmYWxzZTtcbiAgYm9yZGVyV2lkdGggPSBCb3JkZXIud2lkdGhPcHRpb25zKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZlQ2FudmFzU2VydmljZTogQWN0aXZlQ2FudmFzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVtb3ZlQ2FudmFzOiBSZW1vdmVDYW52YXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UpIHtcblxuICAgIHRoaXMuX29uQ2xvc2VTZXJ2aWNlLm9uQ2xvc2Uuc3Vic2NyaWJlKChjKSA9PiB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9hY3RpdmVDYW52YXNTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGN0eCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgIHJldHVybiB0aGlzLl9jdHg7XG4gIH1cblxuICBhY3RpdmF0aW9uKCkge1xuICAgIHRoaXMuX2FjdGl2ZUNhbnZhc1NlcnZpY2UuY2hhbmdlQWN0aXZlKHRoaXMuaWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY3R4ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMucmVkcmF3Q2FudmFzKCk7XG4gIH1cblxuICByZWRyYXdDYW52YXMoKSB7XG4gICAgdGhpcy5yZWZyZXNoUmFkaXVzKCk7XG4gICAgdGhpcy5kcmF3Q2lyY2xlKCk7XG4gICAgaWYgKHRoaXMucHJvcHMudGV4dCkge1xuICAgICAgaWYgKHRoaXMudGhlRmlyc3QpIHtcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvcHMudGV4dENvbG9yO1xuICAgICAgICB0aGlzLl9jdHguZm9udCA9IHRoaXMuZm9udERlY29yYXRpb24oKSArIFwiIFwiICsgdGhpcy5wcm9wcy5mb250U2l6ZSArICdweCAnICsgdGhpcy5wcm9wcy5mb250O1xuICAgICAgICB0aGlzLl9jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMuX2N0eC5maWxsVGV4dCh0aGlzLnByb3BzLnRleHQsIHRoaXMucHJvcHMud2lkdGggLyAyLCB0aGlzLnByb3BzLmhlaWdodCAvIDIgKyB0aGlzLnByb3BzLmZvbnRTaXplIC8gMik7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVuZGVybGluZSkge1xuICAgICAgICAgIHRoaXMubWFrZVRleHRVbmRlcmxpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3VGV4dENpcmNsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9udERlY29yYXRpb24oKTogc3RyaW5nIHtcbiAgICBjb25zdCBib2xkID0gKHRoaXMucHJvcHMuYm9sZCkgPyBcImJvbGRcIiA6IFwiXCI7XG4gICAgY29uc3QgaXRhbGljID0gKHRoaXMucHJvcHMuaXRhbGljKSA/IFwiaXRhbGljXCIgOiBcIlwiO1xuICAgIHJldHVybiBib2xkICsgXCIgXCIgKyBpdGFsaWM7XG4gIH1cblxuICBwcml2YXRlIG1ha2VUZXh0VW5kZXJsaW5lKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyO1xuICAgIGNvbnN0IHRleHRXaWR0aCA9IHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0aGlzLnByb3BzLnRleHQpLndpZHRoO1xuICAgIGNvbnN0IHN0YXJ0WSA9IHkgKyB0aGlzLnByb3BzLmZvbnRTaXplO1xuICAgIGNvbnN0IGVuZFkgPSBzdGFydFk7XG4gICAgbGV0IHVuZGVybGluZUhlaWdodCA9IHRoaXMucHJvcHMuZm9udFNpemUgLyAxNTtcbiAgICBpZiAodW5kZXJsaW5lSGVpZ2h0IDwgMSkge1xuICAgICAgdW5kZXJsaW5lSGVpZ2h0ID0gMTtcbiAgICB9XG4gICAgdGhpcy5fY3R4LmJlZ2luUGF0aCgpO1xuICAgIGNvbnN0IHN0YXJ0WCA9IHggLSAodGV4dFdpZHRoIC8gMik7XG4gICAgY29uc3QgZW5kWCA9IHggKyAodGV4dFdpZHRoIC8gMik7XG4gICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wcm9wcy50ZXh0Q29sb3I7XG4gICAgdGhpcy5fY3R4LmxpbmVXaWR0aCA9IHVuZGVybGluZUhlaWdodDtcbiAgICB0aGlzLl9jdHgubW92ZVRvKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICB0aGlzLl9jdHgubGluZVRvKGVuZFgsIGVuZFkpO1xuICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdDaXJjbGUoKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gKHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yID09PSBcIlwiKSA/IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIgOiB0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvcjtcbiAgICBjb25zdCB4ID0gdGhpcy5wcm9wcy53aWR0aCAvIDI7XG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fY3R4LmFyYyh4LCB5LCB0aGlzLnByb3BzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIHRoaXMuX2N0eC5saW5lV2lkdGggPSB0aGlzLnByb3BzLnN0cm9rZVdpZHRoO1xuICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9IHRoaXMucHJvcHMuc3Ryb2tlQ29sb3I7XG4gICAgdGhpcy5fY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5fY3R4LmZpbGwoKTtcbiAgICB0aGlzLl9jdHguY2xvc2VQYXRoKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBkcmF3VGV4dENpcmNsZSgpIHtcbiAgICBjb25zdCB4ID0gdGhpcy5wcm9wcy53aWR0aCAvIDI7XG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLl9jdHguc2F2ZSgpO1xuICAgIHRoaXMuX2N0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgdGhpcy5fY3R4LnJvdGF0ZShNYXRoLlBJIC8gMik7XG4gICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvcHMudGV4dENvbG9yO1xuICAgIHRoaXMuX2N0eC5mb250ID0gdGhpcy5mb250RGVjb3JhdGlvbigpICsgXCIgXCIgKyB0aGlzLnByb3BzLmZvbnRTaXplICsgJ3B4ICcgKyB0aGlzLnByb3BzLmZvbnQ7XG5cbiAgICBjb25zdCBudW0gPSB0aGlzLnByb3BzLnRleHRFeHBhbnNpb24gKyAodGhpcy5wcm9wcy5mb250U2l6ZSAvIDEwMCk7XG4gICAgY29uc3QgcmFkID0gdGhpcy5wcm9wcy5yYWRpdXMgLSAodGhpcy5wcm9wcy5mb250U2l6ZSAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy50ZXh0UmVwZWF0OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMuX2N0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuX2N0eC5yb3RhdGUoaiAqIG51bSArIG51bSAqIHRoaXMucHJvcHMudGV4dC5sZW5ndGggKiBpKTtcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KHRoaXMucHJvcHMudGV4dFtqXSwgMCwgLShyYWQpKTtcbiAgICAgICAgdGhpcy5fY3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBwcml2YXRlIHJlZnJlc2hSYWRpdXMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc3Ryb2tlV2lkdGggPiAxKSB7XG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyA9ICh0aGlzLnByb3BzLndpZHRoIC8gMikgLSAodGhpcy5wcm9wcy5zdHJva2VXaWR0aCAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyA9ICh0aGlzLnByb3BzLndpZHRoIC8gMik7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50LCBiZzogYm9vbGVhbikge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoYmcpIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJCRyA9ICF0aGlzLmNvbG9yUGlja2VyQkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDID0gIXRoaXMuY29sb3JQaWNrZXJDO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdENvbG9yKGJnOiBib29sZWFuLCAkZXZlbnQpIHtcbiAgICBpZiAoYmcpIHtcbiAgICAgIHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG9yID0gJGV2ZW50O1xuICAgICAgdGhpcy5jb2xvclBpY2tlckJHID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuc3Ryb2tlQ29sb3IgPSAkZXZlbnQ7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xuICB9XG5cbiAgc2VsZWN0Qm9yZGVyV2lkdGgoJGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5zdHJva2VXaWR0aCA9ICRldmVudC52YWx1ZTtcbiAgICB0aGlzLnJlZHJhd0NhbnZhcygpO1xuICB9XG5cbiAgZGVsZXRlQ2FudmFzKCkge1xuICAgIHRoaXMuX3JlbW92ZUNhbnZhcy5yZW1vdmUodGhpcy5pZCk7XG4gICAgdGhpcy5yZWRyYXdDYW52YXMoKTtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuICh0aGlzLndpZHRoIC0gdGhpcy5wcm9wcy53aWR0aCkgLyAyO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiAoKHRoaXMuaGVpZ2h0IC0gdGhpcy5wcm9wcy5oZWlnaHQpIC8gMiAtICh0aGlzLmFjdGl2ZSA/IDM0IDogMCkpO1xuICB9XG5cbiAgcmVzaXplKCRldmVudCkge1xuICAgIHRoaXMucHJvcHMud2lkdGggKz0gJGV2ZW50O1xuICAgIHRoaXMucHJvcHMuaGVpZ2h0ICs9ICRldmVudDtcbiAgfVxuXG4gIGNsb3NlQ29sb3JQaWNrZXJCRygkZXZlbnQpIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyQkcgPSAhJGV2ZW50O1xuICB9XG5cbiAgY2xvc2VDb2xvclBpY2tlckMoJGV2ZW50KSB7XG4gICAgdGhpcy5jb2xvclBpY2tlckMgPSAhJGV2ZW50O1xuICB9XG59XG4iXX0=