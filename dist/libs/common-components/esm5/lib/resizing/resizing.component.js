/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as jquery from "jquery";
import { Utils } from "../file.service";
/** @type {?} */
var $ = jquery;
var ResizingComponent = /** @class */ (function () {
    function ResizingComponent() {
        this.se = false;
        this.ne = false;
        this.sw = false;
        this.nw = false;
        this.SE = 'se';
        this.NE = 'ne';
        this.SW = 'sw';
        this.NW = 'nw';
        this.offsetX = new EventEmitter();
        this.offsetY = new EventEmitter();
        this.offsetTop = new EventEmitter();
        this.offsetLeft = new EventEmitter();
        this.release = new EventEmitter();
        this.grab = false;
    }
    /**
     * @return {?}
     */
    ResizingComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var elSE = $(this.getElementId(this.SE));
        /** @type {?} */
        var elNW = $(this.getElementId(this.NW));
        if (this.init && elSE && elNW && elSE.offset() && elNW.offset()) {
            /** @type {?} */
            var width_1 = elSE.offset().left - elNW.offset().left;
            /** @type {?} */
            var height_1 = elSE.offset().top - elNW.offset().top;
            while (width_1 >= this.pageWidth || height_1 >= this.pageHeight) {
                width_1 = width_1 / 2;
                height_1 = height_1 / 2;
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.offsetX.emit(width_1);
                _this.offsetY.emit(height_1);
            }), 100);
        }
    };
    /**
     * @return {?}
     */
    ResizingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.catchUp = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // ff
        $event.preventDefault();
        if ($event.dataTransfer) { // ff
            $event.dataTransfer.setData('text', 'foo');
        }
        this.grab = true;
        this.oldPosition = Utils.getMousePosition($event);
    };
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.resize = /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    function ($event, el) {
        if (!this.grab) {
            return;
        }
        /** @type {?} */
        var position = Utils.getMousePosition($event);
        if (position.x === 0 && position.y === 0) {
            return;
        }
        /** @type {?} */
        var notSW = this.NE === el || this.NW === el;
        /** @type {?} */
        var notNE = this.SW === el || this.NW === el;
        this.setOffsets(position, notNE, notSW);
        if (notSW) {
            this.offsetTop.emit(position.y - this.oldPosition.y);
        }
        if (notNE) {
            this.offsetLeft.emit(position.x - this.oldPosition.x);
        }
        this.oldPosition = position;
    };
    /**
     * @private
     * @param {?} position
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    ResizingComponent.prototype.setOffsets = /**
     * @private
     * @param {?} position
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (position, x, y) {
        /** @type {?} */
        var offsetX = x ? this.oldPosition.x - position.x : position.x - this.oldPosition.x;
        /** @type {?} */
        var offsetY = y ? this.oldPosition.y - position.y : position.y - this.oldPosition.y;
        this.offsetX.emit(offsetX);
        this.offsetY.emit(offsetY);
    };
    /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.end = /**
     * @param {?} $event
     * @param {?} el
     * @return {?}
     */
    function ($event, el) {
        // ff
        this.resize($event, el);
        this.release.emit(true);
        this.grab = false;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.start = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.drop($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ResizingComponent.prototype.drop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    ResizingComponent.prototype.getElementId = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return "#" + el + "-" + this.id;
    };
    ResizingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-resizing',
                    template: "<div class=\"ui-resizable-handle se-resize\" id=\"se-{{id}}\" *ngIf=\"se\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, SE)\" (dragend)=\"end($event, SE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n      (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SE)\" (panend)=\"end($event, SE)\"></div>\r\n\r\n<div class=\"ui-resizable-handle ne-resize\" id=\"ne-{{id}}\" *ngIf=\"ne\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, NE)\" (dragend)=\"end($event, NE)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NE)\" (panend)=\"end($event, NE)\"></div>\r\n\r\n<div class=\"ui-resizable-handle sw-resize\" id=\"sw-{{id}}\" *ngIf=\"sw\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, SW)\" (dragend)=\"end($event, SW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, SW)\" (panend)=\"end($event, SW)\"></div>\r\n\r\n<div class=\"ui-resizable-handle nw-resize\" id=\"nw-{{id}}\" *ngIf=\"nw\" [draggable]=\"true\" (dragover)=\"start($event)\"\r\n     (drag)=\"resize($event, NW)\" (dragend)=\"end($event, NW)\" (dragstart)=\"catchUp($event)\" (drop)=\"drop($event)\"\r\n     (panstart)=\"catchUp($event)\" (panmove)=\"resize($event, NW)\" (panend)=\"end($event, NW)\"></div>\r\n",
                    styles: [".ui-resizable-handle{background-color:#679ffa;width:8px;height:8px;border-radius:100%;position:absolute;font-size:.1px;display:block}.se-resize{bottom:-5px;right:-5px;cursor:se-resize}.ne-resize{top:-5px;right:-5px;cursor:ne-resize}.sw-resize{bottom:-5px;left:-5px;cursor:sw-resize}.nw-resize{top:-5px;left:-5px;cursor:nw-resize}@media (max-width:1037px){.ui-resizable-handle{width:12px;height:12px}}"]
                }] }
    ];
    /** @nocollapse */
    ResizingComponent.ctorParameters = function () { return []; };
    ResizingComponent.propDecorators = {
        init: [{ type: Input }],
        id: [{ type: Input }],
        se: [{ type: Input }],
        ne: [{ type: Input }],
        sw: [{ type: Input }],
        nw: [{ type: Input }],
        pageWidth: [{ type: Input }],
        pageHeight: [{ type: Input }],
        offsetX: [{ type: Output }],
        offsetY: [{ type: Output }],
        offsetTop: [{ type: Output }],
        offsetLeft: [{ type: Output }],
        release: [{ type: Output }]
    };
    return ResizingComponent;
}());
export { ResizingComponent };
if (false) {
    /** @type {?} */
    ResizingComponent.prototype.init;
    /** @type {?} */
    ResizingComponent.prototype.id;
    /** @type {?} */
    ResizingComponent.prototype.se;
    /** @type {?} */
    ResizingComponent.prototype.ne;
    /** @type {?} */
    ResizingComponent.prototype.sw;
    /** @type {?} */
    ResizingComponent.prototype.nw;
    /** @type {?} */
    ResizingComponent.prototype.pageWidth;
    /** @type {?} */
    ResizingComponent.prototype.pageHeight;
    /** @type {?} */
    ResizingComponent.prototype.SE;
    /** @type {?} */
    ResizingComponent.prototype.NE;
    /** @type {?} */
    ResizingComponent.prototype.SW;
    /** @type {?} */
    ResizingComponent.prototype.NW;
    /** @type {?} */
    ResizingComponent.prototype.offsetX;
    /** @type {?} */
    ResizingComponent.prototype.offsetY;
    /** @type {?} */
    ResizingComponent.prototype.offsetTop;
    /** @type {?} */
    ResizingComponent.prototype.offsetLeft;
    /** @type {?} */
    ResizingComponent.prototype.release;
    /**
     * @type {?}
     * @private
     */
    ResizingComponent.prototype.grab;
    /**
     * @type {?}
     * @private
     */
    ResizingComponent.prototype.oldPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDOztJQUVoQyxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTZCRTtRQXBCUyxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ1gsT0FBRSxHQUFHLEtBQUssQ0FBQztRQUNYLE9BQUUsR0FBRyxLQUFLLENBQUM7UUFDWCxPQUFFLEdBQUcsS0FBSyxDQUFDO1FBR3BCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsT0FBRSxHQUFHLElBQUksQ0FBQztRQUNWLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFQSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4QyxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFlQzs7WUFkTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztZQUNwQyxJ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QUF3Qzs7aUJBRXpDOzs7Ozt1QkFHRSxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBTUwsTUFBTTswQkFDTixNQUFNOzRCQUNOLE1BQU07NkJBQ04sTUFBTTswQkFDTixNQUFNOztJQW9GVCx3QkFBQztDQUFBLEFBNUdELElBNEdDO1NBdkdZLGlCQUFpQjs7O0lBRTVCLGlDQUF1Qjs7SUFDdkIsK0JBQW9COztJQUNwQiwrQkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsK0JBQW9COztJQUNwQiwrQkFBb0I7O0lBQ3BCLHNDQUEyQjs7SUFDM0IsdUNBQTRCOztJQUM1QiwrQkFBVTs7SUFDViwrQkFBVTs7SUFDViwrQkFBVTs7SUFDViwrQkFBVTs7SUFFVixvQ0FBK0M7O0lBQy9DLG9DQUErQzs7SUFDL0Msc0NBQWlEOztJQUNqRCx1Q0FBa0Q7O0lBQ2xELG9DQUFnRDs7Ozs7SUFFaEQsaUNBQXFCOzs7OztJQUNyQix3Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1yZXNpemluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2l6aW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZXNpemluZy5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNpemluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGluaXQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBzZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5lID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc3cgPSBmYWxzZTtcclxuICBASW5wdXQoKSBudyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBhZ2VXaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHBhZ2VIZWlnaHQ6IG51bWJlcjtcclxuICBTRSA9ICdzZSc7XHJcbiAgTkUgPSAnbmUnO1xyXG4gIFNXID0gJ3N3JztcclxuICBOVyA9ICdudyc7XHJcblxyXG4gIEBPdXRwdXQoKSBvZmZzZXRYID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIG9mZnNldFkgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgb2Zmc2V0VG9wID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIG9mZnNldExlZnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVsZWFzZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBncmFiID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBvbGRQb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsU0UgPSAkKHRoaXMuZ2V0RWxlbWVudElkKHRoaXMuU0UpKTtcclxuICAgIGNvbnN0IGVsTlcgPSAkKHRoaXMuZ2V0RWxlbWVudElkKHRoaXMuTlcpKTtcclxuICAgIGlmICh0aGlzLmluaXQgJiYgZWxTRSAmJiBlbE5XICYmIGVsU0Uub2Zmc2V0KCkgJiYgZWxOVy5vZmZzZXQoKSkge1xyXG4gICAgICBsZXQgd2lkdGggPSBlbFNFLm9mZnNldCgpLmxlZnQgLSBlbE5XLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgIGxldCBoZWlnaHQgPSBlbFNFLm9mZnNldCgpLnRvcCAtIGVsTlcub2Zmc2V0KCkudG9wO1xyXG4gICAgICB3aGlsZSAod2lkdGggPj0gdGhpcy5wYWdlV2lkdGggfHwgaGVpZ2h0ID49IHRoaXMucGFnZUhlaWdodCkge1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGggLyAyO1xyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCAvIDI7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRYLmVtaXQod2lkdGgpO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WS5lbWl0KGhlaWdodCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGNhdGNoVXAoJGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIC8vIGZmXHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICgkZXZlbnQuZGF0YVRyYW5zZmVyKSB7IC8vIGZmXHJcbiAgICAgICRldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdmb28nKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ3JhYiA9IHRydWU7XHJcbiAgICB0aGlzLm9sZFBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCRldmVudDogRHJhZ0V2ZW50LCBlbDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMuZ3JhYikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgIGlmIChwb3NpdGlvbi54ID09PSAwICYmIHBvc2l0aW9uLnkgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm90U1cgPSB0aGlzLk5FID09PSBlbCB8fCB0aGlzLk5XID09PSBlbDtcclxuICAgIGNvbnN0IG5vdE5FID0gdGhpcy5TVyA9PT0gZWwgfHwgdGhpcy5OVyA9PT0gZWw7XHJcbiAgICB0aGlzLnNldE9mZnNldHMocG9zaXRpb24sIG5vdE5FLCBub3RTVyk7XHJcbiAgICBpZiAobm90U1cpIHtcclxuICAgICAgdGhpcy5vZmZzZXRUb3AuZW1pdChwb3NpdGlvbi55IC0gdGhpcy5vbGRQb3NpdGlvbi55KTtcclxuICAgIH1cclxuICAgIGlmIChub3RORSkge1xyXG4gICAgICB0aGlzLm9mZnNldExlZnQuZW1pdChwb3NpdGlvbi54IC0gdGhpcy5vbGRQb3NpdGlvbi54KTtcclxuICAgIH1cclxuICAgIHRoaXMub2xkUG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T2Zmc2V0cyhwb3NpdGlvbiwgeDogYm9vbGVhbiwgeTogYm9vbGVhbikge1xyXG4gICAgY29uc3Qgb2Zmc2V0WCA9IHggPyB0aGlzLm9sZFBvc2l0aW9uLnggLSBwb3NpdGlvbi54IDogcG9zaXRpb24ueCAtIHRoaXMub2xkUG9zaXRpb24ueDtcclxuICAgIGNvbnN0IG9mZnNldFkgPSB5ID8gdGhpcy5vbGRQb3NpdGlvbi55IC0gcG9zaXRpb24ueSA6IHBvc2l0aW9uLnkgLSB0aGlzLm9sZFBvc2l0aW9uLnk7XHJcbiAgICB0aGlzLm9mZnNldFguZW1pdChvZmZzZXRYKTtcclxuICAgIHRoaXMub2Zmc2V0WS5lbWl0KG9mZnNldFkpO1xyXG4gIH1cclxuXHJcbiAgZW5kKCRldmVudDogRHJhZ0V2ZW50LCBlbDogc3RyaW5nKSB7XHJcbiAgICAvLyBmZlxyXG4gICAgdGhpcy5yZXNpemUoJGV2ZW50LCBlbCk7XHJcbiAgICB0aGlzLnJlbGVhc2UuZW1pdCh0cnVlKTtcclxuICAgIHRoaXMuZ3JhYiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIHRoaXMuZHJvcCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZHJvcCgkZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEVsZW1lbnRJZChlbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gXCIjXCIgKyBlbCArIFwiLVwiICsgdGhpcy5pZDtcclxuICB9XHJcbn1cclxuIl19